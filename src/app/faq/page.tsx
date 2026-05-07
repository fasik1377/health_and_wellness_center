"use client"

import * as React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2, ChevronDown, HelpCircle, Phone, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CONTACT_INFO } from "@/lib/constants"

const FAQS = [
  {
    question: "What is a PASA?",
    answer:
      "A Program Approved Service Agency is authorized to provide home- and community-based services in Colorado. Families often work with a PASA after eligibility and waiver-related planning have been established.",
  },
  {
    question: "What kinds of support does Wellness Health Care LLC provide?",
    answer:
      "We provide person-centered supports focused on independence, health and welfare, community access, routine assistance, and practical skill development.",
  },
  {
    question: "How do we start services?",
    answer:
      "The best starting point is usually a conversation with your case manager or care team. Once services are appropriate, we can help talk through fit, coordination, and next steps.",
  },
  {
    question: "Who do you serve?",
    answer:
      "We support individuals and families in Colorado who need thoughtful, dependable PASA services aligned with their routines, goals, and support plans.",
  },
  {
    question: "How do you approach quality and communication?",
    answer:
      "We prioritize clarity, follow-through, and respectful coordination with families and support teams so services remain organized and person-centered.",
  },
  {
    question: "Where are services available?",
    answer:
      "We are based in Aurora and support families across Denver Metro and surrounding Colorado communities, depending on service fit and availability.",
  },
]

const ctaHighlights = [
  "Service fit",
  "Referral basics",
  "Direct guidance",
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0)

  return (
    <div className="flex flex-col">
      <section className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#2aa198_0%,#135f59_44%,#091311_100%)] py-24 text-white">
        <div className="brand-aurora absolute inset-0" />
        <div className="hero-grid absolute inset-0 opacity-25" />
        <div className="container relative mx-auto grid gap-10 px-4 sm:px-6 lg:grid-cols-[1.06fr_0.94fr] lg:px-8">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.28em] text-teal-50 backdrop-blur-sm"
            >
              FAQ
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="mt-6 text-balance text-5xl font-semibold leading-tight text-white md:text-6xl"
            >
              Clear answers to the questions families ask most.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="mt-6 max-w-2xl text-lg text-teal-50/85 md:text-xl"
            >
              We&apos;ve organized the most common questions into a simpler, more
              professional format so families can find answers quickly.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.18 }}
            className="rounded-[34px] border border-white/15 bg-white/10 p-7 backdrop-blur-md"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-teal-100">
                <HelpCircle className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-teal-200">Need direct help?</p>
                <p className="mt-1 text-base text-teal-50/80">Our team is available for questions and service conversations.</p>
              </div>
            </div>
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-white transition hover:bg-white hover:text-stone-950"
            >
              <Phone className="h-4 w-4" />
              {CONTACT_INFO.phone}
            </a>
          </motion.div>
        </div>
      </section>

      <section className="bg-[var(--surface)] py-20">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4">
            {FAQS.map((faq, index) => {
              const isOpen = openIndex === index
              return (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.04 }}
                  viewport={{ once: true }}
                  className="rounded-[28px] border border-stone-200 bg-white p-6 shadow-[0_16px_55px_-40px_rgba(20,40,29,0.35)]"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-6 text-left"
                  >
                    <span className="text-xl font-semibold text-slate-900">{faq.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 flex-shrink-0 text-teal-700 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {isOpen ? (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">{faq.answer}</p>
                    </motion.div>
                  ) : null}
                </motion.div>
              )
            })}
          </div>
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
                More answers
              </motion.div>
              <h2 className="mt-6 text-balance text-4xl font-semibold text-slate-950 md:text-5xl">
                Still have questions about PASA support?
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                Reach out directly and we&apos;ll help you understand next steps, service fit, and how to start a conversation.
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
                    <Link href="/contact">
                      Contact Us
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                  <Button asChild size="lg" variant="outline" className="rounded-full border-teal-200 bg-white px-8 text-teal-900 hover:bg-teal-50">
                    <a href={`tel:${CONTACT_INFO.phone}`}>Call {CONTACT_INFO.phone}</a>
                  </Button>
                </motion.div>
              </div>
            </div>

            <div className="relative min-h-[320px] overflow-hidden bg-[linear-gradient(145deg,#0f766e_0%,#123c39_100%)] p-8 text-white sm:p-10 lg:p-12">
              <div className="absolute inset-0 opacity-25">
                <Image src="/images/community_support.jpg" alt="Support questions" fill className="object-cover" />
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
                    Clear next steps
                  </p>
                  <p className="mt-3 text-lg leading-7 text-white">
                    The right answer is often easier to find once we understand your situation.
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
