"use server";

import { cookies } from "next/headers";
import api from "../services/api";

const cookie = cookies().get("access_token_cookie");

export async function createOrder(order: any) {
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
  try {
    const res = await api.post("/api/orders/complete/" + id, {
      headers: {
        Authorization: `Bearer ${cookie?.value}`,
      },
    });
    if (res.status === 200) {
      console.log(res.data);
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

export async function cancelOrder(id: string) {
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
