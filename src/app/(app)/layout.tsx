import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Barlow } from "next/font/google";
import "../globals.css";
import { Toaster } from "@/components/ui/toaster";

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
  description: "Musicosy Help Center — support, safety, rules, developer and business resources.",
  authors: [{ name: "Musicosy" }],
  openGraph: {
    title: "Musicosy Help Center",
    description: "Support, safety, rules, developer and business resources — all in one place.",
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
 * ROOT LAYOUT — kept intentionally minimal.
 *
 * The site header/footer live in `(public)/layout.tsx` so that other route
 * groups (notably `(payload)` for the CMS admin at /cms) can render without
 * the public chrome. Adding a new chrome-less route group? Just create a
 * sibling `(group-name)/` folder with no SiteHeader/SiteFooter import.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${bebasNeue.variable} ${barlow.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
