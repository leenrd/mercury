import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export const middleware = (request: NextRequest) => {
  const protectedRoutes = ["/settings", "/transactions", "/vault", "/overview"];
  // auth checker
  const token = request.cookies.get("acc_token");

  const path = request.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isAuthenticated = Boolean(token);

  if (isProtectedRoute && !isAuthenticated) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }

  if (
    !isProtectedRoute &&
    isAuthenticated &&
    (path === "/login" || path === "/signup")
  ) {
    return NextResponse.redirect(new URL("/overview", request.nextUrl));
  }

  return NextResponse.next();
};

export const config = {
  matcher: [
    "/settings",
    "/transactions",
    "/vault",
    "/overview",
    "/market",
    "/login",
    "/signup",
    "/",
  ],
};
