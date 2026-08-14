/**
 * Create the first admin user directly via Payload's Local API.
 *
 * This bypasses the /cms/create-first-user web UI which crashes on
 * Next.js 16 + Turbopack due to a Payload 3.88 incompatibility
 * (specifically: `Cannot destructure property 'config' of 'undefined'`
 * in CreateFirstUserView). The Local API path doesn't go through the
 * Next.js route handler, so it works.
 *
 * Usage: bun run scripts/create-first-user.ts
 *
 * After running, /cms/login should accept these credentials:
 *   email: dev@musicosy.local
 *   password: DevOnly123!
 */

import { getPayload } from "payload";
import config from "../src/payload.config";

async function main() {
  const payload = await getPayload({ config });

  const email = "dev@musicosy.local";
  const password = "DevOnly123!";

  // Check if user already exists
  const existing = await payload.db.findOne({
    collection: "payload-users",
    where: { email: { equals: email } },
  });

  if (existing) {
    console.log(`User already exists: ${email} (id=${existing.id})`);
    console.log("To recreate, drop the row first:");
    console.log(
      `  DELETE FROM payload_users WHERE email = '${email}';`,
    );
    process.exit(0);
  }

  // Create the user — Payload's Local API handles password hashing via bcrypt
  const user = await payload.create({
    collection: "payload-users",
    data: {
      email,
      password,
      roles: ["admin"],
    },
  });

  console.log("✅ Created first admin user:");
  console.log(`   id:       ${user.id}`);
  console.log(`   email:    ${user.email}`);
  console.log(`   roles:    ${user.roles?.join(", ")}`);
  console.log("");
  console.log("Login at: http://localhost:3000/cms/login");
  console.log(`  email:    ${email}`);
  console.log(`  password: ${password}`);
  console.log("");
  console.log("⚠️  Dev-only. Delete this user before production deployment.");

  process.exit(0);
}

main().catch((err) => {
  console.error("Failed:", err);
  process.exit(1);
});
