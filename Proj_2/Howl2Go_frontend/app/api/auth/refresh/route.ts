/**
 * @fileoverview Token refresh API route
 * @description Refreshes access token using refresh token
 * @author Howl2Go Dev Team
 * @date 2025
 */

import { cookies } from "next/headers";

export async function POST() {
  const cookieStore = await cookies();
  const refreshToken = cookieStore.get("refreshToken")?.value;

  const res = await fetch(`${process.env.BACKEND_URL}/api/users/refresh-token`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ refreshToken })
  });

  const data = await res.json();
  if (!res.ok) return new Response(JSON.stringify(data), { status: 401 });

  cookieStore.set("accessToken", data.data.accessToken, {
    httpOnly: true, secure: true, path: "/"
  });

  return Response.json({ success: true });
}
