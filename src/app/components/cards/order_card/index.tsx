"use client";

import { formatDate } from "@/utils";
import { OrderFromDB } from "@/utils/interfaces";
import Image from "next/image";
import Link from "next/link";

export default function OrderCard({ order }: { order: OrderFromDB }) {
  const { products, total_price, created_at } = order;
  const orderDate = formatDate(created_at);
  return (
    <div
      id="order-card-container"
      className="w-full flex flex-col bg-white shadow-xl gap-5 py-8 px-5"
    >
      <div className="w-full flex flex-row justify-between">
        <h2 className="font-MontserratBold text-sm text-left">{orderDate}</h2>
        <h2 className=" font-MontserratBold text-lg text-left">
          ${total_price}
        </h2>
      </div>
      <div id="divider-line" className="border border-grey w-full "></div>
      {products.map((product) => {
        return (
          <div
            key={product.product_id}
            className="h-full flex flex-row justify-between items-center gap-2"
          >
            <div className="flex flex-row justify-between items-center gap-5">
              <Image
                src={product.image ?? ""}
                alt={product.name}
                height={70}
                width={70}
              />
              <h1 className="font-MontserratBold text-lg">{product.name}</h1>
            </div>
            <div className="flex flex-col  justify-between items-end gap-3">
              <h3 className="text-right">${product.price}</h3>
              <h3 className="text-right ">cantidad: {product.quantity}</h3>
              <Link
                href={`/products/${product.product_id}`}
                className=" bg-softBlue hover:bg-blue text-white text-sm font-MontserratRegular py-2 px-4 rounded gap-2"
              >
                volver a comprar
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
