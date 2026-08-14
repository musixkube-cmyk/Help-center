import type { Doc } from "./types";

/**
 * "Take your post off The Stage" — Using MusicOSY → Content Interaction doc.
 *
 * Covers Take Off Stage (hiding a post from public view without deleting it):
 * how to take a post off, what stays intact, what people may see, how to
 * restore it, how it differs from Unpublish / Vault / Pull / Takedown, and
 * when the option may be unavailable.
 *
 * Content provided verbatim by the user; structured into blocks.
 */
export const takeYourPostOffTheStageDoc: Doc = {
  path: "/resources/help-center/using-musicosy/content-interaction/take-your-post-off-the-stage",
  blocks: [
    {
      type: "paragraph",
      text: "Take Off Stage removes your post from public view on The Stage without deleting it. Use it when you want to pause, review, update, or step back from a post while keeping the underlying content retained in your profile history or Studio.",
    },
    {
      type: "paragraph",
      text: "This is different from permanently Pulling (deleting) a post, deleting your account, or responding to a rights or safety Flag (takedown).",
    },

    { type: "heading", text: "Take a post off The Stage" },
    {
      type: "paragraph",
      text: "To remove an eligible post from public view:",
    },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Open the post you created on The Stage or your profile." },
        { text: "Select the More options menu." },
        { text: "Choose Take Off Stage (or Hide)." },
        { text: "Review the confirmation." },
        { text: "Confirm the change." },
      ],
    },
    {
      type: "paragraph",
      text: "The post will no longer appear as an active public social presentation on The Stage. It will also stop appearing through ordinary profile grids, recommendations, Search, Pass the Mic (shares), or discovery paths where the post’s public availability is required.",
    },

    { type: "heading", text: "What stays intact" },
    {
      type: "paragraph",
      text: "Taking a post off The Stage is a visibility change, not an ownership transfer or automatic deletion.",
    },
    {
      type: "paragraph",
      text: "The post remains retained by MusicOSY and may remain available to you through your profile's hidden/management settings. Depending on the type of content and its connected settings, its underlying media, drafts, metadata, or catalog record may remain separate from the social post. A social presentation does not itself become the canonical song, Fresh Drop (release), rights record, or distribution record.",
    },
    {
      type: "paragraph",
      text: "For example, taking a promotional post off public view does not automatically unpublish the track it referred to, remove a release from your catalog, cancel a Merch Table sale, or end external distribution.",
    },

    { type: "heading", text: "What people may see" },
    {
      type: "paragraph",
      text: "After you take a post off The Stage:",
    },
    {
      type: "list",
      items: [
        { text: "New viewers will not be able to access it through normal public discovery." },
        { text: "Existing links, Pass the Mic shares, Resings, Notes (comments), or embeds may no longer resolve to an active public post." },
        { text: "Other people may have already received a Signal (notification), viewed the post, taken a screenshot, or shared it via Backstage before you removed it." },
        { text: "Your action does not erase independent posts, messages, Notes, or other content created by other members." },
      ],
    },
    {
      type: "paragraph",
      text: "If your post is a source for linked participation—such as a Resing, Ensemble, Harmony, or Rework—MusicOSY will re-evaluate the linked content’s display, playback, search, or participation availability based on the source's new hidden state.",
    },

    { type: "heading", text: "Put it back on The Stage" },
    {
      type: "paragraph",
      text: "If the post remains eligible and no restriction prevents restoration, you can restore it to public view from your profile's hidden posts or management surface.",
    },
    {
      type: "paragraph",
      text: "Restoring a post does not guarantee that it returns to the exact same position in The Stage feed, recommendations, Search results, or Signal history. Discovery and visibility are evaluated under the current audience, access, privacy, safety, rights, and moderation rules at the time of restoration.",
    },

    { type: "heading", text: "Take Off Stage versus other actions" },
    {
      type: "table",
      headers: ["Action", "MusicOSY Term", "Result"],
      rows: [
        ["Hide", "Take Off Stage", "Removes a post from public view while retaining it for the owner."],
        ["Unpublish", "Unpublish", "Withdraws public or gated access to a canonical object (like a release or episode) while retaining the record."],
        ["Archive", "Vault", "Retains an inactive object outside normal active use and discovery."],
        ["Delete", "Pull", "Starts an object-specific deletion process (entering a DELETE_PENDING state) that includes dependency processing and retention requirements."],
        ["Takedown", "Enforcement / Takedown", "A platform- or authority-imposed restriction (via Trust & Safety or Rights) that limits access regardless of your preference."],
      ],
    },
    {
      type: "paragraph",
      text: "MusicOSY treats deletion as a lifecycle rather than a single irreversible button. A Pulled item may become unavailable to ordinary users immediately but remains in a DELETE_PENDING state before its applicable retention and dependency purge process is complete.",
    },

    { type: "heading", text: "When the option may be unavailable" },
    {
      type: "paragraph",
      text: "You may not be able to take a post off The Stage, restore it, or Pull it immediately if:",
    },
    {
      type: "list",
      items: [
        { text: "You are not the post owner or do not have the required Workspace permission." },
        { text: "The content is subject to a safety, rights, legal, financial, or enforcement restriction." },
        { text: "A legal hold, Trust & Safety review, investigation, or dependency process applies." },
        { text: "The post is part of a governed release, event, Amplification Campaign, collaboration, or other workflow with separate publication controls." },
        { text: "MusicOSY has already removed or restricted the item via a Flag or automated safety system." },
      ],
    },
    {
      type: "paragraph",
      text: "Workspace access never overrides member blocks, content rights, safety restrictions, legal restrictions, or platform enforcement.",
    },
  ],
  related: [
    "/resources/help-center/using-musicosy/create-and-publish/choose-content-visibility",
    "/resources/help-center/using-musicosy/content-interaction/edit-or-delete-your-comment",
    "/resources/help-center/using-musicosy/content-interaction/resing-and-pass-the-mic",
    "/support/reports-and-appeals/content-violations-and-bans",
    "/support/reports-and-appeals/report-a-post-account-live-comment-dm",
    "/resources/help-center/getting-started/delete-or-deactivate-your-account",
  ],
};
