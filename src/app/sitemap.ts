import type { MetadataRoute } from "next"

import { SITE_CONFIG } from "@/lib/constants"

const routes = [
  { path: "", priority: 1, changeFrequency: "weekly" as const },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/request-services", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/faq", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/testimonials", priority: 0.6, changeFrequency: "monthly" as const },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, ...route }) => ({
    url: `${SITE_CONFIG.url}${path}`,
    ...route,
  }))
}
