"use client";

import { calculateDiscountPerc } from "@/app/utils";
import { ProductFromDB } from "@/app/utils/interfaces";
import FingerIcon from "../icons/Finger";
import GoToCartIcon from "../icons/GoToCart";
import { useState } from "react";
import Modal from "../modal";
import Link from "next/link";

export default function ProductDetailsComponent({
  product,
  cart,
}: {
  product: ProductFromDB;
  cart?: any;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { category, name, description, image, price, old_price, details } =
    product;

  const discount = product.old_price
    ? calculateDiscountPerc(product.old_price, product.price)
    : null;

  function handleAddToCart() {
    console.log("adding to cart " + product.id);
    setIsModalOpen(!isModalOpen);
  }

  return (
    <div
      id="product-details-container"
      className="w-screen place-self-center
                   flex flex-col justify-center place-items-center
                   bg-white py-10 
                   2xl:px-80 xl:px-60 lg:px-40 md:px-20 px-3 mb-5"
    >
      <h1 className="w-full text-left text-red text-lg font-MontserratLight ">
        {category?.toUpperCase()}
      </h1>
      <div
        id="product-details-layout"
        className="w-full flex sm:flex-row flex-col justify-between gap-5"
        style={{ height: 500 }}
      >
        <div
          id="image-list"
          className="flex flex-col justify-between gap-2 w-2/12 overflow-auto "
        >
          {product.details?.image_list && (
            <>
              {product.details?.image_list.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  className="object-scale-down h-1/3"
                  alt={name + "img" + index}
                ></img>
              ))}
            </>
          )}
        </div>
        <div
          id="main-image"
          className="w-1/2  flex flex-row justify-center place-items-center "
        >
          <img
            src={image ?? ""}
            // style={{ height: 400 }}
            className="object-scale-down h-full"
            alt={name}
          ></img>
        </div>
        <div
          id="details"
          className="flex flex-col justify-between text-left w-4/12 max-h-full gap-2 "
        >
          <h1 className="w-full font-MontserratSemibold text-xl">{name}</h1>
          <p className="text-sm">{description}</p>
          <div className="flex flex-row justify-start place-items-center gap-2">
            <h3 className="text-left text-md font-MontserratSemibold ">
              ${price}
            </h3>
            {old_price && (
              <>
                <span className="text-xs font-MontserratLight text-grey line-through">
                  {old_price}
                </span>
                <span className="text-sm font-MontserratSemibold text-red ml-4">
                  {discount}% OFF
                </span>
              </>
            )}
          </div>
          {details?.sizes && (
            <select
              id="size-select"
              aria-label="Default size"
              name="sizes"
              className="w-20 py-1 px-3 rounded-md border border-gray-300 text-xs"
            >
              {details.sizes.map((size, index) => (
                <option key={index}>{size}</option>
              ))}
            </select>
          )}
          <h3 className="text-left text-lg font-MontserratSemibold ">
            Product details:
          </h3>
          <p className="text-sm overflow-hidden ">
            {details?.long_description}
          </p>
          <div
            id="btn-container"
            className="w-full flex flex-row justify-between"
          >
            <button
              onClick={handleAddToCart}
              className="flex flex-row justify-around w-40 place-items-center bg-softBlue hover:bg-blue text-white text-md font-MontserratRegular py-2 px-4 rounded gap-2"
            >
              <GoToCartIcon width={22} height={22} fill="white" />
              <p>Add to cart</p>
            </button>
            <button className="flex flex-row justify-around w-40 place-items-center bg-softGreen hover:bg-green text-white text-md font-MontserratRegular py-2 px-4 rounded gap-2">
              <FingerIcon width={22} height={22} fill="white" />
              <p>Buy now</p>
            </button>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(!isModalOpen)}>
        <div className="w-24 h-24 m-8 overflow-hidden rounded-full border-4 border-green">
          <img src={product.image ?? ""} alt={name} />
        </div>
        <h1 className="w-full text-left font-MontserratSemibold text-lg ">
          Added to cart
        </h1>
        <p className="w-full text-left text-sm">{name}</p>
        <div id="divider-line" className="border border-grey w-full my-5"></div>
        <Link
          href="/"
          className="w-full bg-softBlue hover:bg-blue text-white py-2 px-4 rounded-md text-center"
        >
          continue shopping
        </Link>
        <Link
          href="/cart"
          className="w-full bg-white hover:bg-gray-100 py-2 border px-4 rounded-md text-center"
        >
          go to cart
        </Link>
      </Modal>
    </div>
  );
}
