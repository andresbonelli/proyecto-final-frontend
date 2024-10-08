import Link from "next/link";
import Navbar from "../navbar";
import SearchBar from "../search_bar";
import Logo from "../icons/Logo";
import { colors } from "../../../utils/constants";
import { cookies } from "next/headers";
import CustomerDashboard from "./customer_dashboard";
import { verifySession as verifySession } from "@/lib/session";
import { getUserData } from "@/actions/auth";

export default async function Header() {
  const cookie = cookies().get("access_token_cookie");

  let user = await verifySession(cookie?.value);
  if (cookie && user) {
    user = await getUserData(user.id, cookie.value);
  }

  return (
    <header className="fixed top-0 w-full z-50 ">
      <div
        id="header-container"
        className="bg-background
                   flex flex-row justify-between place-items-center
                   w-full sm:gap-3 h-[100px]
                   xl:px-60 lg:px-40 md:px-20 px-5 sm:py-8 py-5"
      >
        {/* LOGO */}
        <Link href="/">
          <div
            id="brand-container"
            className="flex flex-row place-items-center  "
          >
            <Logo width={50} height={50} fill={colors.blue} />
            <div className="flex flex-col text-left text-black ml-3 ">
              <p className=" lg:text-2xl text-sm font-MontserratBold">
                E-Commerce
              </p>
              <p className="text-xs font-Montserrat">By Bootcamps 3.0</p>
            </div>
          </div>
        </Link>
        <div className="hidden sm:block">
          <SearchBar />
        </div>
        {/* Right Side Links */}
        <CustomerDashboard user={user} token={cookie?.value} />
      </div>
      <div className="sm:hidden bg-background -mt-2 pb-3">
        <SearchBar />
      </div>

      <Navbar />
    </header>
  );
}
