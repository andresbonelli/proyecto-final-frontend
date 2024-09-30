"use client";

import Link from "next/link";
import ProductCard from "../../cards/product_card";
import CarrouselArrow from "../../buttons/carrousel_arrow";
import { useState } from "react";
import useProducts from "@/app/hooks/useProducts";
import { ProductQuery } from "@/app/utils/interfaces";

export default function ProductCarrousel({
  query,
  title,
}: {
  query: ProductQuery;
  title: string;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const { products, status, errorMsg } = useProducts(query);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
  };
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - 1 ? prevIndex : prevIndex + 1
    );
  };
  return (
    <section
      id="ofertas-section-container"
      className="relative flex flex-col sm:gap-10 "
    >
      <h2 className="text-3xl text-center font-MontserratBold">{title}</h2>
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
                <ProductCard props={{ product: product, isFavorite: false }} />
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
    </section>
  );
}
