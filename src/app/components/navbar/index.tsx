import Link from "next/link";

export default function Navbar({
  fixed,
  padded,
  inverted,
  links,
}: navbarProps) {
  const position = fixed ? "fixed top-28" : "";
  const padding = padded ? "py-10" : "py-2";
  const bgColor = inverted ? "bg-white" : "bg-pink";
  const textColor = inverted ? "text-pink" : "text-white";
  return (
    <nav
      className={`w-full ${position} ${padding} ${bgColor} ${textColor} flex flex-row place-items-center justify-center gap-5`}
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
