import ProductGrid from "./components/sections/product_grid";
import ProductCarrousel from "./components/sections/product_carrousel";
import Social from "./components/sections/social";
import Info from "./components/sections/info";
import Billboard from "./components/sections/billboard";

export default function Home() {
  return (
    <>
      <ProductGrid query={{}} />
      <Billboard />
      <ProductCarrousel query={{ filter: "old_price>0" }} title="OFERTAS" />
      <Social />
      <Info />
    </>
  );
}
