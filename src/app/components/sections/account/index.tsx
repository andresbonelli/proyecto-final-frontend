"use client";

import { useState } from "react";
import ArrowIcon from "../../icons/Arrow";
import { colors } from "@/app/constants";
import Loader from "../../loader";

export default function AccountForm({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: Function;
}) {
  return (
    <aside
      className={`absolute top-0 bg-background px-12 shadow-2xl
        flex flex-col place-content-center
        min-w-fit min-h-screen 
        transition-transform ease-in-out duration-300 ${
          isOpen ? "right-0 translate-x-0 " : "-right-full translate-x-full "
        }`}
    >
      <div
        id="account-form-container"
        className="relative flex flex-col justify-between min-w-96 py-6 px-6 gap-2 bg-white"
      >
        <button
          onClick={() => {
            onClose();
          }}
          className="absolute top-5 left-5"
        >
          <ArrowIcon width={40} height={40} fill={colors.softBlue} />
        </button>
      </div>
    </aside>
  );
}
