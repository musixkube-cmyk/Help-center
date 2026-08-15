import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";

const nextConfig: NextConfig = {
  output: "standalone",
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  // Allow the sandbox preview panel host to reach the dev server.
  // Without this, Next.js logs a warning on every cross-origin request
  // from the preview iframe and may block HMR/websocket connections.
  allowedDevOrigins: [
    "preview-chat-a1129700-5e05-4fd4-8222-e6fa75c72a87.space-z.ai",
  ],
  // Turbopack does NOT read tsconfig `paths` for runtime module resolution
  // (only for type-checking). So `@payload-config` (a tsconfig path alias)
  // needs an explicit Turbopack resolveAlias entry, otherwise it resolves
  // to an empty object at runtime. This is the cause of "Cannot destructure
  // property 'config' of 'undefined'" errors in the Payload admin UI.
  // NOTE: Turbopack rejects absolute paths ("server relative imports not
  // implemented yet"). Use a path RELATIVE to the project root.
  turbopack: {
    resolveAlias: {
      "@payload-config": "./src/payload.config.ts",
    },
  },
  // Payload 3.88 + Next.js 16.2+ requires `experimental.turbopackServerFastRefresh: false`
  // to be set, or the admin UI's HMR breaks. withPayload sets this automatically
  // when it detects a supported Next.js version. We don't set it here to avoid
  // an "Unrecognized key" warning — withPayload handles it.
  // Force browsers to always revalidate /favicon.ico (browsers cache favicons
  // extremely aggressively and won't re-fetch even on hard refresh). The
  // file-convention icons at src/app/icon.png already use cache-busted hashed
  // URLs, but /favicon.ico is still requested directly by the browser tab and
  // needs explicit no-cache headers to avoid showing a stale icon.
  async headers() {
    return [
      {
        source: "/favicon.ico",
        headers: [
          { key: "Cache-Control", value: "no-cache, no-store, must-revalidate" },
        ],
      },
      {
        source: "/favicon.png",
        headers: [
          { key: "Cache-Control", value: "no-cache, no-store, must-revalidate" },
        ],
      },
    ];
  },
};

// `withPayload` wires up the @payload-config alias, Payload's SWC transforms
// for server-only code, and the necessary Next.js webpack/turbopack rules
// for the in-process Payload instance mounted at /cms + /api/payload.
export default withPayload(nextConfig);
