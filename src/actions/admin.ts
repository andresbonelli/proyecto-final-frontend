"use server";

import api from "@/services/api";
import {
  OrderFromDB as UserFromDb,
  ProductDto,
  ProductFromDB,
  Role,
  UserFromDB,
} from "@/utils/interfaces";
import { cookies } from "next/headers";

export async function getAdminProducts(session: UserFromDB) {
  const cookie = cookies().get("access_token_cookie");
  const userID = session?.id;
  try {
    const res = await api.get(
      session.role === Role.ADMIN
        ? "/api/products?limit=100"
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
export async function getAdminOrders(session: UserFromDB) {
  const cookie = cookies().get("access_token_cookie");
  const userID = session?.id;
  try {
    const res = await api.get(
      session.role === Role.ADMIN
        ? "/api/orders/get_all?limit=100"
        : `/api/orders/get_by_staff/${userID}`,
      {
        headers: {
          Authorization: `Bearer ${cookie?.value}`,
        },
      }
    );
    if (res.status === 200) {
      const orders: UserFromDb[] =
        session.role === Role.ADMIN ? res.data["orders"] : res.data;

      return orders;
    } else {
      console.error(res.data);
    }
  } catch (error: any) {
    if (error.response) {
      console.error(error.response.data);
    }
  }
}
export async function getAdminUsers(): Promise<UserFromDB | any> {
  const cookie = cookies().get("access_token_cookie");
  try {
    const res = await api.get("/api/Users/?limit=100&projection=address%3D0", {
      headers: {
        Authorization: `Bearer ${cookie?.value}`,
      },
    });
    if (res.status === 200) {
      return res.data["users"];
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
  const cookie = cookies().get("access_token_cookie");
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
export async function editProduct(
  id: string,
  product: ProductDto
): Promise<ProductFromDB | any> {
  const cookie = cookies().get("access_token_cookie");
  try {
    const res = await api.patch(`/api/products/${id}`, product, {
      headers: {
        Authorization: `Bearer ${cookie?.value}`,
      },
    });
    if (res.status === 202) {
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

export async function deleteProduct(id: string): Promise<ProductFromDB | any> {
  const cookie = cookies().get("access_token_cookie");
  try {
    const res = await api.delete(`/api/products/${id}`, {
      headers: {
        Authorization: `Bearer ${cookie?.value}`,
      },
    });
    if (res.status === 202) {
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
