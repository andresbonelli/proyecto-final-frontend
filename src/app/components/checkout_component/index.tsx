"use client";

import { createOrder } from "@/app/actions/orders";
import { useCart } from "@/app/context/CartContextProvider";
import { ProductFromCart } from "@/app/utils/interfaces";
import { useEffect, useState } from "react";
import Modal from "../modal";
import SuccessIcon from "../icons/Success";
import { colors } from "@/app/utils/constants";
import X from "../icons/X";

export default function CheckoutComponent({ token }: { token?: string }) {
  const { cart, totalItems, totalPrice, clearCart } = useCart();
  const [shippingCost, setShippingCost] = useState(0);
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  async function handleCheckout() {
    const convertToOrder = (cart: ProductFromCart[]) => {
      return {
        products: cart.map((item) => ({
          product_id: item.id,
          quantity: item.quantity,
        })),
      };
    };
    if (token) {
      const order = convertToOrder(cart);
      const state = await createOrder(order, token);
      if (state?.success) {
        setStatus("success");
        setMessage(state.success.message);
        clearCart();
      } else {
        setStatus("error");
        setMessage(state?.error ?? "Error al crear la orden");
      }
    } else {
      setStatus("error");
      setMessage(
        "Error de autenticación. Por favor ingresar o registrarse antes de realizar una compra"
      );
    }
  }
  function handleCompleteOrder() {
    console.log("complete order");
  }

  function handleCancelOrder() {
    console.log("cancel order");
  }

  return (
    <div className="flex md:flex-row flex-col">
      <div id="summary-container" className="md:w-1/2 pt-10">
        <div className="md:w-11/12 flex flex-col bg-white shadow-xl gap-5 pt-5 px-8 pb-8">
          <h2 className="w-full text-xl text-left  text-red">Medio de pago:</h2>
          <div
            id="divider-line"
            className="border border-grey w-full my-3"
          ></div>
          <label
            htmlFor="card-number"
            className="w-full font-MontserratLight text-sm ml-2"
          >
            Numero de tarjeta:
          </label>
          <input
            type="text"
            placeholder="credit / debit"
            id="card-number"
            className="w-full py-2 px-3 rounded-md border border-red mt-2"
          ></input>
        </div>
      </div>
      <div id="payment-container" className="md:w-1/2 pt-10">
        <div className="md:w-11/12 flex flex-col bg-white shadow-xl gap-5 pt-5 px-8 pb-8">
          <h2 className="w-full text-xl text-left pl-8">Resumen:</h2>
          <div
            id="divider-line"
            className="border border-grey w-full my-3"
          ></div>
          {totalItems > 0 && (
            <>
              <div className="w-full flex flex-row justify-between place-items-center">
                <p className="flex-auto text-left">
                  Productos ({totalItems}) :{" "}
                </p>
                <p className="text-right">${totalPrice}</p>
              </div>
              <div className="w-full flex flex-row justify-between place-items-center">
                <p className="flex-auto text-left">Envios:</p>
                <p className="text-right">${shippingCost}</p>
              </div>

              <div className="w-full flex flex-row justify-between place-items-center">
                <p className="flex-auto text-left font-MontserratBold">
                  TOTAL:
                </p>
                <p className="text-right font-MontserratBold">
                  ${totalPrice + shippingCost}
                </p>
              </div>
              <button
                onClick={handleCheckout}
                className="w-full bg-softGreen hover:bg-green text-white py-2 px-4 rounded-md text-center mt-5"
              >
                Pagar
              </button>
              <button
                onClick={handleCancelOrder}
                className="w-full bg-red hover:bg-redder text-white py-2 px-4 rounded-md text-center "
              >
                Cancelar orden
              </button>
            </>
          )}
        </div>
      </div>
      <Modal isOpen={status === "success"} onClose={() => setStatus("idle")}>
        <SuccessIcon
          width={150}
          height={150}
          fill={colors.red}
          stroke="white"
        />
        <h1>Orden creada!</h1>
        <h1 className="text-sm">{message}</h1>
      </Modal>
      <Modal isOpen={status === "error"} onClose={() => setStatus("idle")}>
        <X size={150} fill={colors.red} />
        <h1>Un error ha ocurrido!</h1>
        <h1 className="text-sm">{message}</h1>
      </Modal>
    </div>
  );
}
