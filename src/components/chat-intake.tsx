"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { MessageCircleHeart, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const quickTopics = [
  "Service fit",
  "Referral steps",
  "Availability",
  "General question",
]

export function ChatIntake() {
  const [formData, setFormData] = React.useState({
    name: "",
    topic: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const chooseTopic = (topic: string) => {
    setFormData((prev) => ({ ...prev, topic }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Thanks for your message. Our team will follow up soon.")
    setFormData({ name: "", topic: "", message: "" })
  }

  return (
    <section className="bg-stone-100/80 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.96fr_1.04fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-[34px] bg-[linear-gradient(135deg,#0f766e_0%,#103330_100%)] p-8 text-white shadow-[0_32px_90px_-55px_rgba(20,40,29,0.8)]"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-teal-100">
              <MessageCircleHeart className="h-7 w-7" />
            </div>
            <p className="mt-6 text-sm uppercase tracking-[0.28em] text-teal-200">Quick chat</p>
            <h2 className="mt-4 text-balance text-4xl text-white">
              A simple place for families to ask a question before they commit.
            </h2>
            <p className="mt-5 text-lg leading-8 text-teal-50/85">
              For PASA services, this works best after visitors understand the basics
              and are ready to ask about fit, referrals, availability, or next steps.
            </p>

            <div className="mt-8 space-y-4">
              <div className="max-w-sm rounded-[24px] border border-white/10 bg-white/10 px-5 py-4 backdrop-blur-sm">
                <p className="text-sm font-semibold text-white">Parent / Guardian</p>
                <p className="mt-2 text-sm text-teal-50/85">
                  We&apos;re looking for PASA support and want to understand the next step.
                </p>
              </div>
              <div className="ml-auto max-w-sm rounded-[24px] border border-teal-200/20 bg-white px-5 py-4 text-slate-900 shadow-[0_18px_40px_-26px_rgba(0,0,0,0.35)]">
                <p className="text-sm font-semibold text-teal-800">Wellness Health Care</p>
                <p className="mt-2 text-sm text-slate-600">
                  Send us a quick message here and our team can follow up with guidance on services, referrals, and availability.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            viewport={{ once: true }}
            className="rounded-[34px] border border-stone-200 bg-white p-8 shadow-[0_26px_80px_-48px_rgba(20,40,29,0.45)]"
          >
            <p className="text-sm uppercase tracking-[0.24em] text-teal-800">Start the conversation</p>
            <h3 className="mt-4 text-4xl">Leave a quick message</h3>
            <p className="mt-4 text-lg text-slate-600">
              Use this like a quick chat intake. Share your question and our team can respond.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {quickTopics.map((topic) => (
                <button
                  key={topic}
                  type="button"
                  onClick={() => chooseTopic(topic)}
                  className={`rounded-full border px-4 py-2 text-sm transition ${
                    formData.topic === topic
                      ? "border-teal-700 bg-teal-50 text-teal-800"
                      : "border-stone-200 bg-white text-slate-600 hover:border-teal-200 hover:text-teal-800"
                  }`}
                >
                  {topic}
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <Input
                name="name"
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                className="rounded-2xl"
                required
              />
              <Input
                name="topic"
                type="text"
                placeholder="Topic"
                value={formData.topic}
                onChange={handleChange}
                className="rounded-2xl"
                required
              />
              <textarea
                name="message"
                rows={5}
                placeholder="Type your question here..."
                value={formData.message}
                onChange={handleChange}
                className="w-full rounded-2xl border border-stone-300 bg-white px-4 py-3 text-slate-900 placeholder:text-stone-400 focus:border-teal-700 focus:ring-2 focus:ring-teal-700/20"
                required
              />
              <Button type="submit" size="lg" className="w-full rounded-full bg-teal-400 text-slate-950 hover:bg-teal-300">
                Send Question
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
