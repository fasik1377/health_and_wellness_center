"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2, HeartHandshake, MessageCircle, ShieldCheck, Sparkles, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

const values = [
  {
    icon: HeartHandshake,
    title: "Compassionate care",
    description:
      "We center dignity, patience, and real human connection in every service interaction.",
  },
  {
    icon: Users,
    title: "Family partnership",
    description:
      "Families, guardians, and care teams deserve communication that is clear and dependable.",
  },
  {
    icon: ShieldCheck,
    title: "Responsible service delivery",
    description:
      "We approach health, welfare, and accountability with a professional PASA standard.",
  },
  {
    icon: Sparkles,
    title: "Growth and belonging",
    description:
      "Support should help people participate more fully in their homes, routines, and communities.",
  },
]

const storyPoints = [
  "Colorado-based support informed by person-centered values.",
  "A practical focus on stability, communication, and meaningful daily outcomes.",
  "Care planning shaped around the individual instead of a one-size-fits-all program.",
]

const ctaHighlights = [
  "Service overview",
  "Family guidance",
  "Care-team coordination",
]

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <section className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#2aa198_0%,#135f59_44%,#091311_100%)] py-24 text-white">
        <div className="brand-aurora absolute inset-0" />
        <div className="hero-grid absolute inset-0 opacity-25" />
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/about.jpg"
            alt="Wellness Health Care community support"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,20,19,0.15),rgba(6,20,19,0.72))]" />

        <div className="container relative mx-auto grid gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.28em] text-teal-50 backdrop-blur-sm"
            >
              About Wellness Health Care LLC
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="mt-6 text-balance text-5xl font-semibold leading-tight text-white md:text-6xl"
            >
              Professional PASA support built on trust, inclusion, and thoughtful care.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="mt-6 max-w-2xl text-lg text-teal-50/85 md:text-xl"
            >
              We support Colorado individuals and families with person-centered
              services designed to promote dignity, consistency, and meaningful
              participation in everyday life.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.18 }}
            className="rounded-[34px] border border-white/15 bg-white/10 p-7 backdrop-blur-md"
          >
            <p className="text-sm uppercase tracking-[0.24em] text-teal-200">Why we exist</p>
            <div className="mt-5 space-y-4">
              {storyPoints.map((point) => (
                <div key={point} className="rounded-[22px] border border-white/10 bg-white/5 px-5 py-4">
                  <p className="text-base text-teal-50/85">{point}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[var(--surface)] py-20">
        <div className="container mx-auto grid gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-[34px] border border-stone-200 bg-white shadow-[0_26px_80px_-48px_rgba(20,40,29,0.45)]"
          >
            <div className="relative h-64">
              <Image src="/images/mission.jpg" alt="Mission" fill className="object-cover" />
            </div>
            <div className="p-8">
              <p className="text-sm uppercase tracking-[0.22em] text-teal-800">Our mission</p>
              <h2 className="mt-4 text-4xl">Helping people live with more independence and confidence.</h2>
              <p className="mt-4 text-lg text-slate-600">
                Our mission is to deliver person-centered PASA services that
                support stability, growth, and dignity. We work to make care
                feel organized, respectful, and aligned with the goals of each
                individual and family.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-[34px] border border-stone-200 bg-white shadow-[0_26px_80px_-48px_rgba(20,40,29,0.45)]"
          >
            <div className="relative h-64">
              <Image src="/images/vision.jpg" alt="Vision" fill className="object-cover" />
            </div>
            <div className="p-8">
              <p className="text-sm uppercase tracking-[0.22em] text-teal-800">Our vision</p>
              <h2 className="mt-4 text-4xl">A stronger standard for inclusive, dependable support.</h2>
              <p className="mt-4 text-lg text-slate-600">
                We want every person we support to feel respected, seen, and
                better equipped to participate fully in daily life. That means
                services that are not only caring, but also professional,
                structured, and responsive.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-stone-100/80 py-20">
        <div className="container mx-auto grid gap-10 px-4 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-[34px] bg-[linear-gradient(135deg,#0f766e_0%,#103330_100%)] p-8 text-white shadow-[0_30px_90px_-52px_rgba(20,40,29,0.75)]"
          >
            <p className="text-sm uppercase tracking-[0.24em] text-teal-200">Our story</p>
            <p className="mt-6 text-lg leading-8 text-teal-50/85">
              Wellness Health Care LLC was founded around a simple belief:
              support should feel both compassionate and dependable. Families
              should not have to choose between warmth and professionalism. Our
              approach brings those together through clear planning, respectful
              service delivery, and a commitment to helping individuals move
              through life with greater confidence.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="rounded-[30px] border border-stone-200 bg-white p-7 shadow-[0_20px_65px_-45px_rgba(20,40,29,0.45)]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-teal-800">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 text-2xl">{value.title}</h3>
                  <p className="mt-3 text-base text-slate-600">{value.description}</p>
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
                Connect with us
              </motion.div>
              <h2 className="mt-6 text-balance text-4xl font-semibold text-slate-950 md:text-5xl">
                Partner with a team that values clarity and dignity.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                Learn more about our service areas or reach out to start a conversation with our team.
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
                    <Link href="/services">Explore Services</Link>
                  </Button>
                </motion.div>
              </div>
            </div>

            <div className="relative min-h-[320px] overflow-hidden bg-[linear-gradient(145deg,#0f766e_0%,#123c39_100%)] p-8 text-white sm:p-10 lg:p-12">
              <div className="absolute inset-0 opacity-25">
                <Image src="/images/community_support.jpg" alt="Team conversation" fill className="object-cover" />
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
                    Thoughtful support
                  </p>
                  <p className="mt-3 text-lg leading-7 text-white">
                    A calm first conversation can help families understand options with more confidence.
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
