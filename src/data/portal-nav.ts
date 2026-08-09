/**
 * Developer Portal navigation tree.
 *
 * Faithful to the user's tree:
 *
 *   developers.musicosy.com/
 *   ├── developers/   (portal tools — API, Apps, Keys, SDKs, Webhooks, …)
 *   ├── embed/        (clip + player embeds)
 *   └── api/          (REST API reference — v1/publish/*)
 *
 * In the single-domain sandbox the portal root maps to `/developers`, so the
 * three top-level groups resolve to:
 *   - /developers/developers/*
 *   - /developers/embed/*
 *   - /developers/api/*
 *
 * The `/developers/developers` double-naming mirrors the production URL
 * `developers.musicosy.com/developers/…` and keeps every path unique.
 */

export type PortalNode = {
  label: string;
  /** Path segment, e.g. "api" */
  slug: string;
  /** Full path, e.g. "/developers/developers/api" */
  path: string;
  /** Short description shown as the page subtitle / sidebar tooltip */
  description: string;
  /** lucide icon key — mapped to a component in portal-sidebar.tsx */
  icon: string;
  children?: PortalNode[];
};

const PORTAL_ROOT = "/developers";

/** Build child nodes from a compact tuple syntax: [label, slug, description, icon, children?] */
function build(
  base: string,
  items: Array<
    | [string, string, string, string]
    | [string, string, string, string, Array<[string, string, string, string] | [string, string, string, string, any[]]>]
  >,
): PortalNode[] {
  return items.map((item) => {
    const [label, slug, description, icon, kids] = item as [
      string,
      string,
      string,
      string,
      any[] | undefined,
    ];
    const path = `${base}/${slug}`;
    const node: PortalNode = { label, slug, path, description, icon };
    if (kids) {
      node.children = build(path, kids);
    }
    return node;
  });
}

/* ── Group 1: Developers (portal tools) ─────────────────────────────── */

const developersGroup: PortalNode = {
  label: "Developers",
  slug: "developers",
  path: `${PORTAL_ROOT}/developers`,
  description: "Portal tools — APIs, keys, SDKs, webhooks and the MCP server.",
  icon: "Code2",
  children: build(`${PORTAL_ROOT}/developers`, [
    ["API", "api", "Public REST & GraphQL APIs", "Code2", [
      ["Business", "business", "API for Business", "Briefcase"],
    ]],
    ["App Center", "apps", "App Center", "LayoutGrid"],
    ["Connectors", "connectors", "Third-Party Connector Directory", "Plug"],
    ["Console", "console", "Internal API Testing Console", "SquareTerminal"],
    ["Docs", "docs", "Developer Portal & Docs", "BookOpen"],
    ["Ecosystem", "ecosystem", "Developer Ecosystem Engine", "Network"],
    ["Keys", "keys", "API Key & Credential Manager", "KeyRound"],
    ["MCP", "mcp", "Agentic Hub and MCP Server", "Bot"],
    ["Partners", "partners", "Partner Enablement Center", "Handshake"],
    ["Sandbox", "sandbox", "Sandbox Testing Environment", "FlaskConical"],
    ["SDKs", "sdks", "Official Developer SDKs", "Package", [
      ["Events", "events", "App Events SDK", "Radio"],
      ["Playback", "playback", "Streaming Playback SDKs", "Play"],
    ]],
    ["Tools", "tools", "Developer Utility Tools", "Wrench"],
    ["Usage", "usage", "Rate Limit & Usage Dashboard", "Gauge"],
    ["Webhooks", "webhooks", "Real-Time Webhooks Manager", "Webhook"],
  ]),
};

/* ── Group 2: Embed ─────────────────────────────────────────────────── */

const embedGroup: PortalNode = {
  label: "Embed",
  slug: "embed",
  path: `${PORTAL_ROOT}/embed`,
  description: "Embeddable players, clips and share overlays.",
  icon: "Code",
  children: build(`${PORTAL_ROOT}/embed`, [
    ["Clip", "clip", "Clip Snippet & Social Share Overlay", "Scissors"],
    ["Player", "player", "Custom Embeddable Podcast Player", "PlayCircle", [
      ["Interactive Chapter & Transcript", "chapters", "Interactive Chapter & Transcript Viewer", "Captions"],
      ["Clip", "clip", "Clip Snippet & Social Share Overlay", "Scissors"],
      ["Settings", "settings", "Playback Rate & Speed Controls", "SlidersHorizontal"],
    ]],
  ]),
};

/* ── Group 3: API (REST reference) ──────────────────────────────────── */

const apiGroup: PortalNode = {
  label: "API",
  slug: "api",
  path: `${PORTAL_ROOT}/api`,
  description: "REST API reference — publish audio, podcast, video and more.",
  icon: "Terminal",
  children: [
    {
      label: "v1",
      slug: "v1",
      path: `${PORTAL_ROOT}/api/v1`,
      description: "Version 1 of the Musicosy REST API.",
      icon: "GitBranch",
      children: [
        {
          label: "Publish",
          slug: "publish",
          path: `${PORTAL_ROOT}/api/v1/publish`,
          description: "Publish endpoints — upload and release audio, podcast and video.",
          icon: "Upload",
          children: build(`${PORTAL_ROOT}/api/v1/publish`, [
            ["Audio", "audio", "Audio Publish API", "Music"],
            ["Podcast", "podcast", "Podcast Publish API", "Podcast"],
            ["Presigned URL", "presigned-url", "Presigned Upload Generator API", "Link2"],
            ["Video", "video", "Video Publish API", "Video"],
          ]),
        },
      ],
    },
  ],
};

/* ── Exports ───────────────────────────────────────────────────────── */

export const portalGroups: PortalNode[] = [developersGroup, embedGroup, apiGroup];

/** Flattened list of every node (groups + all descendants) for quick lookup. */
export const portalAllNodes: PortalNode[] = (() => {
  const out: PortalNode[] = [];
  const walk = (nodes: PortalNode[]) => {
    for (const n of nodes) {
      out.push(n);
      if (n.children) walk(n.children);
    }
  };
  walk(portalGroups);
  return out;
})();

export function findPortalNode(path: string): PortalNode | undefined {
  return portalAllNodes.find((n) => n.path === path);
}

export function findPortalTrail(path: string): PortalNode[] {
  const trail: PortalNode[] = [];
  const walk = (nodes: PortalNode[]): boolean => {
    for (const n of nodes) {
      trail.push(n);
      if (n.path === path) return true;
      if (n.children && walk(n.children)) return true;
      trail.pop();
    }
    return false;
  };
  walk(portalGroups);
  return trail;
}
