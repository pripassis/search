import { NextRequest, NextResponse } from "next/server";
import { verifySessionToken } from "@/lib/session";

export default async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const session = await verifySessionToken(request.cookies.get("lp_session")?.value);

  if (pathname.startsWith("/admin") && !session) {
    const url = new URL("/login", request.url);
    url.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(url);
  }

  if (pathname === "/login" && session) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api/auth|api/search|api/admin|_next/static|_next/image|favicon\\.ico).*)"],
};
