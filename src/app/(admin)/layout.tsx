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
    <div className="relative overflow-hidden">
      <AdminHeader />
      <main className="flex flex-row flex-auto bg-background  ">
        <AsideMenu showUsers={session.role === Role.ADMIN} />
        <div className="w-5/6 flex-auto">{children}</div>
      </main>
    </div>
  );
}
