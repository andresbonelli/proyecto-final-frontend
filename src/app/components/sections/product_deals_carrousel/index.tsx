"use client";

import Link from "next/link";
import ProductCard from "../../product_card";
import CarrouselArrow from "../../buttons/carrousel_arrow";
import { useState } from "react";

export default function ProductDealsCarrousel({
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
    <section
      id="ofertas-section-container"
      className="relative flex flex-col gap-10 overflow-hidden"
    >
      <h2 className="text-3xl text-center font-MontserratBold">OFERTAS</h2>
      <div
        id="ofertas-cards-container"
        style={{ transform: `translateX(-${currentIndex * 25}%)` }}
        className="flex flex-row flex-nowrap justify-between py-10 pl-10 gap-10 transition-transform duration-500 ease-in-out overflow-visible "
      >
        {products.map((product, index) => {
          return (
            <Link href={`/products/${product.id}`} key={index}>
              <ProductCard props={{ product: product, isFavorite: false }} />
            </Link>
          );
        })}
      </div>
      <CarrouselArrow
        onPress={handlePrev}
        xOffset="left-20"
        direction=""
        isDisabled={currentIndex === products.length - 3}
      />
      <CarrouselArrow
        onPress={handleNext}
        xOffset="right-20"
        direction="rotate-180"
        isDisabled={currentIndex === 0}
      />
      <h1 className="text-5xl text-center">{currentIndex}</h1>
    </section>
  );
}
