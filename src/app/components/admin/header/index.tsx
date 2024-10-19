import { colors } from "@/utils/constants";
import Link from "next/link";
import Logo from "../../icons/Logo";
import AddIcon from "../../icons/Add";
import AdminIcon from "../../icons/Admin";

export default function AdminHeader() {
  return (
    <header className="max-w-screen">
      <div
        id="header-container"
        className="bg-white border
                   flex flex-row justify-between place-items-center
                    sm:gap-3 h-[100px]
                   xl:px-60 lg:px-40 md:px-20 px-5 sm:py-8 py-5"
      >
        {/* LOGO */}
        <Link href="/">
          <div
            id="brand-container"
            className="flex flex-row place-items-center  "
          >
            <Logo width={50} height={50} fill={colors.blue} />
            <div className="flex flex-col text-left text-gray-500 ml-3 ">
              <p className=" lg:text-2xl text-sm font-MontserratBold">
                E-Commerce
              </p>
              <p className="text-xs font-Montserrat">By Bootcamps 3.0</p>
            </div>
          </div>
        </Link>
        <div className="flex flex-row justify-end  items-center gap-5">
          <h1 className="sm:text-lg font-MontserratBold text-gray-500">
            Admin Dashboard
          </h1>
          <AdminIcon height={40} width={40} fill={colors.blue} />
        </div>
      </div>
    </header>
  );
}
