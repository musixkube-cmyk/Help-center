import type { Doc } from "./types";

/**
 * "Edit or delete your comment" — Using MusicOSY → Content Interaction doc.
 *
 * Covers editing and deleting a Note (comment) you created: how to edit,
 * how to delete, what happens to replies, when editing or deleting is
 * unavailable, why editing is not a safety tool, and how Signals/records
 * may persist after a Note is changed or removed.
 *
 * Content provided verbatim by the user; structured into blocks.
 */
export const editOrDeleteYourCommentDoc: Doc = {
  path: "/resources/help-center/using-musicosy/content-interaction/edit-or-delete-your-comment",
  blocks: [
    {
      type: "paragraph",
      text: "You can edit or delete a Note (comment) you created on eligible MusicOSY content. Editing lets you correct or clarify your words; deleting removes the Note from the conversation where MusicOSY allows it.",
    },
    {
      type: "paragraph",
      text: "Note interactions remain subject to the post’s visibility, Note settings, blocks, moderation, and other safety rules.",
    },

    { type: "heading", text: "Edit your Note" },
    {
      type: "paragraph",
      text: "To edit a Note:",
    },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Open the post or Note thread on The Stage." },
        { text: "Find the Note you wrote." },
        { text: "Select the More options menu next to the Note." },
        { text: "Choose Edit." },
        { text: "Update your text." },
        { text: "Select Save." },
      ],
    },
    {
      type: "paragraph",
      text: "Use editing for typos, missing context, broken links, incorrect @mentions, or a clearer version of what you meant to say.",
    },
    {
      type: "paragraph",
      text: "You can edit only your own Note. A post owner, creator, or other member cannot rewrite your Note on your behalf. MusicOSY may show an \"Edited\" marker after material edits to preserve conversational transparency.",
    },

    { type: "heading", text: "Delete your Note" },
    {
      type: "paragraph",
      text: "To delete a Note:",
    },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Open the post or Note thread." },
        { text: "Find your Note." },
        { text: "Select the More options menu." },
        { text: "Choose Delete (or Remove)." },
        { text: "Confirm the deletion if MusicOSY asks you to." },
      ],
    },
    {
      type: "paragraph",
      text: "Deleting your Note removes it from the active public conversation where permitted. It does not delete the original post, remove another member’s Notes, undo Loves other people made elsewhere, or change the creator’s ownership of the post.",
    },
    {
      type: "paragraph",
      text: "MusicOSY supports distinct controls for members to manage their own Notes, while content owners have separate options to hide, lock, disable, pin, or moderate Notes on content they manage.",
    },
    {
      type: "callout",
      variant: "note",
      text: "For safety, legal, or audit purposes, MusicOSY may retain a minimal, non-public tombstone record of the deleted Note to preserve thread integrity or evidence, even after it is removed from public display.",
    },

    { type: "heading", text: "What happens to replies" },
    {
      type: "paragraph",
      text: "If your Note has replies, MusicOSY may preserve the thread structure, remove the deleted parent Note from ordinary view, or apply a clear \"deleted\" state so replies are not misleadingly reassigned to another author.",
    },
    {
      type: "paragraph",
      text: "Replies remain their authors’ contributions unless they are independently deleted, hidden, restricted, or removed under applicable rules. If you edit your Note, existing replies do not automatically change.",
    },

    { type: "heading", text: "When editing or deleting is unavailable" },
    {
      type: "paragraph",
      text: "You may not be able to edit or delete a Note if:",
    },
    {
      type: "list",
      items: [
        { text: "The post, thread, or your account is no longer available." },
        { text: "The content has been removed, Taken Off Stage (archived/hidden), restricted, or placed under Trust & Safety review." },
        { text: "The creator has locked or disabled Notes on the post." },
        { text: "You are blocked from the relevant interaction." },
        { text: "A safety, legal, rights, moderation, or enforcement restriction applies (e.g., the Note is preserved as evidence in an active safety case)." },
        { text: "The Note is part of a separate governed surface, such as a private Studio project record or Backstage message." },
      ],
    },
    {
      type: "paragraph",
      text: "MusicOSY’s interaction systems must respect content visibility, privacy, blocking, moderation, and rate limits.",
    },

    { type: "heading", text: "Editing is not a safety tool" },
    {
      type: "paragraph",
      text: "If you want to remove something you wrote, delete it.",
    },
    {
      type: "paragraph",
      text: "If another member’s Note is abusive, impersonating someone, threatening, or otherwise violates MusicOSY’s Community Guidelines, use Flag (Report) rather than trying to manage their Note yourself.",
    },
    {
      type: "paragraph",
      text: "You can also Mute or Block the member when you need to reduce unwanted contact or create a stronger personal boundary.",
    },

    { type: "heading", text: "About Signals and records" },
    {
      type: "paragraph",
      text: "A creator or another participant may already have seen the original Note or received a Signal (notification) before you edited or deleted it. Updating or removing your Note does not guarantee that prior Signals, screenshots, emails, or external records disappear.",
    },
    {
      type: "paragraph",
      text: "MusicOSY may also retain limited records when necessary for safety investigations, rights matters, fraud prevention, legal obligations, enforcement, or audit requirements.",
    },
  ],
  related: [
    "/resources/help-center/using-musicosy/content-interaction/leave-a-note-and-join-the-conversation",
    "/resources/help-center/using-musicosy/content-interaction/mentions",
    "/resources/help-center/using-musicosy/content-interaction/block-and-mute",
    "/support/reports-and-appeals/report-a-post-account-live-comment-dm",
    "/resources/help-center/using-musicosy/content-interaction/take-your-post-off-the-stage",
  ],
};
