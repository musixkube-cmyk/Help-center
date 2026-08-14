/**
 * legal-docs — Legal & Policies pillar.
 *
 * Strictest tier. Versioned with effective dates and an archival policy.
 * Each legal doc carries its own version number — publishing a new version
 * does NOT delete the old one; superseded versions are archived for legal
 * provenance (regulators can request "what the ToS said on date X").
 */

import type { CollectionConfig } from "payload";
import { contentBlocks } from "../blocks/content-blocks";

const baseAccess = {
  read: () => true,
};

export const LegalDocs: CollectionConfig = {
  slug: "legal-docs",
  labels: {
    singular: "Legal Document",
    plural: "Legal Documents",
  },
  access: baseAccess,
  admin: {
    group: "Pillar: Legal",
    useAsTitle: "title",
    defaultColumns: [
      "title",
      "path",
      "version",
      "effectiveDate",
      "status",
      "updatedAt",
    ],
  },
  versions: {
    drafts: {
      autosave: { interval: 2000 },
    },
    maxPerDoc: 50, // legal docs retain ALL published versions
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
          "Canonical route, e.g. /legal-and-policies/terms-of-use. The site always serves the currently-effective version at this path.",
        position: "sidebar",
      },
    },
    {
      name: "blurb",
      type: "textarea",
    },
    {
      name: "version",
      type: "text",
      label: "Version",
      admin: {
        position: "sidebar",
        description:
          "Semantic version, e.g. '2.1'. Increment when publishing changes that legally supersede the prior version.",
      },
    },
    {
      name: "effectiveDate",
      type: "date",
      label: "Effective date",
      required: true,
      admin: {
        position: "sidebar",
        date: { displayFormat: "yyyy-MM-dd" },
        description: "Date this version takes effect.",
      },
    },
    {
      name: "supersededBy",
      type: "relationship",
      relationTo: "legal-docs",
      hasMany: false,
      label: "Superseded by",
      admin: {
        position: "sidebar",
        description:
          "If this version has been replaced, link to the newer version here. Leave blank for the current version.",
      },
    },
    {
      name: "status",
      type: "select",
      label: "Lifecycle status",
      options: [
        { label: "Draft", value: "draft" },
        { label: "Effective", value: "effective" },
        { label: "Archived", value: "archived" },
      ],
      defaultValue: "draft",
      admin: { position: "sidebar" },
    },
    {
      name: "approvedBy",
      type: "text",
      label: "Approved by",
      admin: {
        position: "sidebar",
        description:
          "Legal reviewer name. REQUIRED before a doc can move to 'effective' status.",
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
  indexes: [
    { fields: ["path"], unique: true },
    { fields: ["status"] },
    { fields: ["effectiveDate"] },
  ],
};
