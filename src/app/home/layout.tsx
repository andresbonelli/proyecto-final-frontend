import Footer from "../components/footer/index";
import Header from "../components/header/index";
import type { Metadata } from "next";
import Image from "next/image";
import Carrousel from "../components/sections/carrousel";
import slide1 from "../../public/images/slide1.webp";
import slide2 from "../../public/images/slide2.webp";
import slideMobile from "../../public/images/slide_mobile.webp";
import { CartProvider } from "@/context/CartContextProvider";

export const metadata: Metadata = {
  title: "E-Commerce by Bootcamps 3.0",
  description: "Devlights 2024 Bootcamp final project frontend e-commerce app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CartProvider>
      <Header />
      <main className="flex flex-col min-h-screen sm:mt-[135px] mt-[150px] ">
        <Image
          src={slideMobile}
          alt="mobile-welcome-img"
          className="md:hidden"
        />
        <Carrousel images={[slide1, slide2]} />
        <div
          id="main-sections"
          className="flex flex-col 2xl:px-80 xl:px-60 lg:px-40 md:px-20 px-3 mb-5"
        >
          {children}
        </div>
      </main>
      <Footer />
    </CartProvider>
  );
}
