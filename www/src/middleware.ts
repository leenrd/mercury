import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export const middleware = (request: NextRequest) => {
  const paths = {
    protectedRoutes: ["/settings", "/transactions", "/vault", "/overview"],
    publicRoutes: ["/login", "/signup"],
    commonRoutes: ["/market"],
  };

  // const isAuth = localStorage.getItem("token");
  // temp auth state
  let isAuth = false;

  const path = request.nextUrl.pathname;
  const inProtectedRoute = paths.protectedRoutes.includes(path);
  const inPublicRoute = paths.publicRoutes.includes(path);

  if (!isAuth && inProtectedRoute) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }

  if (isAuth && inPublicRoute) {
    return NextResponse.redirect(new URL("/overview", request.nextUrl));
  }

  return NextResponse.next();
};

export const config = {
  matcher: [
    "/profile",
    "/settings",
    "/overview",
    "/market",
    "/transactions",
    "/vault",
    "/login",
    "/signup",
    "/",
  ],
};
