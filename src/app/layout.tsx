import { Suspense } from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import ThemeRoot from "@/theme/ThemeRoot"
import ThemeInitializer from "@/theme/ThemeInitializer"
import { headers } from "next/headers"

// --------------------
// Fonts
// --------------------
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

// --------------------
// Theme Metadata Config
// --------------------
const THEME_METADATA: Record<
  string,
  { title: string; description: string; color: string; icon: string }
> = {
  acm: {
    title: "ACM Industry | UCSB",
    description:
      "ACM Industry is a student-run organization at UCSB connecting students with real-world companies to build impactful tech projects before graduation.",
    color: "#FECB2E",
    icon: "/club-logos/industry-icon.png",
  },
  gse: {
    title: "Gaucho Software Engineers | UCSB",
    description:
      "GSE unites UCSB builders to collaborate on real-world software projects that make a difference.",
    color: "#0094FF",
    icon: "/club-logos/gse/gse-primary.png",
  },
}

// --------------------
// Dynamic Viewport
// --------------------
export async function generateViewport(): Promise<Viewport> {
  const headersList = await headers()
  const host = headersList.get("host")?.toLowerCase() || ""
  let theme: "acm" | "gse" = "acm"

  // Auto-detect by domain
  if (host.includes("gse")) theme = "gse"

  return {
    themeColor: THEME_METADATA[theme].color,
  }
}

// --------------------
// Dynamic Metadata
// --------------------
export async function generateMetadata({
  searchParams,
}: {
  searchParams: { theme?: string }
}): Promise<Metadata> {
  const headersList = await headers()
  const host = headersList.get("host")?.toLowerCase() || ""
  let theme: "acm" | "gse" = "acm"

  // Priority: query param > domain detection
  if (searchParams?.theme?.toLowerCase() === "gse") theme = "gse"
  else if (host.includes("gse")) theme = "gse"

  const meta = THEME_METADATA[theme]

  return {
    title: meta.title,
    description: meta.description,
    metadataBase: new URL("https://acmindustry.org"), // default fallback domain
    openGraph: {
      title: meta.title,
      description: meta.description,
      images: [`/og-${theme}.png`],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
    icons: {
      icon: meta.icon,
      shortcut: meta.icon,
      apple: meta.icon,
    },
  }
}

// --------------------
// Root Layout
// --------------------
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased theme-acm`}
        suppressHydrationWarning
      >
        <ThemeRoot>
          <Suspense fallback={null}>
            <ThemeInitializer />
          </Suspense>

          <Navbar />
          {children}
          <Footer />
        </ThemeRoot>
      </body>
    </html>
  )
}