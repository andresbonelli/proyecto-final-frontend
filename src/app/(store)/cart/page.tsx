"use client";

import CartProductCard from "@/app/components/cards/cart_product_card";
import AddIcon from "@/app/components/icons/Add";
import { useCart } from "@/app/context/CartContextProvider";
import { ProductFromCart } from "@/app/utils/interfaces";
import { useState } from "react";

export default function Cart() {
  const [shippingCost, setShippingCost] = useState(0);
  const { cart, totalItems, totalPrice } = useCart();

  return (
    <div className="flex md:flex-row flex-col">
      <div id="products-container" className="md:w-2/3 pt-10">
        <div className="md:w-11/12 flex flex-col bg-white shadow-xl gap-5 pt-5 pb-8">
          <h2 className="w-full text-xl text-left pl-8 text-red">
            Carrito de compras{totalItems === 0 && " vacío"}
          </h2>
          {cart.map((product: ProductFromCart) => {
            return <CartProductCard product={product} />;
          })}
        </div>
      </div>
      <div className="md:w-1/3 flex flex-col justify-start place-items-end min-h-screen py-10 gap-5">
        <div
          id="address-container"
          className="w-full flex flex-row justify-between gap-2"
        >
          <div className="flex flex-col gap-2 bg-white shadow-xl px-5 py-3 h-20 flex-auto overflow-hidden">
            <h1 className="font-MontserratSemibold">Domicilio de envío:</h1>
            <p className="text-xs">123 Fake St., Santa Monica, CA 23946 USA</p>
          </div>
          <div className="flex flex-col justify-center place-items-center bg-white shadow-xl p-3 w-20 h-20">
            <button></button>
            <AddIcon height={30} width={30} fill="black" />
          </div>
        </div>
        {totalItems > 0 && (
          <div
            id="cart-summary-container"
            className="w-full flex flex-col justify-between bg-white shadow-xl px-5 py-5 gap-2"
          >
            <h1 className="font-MontserratSemibold">resumen:</h1>
            <div
              id="divider-line"
              className="border border-grey w-full my-3"
            ></div>
            <div className="w-full flex flex-row justify-between place-items-center">
              <p className="flex-auto text-left">Productos ({totalItems}) : </p>
              <p className="text-right">${totalPrice}</p>
            </div>
            <div className="w-full flex flex-row justify-between place-items-center">
              <p className="flex-auto text-left">Envío:</p>
              <p className="text-right">${shippingCost}</p>
            </div>

            <div className="w-full flex flex-row justify-between place-items-center">
              <p className="flex-auto text-left font-MontserratBold">TOTAL:</p>
              <p className="text-right font-MontserratBold">
                ${totalPrice + shippingCost}
              </p>
            </div>
            <button className="w-full bg-red hover:bg-redder text-white py-2 px-4 rounded-md text-center mt-5">
              Continuar compra
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
