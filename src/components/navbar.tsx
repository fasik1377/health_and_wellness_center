"use client"

import * as React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  X,
} from "lucide-react"
import { Button } from "./ui/button"
import { CONTACT_INFO, NAVIGATION, SITE_CONFIG } from "@/lib/constants"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const pathname = usePathname()

  const isActive = (href: string) =>
    href === "/" ? pathname === href : pathname.startsWith(href)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-transparent text-white">
      <div className="brand-shimmer relative overflow-hidden border-b border-white/10 text-stone-100">
        <div className="chrome-grid absolute inset-0 opacity-30" />
        <div className="pointer-events-none absolute -left-8 top-0 h-24 w-24 rounded-full bg-teal-300/10 blur-2xl" />
        <div className="container relative mx-auto flex flex-col gap-2 px-4 py-3 text-sm sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-6">
            <a className="flex items-center gap-2 text-stone-100/85 transition hover:text-white" href={`tel:${CONTACT_INFO.phone}`}>
              <Phone className="h-4 w-4 text-teal-200" />
              <span>{CONTACT_INFO.phone}</span>
            </a>
            <a className="flex items-center gap-2 text-stone-100/85 transition hover:text-white" href={`mailto:${CONTACT_INFO.email}`}>
              <Mail className="h-4 w-4 text-teal-200" />
              <span>{CONTACT_INFO.email}</span>
            </a>
          </div>
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-stone-100/75">
              <MapPin className="h-4 w-4 text-teal-200" />
              <span>Aurora, Colorado</span>
            </div>
            <div className="flex items-center gap-3">
              <a aria-label="Facebook" className="text-stone-100/70 transition hover:text-white" href={SITE_CONFIG.links.facebook} rel="noreferrer" target="_blank">
                <Facebook className="h-4 w-4" />
              </a>
              <a aria-label="Instagram" className="text-stone-100/70 transition hover:text-white" href={SITE_CONFIG.links.instagram} rel="noreferrer" target="_blank">
                <Instagram className="h-4 w-4" />
              </a>
              <a aria-label="LinkedIn" className="text-stone-100/70 transition hover:text-white" href={SITE_CONFIG.links.linkedin} rel="noreferrer" target="_blank">
                <Linkedin className="h-4 w-4" />
              </a>
              <a aria-label="TikTok" className="text-stone-100/70 transition hover:text-white" href={SITE_CONFIG.links.tiktok} rel="noreferrer" target="_blank">
                <Image src="/images/tiktok.png" alt="TikTok" width={16} height={16} className="object-contain opacity-90 transition hover:opacity-100" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden border-b border-white/10 bg-[linear-gradient(180deg,rgba(7,27,26,0.92)_0%,rgba(9,19,17,0.82)_100%)] backdrop-blur-xl">
        <div className="chrome-grid absolute inset-0 opacity-15" />
        <div className="pointer-events-none absolute left-20 top-0 h-20 w-48 rounded-full bg-teal-300/10 blur-3xl" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <Link className="group relative z-20 flex items-center gap-3" href="/">
              <motion.div
                className="relative h-14 w-14 shrink-0"
                whileHover={{ scale: 2.35, rotate: [0, -4, 4, 0] }}
                whileTap={{ scale: 1.85 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
              >
                <motion.div
                  aria-hidden="true"
                  className="absolute inset-[-8px] rounded-full bg-teal-300/25 blur-xl opacity-0"
                  whileHover={{ opacity: 1, scale: 1.15 }}
                  transition={{ duration: 0.25 }}
                />
                <Image
                  src="/images/logo.png"
                  alt="Wellness Health Care logo"
                  width={56}
                  height={56}
                  className="relative rounded-full border border-white/25 bg-white object-contain p-1 shadow-[0_16px_35px_-18px_rgba(45,212,191,0.6)]"
                />
              </motion.div>
              <div>
                <p className="text-lg font-semibold leading-none text-white">
                  Wellness Health Care
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.24em] text-teal-200">
                  Colorado PASA Services
                </p>
              </div>
            </Link>

            <nav className="hidden items-center gap-8 md:flex">
              {NAVIGATION.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "relative text-sm font-semibold transition",
                    isActive(item.href)
                      ? "text-white"
                      : "text-stone-100/80 hover:text-white",
                  )}
                >
                  {item.name}
                  <span
                    className={cn(
                      "absolute -bottom-2 left-0 h-0.5 rounded-full bg-teal-300 transition-all",
                      isActive(item.href) ? "w-full" : "w-0",
                    )}
                  />
                </Link>
              ))}
              <Link
                href="/request-services/"
                className="inline-flex h-10 items-center justify-center rounded-full bg-teal-400 px-6 text-sm font-semibold text-slate-950 shadow-[0_18px_36px_-18px_rgba(45,212,191,0.85)] transition hover:bg-teal-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-200 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-950"
              >
                Request Services
              </Link>
            </nav>

            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10 hover:text-white md:hidden"
              onClick={() => setIsOpen((value) => !value)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>

          <div
            className={cn(
              "overflow-hidden transition-all duration-300 md:hidden",
              isOpen ? "max-h-[420px] pb-6" : "max-h-0",
            )}
          >
            <div className="space-y-2 border-t border-white/10 pt-4">
              {NAVIGATION.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "block rounded-2xl px-4 py-3 font-medium transition",
                    isActive(item.href)
                      ? "bg-white/15 text-white"
                      : "text-stone-100/85 hover:bg-white/10 hover:text-white",
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/request-services/"
                className="mt-2 inline-flex h-10 w-full items-center justify-center rounded-full bg-teal-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-teal-300"
                onClick={() => setIsOpen(false)}
              >
                Request Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
