"use client";

import { resetPassword } from "@/actions/resetPassword";
import EyeIcon from "@/app/components/icons/Eye";
import LockIcon from "@/app/components/icons/Lock";
import Loader from "@/app/components/loader";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";

export default function ResetPassword() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const email = searchParams.get("email");
  const [state, action] = useFormState(resetPassword, undefined);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full flex flex-col justify-start items-center py-10">
      <h1 className="font-MontserratBold text-xl text-center mb-5">
        Reset password
      </h1>
      <p className="text-center text-sm text-wrap">
        Please enter a new password below.
      </p>
      {token && email ? (
        <form action={action} className=" flex flex-col justify-between gap-5">
          <p className="w-60 place-self-center text-xs text-green text-center text-wrap py-2">
            {state?.success ?? ""}
          </p>
          <p className="text-xs text-red text-center py-2">
            {state?.error ?? ""}
          </p>
          <div
            className={`flex flex-row place-items-center justify-between py-2 px-2 gap-2 bg-gray-200  rounded-md border border-gray-300`}
          >
            <LockIcon width={20} height={20} fill="gray" />
            <input
              type={showPassword ? "text" : "password"}
              id="newPassword"
              name="newPassword"
              placeholder="new password"
              className="bg-gray-200 flex-auto text-sm"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              <EyeIcon width={20} height={20} fill="gray" />
            </button>
          </div>
          {state?.errors?.newPassword && (
            <div>
              <p className="text-xs text-red">Password must:</p>
              <ul>
                {state.errors.newPassword.map((error: string) => (
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
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              <EyeIcon width={20} height={20} fill="gray" />
            </button>
          </div>
          {state?.errors?.confirmPassword && (
            <p className="text-xs text-red">{state.errors.confirmPassword}</p>
          )}
          <input
            id="token"
            name="token"
            value={token}
            className="hidden"
          ></input>
          <input
            id="email"
            name="email"
            value={email}
            className="hidden"
          ></input>
          <SubmitButton />
        </form>
      ) : (
        <p>Missing token or email.</p>
      )}
    </div>
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
      {pending ? <Loader /> : "Reset Password"}
    </button>
  );
}
