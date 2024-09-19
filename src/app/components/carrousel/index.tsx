"use client";
import Image from "next/image";
import ArrowIcon from "../icons/Arrow";
import { colors } from "@/app/constants";
import { useState } from "react";

export default function Carrousel({ images }: { images: string[] }) {
  const test_images = [
    "https://acdn.mitiendanube.com/stores/001/555/989/themes/amazonas/2-slide-1718377642842-7359872129-e354ae4404aff8f82d4ce1b516fd40201718377650-1920-1920.webp?1613307499",
    "https://acdn.mitiendanube.com/stores/001/555/989/themes/amazonas/2-slide-1718721429720-6758918917-8110c05599317d23a1b5bfa49e2b1ab51718721432-1920-1920.webp?1613307499",
  ];

  images = test_images;
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <div className="relative ">
      <div
        className={`transition-transform trans duration-300 ease-in-out overflow-hidden`}
      >
        <img
          id="carrousel-img"
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
        />
      </div>

      <div className="absolute left-20  top-1/2 flex -translate-y-1/2 transform justify-between">
        <div
          className="bg-white rounded-full shadow-lg opacity-70 hover:cursor-pointer hover:opacity-85"
          onClick={handlePrev}
        >
          <ArrowIcon width={40} height={40} fill={colors.grey} />
        </div>
      </div>
      <div className="absolute right-20 top-1/2 flex -translate-y-1/2 transform justify-between">
        <div
          className="rotate-180 bg-white rounded-full shadow-lg opacity-70 hover:cursor-pointer hover:opacity-85"
          onClick={handleNext}
        >
          <ArrowIcon width={40} height={40} fill={colors.grey} />
        </div>
      </div>
    </div>
  );
}
