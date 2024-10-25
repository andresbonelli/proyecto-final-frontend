"use client";

import { useEffect, useRef } from "react";
import { navLinks } from "@/utils/constants";
import Link from "next/link";

export default function Sidebar({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const handleClickOutside = (event: MouseEvent) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target as Node)
    ) {
      onClose();
    }
  };
  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <aside
      ref={sidebarRef}
      className={`absolute top-[150px] z-50
        bg-white rounded-lg shadow-2xl
        sm:hidden flex flex-col justify-start
        w-2/3 
        transition-transform ease-in-out duration-300 ${
          isOpen ? "right-0 translate-x-0 " : "-right-full translate-x-full "
        }`}
    >
      {navLinks.map((nav, index) => {
        return (
          <Link
            onClick={onClose}
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
