"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Sun, Moon, Facebook, Instagram, Linkedin, Phone, Mail } from "lucide-react"
import Image from "next/image"
import { Button } from "./ui/button"
import { useTheme } from "./theme-provider"
import { NAVIGATION as BASE_NAV } from "@/lib/constants"
import { cn } from "@/lib/utils"

// ✅ Add FAQ to the navigation
const NAVIGATION = [
    ...BASE_NAV,
    { name: "FAQ", href: "/faq" }, // New FAQ Menu Item
]

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false)
    const pathname = usePathname()
    const { theme, setTheme } = useTheme()

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }

    const isActive = (href: string) => {
        if (href === "/") return pathname === "/"
        return pathname.startsWith(href)
    }

    return (
        <header className="sticky top-0 z-50 w-full border-b border-white/20 bg-white/80 backdrop-blur-xl dark:bg-gray-900/80 transition-all">

            {/* ===================== Top Info Bar ===================== */}

            <div className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white text-sm">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between py-3 space-y-2 md:space-y-0">

                    {/* Contact Info */}

                    <div className="flex flex-col md:flex-row md:items-center md:space-x-6 text-center md:text-left">

                        <a
                            href="tel:+17205521710"
                            className="flex items-center justify-center space-x-2 hover:opacity-90 transition"
                        >
                            <Phone className="h-4 w-4" />
                            <span className="font-medium">+1 720 552 1710</span>
                        </a>

                        <a
                            href="mailto:Wellnesshealthcare2025@gmail.com"
                            className="flex items-center justify-center space-x-2 hover:opacity-90 transition"
                        >
                            <Mail className="h-4 w-4" />
                            <span className="font-medium">wellnesshealthcare2025@gmail.com</span>
                        </a>

                    </div>

                    {/* Social Links */}

                    <div className="flex items-center space-x-4">

                        <a
                            href="https://www.facebook.com/profile.php?id=61582141343241"
                            target="_blank"
                            className="hover:scale-110 transition"
                        >
                            <Facebook className="h-4 w-4" />
                        </a>

                        <a
                            href="https://www.instagram.com/wellness_colorado"
                            target="_blank"
                            className="hover:scale-110 transition"
                        >
                            <Instagram className="h-4 w-4" />
                        </a>

                        <a
                            href="https://www.linkedin.com/company/wellness-health-care-llc/"
                            target="_blank"
                            className="hover:scale-110 transition"
                        >
                            <Linkedin className="h-4 w-4" />
                        </a>

                        <a
                            href="http://tiktok.com/@wellnesshealthcare2025"
                            target="_blank"
                            className="hover:scale-110 transition"
                        >
                            <Image
                                src="/images/tiktok.png"
                                alt="TikTok"
                                width={20}
                                height={20}
                            />
                        </a>

                    </div>

                </div>
            </div>

            {/* ===================== Main Navbar ===================== */}

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex h-20 items-center justify-between">

                    {/* Logo */}

                    <Link href="/" className="flex items-center space-x-3">

                        <Image
                            src="/images/logo.png"
                            alt="Wellness Health Care"
                            width={60}
                            height={60}
                            className="object-contain"
                        />

                        <span className="font-semibold text-lg md:text-xl text-teal-600 dark:text-teal-400 tracking-wide">
                            Wellness Health Care
                        </span>

                    </Link>

                    {/* Desktop Menu */}

                    <nav className="hidden md:flex items-center space-x-8">

                        {NAVIGATION.map((item) => (

                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "group relative text-sm font-medium transition-colors duration-300",
                                    isActive(item.href)
                                        ? "text-teal-600 dark:text-teal-400"
                                        : "text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400"
                                )}
                            >

                                {item.name}

                                <span
                                    className={cn(
                                        "absolute left-0 -bottom-2 h-[2px] bg-teal-600 transition-all duration-300",
                                        isActive(item.href)
                                            ? "w-full"
                                            : "w-0 group-hover:w-full"
                                    )}
                                ></span>

                            </Link>

                        ))}

                        {/* CTA */}

                        <Button
                            asChild
                            className="ml-4 rounded-full px-6 py-2 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white shadow-none transition-transform hover:scale-105"
                        >

                            <Link href="/contact">
                                Request Services
                            </Link>

                        </Button>

                    </nav>

                    {/* Right Controls */}

                    <div className="flex items-center space-x-3">

                        {/* Theme Toggle */}

                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={toggleTheme}
                            className="h-9 w-9 rounded-full"
                        >

                            {theme === "light"
                                ? <Moon className="h-4 w-4" />
                                : <Sun className="h-4 w-4" />}

                        </Button>

                        {/* Mobile Menu */}

                        <Button
                            variant="ghost"
                            size="icon"
                            className="md:hidden h-9 w-9"
                            onClick={() => setIsOpen(!isOpen)}
                        >

                            {isOpen
                                ? <X className="h-5 w-5" />
                                : <Menu className="h-5 w-5" />}

                        </Button>

                    </div>

                </div>

                {/* ===================== Mobile Menu ===================== */}

                <div
                    className={cn(
                        "md:hidden overflow-hidden transition-all duration-300",
                        isOpen ? "max-h-screen pb-6" : "max-h-0"
                    )}
                >

                    <div className="pt-4 space-y-2">

                        {NAVIGATION.map((item) => (

                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "block px-4 py-3 rounded-lg text-base font-medium transition",
                                    isActive(item.href)
                                        ? "bg-teal-50 text-teal-600 dark:bg-teal-900 dark:text-teal-400"
                                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                                )}
                                onClick={() => setIsOpen(false)}
                            >

                                {item.name}

                            </Link>

                        ))}

                        <Button
                            asChild
                            className="w-full mt-3 rounded-full bg-gradient-to-r from-teal-600 to-emerald-600 text-white"
                        >

                            <Link href="/contact">
                                Request Services
                            </Link>

                        </Button>

                    </div>

                </div>

            </div>

        </header>

    )
}
