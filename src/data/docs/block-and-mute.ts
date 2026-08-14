import type { Doc } from "./types";

/**
 * "Block and mute" — Using MusicOSY → Content Interaction doc.
 *
 * Covers Mute and Block as personal account controls within your Personal
 * Context: when to use each, how to apply them, how they differ (and how
 * Flagging differs from both), what blocking can affect, how to unmute or
 * unblock, and a practical example of choosing between them.
 *
 * Content provided verbatim by the user; structured into blocks.
 */
export const blockAndMuteDoc: Doc = {
  path: "/resources/help-center/using-musicosy/content-interaction/block-and-mute",
  blocks: [
    {
      type: "paragraph",
      text: "Use Mute when you want less of someone’s content without ending access or contact completely. Use Block when you need stronger boundaries and want MusicOSY to prevent interaction through the blocked relationship.",
    },
    {
      type: "paragraph",
      text: "Both controls are personal to your account. They apply strictly within your Personal Context and cannot be overridden or controlled by a Workspace or organization.",
    },

    { type: "heading", text: "Mute someone" },
    {
      type: "paragraph",
      text: "Muting helps you manage what you see and hear on The Stage and in your feeds without notifying the other member.",
    },
    {
      type: "paragraph",
      text: "You may choose to mute a member when:",
    },
    {
      type: "list",
      items: [
        { text: "You do not want their posts or activity in your experience" },
        { text: "You want a break from their content" },
        { text: "Their Signals (notifications) or Backstage conversations feel distracting" },
        { text: "You want to reduce contact without blocking them" },
        { text: "You want to remain connected without seeing every update" },
      ],
    },
    {
      type: "paragraph",
      text: "To mute an eligible member:",
    },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Open their profile, post, Note (comment), or conversation." },
        { text: "Select the More options menu." },
        { text: "Choose Mute." },
        { text: "Confirm if MusicOSY asks you to." },
      ],
    },
    {
      type: "paragraph",
      text: "Muted content and interactions are handled according to the relevant surface and your settings. For example, a muted profile may be reduced or excluded from your Home, Discover, and Listen experiences; a muted Backstage conversation will stop generating routine notifications.",
    },
    {
      type: "callout",
      variant: "note",
      text: "Muting does not necessarily remove an existing Follow, delete prior messages, Flag the account, prevent every possible interaction, or make the person unable to find you.",
    },

    { type: "heading", text: "Block someone" },
    {
      type: "paragraph",
      text: "Blocking is for stronger safety and contact boundaries.",
    },
    {
      type: "paragraph",
      text: "When you block an eligible member, MusicOSY applies strict block rules to the relationship. The platform’s social, discovery, messaging, and interaction systems will respect your block alongside privacy, moderation, visibility, territory, age, and access rules.",
    },
    {
      type: "paragraph",
      text: "To block an eligible member:",
    },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Open their profile, post, Note, Backstage message, or other supported surface." },
        { text: "Select the More options menu." },
        { text: "Choose Block." },
        { text: "Review the confirmation message." },
        { text: "Confirm the block." },
      ],
    },
    {
      type: "paragraph",
      text: "MusicOSY will immediately stop sending routine engagement Signals involving the blocked relationship.",
    },

    { type: "heading", text: "Block versus mute" },
    {
      type: "table",
      headers: ["Control", "Best for", "What it changes"],
      rows: [
        ["Mute", "Reducing unwanted content, updates, or conversation noise.", "Reduces visibility or routine notifications without necessarily preventing contact."],
        ["Block", "Creating a stronger personal safety boundary.", "Prevents eligible interactions and applies block restrictions across relevant MusicOSY surfaces."],
        ["Flag (Report)", "Flagging content or behavior for Trust & Safety review.", "Sends a concern to the moderation team; it is a separate action from blocking or muting."],
      ],
    },

    { type: "heading", text: "What blocking can affect" },
    {
      type: "paragraph",
      text: "The exact result depends on content visibility, account settings, the product surface, and safety rules. A block will prevent or restrict eligible:",
    },
    {
      type: "list",
      items: [
        { text: "Profile discovery and recommendations on The Stage" },
        { text: "Follows and relationship visibility" },
        { text: "Posts and social interactions" },
        { text: "Notes, replies, mentions, and tags" },
        { text: "Backstage direct messages and message requests" },
        { text: "Invitations and Studio collaboration actions" },
        { text: "Signals connected to the blocked relationship" },
        { text: "Participatory actions such as Resing, Ensemble, Harmony, and Rework" },
      ],
    },
    {
      type: "paragraph",
      text: "A block remains subject to platform-level safety, legal, financial, rights, moderation, and enforcement requirements. For instance, a shared Workspace role cannot override a personal member block, and blocking someone does not erase required financial, legal, or safety transaction records.",
    },

    { type: "heading", text: "Unmute or unblock" },
    {
      type: "paragraph",
      text: "You can change your mind later.",
    },
    {
      type: "paragraph",
      text: "Open the relevant profile, Backstage conversation, or your Safety Settings and choose Unmute or Unblock where available.",
    },
    {
      type: "paragraph",
      text: "Restoring a relationship does not automatically restore an old Follow, deleted messages, prior access, invitations, collaborations, or notification history. Unblocking also does not override the other member’s privacy choices, account restrictions, content controls, or any existing block they may have placed on you.",
    },

    { type: "heading", text: "Block does not replace Flagging" },
    {
      type: "paragraph",
      text: "Block and mute help you control your personal experience. Flagging (Reporting) is for behavior or content that may violate MusicOSY’s Community Guidelines.",
    },
    {
      type: "paragraph",
      text: "Consider Flagging an account or content if you experience or see:",
    },
    {
      type: "list",
      items: [
        { text: "Threats, harassment, bullying, or hateful conduct" },
        { text: "Impersonation" },
        { text: "Sexual exploitation or abuse" },
        { text: "Underage-account concerns" },
        { text: "Copyright or rights infringement" },
        { text: "Spam, scams, fraud, or suspicious account behavior" },
        { text: "Unsafe Live Sessions, posts, Notes, profiles, or Backstage activity" },
      ],
    },
    {
      type: "paragraph",
      text: "You can Flag a post, account, Live Session, Note, or message through the available reporting flow. MusicOSY maintains separate, confidential reporting, moderation, investigation, and appeal processes.",
    },

    { type: "heading", text: "A practical example" },
    {
      type: "list",
      items: [
        { text: "If someone’s posts simply no longer match the music culture you want to see on your feed, Mute them." },
        { text: "If someone repeatedly contacts you, targets you in Notes, attempts to bypass your boundaries, or makes you feel unsafe, Block them—and Flag the behavior if it violates platform rules." },
      ],
    },
  ],
  related: [
    "/resources/help-center/using-musicosy/content-interaction/leave-a-note-and-join-the-conversation",
    "/resources/help-center/using-musicosy/content-interaction/resing-and-pass-the-mic",
    "/support/reports-and-appeals/report-a-post-account-live-comment-dm",
    "/support/account-and-access/account-privacy-and-visibility-settings",
  ],
};
