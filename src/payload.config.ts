<<<<<<< HEAD
/**
 * Payload CMS configuration.
 *
 * - Admin UI mounts at /cms (NOT /admin).
 * - REST/GraphQL API mounts at /api/payload.
 * - DB is Supabase Postgres via the session-mode pooler (IPv4, port 5432) in production,
 *   or SQLite when local.
 */

import { buildConfig } from "payload";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { sqliteAdapter } from "@payloadcms/db-sqlite";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { collections } from "./payload/collections/index.ts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rawDatabaseURL =
  process.env.PAYLOAD_DATABASE_URL ??
  process.env.SUPABASE_DB_POOLER_SESSION_URL ??
  process.env.DATABASE_URL ??
  "";

const isSQLite = rawDatabaseURL.startsWith("file:") || (!rawDatabaseURL.startsWith("postgres://") && !rawDatabaseURL.startsWith("postgresql://"));

export default buildConfig({
  admin: {
    user: "payload-users",
    autoLogin: {
      email: "dev@musicosy.local",
      password: "dev-only-not-for-prod",
      enabled: process.env.NODE_ENV === "development",
    },
    components: {},
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
  serverURL: process.env.PAYLOAD_PUBLIC_URL ?? "http://localhost:3000",
  collections,
  db: isSQLite
    ? sqliteAdapter({
        client: {
          url: "file:./payload.db",
        },
        push: false,
      })
    : postgresAdapter({
        pool: {
          connectionString: rawDatabaseURL,
          max: 5,
          idleTimeoutMillis: 30000,
        },
        push: false,
        migrationsDir: path.resolve(__dirname, "migrations"),
      }),
  graphQL: {
    disable: true,
  },
  cors: ["*"],
  csrf: [process.env.PAYLOAD_PUBLIC_URL ?? "http://localhost:3000"],
});
=======
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: 'users',
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    {
      slug: 'users',
      auth: true,
      fields: [],
    },
    {
      slug: 'media',
      upload: true,
      fields: [
        {
          name: 'alt',
          type: 'text',
        },
      ],
    },
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || 'fallback-secret-for-dev-only-change-in-prod',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URI || 'file:./payload.db',
    },
  }),
})
>>>>>>> origin/jules-16513300667624907369-fa118e55
