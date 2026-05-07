import {
  BriefcaseMedical,
  Compass,
  HeartHandshake,
  Home,
  ShieldCheck,
  Users,
} from "lucide-react"

export const SITE_CONFIG = {
  name: "Wellness Health Care LLC",
  description:
    "Colorado PASA services focused on person-centered support, community inclusion, and dependable care coordination.",
  url: "https://wellnesshealthcareco.com",
  ogImage: "/og-image.jpg",
  links: {
    facebook: "https://www.facebook.com/profile.php?id=61582141343241",
    instagram: "https://www.instagram.com/wellness_colorado",
    linkedin: "https://www.linkedin.com/company/wellness-health-care-llc/",
    tiktok: "http://tiktok.com/@wellnesshealthcare2025",
  },
}

export const NAVIGATION = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
]

export const SERVICES = [
  {
    id: "community-connector",
    title: "Community Connector",
    description:
      "Support for participating in community life, building confidence, and pursuing meaningful goals.",
    icon: Compass,
    href: "/services",
  },
  {
    id: "homemaker-personal-care",
    title: "Personal Care and Homemaker",
    description:
      "Practical daily support that helps individuals remain safe, comfortable, and active at home.",
    icon: Home,
    href: "/services",
  },
  {
    id: "respite",
    title: "Respite Support",
    description:
      "Reliable relief for families and caregivers while maintaining continuity of care and dignity.",
    icon: HeartHandshake,
    href: "/services",
  },
  {
    id: "health-coordination",
    title: "Health and Wellness Support",
    description:
      "Routine health oversight, communication support, and coordination that keeps care plans moving.",
    icon: BriefcaseMedical,
    href: "/services",
  },
  {
    id: "skills-training",
    title: "Independent Living Skills",
    description:
      "Training that strengthens confidence with routines, decision-making, and everyday self-direction.",
    icon: Users,
    href: "/services",
  },
  {
    id: "safety-supervision",
    title: "Safety and Supervision",
    description:
      "Attentive, person-centered supervision that protects health, welfare, and peace of mind.",
    icon: ShieldCheck,
    href: "/services",
  },
]

export const CONTACT_INFO = {
  phone: "+1 720 552 1710",
  email: "wellnesshealthcare2025@gmail.com",
  addressLine1: "14291 E 4th Ave",
  addressLine2: "Suite 7-110",
  cityStateZip: "Aurora, CO 80011",
  hours:
    "Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: By appointment\nSunday: Closed",
}
