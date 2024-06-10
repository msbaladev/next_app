import axios from "axios";

import { NextResponse } from "next/server";
import { token } from "./auth.config";
import { cookies } from "next/headers";

export async function middleware(request) {
  const cookieStore = cookies();
  const token = cookieStore.get("token");

  if (!token) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  return NextResponse.next();
}




export const config = {
  matcher: ["/blog", "/data", "/"],
};
