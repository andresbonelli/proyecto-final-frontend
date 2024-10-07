"use client";

import { verify } from "@/app/actions/verify";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function FerifyUser() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const email = searchParams.get("email");

  useEffect(() => {
    if (token && email) {
      const actionResult = verify({ token: token, email: email });
    }
  }, [token, email]);

  return (
    <div className="w-full flex flex-col justify-start items-center py-10">
      <h1 className="font-MontserratBold text-xl text-center mb-5">
        Verifying User...
      </h1>
      {token && email ? (
        <p>We are verifying your account...</p>
      ) : (
        <p>Missing token or email.</p>
      )}
    </div>
  );
}
