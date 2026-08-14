import type { Doc } from "./types";

/**
 * "Start a group conversation" — Using Musicosy → Backstage & Community doc (position 4).
 *
 * Fourth doc in the Backstage & Community sub-section. Covers group messaging
 * in Backstage: creating groups (2 methods), rules for adding members, group
 * roles and permissions, sharing media in groups, managing notifications and
 * muting, and privacy/safety/moderation (blocking, leaving, flagging).
 *
 * Content provided verbatim by the user; structured into blocks.
 */
export const startAGroupConversationDoc: Doc = {
  path: "/resources/help-center/using-musicosy/backstage-and-community/start-a-group-conversation",
  blocks: [
    {
      type: "paragraph",
      text: "On MusicOSY, private group messaging happens in Backstage. A group conversation allows you to connect with multiple members simultaneously, making it perfect for coordinating band practices, sharing new discoveries with close friends, or collaborating on creative projects.",
    },
    {
      type: "paragraph",
      text: "Unlike public comments on The Stage or Crowd Chat in live sessions, Backstage group conversations are strictly private, encrypted, and visible only to the participants.",
    },

    { type: "heading", text: "How to create a group conversation" },
    {
      type: "paragraph",
      text: "You can start a group conversation directly from your Backstage inbox or by adding members to a new chat thread.",
    },

    { type: "heading", text: "From your Backstage inbox", level: 3 },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Open the Backstage tab from the main navigation menu." },
        { text: "Tap the New Message icon (the pencil and paper)." },
        { text: "Search for and select the members you want to include. You can select up to 50 members for a standard group." },
        { text: "Once you have selected at least two members, tap Create Group." },
        { text: "Type your first message and tap Send." },
      ],
    },

    { type: "heading", text: "From an existing one-on-one chat", level: 3 },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Open an existing Backstage conversation with a member." },
        { text: "Tap the group icon (the person with a plus sign) in the top navigation bar." },
        { text: "Search for and select additional members to add." },
        { text: "Tap Add to Conversation." },
        { text: "The existing one-on-one chat will automatically convert into a group conversation." },
      ],
    },
    {
      type: "callout",
      variant: "note",
      text: "When you add someone to a group conversation, they will receive a notification in their Signal Center. They can view the group name, the participants, and the conversation history from the point they were added.",
    },

    { type: "heading", text: "Rules for adding members" },
    {
      type: "paragraph",
      text: "To protect member privacy and prevent unwanted spam, MusicOSY enforces strict rules on who can be added to a group conversation.",
    },
    {
      type: "table",
      headers: ["Requirement", "Details"],
      rows: [
        ["Connection Status", "You can generally add members you Follow, or members who Follow you. If a member has strict privacy settings, you may not be able to add them unless you mutually follow each other."],
        ["Message Intake Settings", "If a member has their Backstage settings configured to \"No new message requests\" or \"Subscribers only,\" you cannot add them to a group unless you meet that criteria."],
        ["Workspace Boundaries", "Personal group conversations are separate from Workspace channels. You cannot add a personal contact to a private Workspace channel unless they are invited to the Workspace itself."],
        ["Notification", "Every added member is notified. They have the right to Leave the group at any time without notifying the rest of the group."],
      ],
    },
    {
      type: "callout",
      variant: "note",
      text: "Adding a member to a group conversation does not grant them access to your personal Library, Keeps, or private listening history. Your privacy boundaries remain fully intact.",
    },

    { type: "heading", text: "Group roles and permissions" },
    {
      type: "paragraph",
      text: "Group conversations have basic administrative roles to help manage the chat and keep the environment safe.",
    },
    {
      type: "table",
      headers: ["Role", "Who holds this role", "Permissions"],
      rows: [
        ["Group Creator / Admin", "The member who created the group.", "Can rename the group, change the group image, add new members, and remove existing members."],
        ["Standard Member", "Any participant added to the group.", "Can send messages, share media, mute notifications, and leave the group."],
      ],
    },

    { type: "heading", text: "Managing group settings", level: 3 },
    {
      type: "paragraph",
      text: "As a Group Creator or Admin, you can manage the group by tapping the group name at the top of the chat:",
    },
    {
      type: "list",
      items: [
        { lead: "Rename Group:", text: "Give your chat a custom name (e.g., \"Studio Session 2026\" or \"Tour Planning\")." },
        { lead: "Change Group Image:", text: "Upload a custom cover image for the chat thread." },
        { lead: "Remove a Member:", text: "Select a member's profile card within the group settings and tap Remove from Group. The member will be removed from the chat, but the existing message history will remain visible to the rest of the group." },
      ],
    },

    { type: "heading", text: "Sharing music and media in groups" },
    {
      type: "paragraph",
      text: "Backstage group conversations support rich media sharing. You can use the Pass the Mic (share) button from anywhere on the platform to send content to your group.",
    },
    {
      type: "table",
      headers: ["Media Type", "How it appears in the group"],
      rows: [
        ["Tracks, Albums, and Episodes", "Displays as a playable preview card. Members can tap to listen directly in the Listen environment."],
        ["Setlists and Crates", "Displays as a collection card. Members can tap to view, play, or Keep the collection."],
        ["Images and Voice Notes", "Displays inline within the chat thread."],
        ["Event Tickets and Merch", "Displays as a secure commerce card with a direct link to the Creator Shop or Ticketing page."],
      ],
    },
    {
      type: "callout",
      variant: "note",
      text: "Entitlement rules still apply in group conversations. If you share a subscriber-only track or a paid release into a group, members who do not have the required subscription or purchase will see the media card, but it will remain locked and unplayable for them.",
    },

    { type: "heading", text: "Managing notifications and muting" },
    {
      type: "paragraph",
      text: "Group conversations can be active, and you may not want notifications for every single message.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Open the group conversation." },
        { text: "Tap the group name or the Mute icon (the crossed-out bell) in the top navigation bar." },
        { text: "Choose your preferred mute duration (e.g., 1 hour, 24 hours, or Until I turn it back on)." },
      ],
    },
    {
      type: "callout",
      variant: "note",
      text: "Muting a group conversation stops push notifications and badge counts, but you will still see new messages when you open your Backstage inbox.",
    },

    { type: "heading", text: "Privacy, safety, and moderation" },
    {
      type: "paragraph",
      text: "Your safety is paramount in group interactions. MusicOSY provides tools to handle harassment, spam, or uncomfortable situations within a group setting.",
    },

    { type: "heading", text: "Blocking a member in a group", level: 3 },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Tap their profile card within the group chat." },
        { text: "Select Block." },
      ],
    },
    {
      type: "list",
      items: [
        { lead: "The Result:", text: "You will no longer see their new messages in the group, and they cannot send you direct one-on-one messages. They will remain in the group for other participants unless a Group Admin removes them." },
      ],
    },

    { type: "heading", text: "Leaving a group", level: 3 },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Tap the group name at the top of the chat." },
        { text: "Select Leave Group." },
      ],
    },
    {
      type: "list",
      items: [
        { lead: "The Result:", text: "You will be removed from the participant list. The group will remain in your Backstage inbox as an archived, read-only thread unless you choose to Delete it." },
      ],
    },

    { type: "heading", text: "Flagging (Reporting) a group", level: 3 },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Tap the group name." },
        { text: "Select Flag Group (or Report Group)." },
        { text: "Select the reason for the report." },
      ],
    },
    {
      type: "list",
      items: [
        { lead: "The Result:", text: "The MusicOSY Trust & Safety team will review the group's activity confidentially. The participants will not be notified that you flagged the group." },
      ],
    },
  ],
  related: [
    "/resources/help-center/using-musicosy/backstage-and-community/send-a-message",
    "/resources/help-center/using-musicosy/backstage-and-community/manage-message-requests",
    "/resources/help-center/using-musicosy/backstage-and-community/share-content-in-backstage",
    "/resources/help-center/using-musicosy/content-interaction/block-and-mute",
    "/support/account-and-access/account-privacy-and-visibility-settings",
    "/resources/help-center/using-musicosy/creator-studio-and-workspaces/create-or-join-a-workspace",
  ],
};
