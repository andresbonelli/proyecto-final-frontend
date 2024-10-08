import ProductDetailsComponent from "@/app/components/product_details";
import ProductCarrouselSection from "@/app/components/sections/product_carrousel";
import api from "@/services/api";
import { ProductFromDB } from "@/utils/interfaces";

export default async function ProductDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const response = await api.get(`/api/products/${params.id}`);
  const product: ProductFromDB = await response.data;

  return (
    <>
      <ProductDetailsComponent product={product} />
      <ProductCarrouselSection
        query={{ filter: `tags~${product.tags}` }}
        title="Productos relacionados"
      />
    </>
  );
}
