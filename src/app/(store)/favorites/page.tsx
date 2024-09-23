import ArrowIcon from "@/app/components/icons/Arrow";
import ProductCard from "@/app/components/product_card";
import { colors } from "@/app/constants";
import { test_products } from "@/public/test_data/test_products";
import Link from "next/link";

export default function Favorites() {
  return (
    <div
      id="main-sections"
      className="fex flex-col 2xl:px-80 xl:px-60 lg:px-40 md:px-20 px-3 pt-10 mb-5"
    >
      <h2 className="text-3xl text-center font-MontserratBold">FAVORITOS</h2>
      <div
        id="products-section-container"
        className="flex flex-col  place-items-center"
      >
        <div
          id="products-list"
          className="flex flex-row flex-wrap justify-between py-10 gap-5"
        >
          {test_products.map((product, index) => {
            return (
              <>
                {product.old_price === null && (
                  <Link href={`/products/${product.id}`} key={index}>
                    <ProductCard
                      props={{
                        product: product,
                        isFavorite: false,
                      }}
                    />
                  </Link>
                )}
              </>
            );
          })}
        </div>
        <h5 className="text-lg text-center font-MontserratBold ">VER MAS</h5>
        <div className="-rotate-90 bg-white w-fit rounded-full shadow-lg opacity-70 hover:cursor-pointer hover:opacity-85 mt-3">
          <ArrowIcon width={40} height={40} fill={colors.grey} />
        </div>
      </div>
    </div>
  );
}
