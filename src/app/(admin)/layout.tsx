import { verifySession } from "@/lib/session";
import AsideMenu from "../components/admin/aside_menu";
import AdminHeader from "../components/admin/header";
import { Role } from "@/utils/interfaces";

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await verifySession();
  return (
    <>
      <AdminHeader />
      <main className="flex flex-row flex-auto bg-background  ">
        <AsideMenu showUsers={session.role === Role.ADMIN} />
        <div className="flex-auto">{children}</div>
      </main>
    </>
  );
}
