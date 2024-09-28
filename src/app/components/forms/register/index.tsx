"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useState } from "react";
import { signup } from "@/app/actions/auth";
import UserIcon from "../../icons/User";
import EmailIcon from "../../icons/Email";
import EyeIcon from "../../icons/Eye";
import LockIcon from "../../icons/Lock";
import Loader from "../../loader";

export function RegisterForm() {
  const [state, action] = useFormState(signup, undefined);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <form action={action} className="flex flex-col justify-between gap-5">
      <p
        className={`text-xs ${
          errorMessage ?? "invisible"
        } text-red text-center py-2`}
      >
        {errorMessage}
      </p>
      <div
        className={`flex flex-row place-items-center justify-start py-2 px-2 gap-2 bg-gray-200  rounded-md border border-gray-300`}
      >
        <UserIcon width={25} height={25} fill="gray" />
        <input
          id="username"
          name="username"
          placeholder="Username (*)"
          className="bg-gray-200 flex-auto  text-sm"
        />
      </div>
      {state?.errors?.username && (
        <p className="text-xs text-red">{state.errors.username}</p>
      )}
      <div
        className={`flex flex-row place-items-center justify-start py-2 px-2 gap-2 bg-gray-200  rounded-md border border-gray-300`}
      >
        <EmailIcon width={20} height={20} fill="gray" />
        <input
          id="email"
          name="email"
          placeholder="Email (*)"
          className="bg-gray-200 flex-auto  text-sm"
        />
      </div>
      {state?.errors?.email && (
        <p className="text-xs text-red">{state.errors.email}</p>
      )}
      <div
        className={`flex flex-row place-items-center justify-between py-2 px-2 gap-2 bg-gray-200  rounded-md border border-gray-300`}
      >
        <LockIcon width={20} height={20} fill="gray" />
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          name="password"
          placeholder="password"
          className="bg-gray-200 flex-auto text-sm"
        />
        <button type="button" onClick={() => setShowPassword(!showPassword)}>
          <EyeIcon width={20} height={20} fill="gray" />
        </button>
      </div>
      {state?.errors?.password && (
        <div>
          <p className="text-xs text-red">Password must:</p>
          <ul>
            {state.errors.password.map((error: string) => (
              <li className="text-xs text-red" key={error}>
                - {error}
              </li>
            ))}
          </ul>
        </div>
      )}
      <div
        className={`flex flex-row place-items-center justify-between py-2 px-2 gap-2 bg-gray-200  rounded-md border border-gray-300`}
      >
        <LockIcon width={20} height={20} fill="gray" />
        <input
          type={showPassword ? "text" : "password"}
          id="confirmPassword"
          name="confirmPassword"
          placeholder="confirm password"
          className="bg-gray-200 flex-auto text-sm"
        />
        <button type="button" onClick={() => setShowPassword(!showPassword)}>
          <EyeIcon width={20} height={20} fill="gray" />
        </button>
      </div>
      {state?.errors?.confirmPassword && (
        <p className="text-xs text-red">{state.errors.confirmPassword}</p>
      )}
      {/* {isPending && <Loader />} */}
      <SubmitButton />
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      type="submit"
      className="w-full bg-softBlue hover:bg-blue text-white py-2 px-4 rounded-md"
    >
      Register
    </button>
  );
}
