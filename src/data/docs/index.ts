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
import { signInAndSignOutDoc } from "./sign-in-and-sign-out";
import { verifyYourEmailOrPhoneNumberDoc } from "./verify-your-email-or-phone-number";
import { setUpYourProfileDoc } from "./set-up-your-profile";
import { setUpYourArtistPageDoc } from "./set-up-your-artist-page";
import { chooseOrChangeYourHandleDoc } from "./choose-or-change-your-handle";
import { chooseOrChangeYourDisplayNameDoc } from "./choose-or-change-your-display-name";
import { findFriendsDoc } from "./find-friends";
import { followAndUnfollowDoc } from "./follow-and-unfollow";
import { howToBuildASetlistDoc } from "./how-to-build-a-setlist";
import { understandYourToolsAndToolkitsDoc } from "./understand-your-tools-and-toolkits";
import { createOrJoinAWorkspaceDoc } from "./create-or-join-a-workspace";
import { personalProfilesVsTeamWorkspacesDoc } from "./personal-profiles-vs-team-workspaces";
import { personalContextVersusWorkspaceContextDoc } from "./personal-context-versus-workspace-context";

export type { Doc, DocBlock, DocListItem } from "./types";

const docs: Record<string, Doc> = {
  [whatIsMusicosyDoc.path]: whatIsMusicosyDoc,
  [createAnAccountDoc.path]: createAnAccountDoc,
  [signInAndSignOutDoc.path]: signInAndSignOutDoc,
  [verifyYourEmailOrPhoneNumberDoc.path]: verifyYourEmailOrPhoneNumberDoc,
  [setUpYourProfileDoc.path]: setUpYourProfileDoc,
  [setUpYourArtistPageDoc.path]: setUpYourArtistPageDoc,
  [chooseOrChangeYourHandleDoc.path]: chooseOrChangeYourHandleDoc,
  [chooseOrChangeYourDisplayNameDoc.path]: chooseOrChangeYourDisplayNameDoc,
  [findFriendsDoc.path]: findFriendsDoc,
  [followAndUnfollowDoc.path]: followAndUnfollowDoc,
  [howToBuildASetlistDoc.path]: howToBuildASetlistDoc,
  [understandYourToolsAndToolkitsDoc.path]: understandYourToolsAndToolkitsDoc,
  [createOrJoinAWorkspaceDoc.path]: createOrJoinAWorkspaceDoc,
  [personalProfilesVsTeamWorkspacesDoc.path]: personalProfilesVsTeamWorkspacesDoc,
  [personalContextVersusWorkspaceContextDoc.path]: personalContextVersusWorkspaceContextDoc,
};

/** Look up structured doc content for a given route path. */
export function getDoc(path: string): Doc | undefined {
  return docs[path];
}
