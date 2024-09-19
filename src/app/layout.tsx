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
      <body className="font-Montserrat antialiased min-h-screen max-w-fit bg-background flex flex-col">
        <div className="fixed top-0 w-full z-50">
          <Header />
          <Navbar fixed links={navLinks} />
        </div>
        <main className="flex flex-col min-h-screen sm:mt-36 mt-20 ">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
