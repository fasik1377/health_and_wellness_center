"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  CalendarClock,
  CheckCircle2,
  ClipboardList,
  HeartHandshake,
  Mail,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CONTACT_INFO, SERVICES } from "@/lib/constants"

const requestSteps = [
  {
    icon: MessageCircle,
    title: "Tell us what support is needed",
    text: "Share a few details about the person, goals, questions, and current support path.",
  },
  {
    icon: ClipboardList,
    title: "We review service fit",
    text: "Our team looks at the request and helps clarify which PASA services may be appropriate.",
  },
  {
    icon: CalendarClock,
    title: "Plan the next conversation",
    text: "We follow up with guidance, availability, and practical next steps for coordination.",
  },
]

const formTopics = [
  "Self-advocacy and skills training",
  "Community access and participation",
  "Health, welfare, or supervision support",
  "Transportation or daily routine support",
]

export default function RequestServicesPage() {
  return (
    <div className="flex flex-col">
      <section className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#2aa198_0%,#135f59_42%,#091311_100%)] py-24 text-white">
        <div className="brand-aurora absolute inset-0" />
        <div className="hero-grid absolute inset-0 opacity-25" />
        <div className="absolute inset-0 opacity-18">
          <Image src="/images/community_support1.jpg" alt="Request PASA services" fill priority className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,20,19,0.08),rgba(6,20,19,0.76))]" />

        <div className="container relative mx-auto grid gap-10 px-4 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.28em] text-teal-50 backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5 text-teal-200" />
              Request Services
            </span>
            <h1 className="mt-6 text-balance text-5xl font-semibold leading-tight text-white md:text-6xl">
              Start a clear, supportive path toward the right PASA services.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-teal-50/88 md:text-xl">
              Use this page to share your needs, ask for guidance, and help our team understand how Wellness Health Care LLC may support your next step.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Confidential first step", "Colorado PASA guidance", "Family-centered follow-up"].map((item) => (
                <span key={item} className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-teal-50 backdrop-blur-sm">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.14 }}
            className="rounded-[36px] border border-white/15 bg-white/12 p-6 shadow-[0_34px_100px_-55px_rgba(0,0,0,0.75)] backdrop-blur-md"
          >
            <div className="relative overflow-hidden rounded-[30px] bg-white p-6 text-slate-900">
              <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-teal-100 blur-3xl" />
              <div className="relative flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-teal-800">
                  <HeartHandshake className="h-7 w-7" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.22em] text-teal-800">What happens next</p>
                  <p className="mt-1 text-lg font-semibold">A real person reviews your request.</p>
                </div>
              </div>
              <div className="relative mt-6 grid gap-3">
                {requestSteps.map((step, index) => {
                  const Icon = step.icon
                  return (
                    <motion.div
                      key={step.title}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.24 + index * 0.08 }}
                      className="rounded-[22px] border border-stone-200 bg-stone-50 px-5 py-4"
                    >
                      <div className="flex gap-3">
                        <Icon className="mt-1 h-5 w-5 flex-shrink-0 text-teal-700" />
                        <div>
                          <p className="font-semibold text-slate-950">{step.title}</p>
                          <p className="mt-1 text-sm leading-6 text-slate-600">{step.text}</p>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[var(--surface)] py-20">
        <div className="container mx-auto grid gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-[36px] border border-stone-200 bg-white p-8 shadow-[0_26px_80px_-48px_rgba(20,40,29,0.45)]"
          >
            <p className="text-sm uppercase tracking-[0.24em] text-teal-800">Service request form</p>
            <h2 className="mt-4 text-balance text-4xl">Share the basics and we&apos;ll help with the next step.</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              This form is designed for first conversations. Please avoid sending urgent medical information here; call emergency services for emergencies.
            </p>

            <form className="mt-8 grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Input required name="name" placeholder="Full name" className="rounded-2xl" />
                <Input required name="phone" placeholder="Phone number" className="rounded-2xl" />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <Input required name="email" type="email" placeholder="Email address" className="rounded-2xl" />
                <Input name="relationship" placeholder="Relationship to person served" className="rounded-2xl" />
              </div>
              <div className="grid gap-3">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-800">Support interest</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {formTopics.map((topic) => (
                    <label key={topic} className="flex cursor-pointer items-start gap-3 rounded-[20px] border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-slate-700 transition hover:border-teal-200 hover:bg-teal-50">
                      <input type="checkbox" name="topics" value={topic} className="mt-1 accent-teal-700" />
                      <span>{topic}</span>
                    </label>
                  ))}
                </div>
              </div>
              <textarea
                name="message"
                rows={6}
                required
                placeholder="Tell us what kind of support, questions, or next-step guidance you are looking for..."
                className="w-full rounded-2xl border border-stone-300 bg-white px-4 py-3 text-slate-900 placeholder:text-stone-400 focus:border-teal-700 focus:ring-2 focus:ring-teal-700/20"
              />
              <Button type="submit" size="lg" className="rounded-full bg-teal-700 px-8 text-white hover:bg-teal-800">
                Submit Request
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </motion.div>

          <div className="grid gap-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.06 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-[36px] border border-stone-200 bg-white shadow-[0_26px_80px_-48px_rgba(20,40,29,0.45)]"
            >
              <div className="relative h-72">
                <Image src="/images/community_support.jpg" alt="Person-centered support" fill className="object-cover" />
              </div>
              <div className="p-8">
                <p className="text-sm uppercase tracking-[0.24em] text-teal-800">Helpful before submitting</p>
                <div className="mt-5 grid gap-4">
                  {[
                    "A short description of current needs or goals.",
                    "Any service areas you want to understand better.",
                    "Preferred contact method and best time to follow up.",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-[22px] bg-stone-50 px-5 py-4">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal-700" />
                      <p className="text-base text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="rounded-[36px] bg-[linear-gradient(135deg,#0f766e_0%,#103330_100%)] p-8 text-white shadow-[0_30px_90px_-52px_rgba(20,40,29,0.75)]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-teal-100">
                <ShieldCheck className="h-7 w-7" />
              </div>
              <h3 className="mt-6 text-3xl text-white">Prefer to talk first?</h3>
              <p className="mt-4 text-lg leading-8 text-teal-50/85">
                Call or email us directly and we can help you decide whether this request form is the right place to start.
              </p>
              <div className="mt-6 grid gap-3">
                <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-5 py-4 text-white transition hover:bg-white hover:text-teal-950">
                  <Phone className="h-5 w-5" />
                  {CONTACT_INFO.phone}
                </a>
                <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-5 py-4 text-white transition hover:bg-white hover:text-teal-950">
                  <Mail className="h-5 w-5" />
                  {CONTACT_INFO.email}
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-stone-100/80 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.24em] text-teal-800">Service areas</p>
              <h2 className="mt-4 text-balance text-4xl">A request can begin with one service or a broader conversation.</h2>
            </div>
            <Link href="/services" className="inline-flex items-center gap-2 font-semibold text-teal-800 transition hover:text-teal-950">
              View all services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {SERVICES.slice(0, 6).map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="rounded-[30px] border border-stone-200 bg-white p-7 shadow-[0_20px_65px_-45px_rgba(20,40,29,0.45)]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-teal-800">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 text-2xl">{service.title}</h3>
                  <p className="mt-3 text-base text-slate-600">{service.description}</p>
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
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
            className="mx-auto grid max-w-5xl overflow-hidden rounded-[36px] border border-white/20 bg-white/95 text-left shadow-[0_34px_110px_-52px_rgba(6,48,46,0.72)] backdrop-blur-md lg:grid-cols-[1.08fr_0.92fr]"
          >
            <div className="p-8 sm:p-10 lg:p-12">
              <p className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-teal-800">
                <Users className="h-3.5 w-3.5" />
                Ready when you are
              </p>
              <h2 className="mt-6 text-balance text-4xl font-semibold text-slate-950 md:text-5xl">
                Not sure what to request yet?
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                That is completely okay. You can contact our team first, and we&apos;ll help you talk through service fit and next steps.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="rounded-full bg-teal-700 px-8 text-white hover:bg-teal-800">
                  <Link href="/contact">
                    Contact Our Team
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full border-teal-200 bg-white px-8 text-teal-900 hover:bg-teal-50">
                  <Link href="/faq">Read FAQs</Link>
                </Button>
              </div>
            </div>
            <div className="relative min-h-[300px] overflow-hidden bg-[linear-gradient(145deg,#0f766e_0%,#123c39_100%)] p-8 text-white sm:p-10 lg:p-12">
              <div className="absolute inset-0 opacity-25">
                <Image src="/images/outdoor_community.jpg" alt="Community guidance" fill className="object-cover" />
              </div>
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,60,57,0.22),rgba(5,25,24,0.84))]" />
              <div className="relative flex h-full items-end">
                <div className="rounded-[28px] border border-white/15 bg-white/12 p-6 backdrop-blur-md">
                  <p className="text-sm uppercase tracking-[0.22em] text-teal-100">Clear guidance</p>
                  <p className="mt-3 text-lg leading-7 text-white">
                    A thoughtful first step can make complex service systems feel easier to navigate.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
