import CheckoutComponent from "@/app/components/checkout_component";
import { verifySession } from "@/lib/session";
import { getUser } from "@/actions/user";

export default async function CheckoutPage() {
  const session = await verifySession();
  
  const user = session ? await getUser(session.id) : null;

  return <CheckoutComponent user={user} />;
}
