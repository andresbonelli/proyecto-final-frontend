"use server";

import { RegisterFormSchema, FormState } from "@/app/lib/definitions";
import api from "../services/api";
import { RegisterUserDto } from "../utils/interfaces";

export async function signup(state: FormState, formData: FormData) {
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

  await api
    .post("/auth/register", registerData)
    .then((res) => {
      if (res.status === 201) {
        return res.data["message"];
      } else
        return {
          errors: { backend: [res.data["detail"]] },
        };
    })
    .catch(function (error) {
      if (error.response) {
        return {
          errors: { backend: [error.response.data["detail"]] },
        };
      }
    });
}
