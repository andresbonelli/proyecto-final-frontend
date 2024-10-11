import getAdminProducts from "@/actions/admin";
import { verifySession } from "@/lib/session";
import { calculateDiscountPerc } from "@/utils";
import Link from "next/link";

export default async function AdminProducts() {
  const session = await verifySession();
  const products = await getAdminProducts(session);
  return (
    <div className="flex flex-col justify-start bg-white">
      <div className=" flex flex-col justify-start p-8 gap-8">
        <h1 className="w-full text-left font-MontserratBold text-2xl ">
          Mis Productos
        </h1>
        <div className="flex flex-row justify-between items-center  ">
          <input
            type="text"
            placeholder="buscar..."
            className="bg-background border p-2 text-grey rounded-md"
          />
          <Link
            href="/dashboard/products/create_new"
            className="text-sm font-MontserratSemibold bg-softBlue hover:bg-blue text-white py-2 px-4 rounded-md"
          >
            Nuevo producto
          </Link>
        </div>
      </div>

      <table>
        <thead>
          <tr className="bg-background border text-xs text-gray-500">
            <th className="p-2">NOMBRE</th>
            <th className="p-2">CATEGORIA</th>
            <th className="p-2">DESCRIPCION</th>
            <th className="p-2">PRECIO</th>
            <th className="p-2">DESC.</th>
            <th className="p-2">SKU</th>
            <th className="p-2">STOCK</th>
            <th className="p-2">VENTAS</th>
            <th className="p-2">ACCIONES</th>
          </tr>
        </thead>
        {products && (
          <tbody>
            {products.map((product) => {
              return (
                <tr
                  key={product.id}
                  className="bg-white hover:bg-background border text-md"
                >
                  <td className="p-4 font-MontserratSemibold">
                    {product.name}
                  </td>
                  <td className="p-4 font-MontserratSemibold">
                    {product.category ?? "-"}
                  </td>
                  <td className="p-4 text-gray-500">
                    {product.description ?? "Sin descripción"}
                  </td>
                  <td className="p-4 font-MontserratSemibold">
                    ${product.price}
                  </td>
                  <td className="p-4 font-MontserratSemibold">
                    {product.old_price
                      ? `${calculateDiscountPerc(
                          product.old_price,
                          product.price
                        )}%`
                      : "-"}
                  </td>
                  <td className="p-4">{product.sku ?? "-"}</td>
                  <td className="p-4">{product.stock}</td>
                  <td className="p-4">{product.sales_count ?? "0"}</td>
                  <td className="p-4 flex flex-row items-center gap-2">
                    <button className="text-sm font-MontserratSemibold bg-softBlue hover:bg-blue text-white p-2  rounded-md">
                      Editar
                    </button>
                    <button className="text-sm font-MontserratSemibold bg-red hover:bg-redder text-white p-2 rounded-md">
                      Eliminar
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        )}
      </table>
    </div>
  );
}
