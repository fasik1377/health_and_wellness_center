"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Sun, Moon } from "lucide-react"
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
    <header className="sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur-md dark:bg-gray-900/90 shadow-md transition-all">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo + Site Name */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="images/logo.png"
              alt="Wellness Health Care Logo"
              width={50}
              height={50}
              className="h-16 w-16 object-contain"
              priority
            />
            <span className="font-bold text-lg md:text-xl text-teal-600 dark:text-teal-400 tracking-wide">
              Wellness Health Care LLC
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {NAVIGATION.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "relative text-sm font-medium transition-colors hover:text-teal-600 dark:hover:text-teal-400",
                  isActive(item.href)
                    ? "text-teal-600 dark:text-teal-400 after:w-full"
                    : "text-gray-600 dark:text-gray-300 after:w-0",
                  "after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:bg-teal-600 after:transition-all after:duration-300"
                )}
              >
                {item.name}
              </Link>
            ))}
            {/* CTA Button */}
            <Button
              asChild
              size="sm"
              className="ml-4 bg-teal-600 text-white hover:bg-teal-700 dark:bg-teal-400 dark:text-gray-900 dark:hover:bg-teal-500 transition-transform hover:scale-105"
            >
              <Link href="/contact">Request Services</Link>
            </Button>
          </nav>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="h-9 w-9"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden h-9 w-9"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden transition-all duration-300 overflow-hidden",
            isOpen ? "max-h-screen py-4" : "max-h-0"
          )}
        >
          <div className="px-2 space-y-2">
            {NAVIGATION.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "block px-3 py-2 text-base font-medium rounded-lg transition-colors hover:bg-teal-100 dark:hover:bg-gray-700",
                  isActive(item.href)
                    ? "bg-teal-50 text-teal-600 dark:bg-teal-800 dark:text-teal-400"
                    : "text-gray-700 dark:text-gray-300"
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button
              asChild
              size="sm"
              className="w-full mt-2 bg-teal-600 text-white hover:bg-teal-700 dark:bg-teal-400 dark:text-gray-900 dark:hover:bg-teal-500"
            >
              <Link href="/contact">Request Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
