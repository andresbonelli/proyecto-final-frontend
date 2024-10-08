import { z } from "zod";

export const RegisterFormSchema = z
  .object({
    username: z
      .string()
      .min(2, {
        message: "El nombre de usuario debe tener al menos 2 caracteres.",
      })
      .trim(),
    email: z.string().email({ message: "Ingrese un email válido." }).trim(),
    password: z
      .string()
      .min(8, { message: "Contener al menos 8 caracteres" })
      .regex(/[a-zA-Z]/, { message: "Contener al menos una letra." })
      .regex(/[0-9]/, { message: "Contener al menos un número." })
      .trim(),
    confirmPassword: z.string().trim(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden.",
    path: ["confirmPassword"],
  });

export const LoginFormSchema = z.object({
  usernameOrEmail: z
    .string()
    .min(1, { message: "Nombre de usuario o email es requerido." })
    .trim(),
  password: z
    .string()
    .min(1, { message: "La contraseña es requerida." })
    .trim(),
});

export const ForgotPasswordFormSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email es requerido." })
    .email({ message: "Ingrese un email válido." })
    .trim(),
});

export const ResetPasswordFormSchema = z
  .object({
    newPassword: z
      .string()
      .min(8, { message: "Contener al menos 8 caracteres" })
      .regex(/[a-zA-Z]/, { message: "Contener al menos una letra." })
      .regex(/[0-9]/, { message: "Contener al menos un número." })
      .trim(),
    confirmPassword: z.string().trim(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Las contraseñas no coinciden.",
    path: ["confirmPassword"],
  });

export type RegisterFormState =
  | {
      errors?: {
        username?: string[];
        email?: string[];
        password?: string[];
        confirmPassword?: string[];
      };
      message?: string;
    }
  | undefined;

export type LoginFormState =
  | {
      errors?: {
        usernameOrEmail?: string[];
        password?: string[];
      };
      message?: string;
    }
  | undefined;
