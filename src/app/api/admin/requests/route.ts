import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { isAdminRequest } from "@/lib/admin-auth"
import { connectDB } from "@/lib/mongodb"
import ServiceRequest from "@/models/ServiceRequest"

export async function GET(request: NextRequest) {
  if (!(await isAdminRequest(request))) {
    return NextResponse.json(
      {
        success: false,
        message: "Unauthorized",
      },
      { status: 401 }
    )
  }

  try {
    await connectDB()

    const requests = await ServiceRequest.find().sort({
      createdAt: -1,
    })

    return NextResponse.json({
      success: true,
      data: requests,
    })
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch requests",
      },
      { status: 500 }
    )
  }
}
