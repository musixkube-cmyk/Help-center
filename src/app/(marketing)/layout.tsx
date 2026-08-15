import type { Metadata } from "next";
import { Questrial, DM_Sans } from "next/font/google";
import "./globals.css";

const questrial = Questrial({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400"],
});

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Musicosy — Stream. Earn. Publish.",
  description:
    "Musicosy is the social platform for music: stream what you love, earn from every play, and publish straight to labels, sync agents and distributors.",
  keywords: [
    "Musicosy",
    "music platform",
    "stream music",
    "earn from music",
    "publish music",
    "indie artists",
    "labels",
    "sync agents",
  ],
  authors: [{ name: "Musicosy" }],
  openGraph: {
    title: "Musicosy — Stream. Earn. Publish.",
    description:
      "Stream, earn and publish on the social platform built for creators, indie artists, labels and advertisers.",
    url: "https://musicosy.com",
    siteName: "Musicosy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Musicosy — Stream. Earn. Publish.",
    description:
      "Stream, earn and publish on the social platform built for creators, indie artists, labels and advertisers.",
  },
};

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${questrial.variable} ${dmSans.variable} antialiased bg-background text-foreground`}
    >
      {children}
    </div>
  );
}
