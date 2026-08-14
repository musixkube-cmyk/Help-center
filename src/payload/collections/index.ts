/**
 * Collection registry — exports the array passed to `collections` in the
 * Payload config. Kept as one file so adding a future pillar is a single
 * import line + array push.
 */

import type { CollectionConfig } from "payload";
import { NavNodes } from "./nav-nodes";
import { HelpDocs } from "./help-docs";
import { SupportDocs } from "./support-docs";
import { TrustDocs } from "./trust-docs";
import { LegalDocs } from "./legal-docs";
import { Users } from "./users";

export const collections: CollectionConfig[] = [
  Users,
  NavNodes,
  HelpDocs,
  SupportDocs,
  TrustDocs,
  LegalDocs,
];

export { Users, NavNodes, HelpDocs, SupportDocs, TrustDocs, LegalDocs };
