import "server-only";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { UserFromDB } from "../utils/interfaces";

const secretKey = process.env.SECRET_KEY;
const encodedKey = new TextEncoder().encode(secretKey);

export async function verifySession(
  session: string | undefined = ""
): Promise<UserFromDB | any> {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ["HS256"],
    });
    return payload["subject"];
  } catch (error) {
    console.log("Failed to verify session");
  }
}
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
}

export function deleteSession() {
  cookies().delete("access_token_cookie");
  cookies().delete("refresh_token_cookie");
}
