import ProductGrid from "./components/sections/product_grid";
import ProductCarrousel from "./components/sections/product_carrousel";
import Social from "./components/sections/social";
import Info from "./components/sections/info";
import Billboard from "./components/sections/billboard";
import { ProductQuery } from "./utils/interfaces";

export default function Home() {
  return (
    <>
      <ProductGrid query={{ filter: "old_price%00" }} />
      <Billboard />
      <ProductCarrousel query={{ filter: "old_price>0" }} />
      <Social />
      <Info />
    </>
  );
}
