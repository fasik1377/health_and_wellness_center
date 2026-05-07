"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, CheckCircle2, HeartHandshake, ShieldCheck, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

const commitments = [
  {
    title: "Person-centered planning",
    description:
      "Services are built around the individual, not around a generic program template.",
    icon: HeartHandshake,
  },
  {
    title: "Health and welfare oversight",
    description:
      "We keep safety, communication, and continuity at the center of service delivery.",
    icon: ShieldCheck,
  },
  {
    title: "Family collaboration",
    description:
      "We work closely with families, case managers, and care teams so support stays aligned.",
    icon: Users,
  },
]

const trustPoints = [
  "Clear intake and referral communication",
  "Respectful coordination with families and support teams",
  "Service delivery focused on dignity and consistency",
  "A professional presentation that reflects PASA expectations",
]

export default function TestimonialsPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-[linear-gradient(135deg,#0d3d3a_0%,#135f59_50%,#1c7f73_100%)] py-20 text-white">
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl"
          >
            <p className="text-sm uppercase tracking-[0.28em] text-teal-300">
              Quality and trust
            </p>
            <h1 className="mt-4 text-balance text-5xl font-semibold text-white">
              Families need confidence in how support is delivered.
            </h1>
            <p className="mt-6 text-lg text-teal-50/85">
              Instead of relying on generic marketing claims, this page focuses
              on the values and service standards that shape our PASA work in
              Colorado.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-[var(--surface)] py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {commitments.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="rounded-[30px] border border-stone-200 bg-white p-8 shadow-[0_18px_65px_-45px_rgba(20,40,29,0.45)]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-teal-800">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h2 className="mt-5 text-2xl">{item.title}</h2>
                  <p className="mt-3 text-base text-slate-600">{item.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-stone-100 py-20">
        <div className="container mx-auto grid gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div className="rounded-[34px] bg-white p-8 shadow-[0_24px_70px_-46px_rgba(20,40,29,0.45)]">
            <p className="text-sm uppercase tracking-[0.24em] text-teal-800">
              What families should expect
            </p>
            <div className="mt-6 space-y-4">
              {trustPoints.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-teal-700" />
                  <p className="text-base text-slate-700">{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[34px] bg-teal-950 p-8 text-white shadow-[0_24px_70px_-46px_rgba(20,40,29,0.6)]">
            <p className="text-sm uppercase tracking-[0.24em] text-teal-300">
              A better standard
            </p>
            <p className="mt-6 text-lg text-teal-50/85">
              Professional design matters for healthcare-adjacent services. A
              clearer, calmer website helps families trust the information,
              understand the process, and take the next step with less friction.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                className="rounded-full bg-teal-400 text-white hover:bg-teal-300"
              >
                <Link href="/contact">
                  Talk with our team
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-white/30 bg-white/5 text-white hover:bg-white hover:text-teal-950"
              >
                <Link href="/services">Review services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
