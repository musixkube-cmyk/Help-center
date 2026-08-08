"use client";

import { createElement, useState } from "react";
import {
  Menu,
  X,
  ArrowRight,
  ArrowUpRight,
  FileText,
  FolderKanban,
  Users,
  ScrollText,
  Music,
  ShoppingBag,
  Video,
  Store,
  Globe,
  Share2,
  Megaphone,
  Link2,
  BarChart3,
  Radio,
  Disc3,
  Wallet,
  Ticket,
  Sparkle,
} from "lucide-react";
import { megaMenu, type NavNode } from "@/data/nav";
import { NavLink } from "@/components/site/nav-link";
import { Button } from "@/components/ui/button";

const ICONS = [
  FileText,
  FolderKanban,
  Users,
  ScrollText,
  Music,
  ShoppingBag,
  Video,
  Store,
  Globe,
  Share2,
  Megaphone,
  Link2,
  BarChart3,
  Radio,
  Disc3,
  Wallet,
  Ticket,
  Sparkle,
];

function iconFor(key: string) {
  let h = 0;
  for (let i = 0; i < key.length; i++) h = (h * 31 + key.charCodeAt(i)) >>> 0;
  return ICONS[h % ICONS.length] ?? Music;
}

function MegaItem({ node, group }: { node: NavNode; group: string }) {
  const Icon = iconFor(node.path);
  return (
    <li>
      <NavLink
        href={node.path}
        className="group/item flex items-start gap-3 rounded-sm px-2 py-2 -mx-2 transition-colors hover:bg-secondary"
      >
        <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-sm border border-border bg-card text-muted-foreground transition-colors group-hover/item:border-accent group-hover/item:text-accent">
          {createElement(Icon, { className: "h-4 w-4", strokeWidth: 1.6 })}
        </span>
        <span className="min-w-0">
          <span className="block truncate text-sm font-semibold leading-tight text-foreground">
            {node.label}
          </span>
          <span className="mt-0.5 block truncate text-xs leading-tight text-muted-foreground">
            {group}
          </span>
        </span>
      </NavLink>
    </li>
  );
}

function MegaPanel({ node }: { node: NavNode }) {
  if (!node.children) return null;
  const groups = node.children.slice(0, 3);

  return (
    <div className="invisible absolute left-0 right-0 top-full z-50 translate-y-1 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
      <div className="w-full border-t border-border bg-popover shadow-[0_24px_60px_-30px_oklch(0_0_0/0.55)]">
        <div className="grid grid-cols-1 lg:grid-cols-[19rem_repeat(3,minmax(0,1fr))_20rem]">
          {/* Intro rail */}
          <div className="border-r border-border bg-card px-8 py-9">
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
              {node.label} overview
            </p>
            <h3 className="mt-4 font-display text-3xl leading-[1.05] tracking-wide text-foreground">
              {node.label}
            </h3>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {node.blurb}
            </p>
            <NavLink
              href={node.path}
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
            >
              Explore {node.label} <ArrowRight className="h-4 w-4" />
            </NavLink>
          </div>

          {/* Columns */}
          {groups.map((child) => (
            <div key={child.path} className="border-r border-border px-7 py-9">
              <NavLink
                href={child.path}
                className="group/head flex items-center justify-between gap-3 border-b border-border pb-4 text-sm font-semibold text-foreground"
              >
                <span className="truncate">{child.label}</span>
                <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover/head:text-accent" />
              </NavLink>
              <ul className="mt-4 space-y-1">
                {(child.children ?? [child]).slice(0, 6).map((leaf) => (
                  <MegaItem key={leaf.path} node={leaf} group={child.label} />
                ))}
              </ul>
            </div>
          ))}

          {/* Promo panel */}
          <div className="relative overflow-hidden bg-ink px-8 py-9 text-ink-foreground">
            <div className="pointer-events-none absolute -bottom-16 -right-10 h-56 w-56 rounded-full bg-accent/25 blur-3xl" />
            <div className="relative">
              <p className="flex items-center gap-2 text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-accent">
                <Disc3 className="h-4 w-4" /> Musicosy AI
              </p>
              <h4 className="mt-4 font-display text-2xl leading-[1.1] tracking-wide">
                One spine across your whole music business.
              </h4>
              <p className="mt-3 text-sm leading-relaxed text-ink-foreground/70">
                Releases, royalties, contracts and analytics resolved together — not
                stitched across eight disconnected tools.
              </p>
              <span className="mt-6 inline-block border border-accent/50 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-accent">
                Business intelligence layer
              </span>
              <NavLink
                href="/discover"
                className="mt-6 flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
              >
                Meet the platform <ArrowUpRight className="h-4 w-4" />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


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
        <div className="max-h-[70vh] overflow-y-auto border-t border-border bg-popover px-6 py-6 lg:hidden">
          {megaMenu.map((node) => (
            <div key={node.path} className="mb-7">
              <NavLink
                href={node.path}
                onClick={() => setOpen(false)}
                className="block text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground"
              >
                {node.label}
              </NavLink>
              <ul className="mt-3 grid grid-cols-2 gap-2 border-l border-border pl-3">
                {(node.children ?? []).map((child) => (
                  <li key={child.path}>
                    <NavLink
                      href={child.path}
                      onClick={() => setOpen(false)}
                      className="block truncate text-sm text-foreground"
                    >
                      {child.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
