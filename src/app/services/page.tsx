"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Brain,
  Bus,
  CheckCircle2,
  Globe,
  HandHeart,
  HeartHandshake,
  Home,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    title: "Self-Advocacy Training",
    description:
      "Support that helps individuals communicate preferences, make informed choices, and take a stronger role in daily life.",
    icon: HeartHandshake,
  },
  {
    title: "Independent Living Skills",
    description:
      "Training for routines, decision-making, home responsibilities, and day-to-day confidence.",
    icon: Users,
  },
  {
    title: "Cognitive Skills Training",
    description:
      "Structured support for attention, memory, problem-solving, and practical thinking skills.",
    icon: Brain,
  },
  {
    title: "Therapeutic and Behavioral Support",
    description:
      "Guided support that helps individuals and families navigate behavioral and therapeutic goals more effectively.",
    icon: HandHeart,
  },
  {
    title: "Routine Health Support",
    description:
      "Care oversight and reminders that help maintain consistency with wellness and medical routines.",
    icon: ShieldCheck,
  },
  {
    title: "Community Access",
    description:
      "Encouragement and support for participation in meaningful community activities and connections.",
    icon: Globe,
  },
  {
    title: "Transportation Assistance",
    description:
      "Travel-related support that helps individuals move through the community with greater confidence and safety.",
    icon: Bus,
  },
  {
    title: "Health and Welfare Supervision",
    description:
      "Attentive supervision designed around safety, stability, and respectful support.",
    icon: Home,
  },
]

const serviceHighlights = [
  "Person-centered service planning",
  "Colorado PASA support structure",
  "Family communication and coordination",
]

const supportPathHighlights = [
  "Service fit",
  "Referral questions",
  "Next-step guidance",
]

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      <section className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#2aa198_0%,#135f59_42%,#091311_100%)] py-24 text-white">
        <div className="brand-aurora absolute inset-0" />
        <div className="hero-grid absolute inset-0 opacity-25" />
        <div className="absolute inset-0 opacity-15">
          <Image src="/images/care.jpg" alt="Care support" fill priority className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,20,19,0.08),rgba(6,20,19,0.74))]" />

        <div className="container relative mx-auto grid gap-10 px-4 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.28em] text-teal-50 backdrop-blur-sm"
            >
              Services
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="mt-6 text-balance text-5xl font-semibold leading-tight text-white md:text-6xl"
            >
              PASA services designed around practical support and real-life outcomes.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="mt-6 max-w-2xl text-lg text-teal-50/85 md:text-xl"
            >
              Our services are shaped to support dignity, consistency,
              community participation, and stronger daily independence for the
              people and families we serve.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.18 }}
            className="rounded-[34px] border border-white/15 bg-white/10 p-7 backdrop-blur-md"
          >
            <p className="text-sm uppercase tracking-[0.24em] text-teal-200">Service approach</p>
            <div className="mt-5 grid gap-4">
              {serviceHighlights.map((item) => (
                <div key={item} className="rounded-[22px] border border-white/10 bg-white/5 px-5 py-4">
                  <p className="text-base text-teal-50/85">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[var(--surface)] py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.24em] text-teal-800">What we provide</p>
            <h2 className="mt-4 text-balance text-4xl">
              A more modern, easier-to-scan presentation of our service areas.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
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

      <section className="bg-stone-100/80 py-20">
        <div className="container mx-auto grid gap-8 px-4 sm:px-6 lg:grid-cols-[0.98fr_1.02fr] lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-[34px] bg-[linear-gradient(135deg,#0f766e_0%,#103330_100%)] p-8 text-white"
          >
            <p className="text-sm uppercase tracking-[0.24em] text-teal-200">Why it matters</p>
            <h2 className="mt-4 text-balance text-4xl text-white">
              Good services feel organized, respectful, and responsive.
            </h2>
            <p className="mt-5 text-lg leading-8 text-teal-50/82">
              Families need more than a list of offerings. They need to know
              how support will feel in practice: clear communication, reliable
              follow-through, and services aligned with everyday goals.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-[34px] border border-stone-200 bg-white shadow-[0_26px_80px_-48px_rgba(20,40,29,0.45)]"
          >
            <div className="relative h-72">
              <Image src="/images/community_support.jpg" alt="Community support" fill className="object-cover" />
            </div>
            <div className="p-8">
              <p className="text-sm uppercase tracking-[0.24em] text-teal-800">Service philosophy</p>
              <p className="mt-4 text-lg text-slate-600">
                Every service line is delivered through a person-centered lens,
                with attention to dignity, participation, and the routines that
                shape each individual&apos;s day-to-day experience.
              </p>
            </div>
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
                Support guidance
              </motion.div>
              <h2 className="mt-6 text-balance text-4xl font-semibold text-slate-950 md:text-5xl">
                Need help choosing the right support path?
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                Our team can talk through service fit, next steps, and how support may align with your needs.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {supportPathHighlights.map((item, index) => (
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
                  <Button
                    asChild
                    size="lg"
                    className="rounded-full bg-teal-700 px-8 text-white shadow-[0_18px_40px_-22px_rgba(15,118,110,0.95)] hover:bg-teal-800"
                  >
                    <Link href="/contact">
                      Contact Our Team
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="rounded-full border-teal-200 bg-white px-8 text-teal-900 hover:bg-teal-50"
                  >
                    <Link href="/faq">Read FAQs</Link>
                  </Button>
                </motion.div>
              </div>
            </div>

            <div className="relative min-h-[320px] overflow-hidden bg-[linear-gradient(145deg,#0f766e_0%,#123c39_100%)] p-8 text-white sm:p-10 lg:p-12">
              <div className="absolute inset-0 opacity-25">
                <Image src="/images/community_support.jpg" alt="Support conversation" fill className="object-cover" />
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
                  <MessageCircle className="h-8 w-8" />
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.24 }}
                  viewport={{ once: true }}
                  className="mt-16 rounded-[28px] border border-white/15 bg-white/12 p-6 backdrop-blur-md"
                >
                  <p className="text-sm uppercase tracking-[0.22em] text-teal-100">
                    Start with clarity
                  </p>
                  <p className="mt-3 text-lg leading-7 text-white">
                    A quick conversation can make the service options easier to understand before you decide what comes next.
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
