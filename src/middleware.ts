import { NextRequest, NextResponse } from "next/server"
import { isAdminRequest } from "@/lib/admin-auth"

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const isProtectedAdminPage =
    pathname.startsWith("/admin") &&
    !pathname.startsWith("/admin/login")
  const isProtectedAdminApi = pathname.startsWith("/api/admin")

  if (!isProtectedAdminPage && !isProtectedAdminApi) {
    return NextResponse.next()
  }

  const isLoggedIn = await isAdminRequest(request)

  if (isProtectedAdminPage && !isLoggedIn) {
    return NextResponse.redirect(
      new URL("/admin/login", request.url)
    )
  }

  if (isProtectedAdminApi && !isLoggedIn) {
    return NextResponse.json(
      {
        success: false,
        message: "Unauthorized",
      },
      { status: 401 }
    )
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    "/admin/:path*",
    "/api/admin/chat/:path*",
    "/api/admin/requests/:path*",
  ],
}
