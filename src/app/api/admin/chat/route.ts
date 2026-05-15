import { NextRequest, NextResponse } from "next/server"
import { isAdminRequest } from "@/lib/admin-auth"
import { connectDB } from "@/lib/mongodb"
import ChatMessage from "@/models/ChatMessage"

export const dynamic = "force-dynamic"

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

    const messages = await ChatMessage.find().sort({
      createdAt: -1,
    })

    return NextResponse.json({
      success: true,
      data: messages,
    })
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch chat messages",
      },
      { status: 500 }
    )
  }
}
