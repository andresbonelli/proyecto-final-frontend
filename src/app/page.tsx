import Carrousel from "./components/carrousel";
import ArrowIcon from "./components/icons/Arrow";
import ProductCard from "./components/product_card";
import { colors } from "./constants";
import { test_products } from "@/public/test_data/test_products";

export default function Home() {
  return (
    <>
      {/* HOME PAGE TOP  */}
      <div
        id="carrousel"
        className="w-screen overflow-hidden place-self-center"
      >
        <Carrousel
          images={[
            "../public/images/slide1.webp",
            "../public/images/slide2.webp",
          ]}
        />
      </div>
      {/* HOME PAGE SECTIONS */}
      <div
        id="main-sections"
        className="fex flex-col 2xl:px-80 xl:px-60 lg:px-40 md:px-20 px-3 mb-5"
      >
        {/* PRODUCTS */}
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
                    <div key={index}>
                      <ProductCard
                        props={{ product: product, isFavorite: false }}
                      />
                    </div>
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
        {/* BILLBOARD */}
        <div
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
        </div>
        {/* OFERTAS */}
        <div
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
                    <div key={index}>
                      <ProductCard
                        props={{ product: product, isFavorite: false }}
                      />
                    </div>
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
        </div>
        {/* SOCIAL */}
        <div
          id="social-container"
          className="flex flex-col justify-start text-center  py-10 gap-10"
        >
          <h1 className="text-2xl font-MontserratBold">links a redes</h1>
          <div className="flex flex-row flex-wrap justify-center gap-5">
            <p>instagram</p>
            <p>instagram</p>
            <p>instagram</p>
            <p>instagram</p>
            <p>instagram</p>
            <p>instagram</p>
          </div>
        </div>
        {/* CONTACTO */}
        <div
          id="contact-container"
          className="flex flex-col justify-start text-center bg-white py-10 gap-10"
        >
          <h1 className="text-2xl font-MontserratBold ">contacto</h1>
        </div>
      </div>
    </>
  );
}
