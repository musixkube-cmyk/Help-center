import { Questrial, DM_Sans } from "next/font/google";

const questrial = Questrial({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

/**
 * Marketing route group layout — landing page, signin, dashboard, advertise.
 * Uses Questrial + DM Sans fonts (different from the Help Center's Bebas Neue + Barlow).
 * Does NOT include the site header/footer chrome — the landing page renders
 * its own header/footer inline. Sub-pages (signin, dashboard) can opt in to
 * chrome by rendering <SiteHeader/> and <SiteFooter/> directly.
 */
export default function MarketingLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={`${questrial.variable} ${dmSans.variable} antialiased`}>
      {children}
    </div>
  );
}
