import { NextResponse } from "next/server"
import { connectDB } from "@/lib/mongodb"
import ServiceRequest from "@/models/ServiceRequest"

export async function POST(req: Request) {
  try {
    await connectDB()

    const body = await req.json()
    const name = String(body.name || "").trim()
    const phone = String(body.phone || "").trim()
    const email = String(body.email || "").trim()
    const relationship = String(body.relationship || "").trim()
    const topics = Array.isArray(body.topics)
      ? body.topics
          .map((topic: unknown) => String(topic).trim())
          .filter(Boolean)
      : []
    const message = String(body.message || "").trim()

    if (!name || !phone || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Name, phone, email, and message are required",
        },
        { status: 400 }
      )
    }

    const request = await ServiceRequest.create({
      name,
      phone,
      email,
      relationship,
      topics,
      message,
    })

    return NextResponse.json(
      {
        success: true,
        message: "Request submitted successfully",
        data: request,
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
