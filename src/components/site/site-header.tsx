"use client";

import { useState } from "react";
import {
  Menu,
  X,
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
} from "lucide-react";
import { megaMenu, type NavNode } from "@/data/nav";
import { NavLink } from "@/components/site/nav-link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/* Desktop mega panel — shows EVERY branch + leaf, not just 3         */
/* ------------------------------------------------------------------ */

function BranchColumn({ branch }: { branch: NavNode }) {
  const leaves = branch.children ?? [];
  return (
    <div className="min-w-0">
      <NavLink
        href={branch.path}
        className="group/head flex items-center justify-between gap-2 border-b border-border pb-2 text-sm font-semibold text-foreground transition-colors hover:text-accent"
      >
        <span className="truncate">{branch.label}</span>
        <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground transition-colors group-hover/head:text-accent" />
      </NavLink>
      {leaves.length > 0 && (
        <ul className="mt-2 space-y-1">
          {leaves.map((leaf) => (
            <li key={leaf.path}>
              <NavLink
                href={leaf.path}
                className="block text-xs leading-relaxed text-muted-foreground transition-colors hover:text-accent"
              >
                {leaf.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function MegaPanel({ node }: { node: NavNode }) {
  if (!node.children) return null;

  return (
    <div className="invisible absolute left-0 right-0 top-full z-50 translate-y-1 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
      <div className="w-full border-t border-border bg-popover shadow-[0_24px_60px_-30px_oklch(0_0_0/0.55)]">
        {/* Intro bar */}
        <div className="flex items-center justify-between gap-6 border-b border-border bg-card px-8 py-4 lg:px-10">
          <div className="min-w-0">
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
              {node.label}
            </p>
            <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
              {node.blurb}
            </p>
          </div>
          <NavLink
            href={node.path}
            className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
          >
            Explore {node.label} <ArrowRight className="h-4 w-4" />
          </NavLink>
        </div>

        {/* ALL branches — scrollable so nothing is cut off */}
        <div className="max-h-[72vh] overflow-y-auto px-8 py-6 lg:px-10">
          <div className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {node.children.map((child) => (
              <BranchColumn key={child.path} branch={child} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Mobile menu — recursive expandable tree (parent → child → leaf)    */
/* ------------------------------------------------------------------ */

function MobileNavItem({
  node,
  onNavigate,
  depth = 0,
}: {
  node: NavNode;
  onNavigate: () => void;
  depth?: number;
}) {
  const [open, setOpen] = useState(false);
  const hasChildren = !!node.children?.length;

  return (
    <div className={depth === 0 ? "mb-5" : depth === 1 ? "mb-2" : ""}>
      <div className="flex items-center gap-1">
        <NavLink
          href={node.path}
          onClick={onNavigate}
          className={cn(
            "min-w-0 flex-1 truncate",
            depth === 0
              ? "text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground"
              : depth === 1
                ? "text-sm font-semibold text-foreground"
                : "text-xs leading-relaxed text-muted-foreground",
          )}
        >
          {node.label}
        </NavLink>
        {hasChildren && (
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setOpen((v) => !v);
            }}
            aria-label={open ? `Collapse ${node.label}` : `Expand ${node.label}`}
            aria-expanded={open}
            className="shrink-0 p-1 text-muted-foreground hover:text-accent"
          >
            <ChevronDown
              className={cn("h-4 w-4 transition-transform", open && "rotate-180")}
            />
          </button>
        )}
      </div>
      {open && hasChildren && (
        <div className="mt-2 ml-3 border-l border-border pl-3">
          {node.children!.map((child) => (
            <MobileNavItem
              key={child.path}
              node={child}
              onNavigate={onNavigate}
              depth={depth + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Header                                                              */
/* ------------------------------------------------------------------ */

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="flex w-full items-center gap-8 px-6 py-3 lg:px-10">
        <NavLink href="/" className="font-display text-3xl leading-none tracking-widest">
          MUSI<span className="text-accent">COSY</span>
        </NavLink>

        <nav className="hidden flex-1 items-center gap-7 lg:flex">
          {megaMenu.map((node) => (
            <div key={node.path} className="group static">
              <NavLink
                href={node.path}
                className="block py-4 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-foreground transition-colors hover:text-accent"
                activeProps={{ className: "text-accent" }}
              >
                {node.label}
              </NavLink>
              <MegaPanel node={node} />
            </div>
          ))}
        </nav>

        <div className="ml-auto hidden items-center gap-2 lg:flex">
          <Button
            variant="ghost"
            size="sm"
            className="rounded-none text-[0.7rem] uppercase tracking-[0.18em]"
            asChild
          >
            <NavLink href="/for-fans/streaming-plans">Plans</NavLink>
          </Button>
          <Button
            size="sm"
            className="rounded-none text-[0.7rem] uppercase tracking-[0.18em]"
            asChild
          >
            <NavLink href="/discover">Start listening</NavLink>
          </Button>
        </div>

        <button
          className="ml-auto lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="max-h-[78vh] overflow-y-auto border-t border-border bg-popover px-6 py-6 lg:hidden">
          {megaMenu.map((node) => (
            <MobileNavItem
              key={node.path}
              node={node}
              onNavigate={() => setOpen(false)}
            />
          ))}
        </div>
      )}
    </header>
  );
}
