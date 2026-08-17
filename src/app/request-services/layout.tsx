import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Request PASA Services",
  description: "Request person-centered PASA services from Wellness Health Care LLC and start a conversation about support needs in Colorado.",
  alternates: { canonical: "/request-services" },
  openGraph: { title: "Request Colorado PASA Services", description: "Start a supportive conversation with Wellness Health Care LLC.", url: "/request-services" },
}

export default function RequestServicesLayout({ children }: { children: React.ReactNode }) { return children }
