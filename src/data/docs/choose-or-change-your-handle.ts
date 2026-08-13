import type { Doc } from "./types";

/**
 * "Choose or change your handle" — the sixth doc in Getting Started.
 *
 * Content provided verbatim by the user; structured into blocks. Uses
 * quote blocks (display name/handle example + handle variation examples),
 * a comparison table, bullet lists with bold lead-ins, and a note callout.
 */
export const chooseOrChangeYourHandleDoc: Doc = {
  path: "/resources/help-center/getting-started/choose-or-change-your-handle",
  blocks: [
    {
      type: "paragraph",
      text: "Your handle is your unique MusicOSY identifier. It begins with @ and helps people find your profile, mention you in posts, tag you in conversations, and share a direct link to your MusicOSY presence.",
    },
    {
      type: "paragraph",
      text: "For example, if your handle is @midnightmelodies, other members can search for you, mention you, and visit your public profile using that handle.",
    },
    {
      type: "paragraph",
      text: "Your handle is part of your public identity, so choose one that feels right for where you are now and where you may be going next.",
    },

    { type: "heading", text: "Your handle and display name" },
    {
      type: "paragraph",
      text: "Your handle and display name serve different purposes.",
    },
    {
      type: "table",
      headers: ["Field", "Purpose"],
      rows: [
        [
          "Handle",
          "Your unique public identifier (for example, @mayariversmusic). It defines your profile URL, is used for mentions and tags, and must be unique across MusicOSY.",
        ],
        [
          "Display name",
          "The name shown on your profile, in feeds, comments, and many places around MusicOSY. Display names do not need to be unique and can be changed more freely.",
        ],
      ],
    },
    {
      type: "paragraph",
      text: "For example:",
    },
    {
      type: "quote",
      text: "Display name: Maya Rivers\nHandle: @mayariversmusic",
    },
    {
      type: "paragraph",
      text: "You can use your personal name, artist name, creative project name, or another name that represents you honestly. Your display name may be different from your handle. You can update your display name without changing your handle, and vice versa.",
    },

    { type: "heading", text: "Choose your handle" },
    {
      type: "paragraph",
      text: "When you create your account or set up your profile, MusicOSY will ask you to choose an available handle.",
    },

    { type: "heading", text: "Tips for choosing a good handle", level: 3 },
    {
      type: "paragraph",
      text: "A good handle is:",
    },
    {
      type: "list",
      items: [
        {
          lead: "Memorable.",
          text: "Easy for people to remember, spell, and type.",
        },
        {
          lead: "Connected to your identity.",
          text: "Reflects your name, artist identity, creative project, or brand.",
        },
        {
          lead: "Consistent.",
          text: "Matches the name you use on other platforms, if available.",
        },
        {
          lead: "Appropriate.",
          text: "Suitable for a public music community.",
        },
        {
          lead: "Flexible.",
          text: "Broad enough to grow with you if your music, interests, or projects evolve.",
        },
      ],
    },
    {
      type: "paragraph",
      text: "If your first choice is unavailable, try a variation that still feels like you. You can add a meaningful word, genre descriptor, location, or creative detail rather than using a random string of numbers.",
    },
    {
      type: "paragraph",
      text: "For example:",
    },
    {
      type: "quote",
      text: "@jordanlee\n@jordanleemusic\n@jordanleestudio\n@jordansings\n@jordanleeofficial",
    },

    { type: "heading", text: "Handle format requirements" },
    {
      type: "paragraph",
      text: "Your handle must meet MusicOSY's formatting rules:",
    },
    {
      type: "list",
      items: [
        { text: "Must begin with @" },
        { text: "Must meet minimum and maximum length requirements" },
        { text: "May use letters, numbers, and limited punctuation (such as periods or underscores)" },
        { text: "Must not consist solely of numbers or generic terms" },
        { text: "Must not contain spaces" },
        { text: "Must not include characters that could break links, mentions, or routing" },
      ],
    },
    {
      type: "paragraph",
      text: "If a handle you want does not meet these requirements, MusicOSY will let you know and suggest available alternatives.",
    },

    { type: "heading", text: "Change your handle" },
    {
      type: "paragraph",
      text: "You can change your handle at any time, subject to availability and any applicable review or cooldown requirements.",
    },

    { type: "heading", text: "How to change your handle", level: 3 },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Open your Profile." },
        { text: "Select Edit profile." },
        { text: "Select your current handle." },
        { text: "Enter the new handle you want to use." },
        { text: "MusicOSY will check whether the handle is available and meets all requirements." },
        { text: "Review the change and its effects before confirming." },
        { text: "Select Save or Confirm." },
      ],
    },

    { type: "heading", text: "What happens after you change your handle", level: 3 },
    {
      type: "list",
      items: [
        { text: "Your public profile URL updates to reflect the new handle." },
        { text: "Your old profile link may redirect to your new profile for a limited period. This helps people who have saved or shared your previous link." },
        { text: "Search results, mentions, and tags will update to use your new handle." },
        { text: "Your profile tabs, catalog, Shop, events, EPK, and other linked content remain connected to your account. Your content is not lost or moved." },
        { text: "Your previous handle becomes unavailable for immediate reuse by other members. MusicOSY does not immediately reassign handles when doing so could create impersonation, fraud, or confusion." },
      ],
    },
    {
      type: "callout",
      variant: "note",
      title: "Note",
      text: "Handle changes are recorded as account-security events. If your account is verified, high-visibility, recently changed, connected to an organization, or subject to identity protections, MusicOSY may require additional verification, review, or a cooldown period before the change takes effect.",
    },

    { type: "heading", text: "Before you change your handle" },
    {
      type: "paragraph",
      text: "Changing your handle can affect how people find and link to you. Before confirming a change, consider updating:",
    },
    {
      type: "list",
      items: [
        { text: "Links in your social-media bios and profiles" },
        { text: "Your artist or creator website" },
        { text: "Link-in-bio pages and smart links" },
        { text: "Press kits, EPKs, and media kits" },
        { text: "Event listings and ticket pages" },
        { text: "Merchandise, printed materials, and business cards" },
        { text: "Links shared with fans, collaborators, labels, managers, or partners" },
        { text: "External distribution metadata where applicable" },
        { text: "Any embedded players or shared content links" },
      ],
    },
    {
      type: "paragraph",
      text: "If you have built recognition around a handle, think carefully before changing it. In many cases, updating your display name is the better option if you only want to refresh how your name appears without changing your public profile link.",
    },

    { type: "heading", text: "Handle rules" },
    {
      type: "paragraph",
      text: "Your handle must be unique within MusicOSY's active public namespace. It must also meet MusicOSY's requirements for length, characters, reserved words, safety, technical routing, and public display.",
    },
    {
      type: "paragraph",
      text: "You cannot use a handle that:",
    },
    {
      type: "list",
      items: [
        { text: "Belongs to another active member" },
        { text: "Impersonates another person, artist, creator, organization, or brand" },
        { text: "Suggests false verification, affiliation, authority, official status, or ownership" },
        { text: "Includes prohibited, deceptive, fraudulent, obscene, or abusive language" },
        { text: "Uses a restricted or reserved name (such as platform terms, support terms, or official designations)" },
        { text: "Creates confusion with an existing account, brand, or public identity" },
        { text: "Misrepresents your relationship to MusicOSY or another entity" },
        { text: "Violates trademark, publicity, or intellectual-property rights" },
      ],
    },

    { type: "heading", text: "Handle availability and reassignment" },
    {
      type: "list",
      items: [
        { text: "A handle that is currently in use by an active account cannot be claimed by another member." },
        { text: "When a member changes their handle, the previous handle may remain unavailable for a defined period to prevent impersonation, fraud, or link confusion." },
        { text: "When an account is deleted, suspended, or subject to enforcement action, the associated handle may remain reserved or restricted. MusicOSY does not immediately reassign handles in these situations." },
        { text: "MusicOSY may reserve certain handles for platform use, safety reasons, brand protection, or operational purposes." },
      ],
    },

    { type: "heading", text: "Handle disputes" },
    {
      type: "paragraph",
      text: "If you believe a handle infringes your rights, impersonates you, or violates MusicOSY's policies, use the Report option on the profile or contact Support. Handle disputes are reviewed under MusicOSY's identity, impersonation, and rights policies.",
    },

    { type: "heading", text: "Why your handle change may be delayed or unavailable" },
    {
      type: "paragraph",
      text: "A handle change may require additional verification, review, or a waiting period before it takes effect. This can happen when:",
    },
    {
      type: "list",
      items: [
        { text: "Your account is verified or has a public badge" },
        { text: "Your account has high visibility or a large following" },
        { text: "Your handle was recently changed" },
        { text: "Your account is connected to an organization, label, or Workspace" },
        { text: "Your account is subject to identity, safety, or security protections" },
        { text: "Your account is under review, restricted, or has pending verification" },
        { text: "The requested handle is flagged for review due to similarity with an existing identity" },
      ],
    },
    {
      type: "paragraph",
      text: "These protections help prevent impersonation, account takeover, and link confusion. If your handle change is delayed, MusicOSY will explain the next steps where permitted.",
    },

    { type: "heading", text: "Handle changes and your content" },
    {
      type: "paragraph",
      text: "Changing your handle does not affect your content, account, or connections:",
    },
    {
      type: "list",
      items: [
        { text: "Your posts, music, videos, podcasts, events, Shop products, and catalog remain intact." },
        { text: "Your followers, subscribers, Keeps, Setlists, Library, and purchases are not affected." },
        { text: "Your Workspace memberships, roles, and collaborations remain unchanged." },
        { text: "Your verification status, if you have one, remains connected to your account." },
        { text: "Your order history, receipts, and financial records are not affected." },
      ],
    },
    {
      type: "paragraph",
      text: "However, external links, embeds, and shared URLs that used your previous handle may need time to update or may stop working after the redirect period ends. Update your links in external materials as soon as possible after a handle change.",
    },
  ],
  related: [
    "/resources/help-center/getting-started/set-up-your-profile",
    "/resources/help-center/getting-started/choose-or-change-your-display-name",
    "/resources/help-center/getting-started/find-people-to-follow",
    "/resources/help-center/getting-started/follow-and-unfollow",
    "/support/account-and-access/account-safety",
    "/support/reports-and-appeals/report-impersonation",
    "/resources/help-center/using-musicosy/creator-studio-and-workspaces/set-up-your-creator-profile-and-artist-page",
    "/resources/help-center/using-musicosy/creator-studio-and-workspaces/build-an-epk-electronic-press-kit",
    "/resources/help-center/getting-started/personal-context-versus-workspace-context",
  ],
};
