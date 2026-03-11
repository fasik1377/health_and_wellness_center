"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { ArrowRight, Users, HeartHandshake, Home, GraduationCap } from "lucide-react"
import { ServiceCard } from "@/components/service-card"
import { TestimonialsSlider } from "@/components/testimonials-slider"
import { Button } from "@/components/ui/button"
import { SERVICES } from "@/lib/constants"
import Link from "next/link"
import Image from "next/image"

// Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, EffectFade, Parallax } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/effect-fade"
import "swiper/css/parallax"

const features = [
    { title: "Person-Centered Support", description: "Every individual is unique. We provide services tailored to personal goals, strengths, and needs.", icon: Users },
    { title: "Community Inclusion", description: "Helping individuals actively participate in their communities with dignity and independence.", icon: HeartHandshake },
    { title: "Safe & Supportive Homes", description: "Residential programs that create safe, welcoming, and empowering living environments.", icon: Home },
    { title: "Growth & Learning", description: "Skill-building and educational opportunities to promote independence and lifelong learning.", icon: GraduationCap },
]

const galleryImages = [
    { src: "images/wellnesshome.jpg" },
    { src: "images/wellnesshome2.jpg" },
    { src: "images/therapy.jpg" },
    { src: "images/community_support1.jpg" },
]

export default function HomePage() {
    // --- grouped slides: each inner array is one Swiper slide showing 4 images (2x2 grid) ---
    const groupedSlides = [
        [
            { src: "images/outdoor_community.jpg" },
            { src: "images/charity.jpg" },
            { src: "images/community_support.jpg" },
            { src: "images/group_wellness.jpg" },
        ],
        [
            { src: "images/quality_program.jpg" },
            { src: "images/bg2.jpg" },
            { src: "images/care.jpg" },
            { src: "images/therapy.jpg" },
        ],
    ]

    // Unique animation presets (one per image slot)
    const imageVariants = [
        { initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 } }, // slide up
        { initial: { opacity: 0, x: -50 }, animate: { opacity: 1, x: 0 } }, // slide from left
        { initial: { opacity: 0, x: 50 }, animate: { opacity: 1, x: 0 } }, // slide from right
        { initial: { opacity: 0, scale: 0.85 }, animate: { opacity: 1, scale: 1 } }, // zoom in
    ]

    // Different hover classes
    const hoverClasses = [
        "hover:scale-110",
        "hover:-translate-y-2 hover:scale-105",
        "hover:translate-y-2 hover:scale-105",
        "hover:translate-x-2 hover:scale-105",
    ]

    const slides = [
        {
            src: "/images/mission.jpg",
            caption: "Empowering Lives Through Compassionate Support"
        },
        {
            src: "/images/therapy.jpg",
            caption: "Promoting Independence, Dignity & Wellness"
        },
        {
            src: "/images/quality_program.jpg",
            caption: "Trusted PASA Provider Serving Colorado Families"
        },
        {
            src: "/images/charity.jpg",
            caption: "Dedicated Care for Every Individual"
        }
    ]
    return (
        <div className="flex flex-col space-y-20">


            <section className="relative w-full h-[92vh] overflow-hidden">

                <Swiper
                    modules={[Autoplay, Pagination, EffectFade]}
                    autoplay={{ delay: 6000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    effect="fade"
                    loop
                    className="w-full h-full"
                >

                    {slides.map((slide, index) => (

                        <SwiperSlide key={index}>

                            <div className="relative w-full h-[92vh] overflow-hidden">

                                {/* ================= HERO IMAGE ================= */}

                                <motion.div
                                    initial={{ scale: 1.1 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 6 }}
                                    className="absolute inset-0"
                                >

                                    <Image
                                        src={slide.src}
                                        alt={slide.caption}
                                        fill
                                        priority
                                        className="object-cover"
                                    />

                                </motion.div>

                                {/* ================= GRADIENT OVERLAY ================= */}

                                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>

                                {/* ================= HERO CONTENT ================= */}

                                <div className="absolute inset-0 flex items-center z-10">

                                    <div className="max-w-7xl mx-auto px-8 w-full">

                                        <motion.div
                                            initial={{ opacity: 0, y: 40 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.8 }}
                                            className="max-w-xl text-white space-y-6"
                                        >

                                            <h1 className="text-5xl md:text-6xl font-bold leading-tight">

                                                Wellness Health Care LLC

                                            </h1>

                                            <p className="text-xl text-gray-200 leading-relaxed">
                                                {slide.caption}
                                            </p>

                                            <div className="flex gap-5 flex-wrap pt-4">

                                                <Link
                                                    href="/services"
                                                    className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-full shadow-xl transition hover:scale-105"
                                                >
                                                    Explore Our Services
                                                </Link>

                                                <Link
                                                    href="/contact"
                                                    className="px-8 py-4 border border-white/70 text-white hover:bg-white hover:text-teal-700 font-semibold rounded-full transition"
                                                >
                                                    Contact Our Team
                                                </Link>

                                            </div>

                                        </motion.div>

                                    </div>

                                </div>

                                {/* ================= FLOATING TRUST BADGE ================= */}

                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8 }}
                                    className="absolute bottom-24 left-10 hidden lg:block"
                                >

                                    <div className="backdrop-blur-md bg-white/20 border border-white/30 text-white px-6 py-4 rounded-2xl shadow-xl">

                                        <p className="text-sm font-semibold">
                                            Trusted PASA Provider
                                        </p>

                                        <p className="text-xs text-gray-200">
                                            Serving Families Across Colorado
                                        </p>

                                    </div>

                                </motion.div>

                                {/* ================= MODERN ORGANIC LOGO CARD ================= */}

                                <motion.div
                                    animate={{
                                        y: [0, -15, 0],
                                        rotate: [0, 2, -2, 0]
                                    }}
                                    transition={{
                                        duration: 6,
                                        repeat: Infinity
                                    }}
                                    className="hidden md:flex absolute right-10 top-16 z-10"
                                >

                                    <div className="relative w-[420px] h-[420px]">

                                        {/* ORGANIC SHAPE */}

                                        <svg
                                            viewBox="0 0 500 500"
                                            className="absolute inset-0 w-full h-full"
                                        >

                                            <path
                                                fill="rgba(255,255,255,0.9)"
                                                d="M421,298Q393,346,352,376Q311,406,256,417Q201,428,153,400Q105,372,86,320Q67,268,79,214Q91,160,128,121Q165,82,217,72Q269,62,319,84Q369,106,403,151Q437,196,438,248Q439,300,421,298Z"
                                            />

                                        </svg>

                                        {/* LOGO */}

                                        <div className="absolute inset-0 flex items-center justify-center">

                                            <motion.div
                                                animate={{
                                                    rotateY: [0, 360]
                                                }}
                                                transition={{
                                                    duration: 12,
                                                    repeat: Infinity,
                                                    ease: "linear"
                                                }}
                                                className="w-44"
                                            >

                                                <Image
                                                    src="/images/logo.png"
                                                    alt="Wellness Healthcare Logo"
                                                    width={180}
                                                    height={180}
                                                    className="object-contain"
                                                />

                                            </motion.div>

                                        </div>

                                    </div>

                                </motion.div>

                            </div>

                        </SwiperSlide>

                    ))}

                </Swiper>

                {/* ================= CURVED DIVIDER ================= */}

                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">

                    <svg
                        className="relative block w-[calc(100%+1.3px)] h-[120px]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                    >

                        <path
                            d="M0,0V46.29c47.79,22,103.59,32.17,158,28,
70.36-5.37,136.33-33.31,206.8-37.5C438.64,32,
512.34,53.67,583,72.05c69.27,18,138.3,24.88,
209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,
25,1113-7.44,1200,2.44V0Z"
                            className="fill-white"
                        />

                    </svg>

                </div>

            </section>


            {/* ===================== PERSISTENT INFINITE CURVED SHAPE ===================== */}
            <div className="relative w-full h-[120px] overflow-hidden bg-white dark:bg-gray-950">
                <div className="absolute bottom-0 left-0 w-[200%] h-[180px]">
                    {/* Gradient Wave (background) */}
                    <svg
                        className="absolute bottom-0 left-0 w-[200%] h-[180px] animate-wave-slow"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1440 320"
                        preserveAspectRatio="none"
                    >
                        <defs>
                            <linearGradient id="gradientCurve" x1="0" y1="0" x2="1" y2="1">
                                <stop offset="0%" stopColor="#14b8a6" />
                                <stop offset="50%" stopColor="#0d9488" />
                                <stop offset="100%" stopColor="#0f766e" />
                            </linearGradient>
                        </defs>
                        <path
                            fill="url(#gradientCurve)"
                            d="M0,224L60,197.3C120,171,240,117,360,96C480,75,600,85,720,122.7C840,160,960,224,1080,234.7C1200,245,1320,203,1380,181.3L1440,160L1440,320L0,320Z"
                        />
                    </svg>

                    {/* White Wave (foreground) */}
                    <svg
                        className="absolute bottom-0 left-0 w-[200%] h-[180px] opacity-70 animate-wave-fast"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1440 320"
                        preserveAspectRatio="none"
                    >
                        <path
                            fill="#ffffff"
                            fillOpacity="1"
                            d="M0,160L60,165.3C120,171,240,181,360,202.7C480,224,600,256,720,245.3C840,235,960,181,1080,154.7C1200,128,1320,128,1380,128L1440,128L1440,320L0,320Z"
                        />
                    </svg>
                </div>
            </div>

            {/* ===================== CUSTOM ANIMATIONS ===================== */}
            <style jsx>{`
  @keyframes waveScroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  .animate-wave-slow {
    animation: waveScroll 22s linear infinite;
  }

  .animate-wave-fast {
    animation: waveScroll 14s linear infinite;
  }
`}</style>
            {/* ===================== Features Section ===================== */}
            <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-black">
                <div className="container mx-auto px-4 lg:px-20">

                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <motion.h2
                            className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-5"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            Why Choose Wellness Health Care LLC?
                        </motion.h2>

                        <motion.p
                            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            Dedicated to supporting individuals and families through compassionate, person-centered services that nurture holistic wellness.
                        </motion.p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                        {features.map((feature, index) => {
                            const Icon = feature.icon

                            return (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ rotateX: 6, rotateY: -6, scale: 1.05, y: -6 }}
                                    style={{ transformPerspective: 1000 }}
                                    className="group relative rounded-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border border-gray-200 dark:border-gray-700 p-8 shadow-xl hover:shadow-2xl transition-all duration-500"
                                >
                                    {/* Glow */}
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-teal-400 via-emerald-400 to-cyan-400 opacity-0 group-hover:opacity-20 blur-xl transition duration-500"></div>

                                    {/* Icon */}
                                    <motion.div
                                        animate={{ y: [0, -6, 0] }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                        className="relative mb-6 w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-emerald-500 text-white shadow-lg"
                                    >
                                        <Icon className="w-7 h-7" />
                                    </motion.div>

                                    {/* Title */}
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{feature.title}</h3>

                                    {/* Description */}
                                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{feature.description}</p>

                                    {/* Hover border */}
                                    <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-teal-400/40 transition-all duration-500"></div>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>           {/* ===================== Services Section ===================== */}
            <section className="relative py-24 bg-gradient-to-b from-white via-teal-50 to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-950 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(13,148,136,0.15),transparent_70%)]"></div>
                <div className="container relative z-10 mx-auto px-6 lg:px-12">
                    {/* ========== Header ========== */}
                    <motion.div
                        className="text-center mb-20"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                            Our Comprehensive PASA Services
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            Every service we provide is built around compassion, inclusion,
                            and a commitment to helping every individual thrive.
                        </p>
                    </motion.div>
                    <div className="space-y-20">
                        {[
                            {
                                title: "Self-Advocacy Training",
                                description:
                                    "Empowering individuals to speak up for themselves, make informed decisions, and actively participate in shaping their own lives.",
                                icon: HeartHandshake,
                            },
                            {
                                title: "Independent Living Skills Training",
                                description:
                                    "Helping individuals build essential daily living skills that promote confidence, autonomy, and a more independent lifestyle.",
                                icon: Users,
                            },
                            {
                                title: "Cognitive Skills Training",
                                description:
                                    "Supporting the development of memory, problem-solving, attention, and decision-making skills for greater personal growth.",
                                icon: Home,
                            },
                        ].map((service, index) => {
                            const Icon = service.icon
                            return (
                                <motion.div
                                    key={index}
                                    className={`flex flex-col md:flex-row items-center gap-10 ${index % 2 === 0
                                        ? "md:flex-row"
                                        : "md:flex-row-reverse md:text-right"
                                        }`}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    {/* ===== Icon Circle ===== */}
                                    <div className="relative flex-shrink-0">
                                        <motion.div
                                            className="bg-white/60 dark:bg-gray-800/40 backdrop-blur-lg rounded-full p-10 shadow-xl border border-teal-200 dark:border-teal-700 hover:shadow-2xl transition-all"
                                            animate={{ y: [0, -10, 0] }}
                                            transition={{ duration: 3, repeat: Infinity }}
                                        >
                                            <Icon className="w-14 h-14 text-teal-700 dark:text-teal-300" />
                                        </motion.div>
                                        <div className="absolute inset-0 blur-2xl bg-teal-400/20 rounded-full -z-10"></div>
                                    </div>

                                    {/* ===== Text ===== */}
                                    <div className="max-w-xl">
                                        <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-3">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                                            {service.description}
                                        </p>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>

                    {/* ========== View All Button ========== */}
                    <div className="text-center mt-20">
                        <Button
                            asChild
                            size="lg"
                            className="px-10 py-5 text-lg rounded-full shadow-2xl hover:scale-110 transition-transform bg-teal-600 text-white hover:bg-teal-700"
                        >
                            <Link href="/services">
                                View All Services
                                <ArrowRight className="ml-2 h-6 w-6" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* ===================== Huge Image Gallery ===================== */}
            <section className="py-24 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
                <div className="container mx-auto px-6 lg:px-12">

                    {/* Section Header */}
                    <div className="text-center mb-20">
                        <motion.h2
                            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                        >
                            Life at Wellness Health Care
                        </motion.h2>

                        <motion.p
                            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            A glimpse of our daily activities, community events, and joyful moments.
                        </motion.p>
                    </div>

                    {/* Swiper Gallery */}
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        pagination={{ clickable: true }}
                        loop
                        spaceBetween={20}
                        slidesPerView={2}
                        className="w-full h-[500px] md:h-[550px] lg:h-[600px] rounded-3xl overflow-visible relative"
                    >
                        {galleryImages.map((img, index) => (
                            <SwiperSlide key={index} className="flex justify-center items-center">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95, rotate: -1 }}
                                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                                    whileHover={{ scale: 1.05, rotate: 1, y: -10 }}
                                    transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 120 }}
                                    viewport={{ once: true }}
                                    className="relative w-full max-w-[450px] md:max-w-[500px] h-full rounded-3xl shadow-2xl overflow-hidden cursor-pointer"
                                >
                                    {/* Gradient overlay for depth */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 opacity-70 group-hover:opacity-50 transition-opacity duration-500 z-10 rounded-3xl"></div>

                                    {/* Image */}
                                    <img
                                        src={img.src}
                                        alt={`Gallery image ${index + 1}`}
                                        className="w-full h-full object-cover rounded-3xl"
                                    />
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
            {/* ===================== Testimonials / Patient Stories ===================== */}
            <section className="relative py-28 bg-gradient-to-b from-white to-emerald-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">

                {/* Soft background accent */}
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl"></div>

                <div className="relative container mx-auto px-6 lg:px-12">

                    <div className="text-center max-w-3xl mx-auto mb-20">

                        <motion.span
                            className="inline-block text-emerald-600 font-semibold tracking-wide uppercase text-sm mb-4"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            Patient & Family Stories
                        </motion.span>

                        <motion.h2
                            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            Trusted Care. Real Experiences.
                        </motion.h2>

                        <motion.p
                            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            At <span className="font-semibold text-emerald-600">PASA Colorado</span>, we believe
                            compassionate care transforms lives. Hear from families and individuals who have
                            experienced our commitment to dignity, wellness, and personalized healthcare support.
                        </motion.p>

                    </div>

                    {/* Testimonials slider */}
                    <div className="relative">
                        <TestimonialsSlider />
                    </div>

                </div>
            </section>

            {/* ===================== CTA / Contact ===================== */}
            <section className="relative py-28 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 dark:from-emerald-700 dark:via-teal-700 dark:to-emerald-600 overflow-hidden">

                {/* Soft background glow */}
                <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

                <div className="relative container mx-auto px-6 lg:px-12 text-center">

                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto"
                    >

                        <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6 drop-shadow-xl">
                            Compassionate Care <br />
                            <span className="text-emerald-100">That Empowers Lives</span>
                        </h2>

                        <p className="text-lg md:text-xl text-emerald-100 mb-12 leading-relaxed max-w-3xl mx-auto">
                            At <span className="font-semibold text-white">Wellness Health Care LLC</span>,
                            we are dedicated to supporting individuals with intellectual and developmental
                            disabilities across Colorado. Our mission is to provide compassionate services
                            that promote independence, dignity, and a better quality of life for every
                            individual and family we serve.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">

                            <Button
                                asChild
                                size="lg"
                                className="rounded-full px-12 py-6 text-lg font-semibold bg-white text-teal-600 hover:bg-emerald-50 shadow-xl hover:scale-105 transition-all"
                            >
                                <Link href="/contact">Request Care Services</Link>
                            </Button>

                            <Button
                                asChild
                                size="lg"
                                variant="outline"
                                className="border-2 border-white text-white hover:bg-white hover:text-teal-600 rounded-full px-12 py-6 text-lg transition-all"
                            >
                                <Link href="/about">Explore Our Programs</Link>
                            </Button>

                        </div>

                        {/* Contact Info */}
                        <div className="text-emerald-100 text-lg space-y-3 opacity-95">

                            <p className="text-gray-200">
                                14291 E 4th Ave, Suite 7-110 <br />
                                Aurora, Colorado 80011
                            </p>

                            <p className="font-medium">
                                Phone: +1 720 552 1710
                            </p>

                            <p>
                                Email: wellnesshealthcare2025@gmail.com
                            </p>

                        </div>

                    </motion.div>

                </div>
            </section>
        </div>
    )
}
