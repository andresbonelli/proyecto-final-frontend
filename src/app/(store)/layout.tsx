import Footer from "@/app/components/footer";
import Header from "@/app/components/header";

export default function StoreLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative flex flex-col font-Montserrat antialiased min-h-screen max-w-fit bg-background ">
        <Header />
        <main className="flex sm:flex-row flex-col min-h-screen justify-center sm:mt-36 mt-20 2xl:px-80 xl:px-60 lg:px-40 md:px-20 px-3 mb-5 ">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
