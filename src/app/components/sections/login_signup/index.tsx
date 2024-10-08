"use client";

import { useState } from "react";
import ArrowIcon from "../../icons/Arrow";
import { colors } from "@/app/utils/constants";
import { RegisterForm } from "../../forms/register";
import { LoginForm } from "../../forms/login";
import { ForgotPasswordForm } from "../../forms/forgot_password";

export default function LoginOrSignupForm({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: Function;
}) {
  const [formType, setFormType] = useState("Login");

  return (
    <aside
      className={`absolute top-0 z-50
        bg-background sm:px-12 px-5 shadow-2xl
        flex flex-col place-content-center
        w-screen sm:w-1/4 min-h-screen 
        transition-transform ease-in-out duration-300 ${
          isOpen ? "right-0 translate-x-0 " : "-right-full translate-x-full "
        }`}
    >
      <div
        id="login-form-container"
        className="relative flex flex-col justify-between sm:min-w-96 py-6 px-6 gap-2 bg-white shadow-lg"
      >
        <button
          onClick={() => {
            onClose();
            setFormType("Login");
          }}
          className="absolute top-5 left-5"
        >
          <ArrowIcon width={40} height={40} fill={colors.softBlue} />
        </button>
        <h1 className="font-MontserratBold text-xl text-center">
          {formType === "Login" && "Ingresar"}
          {formType === "Register" && "Registrarse"}
          {formType === "Password Reset" && "Reestablecer contraseña"}
        </h1>

        {formType === "Password Reset" ? (
          <p className="text-center text-sm text-wrap">
            Ingresá la direccion de email con la que te registraste. Si la
            cuenta está activa, te enviaremos un link para reestablecer la
            contraseña.
          </p>
        ) : (
          <p className="text-center">Entrar al panel de usuario</p>
        )}

        {/* LOGIN/SIGNUP/RESET PASSWORD FORM */}

        {formType === "Login" && (
          <>
            <LoginForm />
            <button
              type="button"
              onClick={() => setFormType("Password Reset")}
              className="w-full text-right text-xs text-red"
            >
              olvidé mi contraseña
            </button>
            <p className="text-center mt-5">
              ¿Aún no estas registrado?
              {"  "}
              <button onClick={() => setFormType("Register")}>
                <strong>Registrarse</strong>
              </button>
            </p>
          </>
        )}
        {formType === "Register" && (
          <>
            <RegisterForm />
            <p className="text-center  mt-5">
              ¿Ya tienes una cuenta?
              {"  "}
              <button onClick={() => setFormType("Login")}>
                <strong>Ingresar</strong>
              </button>
            </p>
          </>
        )}
        {formType === "Password Reset" && (
          <>
            <ForgotPasswordForm />
            <button onClick={() => setFormType("Login")}>
              Volver al <strong>ingreso</strong>
            </button>
          </>
        )}
      </div>
    </aside>
  );
}
