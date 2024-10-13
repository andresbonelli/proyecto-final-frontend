"use server";

import api from "@/services/api";
import {
  ProductDto,
  ProductFromDB,
  Role,
  UserFromDB,
} from "@/utils/interfaces";
import { cookies } from "next/headers";

const cookie = cookies().get("access_token_cookie");

export async function getAdminProducts(session: UserFromDB) {
  const userID = session?.id;
  try {
    const res = await api.get(
      session.role === Role.ADMIN
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
        session.role === Role.ADMIN ? res.data["product_list"] : res.data;

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

export async function createProduct(
  product: ProductDto
): Promise<ProductFromDB | any> {
  try {
    const res = await api.post("/api/products", product, {
      headers: {
        Authorization: `Bearer ${cookie?.value}`,
      },
    });
    if (res.status === 201) {
      return { success: res.data };
    } else {
      console.error(res.data);
      return { error: res.data.detail };
    }
  } catch (error: any) {
    if (error.response) {
      console.error(error.response.data);
      return { error: error.response.data.detail };
    }
  }
}
