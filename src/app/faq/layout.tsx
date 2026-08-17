import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Colorado PASA Frequently Asked Questions",
  description: "Find answers about Colorado PASA services, eligibility, referrals, service planning, and working with Wellness Health Care LLC.",
  alternates: { canonical: "/faq" },
  openGraph: { title: "Colorado PASA FAQs", description: "Answers to common questions about PASA support and getting started.", url: "/faq" },
}

export default function FaqLayout({ children }: { children: React.ReactNode }) { return children }
