import useProducts from "@/hooks/useProducts";
import { verifySession } from "@/lib/session";
import api from "@/services/api";
import { calculateDiscountPerc } from "@/utils";
import { ProductFromDB } from "@/utils/interfaces";
import { cookies } from "next/headers";

export default async function AdminProducts() {
  const cookie = cookies().get("access_token_cookie");
  const session = await verifySession();
  const userID = session?.id;
  const res = await api.get(`/api/products/get_by_staff/${userID}`, {
    headers: {
      Authorization: `Bearer ${cookie?.value}`,
    },
  });
  console.log(res.data);
  const products: ProductFromDB[] = res.data;

  return (
    <div className=" flex flex-col justify-start bg-white ">
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
          <button className="text-sm font-MontserratSemibold bg-softBlue hover:bg-blue text-white py-2 px-4 rounded-md">
            Nuevo producto
          </button>
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
        {products.length > 0 && (
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
