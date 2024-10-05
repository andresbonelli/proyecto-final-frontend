import { NextResponse, NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const accessToken = req.cookies.get("access_token_cookie");
  const refreshToken = req.cookies.get("refresh_token_cookie");

  return NextResponse.next();
}
