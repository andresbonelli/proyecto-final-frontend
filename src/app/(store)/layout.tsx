import { CartProvider } from "@/context/CartContextProvider";
import Footer from "../components/footer";
import Header from "../components/header";

export default function StoreLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CartProvider>
      <Header />
      <main className="flex flex-col min-h-screen sm:mt-[135px] mt-[150px] ">
        <div
          id="main-sections"
          className="flex flex-col 2xl:px-80 xl:px-60 lg:px-40 md:px-20 px-3 mb-5"
        >
          {children}
        </div>
      </main>
      <Footer />
    </CartProvider>
  );
}
