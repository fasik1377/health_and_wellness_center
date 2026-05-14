"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import {
  ShieldCheck,
  LockKeyhole,
  Mail,
  ArrowRight,
  Sparkles,
} from "lucide-react"

export default function AdminLoginPage() {
  const router = useRouter()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()

    setLoading(true)
    setError("")

    try {
      const response = await fetch("/api/admin/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })

      const result = await response.json()

      if (!response.ok) {
        setError(result.message || "Invalid email or password")
        return
      }

      router.push("/admin/dashboard")
      router.refresh()
    } catch (error) {
      console.error(error)
      setError("Unable to log in. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[linear-gradient(135deg,#0f766e_0%,#082f2d_45%,#020617_100%)] px-4">
      
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-teal-400 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-cyan-400 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-md overflow-hidden rounded-[36px] border border-white/10 bg-white/10 backdrop-blur-xl"
      >
        {/* Top Section */}
        <div className="relative overflow-hidden border-b border-white/10 p-8 text-white">
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-teal-300/20 blur-3xl" />

          <div className="relative">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md">
              <ShieldCheck className="h-8 w-8 text-teal-200" />
            </div>

            <div className="mt-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.22em] text-teal-100">
                <Sparkles className="h-3.5 w-3.5" />
                Secure Admin Portal
              </div>

              <h1 className="mt-5 text-4xl text-white font-semibold">
                Welcome Back
              </h1>

              <p className="mt-3 text-teal-50/80">
                Sign in to access Wellness Health Care dashboard.
              </p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white p-8">
          <form onSubmit={handleLogin} className="space-y-5">
            
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Email Address
              </label>

              <div className="flex items-center rounded-2xl border border-stone-300 bg-stone-50 px-4 focus-within:border-teal-600 focus-within:bg-white">
                <Mail className="h-5 w-5 text-slate-400" />

                <input
                  type="email"
                  placeholder="admin@example.com"
                  className="w-full bg-transparent px-3 py-4 outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Password
              </label>

              <div className="flex items-center rounded-2xl border border-stone-300 bg-stone-50 px-4 focus-within:border-teal-600 focus-within:bg-white">
                <LockKeyhole className="h-5 w-5 text-slate-400" />

                <input
                  type="password"
                  placeholder="Password"
                  className="w-full bg-transparent px-3 py-4 outline-none"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
              >
                {error}
              </motion.div>
            )}

            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center rounded-2xl bg-teal-700 px-5 py-4 text-lg font-semibold text-white shadow-[0_18px_40px_-18px_rgba(15,118,110,0.8)] transition hover:bg-teal-800 disabled:opacity-70"
            >
              {loading ? "Authenticating..." : "Login to Dashboard"}

              {!loading && (
                <ArrowRight className="ml-2 h-5 w-5" />
              )}
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  )
}
