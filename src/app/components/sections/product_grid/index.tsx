import { ProductQuery } from "@/app/utils/interfaces";
import ProductGridComponent from "../../product_grid_component";
import useProducts from "@/app/hooks/useProducts";

export default async function ProductGridSection({
  query,
}: {
  query: ProductQuery;
}) {
  const { products, validationErrors } = await useProducts(query);

  if (validationErrors.length > 0) {
    console.error(
      "[Encountered validation errors from DB] - ",
      validationErrors
    );
  }
  return <ProductGridComponent products={products} />;
}
