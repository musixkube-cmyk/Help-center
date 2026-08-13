/**
 * Docs registry — maps a Help Center path to its structured content.
 *
 * Adding a new doc:
 *   1. Create `./<slug>.ts` exporting a `Doc` (see `what-is-musicosy.ts`).
 *   2. Import it here and add it to the `docs` record keyed by its path.
 *   3. Make sure the path also exists as a NavNode in `src/data/nav.ts`
 *      (so the sidebar, breadcrumb and routing all resolve).
 *
 * Pages without a registered doc still render — the catch-all page falls
 * back to a placeholder until real content is written.
 */

import type { Doc } from "./types";
import { whatIsMusicosyDoc } from "./what-is-musicosy";
import { createAnAccountDoc } from "./create-an-account";

export type { Doc, DocBlock, DocListItem } from "./types";

const docs: Record<string, Doc> = {
  [whatIsMusicosyDoc.path]: whatIsMusicosyDoc,
  [createAnAccountDoc.path]: createAnAccountDoc,
};

/** Look up structured doc content for a given route path. */
export function getDoc(path: string): Doc | undefined {
  return docs[path];
}
