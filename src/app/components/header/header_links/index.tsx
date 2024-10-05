"use client";

import Link from "next/link";
import AccountIcon from "../../icons/Account";
import CartIcon from "../../icons/Cart";
import HeartIcon from "../../icons/Heart";
import UserIcon from "../../icons/User";
import AccountForm from "../../sections/account";
import LoginOrSignupForm from "../../sections/login_signup";
import Sidebar from "../../sidebar";
import { SubjectFromToken } from "@/app/utils/interfaces";
import { useCart } from "@/app/context/CartContextProvider";
import { useState } from "react";

export default function HeaderLinks({ user }: { user: any }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { totalItems } = useCart();
  return (
    <div
      id="user-and-cart-icon-container"
      className="flex flex-row justify-between place-items-center sm:gap-8 gap-5 sm:ml-3 "
    >
      <button onClick={() => setIsModalOpen(true)}>
        <div className="flex flex-row place-items-center sm:gap-2">
          {user ? (
            <>
              <AccountIcon width={25} height={25} fill="black" />
              <p className="text-sm sm:block hidden ">Mi cuenta</p>
            </>
          ) : (
            <>
              <UserIcon width={25} height={25} fill="black" />
              <p className="text-sm sm:block hidden">Ingresar</p>
            </>
          )}
        </div>
      </button>
      <div className="flex flex-row place-items-center gap-4">
        <Link href="/favorites">
          <HeartIcon width={25} height={25} fill="none" stroke="black" />
        </Link>
        <Link href="/cart" className="relative">
          <CartIcon width={25} height={25} fill="black" />
          {totalItems > 0 && (
            <p
              className="absolute -top-3 right-0
                              font-MontserratBold text-sm text-pink
                              w-4 h-4 rounded-full text-center bg-background "
            >
              {totalItems}
            </p>
          )}
        </Link>
      </div>
      <div
        id="hamburguer-container"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="sm:hidden flex flex-row  place-items-center"
      >
        <div className="tham tham-e-squeeze tham-w-8">
          <div className="tham-box">
            <div className="tham-inner bg-black" />
          </div>
        </div>
      </div>
      {user ? (
        <AccountForm
          onClose={() => {
            setIsModalOpen(false);
          }}
          isOpen={isModalOpen}
        />
      ) : (
        <LoginOrSignupForm
          onClose={() => {
            setIsModalOpen(false);
          }}
          isOpen={isModalOpen}
        />
      )}
      <Sidebar isOpen={isSidebarOpen} />
    </div>
  );
}