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
import { workspaceRolesAndPermissionsDoc } from "./workspace-roles-and-permissions";
import { inviteAndManageWorkspaceMembersDoc } from "./invite-and-manage-workspace-members";
import { whatIsTheStageDoc } from "./what-is-the-stage";
import { discoverContentDoc } from "./discover-content";
import { feedDoc } from "./feed";
import { manageYourHomeFeedAndRecommendationsDoc } from "./manage-your-home-feed-and-recommendations";
import { searchMusicosyDoc } from "./search-musicosy";
import { forYouFeedDoc } from "./for-you-feed";
import { friendsTabDoc } from "./friends-tab";
import { trendingContentDoc } from "./trending-content";
import { recommendedCreatorsAndMusicDoc } from "./recommended-creators-and-music";
import { manageTopicsAndInterestsDoc } from "./manage-topics-and-interests";
import { trendingContentAndFreshDropsDoc } from "./trending-content-and-fresh-drops";
import { likeDoc } from "./like";
import { loveAndKeepContentDoc } from "./love-and-keep-content";
import { commentDoc } from "./comment";
import { leaveANoteAndJoinTheConversationDoc } from "./leave-a-note-and-join-the-conversation";
import { shareDoc } from "./share";
import { repostDoc } from "./repost";
import { resingAndPassTheMicDoc } from "./resing-and-pass-the-mic";
import { mentionsDoc } from "./mentions";

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
  [workspaceRolesAndPermissionsDoc.path]: workspaceRolesAndPermissionsDoc,
  [inviteAndManageWorkspaceMembersDoc.path]: inviteAndManageWorkspaceMembersDoc,
  [whatIsTheStageDoc.path]: whatIsTheStageDoc,
  [discoverContentDoc.path]: discoverContentDoc,
  [feedDoc.path]: feedDoc,
  [manageYourHomeFeedAndRecommendationsDoc.path]: manageYourHomeFeedAndRecommendationsDoc,
  [searchMusicosyDoc.path]: searchMusicosyDoc,
  [forYouFeedDoc.path]: forYouFeedDoc,
  [friendsTabDoc.path]: friendsTabDoc,
  [trendingContentDoc.path]: trendingContentDoc,
  [recommendedCreatorsAndMusicDoc.path]: recommendedCreatorsAndMusicDoc,
  [manageTopicsAndInterestsDoc.path]: manageTopicsAndInterestsDoc,
  [trendingContentAndFreshDropsDoc.path]: trendingContentAndFreshDropsDoc,
  [likeDoc.path]: likeDoc,
  [loveAndKeepContentDoc.path]: loveAndKeepContentDoc,
  [commentDoc.path]: commentDoc,
  [leaveANoteAndJoinTheConversationDoc.path]: leaveANoteAndJoinTheConversationDoc,
  [shareDoc.path]: shareDoc,
  [repostDoc.path]: repostDoc,
  [resingAndPassTheMicDoc.path]: resingAndPassTheMicDoc,
  [mentionsDoc.path]: mentionsDoc,
};

/** Look up structured doc content for a given route path. */
export function getDoc(path: string): Doc | undefined {
  return docs[path];
}
