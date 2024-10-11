"use server";

import api from "@/services/api";
import { ProductFromDB, UserFromDB } from "@/utils/interfaces";
import { cookies } from "next/headers";

const cookie = cookies().get("access_token_cookie");

export default async function getAdminProducts(session: UserFromDB) {
  const userID = session?.id;
  try {
    const res = await api.get(
      session.role === "admin"
        ? "/api/products"
        : `/api/products/get_by_staff/${userID}`,
      {
        headers: {
          Authorization: `Bearer ${cookie?.value}`,
        },
      }
    );
    if (res.status === 200) {
      const products: ProductFromDB[] =
        session.role === "admin" ? res.data["product_list"] : res.data;

      return products;
    } else {
      console.error(res.data);
    }
  } catch (error: any) {
    if (error.response) {
      console.error(error.response.data);
    }
  }
}
