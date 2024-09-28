import FingerIcon from "@/app/components/icons/Finger";
import GoToCartIcon from "@/app/components/icons/GoToCart";
import ProductCarrousel from "@/app/components/sections/product_carrousel";
import api from "@/app/services/api";
import { calculateDiscountPerc } from "@/app/utils";
import { ProductFromDB } from "@/app/utils/interfaces";

export default async function ProductDetails({
  params,
}: {
  params: { id: string };
}) {
  const response = await api.get(`/api/products/${params.id}`);
  const product: ProductFromDB = await response.data;
  const {
    category,
    name,
    description,
    image,
    price,
    old_price,
    tags,
    details,
  } = product;

  const discount = product.old_price
    ? calculateDiscountPerc(product.old_price, product.price)
    : null;

  return (
    <>
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
            <p className="tetx-sm">{description}</p>
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
              <button className="flex flex-row justify-around w-40 place-items-center bg-softBlue hover:bg-blue text-white text-md font-MontserratRegular py-2 px-4 rounded gap-2">
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
      </div>
      <ProductCarrousel
        query={{ filter: `tags~${tags}` }}
        title="Similar Products"
      />
    </>
  );
}
