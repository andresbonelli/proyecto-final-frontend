"use client";

import CartProductCard from "@/app/components/cards/cart_product_card";
import { useCart } from "@/context/CartContextProvider";
import { ProductFromCart } from "@/utils/interfaces";
import Link from "next/link";

export default function CartPage() {
  const { cart, totalItems, totalPrice } = useCart();

  return (
    <div className="flex md:flex-row flex-col">
      <div id="products-container" className="md:w-2/3 pt-10">
        <div className="md:w-11/12 flex flex-col bg-white shadow-xl gap-5 pt-5 pb-8">
          <h2 className="w-full text-xl text-left pl-8 text-red">
            Carrito de compras{totalItems === 0 && " vacío"}
          </h2>
          {cart.map((product: ProductFromCart) => {
            return (
              <div key={product.id}>
                <CartProductCard product={product} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="md:w-1/3 flex flex-col justify-start place-items-end min-h-screen py-10 gap-5">
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
              <p className="flex-auto text-left font-MontserratBold">TOTAL:</p>
              <p className="text-right font-MontserratBold">${totalPrice}</p>
            </div>
            <Link
              href="/checkout"
              className="w-full bg-red hover:bg-redder text-white py-2 px-4 rounded-md text-center mt-5"
            >
              Continuar compra
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
