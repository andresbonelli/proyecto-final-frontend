"use client";

import { createUser } from "@/actions/user";
import UserFormInput from "@/app/components/inputs/user";
import Loader from "@/app/components/loader";
import { NewUserDto, Role } from "@/utils/interfaces";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateNewUser() {
  const router = useRouter();
  const [status, setStatus] = useState("idle");
  const [formData, setFormData] = useState<NewUserDto>({
    username: "",
    email: "",
    password: "",
    role: Role.STAFF,
    is_active: true,
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("pending");
    if (formData.password !== confirmPassword) {
      setStatus("error");
      setMessage("Las contraseñas no coinciden");
      return;
    }
    try {
      console.log(formData, "FORM DATA");
      const result = await createUser(formData);
      if (result.success) {
        setStatus("success");
        setMessage("Se ha creado el usuario");
        setFormData(result.success);
        router.push("/dashboard/users");
      } else {
        setStatus("error");
        setMessage(result.error);
      }
    } catch (error) {
      setStatus("error");
      setMessage((error as Error).message);
    }
  }

  return (
    <div className="flex flex-col justify-start bg-white">
      <div className=" flex flex-col justify-start p-8 gap-8">
        <h1 className="w-full text-left font-MontserratBold text-2xl ">
          Cargar nuevo empleado
        </h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className=" flex flex-col justify-start px-8 pb-8 gap-8 sm:w-1/2"
      >
        {message && (
          <p
            className={`text text-${
              status === "success" ? "green" : "red"
            } text-center py-2`}
          >
            {message}
          </p>
        )}
        <div className="flex flex-col gap-2">
          <UserFormInput
            required
            title="Nombre de usuario"
            name="username"
            type="text"
            formData={formData}
            setFormData={setFormData}
            setMessage={setMessage}
          />
          <UserFormInput
            required
            title="Email"
            name="email"
            type="email"
            formData={formData}
            setFormData={setFormData}
            setMessage={setMessage}
          />

          <UserFormInput
            title="Nombre"
            name="firstname"
            type="text"
            formData={formData}
            setFormData={setFormData}
            setMessage={setMessage}
          />
          <UserFormInput
            title="Apellido"
            name="lastname"
            type="text"
            formData={formData}
            setFormData={setFormData}
            setMessage={setMessage}
          />
          <UserFormInput
            title="Foto de perfil (URL)"
            name="image"
            type="text"
            formData={formData}
            setFormData={setFormData}
            setMessage={setMessage}
          />

          <UserFormInput
            required
            title="Contraseña"
            name="password"
            type="password"
            formData={formData}
            setFormData={setFormData}
            setMessage={setMessage}
          />
          <div className="flex flex-col gap-2">
            <label
              htmlFor="confirmar contraseña"
              className="w-full font-MontserratLight text-sm "
            >
              Confirmar contraseña:
            </label>
            <input
              required
              type="password"
              name="confirm_password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                setMessage("");
              }}
              className="py-2 px-3 rounded-md border border-gray-300"
            />
          </div>
        </div>
        <button
          disabled={status === "pending"}
          type="submit"
          className="w-56 bg-softBlue hover:bg-blue text-white py-2 px-4 rounded-md"
        >
          {status === "pending" ? <Loader /> : "Crear usuario"}
        </button>
      </form>
    </div>
  );
}
