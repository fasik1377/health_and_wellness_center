import type { Metadata } from "next"
import { Manrope, Source_Sans_3 } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CONTACT_INFO, SITE_CONFIG } from "@/lib/constants"

const headingFont = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
})

const bodyFont = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
})

export const metadata: Metadata = {
  title: {
    default: "Wellness Health Care LLC | Colorado PASA Services",
    template: "%s | Wellness Health Care LLC",
  },
  description: SITE_CONFIG.description,
  metadataBase: new URL(SITE_CONFIG.url),
  keywords: [
    "Colorado PASA",
    "Program Approved Service Agency",
    "IDD support Colorado",
    "community connector Colorado",
    "personal care Colorado",
    "respite services Colorado",
    "Wellness Health Care LLC",
  ],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.url,
    title: "Wellness Health Care LLC | Colorado PASA Services",
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: "Wellness Health Care LLC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wellness Health Care LLC | Colorado PASA Services",
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  name: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
  url: SITE_CONFIG.url,
  logo: `${SITE_CONFIG.url}/images/logo.png`,
  image: `${SITE_CONFIG.url}/og-image.jpg`,
  telephone: CONTACT_INFO.phone,
  email: CONTACT_INFO.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${CONTACT_INFO.addressLine1} ${CONTACT_INFO.addressLine2}`,
    addressLocality: "Aurora",
    addressRegion: "CO",
    postalCode: "80011",
    addressCountry: "US",
  },
  openingHours: ["Mo-Fr 09:00-18:00"],
  sameAs: [
    SITE_CONFIG.links.facebook,
    SITE_CONFIG.links.instagram,
    SITE_CONFIG.links.linkedin,
    SITE_CONFIG.links.tiktok,
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${headingFont.variable} ${bodyFont.variable} bg-[var(--canvas)] font-sans text-slate-900 antialiased`}
      >
        <ThemeProvider defaultTheme="light" storageKey="wellness-theme">
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
