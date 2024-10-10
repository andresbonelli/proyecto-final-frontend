import "./globals.css";
import Footer from "./components/footer/index";
import Header from "./components/header/index";
import type { Metadata } from "next";
import { CartProvider } from "../context/CartContextProvider";

export const metadata: Metadata = {
  title: "E-Commerce by Bootcamps 3.0",
  description: "Devlights 2024 Bootcamp final project frontend e-commerce app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative flex flex-col font-Montserrat antialiased min-h-screen max-w-fit bg-background ">
        {children}
      </body>
    </html>
  );
}
