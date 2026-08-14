/**
 * Payload CMS configuration.
 *
 * - Admin UI mounts at /cms (NOT /admin).
 * - REST/GraphQL API mounts at /api/payload.
 * - DB is Supabase Postgres via the session-mode pooler (IPv4, port 5432).
 *   Session mode is required because Payload migrations issue DDL — PgBouncer
 *   transaction mode drops prepared statements on DDL.
 *
 * This is the single source of truth for content structure. The renderer
 * (<DocContent />) and catch-all route ([...path]/page.tsx) are unchanged
 * — they continue to consume the legacy `Doc` type until the migration
 * parity check is green, then the data source swaps.
 */

import { buildConfig } from "payload";
import { postgresAdapter } from "@payloadcms/db-postgres";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { collections } from "./payload/collections/index";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Supabase session-mode pooler — required for DDL (migrations).
// Transaction-mode pooler (port 6543 + pgbouncer=true) drops prepared
// statements on DDL, so migrations would fail. Runtime reads can still use
// transaction mode via a separate pool if we need higher concurrency later.
const databaseURL =
  process.env.PAYLOAD_DATABASE_URL ??
  process.env.SUPABASE_DB_POOLER_SESSION_URL ??
  process.env.DATABASE_URL ??
  "";

export default buildConfig({
  admin: {
    user: "payload-users",
    autoLogin: {
      // Dev-only: bypass login locally so you can poke around without setting
      // up auth first. Disabled in production via the env check.
      email: "dev@musicosy.local",
      password: "dev-only-not-for-prod",
      enabled: process.env.NODE_ENV === "development",
    },
    components: {
      // NOTE: leave default admin shell for now — we'll swap the logo/icons later
    },
    livePreview: {
      breakpoints: [
        { label: "Mobile", name: "mobile", width: 375, height: 667 },
        { label: "Desktop", name: "desktop", width: 1440, height: 900 },
      ],
    },
  },
  routes: {
    admin: "/cms",
    api: "/api/payload",
    graphQL: "/api/payload/graphql",
  },
  secret: process.env.PAYLOAD_SECRET ?? "dev-secret-change-me",
  // Match the Next.js server. Payload runs in-process — same origin.
  serverURL: process.env.PAYLOAD_PUBLIC_URL ?? "http://localhost:3000",
  collections,
  // No `editor` field set — Payload defaults to no rich text editor. We use
  // the constrained `blocks` field (the 6 content blocks) instead of Lexical
  // richText, so the lexical editor package is not needed at runtime. This
  // also avoids a Node 24 + tsx top-level-await load error in the Payload CLI.
  db: postgresAdapter({
    pool: {
      connectionString: databaseURL,
      max: 5, // Supabase free tier = 60 conns; keep headroom for Next.js
      idleTimeoutMillis: 30000,
    },
    push: false, // always use migrations, never push schema directly
    // Don't set `schemaName` — Payload + drizzle-orm refuses 'public' as an
    // explicit schema name (it's the default). Leaving it unset uses the
    // default public schema correctly.
    // Production migrations are run via `payload migrate` in CI/CD.
    migrationsDir: path.resolve(__dirname, "payload/migrations"),
  }),
  // Don't enable GraphQL endpoint yet — adds route surface we don't need.
  graphQL: {
    disable: true,
  },
  // CORS: same-origin since /api/payload is on the Next.js app.
  cors: ["*"],
  csrf: [process.env.PAYLOAD_PUBLIC_URL ?? "http://localhost:3000"],
});
