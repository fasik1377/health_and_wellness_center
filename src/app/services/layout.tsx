import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "PASA Services in Colorado",
  description: "Explore community connector, personal care, homemaker, respite, health coordination, independent living, and supervision services in Colorado.",
  alternates: { canonical: "/services" },
  openGraph: { title: "Colorado PASA Services", description: "Person-centered services supporting independence, wellness, and community participation.", url: "/services" },
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children
}
