import { verifySession } from "@/lib/session";
import AsideMenu from "../components/admin/aside_menu";
import AdminHeader from "../components/admin/header";

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await verifySession();
  return (
    <>
      <AdminHeader />
      <main className="flex flex-row h-screen bg-background  ">
        <AsideMenu showUsers={session.role === "admin"} />
        <div className="flex-auto">{children}</div>
      </main>
    </>
  );
}
