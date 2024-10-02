export default function StoreLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      id="main-sections"
      className="flex flex-col 2xl:px-80 xl:px-60 lg:px-40 md:px-20 px-3 mb-5"
    >
      {children}
    </div>
  );
}
