import { NextResponse, NextRequest } from "next/server";
import { verifySession } from "./lib/session";
import { Role } from "./utils/interfaces";

export async function middleware(req: NextRequest) {
  const session = await verifySession();

  if (!session || session.role === Role.CUSTOMER) {
    return Response.redirect(new URL("/", req.url));
  }
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
