import { NextResponse, NextRequest } from "next/server";
import { jwtDecode } from "jwt-decode";
import api from "./app/services/api";

export async function middleware(req: NextRequest) {
  const accessToken = req.cookies.get("access_token");
  const refreshToken = req.cookies.get("refresh_token");

  if (accessToken) {
    req.headers.set("Authorization", `Bearer ${accessToken}`);
  }

  return NextResponse.next();
}
