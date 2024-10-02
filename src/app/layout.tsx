"use client";

import "./globals.css";
import Footer from "./components/footer/index";
import Header from "./components/header/index";
import { CartProvider } from "./context/CartContextProvider";
import { UserProvider } from "./context/UserContextProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative flex flex-col font-Montserrat antialiased min-h-screen max-w-fit bg-background ">
        <UserProvider>
          <CartProvider>
            <Header />
            <main className="flex flex-col min-h-screen sm:mt-36 mt-20 ">
              {children}
            </main>
            <Footer />
          </CartProvider>
        </UserProvider>
      </body>
    </html>
  );
}
