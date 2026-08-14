/**
 * Content blocks — the 6 block types that compose a doc body.
 *
 * Mirrors the discriminated union in `src/data/docs/types.ts` so that the
 * existing <DocContent /> renderer can consume Payload records with minimal
 * transformation. Each Payload block has the same field names as the TS type
 * — the only reshape is for tables (Payload arrays-of-arrays vs string[][]),
 * handled by the read adapter in `src/lib/payload/get-doc.ts`.
 *
 * DO NOT expand this vocabulary. The constraint is the feature.
 */

import type { Block, Field } from "payload";

// ── Shared: list item (with nested children) ───────────────────────────────
const listItemFields: Field[] = [
  {
    name: "lead",
    type: "text",
    label: "Lead-in (optional bold prefix)",
    admin: {
      description: "e.g. 'Discover culture:' — rendered bold before the text.",
    },
  },
  {
    name: "text",
    type: "textarea",
    label: "Text",
    required: true,
  },
  {
    name: "children",
    type: "array",
    label: "Nested sub-items (optional)",
    fields: [
      {
        name: "text",
        type: "textarea",
        required: true,
      },
    ],
    admin: {
      description: "Indented sub-bullets rendered under this item.",
    },
  },
];

// ── 1. Paragraph ───────────────────────────────────────────────────────────
const paragraphBlock: Block = {
  slug: "paragraph",
  labels: { singular: "Paragraph", plural: "Paragraphs" },
  fields: [
    {
      name: "text",
      type: "textarea",
      required: true,
      admin: {
        description: "Standard paragraph text.",
      },
    },
  ],
};

// ── 2. Heading (level 2 or 3) ──────────────────────────────────────────────
const headingBlock: Block = {
  slug: "heading",
  labels: { singular: "Heading", plural: "Headings" },
  fields: [
    {
      name: "text",
      type: "text",
      required: true,
    },
    {
      name: "level",
      type: "select",
      label: "Heading level",
      options: [
        { label: "H2 (section)", value: "2" },
        { label: "H3 (sub-section)", value: "3" },
      ],
      defaultValue: "2",
      admin: {
        description: "H2 = section heading, H3 = sub-section. Defaults to H2.",
      },
    },
  ],
};

// ── 3. List (ordered or unordered, with optional lead-ins + nested) ────────
const listBlock: Block = {
  slug: "list",
  labels: { singular: "List", plural: "Lists" },
  fields: [
    {
      name: "ordered",
      type: "checkbox",
      label: "Ordered (numbered)",
      defaultValue: false,
      admin: {
        description: "Check for numbered lists, uncheck for bulleted.",
      },
    },
    {
      name: "items",
      type: "array",
      label: "Items",
      required: true,
      minRows: 1,
      fields: listItemFields,
// NOTE: RowLabel custom components require string paths to client
      // components in Payload 3 (functions can't be serialized into the import
      // map). For now we use the default numeric label — sufficient for
      // authoring. Add a custom RowLabel client component later if editors
      // need preview text in the array row header.
    },
  ],
};

// ── 4. Callout (note or warning) ───────────────────────────────────────────
const calloutBlock: Block = {
  slug: "callout",
  labels: { singular: "Callout", plural: "Callouts" },
  fields: [
    {
      name: "variant",
      type: "select",
      label: "Style",
      options: [
        { label: "Note (neutral)", value: "note" },
        { label: "Warning (destructive)", value: "warning" },
      ],
      defaultValue: "note",
    },
    {
      name: "title",
      type: "text",
      label: "Title (optional)",
      admin: {
        description: "Small bold label shown above the callout text.",
      },
    },
    {
      name: "text",
      type: "textarea",
      required: true,
    },
  ],
};

// ── 5. Table ───────────────────────────────────────────────────────────────
const tableBlock: Block = {
  slug: "table",
  labels: { singular: "Table", plural: "Tables" },
  fields: [
    {
      name: "headers",
      type: "array",
      label: "Column headers",
      required: true,
      minRows: 1,
      fields: [
        {
          name: "value",
          type: "text",
          required: true,
          label: "Header text",
        },
      ],
// RowLabel omitted — default numeric label is fine for headers.
    },
    {
      name: "rows",
      type: "array",
      label: "Rows",
      required: true,
      minRows: 0,
      fields: [
        {
          name: "cells",
          type: "array",
          label: "Cells",
          required: true,
          minRows: 1,
          fields: [
            {
              name: "value",
              type: "textarea",
              required: true,
              label: "Cell text",
            },
          ],
        },
      ],
      admin: {
        description:
          "Each row should have the same number of cells as there are headers.",
      },
    },
  ],
};

// ── 6. Quote ───────────────────────────────────────────────────────────────
const quoteBlock: Block = {
  slug: "quote",
  labels: { singular: "Quote", plural: "Quotes" },
  fields: [
    {
      name: "text",
      type: "textarea",
      required: true,
    },
  ],
};

export const contentBlocks: Block[] = [
  paragraphBlock,
  headingBlock,
  listBlock,
  calloutBlock,
  tableBlock,
  quoteBlock,
];

export const blockSlugs = contentBlocks.map((b) => b.slug);
