"use client";

import { verify } from "@/app/actions/verify";
import Loader from "@/app/components/loader";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function FerifyUser() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const email = searchParams.get("email");
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const verifyUser = async () => {
      if (token && email) {
        setIsLoading(true);
        const actionResult = await verify({ token, email });

        if (actionResult.success) {
          setMessage(actionResult.success);
        } else {
          setMessage(actionResult.error || "Verification failed.");
        }
      } else {
        setMessage("Missing token or email.");
      }
      setIsLoading(false);
    };

    verifyUser();
  }, [token, email]);

  return (
    <div className="w-full flex flex-col justify-start items-center py-10">
      <h1 className="font-MontserratBold text-xl text-center mb-5">
        Verifying User...
      </h1>
      {isLoading ? (
        <div className="flex flex-col justify-between items-center gap-5">
          <p>We are verifying your account...</p>
          <Loader />
        </div>
      ) : (
        <p>{message}</p>
      )}
    </div>
  );
}
