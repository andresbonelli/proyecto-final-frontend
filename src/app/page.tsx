import Image from "next/image";
import slide1 from "../public/images/slide1.webp";
import slide2 from "../public/images/slide2.webp";
import slideMobile from "../public/images/slide_mobile.webp";
import Carrousel from "./components/sections/carrousel";
import ProductList from "./components/sections/product-list";
import ProductDealsCarrousel from "./components/sections/product_deals_carrousel";
import Social from "./components/sections/social";
import Info from "./components/sections/info";
import Billboard from "./components/sections/billboard";

export default function Home() {
  return (
    <>
      {/* HOME PAGE TOP  */}

      <Image src={slideMobile} alt="mobile-welcome-img" className="md:hidden" />

      <Carrousel images={[slide1, slide2]} />

      {/* HOME PAGE SECTIONS */}
      <div
        id="main-sections"
        className="fex flex-col 2xl:px-80 xl:px-60 lg:px-40 md:px-20 px-3 mb-5"
      >
        <ProductList />
        <Billboard />
        <ProductDealsCarrousel />
        <Social />
        <Info />
      </div>
    </>
  );
}
