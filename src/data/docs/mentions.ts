import type { Doc } from "./types";

/**
 * "Mentions" — Using MusicOSY → Content Interaction doc.
 *
 * Use a mention to bring another member into an eligible MusicOSY
 * conversation via their @handle. Covers: how to mention someone,
 * the critical distinction between a social Mention and a formal
 * catalog Credit, notifications and privacy (including why a mention
 * might not work), removing a mention of yourself, and mentioning
 * responsibly.
 *
 * Content provided verbatim by the user; structured into blocks.
 */
export const mentionsDoc: Doc = {
  path: "/resources/help-center/using-musicosy/content-interaction/mentions",
  blocks: [
    {
      type: "paragraph",
      text: "Use a mention to bring another member into an eligible MusicOSY conversation.",
    },
    {
      type: "paragraph",
      text: "A mention uses a member’s @handle to create a direct link to their profile within a post on The Stage, a Note (comment), a reply, a caption, or a Backstage message.",
    },
    {
      type: "paragraph",
      text: "Mentions help people find relevant conversations, recognize collaborators socially, share music with friends, and give someone credit in a community context.",
    },

    { type: "heading", text: "How to mention someone" },
    {
      type: "paragraph",
      text: "To mention an eligible member:",
    },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Start writing a post, Note, reply, caption, or Backstage message." },
        { text: "Type the @ symbol." },
        { text: "Begin typing the member’s handle or display name." },
        { text: "Select the correct profile from the suggested results." },
        { text: "Finish your message and post or send it." },
      ],
    },
    {
      type: "paragraph",
      text: "When the mention is active, the @handle becomes a clickable link that takes other members directly to that person’s profile or Artist Page.",
    },
    {
      type: "paragraph",
      text: "Examples:",
    },
    {
      type: "quote",
      text: "@mayariversmusic this sounds like it belongs in your late-night Setlist.",
    },
    {
      type: "quote",
      text: "Shout out to @northsidestudio for the production work on this session.",
    },

    { type: "heading", text: "Mentions vs. Credits" },
    {
      type: "paragraph",
      text: "It is critical to understand the difference between a social mention and a formal catalog credit on MusicOSY.",
    },
    {
      type: "list",
      items: [
        { lead: "Mention:", text: "A social tag used in posts, Notes, and messages to link to a member’s profile." },
        { lead: "Credit:", text: "A formal, canonical metadata record attached to a track, release, or video that establishes creative contribution (e.g., songwriting, production, performance, engineering). Credits are managed in Studio and are tied to rights, royalty splits, and public catalog display." },
      ],
    },
    {
      type: "paragraph",
      text: "Mentioning someone does not create an official credit.",
    },
    {
      type: "table",
      headers: ["Action", "Example", "What it does"],
      rows: [
        ["Mention", "“@samlee this mix is beautiful.”", "Tags Sam’s profile in a social post or Note."],
        ["Credit", "Produced by Sam Lee", "Officially registers Sam in the release metadata, catalog, and Split Sheets."],
      ],
    },
    {
      type: "paragraph",
      text: "A mention does not establish ownership, formal collaboration, Workspace access, rights, royalty splits, or professional representation. If someone worked on your track, you must add them as a collaborator and assign them a formal Credit in Studio, in addition to mentioning them in your release post.",
    },

    { type: "heading", text: "Notifications and privacy" },
    {
      type: "paragraph",
      text: "Depending on their Signal Center preferences and the content’s visibility, a member may receive a notification when they are mentioned.",
    },
    {
      type: "paragraph",
      text: "A mention can help someone:",
    },
    {
      type: "list",
      items: [
        { text: "Find the post or conversation" },
        { text: "See where they were included" },
        { text: "Join the discussion or leave a Note" },
        { text: "Resing or Pass the Mic on the content" },
      ],
    },
    {
      type: "paragraph",
      text: "However, a mention does not require someone to respond. Respect their choice if they do not engage.",
    },

    { type: "heading", text: "Why a mention might not work", level: 3 },
    {
      type: "paragraph",
      text: "You may not be able to mention a member, or they may not appear in the suggestion dropdown, if:",
    },
    {
      type: "list",
      items: [
        { text: "Their profile is set to private or limited discoverability." },
        { text: "Their interaction settings restrict who can mention them." },
        { text: "You or the other member has used Block." },
        { text: "The content does not allow Notes, replies, or mentions." },
        { text: "The profile is restricted by safety, age, territory, or Trust & Safety enforcement rules." },
        { text: "MusicOSY has applied rate limits to prevent spam or automated tagging." },
      ],
    },

    { type: "heading", text: "Remove a mention of yourself" },
    {
      type: "paragraph",
      text: "If someone mentions you in eligible content and you do not want your profile linked to it, you can manage the tag.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Open the post, Note, or caption where you were mentioned." },
        { text: "Select the More menu or the options next to the mention." },
        { text: "Choose Remove mention (or “Untag me”)." },
      ],
    },
    {
      type: "paragraph",
      text: "Removing a mention disconnects your profile from that specific piece of content and stops related notifications. It does not necessarily delete the original post or the text itself, but it removes the active link to your profile. If the content itself is abusive or harassing, use the Flag (Report) tool or Block the user instead.",
    },

    { type: "heading", text: "Mention responsibly" },
    {
      type: "paragraph",
      text: "Only mention people who are genuinely relevant to the conversation or the music being discussed.",
    },
    {
      type: "paragraph",
      text: "Good reasons to mention someone:",
    },
    {
      type: "list",
      items: [
        { text: "Sharing a Fresh Drop or Setlist you know they would enjoy." },
        { text: "Thanking a collaborator, producer, or visual artist in a social post." },
        { text: "Inviting a friend into a relevant conversation on The Stage." },
        { text: "Calling attention to an upcoming Live Session or event they are performing at." },
      ],
    },
    {
      type: "paragraph",
      text: "Do not use mentions to:",
    },
    {
      type: "list",
      items: [
        { text: "Spam or repeatedly tag someone who has not engaged." },
        { text: "Pressure someone into responding or promoting your work." },
        { text: "Direct harassment, pile-ons, or abuse toward a member." },
        { text: "Draw someone into an argument or unsafe situation." },
        { text: "Falsely suggest a collaboration, endorsement, label representation, or professional relationship that does not exist." },
      ],
    },
    {
      type: "paragraph",
      text: "MusicOSY may suppress, remove, or restrict mention privileges when safety, privacy, impersonation, or anti-spam rules are triggered.",
    },
  ],
  related: [
    "/resources/help-center/using-musicosy/content-interaction/leave-a-note-and-join-the-conversation",
    "/resources/help-center/using-musicosy/content-interaction/block-and-mute",
    "/resources/help-center/getting-started/choose-or-change-your-handle",
    "/support/account-and-access/notification-settings",
  ],
};
