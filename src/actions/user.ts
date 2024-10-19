"use server";

/** Get and update User info actions */
import { cookies } from "next/headers";
import api from "../services/api";
import { AdminUserInfoDto, UserFromDB, UserInfoDto } from "../utils/interfaces";

export async function createUser(
  userInfo: AdminUserInfoDto
): Promise<UserFromDB | any> {
  const cookie = cookies().get("access_token_cookie");
  try {
    const res = await api.post("/api/Users/", userInfo, {
      headers: {
        Authorization: `Bearer ${cookie?.value}`,
      },
    });
    if (res.status === 200) {
      console.log(res.data);
      return { success: { newUser: res.data } };
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

export async function updateUserInfo(
  id: string,
  userInfo: UserInfoDto | AdminUserInfoDto,
  makingAdmin?: boolean
) {
  const cookie = cookies().get("access_token_cookie");
  const url = makingAdmin ? `/api/Users/make_admin/${id}` : `/api/Users/${id}`;
  try {
    const res = await api.put(url, userInfo, {
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
