/**
 * Users — Payload admin authentication collection.
 *
 * Single collection for all admin users. Access control is role-based via
 * the `roles` field. Roles are evaluated by Payload's access functions on
 * each collection — see the access control plan in `/docs/payload-acl.md`
 * (forthcoming).
 *
 * For now (initial install), we use a wide-open access policy so the
 * migration can be verified end-to-end. Lock down before production.
 */

import type { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
  slug: "payload-users",
  auth: true,
  admin: {
    group: "System",
    useAsTitle: "email",
    defaultColumns: ["email", "roles", "updatedAt"],
  },
  access: {
    read: ({ req: { user } }) => {
      // Users can read their own record; admins can read all.
      if (!user) return false;
      if (user.roles?.includes("admin")) return true;
      return { id: { equals: user.id } };
    },
  },
  fields: [
    {
      name: "roles",
      type: "select",
      hasMany: true,
      label: "Roles",
      options: [
        { label: "Admin (full access)", value: "admin" },
        { label: "Editor (Help + Support)", value: "editor" },
        { label: "Trust reviewer", value: "trust-reviewer" },
        { label: "Legal reviewer", value: "legal-reviewer" },
        { label: "Migrator (transient)", value: "migrator" },
      ],
      defaultValue: ["editor"],
      admin: { position: "sidebar" },
    },
  ],
};
