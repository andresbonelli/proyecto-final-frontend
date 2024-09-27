"use client";

import ArrowIcon from "@/app/components/icons/Arrow";
import Loader from "@/app/components/loader";
import ProductCard from "@/app/components/product_card";
import { colors } from "@/app/constants";
import useProducts from "@/app/hooks/useProducts";
import { ProductQuery } from "@/app/utils/interfaces";
import Link from "next/link";
import { useState } from "react";

export default function ProductCategory({
  params,
}: {
  params: { category: string };
}) {
  const [sliceIndex, setSliceIndex] = useState(8);
  const query: ProductQuery = {
    filter: `category=${params.category}`,
  };
  const { products, status, errorMsg, refetch } = useProducts(query);
  return (
    <section
      id="products-section-container"
      className="flex flex-col  place-items-center"
    >
      {status === "loading" && <Loader />}
      <div
        id="products-list"
        className="flex flex-row flex-wrap justify-around py-10 gap-5"
      >
        {products.slice(0, sliceIndex).map((product) => {
          return (
            <Link href={`/products/${product.id}`} key={product.id}>
              <ProductCard props={{ product: product, isFavorite: false }} />
            </Link>
          );
        })}
      </div>
      <h5 className="text-lg text-center font-MontserratBold ">VER MAS</h5>

      <button
        onClick={() => {
          setSliceIndex(sliceIndex + 4);
          refetch();
        }}
        className="-rotate-90 bg-white w-fit rounded-full shadow-lg opacity-70 hover:cursor-pointer hover:opacity-85 mt-3"
      >
        <ArrowIcon width={40} height={40} fill={colors.grey} />
      </button>
    </section>
  );
}
