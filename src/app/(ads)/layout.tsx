import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

/**
 * Ads route group layout — the entire Musicosy Ad Center.
 * Each ad page renders its own <TopBar/> chrome from @/components/ads/top-bar.
 * No site header/footer here — ad center is its own app shell.
 */
export default function AdsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={`${dmSans.variable} antialiased`}>
      {children}
    </div>
  );
}
