import Link from "next/link";

interface navLink {
  label: string;
  link: string;
}
interface navbarProps {
  fixed?: boolean;
  padded?: boolean;
  inverted?: boolean;
  links: navLink[];
}
export default function Navbar({ padded, inverted, links }: navbarProps) {
  const padding = padded ? "py-10" : "py-2";
  const bgColor = inverted ? "bg-white" : "bg-pink";
  const textColor = inverted ? "text-pink" : "text-white";
  return (
    <nav
      className={`${padding} ${bgColor} ${textColor} hidden sm:flex flex-row place-items-center justify-center gap-5 z-50`}
    >
      {links.map((nav, index) => {
        return (
          <Link
            key={index}
            href={nav.link}
            className="font-MontserratLight text-sm hover:text-softGrey"
          >
            {nav.label}
          </Link>
        );
      })}
    </nav>
  );
}
