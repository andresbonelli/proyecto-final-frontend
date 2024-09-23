"use client";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import CarrouselArrow from "../../buttons/carrousel_arrow";

export default function Carrousel({ images }: { images: StaticImageData[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
  };
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? prevIndex : prevIndex + 1
    );
  };
  return (
    <div className="relative ">
      <div
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        className={`flex flex-row transition-transform duration-500 ease-in-out overflow-visible `}
      >
        {images.map((image, index) => {
          return (
            <div key={index} className="min-w-full z-40">
              <Image src={image} alt={`slide-${index}`} />
            </div>
          );
        })}
      </div>
      {/* component */}
      <CarrouselArrow
        isDisabled={currentIndex === images.length - 1}
        onPress={handlePrev}
        xOffset="left-20"
        direction=""
      />
      <CarrouselArrow
        isDisabled={currentIndex === 0}
        onPress={handleNext}
        xOffset="right-20"
        direction="rotate-180"
      />
      {/* Cool debugging feature: preview image index */}
      {/* <h1 className="text-5xl text-center">{currentIndex}</h1> */}
    </div>
  );
}
