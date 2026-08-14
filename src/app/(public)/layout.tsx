import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";

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
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <div className="flex-1">{children}</div>
      <SiteFooter />
    </div>
  );
}
