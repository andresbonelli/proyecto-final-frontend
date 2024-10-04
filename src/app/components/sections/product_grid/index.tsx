import { ProductQuery } from "@/app/utils/interfaces";
import ProductGridComponent from "../../product_grid_component";
import useProducts from "@/app/hooks/useProducts";

export default async function ProductGridSection({
  query,
}: {
  query: ProductQuery;
}) {
  const { products, validationErrors } = await useProducts(query);
  console.log("Product grid I am a server component");
  return <ProductGridComponent products={products} />;
}
