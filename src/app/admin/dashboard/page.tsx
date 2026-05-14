"use client"

import { useEffect, useMemo, useState } from "react"
import { useRouter } from "next/navigation"

import {
  Activity,
  CalendarDays,
  Clock3,
  LogOut,
  Mail,
  MessageCircle,
  Phone,
  ShieldCheck,
  User2,
  Users,
} from "lucide-react"

interface RequestItem {
  _id: string
  name: string
  phone: string
  email: string
  relationship: string
  topics: string[]
  message: string
  createdAt: string
}

interface ChatMessageItem {
  _id: string
  name: string
  email?: string
  phone?: string
  topic: string
  message: string
  status: "new" | "read"
  createdAt: string
}

export default function AdminDashboardPage() {
  const router = useRouter()

  const [requests, setRequests] = useState<RequestItem[]>([])
  const [chatMessages, setChatMessages] = useState<ChatMessageItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchRequests()
  }, [])

  const fetchRequests = async () => {
    try {
      const [requestsResponse, chatResponse] = await Promise.all([
        fetch("/api/admin/requests/"),
        fetch("/api/admin/chat/"),
      ])

      if (requestsResponse.status === 401 || chatResponse.status === 401) {
        router.push("/admin/login")
        return
      }

      const requestsResult = await requestsResponse.json()
      const chatResult = await chatResponse.json()

      setRequests(requestsResult.data || [])
      setChatMessages(chatResult.data || [])
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const logout = async () => {
    await fetch("/api/admin/logout/", {
      method: "POST",
    })

    router.push("/admin/login")
    router.refresh()
  }

  const totalRequests = requests.length
  const totalChatMessages = chatMessages.length

  const todayRequests = useMemo(() => {
    const today = new Date().toDateString()

    return requests.filter(
      (item) =>
        new Date(item.createdAt).toDateString() === today
    ).length
  }, [requests])

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f8fafc_0%,#eef7f5_100%)]">
      {/* Top Header */}
      <div className="relative overflow-hidden bg-[linear-gradient(135deg,#0f766e_0%,#0f172a_100%)] px-6 py-10 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-teal-300 blur-3xl" />
          <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-cyan-400 blur-3xl" />
        </div>

        <div className="relative mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur-md">
              <ShieldCheck className="h-4 w-4 text-teal-200" />
              Secure Admin Panel
            </div>

            <h1 className="mt-5 text-5xl text-white font-bold tracking-tight">
              Wellness Dashboard
            </h1>

            <p className="mt-4 max-w-2xl text-lg text-slate-200">
              Manage incoming PASA service requests, monitor
              communication, and track support inquiries in one place.
            </p>
          </div>

          <button
            onClick={logout}
            className="inline-flex items-center justify-center rounded-2xl bg-red-500 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-red-600"
          >
            <LogOut className="mr-2 h-5 w-5" />
            Logout
          </button>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-10">
        {/* Stats */}
        <div className="grid gap-6 md:grid-cols-4">
          <div className="rounded-3xl border border-white/60 bg-white/80 p-6 shadow-xl backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-wider text-slate-500">
                  Total Requests
                </p>

                <h2 className="mt-3 text-4xl font-bold text-slate-900">
                  {totalRequests}
                </h2>
              </div>

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-100 text-teal-700">
                <Users className="h-8 w-8" />
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/60 bg-white/80 p-6 shadow-xl backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-wider text-slate-500">
                  Today
                </p>

                <h2 className="mt-3 text-4xl font-bold text-slate-900">
                  {todayRequests}
                </h2>
              </div>

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700">
                <CalendarDays className="h-8 w-8" />
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/60 bg-white/80 p-6 shadow-xl backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-wider text-slate-500">
                  Status
                </p>

                <h2 className="mt-3 text-2xl font-bold text-emerald-600">
                  System Active
                </h2>
              </div>

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                <Activity className="h-8 w-8" />
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/60 bg-white/80 p-6 shadow-xl backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-wider text-slate-500">
                  Chat Messages
                </p>

                <h2 className="mt-3 text-4xl font-bold text-slate-900">
                  {totalChatMessages}
                </h2>
              </div>

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-100 text-violet-700">
                <MessageCircle className="h-8 w-8" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-slate-900">
              Chat Messages
            </h2>

            <p className="mt-2 text-slate-600">
              Questions submitted from the homepage quick chat
            </p>
          </div>

          {loading ? (
            <div className="rounded-3xl bg-white p-10 text-center shadow-xl">
              <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-teal-600 border-t-transparent" />

              <p className="mt-5 text-lg text-slate-600">
                Loading chat messages...
              </p>
            </div>
          ) : chatMessages.length === 0 ? (
            <div className="rounded-3xl bg-white p-12 text-center shadow-xl">
              <h3 className="text-2xl font-semibold text-slate-900">
                No Chat Messages Yet
              </h3>

              <p className="mt-3 text-slate-600">
                New chat messages will appear here.
              </p>
            </div>
          ) : (
            <div className="grid gap-5 lg:grid-cols-2">
              {chatMessages.map((message) => (
                <div
                  key={message._id}
                  className="rounded-[30px] border border-white/70 bg-white/90 p-6 shadow-[0_22px_70px_-45px_rgba(15,23,42,0.25)]"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">
                        {message.name}
                      </h3>
                      <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-teal-700">
                        {message.topic}
                      </p>
                    </div>
                    <div className="inline-flex items-center gap-2 rounded-2xl bg-slate-100 px-4 py-2 text-sm text-slate-600">
                      <Clock3 className="h-4 w-4" />
                      {new Date(message.createdAt).toLocaleString()}
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-3">
                    {message.email && (
                      <a
                        href={`mailto:${message.email}`}
                        className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700"
                      >
                        <Mail className="h-4 w-4" />
                        {message.email}
                      </a>
                    )}
                    {message.phone && (
                      <a
                        href={`tel:${message.phone}`}
                        className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700"
                      >
                        <Phone className="h-4 w-4" />
                        {message.phone}
                      </a>
                    )}
                  </div>

                  <div className="mt-5 rounded-3xl bg-slate-50 p-5">
                    <p className="whitespace-pre-line text-lg leading-8 text-slate-700">
                      {message.message}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Requests */}
        <div className="mt-10">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">
                Incoming Requests
              </h2>

              <p className="mt-2 text-slate-600">
                Latest service inquiries submitted through the website
              </p>
            </div>
          </div>

          {loading ? (
            <div className="rounded-3xl bg-white p-10 text-center shadow-xl">
              <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-teal-600 border-t-transparent" />

              <p className="mt-5 text-lg text-slate-600">
                Loading requests...
              </p>
            </div>
          ) : requests.length === 0 ? (
            <div className="rounded-3xl bg-white p-12 text-center shadow-xl">
              <h3 className="text-2xl font-semibold text-slate-900">
                No Requests Yet
              </h3>

              <p className="mt-3 text-slate-600">
                Incoming requests will appear here.
              </p>
            </div>
          ) : (
            <div className="grid gap-7">
              {requests.map((request) => (
                <div
                  key={request._id}
                  className="group rounded-[32px] border border-white/70 bg-white/90 p-7 shadow-[0_25px_80px_-45px_rgba(15,23,42,0.25)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                    <div className="flex items-start gap-5">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-100 text-teal-700">
                        <User2 className="h-8 w-8" />
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold text-slate-900">
                          {request.name}
                        </h3>

                        <div className="mt-3 flex flex-wrap gap-3">
                          <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700">
                            <Phone className="h-4 w-4" />
                            {request.phone}
                          </div>

                          <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700">
                            <Mail className="h-4 w-4" />
                            {request.email}
                          </div>

                          <div className="inline-flex items-center gap-2 rounded-full bg-teal-100 px-4 py-2 text-sm text-teal-800">
                            Relationship:
                            {" "}
                            {request.relationship || "N/A"}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-2 rounded-2xl bg-slate-100 px-4 py-2 text-sm text-slate-600">
                      <Clock3 className="h-4 w-4" />

                      {new Date(
                        request.createdAt
                      ).toLocaleString()}
                    </div>
                  </div>

                  <div className="mt-7">
                    <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                      Support Topics
                    </p>

                    <div className="mt-3 flex flex-wrap gap-3">
                      {request.topics?.map((topic) => (
                        <span
                          key={topic}
                          className="rounded-full bg-[linear-gradient(135deg,#ccfbf1_0%,#99f6e4_100%)] px-4 py-2 text-sm font-medium text-teal-900"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-7 rounded-3xl bg-slate-50 p-6">
                    <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                      Message
                    </p>

                    <p className="mt-3 whitespace-pre-line text-lg leading-8 text-slate-700">
                      {request.message}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
