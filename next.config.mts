import type { NextConfig } from "next";

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

export default nextConfig;
