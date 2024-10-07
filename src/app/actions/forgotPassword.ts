"use server";

import { ForgotPasswordFormSchema } from "@/app/lib/definitions";
import api from "../services/api";

export async function forgotPassword(state: any, formData: FormData) {
  const validatedFields = ForgotPasswordFormSchema.safeParse({
    email: formData.get("email"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  const email = validatedFields.data.email;
  try {
    const res = await api.post(`/auth/forgot-password?email=${email}`);
    if (res.status === 200) {
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
