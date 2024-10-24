"use client";

import { contact } from "@/actions/contact";
import EmailIcon from "../../icons/Email";
import { useFormState, useFormStatus } from "react-dom";
import Loader from "../../loader";

export default function ContactForm({ userEmail }: { userEmail?: string }) {
  const [state, action] = useFormState(contact, undefined);

  return (
    <form action={action} className="flex flex-col gap-3 mt-5">
      {state && (
        <p
          className={`text-xs text-${
            state.success ? "green" : "red"
          } text-center py-2`}
        >
          {state.success ? "Mensaje enviado correctamente" : state.error}
        </p>
      )}
      <label htmlFor="email" className="w-full font-MontserratLight text-sm ">
        Email:
      </label>
      <div
        className={`flex flex-row place-items-center justify-start py-2 px-2 gap-2 bg-gray-200  rounded-md border border-gray-300`}
      >
        <EmailIcon width={20} height={20} fill="gray" />
        <input
          required
          id="email"
          name="email"
          value={userEmail}
          className="bg-gray-200 flex-auto  text-sm"
        />
      </div>
      <label htmlFor="nombre" className="w-full font-MontserratLight text-sm ">
        Nombre: (opcional)
      </label>
      <div
        className={`flex flex-row place-items-center justify-start py-2 px-2 gap-2 bg-gray-200  rounded-md border border-gray-300`}
      >
        <input
          id="name"
          name="name"
          className="bg-gray-200 flex-auto  text-sm"
        />
      </div>
      <label htmlFor="nombre" className="w-full font-MontserratLight text-sm ">
        Asunto: (opcional)
      </label>
      <div
        className={`flex flex-row place-items-center justify-start py-2 px-2 gap-2 bg-gray-200  rounded-md border border-gray-300`}
      >
        <input
          id="subject"
          name="subject"
          className="bg-gray-200 flex-auto  text-sm"
        />
      </div>
      <label htmlFor="mensaje" className="w-full font-MontserratLight text-sm ">
        Mensaje:
      </label>
      <textarea
        required
        id="message"
        name="message"
        className="bg-gray-200  rounded-md border border-gray-200 text-sm p-2 h-44"
      ></textarea>
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
      {pending ? <Loader /> : "Enviar"}
    </button>
  );
}
