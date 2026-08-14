/**
 * trust-docs — Privacy & Safety pillar.
 *
 * Stricter review than Help/Support. Requires an explicit approver stamp
 * before publish — drafts cannot be published without the `approvedBy`
 * field set. Used for safety policies, privacy explanations, and trust
 * commitments.
 */

import type { CollectionConfig } from "payload";
import { contentBlocks } from "../blocks/content-blocks";

const baseAccess = {
  read: () => true,
};

export const TrustDocs: CollectionConfig = {
  slug: "trust-docs",
  labels: {
    singular: "Trust & Safety Doc",
    plural: "Trust & Safety Docs",
  },
  access: baseAccess,
  admin: {
    group: "Pillar: Trust",
    useAsTitle: "title",
    defaultColumns: [
      "title",
      "path",
      "approvedBy",
      "approvedAt",
      "updatedAt",
      "_status",
    ],
  },
  versions: {
    drafts: {
      autosave: { interval: 2000 },
    },
    maxPerDoc: 20, // stricter review → keep more history
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "path",
      type: "text",
      required: true,
      unique: true,
      label: "Route path",
      admin: {
        description:
          "Canonical route, e.g. /privacy-and-safety/safety-and-security/account-security.",
        position: "sidebar",
      },
    },
    {
      name: "blurb",
      type: "textarea",
    },
    {
      name: "approvedBy",
      type: "text",
      label: "Approved by",
      admin: {
        position: "sidebar",
        description:
          "Name/ID of the reviewer who approved this doc for publication. REQUIRED before publishing.",
      },
    },
    {
      name: "approvedAt",
      type: "date",
      label: "Approved at",
      admin: {
        position: "sidebar",
        date: { timePicker: true },
      },
    },
    {
      name: "blocks",
      type: "blocks",
      blocks: contentBlocks,
      label: "Content blocks",
    },
    {
      name: "related",
      type: "relationship",
      relationTo: ["help-docs", "support-docs", "trust-docs", "legal-docs"],
      hasMany: true,
      admin: { position: "sidebar" },
    },
  ],
  indexes: [{ fields: ["path"], unique: true }],
};
