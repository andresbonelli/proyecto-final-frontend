"use server";

import {
  RegisterFormSchema,
  RegisterFormState,
  LoginFormState,
  LoginFormSchema,
} from "@/lib/definitions";
import api from "../services/api";
import { RegisterUserDto } from "../utils/interfaces";
import { LoginDto } from "../utils/interfaces";
import { redirect } from "next/navigation";
import { AxiosResponse } from "axios";
import { createSession, deleteSession } from "../lib/session";
import { cookies } from "next/headers";

export async function signup(
  state: RegisterFormState,
  formData: FormData
): Promise<any> {
  // Validate form fields
  const validatedFields = RegisterFormSchema.safeParse({
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  console.log("form field valid");
  const registerData: RegisterUserDto = {
    username: validatedFields.data.username,
    email: validatedFields.data.email,
    password: validatedFields.data.password,
  };

  try {
    const res = await api.post("/auth/register", registerData);
    if (res.status === 201) {
      return { success: res.data["message"] };
    } else {
      console.error(res.data);
      return { error: res.data };
    }
  } catch (error: any) {
    console.error(error.response.data);
    return { error: error.response.data.detail };
  }
}

export async function login(state: LoginFormState, formData: FormData) {
  const validatedFields = LoginFormSchema.safeParse({
    usernameOrEmail: formData.get("usernameOrEmail"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const loginData: LoginDto = {
    input: validatedFields.data.usernameOrEmail,
    password: validatedFields.data.password,
  };

  try {
    const res: AxiosResponse<{ access_token: string; refresh_token: string }> =
      await api.post("/auth/login", loginData);

    if (res.status === 200) {
      console.log(res.data);
      createSession(res.data);
      redirect("/");
    } else {
      console.error(res.data);
      return { error: res.data };
    }
  } catch (error: any) {
    if (error.response) {
      console.error(error.response.data);
      return { error: error.response.data.detail };
    }
  }
}

export async function getUserData(id: string) {
  const cookie = cookies().get("access_token_cookie");
  try {
    const res = await api.get(`/api/Users/${id}`, {
      headers: {
        Authorization: `Bearer ${cookie?.value}`,
      },
    });

    if (res.status === 200) {
      return res.data;
    } else {
      console.error(res.data);
      return { error: res.data };
    }
  } catch (error: any) {
    if (error.response) {
      console.error(error.response.data);
      return { error: error.response.data.detail };
    }
  }
}

export async function logout() {
  deleteSession();
  redirect("/");
}
