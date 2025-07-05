import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Providers } from "./providers"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "HalalNearMe - Find Verified Halal Food Worldwide",
  description:
    "Discover and book verified halal restaurants, food shops, and hotels near you. Order authentic halal food with secure payments.",
  keywords: "halal food, halal restaurants, halal booking, muslim food, halal near me",
  authors: [{ name: "HalalNearMe Team" }],
  openGraph: {
    title: "HalalNearMe - Find Verified Halal Food Worldwide",
    description: "Discover and book verified halal restaurants, food shops, and hotels near you.",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  )
}
