import { getAdminProducts } from "@/actions/admin";
import AdminProductsTable from "@/app/components/admin/products_table";
import { verifySession } from "@/lib/session";
import Link from "next/link";

export default async function AdminProducts() {
  const session = await verifySession();
  const products = await getAdminProducts(session);
  return (
    <div className="flex flex-col justify-start bg-white">
      <AdminProductsTable products={products ?? []} />
    </div>
  );
}
