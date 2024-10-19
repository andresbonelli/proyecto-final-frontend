import ProductGridSection from "../components/sections/product_grid";
import ProductCarrouselSection from "../components/sections/product_carrousel";
import Social from "../components/sections/social";
import Info from "../components/sections/info";
import Billboard from "../components/sections/billboard";

export default function Home() {
  return (
    <>
      <ProductGridSection query={{}} />

      <Billboard />

      <ProductCarrouselSection
        query={{ filter: "old_price>0" }}
        title="OFERTAS"
      />

      <Social />
      <Info />
    </>
  );
}
