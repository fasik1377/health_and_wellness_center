import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import { CONTACT_INFO, NAVIGATION, SERVICES, SITE_CONFIG } from "@/lib/constants"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="brand-shimmer relative overflow-hidden border-t border-white/10 text-stone-100">
      <div className="chrome-grid absolute inset-0 opacity-20" />
      <div className="pointer-events-none absolute -left-8 bottom-0 h-32 w-32 rounded-full bg-teal-300/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-full bg-teal-400/10 blur-3xl" />
      <div className="container relative mx-auto px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.9fr_1fr_1fr]">
          <div className="max-w-md space-y-5">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-teal-200">
                Wellness Health Care LLC
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white">
                Dependable PASA support built around dignity and stability.
              </h2>
            </div>
            <p className="text-base text-stone-100/78">
              We support Colorado individuals and families with responsive,
              person-centered services that strengthen independence, health, and
              community connection.
            </p>
            <div className="flex items-center gap-4">
              <a aria-label="Facebook" className="text-stone-100/60 transition hover:text-white" href={SITE_CONFIG.links.facebook} rel="noreferrer" target="_blank">
                <Facebook className="h-5 w-5" />
              </a>
              <a aria-label="Instagram" className="text-stone-100/60 transition hover:text-white" href={SITE_CONFIG.links.instagram} rel="noreferrer" target="_blank">
                <Instagram className="h-5 w-5" />
              </a>
              <a aria-label="LinkedIn" className="text-stone-100/60 transition hover:text-white" href={SITE_CONFIG.links.linkedin} rel="noreferrer" target="_blank">
                <Linkedin className="h-5 w-5" />
              </a>
              <a aria-label="TikTok" className="text-stone-100/60 transition hover:text-white" href={SITE_CONFIG.links.tiktok} rel="noreferrer" target="_blank">
                <Image src="/images/tiktok.png" alt="TikTok" width={20} height={20} className="object-contain opacity-90 transition hover:opacity-100" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-[0.25em] text-teal-200">
              Navigate
            </h3>
            <div className="mt-5 space-y-3">
              {NAVIGATION.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-stone-100/75 transition hover:text-white"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-[0.25em] text-teal-200">
              Service Focus
            </h3>
            <div className="mt-5 space-y-3">
              {SERVICES.slice(0, 4).map((service) => (
                <p key={service.id} className="text-stone-100/75">
                  {service.title}
                </p>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-[0.25em] text-teal-200">
              Contact
            </h3>
            <div className="mt-5 space-y-4 text-stone-100/75">
              <a className="flex items-start gap-3 transition hover:text-white" href={`tel:${CONTACT_INFO.phone}`}>
                <Phone className="mt-1 h-4 w-4 text-teal-200" />
                <span>{CONTACT_INFO.phone}</span>
              </a>
              <a className="flex items-start gap-3 transition hover:text-white" href={`mailto:${CONTACT_INFO.email}`}>
                <Mail className="mt-1 h-4 w-4 text-teal-200" />
                <span>{CONTACT_INFO.email}</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-4 w-4 text-teal-200" />
                <span>
                  {CONTACT_INFO.addressLine1}
                  <br />
                  {CONTACT_INFO.addressLine2}
                  <br />
                  {CONTACT_INFO.cityStateZip}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-stone-100/55 md:flex-row md:items-center md:justify-between">
          <p>{currentYear} Wellness Health Care LLC. All rights reserved.</p>
          <p>Serving families across Aurora, Denver Metro, and surrounding Colorado communities.</p>
        </div>
      </div>
    </footer>
  )
}
