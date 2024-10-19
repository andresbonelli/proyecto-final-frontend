"use client";

import { deleteProduct } from "@/actions/admin";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function DeleteProductForm({productID}: {productID: string}) {
    const router = useRouter();
    const [status, setStatus] = useState("idle");
    const [message, setMessage] = useState("");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();
      setStatus("pending");
      try {
        const result = await deleteProduct(productID);
        if (result.success) {
          setStatus("success");
          setMessage("Se ha eliminado el producto");
          router.push("/dashboard/products");
        }
      } catch (error) {
        setStatus("error");
        setMessage((error as Error).message);
      }
    }

    return (
      <form onSubmit={handleSubmit}>
        {message && (
          <p
            className={`text text-${
              status === "success" ? "green" : "red"
            } text-center py-2`}
          >
            {message}
          </p>
        )}
        <div className="flex flex-row gap-5">
          <button
            type="submit"
            className="w-44 bg-red hover:bg-redder text-white py-2 px-4 rounded-md font-MontserratSemibold"
          >
            eliminar definitivamente
          </button>
          <Link
            href={`/dashboard/products/edit/${productID}`}
            className="w-44 text-sm flex flex-col justify-center items-center font-MontserratSemibold bg-softBlue hover:bg-blue text-white p-2  rounded-md"
          >
            Editar
          </Link>
        </div>
      </form>
    );
}