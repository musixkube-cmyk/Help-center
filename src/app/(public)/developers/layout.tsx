import { Terminal, ArrowLeft } from "lucide-react";
import { portalGroups } from "@/data/portal-nav";
import { PortalSidebar } from "@/components/portal/portal-sidebar";
import { NavLink } from "@/components/site/nav-link";

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full bg-white">
      {/* Portal sub-header */}
      <div className="border-b border-border bg-ink text-ink-foreground">
        <div className="flex items-center justify-between px-6 py-2.5 lg:px-10">
          <div className="flex items-center gap-3">
            <Terminal className="h-5 w-5 text-accent" strokeWidth={1.6} />
            <span className="font-display text-lg tracking-[0.2em]">
              DEVELOPER PLATFORM
            </span>
            <span className="hidden text-xs uppercase tracking-widest text-ink-foreground/40 sm:inline">
              developers.musicosy.com
            </span>
          </div>
          <NavLink
            href="/"
            className="flex items-center gap-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-ink-foreground/60 transition-colors hover:text-accent"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Musicosy
          </NavLink>
        </div>
      </div>

      {/* Sidebar + content */}
      <div className="flex">
        <PortalSidebar groups={portalGroups} />
        <div className="min-w-0 flex-1">{children}</div>
      </div>
    </div>
  );
}
