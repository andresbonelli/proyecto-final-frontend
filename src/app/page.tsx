import Link from "next/link";
import Carrousel from "./components/carrousel";
import ArrowIcon from "./components/icons/Arrow";
import ProductCard from "./components/product_card";
import Social from "./components/social";
import { colors } from "./constants";
import { test_products } from "@/public/test_data/test_products";
import Info from "./components/info";

export default function Home() {
  return (
    <>
      {/* HOME PAGE TOP  */}
      <section
        id="carrousel"
        className="w-screen overflow-hidden place-self-center"
      >
        <Carrousel
          images={[
            "../public/images/slide1.webp",
            "../public/images/slide2.webp",
          ]}
        />
      </section>
      {/* HOME PAGE SECTIONS */}
      <div
        id="main-sections"
        className="fex flex-col 2xl:px-80 xl:px-60 lg:px-40 md:px-20 px-3 mb-5"
      >
        {/* PRODUCTS */}
        <section
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
                        props={{ product: product, isFavorite: false }}
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
        </section>
        {/* BILLBOARD */}
        <section
          id="billboard-section-container"
          className="flex flex-col place-items-center text-center py-20 gap-5"
        >
          <h2 className="text-3xl font-MontserratBold">INSTITUCIONAL</h2>
          <p className="md:w-2/3">
            "Nuestra marca de ropa es un tributo a la autenticidad y la
            creatividad arraigadas en la cultura del arte. Lejos de las soleadas
            playas de California, nuestras prendas cobran vida en Mendoza,
            Argentina. Cada puntada y diseño refleja la pasión y la dedicación
            con las que abrazamos la influencia artística que nos rodea.
            Apoyamos al arte local en todas sus formas y buscamos hacer crecer a
            la cultura"
          </p>
        </section>
        {/* OFERTAS */}
        <section
          id="ofertas-section-container"
          className="relative flex flex-col gap-10"
        >
          <h2 className="text-3xl text-center font-MontserratBold">OFERTAS</h2>
          <div
            id="ofertas-cards-container"
            className="flex flex-row flex-nowrap justify-between py-10 gap-10 overflow-hidden"
          >
            {test_products.map((product, index) => {
              return (
                <>
                  {product.old_price && (
                    <Link href={`/products/${product.id}`} key={index}>
                      <ProductCard
                        props={{ product: product, isFavorite: true }}
                      />
                    </Link>
                  )}
                </>
              );
            })}
          </div>
          {/* arrows */}
          <div className="absolute -left-20  top-1/2 sm:flex -translate-y-1/2 transform justify-between hidden">
            <div className="bg-white rounded-full shadow-lg opacity-70 hover:cursor-pointer hover:opacity-85">
              <ArrowIcon width={40} height={40} fill={colors.grey} />
            </div>
          </div>
          <div className="absolute -right-20 top-1/2 sm:flex -translate-y-1/2 transform justify-between hidden">
            <div className="rotate-180 bg-white rounded-full shadow-lg opacity-70 hover:cursor-pointer hover:opacity-85">
              <ArrowIcon width={40} height={40} fill={colors.grey} />
            </div>
          </div>
        </section>
        {/* SOCIAL */}
        <Social />
        {/* INFO */}
        <Info />
      </div>
    </>
  );
}
