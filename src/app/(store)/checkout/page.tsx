import CheckoutComponent from "@/app/components/checkout_component";
import { cookies } from "next/headers";

export default async function CheckoutPage() {
  const cookie = cookies().get("access_token_cookie") || null;

  return <CheckoutComponent token={cookie?.value} />;
}
