"use server";

/** Get and update User info actions */
import { cookies } from "next/headers";
import api from "../services/api";
import { UserInfoDto } from "../utils/interfaces";

export async function updateUserInfo(id: string, userInfo: UserInfoDto) {
  const cookie = cookies().get("access_token_cookie");
  try {
    const res = await api.put(`/api/Users/${id}`, userInfo, {
      headers: {
        Authorization: `Bearer ${cookie?.value}`,
      },
    });
    if (res.status === 200) {
      console.log(res.data);
      return { success: { updatedUser: res.data } };
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

export async function getUser(id: string) {
  const cookie = cookies().get("access_token_cookie");
  try {
    const res = await api.get(`/api/Users/${id}`, {
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


