import "server-only";

import { jwtVerify } from "jose";
import { cookies } from "next/headers";
import { UserFromDB } from "../utils/interfaces";
// import api from "@/services/api";
// import { AxiosResponse } from "axios";

const secretKey = process.env.SECRET_KEY;
const encodedKey = new TextEncoder().encode(secretKey);

export function createSession({
  access_token,
  refresh_token,
}: {
  access_token: string;
  refresh_token: string;
}) {
  cookies().set("access_token_cookie", access_token, {
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
    sameSite: "lax",
    path: "/",
  });
  cookies().set("refresh_token_cookie", refresh_token, {
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
    sameSite: "lax",
    path: "/",
  });
  console.log("session created");
}
/*
async function refreshSession(): Promise<UserFromDB | any> {
  const refreshCookie = cookies().get("refresh_token_cookie");
  if (!refreshCookie) return null;
  try {
    console.log("refreshing...");
    const res: AxiosResponse<{ access_token: string; refresh_token: string }> =
      await api.post(
        "/auth/refresh",
        {},
        {
          headers: {
            Authorization: `Bearer ${refreshCookie.value}`,
          },
        }
      );
    if (res.status === 200) {
      const { access_token, refresh_token } = res.data;
      // createSession({ access_token, refresh_token });
      const { payload } = await jwtVerify(access_token, encodedKey, {
        algorithms: ["HS256"],
      });
      console.log(payload);
      return payload["subject"];
    } else {
      console.error("Failed to refresh tokens", res.data);
      return null;
    }
  } catch (error) {
    console.error("Error during token refresh:", error);
    return null;
  }
}
*/

export async function verifySession(): Promise<UserFromDB | any> {
  const cookie = cookies().get("access_token_cookie");
  if (!cookie) return null;
  try {
    const { payload } = await jwtVerify(cookie.value, encodedKey, {
      algorithms: ["HS256"],
    });
    return payload["subject"];
  } catch (error) {
    console.log("Failed to verify session");
    // return await refreshSession();
  }
}

export function deleteSession() {
  cookies().delete("access_token_cookie");
  cookies().delete("refresh_token_cookie");
}
