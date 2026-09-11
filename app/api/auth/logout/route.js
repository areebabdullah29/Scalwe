import { NextResponse } from "next/server";
import { sessionCookieOptions } from "@/lib/auth";

export async function POST() {
  const response = NextResponse.json({ ok: true });
  const { name: cookieName, ...options } = sessionCookieOptions();
  response.cookies.set(cookieName, "", { ...options, maxAge: 0 });
  return response;
}
