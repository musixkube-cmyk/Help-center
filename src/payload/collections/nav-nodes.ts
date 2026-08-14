/**
 * NavNodes — the navigation tree, stored as a self-referential collection.
 *
 * Each node represents one entry in the help center sidebar. A node is either:
 *   - a leaf (no children) pointing at one Doc in one of the four pillar
 *     collections via the polymorphic `doc` relationship, OR
 *   - a branch (has children) which serves as a grouping container.
 *
 * Path is NOT stored on NavNode — it is derived at read time by walking up
 * the parent chain and joining slugs. This eliminates the "two sources of
 * truth for the route" class of bug entirely.
 *
 * The doc is the canonical content record. NavNode references it.
 */

import type { CollectionConfig } from "payload";

export const NavNodes: CollectionConfig = {
  slug: "nav-nodes",
  labels: {
    singular: "Navigation Node",
    plural: "Navigation Nodes",
  },
  access: {
    read: () => true, // sidebar is public
  },
  admin: {
    group: "Navigation",
    useAsTitle: "label",
    defaultColumns: ["label", "slug", "parent", "doc", "order"],
  },
  fields: [
    {
      name: "label",
      type: "text",
      required: true,
      label: "Label",
      admin: {
        description: "Display name shown in the sidebar.",
      },
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: false, // uniqueness enforced within parent via compound index, not here
      label: "Slug",
      admin: {
        description:
          "URL segment for this node (kebab-case). Combined with parent slugs to form the full path.",
        position: "sidebar",
      },
    },
    {
      name: "blurb",
      type: "textarea",
      label: "Blurb",
      admin: {
        description: "Short description shown on section landing pages.",
      },
    },
    {
      name: "parent",
      type: "relationship",
      relationTo: "nav-nodes",
      hasMany: false,
      label: "Parent node",
      admin: {
        position: "sidebar",
        description: "Leave blank for top-level nodes (root sections).",
      },
    },
    {
      name: "doc",
      type: "relationship",
      relationTo: ["help-docs", "support-docs", "trust-docs", "legal-docs"],
      hasMany: false,
      label: "Document (leaf nodes only)",
      admin: {
        position: "sidebar",
        description:
          "For leaf nodes: pick the document this route renders. Leave blank for branches.",
      },
    },
    {
      name: "order",
      type: "number",
      label: "Sort order",
      defaultValue: 0,
      admin: {
        position: "sidebar",
        description: "Lower numbers sort first within the same parent.",
      },
    },
    {
      name: "rootSection",
      type: "checkbox",
      label: "Is root section",
      defaultValue: false,
      admin: {
        position: "sidebar",
        description:
          "Check for top-level pillars (Help Center, Support, Trust, Legal). Drives the sidebar root.",
      },
    },
  ],
  indexes: [
    { fields: ["slug"] },
    { fields: ["parent"] },
    { fields: ["order"] },
  ],
};
