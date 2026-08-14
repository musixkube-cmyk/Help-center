import type { Doc } from "./types";

/**
 * "Manage message requests" — Using Musicosy → Backstage & Community doc (position 3).
 *
 * Third doc in the Backstage & Community sub-section. Covers the Message
 * Requests privacy shield: how requests work, the four management actions
 * (Accept / Delete / Block / Flag), attachment and link safety, configuring
 * message intake settings, handling abuse, and FAQs.
 *
 * Content provided verbatim by the user; structured into blocks.
 */
export const manageMessageRequestsDoc: Doc = {
  path: "/resources/help-center/using-musicosy/backstage-and-community/manage-message-requests",
  blocks: [
    {
      type: "paragraph",
      text: "On MusicOSY, private direct messaging happens in Backstage. To protect our community from spam, harassment, and unwanted contact, messages from members you do not follow—or who do not meet your specific communication criteria—are automatically routed to your Message Requests folder.",
    },
    {
      type: "paragraph",
      text: "Message Requests act as a secure privacy shield. They allow you to review who is trying to contact you without exposing your activity, presence, or personal data to the sender.",
    },

    { type: "heading", text: "The Privacy Shield: How Message Requests Work" },
    {
      type: "paragraph",
      text: "When a member sends you a message and they are not on your approved communication list, the platform intercepts it and places it in your Message Requests.",
    },
    {
      type: "paragraph",
      text: "To ensure your safety and privacy, MusicOSY enforces strict boundaries on these requests:",
    },
    {
      type: "table",
      headers: ["What happens in a Message Request", "What is strictly prevented"],
      rows: [
        ["You can see the sender's public profile name and a preview of their text message.", "The sender cannot see if you have opened or read the message (Read Receipts are disabled)."],
        ["You can choose to Accept, Delete, Block, or Flag the request.", "The sender cannot see your active status, typing indicators, or last-active time."],
        ["You can view the sender's public Artist Page or Profile.", "The sender cannot view your private Library, Keeps, personal listening history, or private Workspace data."],
        ["You remain completely anonymous regarding your interaction with the request.", "The sender is not notified if you delete, ignore, or Flag the request."],
      ],
    },
    {
      type: "callout",
      variant: "note",
      text: "Opening a Message Request to read the text does not accept the conversation. The sender will not know you have seen it unless you explicitly tap Accept.",
    },

    { type: "heading", text: "Managing Your Message Requests" },
    {
      type: "paragraph",
      text: "You can access your Message Requests by opening your Backstage inbox and tapping the Requests tab at the top of the screen. From there, you have full control over how to handle the sender.",
    },

    { type: "heading", text: "1. Accept", level: 3 },
    {
      type: "list",
      items: [
        { lead: "What it does:", text: "Moves the conversation to your Primary Backstage inbox." },
        { lead: "The result:", text: "The sender is notified that you accepted. Read receipts and typing indicators (if enabled in your settings) will now function. Full attachment and link-sharing capabilities are unlocked for both parties." },
        { lead: "Note:", text: "Accepting a message request does not mean you Follow the person, grant them access to your private content, or subscribe to them. It only opens a Backstage chat." },
      ],
    },

    { type: "heading", text: "2. Delete (Decline)", level: 3 },
    {
      type: "list",
      items: [
        { lead: "What it does:", text: "Permanently removes the message request from your inbox." },
        { lead: "The result:", text: "The conversation is deleted. The sender is not notified that you deleted it. If they attempt to message you again, it will generate a new request (unless your intake settings or blocks prevent it)." },
      ],
    },

    { type: "heading", text: "3. Block", level: 3 },
    {
      type: "list",
      items: [
        { lead: "What it does:", text: "Creates an immediate, mutual safety boundary between you and the sender." },
        { lead: "The result:", text: "The sender can no longer message you, follow you, view your private activity, or interact with your content on The Stage. The conversation is removed from your inbox. The sender is not notified that they have been blocked, but they will notice they can no longer interact with your profile." },
      ],
    },

    { type: "heading", text: "4. Flag (Report)", level: 3 },
    {
      type: "list",
      items: [
        { lead: "What it does:", text: "Sends the message and the sender's profile to the MusicOSY Trust & Safety team for review against our Community Guidelines." },
        { lead: "The result:", text: "You can choose to Flag the message for spam, harassment, inappropriate content, or impersonation. The sender is not notified that you flagged them. The Trust & Safety team will review the case confidentially and take appropriate enforcement action if a violation is found." },
      ],
    },

    { type: "heading", text: "Attachment and Link Safety" },
    {
      type: "paragraph",
      text: "Message Requests are a common vector for spam and phishing. To protect you, MusicOSY restricts certain media types until a conversation is mutually accepted.",
    },
    {
      type: "list",
      items: [
        { lead: "Restricted Attachments:", text: "Images, voice memos, and video clips from unapproved senders are often blurred or hidden until you accept the request." },
        { lead: "Link Safety:", text: "External links sent in Message Requests are scanned by our safety systems. If a link is known to be malicious, phishing, or violates platform policies, it will be disabled and marked as unsafe." },
        { lead: "Catalog and Commerce Sharing:", text: "If a sender tries to share a Setlist, Crate, or Creator Shop product in a request, you will see a safe preview card. However, you cannot interact with the embedded player or checkout flow until you accept the chat." },
      ],
    },

    { type: "heading", text: "Configuring Your Message Intake Settings" },
    {
      type: "paragraph",
      text: "You control who is allowed to bypass the Message Requests folder and land directly in your Primary Backstage inbox.",
    },
    {
      type: "paragraph",
      text: "To adjust your settings:",
    },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Navigate to Settings > Privacy and Safety > Backstage." },
        { text: "Locate Message Intake or Allow Messages From." },
        { text: "Choose your preferred boundary:" },
      ],
    },
    {
      type: "table",
      headers: ["Intake Setting", "Who goes to your Primary Inbox", "Who goes to Message Requests"],
      rows: [
        ["Everyone", "All members (subject to platform safety filters).", "None (unless blocked/muted)."],
        ["Followers Only", "Members who follow you.", "Anyone you do not follow."],
        ["Mutual Follows", "Members you follow and who follow you back.", "Anyone you do not mutually follow."],
        ["Subscribers Only", "Members who have joined your Circle (paid subscribers).", "Non-subscribers and non-followers."],
        ["No One", "No one.", "All incoming messages are blocked or sent to hidden requests."],
      ],
    },
    {
      type: "callout",
      variant: "note",
      text: "Workspace contexts have separate messaging rules. If you are operating in a Workspace Context (e.g., a Label or Management team), messages from your team members regarding shared projects will route to your Workspace inbox, not your personal Message Requests.",
    },

    { type: "heading", text: "Handling Abuse and Repeat Offenders" },
    {
      type: "paragraph",
      text: "MusicOSY's Trust & Safety systems actively monitor for abuse. If a sender is repeatedly trying to contact you after you have deleted their requests, or if they are using multiple accounts to bypass your boundaries:",
    },
    {
      type: "list",
      ordered: true,
      items: [
        { lead: "Always Block and Flag:", text: "Do not just delete the request. Use the Block and Flag actions. This feeds our anti-harassment algorithms and helps the Trust & Safety team identify coordinated abuse or bot networks." },
        { lead: "Rate Limiting:", text: "The platform automatically rate-limits unverified or newly created accounts from sending bulk message requests." },
        { lead: "Hidden Requests:", text: "Messages that our automated safety systems detect as highly likely to be spam, scams, or severe abuse are automatically routed to a Hidden Requests folder. These are kept away from your standard inbox to prevent exposure to harmful content, but are retained as evidence for Trust & Safety investigations." },
      ],
    },

    { type: "heading", text: "Frequently Asked Questions" },

    { type: "heading", text: "If I accept a message request, does the sender see my personal Library?", level: 3 },
    {
      type: "paragraph",
      text: "No. Backstage messaging is strictly for communication. Accepting a chat does not grant the sender access to your Keeps, Setlists, listening history, or private drafts.",
    },

    { type: "heading", text: "Can I turn off Message Requests entirely?", level: 3 },
    {
      type: "paragraph",
      text: "Yes. In your Privacy and Safety settings, you can set your Message Intake to No One. This will prevent anyone from sending you a direct message or a message request. This will not prevent MusicOSY from sending you required transactional, security, or Trust & Safety signals.",
    },

    { type: "heading", text: "Why did a message request disappear on its own?", level: 3 },
    {
      type: "paragraph",
      text: "If a message request disappears, it is usually because the sender deleted their account, the sender blocked you, or the MusicOSY Trust & Safety team removed the sender's account for violating Community Guidelines.",
    },

    { type: "heading", text: "Can I recover a deleted message request?", level: 3 },
    {
      type: "paragraph",
      text: "No. Once you delete a message request, it is permanently removed from your Backstage inbox to protect your privacy and keep your interface clean.",
    },
  ],
  related: [
    "/resources/help-center/using-musicosy/backstage-and-community/send-a-message",
    "/resources/help-center/using-musicosy/backstage-and-community/what-is-backstage",
    "/resources/help-center/using-musicosy/content-interaction/block-and-mute",
    "/support/account-and-access/account-privacy-and-visibility-settings",
    "/support/reports-and-appeals/report-a-profile",
    "/resources/help-center/using-musicosy/backstage-and-community/start-a-group-conversation",
    "/resources/help-center/using-musicosy/backstage-and-community/share-content-in-backstage",
  ],
};
