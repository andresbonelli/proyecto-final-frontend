"use server";

import api from "../services/api";

export async function verify({
  token,
  email,
}: {
  token: string;
  email: string;
}) {
  try {
    const res = await api.post("/auth/verify", { token: token, email: email });
    if (res.status === 200) {
      return { success: res.data["message"] };
    } else {
      console.error(res.data);
      return { error: res.data };
    }
  } catch (error: any) {
    console.error(error.response.data);
    return { error: error.response.data.detail };
  }
}
