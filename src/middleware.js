import { NextResponse } from "next/server";
// import jwtDecode from "jwt-decode";

export default function middleware(req) {
  const { cookies, url } = req;

    let token = cookies.get("UoXa-I")?.value;
    if (token) token = JSON.parse(token);

    if (url.includes("auth") && token) {
      const redirect_url = new URL("/student-panel/dashboard", url);
      return NextResponse.redirect(redirect_url);
    }
    if (url.includes("panel") && !token) {
      const redirect_url = new URL("/auth/login", url);
      return NextResponse.redirect(redirect_url);
    }
    if (url.includes("pricing") && !token) {
      const redirect_url = new URL("/auth/login", url);
      return NextResponse.redirect(redirect_url);
    }
    if (url.includes("video") && !token) {
      const redirect_url = new URL("/auth/login", url);
      return NextResponse.redirect(redirect_url);
    }
  

  return NextResponse.next();
}
