import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export const middleware = (request: NextRequest) => {
  const paths = {
    protectedRoutes: [
      "/profile",
      "/settings",
      "/account",
      "/transactions",
      "/vault",
    ],
    publicRoutes: ["/login", "/signup"],
    commonRoutes: ["/market"],
  };

  // const isAuth = request.cookies.has("acc_token");
  // temp auth state
  let isAuth = true;

  const path = request.nextUrl.pathname;
  const inProtectedRoute = paths.protectedRoutes.includes(path);
  const inPublicRoute = paths.publicRoutes.includes(path);

  if (!isAuth && inProtectedRoute) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }

  if (isAuth && inPublicRoute) {
    return NextResponse.redirect(new URL("/account", request.nextUrl));
  }

  return NextResponse.next();
};

export const config = {
  matcher: [
    "/profile",
    "/settings",
    "/account",
    "/market",
    "/transactions",
    "/vault",
    "/login",
    "/signup",
    "/",
  ],
};
