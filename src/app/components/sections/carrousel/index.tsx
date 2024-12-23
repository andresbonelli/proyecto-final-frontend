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
    <section
      id="carrousel"
      className="relative hidden place-self-center md:block w-screen overflow-hidden "
    >
      <div
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          // minHeight: 547,
        }}
        className={`flex flex-row transition-transform duration-500 ease-in-out`}
      >
        {images.map((image, index) => {
          return <Image key={index} src={image} alt={`slide-${index}`} />;
        })}
      </div>
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
      {/* <h1 className="text-5xl text-center">{currentIndex}</h1> */}
    </section>
  );
}
