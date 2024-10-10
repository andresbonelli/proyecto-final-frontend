import AsideMenu from "../components/admin/aside_menu";
import AdminHeader from "../components/admin/header";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AdminHeader />
      <main className="flex flex-row w-screen min-h-screen bg-background  ">
        <AsideMenu />
        <div className="flex-auto">{children}</div>
      </main>
    </>
  );
}
