export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative flex flex-col font-Montserrat antialiased min-h-screen max-w-fit bg-background ">
        <main className="flex flex-col min-h-screen">{children}</main>
      </body>
    </html>
  );
}
