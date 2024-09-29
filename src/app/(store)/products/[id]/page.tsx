import ProductDetails from "@/app/components/product_details";
import ProductCarrousel from "@/app/components/sections/product_carrousel";
import api from "@/app/services/api";
import { ProductFromDB } from "@/app/utils/interfaces";

export default async function ProductDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const response = await api.get(`/api/products/${params.id}`);
  const product: ProductFromDB = await response.data;

  return (
    <>
      <ProductDetails product={product} />
      <ProductCarrousel
        query={{ filter: `tags~${product.tags}` }}
        title="Similar Products"
      />
    </>
  );
}
