"use client";

import { useFormState, useFormStatus } from "react-dom";
import { forgotPassword } from "@/actions/forgotPassword";
import EmailIcon from "../../icons/Email";
import Loader from "../../loader";

export function ForgotPasswordForm() {
  const [state, action] = useFormState(forgotPassword, undefined);

  return (
    <form action={action} className=" flex flex-col justify-between gap-5">
      <p className="w-60 place-self-center text-xs text-green text-center text-wrap py-2">
        {state?.success ?? ""}
      </p>
      <p className="text-xs text-red text-center py-2">{state?.error ?? ""}</p>
      <div
        className={`flex flex-row place-items-center justify-start py-2 px-2 gap-2 bg-gray-200  rounded-md border border-gray-300`}
      >
        <EmailIcon width={25} height={25} fill="gray" />
        <input
          id="email"
          name="email"
          placeholder="Email"
          className="bg-gray-200 flex-auto  text-sm"
        />
      </div>
      {state?.errors?.email && (
        <p className="text-xs text-red">{state.errors.email}</p>
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
      {pending ? <Loader /> : "Continuar"}
    </button>
  );
}
