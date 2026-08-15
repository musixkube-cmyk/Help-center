import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Barlow } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";

const bebasNeue = Bebas_Neue({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const barlow = Barlow({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Musicosy Help Center",
  description:
    "Musicosy Help Center — support, safety, rules, developer and business resources.",
  authors: [{ name: "Musicosy" }],
  openGraph: {
    title: "Musicosy Help Center",
    description:
      "Support, safety, rules, developer and business resources — all in one place.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

/**
 * Public route group layout — wraps every public-facing route with the
 * site header and footer. This is intentionally separate from the root
 * layout so that other route groups (like `(payload)` for the CMS admin)
 * can render without the public chrome.
 *
 * Sticky-footer pattern: header + main flex-1 + footer with `mt-auto`
 * keeps the footer pinned to the bottom of the viewport on short pages
 * and pushes down naturally on long pages.
 */
export default function PublicLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div
      className={`${bebasNeue.variable} ${barlow.variable} antialiased flex min-h-screen flex-col`}
    >
      <SiteHeader />
      <div className="flex-1">{children}</div>
      <SiteFooter />
    </div>
  );
}
