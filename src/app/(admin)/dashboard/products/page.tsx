import { getAdminProducts } from "@/actions/admin";
import AdminProductsTable from "@/app/components/admin/products_table";
import { verifySession } from "@/lib/session";
import Link from "next/link";

export default async function AdminProducts() {
  const session = await verifySession();
  const products = await getAdminProducts(session);
  return (
    <div className="flex flex-col justify-start bg-white">
      <div className="flex flex-col justify-start p-8 gap-8">
        <h1 className="w-full text-left font-MontserratBold text-2xl ">
          Mis Productos
        </h1>
        <div className="flex flex-row justify-between items-center  ">
          {/* <input
            type="text"
            placeholder="buscar..."
            className="bg-background border p-2 text-grey rounded-md"
          /> */}
          <Link
            href="/dashboard/products/create_new"
            className="text-sm font-MontserratSemibold bg-softBlue hover:bg-blue text-white py-2 px-4 rounded-md"
          >
            Nuevo producto
          </Link>
        </div>
      </div>
      <div className="h-[700px] overflow-y-auto border-y">
        <AdminProductsTable products={products ?? []} />
      </div>
    </div>
  );
}
