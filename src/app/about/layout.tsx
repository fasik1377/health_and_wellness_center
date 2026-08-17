import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Our Colorado PASA Agency",
  description: "Learn about Wellness Health Care LLC, our person-centered approach, and our commitment to dependable PASA support across Colorado.",
  alternates: { canonical: "/about" },
  openGraph: { title: "About Wellness Health Care LLC", description: "Person-centered Colorado PASA support grounded in dignity, stability, and trust.", url: "/about" },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
