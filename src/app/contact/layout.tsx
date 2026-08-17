import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Our PASA Team",
  description: "Contact Wellness Health Care LLC in Aurora, Colorado to discuss PASA services, referrals, availability, and next steps.",
  alternates: { canonical: "/contact" },
  openGraph: { title: "Contact Wellness Health Care LLC", description: "Talk with our Colorado PASA team about services and next steps.", url: "/contact" },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
