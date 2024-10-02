import type { Metadata } from "next";
import ProductGrid from "./components/sections/product_grid";
import ProductCarrousel from "./components/sections/product_carrousel";
import Social from "./components/sections/social";
import Info from "./components/sections/info";
import Billboard from "./components/sections/billboard";
import Image from "next/image";
import Carrousel from "./components/sections/carrousel";
import slide1 from "../public/images/slide1.webp";
import slide2 from "../public/images/slide2.webp";
import slideMobile from "../public/images/slide_mobile.webp";

export const metadata: Metadata = {
  title: "E-Commerce by Bootcamps 3.0",
  description: "Devlights 2024 Bootcamp final project frontend e-commerce app",
};

export default function Home() {
  return (
    <>
      <Image src={slideMobile} alt="mobile-welcome-img" className="md:hidden" />
      <Carrousel images={[slide1, slide2]} />
      <div
        id="main-sections"
        className="flex flex-col 2xl:px-80 xl:px-60 lg:px-40 md:px-20 px-3 mb-5"
      >
        <ProductGrid query={{}} />
        <Billboard />
        <ProductCarrousel query={{ filter: "old_price>0" }} title="OFERTAS" />
        <Social />
        <Info />
      </div>
    </>
  );
}
