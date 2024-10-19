"use client";

import { ProductFromDB, ProductQuery } from "@/utils/interfaces";
import ProductGridComponent from "../../product_grid_component";
import useProducts from "@/hooks/useProducts";
import { useEffect, useState } from "react";

export default function ProductGridSection({ query }: { query: ProductQuery }) {
  const [productQuery, setProductQuery] = useState<ProductQuery>(query);
  const [products, setProducts] = useState<ProductFromDB[]>([]);

  useEffect(() => {
    GetProducts();
  }, [productQuery]);

  async function GetProducts() {
    const { products, validationErrors } = await useProducts(productQuery);
    if (validationErrors.length > 0) {
      console.error(
        "[Encountered validation errors from DB] - ",
        validationErrors
      );
    }
    setProducts(products);
  }

  return (
    <div className="flex flex-col justify-start">
      <div className="flex flex-row justify-start items-center px-2 mt-5 gap-5">
        <p className="text-sm font-MontserratSemibold">Ordenar por</p>
        <select
          name="order-criteria"
          id="order-criteria"
          className="w-40 p-2 rounded-md border border-gray-300 text-sm"
          onChange={(e) => {
            setProductQuery({
              ...productQuery,
              //@ts-expect-error: Type 'string' is not assignable to type '"name" | "description" | "price" | "old_price" | "stock" | "category" | "created_at" | "modified_at" | "sales_count" | undefined'.ts
              sortBy: e.target.value,
              sortDir: "desc",
            });
          }}
        >
          <option defaultValue="created_at">mas nuevos</option>
          <option value="sales_count">mas relevantes</option>
        </select>
        <select
          name="price-criteria"
          id="price-criteria"
          className="w-40 p-2 rounded-md border border-gray-300 text-sm"
          onChange={(e) => {
            setProductQuery({
              ...productQuery,
              sortBy: "price",
              //@ts-expect-error: Type 'string' is not assignable to type '"asc" | "desc" | undefined'
              sortDir: e.target.value,
            });
          }}
        >
          <option value="asc">menor precio</option>
          <option value="desc">mayor precio</option>
        </select>
      </div>
      <ProductGridComponent products={products} />;
    </div>
  );
}
