import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "./components/footer/index";
import Header from "./components/header/index";
import Navbar from "./components/navbar";

export const metadata: Metadata = {
  title: "E-Commerce by Bootcamps 3.0",
  description: "Devlights 2024 Bootcamp final project frontend e-commerce app",
};

const navLinks = [
  {
    label: "Inicio",
    link: "/",
  },
  {
    label: "Ropa",
    link: "/clothing",
  },
  {
    label: "Accesorios",
    link: "/office",
  },
  {
    label: "Contacto",
    link: "/contact",
  },
  {
    label: "Ayuda",
    link: "/help",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-Montserrat antialiased min-h-screen bg-background">
        <Header />
        <Navbar fixed links={navLinks} />
        <main className="flex flex-col justify-start justify-items-center min-h-screen mt-36 2xl:px-80 xl:px-60 lg:px-40 md:px-20 px-10 -z-50">
          <div
            id="container"
            className="border border-red flex flex-col flex-auto justify-items-center bg-white mb-5 -z-40"
          >
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
