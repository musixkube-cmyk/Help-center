/**
 * help-docs — Help Center article collection.
 *
 * Standard editorial workflow: drafts + publish. This is the lightest
 * review tier of the four pillars — used for product how-tos, getting
 * started guides, and feature explainers.
 *
 * Path is the canonical route key and the unique identifier that ties a doc
 * to its nav node. The renderer (<DocContent />) consumes blocks[] unchanged.
 */

import type { CollectionConfig } from "payload";
import { contentBlocks } from "../blocks/content-blocks";

const baseAccess = {
  read: () => true, // public site reads
};

export const HelpDocs: CollectionConfig = {
  slug: "help-docs",
  labels: {
    singular: "Help Center Doc",
    plural: "Help Center Docs",
  },
  access: baseAccess,
  admin: {
    group: "Pillar: Help",
    useAsTitle: "title",
    defaultColumns: ["title", "path", "updatedAt", "_status"],
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
      label: "Title",
      admin: {
        description:
          "Display title shown as the page <h1> and in the sidebar.",
      },
    },
    {
      name: "path",
      type: "text",
      required: true,
      unique: true,
      label: "Route path",
      admin: {
        description:
          "Canonical route, e.g. /resources/help-center/getting-started/what-is-musicosy. MUST match the nav node's derived path.",
        position: "sidebar",
      },
    },
    {
      name: "blurb",
      type: "textarea",
      label: "Blurb",
      admin: {
        description:
          "Short description used in nav node cards and meta tags. Optional — falls back to title.",
      },
    },
    {
      name: "blocks",
      type: "blocks",
      blocks: contentBlocks,
      label: "Content blocks",
      admin: {
        description:
          "Article body, top-to-bottom. Drag to reorder. Use the 6 block types only — do not request new ones without architectural review.",
      },
    },
    {
      name: "related",
      type: "relationship",
      relationTo: ["help-docs", "support-docs", "trust-docs", "legal-docs"],
      hasMany: true,
      label: "Related articles",
      admin: {
        position: "sidebar",
        description: "Linked at the bottom of the article.",
      },
    },
  ],
  indexes: [{ fields: ["path"], unique: true }],
};
