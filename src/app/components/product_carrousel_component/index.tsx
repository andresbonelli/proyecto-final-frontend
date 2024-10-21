"use client";

import Link from "next/link";
import ProductCard from "../cards/product_card";
import CarrouselArrow from "../buttons/carrousel_arrow";
import { useState } from "react";
import { ProductFromDB } from "@/utils/interfaces";

export default function ProductCarrouselComponent({
  products,
}: {
  products: ProductFromDB[];
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
  };
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - 1 ? prevIndex : prevIndex + 1
    );
  };

  return (
    <>
      <div className="sm:overflow-hidden overflow-scroll">
        <div
          id="ofertas-cards-container"
          style={{ transform: `translateX(-${currentIndex * 25}%)` }}
          className="flex flex-row sm:py-10 py-5 pl-5 sm:pl-10 sm:gap-5 gap-28 transition-transform duration-500 ease-in-out  "
        >
          {products.map((product) => {
            return (
              <Link
                href={`/products/${product.id}`}
                key={product.id}
                className="w-1/4"
              >
                <ProductCard product={product} />
              </Link>
            );
          })}
        </div>
      </div>
      <CarrouselArrow
        onPress={handlePrev}
        xOffset="-left-16"
        direction=""
        isDisabled={currentIndex === products.length - 3}
      />
      <CarrouselArrow
        onPress={handleNext}
        xOffset="-right-16"
        direction="rotate-180"
        isDisabled={currentIndex === 0}
      />
    </>
  );
}
