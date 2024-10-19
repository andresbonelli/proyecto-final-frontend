"use server";

import { ResetPasswordFormSchema } from "@/lib/definitions";
import api from "../services/api";

export async function resetPassword(state: any, formData: FormData) {
  const validatedFields = ResetPasswordFormSchema.safeParse({
    newPassword: formData.get("newPassword"),
    confirmPassword: formData.get("confirmPassword"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  const newPassword = validatedFields.data.newPassword;
  const email = formData.get("email");
  const token = formData.get("token");
  try {
    const res = await api.put("/auth/reset-password", {
      token: token,
      email: email,
      new_password: newPassword,
    });
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
