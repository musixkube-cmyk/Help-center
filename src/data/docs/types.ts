/**
 * Doc content types — structured article content for the Help Center.
 *
 * Each doc is a list of blocks rendered in order. Blocks are intentionally
 * minimal (paragraph / heading / list) so content stays portable and the
 * renderer stays simple. Add new block kinds here when a doc needs them.
 */

export type DocListItem = {
  /** Optional bold lead-in, e.g. "Discover culture:" — rendered before `text`. */
  lead?: string;
  /** The body of the list item. */
  text: string;
};

export type DocBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string; level?: 2 | 3 }
  | { type: "list"; ordered?: boolean; items: DocListItem[] };

export type Doc = {
  /** Full path the doc lives at, e.g. "/resources/help-center/getting-started/what-is-musicosy". */
  path: string;
  /** Content blocks, rendered top-to-bottom. */
  blocks: DocBlock[];
  /** Paths of related articles, rendered as a linked list at the bottom. */
  related?: string[];
};
