import CheckoutComponent from "@/app/components/checkout_component";
import { verifySession } from "@/lib/session";
import { getUserData } from "@/actions/auth";

export default async function CheckoutPage() {
  const session = await verifySession();
  let user;
  if (session) {
    user = await getUserData(session.id);
  }

  return <CheckoutComponent user={user} />;
}
