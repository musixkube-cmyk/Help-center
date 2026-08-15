import { Toaster } from "@/components/ui/toaster";

/**
 * ROOT LAYOUT — intentionally minimal.
 *
 * No fonts, no globals.css, no metadata. Each route group owns its own
 * design system:
 *   - `(public)/layout.tsx`    → Bebas Neue + Barlow + Help Center globals.css
 *   - `(marketing)/layout.tsx` → Questrial + DM Sans + landing globals.css
 *   - `(ads)/layout.tsx`       → DM Sans + landing globals.css (same dark surface)
 *   - `(payload)/layout.tsx`   → Payload admin (handled separately)
 *
 * The only thing the root provides is <html><body> and the Toaster (which
 * needs to mount once at the top so toast notifications work everywhere).
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
