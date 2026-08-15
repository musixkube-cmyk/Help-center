import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

/**
 * Ads route group layout — the entire Musicosy Ad Center.
 * Each ad page renders its own <TopBar/> chrome from @/components/ads/top-bar.
 * Uses landing-home's globals.css (dark social app surface + DM Sans).
 */
export default function AdsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div
      className={`${dmSans.variable} antialiased bg-background text-foreground`}
    >
      {children}
    </div>
  );
}
