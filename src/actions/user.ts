"use server";

import api from "../services/api";
import { UserInfoDto } from "../utils/interfaces";

export async function updateUserInfo(
  id: string,
  userInfo: UserInfoDto,
  token: string
) {
  try {
    const res = await api.put(`/api/Users/${id}`, userInfo, {
      headers: {
        Authorization: `Bearer ${token}`,
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
