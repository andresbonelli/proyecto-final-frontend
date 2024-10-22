"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContextProvider";
import Image from "next/image";
import { completeOrder, createOrder } from "@/actions/orders";
import { detectCardType, formatCardNumber, validateCardNumber } from "@/utils";
import { colors } from "@/utils/constants";
import { ProductFromCart, UserFromDB } from "@/utils/interfaces";
import Modal from "../modal";
import SuccessIcon from "../icons/Success";
import X from "../icons/X";
import Link from "next/link";
import visa from "../../../public/images/visa.png";
import master from "../../../public/images/card.png";
import amex from "../../../public/images/american-express.png";
import Loader from "../loader";

export default function CheckoutComponent({ user }: { user?: UserFromDB }) {
  const { cart, totalItems, totalPrice, clearCart } = useCart();
  const [cardNumber, setCreditCardNumber] = useState("4111 1111 1111 1111");
  const [cardType, setCardType] = useState(() => {
    return detectCardType(cardNumber);
  });
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");
  const router = useRouter();

  async function handleCheckout() {
    setStatus("loading");
    if (!cardNumber || !validateCardNumber(cardNumber)) {
      setStatus("error");
      setMessage("Ingrese una tarjeta válida");
      return;
    }
    if (!user) {
      setStatus("error");
      setMessage(
        "Error de autenticación. Por favor ingresar o registrarse antes de realizar una compra"
      );
      return;
    }
    const convertToOrder = (cart: ProductFromCart[]) => {
      return {
        products: cart.map((item) => ({
          product_id: item.id,
          quantity: item.quantity,
        })),
      };
    };
    const order = convertToOrder(cart);
    // Simulating successful payment:
    // Merge Two actions (create pending order and complete)
    try {
      const pendingOrder = await createOrder(order);
      if (pendingOrder?.success) {
        const insertedOrderId = pendingOrder.success.id;
        const completedOrder = await completeOrder(insertedOrderId);
        if (completedOrder?.success) {
          setStatus("success");
          setMessage(completedOrder.success.message);
          clearCart();
          setTimeout(() => {
            router.push("/home");
          }, 2000);
          return;
        }
        setStatus("error");
        setMessage(completedOrder?.error ?? "Error al completar la orden");
        return;
      }
      setStatus("error");
      setMessage(pendingOrder?.error ?? "Error al crear la orden");
    } catch (error) {
      setStatus("error");
      setMessage(
        "Ocurrió un error inesperado. Por favor, inténtelo de nuevo más tarde."
      );
    }
  }

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const formattedValue = formatCardNumber(inputValue);
    setCreditCardNumber(formattedValue);
  };

  return (
    <div className="flex md:flex-row flex-col">
      <div id="summary-container" className="md:w-1/2 pt-10">
        {user && (
          <div
            id="address-container"
            className="md:w-11/12 flex flex-row justify-between gap-2 mb-5"
          >
            <div className="flex flex-col gap-4 bg-white shadow-xl px-8 pt-5 pb-8 flex-auto overflow-hidden">
              <h2 className="w-full text-xl text-left">Datos de envío:</h2>
              <div
                id="divider-line"
                className="border border-grey w-full my-3"
              ></div>
              <p className="text-lg font-MontserratSemibold">
                {user.firstname ?? ""} {user.lastname ?? ""}
              </p>
              {user.address && user.address.length > 0 && (
                <select name="shipping-address" id="shipping-address">
                  {user.address.map((address, index) => {
                    return (
                      <option
                        key={index}
                        value={address.address_street_name?.toString()}
                        className="text-sm  font-MontserratSemibold"
                      >
                        {address.address_street_name ?? ""}{" "}
                        {address.address_street_no ?? ""},{" "}
                        {address.address_city ?? ""},{" "}
                        {address.address_country_code ?? ""}
                      </option>
                    );
                  })}
                </select>
              )}
            </div>
          </div>
        )}
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
          <div className="relative">
            <input
              type="text"
              placeholder="credit / debit"
              value={cardNumber}
              onChange={(e) => {
                handleCardNumberChange(e);
                setCardType(detectCardType(cardNumber));
              }}
              id="card-number"
              className="w-full py-2 px-3 rounded-md border border-red mt-2 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />

            {cardType && (
              <div className="absolute top-1 right-2 mt-2">
                {cardType === "Visa" && (
                  <Image src={visa} alt={cardType} width={35} />
                )}
                {cardType === "MasterCard" && (
                  <Image src={master} alt={cardType} width={35} />
                )}
                {cardType === "American" && (
                  <Image src={amex} alt={cardType} width={35} />
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <div id="payment-container" className="md:w-1/2 pt-10">
        <div className="md:w-11/12 flex flex-col bg-white shadow-xl gap-5 pt-5 px-8 pb-8">
          <h2 className="w-full text-xl text-left ">Resumen:</h2>
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
                <p className="flex-auto text-left font-MontserratBold">
                  TOTAL:
                </p>
                <p className="text-right font-MontserratBold">${totalPrice}</p>
              </div>
              <button
                onClick={handleCheckout}
                className="w-full bg-softGreen hover:bg-green text-white py-2 px-4 rounded-md text-center mt-5"
              >
                Pagar
              </button>
              <Link
                href="/cart"
                className="w-full bg-white hover:bg-gray-100 border py-2 px-4 rounded-md text-center "
              >
                Volver al carrito
              </Link>
            </>
          )}
        </div>
      </div>
      <Modal isOpen={status === "loading"} onClose={() => setStatus("idle")}>
        <h1>Preparando orden...</h1>
        <Loader />
      </Modal>
      <Modal isOpen={status === "success"} onClose={() => setStatus("idle")}>
        <SuccessIcon
          width={150}
          height={150}
          fill={colors.red}
          stroke="white"
        />
        <h1 className="text-sm">{message}</h1>
      </Modal>
      <Modal isOpen={status === "error"} onClose={() => setStatus("idle")}>
        <X size={150} fill={colors.red} />
        <h1 className="w-80 text-center">{message}</h1>
      </Modal>
    </div>
  );
}
