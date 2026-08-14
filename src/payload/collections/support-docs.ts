/**
 * support-docs — Support Center collection.
 *
 * Same editorial workflow as Help Docs (drafts + publish), with the addition
 * of an optional ticket-type tag so support staff can cross-reference
 * inbound support tickets to a known issue / doc.
 */

import type { CollectionConfig } from "payload";
import { contentBlocks } from "../blocks/content-blocks";

const baseAccess = {
  read: () => true,
};

export const SupportDocs: CollectionConfig = {
  slug: "support-docs",
  labels: {
    singular: "Support Doc",
    plural: "Support Docs",
  },
  access: baseAccess,
  admin: {
    group: "Pillar: Support",
    useAsTitle: "title",
    defaultColumns: ["title", "path", "category", "updatedAt", "_status"],
  },
  versions: {
    drafts: {
      autosave: { interval: 2000 },
    },
    maxPerDoc: 10,
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
          "Canonical route, e.g. /support/account-and-access/sign-in.",
        position: "sidebar",
      },
    },
    {
      name: "blurb",
      type: "textarea",
    },
    {
      name: "category",
      type: "select",
      label: "Support category",
      options: [
        { label: "Account & Access", value: "account-and-access" },
        { label: "Reports & Appeals", value: "reports-and-appeals" },
        { label: "Payments & Purchases", value: "payments-and-purchases" },
        { label: "Technical Support", value: "technical-support" },
        { label: "Contact Us", value: "contact-us" },
      ],
      admin: { position: "sidebar" },
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
