import getAdminProducts from "@/actions/admin";
import AdminDashboardComponent from "@/app/components/admin/dashboard_component";
import { verifySession } from "@/lib/session";
import api from "@/services/api";
import { ProductFromDB } from "@/utils/interfaces";
import { cookies } from "next/headers";

export default async function AdminDashboard() {
  const session = await verifySession();

  const products = await getAdminProducts(session);

  return (
    <AdminDashboardComponent
      isAdmin={session.role === "admin"}
      products={products ?? []}
    />
  );
}
