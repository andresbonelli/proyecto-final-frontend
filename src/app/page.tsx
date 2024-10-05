import ProductGridSection from "./components/sections/product_grid";
import ProductCarrouselSection from "./components/sections/product_carrousel";
import Social from "./components/sections/social";
import Info from "./components/sections/info";
import Billboard from "./components/sections/billboard";
import Image from "next/image";
import Carrousel from "./components/sections/carrousel";
import slide1 from "../public/images/slide1.webp";
import slide2 from "../public/images/slide2.webp";
import slideMobile from "../public/images/slide_mobile.webp";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Image src={slideMobile} alt="mobile-welcome-img" className="md:hidden" />
      <Carrousel images={[slide1, slide2]} />
      <div
        id="main-sections"
        className="flex flex-col 2xl:px-80 xl:px-60 lg:px-40 md:px-20 px-3 mb-5"
      >
        <ProductGridSection query={{}} />

        <Billboard />

        <ProductCarrouselSection
          query={{ filter: "old_price>0" }}
          title="OFERTAS"
        />

        <Social />
        <Info />
      </div>
    </>
  );
}
