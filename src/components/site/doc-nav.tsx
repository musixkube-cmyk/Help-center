import { ArrowLeft, ArrowRight } from "lucide-react";
import type { NavNode } from "@/data/nav";
import { NavLink } from "@/components/site/nav-link";

/**
 * Back / Next navigation — rendered at the bottom of every center page.
 * Prev/next are derived from the root section's sidebar order (depth-first),
 * so readers can page through the help center without scrolling back to the top.
 */
export function DocNav({
  prev,
  next,
}: {
  prev?: NavNode;
  next?: NavNode;
}) {
  if (!prev && !next) return null;

  return (
    <nav
      aria-label="Document navigation"
      className="mt-14 grid gap-4 border-t border-border pt-8 sm:grid-cols-2"
    >
      {prev ? (
        <NavLink
          href={prev.path}
          className="group flex flex-col items-start gap-1.5 border border-border p-5 transition-colors hover:bg-secondary"
        >
          <span className="flex items-center gap-2 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground group-hover:text-accent">
            <ArrowLeft className="h-3.5 w-3.5" />
            Back
          </span>
          <span className="font-display text-lg leading-tight tracking-wide text-foreground group-hover:text-accent">
            {prev.label}
          </span>
        </NavLink>
      ) : (
        <div aria-hidden className="hidden sm:block" />
      )}
      {next ? (
        <NavLink
          href={next.path}
          className="group flex flex-col items-end gap-1.5 border border-border p-5 text-right transition-colors hover:bg-secondary sm:items-end"
        >
          <span className="flex items-center gap-2 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground group-hover:text-accent">
            Next
            <ArrowRight className="h-3.5 w-3.5" />
          </span>
          <span className="font-display text-lg leading-tight tracking-wide text-foreground group-hover:text-accent">
            {next.label}
          </span>
        </NavLink>
      ) : (
        <div aria-hidden className="hidden sm:block" />
      )}
    </nav>
  );
}
