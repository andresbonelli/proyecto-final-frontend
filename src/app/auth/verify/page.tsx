"use client";

import { verify } from "@/actions/verify";
import SuccessIcon from "@/app/components/icons/Success";
import X from "@/app/components/icons/X";
import Loader from "@/app/components/loader";
import { colors } from "@/utils/constants";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function FerifyUser() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const email = searchParams.get("email");

  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    const verifyUser = async () => {
      if (token && email) {
        setStatus("loading");
        const actionResult = await verify({ token, email });

        if (actionResult.success) {
          setStatus("success");
          setMessage(actionResult.success);
        } else {
          setStatus("error");
          setMessage(
            actionResult.error ||
              "La verificación falló. Podes contactarte con nosotros en la sección de 'ayuda'."
          );
        }
      } else {
        setStatus("error");
        setMessage("Link no válido.");
      }
    };

    verifyUser();
  }, []);

  return (
    <div className="w-full flex flex-col justify-start items-center py-10">
      <h1 className="font-MontserratBold text-xl text-center mb-5">
        Verificando Usuario...
      </h1>
      {status === "loading" ? (
        <div className="flex flex-col justify-between items-center gap-5">
          <p>Estamos activando tu cuenta...</p>
          <Loader />
        </div>
      ) : (
        <p>{message}</p>
      )}
      {status === "error" && <X size={150} fill={colors.red} />}
      {status === "success" && (
        <SuccessIcon
          width={150}
          height={150}
          fill={colors.red}
          stroke="white"
        />
      )}
    </div>
  );
}
