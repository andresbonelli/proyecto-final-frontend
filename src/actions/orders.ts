"use server";

import { cookies } from "next/headers";
import api from "../services/api";
import { OrderFromDB } from "@/utils/interfaces";

export async function createOrder(order: any) {
  const cookie = cookies().get("access_token_cookie");
  try {
    const res = await api.post("/api/orders/", order, {
      headers: {
        Authorization: `Bearer ${cookie?.value}`,
      },
    });
    if (res.status === 201) {
      return {
        success: {
          message: res.data["message"],
          id: res.data["inserted_id"],
        },
      };
    } else {
      console.error(res.data);
      return { error: res.data };
    }
  } catch (error: any) {
    if (error.response) {
      console.error(error.response.data);
      return { error: error.response.data.detail };
    }
  }
}

export async function completeOrder(id: string) {
  const cookie = cookies().get("access_token_cookie");
  try {
    const res = await api.put(
      `/api/orders/complete/${id}`,
      {},
      {
        //passing an empty body!
        headers: {
          Authorization: `Bearer ${cookie?.value}`,
        },
      }
    );
    if (res.status === 200) {
      console.log(res.data);
      return {
        success: {
          message: res.data["message"],
          order: res.data["order"],
        },
      };
    } else {
      console.error(res.data);
      return { error: res.data };
    }
  } catch (error: any) {
    if (error.response) {
      console.error(error.response.data);
      return { error: error.response.data.detail };
    }
  }
}

export async function cancelOrder(id: string) {
  const cookie = cookies().get("access_token_cookie");
  try {
    const res = await api.post("/api/orders/cancel/" + id, {
      headers: {
        Authorization: `Bearer ${cookie?.value}`,
      },
    });
    if (res.status === 200) {
      console.log(res.data);
      return { success: res.data["message"] };
    } else {
      console.error(res.data);
      return { error: res.data };
    }
  } catch (error: any) {
    if (error.response) {
      console.error(error.response.data);
      return { error: error.response.data.detail };
    }
  }
}

export async function getUserOrders(id: string): Promise<OrderFromDB[] | any> {
  const cookie = cookies().get("access_token_cookie");
  try {
    const res = await api.get(`api/orders/get_by_customer/${id}`, {
      headers: {
        Authorization: `Bearer ${cookie?.value}`,
      },
    });
    if (res.status === 200) {
      return res.data;
    } else {
      console.error(res.data);
      return { error: res.data };
    }
  } catch (error: any) {
    if (error.response) {
      console.error(error.response.data);
      return { error: error.response.data.detail };
    }
  }
}
