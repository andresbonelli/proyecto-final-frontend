import { getUserOrders } from "@/actions/orders";
import OrderCard from "@/app/components/cards/order_card";
import { verifySession } from "@/lib/session";
import { OrderFromDB } from "@/utils/interfaces";
import { redirect } from "next/navigation";

export default async function OrdersPage() {
  const session = await verifySession();
  const orders: OrderFromDB[] = session
    ? await getUserOrders(session?.id)
    : null;

  if (!session) {
    return redirect("/home");
  }

  return (
    <div className="flex flex-col pt-10 gap-5">
      <div
        id="orders-title-container"
        className="w-full flex flex-col bg-white shadow-xl gap-5 py-8 px-5"
      >
        <h2 className="w-full text-xl text-left">Mis Compras</h2>
      </div>
      {orders.length > 0 && (
        <>
          {orders
            .sort(
              (a, b) =>
                new Date(a.created_at).getDate() -
                new Date(b.created_at).getDate()
            )
            .map((order) => (
              <div key={order.id}>
                <OrderCard order={order} />
              </div>
            ))}
        </>
      )}
    </div>
  );
}
