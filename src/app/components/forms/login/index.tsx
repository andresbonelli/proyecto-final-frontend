"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useState } from "react";
import { login } from "@/actions/auth";
import UserIcon from "../../icons/User";
import EyeIcon from "../../icons/Eye";
import LockIcon from "../../icons/Lock";
import Loader from "../../loader";

export function LoginForm() {
  const [state, action] = useFormState(login, undefined);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form action={action} className="flex flex-col justify-between gap-5">
      <p className="text-xs text-red text-center py-2">{state?.error ?? ""}</p>
      <div
        className={`flex flex-row place-items-center justify-start py-2 px-2 gap-2 bg-gray-200  rounded-md border border-gray-300`}
      >
        <UserIcon width={25} height={25} fill="gray" />
        <input
          id="usernameOrEmail"
          name="usernameOrEmail"
          placeholder="Nombre de usuario o Email"
          className="bg-gray-200 flex-auto  text-sm"
        />
      </div>
      {state?.errors?.usernameOrEmail && (
        <p className="text-xs text-red">{state.errors.usernameOrEmail}</p>
      )}
      <div
        className={`flex flex-row place-items-center justify-between py-2 px-2 gap-2 bg-gray-200  rounded-md border border-gray-300`}
      >
        <LockIcon width={20} height={20} fill="gray" />
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          name="password"
          placeholder="contraseña"
          className="bg-gray-200 flex-auto text-sm"
        />
        <button type="button" onClick={() => setShowPassword(!showPassword)}>
          <EyeIcon width={20} height={20} fill="gray" />
        </button>
      </div>
      {state?.errors?.password && (
        <p className="text-xs text-red">{state.errors.password}</p>
      )}
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
      {pending ? <Loader /> : "Ingresar"}
    </button>
  );
}
