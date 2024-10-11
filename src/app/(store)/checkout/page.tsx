import CheckoutComponent from "@/app/components/checkout_component";
import { verifySession } from "@/lib/session";
import { getUserData } from "@/actions/auth";

export default async function CheckoutPage() {
  const session = await verifySession();
  
  const user = session ? await getUserData(session.id) : null;

  return <CheckoutComponent user={user} />;
}
