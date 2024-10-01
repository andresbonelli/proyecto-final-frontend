"use client";

import { useState } from "react";
import { useCart } from "@/app/context/CartContextProvider";
import Link from "next/link";

import LoginOrSignupForm from "../sections/login_signup";
import AccountForm from "../sections/account";
import Navbar from "../navbar";

import SearchBar from "../search_bar";
import AccountIcon from "../icons/Account";
import HeartIcon from "../icons/Heart";
import Logo from "../icons/Logo";
import UserIcon from "../icons/User";
import CartIcon from "../icons/Cart";

import { colors } from "../../utils/constants";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isloggedIn, setIsLoggedIn] = useState(false);
  const { totalItems } = useCart();

  return (
    <header className="fixed top-0 w-full z-50">
      <div
        id="header-container"
        className="bg-background
                   flex flex-row justify-between place-items-center
                   w-full gap-3
                   xl:px-60 lg:px-40 md:px-20 px-5 sm:py-8 py-5"
      >
        {/* LOGO */}
        <Link href="/">
          <div
            id="brand-container"
            className="flex flex-row place-items-center sm:w-70 w-auto gap-5 "
          >
            <Logo width={50} height={50} fill={colors.blue} />
            <div className="sm:flex flex-col text-left hidden text-black ">
              <p className=" lg:text-2xl text-sm font-MontserratBold">
                E-Commerce
              </p>
              <p className="text-xs font-Montserrat">By Bootcamps 3.0</p>
            </div>
          </div>
        </Link>
        <SearchBar />
        {/* Right Side Links */}
        <div
          id="user-and-cart-icon-container"
          className="sm:flex hidden flex-row justify-between place-items-center w-auto gap-8 ml-3 "
        >
          <button onClick={() => setIsModalOpen(true)}>
            <div className="flex flex-row place-items-center gap-2">
              {isloggedIn ? (
                <>
                  <AccountIcon width={25} height={25} fill="black" />
                  <p className="text-sm ">Mi cuenta</p>
                </>
              ) : (
                <>
                  <UserIcon width={25} height={25} fill="black" />
                  <p className="text-sm ">Ingresar</p>
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
        </div>
        <div
          id="hamburguer-container"
          className="sm:hidden flex flex-row  place-items-center"
        >
          <div className="tham tham-e-squeeze tham-w-6">
            <div className="tham-box">
              <div className="tham-inner bg-grey" />
            </div>
          </div>
        </div>

        {isloggedIn ? (
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
      </div>
      <Navbar />
    </header>
  );
}
