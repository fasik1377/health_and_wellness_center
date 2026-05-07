"use client"

import * as React from "react"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import {
    ArrowRight,
    CheckCircle2,
    CirclePlay,
    HeartHandshake,
    MapPin,
    MessageCircle,
    Phone,
    Sparkles,
    ShieldCheck,
    Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { ChatIntake } from "@/components/chat-intake"
import { CONTACT_INFO, SERVICES } from "@/lib/constants"

const heroStats = [
    { value: "Colorado", label: "focused PASA support" },
    { value: "Person-centered", label: "care planning approach" },
    { value: "Responsive", label: "family communication" },
]

const highlights = [
    {
        title: "Support that fits real life",
        description:
            "We build services around the routines, goals, and preferences of each individual and family.",
        icon: HeartHandshake,
    },
    {
        title: "Confidence with state-approved care",
        description:
            "Our PASA work is organized around accountability, consistency, and respectful service delivery.",
        icon: ShieldCheck,
    },
    {
        title: "Community connection matters",
        description:
            "We prioritize participation, belonging, and daily supports that help people stay engaged.",
        icon: Users,
    },
]

const waiverCards = [
    {
        title: "CES Waiver",
        text: "Support for children and families who need dependable services while planning for long-term inclusion and growth.",
    },
    {
        title: "SLS Waiver",
        text: "Flexible services that help adults remain active in their homes and communities with the right level of support.",
    },
    {
        title: "DD Waiver",
        text: "Structured supports for adults who need consistent supervision, residential stability, and coordinated care.",
    },
]

const processSteps = [
    {
        step: "01",
        title: "Start the conversation",
        text: "We listen carefully, learn about needs, and help families understand next steps for referral and service planning.",
    },
    {
        step: "02",
        title: "Shape a practical plan",
        text: "Together, we define support priorities, schedules, and service goals that feel realistic and person-centered.",
    },
    {
        step: "03",
        title: "Deliver with consistency",
        text: "Our team focuses on respectful communication, dependable follow-through, and health and welfare oversight.",
    },
    {
        step: "04",
        title: "Adjust as needs change",
        text: "We stay engaged with families and care teams so services continue to reflect real-life needs over time.",
    },
]

const coverageAreas = [
    "Aurora",
    "Denver Metro",
    "Colorado Springs",
    "Surrounding Front Range communities",
]

const homeCtaHighlights = [
    "Referral questions",
    "Service fit",
    "Family guidance",
]

const heroImages = [
    {
        src: "/images/outdoor_community.jpg",
        alt: "Community support outdoors",
        label: "Community support",
    },
    {
        src: "/images/community_support1.jpg",
        alt: "Caregiver and participant",
        label: "Family-centered care",
    },
    {
        src: "/images/group_wellness.jpg",
        alt: "Wellness support group",
        label: "Connected planning",
    },
    {
        src: "/images/wellnesshome.jpg",
        alt: "Home wellness support",
        label: "Support at home",
    },
]

export default function HomePage() {
    const [heroImageIndex, setHeroImageIndex] = React.useState(0)
    const activeHeroImage = heroImages[heroImageIndex]

    React.useEffect(() => {
        const timer = window.setInterval(() => {
            setHeroImageIndex((current) => (current + 1) % heroImages.length)
        }, 5200)

        return () => window.clearInterval(timer)
    }, [])

    return (
        <div className="overflow-hidden">
            <section className="relative isolate border-b border-stone-200 bg-[linear-gradient(135deg,#2aa198_0%,#135f59_42%,#091311_100%)] text-white">
                <div className="brand-aurora absolute inset-0" />
                <div className="hero-grid absolute inset-0 opacity-30" />
                <div className="absolute inset-0 opacity-24">
                    <AnimatePresence mode="popLayout">
                        <motion.div
                            key={activeHeroImage.src}
                            initial={{
                                opacity: 0,
                                scale: 1.12,
                                rotate: -1.8,
                                clipPath: "polygon(18% 0%, 100% 0%, 82% 100%, 0% 100%)",
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1.03,
                                rotate: 0,
                                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                            }}
                            exit={{
                                opacity: 0,
                                scale: 1.18,
                                rotate: 1.8,
                                clipPath: "polygon(0% 0%, 82% 0%, 100% 100%, 18% 100%)",
                            }}
                            transition={{ duration: 1.35, ease: [0.76, 0, 0.24, 1] }}
                            className="absolute inset-0"
                        >
                            <Image
                                src={activeHeroImage.src}
                                alt={activeHeroImage.alt}
                                fill
                                priority={heroImageIndex === 0}
                                sizes="100vw"
                                className="object-cover"
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(45,212,191,0.2),transparent_25%),linear-gradient(180deg,rgba(6,20,19,0.05),rgba(6,20,19,0.72))]" />
                <div className="pointer-events-none absolute -left-16 top-28 h-44 w-44 rounded-full bg-teal-300/15 blur-3xl" />
                <div className="pointer-events-none absolute right-0 top-12 h-72 w-72 rounded-full bg-teal-400/10 blur-3xl" />

                <div className="container relative mx-auto grid gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8 lg:py-24">
                    <motion.div
                        initial={{ opacity: 0, y: 28 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.65 }}
                        className="max-w-2xl"
                    >
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.28em] text-stone-100 backdrop-blur-sm">
                            <Sparkles className="h-3.5 w-3.5 text-teal-200" />
                            Program Approved Service Agency in Colorado
                        </span>
                        <h1 className="mt-6 text-balance text-5xl font-semibold leading-tight text-white md:text-6xl">
                            Modern PASA support grounded in dignity, stability, and trust.
                        </h1>
                        <p className="mt-6 max-w-xl text-lg text-teal-50/90 md:text-xl">
                            Wellness Health Care LLC partners with individuals and families to
                            deliver person-centered services that support independence,
                            wellness, and meaningful community life.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-3 text-sm text-teal-50/90">
                            <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-sm">
                                Person-centered planning
                            </span>
                            <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-sm">
                                Colorado PASA provider
                            </span>
                            <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-sm">
                                Family-focused coordination
                            </span>
                        </div>
                        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                            <Button
                                asChild
                                size="lg"
                                className="rounded-full bg-teal-400 px-7 text-base font-semibold text-slate-950 shadow-[0_18px_40px_-16px_rgba(45,212,191,0.8)] hover:bg-teal-300"
                            >
                                <Link href="/request-services/">
                                    Request Services
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <Button
                                asChild
                                size="lg"
                                variant="outline"
                                className="rounded-full border-white/40 bg-white/5 px-7 text-base text-white hover:bg-white hover:text-teal-900"
                            >
                                <Link href="/services">Explore Service Areas</Link>
                            </Button>
                        </div>
                        <div className="mt-8 flex items-center gap-3 rounded-[26px] border border-white/15 bg-white/10 px-5 py-4 backdrop-blur-md sm:max-w-md">
                            <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-teal-300/20 text-teal-100">
                                <span className="pulse-ring absolute inset-0 rounded-full border border-teal-200/60" />
                                <CirclePlay className="relative h-5 w-5" />
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-white">Designed for calm, confident first impressions</p>
                                <p className="text-sm text-teal-50/75">A clearer landing experience for families, referrals, and partners.</p>
                            </div>
                        </div>

                        <div className="mt-10 grid gap-4 sm:grid-cols-3">
                            {heroStats.map((stat) => (
                                <div
                                    key={stat.label}
                                    className="rounded-[24px] border border-white/15 bg-white/10 p-4 backdrop-blur-sm"
                                >
                                    <p className="text-lg font-semibold text-white">{stat.value}</p>
                                    <p className="text-sm text-teal-50/80">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                        className="perspective-soft relative mx-auto w-full max-w-xl lg:max-w-[760px]"
                    >
                        <div className="tilt-card float-crazy relative mx-auto max-w-[700px]">
                            <div className="absolute inset-[-7%] rounded-[54px] bg-[radial-gradient(circle_at_center,rgba(45,212,191,0.26),transparent_58%)] blur-3xl" />
                            <div className="orbit-ring absolute left-1/2 top-1/2 h-[116%] w-[116%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
                            <div className="orbit-ring-reverse absolute left-1/2 top-1/2 h-[96%] w-[96%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-teal-200/20" />

                            <div className="glass-sheen relative overflow-hidden rounded-[40px] border border-white/15 bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(239,246,245,0.95)_100%)] p-5 text-slate-900 shadow-[0_40px_120px_-50px_rgba(0,0,0,0.7)] sm:p-6">
                                <div className="absolute inset-x-10 top-0 h-24 rounded-b-full bg-teal-100/50 blur-2xl" />

                                    <div className="relative overflow-hidden rounded-[30px]">
                                    <div className="relative h-[360px] md:h-[470px]">
                                        <AnimatePresence mode="popLayout">
                                            <motion.div
                                                key={`feature-${activeHeroImage.src}`}
                                                initial={{
                                                    opacity: 0,
                                                    scale: 1.08,
                                                    x: 34,
                                                    filter: "blur(10px)",
                                                    clipPath: "circle(22% at 78% 28%)",
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    scale: 1,
                                                    x: 0,
                                                    filter: "blur(0px)",
                                                    clipPath: "circle(140% at 50% 50%)",
                                                }}
                                                exit={{
                                                    opacity: 0,
                                                    scale: 1.06,
                                                    x: -34,
                                                    filter: "blur(8px)",
                                                    clipPath: "circle(18% at 18% 74%)",
                                                }}
                                                transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
                                                className="absolute inset-0"
                                            >
                                                <Image
                                                    src={activeHeroImage.src}
                                                    alt={activeHeroImage.alt}
                                                    fill
                                                    sizes="(min-width: 1024px) 700px, 100vw"
                                                    className="object-cover"
                                                />
                                            </motion.div>
                                        </AnimatePresence>
                                        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,27,26,0.04),rgba(7,27,26,0.32))]" />
                                    </div>

                                    <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-md">
                                        {activeHeroImage.label}
                                    </div>

                                    <div className="absolute bottom-5 left-5 max-w-[260px] rounded-[26px] border border-white/15 bg-white/12 px-5 py-4 text-white backdrop-blur-md">
                                        <p className="text-sm uppercase tracking-[0.2em] text-teal-100">
                                            Built for families
                                        </p>
                                        <p className="mt-2 text-sm text-teal-50/90">
                                            Clear communication, steady coordination, and support that feels organized.
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-5 grid gap-4 md:grid-cols-[1.05fr_0.95fr]">
                                    <div className="rounded-[26px] border border-teal-100 bg-white/90 p-5 shadow-[0_20px_45px_-30px_rgba(20,40,29,0.28)]">
                                        <p className="text-sm uppercase tracking-[0.2em] text-teal-800">
                                            Structured support
                                        </p>
                                        <p className="mt-2 text-base text-slate-700">
                                            Modern care presentation with a calm, professional tone and stronger trust signals.
                                        </p>
                                    </div>

                                    <div className="rounded-[26px] bg-[linear-gradient(135deg,#0f766e_0%,#103330_100%)] p-5 text-white shadow-[0_26px_50px_-30px_rgba(15,118,110,0.7)]">
                                        <p className="text-sm uppercase tracking-[0.2em] text-teal-100">
                                            Focused on outcomes
                                        </p>
                                        <p className="mt-2 text-base text-teal-50/90">
                                            Health, welfare, participation, and daily support that fits real life.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="float-delay relative mx-auto mt-6 max-w-[620px] rounded-[24px] border border-teal-200/80 bg-teal-50/95 px-5 py-4 text-sm text-stone-800 shadow-lg backdrop-blur-sm">
                            <p className="font-semibold">Serving Colorado families</p>
                            <p className="mt-1 text-stone-600">Aurora-based with regional support coordination</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="bg-[var(--surface)] py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl">
                        <p className="text-sm uppercase tracking-[0.24em] text-teal-800">
                            Why families choose us
                        </p>
                        <h2 className="mt-4 text-balance text-4xl">
                            A professional PASA presence with warmth, clarity, and follow-through.
                        </h2>
                    </div>

                    <div className="mt-10 grid gap-6 md:grid-cols-3">
                        {highlights.map((item, index) => {
                            const Icon = item.icon
                            return (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.45, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="card rounded-[30px] bg-white p-8"
                                >
                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-teal-800">
                                        <Icon className="h-7 w-7" />
                                    </div>
                                    <h3 className="mt-6 text-2xl">{item.title}</h3>
                                    <p className="mt-3 text-base text-slate-600">{item.description}</p>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>

            <section className="bg-stone-100/80 py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
                        <div>
                            <p className="text-sm uppercase tracking-[0.24em] text-teal-800">
                                Waiver support
                            </p>
                            <h2 className="mt-4 text-balance text-4xl">
                                Clearer guidance for the services and pathways families need to understand.
                            </h2>
                            <p className="mt-5 max-w-xl text-lg text-slate-600">
                                The example PASA sites you shared do one thing especially well:
                                they make complex service systems easier to understand. This
                                homepage now follows that pattern with a more structured, easier
                                to scan explanation of waiver-related support.
                            </p>
                            <div className="mt-8 rounded-[28px] bg-white p-6 shadow-[0_24px_70px_-45px_rgba(20,40,29,0.45)]">
                                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
                                    What a PASA means
                                </p>
                                <p className="mt-3 text-base text-slate-700">
                                    A Program Approved Service Agency is authorized to provide
                                    direct, home- and community-based support services. Families
                                    need an agency that can translate that structure into
                                    dependable everyday care.
                                </p>
                            </div>
                        </div>

                        <div className="grid gap-5">
                            {waiverCards.map((card, index) => (
                                <motion.div
                                    key={card.title}
                                    initial={{ opacity: 0, x: 24 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.45, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="rounded-[28px] border border-stone-200 bg-white p-7 shadow-[0_22px_70px_-48px_rgba(20,40,29,0.45)]"
                                >
                                    <p className="text-sm uppercase tracking-[0.22em] text-teal-800">
                                        {card.title}
                                    </p>
                                    <p className="mt-3 text-lg text-slate-700">{card.text}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[var(--surface)] py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                        <div className="max-w-2xl">
                            <p className="text-sm uppercase tracking-[0.24em] text-teal-800">
                                Core services
                            </p>
                            <h2 className="mt-4 text-balance text-4xl">
                                Service lines presented in a cleaner, more professional way.
                            </h2>
                        </div>
                        <Link
                            href="/services"
                            className="inline-flex items-center gap-2 font-semibold text-teal-800 transition hover:text-teal-950"
                        >
                            View all services
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>

                    <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {SERVICES.map((service, index) => {
                            const Icon = service.icon
                            return (
                                <motion.div
                                    key={service.id}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.06 }}
                                    viewport={{ once: true }}
                                    className="rounded-[30px] border border-stone-200 bg-white p-7 shadow-[0_20px_65px_-45px_rgba(20,40,29,0.45)]"
                                >
                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-stone-100 text-teal-800">
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

            <section className="bg-teal-950 py-20 text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl">
                        <p className="text-sm uppercase tracking-[0.24em] text-teal-300">
                            Working together
                        </p>
                        <h2 className="mt-4 text-balance text-4xl text-white">
                            A more credible care journey from first contact through ongoing support.
                        </h2>
                    </div>

                    <div className="mt-10 grid gap-6 lg:grid-cols-4">
                        {processSteps.map((item, index) => (
                            <motion.div
                                key={item.step}
                                initial={{ opacity: 0, y: 28 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.45, delay: index * 0.08 }}
                                viewport={{ once: true }}
                                className="rounded-[28px] border border-white/10 bg-white/5 p-7 backdrop-blur-sm"
                            >
                                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-teal-300">
                                    {item.step}
                                </p>
                                <h3 className="mt-5 text-2xl text-white">{item.title}</h3>
                                <p className="mt-3 text-base text-teal-50/80">{item.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-[var(--surface)] py-20">
                <div className="container mx-auto grid gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
                    <div className="rounded-[36px] bg-white p-8 shadow-[0_26px_80px_-48px_rgba(20,40,29,0.45)]">
                        <p className="text-sm uppercase tracking-[0.24em] text-teal-800">
                            Local presence
                        </p>
                        <h2 className="mt-4 text-balance text-4xl">
                            Colorado-based and ready to connect with families who need answers.
                        </h2>
                        <div className="mt-8 space-y-5 text-base text-slate-700">
                            <div className="flex items-start gap-3">
                                <MapPin className="mt-1 h-5 w-5 text-teal-700" />
                                <span>
                                    {CONTACT_INFO.addressLine1}
                                    <br />
                                    {CONTACT_INFO.addressLine2}
                                    <br />
                                    {CONTACT_INFO.cityStateZip}
                                </span>
                            </div>
                            <a className="flex items-center gap-3 transition hover:text-teal-800" href={`tel:${CONTACT_INFO.phone}`}>
                                <Phone className="h-5 w-5 text-teal-700" />
                                <span>{CONTACT_INFO.phone}</span>
                            </a>
                            <div className="flex flex-wrap gap-3 pt-2">
                                {coverageAreas.map((area) => (
                                    <span
                                        key={area}
                                        className="rounded-full border border-stone-200 bg-stone-50 px-4 py-2 text-sm text-slate-700"
                                    >
                                        {area}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="rounded-[36px] border border-stone-200 bg-[linear-gradient(135deg,#fffdf8_0%,#f2eee3_100%)] p-8 shadow-[0_26px_80px_-48px_rgba(20,40,29,0.45)]">
                        <p className="text-sm uppercase tracking-[0.24em] text-teal-800">
                            What this redesign improves
                        </p>
                        <div className="mt-6 grid gap-4">
                            {[
                                "Stronger PASA-specific messaging instead of generic wellness copy.",
                                "A calmer visual hierarchy that feels more credible for families and referral partners.",
                                "More direct contact paths and service explanations that reduce confusion.",
                                "A homepage structure that supports trust, readability, and action.",
                            ].map((point) => (
                                <div
                                    key={point}
                                    className="flex items-start gap-3 rounded-[22px] bg-white/80 px-5 py-4"
                                >
                                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal-800" />
                                    <p className="text-base text-slate-700">{point}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <ChatIntake />

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
                                Start the conversation
                            </motion.div>
                            <h2 className="mt-6 text-balance text-4xl font-semibold text-slate-950 md:text-5xl">
                                Ready to talk through PASA services for your family?
                            </h2>
                            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                                Reach out to Wellness Health Care LLC for referrals, questions, and next-step guidance.
                            </p>

                            <div className="mt-7 flex flex-wrap gap-3">
                                {homeCtaHighlights.map((item, index) => (
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
                                        <a href={`tel:${CONTACT_INFO.phone}`}>Call {CONTACT_INFO.phone}</a>
                                    </Button>
                                </motion.div>
                            </div>
                        </div>

                        <div className="relative min-h-[320px] overflow-hidden bg-[linear-gradient(145deg,#0f766e_0%,#123c39_100%)] p-8 text-white sm:p-10 lg:p-12">
                            <div className="absolute inset-0 opacity-25">
                                <Image src="/images/community_support.jpg" alt="PASA service conversation" fill className="object-cover" />
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
                                        Guidance with care
                                    </p>
                                    <p className="mt-3 text-lg leading-7 text-white">
                                        We can help make the first step feel organized, clear, and easier to act on.
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
