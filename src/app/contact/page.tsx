"use client"

import * as React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Clock3, HelpCircle, Mail, MapPin, Phone, Send, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CONTACT_INFO } from "@/lib/constants"

const ctaHighlights = [
  "Service details",
  "Common questions",
  "Before you call",
]

export default function ContactPage() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Thank you for your message! We'll get back to you soon.")
    setFormData({ name: "", email: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const infoCards = [
    {
      icon: Phone,
      title: "Phone",
      content: CONTACT_INFO.phone,
      note: "Call us for service questions and next-step guidance.",
      link: `tel:${CONTACT_INFO.phone}`,
    },
    {
      icon: Mail,
      title: "Email",
      content: CONTACT_INFO.email,
      note: "A good option for referrals and follow-up questions.",
      link: `mailto:${CONTACT_INFO.email}`,
    },
    {
      icon: MapPin,
      title: "Address",
      content: `${CONTACT_INFO.addressLine1}\n${CONTACT_INFO.addressLine2}\n${CONTACT_INFO.cityStateZip}`,
      note: "Aurora-based, serving Denver Metro and surrounding communities.",
    },
    {
      icon: Clock3,
      title: "Hours",
      content: CONTACT_INFO.hours,
      note: "Availability may vary depending on service coordination needs.",
    },
  ]

  return (
    <div className="flex flex-col">
      <section className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#2aa198_0%,#135f59_44%,#091311_100%)] py-24 text-white">
        <div className="brand-aurora absolute inset-0" />
        <div className="hero-grid absolute inset-0 opacity-25" />
        <div className="container relative mx-auto grid gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.28em] text-teal-50 backdrop-blur-sm"
            >
              Contact
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="mt-6 text-balance text-5xl font-semibold leading-tight text-white md:text-6xl"
            >
              Start a conversation with a team that values clarity and care.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="mt-6 max-w-2xl text-lg text-teal-50/85 md:text-xl"
            >
              Reach out to ask questions, talk through service needs, or begin
              the next step in understanding support options.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.18 }}
            className="rounded-[34px] border border-white/15 bg-white/10 p-7 backdrop-blur-md"
          >
            <p className="text-sm uppercase tracking-[0.24em] text-teal-200">Quick contact</p>
            <div className="mt-5 space-y-4">
              <a className="block rounded-[22px] border border-white/10 bg-white/5 px-5 py-4 text-teal-50/85 transition hover:bg-white/10" href={`tel:${CONTACT_INFO.phone}`}>
                {CONTACT_INFO.phone}
              </a>
              <a className="block rounded-[22px] border border-white/10 bg-white/5 px-5 py-4 text-teal-50/85 transition hover:bg-white/10" href={`mailto:${CONTACT_INFO.email}`}>
                {CONTACT_INFO.email}
              </a>
              <div className="rounded-[22px] border border-white/10 bg-white/5 px-5 py-4 text-teal-50/85">
                {CONTACT_INFO.addressLine1}
                <br />
                {CONTACT_INFO.addressLine2}
                <br />
                {CONTACT_INFO.cityStateZip}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[var(--surface)] py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.04fr_0.96fr]">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="rounded-[34px] border border-stone-200 bg-white p-8 shadow-[0_26px_80px_-48px_rgba(20,40,29,0.45)]"
            >
              <p className="text-sm uppercase tracking-[0.24em] text-teal-800">Send a message</p>
              <h2 className="mt-4 text-4xl">Let us know how we can help.</h2>
              <p className="mt-4 text-lg text-slate-600">
                Use the form below to ask a question or request a follow-up from our team.
              </p>
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <Input
                  name="name"
                  type="text"
                  required
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="rounded-2xl"
                />
                <Input
                  name="email"
                  type="email"
                  required
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="rounded-2xl"
                />
                <textarea
                  name="message"
                  rows={6}
                  required
                  placeholder="Tell us about your question or support needs..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-stone-300 bg-white px-4 py-3 text-slate-900 placeholder:text-stone-400 focus:border-teal-700 focus:ring-2 focus:ring-teal-700/20"
                />
                <Button type="submit" size="lg" className="w-full rounded-full bg-teal-400 text-slate-950 hover:bg-teal-300">
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </motion.div>

            <div className="grid gap-5">
              {infoCards.map((card, index) => {
                const Icon = card.icon
                return (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.45, delay: index * 0.06 }}
                    viewport={{ once: true }}
                    className="rounded-[30px] border border-stone-200 bg-white p-7 shadow-[0_20px_65px_-45px_rgba(20,40,29,0.45)]"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-teal-800">
                        <Icon className="h-7 w-7" />
                      </div>
                      <div>
                        <p className="text-sm uppercase tracking-[0.22em] text-teal-800">{card.title}</p>
                        {card.link ? (
                          <a href={card.link} className="mt-2 block text-lg font-semibold text-slate-900 transition hover:text-teal-800">
                            {card.content}
                          </a>
                        ) : (
                          <p className="mt-2 whitespace-pre-line text-lg font-semibold text-slate-900">{card.content}</p>
                        )}
                        <p className="mt-2 text-base text-slate-600">{card.note}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-stone-100/80 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 max-w-2xl">
            <p className="text-sm uppercase tracking-[0.24em] text-teal-800">Location</p>
            <h2 className="mt-4 text-4xl">Find us in Aurora, Colorado.</h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-[34px] border border-stone-200 bg-white shadow-[0_26px_80px_-48px_rgba(20,40,29,0.45)]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.283586078228!2d-104.8310000!3d39.7295000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c67f0a6b6b6b6b%3A0xf3a7b6d5b2f3a7b6!2s14291%20E%204th%20Ave%2C%20Aurora%2C%20CO%2080011!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
              width="100%"
              height="460"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#06302e_0%,#0f766e_48%,#2dd4bf_100%)] py-20">
        <div className="hero-grid absolute inset-0 opacity-20" />
        <motion.div
          aria-hidden="true"
          animate={{ y: [0, -18, 0], scale: [1, 1.04, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-teal-200/25 blur-3xl"
        />
        <motion.div
          aria-hidden="true"
          animate={{ y: [0, 16, 0], scale: [1, 1.06, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-white/20 blur-3xl"
        />

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
            className="mx-auto grid max-w-5xl overflow-hidden rounded-[36px] border border-white/20 bg-white/95 text-left shadow-[0_34px_110px_-52px_rgba(6,48,46,0.72)] backdrop-blur-md lg:grid-cols-[1.08fr_0.92fr]"
          >
            <div className="relative p-8 sm:p-10 lg:p-12">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.12 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-teal-800"
              >
                <Sparkles className="h-3.5 w-3.5" />
                Before you reach out
              </motion.div>
              <h2 className="mt-6 text-balance text-4xl font-semibold text-slate-950 md:text-5xl">
                Need service details before reaching out?
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                You can also review our service areas and FAQs before connecting with our team.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {ctaHighlights.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.18 + index * 0.08 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
                  >
                    <CheckCircle2 className="h-4 w-4 text-teal-700" />
                    {item}
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                  <Button asChild size="lg" className="rounded-full bg-teal-700 px-8 text-white shadow-[0_18px_40px_-22px_rgba(15,118,110,0.95)] hover:bg-teal-800">
                    <Link href="/services">
                      Explore Services
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                  <Button asChild size="lg" variant="outline" className="rounded-full border-teal-200 bg-white px-8 text-teal-900 hover:bg-teal-50">
                    <Link href="/faq">Read FAQs</Link>
                  </Button>
                </motion.div>
              </div>
            </div>

            <div className="relative min-h-[320px] overflow-hidden bg-[linear-gradient(145deg,#0f766e_0%,#123c39_100%)] p-8 text-white sm:p-10 lg:p-12">
              <div className="absolute inset-0 opacity-25">
                <Image src="/images/community_support.jpg" alt="Review service details" fill className="object-cover" />
              </div>
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,60,57,0.22),rgba(5,25,24,0.84))]" />
              <motion.div
                aria-hidden="true"
                animate={{ rotate: 360 }}
                transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                className="absolute -right-20 -top-20 h-52 w-52 rounded-full border border-white/20"
              />
              <div className="relative flex h-full flex-col justify-between">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-white/12 text-teal-100 backdrop-blur-md">
                  <HelpCircle className="h-8 w-8" />
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.24 }}
                  viewport={{ once: true }}
                  className="mt-16 rounded-[28px] border border-white/15 bg-white/12 p-6 backdrop-blur-md"
                >
                  <p className="text-sm uppercase tracking-[0.22em] text-teal-100">
                    Choose confidently
                  </p>
                  <p className="mt-3 text-lg leading-7 text-white">
                    Service pages and FAQs can help you prepare the questions you want to ask our team.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
