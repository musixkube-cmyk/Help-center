import type { Doc } from "./types";

/**
 * "Save and manage drafts" — Using Musicosy → Create & Publish doc.
 *
 * Covers Work in Progress (drafts): how to save them, find them, continue
 * editing, keep them private, choose the right owner context (Personal vs.
 * Workspace), Release or Set Release Time, and Vault/duplicate/Pull (discard)
 * options. Emphasizes that drafts are private and do not consume irreversible
 * Studio Allowances.
 *
 * Content provided verbatim by the user; structured into blocks.
 */
export const saveAndManageDraftsDoc: Doc = {
  path: "/resources/help-center/using-musicosy/create-and-publish/save-and-manage-drafts",
  blocks: [
    {
      type: "paragraph",
      text: "A Work in Progress (draft) is a private version of your creative work that you can edit and refine before you Release it to the public.",
    },
    {
      type: "paragraph",
      text: "Use drafts for posts on The Stage, music, videos, Fresh Drops (releases), podcast episodes, event pages, Studio projects, artwork, Amplification Campaigns, and other eligible MusicOSY creations. A draft is strictly connected to the Personal Context or Workspace Context in which you created it.",
    },
    {
      type: "paragraph",
      text: "Example:",
    },
    {
      type: "quote",
      text: "Start a post about your new song.\nSave it as a Work in Progress while you finish the caption and artwork.\nReturn later to review, Release, Set Release Time, or discard it.",
    },
    {
      type: "paragraph",
      text: "Saving a Work in Progress does not make your work public, distribute it, or consume irreversible Studio Allowances (credits).",
    },

    { type: "heading", text: "Save a Work in Progress" },
    {
      type: "paragraph",
      text: "To save an eligible creation as a draft:",
    },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Start creating a post, Studio project, upload, release, or other supported item." },
        { text: "Add your text, media, metadata, artwork, or other available details." },
        { text: "Select Save Draft, leave the creation flow when MusicOSY offers to preserve your work, or allow eligible autosave to save your progress." },
        { text: "Open your drafts later to continue working." },
      ],
    },
    {
      type: "paragraph",
      text: "MusicOSY automatically saves or provides recoverable draft behavior for draft text, metadata, Studio projects, uploads in progress, render settings, and scheduled publishing configurations where technically practical.",
    },
    {
      type: "paragraph",
      text: "If you leave a partially completed creation flow, MusicOSY preserves your Work in Progress. It will never silently publish your work, charge you, distribute content, or consume AI/render credits without your explicit confirmation.",
    },

    { type: "heading", text: "Find your drafts" },
    {
      type: "paragraph",
      text: "Open Studio, the universal Create menu, or the relevant publishing area, then select Drafts (or Work in Progress) to manage your saved items.",
    },
    {
      type: "paragraph",
      text: "Your available drafts may include:",
    },
    {
      type: "list",
      items: [
        { text: "Posts for The Stage" },
        { text: "Music and Fresh Drop (release) drafts" },
        { text: "Video and podcast drafts" },
        { text: "Studio projects" },
        { text: "Uploads in progress" },
        { text: "Metadata and artwork works in progress" },
        { text: "Event, Amplification Campaign, product, or EPK drafts" },
        { text: "Participatory creations, such as eligible Resings or collaboration work" },
      ],
    },
    {
      type: "paragraph",
      text: "A draft will show its object type, owner context (Personal vs. Workspace), creation date, last-saved time, linked assets, and current processing status.",
    },

    { type: "heading", text: "Continue editing" },
    {
      type: "paragraph",
      text: "To keep working on a draft:",
    },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Open your Drafts folder." },
        { text: "Select the Work in Progress you want to continue." },
        { text: "Update your content, metadata, media, artwork, credits, audience, or other available settings." },
        { text: "Save your changes." },
        { text: "Release, Set Release Time, Vault (archive), duplicate, Pull (discard), or leave the draft for later." },
      ],
    },
    {
      type: "paragraph",
      text: "A draft can be edited without public availability. Attaching audio, video, artwork, or another media asset to a draft does not publish that asset or make it discoverable.",
    },

    { type: "heading", text: "Keep drafts private" },
    {
      type: "paragraph",
      text: "Works in Progress are strictly private. They are not placed in public Search, The Stage, public profiles, ordinary share links, or external distribution channels.",
    },
    {
      type: "paragraph",
      text: "They are not counted as public consumption and do not create public catalog credits, financial entitlements, or distribution commitments.",
    },
    {
      type: "paragraph",
      text: "If you create a draft in a Workspace context, authorized collaborators may be able to access it according to the Workspace and project permissions (e.g., after you Call In a Collaborator). A private preview may also be available through controlled preview access where supported.",
    },

    { type: "heading", text: "Choose the right owner context" },
    {
      type: "paragraph",
      text: "Before MusicOSY creates a draft, it must know whether the work belongs to your Personal Context or a Workspace Context.",
    },
    {
      type: "list",
      items: [
        { text: "Use your Personal Context for your own individual work." },
        { text: "Use a Workspace Context only when you are authorized to create work for that team, artist, label, or organization." },
      ],
    },
    {
      type: "callout",
      variant: "note",
      text: "A Workspace project remains Workspace-owned even if you created the first draft while working in the authorized Workspace context. Switching contexts later does not automatically transfer ownership.",
    },

    { type: "heading", text: "Release or Set Release Time" },
    {
      type: "paragraph",
      text: "When your draft is ready, you may be able to Release it immediately or Set Release Time (schedule) for a future date.",
    },
    {
      type: "paragraph",
      text: "Before publishing, MusicOSY checks the applicable requirements, such as required metadata fields, permissions, rights declarations, visibility settings, safety rules, media processing status, and review requirements.",
    },
    {
      type: "paragraph",
      text: "If a release requirement is not met, MusicOSY will keep the item in a draft or \"Ready\" status and explain the remediable blocker (e.g., missing artwork or an unaccepted Split Sheet).",
    },

    { type: "heading", text: "Vault, duplicate, or Pull (discard)" },
    {
      type: "paragraph",
      text: "Depending on the draft type, you may be able to:",
    },
    {
      type: "list",
      items: [
        { lead: "Vault", text: "(Archive) a draft you want to keep but are not actively using." },
        { lead: "Duplicate", text: "a draft before trying a different version or arrangement." },
        { lead: "Pull", text: "(Discard/Delete) a draft you no longer need." },
        { text: "Continue a draft later." },
      ],
    },
    {
      type: "paragraph",
      text: "Drafts remain subject to Studio Allowances (storage limits), retention rules, security safeguards, safety requirements, legal obligations, and Workspace offboarding rules.",
    },
    {
      type: "paragraph",
      text: "If an upload is interrupted, MusicOSY preserves a resumable upload or draft where possible. If file validation fails, the platform will explain the technical requirement while preserving the rest of your draft work.",
    },
  ],
  related: [
    "/resources/help-center/using-musicosy/create-and-publish/what-is-studio",
    "/resources/help-center/using-musicosy/create-and-publish/start-a-studio-project",
    "/resources/help-center/using-musicosy/create-and-publish/upload-music-video-and-artwork",
    "/resources/help-center/using-musicosy/create-and-publish/add-credits-and-collaborators",
    "/resources/help-center/using-musicosy/create-and-publish/choose-content-visibility",
  ],
};
