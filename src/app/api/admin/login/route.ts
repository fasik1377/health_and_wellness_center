import { NextResponse } from "next/server"
import {
  ADMIN_COOKIE_NAME,
  createAdminSessionCookie,
  verifyAdminCredentials,
} from "@/lib/admin-auth"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const isValidLogin = await verifyAdminCredentials(
      body.email || "",
      body.password || ""
    )

    if (!isValidLogin) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid email or password",
        },
        { status: 401 }
      )
    }

    const response = NextResponse.json({
      success: true,
      message: "Logged in successfully",
    })

    const sessionCookie = await createAdminSessionCookie()

    response.cookies.set({
      name: ADMIN_COOKIE_NAME,
      value: sessionCookie.value,
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: sessionCookie.maxAge,
    })

    return response
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      {
        success: false,
        message: "Unable to log in",
      },
      { status: 500 }
    )
  }
}
