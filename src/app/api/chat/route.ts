import { NextResponse } from "next/server"
import { connectDB } from "@/lib/mongodb"
import ChatMessage from "@/models/ChatMessage"

export const dynamic = "force-dynamic"

export async function POST(req: Request) {
  try {
    await connectDB()

    const body = await req.json()
    const name = String(body.name || "").trim()
    const email = String(body.email || "").trim()
    const phone = String(body.phone || "").trim()
    const topic = String(body.topic || "").trim()
    const message = String(body.message || "").trim()

    if (!name || !topic || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Name, topic, and message are required",
        },
        { status: 400 }
      )
    }

    const chatMessage = await ChatMessage.create({
      name,
      email,
      phone,
      topic,
      message,
    })

    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully",
        data: chatMessage,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong",
      },
      { status: 500 }
    )
  }
}
