import useProducts from "@/hooks/useProducts";
import { ProductQuery } from "@/utils/interfaces";
import ProductCarrouselComponent from "../../product_carrousel_component";

export default async function ProductCarrouselSection({
  query,
  title,
}: {
  query: ProductQuery;
  title: string;
}) {
  const { products, validationErrors } = await useProducts(query);
  console.log(validationErrors, "VALIDATION ERRORS");
  return (
    <section
      id="ofertas-section-container"
      className="relative flex flex-col sm:gap-10 "
    >
      <h2 className="text-3xl text-center font-MontserratBold">{title}</h2>
      <ProductCarrouselComponent products={products} />
    </section>
  );
}
