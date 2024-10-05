import api from "@/app/services/api";

export default async function User() {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://127.0.0.1:8000";
  const res = await fetch(baseUrl + "/auth/authenticated_user");

  return <h1>My user</h1>;
}
