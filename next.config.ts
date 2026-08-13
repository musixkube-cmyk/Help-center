import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
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
