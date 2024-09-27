import ProductGrid from "@/app/components/sections/product_grid";

export default function ProductCategory({
  params,
}: {
  params: { category: string };
}) {
  return <ProductGrid query={{ filter: `category=${params.category}` }} />;
}
