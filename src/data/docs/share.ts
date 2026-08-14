import type { Doc } from "./types";

/**
 * "Share" — Using MusicOSY → Content Interaction doc.
 *
 * Sharing puts music, a creator, a Fresh Drop, a post, a Setlist, an event,
 * or another MusicOSY moment in front of someone else. The core sharing
 * action is often called Pass the Mic. Covers: how to share, where you can
 * share (Backstage, copy link, etc.), adding context, the Share vs. Resing
 * comparison, eligibility and access rules, and sharing responsibly.
 *
 * Content provided verbatim by the user; structured into blocks.
 */
export const shareDoc: Doc = {
  path: "/resources/help-center/using-musicosy/content-interaction/share",
  blocks: [
    {
      type: "paragraph",
      text: "Sharing is how you put music, a creator, a Fresh Drop (release), a post, a Setlist, an event, or another MusicOSY moment in front of someone else.",
    },
    {
      type: "paragraph",
      text: "On MusicOSY, the core sharing action is often called Pass the Mic. A share sends people back to the original, canonical source. It does not create a new copy of the content, transfer ownership, or remove the original creator’s attribution.",
    },

    { type: "heading", text: "How to share content" },
    {
      type: "paragraph",
      text: "To share eligible content:",
    },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Open the post, track, video, release, episode, event, Setlist, profile, or other item." },
        { text: "Select the Share or Pass the Mic icon." },
        { text: "Choose where you want to share it." },
        { text: "Add a message or caption if you want to give the recipient context." },
        { text: "Send or post the share." },
      ],
    },
    {
      type: "paragraph",
      text: "MusicOSY creates a canonical share link connected to the original item. This ensures that all plays, Loves, and engagement generated from your share are accurately attributed to the original creator.",
    },

    { type: "heading", text: "Where you can share" },
    {
      type: "paragraph",
      text: "Depending on the content and your device, you may be able to share eligible content through:",
    },
    {
      type: "list",
      items: [
        { text: "Backstage (MusicOSY direct messages)" },
        { text: "A Backstage group conversation" },
        { text: "Text message or email" },
        { text: "Your device’s native share sheet" },
        { text: "External social platforms" },
        { text: "A copied link" },
        { text: "Another supported third-party app" },
      ],
    },
    { type: "heading", text: "Share in Backstage", level: 3 },
    {
      type: "paragraph",
      text: "Use Backstage when you want to send something directly to another member or group. For example, you might share a song that reminds you of a friend, a Setlist for a road trip, or an upcoming Live Session. You can add a short private message to explain why you are sharing it.",
    },
    { type: "heading", text: "Copy a link", level: 3 },
    {
      type: "paragraph",
      text: "Use Copy Link when you want to share content somewhere MusicOSY does not list directly (like a website, forum, or external blog). Paste the link into your desired destination.",
    },

    { type: "heading", text: "Add context to your share" },
    {
      type: "paragraph",
      text: "A share can include your own caption or message. Use your message to explain why the content matters to you, who might enjoy it, or what specific lyric, sound, or performance caught your attention.",
    },
    {
      type: "paragraph",
      text: "Your caption is still subject to MusicOSY’s Community Guidelines. Keep it honest, respectful, and relevant.",
    },

    { type: "heading", text: "Share vs. Resing" },
    {
      type: "paragraph",
      text: "It is important to understand the difference between sharing content privately/externally and amplifying it on The Stage.",
    },
    {
      type: "table",
      headers: ["Action", "What it does"],
      rows: [
        ["Share (Pass the Mic)", "Sends content directly to a specific person, external app, or link destination."],
        ["Resing", "Reposts content directly to your MusicOSY followers’ feeds on The Stage with source attribution."],
        ["Keep", "Saves content to your personal Library for later retrieval."],
        ["Love", "Shows social appreciation for the content."],
      ],
    },
    {
      type: "paragraph",
      text: "Use Share when you want to send something to a specific person or outside platform. Use Resing when you want to amplify it to your own MusicOSY community.",
    },

    { type: "heading", text: "Eligibility and access rules" },
    {
      type: "paragraph",
      text: "You cannot share content with an audience that is not eligible to receive it. Sharing something does not override privacy, subscription, purchase, age, territory, rights, or other access restrictions.",
    },
    {
      type: "paragraph",
      text: "Content may be unshareable or inaccessible to the recipient if it is:",
    },
    {
      type: "list",
      items: [
        { text: "Set to private or limited to approved followers" },
        { text: "Subscriber-only or gated behind a Circle membership" },
        { text: "Paid, purchase-only, or ticketed" },
        { text: "Restricted to specific Workspace members or Studio collaborators" },
        { text: "Blocked between you and the recipient" },
        { text: "Age-restricted or territory-limited" },
        { text: "Restricted by rights, safety, moderation, or Trust & Safety enforcement" },
      ],
    },
    {
      type: "paragraph",
      text: "MusicOSY strictly preserves current access rules when shared content is opened. A link that worked when it was first shared may no longer be available if the content’s visibility, rights, or availability changes later. If a recipient clicks a link to restricted content, they will see an eligibility message rather than the media.",
    },

    { type: "heading", text: "Share responsibly" },
    {
      type: "paragraph",
      text: "Before sharing, think about the audience and the creator.",
    },
    {
      type: "paragraph",
      text: "Do not share:",
    },
    {
      type: "list",
      items: [
        { text: "Private or confidential information" },
        { text: "Restricted Workspace or Studio material" },
        { text: "Someone else’s personal details or private Backstage messages" },
        { text: "Content that could put someone at risk" },
        { text: "Misleading, deceptive, or abusive material" },
        { text: "Content you do not have permission to distribute" },
        { text: "A creator’s work in a way that intentionally removes or hides their attribution" },
      ],
    },
    {
      type: "paragraph",
      text: "If a shared item includes sponsorship or promotion (AdNote), MusicOSY preserves the applicable disclosure where required by law and platform policy.",
    },
  ],
  related: [
    "/resources/help-center/using-musicosy/content-interaction/resing-and-pass-the-mic",
    "/resources/help-center/using-musicosy/backstage-and-community/share-content-in-backstage",
    "/resources/help-center/using-musicosy/content-interaction/leave-a-note-and-join-the-conversation",
    "/resources/help-center/using-musicosy/content-interaction/block-and-mute",
  ],
};
