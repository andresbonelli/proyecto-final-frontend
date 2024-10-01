import { colors } from "@/app/utils/constants";
import StarFilledIcon from "../../icons/StarFilled";
import StarHalfIcon from "../../icons/StarHalf";
import FingerIcon from "../../icons/Finger";
import HeartIcon from "../../icons/Heart";
import { calculateDiscountPerc } from "@/app/utils";
import { ProductFromDB } from "@/app/utils/interfaces";
import Image from "next/image";

export default function ProductCard({
  props,
}: {
  props: {
    product: ProductFromDB;
    isFavorite: boolean;
  };
}) {
  const { product, isFavorite } = props;
  const outOfStock = product.stock === 0;
  const discount =
    product.old_price && !outOfStock
      ? calculateDiscountPerc(product.old_price, product.price)
      : null;

  return (
    <div
      id="product-card-container"
      className="relative 
                 sm:w-72 sm:h-96 w-44 h-64
                 flex flex-col bg-white shadow-lg rounded-md place-items-center
                 hover:cursor-pointer hover:scale-105
                 ease-in-out transition-all duration-300"
    >
      {outOfStock && (
        <label
          id="out-of-stock"
          className="z-50 absolute top-3 left-3 text-white bg-black text-xs font-MontserratSemibold py-2 px-4 rounded w-fit "
        >
          SIN STOCK
        </label>
      )}
      {discount && (
        <div
          id="has-discount"
          className="absolute top-3 -left-3 text-white text-xs text-center font-MontserratSemibold p-2 h-12 w-12 rounded-full bg-black"
        >
          {discount}% <br></br>OFF
        </div>
      )}

      <div id="is-favorite" className="absolute top-3 right-3  ">
        <HeartIcon
          height={25}
          width={25}
          fill={isFavorite ? colors.red : "none"}
          stroke={isFavorite ? "none" : colors.grey}
        />
      </div>

      <Image
        src={product.image ?? ""}
        width={200}
        height={200}
        className="object-scale-down h-1/2"
        alt={product.name}
      ></Image>
      <div className="flex flex-col justify-between h-1/2 py-2 sm:px-5 px-2 gap-1">
        <div id="card-top">
          <h1 className="text-left sm:text-base text-sm font-MontserratSemibold mb-1">
            {product.name}
          </h1>

          <p className="text-xs overflow-hidden mb-2 sm:block hidden">
            {product.description}
          </p>
        </div>
        <div id="card-bottom">
          <div className="flex flex-row justify-between place-items-center">
            <h3 className="text-left text-lg font-MontserratSemibold mb-3">
              ${product.price}
              {product.old_price && (
                <span className="pl-2 text-xs font-MontserratLight text-grey line-through">
                  ${product.old_price}
                </span>
              )}
            </h3>
            <div className="sm:hidden block w-fit bg-softGreen hover:bg-green rounded p-1 mb-3">
              <FingerIcon width={22} height={22} fill="white" />
            </div>
          </div>
          <div className="flex flex-row justify-between place-items-center">
            <div className="sm:flex flex-row place-items-start hidden mr-5">
              <StarFilledIcon width={17} height={17} fill="orange" />
              <StarFilledIcon width={17} height={17} fill="orange" />
              <StarFilledIcon width={17} height={17} fill="orange" />
              <StarFilledIcon width={17} height={17} fill="orange" />
              <StarHalfIcon width={17} height={17} fill={colors.grey} />
            </div>
            <button className="sm:flex hidden flex-row bg-softGreen hover:bg-green text-white text-xs font-MontserratBold py-2 px-4 rounded  gap-1">
              <FingerIcon width={17} height={17} fill="white" />
              <p>comprar</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
