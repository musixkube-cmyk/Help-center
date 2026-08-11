/**
 * generate-content-scaffold.ts
 *
 * Walks every nav tree (megaMenu, helpCenterSections, platformRoutes,
 * footerNav, portalGroups) and produces:
 *
 *   content/MANIFEST.md   — human-readable tree + flat index + footer map
 *   content/ (recursive)  — one stub .md file per route, with frontmatter
 *
 * File convention:
 *   - Section page (has children) → content<path>/index.md
 *   - Leaf document              → content<path>.md
 *   - Homepage `/`               → content/index.md
 *
 * Run:  bun run scripts/generate-content-scaffold.ts
 */
import { writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import {
  megaMenu,
  footerNav,
  helpCenterSections,
  platformRoutes,
  type NavNode,
} from "../src/data/nav";
import { portalGroups, type PortalNode } from "../src/data/portal-nav";

const ROOT = process.cwd();
const CONTENT_DIR = join(ROOT, "content");

/* ── Unified node shape (merges NavNode + PortalNode) ──────────────── */
type U = {
  path: string;
  label: string;
  description: string;
  children: U[];
};

function fromNav(n: NavNode): U {
  return {
    path: n.path,
    label: n.label,
    description: n.blurb ?? "",
    children: (n.children ?? []).map(fromNav),
  };
}
function fromPortal(n: PortalNode): U {
  return {
    path: n.path,
    label: n.label,
    description: n.description ?? "",
    children: (n.children ?? []).map(fromPortal),
  };
}

/* ── Sources (preserves grouping for the manifest) ─────────────────── */
const sources: { title: string; roots: U[] }[] = [
  { title: "Help Center Documents (mega menu)", roots: megaMenu.map(fromNav) },
  { title: "Help Center Policy Sections (sidebar)", roots: helpCenterSections.map(fromNav) },
  { title: "Platform Personas", roots: platformRoutes.map(fromNav) },
  { title: "Developer Portal", roots: portalGroups.map(fromPortal) },
];

/* ── Dedup map with child-merging ──────────────────────────────────── */
const all = new Map<string, U>();

function walk(n: U) {
  const existing = all.get(n.path);
  if (existing) {
    for (const c of n.children) {
      if (!existing.children.find((x) => x.path === c.path)) {
        existing.children.push(c);
      }
    }
  } else {
    all.set(n.path, { ...n, children: [...n.children] });
  }
  for (const c of n.children) walk(c);
}

for (const s of sources) for (const r of s.roots) walk(r);

// Add homepage
all.set("/", {
  path: "/",
  label: "Musicosy Help Center",
  description: "Support, safety, rules, developer and business resources.",
  children: [],
});

// Add footer-only routes (links that don't appear in any nav tree above)
for (const col of footerNav) {
  if (!all.has(col.path)) {
    all.set(col.path, { path: col.path, label: col.label, description: "", children: [] });
  }
  for (const link of col.children ?? []) {
    if (!all.has(link.path)) {
      all.set(link.path, { path: link.path, label: link.label, description: "", children: [] });
    }
  }
}

/* ── File-path convention ──────────────────────────────────────────── */
function relFile(path: string, hasChildren: boolean): string {
  if (path === "/") return "content/index.md";
  return hasChildren ? `content${path}/index.md` : `content${path}.md`;
}
function absFile(path: string, hasChildren: boolean): string {
  return join(ROOT, relFile(path, hasChildren));
}

/* ── Write stub .md files ──────────────────────────────────────────── */
let created = 0;
let existed = 0;

for (const [, node] of all) {
  const hasChildren = node.children.length > 0;
  const file = absFile(node.path, hasChildren);
  if (existsSync(file)) {
    existed++;
    continue;
  }
  mkdirSync(dirname(file), { recursive: true });

  const esc = (s: string) => s.replace(/"/g, '\\"');
  const fm = [
    "---",
    `title: "${esc(node.label)}"`,
    `path: "${node.path}"`,
    node.description ? `description: "${esc(node.description)}"` : null,
    "---",
    "",
  ]
    .filter((l) => l !== null)
    .join("\n");

  const body: string[] = [];
  body.push(`# ${node.label}`);
  body.push("");
  body.push(node.description ? `> ${node.description}` : "> _Description pending._");
  body.push("");
  body.push("<!--");
  body.push("  Write your content below in Markdown.");
  body.push(`  Route:  ${node.path}`);
  body.push(`  File:   ${relFile(node.path, hasChildren)}`);
  body.push("-->");
  body.push("");
  if (hasChildren) {
    body.push("## In this section");
    body.push("");
    for (const c of node.children) {
      body.push(`- [${c.label}](${c.path})`);
    }
    body.push("");
    body.push("<!-- Optional: write an introduction for this section page. -->");
  } else {
    body.push("<!-- This is a leaf document. Replace this placeholder with your content. -->");
  }
  body.push("");

  writeFileSync(file, fm + body.join("\n"));
  created++;
}

/* ── Generate MANIFEST.md ──────────────────────────────────────────── */
const lines: string[] = [];
lines.push("# Musicosy Content Manifest");
lines.push("");
lines.push("Every route in the site maps to a markdown file in `content/`.");
lines.push("Write your content in the matching file, push to GitHub, and it will");
lines.push("be extracted and rendered onto the corresponding page.");
lines.push("");
lines.push("## Convention");
lines.push("");
lines.push("| Route type | File path |");
lines.push("|---|---|");
lines.push("| Section page (has child routes) | `content<path>/index.md` |");
lines.push("| Leaf document (no children) | `content<path>.md` |");
lines.push("| Homepage `/` | `content/index.md` |");
lines.push("");
lines.push("Each file starts with YAML frontmatter:");
lines.push("");
lines.push("```yaml");
lines.push("---");
lines.push('title: "Account Privacy"');
lines.push('path: "/privacy-and-safety/privacy/account-privacy"');
lines.push('description: "How to control who sees your account."');
lines.push("---");
lines.push("```");
lines.push("");
lines.push("## Full document tree");
lines.push("");

function renderTree(nodes: U[], depth: number) {
  for (const n of nodes) {
    const hasChildren = n.children.length > 0;
    const file = relFile(n.path, hasChildren);
    const indent = "  ".repeat(depth);
    const marker = hasChildren ? "SECTION" : "DOC";
    lines.push(`${indent}- [${marker}] **${n.label}** — \`${n.path}\``);
    lines.push(`${indent}  → \`${file}\``);
    if (hasChildren) renderTree(n.children, depth + 1);
  }
}

for (const s of sources) {
  lines.push(`### ${s.title}`);
  lines.push("");
  renderTree(s.roots, 0);
  lines.push("");
}

// Flat index
lines.push("## Flat index (alphabetical by path)");
lines.push("");
lines.push("| Route | File |");
lines.push("|---|---|");
const sorted = [...all.values()].sort((a, b) => a.path.localeCompare(b.path));
for (const n of sorted) {
  const hasChildren = n.children.length > 0;
  lines.push(`| \`${n.path}\` | \`${relFile(n.path, hasChildren)}\` |`);
}
lines.push("");

// Footer column mapping
lines.push("## Footer column mapping");
lines.push("");
lines.push("The footer has five columns. Each link points to a route documented above.");
lines.push("");
for (const col of footerNav) {
  lines.push(`### ${col.label} (column heading → \`${col.path}\`)`);
  lines.push("");
  for (const link of col.children ?? []) {
    lines.push(`- ${link.label} → \`${link.path}\``);
  }
  lines.push("");
}

writeFileSync(join(CONTENT_DIR, "MANIFEST.md"), lines.join("\n"));

console.log(`Created ${created} stub files (${existed} already existed)`);
console.log(`Total routes: ${all.size}`);
console.log(`Manifest: content/MANIFEST.md`);
