"use client"

import * as React from "react"
import { motion } from "framer-motion"
import {
  HeartHandshake,
  Users,
  Home,
  HandHeart,
  Brain,
  Globe,
  Sparkles,
} from "lucide-react"

const services = [
  {
    title: "Personal Care",
    description:
      "We provide compassionate assistance with daily living activities helping each individual maintain dignity, comfort, and independence.",
    icon: HeartHandshake,
  },
  {
    title: "Pre-Vocational Services & Supported Employment",
    description:
      "Our team empowers members to develop skills, explore job opportunities, and thrive in meaningful employment within their communities.",
    icon: Users,
  },
  {
    title: "Residential Services & Support Homes",
    description:
      "Safe, nurturing, and person-centered homes that foster independence, inclusion, and a true sense of belonging.",
    icon: Home,
  },
  {
    title: "Homemaker Services (Basic & Enhanced)",
    description:
      "Helping individuals maintain a clean, safe, and comfortable home environment — from light cleaning to meal preparation.",
    icon: HandHeart,
  },
  {
    title: "Behavioral Services",
    description:
      "Personalized support to promote emotional wellness, adaptive behavior, and positive relationships for overall wellbeing.",
    icon: Brain,
  },
  {
    title: "Supported Community Connection",
    description:
      "Encouraging active participation in community life through social, recreational, and volunteer engagement opportunities.",
    icon: Globe,
  },
  {
    title: "Mentorship",
    description:
      "Guiding individuals through personal growth and skill development, building confidence and meaningful relationships.",
    icon: Sparkles,
  },
]

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* ===================== Hero Section ===================== */}
      <section className="relative py-32 bg-gradient-to-br from-teal-700 via-teal-800 to-gray-900 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 animate-pulse"
          style={{ backgroundImage: "url('../../images/care.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>

        <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-teal-200 via-white to-teal-100"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Empowering Lives with <br />
            <span className="text-teal-300">Compassionate PASA Care</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-gray-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            At PASA Colorado, we deliver personalized, state-approved services
            that promote independence, dignity, and meaningful community
            connections across the state.
          </motion.p>
        </div>
      </section>

      {/* ===================== Services Section ===================== */}
      <section className="relative py-24 bg-gradient-to-b from-white via-teal-50 to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(13,148,136,0.15),transparent_70%)]"></div>
        <div className="container relative z-10 mx-auto px-6 lg:px-12">
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
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={index}
                  className={`flex flex-col md:flex-row items-center gap-10 ${
                    index % 2 === 0
                      ? "md:flex-row"
                      : "md:flex-row-reverse md:text-right"
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
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
        </div>
      </section>

      {/* ===================== CTA Section ===================== */}
      <section className="relative py-24 bg-gradient-to-r from-teal-800 via-teal-700 to-teal-900 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),transparent_70%)]"></div>
        <motion.h3
          className="text-4xl md:text-5xl font-bold mb-6 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Ready to Experience Compassionate PASA Care?
        </motion.h3>
        <motion.p
          className="text-lg mb-10 max-w-3xl mx-auto text-gray-200"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Let’s build a care plan together that prioritizes your goals,
          independence, and quality of life.
        </motion.p>
        <motion.a
          href="/contact"
          className="relative inline-block px-10 py-5 rounded-full text-lg font-semibold text-teal-900 bg-white shadow-2xl hover:scale-105 transition-transform duration-300"
          whileHover={{ scale: 1.08 }}
        >
          <span className="relative z-10">Contact Us Today</span>
          <div className="absolute inset-0 bg-gradient-to-r from-teal-300 via-teal-200 to-white rounded-full blur-xl opacity-60 animate-pulse"></div>
        </motion.a>
      </section>
    </div>
  )
}
