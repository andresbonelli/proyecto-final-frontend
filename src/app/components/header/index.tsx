import Logo from "../icons/Logo";
import Link from "next/link";

export default function Header() {
  return (
    <header className=" w-full fixed top-0 bg-background text-black flex flex-row xl:px-60 lg:px-40 md:px-20 px-10 py-10">
      <div className="flex flex-row justify-between">
        <Link href="/">
          <div className="flex flex-row">
            <Logo width={60} height={45} fill="blue" />
            <div className="flex flex-col text-left text-black">
              <p className=" text-lg font-MontserratBold">E-Commerce</p>
              <p className="text-xs font-Montserrat">By Bootcamps 3.0</p>{" "}
            </div>
          </div>
        </Link>
      </div>
    </header>
  );
}
