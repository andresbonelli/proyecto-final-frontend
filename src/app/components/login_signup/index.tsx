"use client";

import { useState } from "react";
import UserIcon from "../icons/User";
import LockIcon from "../icons/Lock";
import EyeIcon from "../icons/Eye";
import ArrowIcon from "../icons/Arrow";
import { colors } from "@/app/constants";
import { LoginDto, RegisterUserDto } from "@/app/utils/interfaces";
import Loader from "../loader";
import EmailIcon from "../icons/Email";

export default function Login({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: Function;
}) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [errorMessage, setErrorMessage] = useState("error mesg");

  async function onLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    const user: LoginDto = {
      username_or_email: username,
      password: password,
    };
    try {
      alert("loggin in");
    } catch (error) {
      alert(error);
    } finally {
      setIsLoading(false);
      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setErrorMessage("");
    }
  }

  async function onRegister(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage("passwords do not match!");
      return;
    }
    setIsLoading(true);
    const user: RegisterUserDto = {
      username: username,
      email: email,
      password: password,
    };
    try {
      alert("registering");
    } catch (error) {
      alert(error);
    } finally {
      setIsLoading(false);
      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setErrorMessage("");
    }
  }

  async function onForgotPassword(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    try {
      alert("send forgot password email");
    } catch (error) {
      alert(error);
    } finally {
      setIsLoading(false);
      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setErrorMessage("");
    }
  }

  return (
    <aside
      className={`absolute top-0 bg-background px-12 shadow-2xl
        flex flex-col place-content-center
        min-w-fit min-h-screen 
        transition-transform ease-in-out duration-300 ${
          isOpen ? "right-0 translate-x-0 " : "-right-full translate-x-full "
        }`}
    >
      <div
        id="login-form-container"
        className="relative flex flex-col justify-between min-w-96 py-6 px-6 gap-2 bg-white"
      >
        <button
          onClick={() => {
            onClose();
            setIsRegistering(false);
          }}
          className="absolute top-5 left-5"
        >
          <ArrowIcon width={40} height={40} fill={colors.softBlue} />
        </button>
        <h1 className="font-MontserratBold text-xl text-center">
          {forgotPassword
            ? "Password reset"
            : isRegistering
            ? "Register"
            : "Login"}
        </h1>

        {forgotPassword ? (
          <p className="text-center text-sm text-wrap">
            Please enter your account email.<br></br>If your account is active
            you will
            <br></br>
            get a link to set a new password.
          </p>
        ) : (
          <p className="text-center">Access to our dashboard</p>
        )}

        <p
          className={`text-xs ${
            errorMessage ?? "invisible"
          } text-red text-center py-2`}
        >
          {errorMessage}
        </p>
        {/* LOGIN/SIGNUP/RESET PASSWORD FORM */}
        <form
          onSubmit={(e) =>
            forgotPassword
              ? onForgotPassword(e)
              : isRegistering
              ? onRegister(e)
              : onLogin(e)
          }
          className="flex flex-col justify-between gap-5"
        >
          {/* Username input */}
          {!forgotPassword && (
            <div
              className={`flex flex-row place-items-center justify-start py-2 px-2 gap-2 bg-gray-200  rounded-md border border-gray-300`}
            >
              <UserIcon width={25} height={25} fill="gray" />
              <input
                required
                type="text"
                placeholder={
                  isRegistering ? "Username (*)" : "Username or Email"
                }
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="bg-gray-200 flex-auto  text-sm"
              />
            </div>
          )}
          {/* Email input required for register */}
          {(isRegistering || forgotPassword) && (
            <div
              className={`flex flex-row place-items-center justify-start py-2 px-2 gap-2 bg-gray-200  rounded-md border border-gray-300`}
            >
              <EmailIcon width={20} height={20} fill="gray" />
              <input
                required
                type="email"
                placeholder="Email (*)"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-200 flex-auto text-sm"
              />
            </div>
          )}
          {/* Password input */}
          {!forgotPassword && (
            <div
              className={`flex flex-row place-items-center justify-between py-2 px-2 gap-2 bg-gray-200  rounded-md border border-gray-300`}
            >
              <LockIcon width={20} height={20} fill="gray" />
              <input
                required
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-gray-200 flex-auto text-sm"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                <EyeIcon width={20} height={20} fill="gray" />
              </button>
            </div>
          )}
          {/* Pass confirm input */}
          {isRegistering && (
            <div
              className={`flex flex-row place-items-center justify-start py-2 px-2 gap-2 bg-gray-200  rounded-md border border-gray-300`}
            >
              <LockIcon width={20} height={20} fill="gray" />
              <input
                required
                type={showPassword ? "text" : "password"}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="bg-gray-200 flex-auto text-sm"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                <EyeIcon width={20} height={20} fill="gray" />
              </button>
            </div>
          )}
          {!forgotPassword && (
            <>
              {!isRegistering && (
                <button
                  type="button"
                  onClick={() => setForgotPassword(!forgotPassword)}
                  className="text-right text-xs text-red -mt-3"
                >
                  Forgot password?
                </button>
              )}
            </>
          )}
          {isLoading && (
            <div className="flex flex-row justify-center">
              <Loader />
            </div>
          )}
          {/* FORM SUBMIT BTN */}
          <button
            type="submit"
            className="w-full bg-softBlue hover:bg-blue text-white py-2 px-4 rounded-md"
          >
            {forgotPassword ? "Continue" : isRegistering ? "Register" : "Login"}
          </button>
        </form>
        {forgotPassword ? (
          <button onClick={() => setForgotPassword(!forgotPassword)}>
            Back to <strong>login</strong>
          </button>
        ) : (
          <p className="  text-center">
            {isRegistering ? "Have an account?" : "Don't have an account yet?"}
            {"  "}
            <button
              onClick={() =>
                isRegistering ? setIsRegistering(false) : setIsRegistering(true)
              }
            >
              <strong>{isRegistering ? "Login" : "Register"}</strong>
            </button>
          </p>
        )}
      </div>
    </aside>
  );
}
