import { navLinks } from "@/app/utils/constants";
import Link from "next/link";

export default function Sidebar({ isOpen }: { isOpen: boolean }) {
  return (
    <aside
      className={`absolute top-[100px] 
        bg-white  shadow-2xl
        sm:hidden flex flex-col justify-start
        w-2/3 
        transition-transform ease-in-out duration-300 ${
          isOpen ? "right-0 translate-x-0 " : "-right-full translate-x-full "
        }`}
    >
      {navLinks.map((nav, index) => {
        return (
          <Link
            key={index}
            href={nav.link}
            className="text-lg px-5 py-3 hover:text-softGrey hover:bg-grey"
          >
            {nav.label}
          </Link>
        );
      })}
    </aside>
  );
}
