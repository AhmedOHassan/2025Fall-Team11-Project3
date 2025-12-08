/**
 * @fileoverview App middleware (unused)
 * @description Legacy middleware file - main middleware is at root level
 * @author Howl2Go Dev Team
 * @date 2025
 */

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("accessToken")?.value;

  if (!token && req.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}
