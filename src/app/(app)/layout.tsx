import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Barlow } from "next/font/google";
import "../globals.css";
import { Toaster } from "@/components/ui/toaster";
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
  description: "Musicosy Help Center — support, safety, rules, developer and business resources.",
  authors: [{ name: "Musicosy" }],
  // Icons are provided via the Next.js file convention:
  //   src/app/icon.png       → <link rel="icon" href="/icon?<hash>"> (cache-busted)
  //   src/app/apple-icon.png → <link rel="apple-touch-icon" href="/apple-icon?<hash>">
  // public/favicon.ico is kept as the fallback for browsers that request
  // /favicon.ico directly (the file convention supersedes the metadata below).
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
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <div className="flex-1">{children}</div>
          <SiteFooter />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
