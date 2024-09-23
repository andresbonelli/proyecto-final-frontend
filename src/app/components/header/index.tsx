import Logo from "../icons/Logo";
import Link from "next/link";
import SearchIcon from "../icons/Search";
import MicIcon from "../icons/Mic";
import { colors } from "../../constants";
import UserIcon from "../icons/User";
import HeartIcon from "../icons/Heart";
import CartIcon from "../icons/Cart";

export default function Header() {
  return (
    <header className="bg-background flex flex-row xl:px-60 lg:px-40 md:px-20 px-5 sm:py-8 py-5 text-black ">
      <div className="flex flex-row justify-between w-full gap-3 ">
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
        {/* Search Bar */}
        <div
          id="searchbar-container"
          className="flex flex-row place-items-center w-auto "
        >
          <div className="flex flex-row place-items-center px-4 py-3 gap-2 rounded-lg bg-white shadow-md overflow-hidden w-auto  ">
            <SearchIcon width={17} height={17} fill={colors.grey} />

            <input
              type="email"
              placeholder="Buscar productos..."
              className="lg:w-96 w-auto outline-none bg-transparent text-grey text-sm"
            />
            <a href="/">
              <MicIcon width={20} height={20} fill={colors.grey} />
            </a>
          </div>
        </div>
        {/* Right Side Links */}
        <div
          id="user-and-cart-icon-container"
          className="sm:flex hidden flex-row justify-between place-items-center w-auto gap-8 ml-3 "
        >
          <a href="/">
            <div className="flex flex-row place-items-center gap-2">
              <UserIcon width={25} height={25} fill="black" />
              <p className="text-sm ">Ingresar</p>
            </div>
          </a>
          <div className="flex flex-row place-items-center gap-4">
            <Link href="/favorites">
              <HeartIcon width={25} height={25} fill="none" stroke="black" />
            </Link>
            <Link href="/cart">
              <CartIcon width={25} height={25} fill="black" />
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
      </div>
    </header>
  );
}
