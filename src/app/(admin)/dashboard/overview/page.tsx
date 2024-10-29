import { getAdminOrders, getAdminProducts } from "@/actions/admin";
import SalesChart from "@/app/components/admin/charts";
import { verifySession } from "@/lib/session";
import Image from "next/image";

export default async function AdminOverview() {
  const session = await verifySession();
  const products = await getAdminProducts(session);
  const orders = await getAdminOrders(session);

  const now = new Date();
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(now.getDate() - 30);

  const lastMonthOrders = orders?.filter((order) => {
    const createdAt = new Date(order.created_at);
    return createdAt >= thirtyDaysAgo && createdAt <= now;
  });

  return (
    <div className="flex flex-col justify-start ">
      <div className="flex flex-col justify-start p-8 gap-8 border-b bg-white">
        <h1 className="w-full text-left font-MontserratBold text-2xl ">
          Resumen
        </h1>
      </div>
      <div className="flex flex-col sm:flex-row justify-between gap-8 p-5">
        <div className="flex flex-col sm:w-2/3 bg-white border rounded-lg shadow-sm p-6">
          <div className="flex flex-col justify-between">
            <h1 className="w-full text-left font-MontserratBold text-2xl ">
              $
              {lastMonthOrders?.reduce((sum, order) => {
                return sum + (order.total_price || 0);
              }, 0)}
            </h1>
            <p className="font-MontserratLight text-grey">Ventas este mes</p>
          </div>
          <div
            id="divider-line"
            className="border border-grey w-full my-3"
          ></div>
          {orders && <SalesChart orders={orders} />}
        </div>
        <div className="flex flex-col sm:w-1/3 bg-white border rounded-lg shadow-sm  py-6 px-3 gap-3">
          <h1 className="w-full text-left font-MontserratSemibold text-lg ">
            Productos más vendidos:
          </h1>
          <div
            id="divider-line"
            className="border border-grey w-full my-3"
          ></div>

          <div className="flex flex-col justify-start gap-3 ">
            {products &&
              products
                .filter((product) => product.sales_count != null)
                .sort((a, b) => {
                  const salesA = a.sales_count ?? 0;
                  const salesB = b.sales_count ?? 0;
                  return salesB - salesA;
                })
                .map((product) => {
                  return (
                    <div
                      key={product.id}
                      className="flex flex-row justify-between items-center"
                    >
                      <div className="flex flex-row justify-between items-center gap-3">
                        <Image
                          src={product.image ?? ""}
                          alt={product.name.substring(0, 8)}
                          height={70}
                          width={70}
                          className="p-1"
                        />
                        <p className="text-sm font-MontserratSemibold">
                          {product.name}
                        </p>
                      </div>
                      {product.sales_count && (
                        <p className="text-sm font-MontserratBold">
                          ${product.sales_count * product.price}
                        </p>
                      )}
                    </div>
                  );
                })}
          </div>
        </div>
      </div>
    </div>
  );
}
