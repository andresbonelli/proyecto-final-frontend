import { useCart } from "@/context/CartContextProvider";
import { calculateDiscountPerc } from "@/utils";
import { ProductFromCart } from "@/utils/interfaces";
import Image from "next/image";
import Link from "next/link";

export default function CartProductCard({
  product,
}: {
  product: ProductFromCart;
}) {
  const { addToCart, substractOneFromCart } = useCart();

  return (
    <div
      key={product.id}
      className="w-full h-44 flex flex-row justify-between place-items-center gap-2 pl-3 md:pl-8 "
    >
      <div className="w-1/4 ">
        <Link href={`/products/${product.id}`}>
          <Image
            src={product.image ?? ""}
            alt={product.name}
            height={200}
            width={200}
            className="object-scale-down h-44"
          />
        </Link>
      </div>
      <div className="w-1/2 h-full flex flex-col justify-between place-items-start ">
        <div>
          <Link href={`/products/${product.id}`}>
            <h1 className="font-MontserratBold text-lg">{product.name}</h1>
            <p className="text-sm">{product.description}</p>
          </Link>
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
                {calculateDiscountPerc(product.old_price, product.price)}% OFF
              </span>
            </>
          )}
        </div>
      </div>
      <div className="w-1/4 h-full flex flex-col justify-between md:justify-normal place-items-start gap-2 pl-3 ">
        {product.price && (
          <h1 className="font-MontserratBold ">
            Price: ${product.price * product.quantity}
          </h1>
        )}
        <div className="flex flex-row justify-between place-items-center bg-white shadow-lg py-1 px-2 gap-3 md:w-28">
          <button
            onClick={() => substractOneFromCart(product.id)}
            className="text-red text-xl"
          >
            -
          </button>
          <p className="text-xl">{product.quantity}</p>
          <button
            onClick={() => addToCart({ ...product, quantity: 1 })}
            className="text-red text-xl"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
