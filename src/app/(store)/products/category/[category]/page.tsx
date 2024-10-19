import ProductGridSection from "@/app/components/sections/product_grid";

export default function ProductCategory({
  params,
}: {
  params: { category: string };
}) {
  return (
    <ProductGridSection query={{ filter: `category=${params.category}` }} />
  );
}
