import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Client Testimonials",
  description: "Read experiences shared by individuals and families supported by Wellness Health Care LLC in Colorado.",
  alternates: { canonical: "/testimonials" },
  openGraph: { title: "Wellness Health Care LLC Testimonials", description: "Experiences from the people and families we support.", url: "/testimonials" },
}

export default function TestimonialsLayout({ children }: { children: React.ReactNode }) { return children }
