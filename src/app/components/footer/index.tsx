import Logo from "../icons/Logo";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-screen flex flex-row justify-between place-items-center bg-softPink md:px-40 px-5 py-5 text-white">
      <div className="flex flex-row justify-between gap-5">
        <Logo width={79} height={60} fill="white" />
        <div className="flex flex-col text-center">
          <p className="pb-3 text-xl font-MontserratBold">E-Commerce</p>
          <p className="text-sm font-MontserratThin">By Bootcamps 3.0</p>{" "}
        </div>
      </div>
      <div id="copyright-container" className="font-MontserratLight">
        <p>© Devlights {year}</p>
      </div>
    </footer>
  );
}
