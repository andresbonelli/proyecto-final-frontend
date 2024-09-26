"use client";

import { colors } from "@/app/constants";
import Link from "next/link";
import ArrowIcon from "../../icons/Arrow";
import ProductCard from "../../product_card";
import { useState } from "react";
import { ProductFromDB } from "@/app/utils/interfaces";

export default function ProductList({
  products,
}: {
  products: ProductFromDB[];
}) {
  const [sliceIndex, setSliceIndex] = useState(8);
  return (
    <section
      id="products-section-container"
      className="flex flex-col  place-items-center"
    >
      <div
        id="products-list"
        className="flex flex-row flex-wrap justify-around py-10 gap-5"
      >
        {products.slice(0, sliceIndex).map((product, index) => {
          return (
            <Link href={`/products/${product.id}`} key={index}>
              <ProductCard props={{ product: product, isFavorite: false }} />
            </Link>
          );
        })}
      </div>
      <h5 className="text-lg text-center font-MontserratBold ">VER MAS</h5>

      <button
        onClick={() => setSliceIndex(sliceIndex + 4)}
        className="-rotate-90 bg-white w-fit rounded-full shadow-lg opacity-70 hover:cursor-pointer hover:opacity-85 mt-3"
      >
        <ArrowIcon width={40} height={40} fill={colors.grey} />
      </button>
    </section>
  );
}
