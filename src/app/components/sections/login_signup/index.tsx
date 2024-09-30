"use client";

import { useState } from "react";
import ArrowIcon from "../../icons/Arrow";
import { colors } from "@/app/utils/constants";
import Loader from "../../loader";
import { RegisterForm } from "../../forms/register";
import { LoginForm } from "../../forms/login";

export default function LoginOrSignupForm({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: Function;
}) {
  const [formType, setFormType] = useState("Login");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <aside
      className={`absolute top-0 
        bg-background px-12 shadow-2xl
        flex flex-col place-content-center
        min-w-fit min-h-screen 
        transition-transform ease-in-out duration-300 ${
          isOpen ? "right-0 translate-x-0 " : "-right-full translate-x-full "
        }`}
    >
      <div
        id="login-form-container"
        className="relative flex flex-col justify-between min-w-96 py-6 px-6 gap-2 bg-white shadow-lg"
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
        <h1 className="font-MontserratBold text-xl text-center">{formType}</h1>

        {formType === "Password Reset" ? (
          <p className="text-center text-sm text-wrap">
            Please enter your account email.<br></br>If your account is active
            you will
            <br></br>
            get a link to set a new password.
          </p>
        ) : (
          <p className="text-center">Access to our dashboard</p>
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
              forgot password?
            </button>
            <p className="text-center mt-5">
              "Don't have an account yet?"
              {"  "}
              <button onClick={() => setFormType("Register")}>
                <strong>Register</strong>
              </button>
            </p>
          </>
        )}
        {formType === "Register" && (
          <>
            <RegisterForm />
            <p className="text-center  mt-5">
              "Have an account?"
              {"  "}
              <button onClick={() => setFormType("Login")}>
                <strong>Login</strong>
              </button>
            </p>
          </>
        )}
        {formType === "Password Reset" && (
          <button onClick={() => setFormType("Login")}>
            Back to <strong>login</strong>
          </button>
        )}
      </div>
    </aside>
  );
}
