"use client";

import AddIcon from "@/app/components/icons/Add";
import { useCart } from "@/app/context/CartContextProvider";
import { calculateDiscountPerc } from "@/app/utils";
import { ProductFromCart } from "@/app/utils/interfaces";

export default function Cart() {
  const {
    cart,
    addToCart,
    substractOneFromCart,
    removeFromCart,
    clearCart,
    totalItems,
  } = useCart();

  return (
    <>
      <div id="products-container" className="sm:w-2/3 pt-10">
        <div className="w-11/12 flex flex-col bg-white shadow-xl gap-5 pt-5 pb-10">
          <h2 className="w-full text-xl text-left pl-8 text-red">Cart</h2>
          {cart.map((product: ProductFromCart) => {
            return (
              <div
                key={product.id}
                className="w-full h-44 flex flex-row justify-between place-items-center pl-8 "
              >
                <div className="w-1/4 ">
                  <img
                    src={product.image ?? ""}
                    alt={product.name}
                    className="object-scale-down h-44"
                  />
                </div>
                <div className="w-1/2 h-full flex flex-col justify-between place-items-start ">
                  <div>
                    <h1 className="font-MontserratBold text-lg">
                      {product.name}
                    </h1>
                    <p className="text-sm">{product.description}</p>
                  </div>
                  <div className="flex flex-row justify-start place-items-center gap-2">
                    <h3 className="text-left text-md font-MontserratSemibold ">
                      ${product.price}
                    </h3>
                    {product.old_price && product.price && (
                      <>
                        <span className="text-xs font-MontserratLight text-grey line-through">
                          {product.old_price}
                        </span>
                        <span className="text-sm font-MontserratSemibold text-red ml-4">
                          {calculateDiscountPerc(
                            product.old_price,
                            product.price
                          )}
                          % OFF
                        </span>
                      </>
                    )}
                  </div>
                </div>
                <div className="w-1/4 h-full flex flex-col  place-items-start gap-2 pl-3 ">
                  {product.price && (
                    <h1 className="font-MontserratBold ">
                      Price: ${product.price * product.quantity}
                    </h1>
                  )}
                  <div className="flex flex-row justify-between place-items-center bg-white shadow-lg py-1 px-2 gap-3 w-28">
                    <button
                      onClick={() => substractOneFromCart(product.id)}
                      className="text-red text-xl"
                    >
                      -
                    </button>
                    <p className="text-xl">{product.quantity}</p>
                    <button
                      onClick={() => addToCart(product)}
                      className="text-red text-xl"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="sm:w-1/3 flex flex-col justify-start place-items-end min-h-screen py-10 gap-5">
        <div
          id="address-container"
          className="w-full flex flex-row justify-between gap-2"
        >
          <div className="flex flex-col gap-2 bg-white shadow-xl px-5 py-3 h-20 flex-auto overflow-hidden">
            <h1 className="font-MontserratSemibold">Address:</h1>
            <p className="text-xs">123 Fake St., Santa Monica, CA 23946 USA</p>
          </div>
          <div className="flex flex-col justify-center place-items-center bg-white shadow-xl p-3 w-20 h-20">
            <button></button>
            <AddIcon height={30} width={30} fill="black" />
          </div>
        </div>
        <div
          id="cart-summary-container"
          className="w-full flex flex-col justify-between bg-white shadow-xl px-5 py-5 gap-2"
        >
          <h1 className="font-MontserratSemibold">Cart summary:</h1>
          <div
            id="divider-line"
            className="border border-grey w-full my-3"
          ></div>
          <div className="w-full flex flex-row justify-between place-items-center">
            <p className="flex-auto text-left">Products ({totalItems}) : </p>
            <p className="text-right">$30000</p>
          </div>
          <div className="w-full flex flex-row justify-between place-items-center">
            <p className="flex-auto text-left">Shipping:</p>
            <p className="text-right">$30000</p>
          </div>
          <div className="w-full flex flex-row justify-between place-items-center">
            <p className="flex-auto text-left">Tax:</p>
            <p className="text-right">$30000</p>
          </div>
          <div className="w-full flex flex-row justify-between place-items-center">
            <p className="flex-auto text-left font-MontserratBold">TOTAL:</p>
            <p className="text-right font-MontserratBold">$30000</p>
          </div>
          <button className="w-full bg-red hover:bg-redder text-white py-2 px-4 rounded-md text-center mt-5">
            Proceed to checkout
          </button>
        </div>
      </div>
    </>
  );
}
