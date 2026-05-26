import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { createSessionToken, setSessionCookie } from "@/lib/session";

export async function POST(request: Request) {
  const formData = await request.formData();
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const password = String(formData.get("password") ?? "");
  const callbackUrl = String(formData.get("callbackUrl") ?? "/admin");

  if (!email || !password) {
    return NextResponse.redirect(new URL("/login?error=missing", request.url));
  }

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return NextResponse.redirect(new URL("/login?error=invalid", request.url));

  const ok = await bcrypt.compare(password, user.passwordHash);
  if (!ok) return NextResponse.redirect(new URL("/login?error=invalid", request.url));

  const token = await createSessionToken({
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
  });

  const response = NextResponse.redirect(new URL(callbackUrl.startsWith("/") ? callbackUrl : "/admin", request.url));
  setSessionCookie(response, token);
  return response;
}
