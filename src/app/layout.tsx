import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/footer/index";
import Header from "./components/header/index";
import Navbar from "./components/navbar";

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
        <Header />
        <main className="flex flex-col min-h-screen sm:mt-36 mt-20 ">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
