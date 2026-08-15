import type { Doc } from "./types";

/**
 * "Send a message" — Using Musicosy → Backstage & Community doc (position 2).
 *
 * Second doc in the Backstage & Community sub-section. Covers private direct
 * messaging in Backstage: starting conversations (profile + inbox), shareable
 * media types, Pass the Mic sharing, Message Requests and the tiered inbox,
 * group conversations, and privacy/safety controls.
 *
 * Content provided verbatim by the user; structured into blocks.
 */
export const sendMessageDoc: Doc = {
  path: "/resources/help-center/using-musicosy/backstage-and-community/send-a-message",
  blocks: [
    {
      type: "paragraph",
      text: "On MusicOSY, private direct messaging happens in Backstage. Backstage is your secure, private environment for communicating with other members, creators, and collaborators. Whether you are sharing a new Setlist with a friend, negotiating a collaboration with a producer, or contacting a creator, Backstage keeps your conversations completely separate from the public social feed on The Stage.",
    },
    {
      type: "paragraph",
      text: "This guide explains how to start conversations, share media, and manage your privacy within your Backstage inbox.",
    },

    { type: "heading", text: "How to start a conversation" },
    {
      type: "paragraph",
      text: "You can initiate a private message from almost anywhere on the platform.",
    },

    { type: "heading", text: "From a member or creator profile", level: 3 },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Navigate to the profile of the person you want to contact." },
        { text: "Tap the Message icon (the speech bubble) located near their profile header." },
        { text: "Type your message in the text field." },
        { text: "Tap Send." },
      ],
    },

    { type: "heading", text: "From your Backstage inbox", level: 3 },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Open the Backstage tab from the main navigation menu." },
        { text: "Tap the New Message icon (the pencil and paper)." },
        { text: "Search for the member or creator by their username." },
        { text: "Select their name to open a new chat thread." },
        { text: "Type your message and tap Send." },
      ],
    },
    {
      type: "callout",
      variant: "note",
      text: "If you are messaging a creator or a member who does not follow you, your message will be routed to their Message Requests folder. They will not receive a push notification until they approve your request.",
    },

    { type: "heading", text: "What you can send in Backstage" },
    {
      type: "paragraph",
      text: "Backstage is designed to be a rich multimedia communication hub. You can share much more than just plain text.",
    },
    {
      type: "table",
      headers: ["Media Type", "Description"],
      rows: [
        ["Text", "Standard text messages with support for emojis and links."],
        ["Audio Clips", "Record and send voice notes directly from the mobile app."],
        ["Images and Videos", "Share photos or short video clips from your device gallery."],
        ["Catalog Media", "Share individual songs, albums, music videos, or podcast episodes."],
        ["Collections", "Share your personal Setlists and Crates."],
        ["Commerce", "Share links to merchandise, event tickets, or digital products."],
        ["Profiles", "Share the profile card of another creator or member."],
      ],
    },
    {
      type: "callout",
      variant: "note",
      text: "When you share a Setlist, Crate, or subscriber-only track in Backstage, the recipient must still meet the standard access and entitlement requirements to view or play the media. Sharing a link does not bypass paywalls or territory restrictions.",
    },

    { type: "heading", text: "Sharing media using \"Pass the Mic\"" },
    {
      type: "paragraph",
      text: "You do not need to copy and paste links to share music or collections in Backstage. You can use the Pass the Mic (share) button found on almost every item on MusicOSY.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Find the song, video, Setlist, or product you want to share." },
        { text: "Tap the Pass the Mic icon." },
        { text: "Select Backstage from the sharing menu." },
        { text: "Choose an existing conversation from your recent list or search for a new recipient." },
        { text: "Add an optional caption and tap Send." },
      ],
    },
    {
      type: "paragraph",
      text: "The recipient will receive a rich, interactive card that allows them to play the media or view the collection directly within the chat interface.",
    },

    { type: "heading", text: "Message Requests and Privacy" },
    {
      type: "paragraph",
      text: "To protect our community from spam and unwanted contact, MusicOSY uses a tiered inbox system based on your relationship with the sender.",
    },
    {
      type: "table",
      headers: ["Inbox Folder", "What Goes Here"],
      rows: [
        ["Primary", "Messages from members you follow, verified creators, and your Workspace collaborators."],
        ["Requests", "Messages from members you do not follow. The sender is not notified that you have seen the message until you accept the request."],
        ["Hidden Requests", "Messages that have been filtered by our automated safety systems for potentially containing spam or inappropriate content."],
      ],
    },

    { type: "heading", text: "Managing a Message Request", level: 3 },
    {
      type: "paragraph",
      text: "When you open a Message Request, you have three options:",
    },
    {
      type: "list",
      items: [
        { lead: "Accept:", text: "Moves the conversation to your Primary inbox and allows the sender to see your read receipts." },
        { lead: "Delete:", text: "Removes the conversation permanently. The sender is not notified." },
        { lead: "Block:", text: "Blocks the user from contacting you again and reports the interaction to our Trust and Safety team if necessary." },
      ],
    },
    {
      type: "callout",
      variant: "warning",
      text: "Do not click on external links or download files from unverified Message Requests. MusicOSY will never ask for your password or payment information via Backstage.",
    },

    { type: "heading", text: "Group conversations" },
    {
      type: "paragraph",
      text: "Backstage supports group messaging for bandmates, production teams, and friend groups.",
    },

    { type: "heading", text: "Creating a group", level: 3 },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Open Backstage and tap New Message." },
        { text: "Select multiple members from your search results." },
        { text: "Tap Create Group." },
        { text: "Name the group (optional) and send your first message." },
      ],
    },

    { type: "heading", text: "Group limits and permissions", level: 3 },
    {
      type: "table",
      headers: ["Feature", "Details"],
      rows: [
        ["Maximum Members", "Standard groups support up to 50 members. Workspace channels support larger team rosters."],
        ["Adding Members", "Any member currently in the group can add new participants."],
        ["Removing Members", "Only the group creator or designated Group Admins can remove participants."],
        ["Leaving a Group", "Any member can leave the group at any time via the group settings menu."],
      ],
    },
    {
      type: "callout",
      variant: "note",
      text: "If you share a private Setlist into a group conversation, all members of the group can view the Setlist. Ensure you are comfortable with everyone in the group having access to the shared media.",
    },

    { type: "heading", text: "Privacy and Safety controls" },
    {
      type: "paragraph",
      text: "You have complete control over who can contact you and how your activity is displayed in Backstage. Navigate to Settings > Privacy and Safety > Backstage to configure your preferences.",
    },
    {
      type: "table",
      headers: ["Setting", "Description"],
      rows: [
        ["Allow Messages From", "Choose who can send you direct messages (Everyone, Followers Only, or No One)."],
        ["Read Receipts", "Toggle whether other members can see when you have read their messages."],
        ["Typing Indicators", "Toggle whether other members can see when you are actively typing a reply."],
        ["Media Auto-Download", "Choose whether images and voice notes download automatically on cellular data or Wi-Fi only."],
      ],
    },

    { type: "heading", text: "Blocking and Reporting", level: 3 },
    {
      type: "paragraph",
      text: "If a member is harassing you or violating community guidelines:",
    },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Open the conversation with the user." },
        { text: "Tap their name at the top of the screen to open their profile card." },
        { text: "Select Block to immediately stop all communication." },
        { text: "Select Report to flag the conversation for review by the MusicOSY Trust and Safety team." },
      ],
    },
    {
      type: "callout",
      variant: "note",
      text: "Blocking a member removes your existing conversation history with them from your inbox. If you unblock them later, the previous chat history will not be restored.",
    },
  ],
  related: [
    "/resources/help-center/using-musicosy/backstage-and-community/what-is-backstage",
    "/resources/help-center/using-musicosy/backstage-and-community/manage-message-requests",
    "/resources/help-center/using-musicosy/content-interaction/block-and-mute",
    "/resources/help-center/using-musicosy/backstage-and-community/share-content-in-backstage",
    "/support/reports-and-appeals/report-a-post-account-live-comment-dm",
  ],
};
