import ProductList from "./components/sections/product-list";
import ProductDealsCarrousel from "./components/sections/product_deals_carrousel";
import Social from "./components/sections/social";
import Info from "./components/sections/info";
import Billboard from "./components/sections/billboard";

export default function Home() {
  return (
    <>
      <ProductList />
      <Billboard />
      <ProductDealsCarrousel />
      <Social />
      <Info />
    </>
  );
}
