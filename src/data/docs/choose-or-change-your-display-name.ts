import type { Doc } from "./types";

/**
 * "Choose or change your display name" — the doc that explains the
 * member-facing display name on MusicOSY.
 *
 * Content provided verbatim by the user; structured into blocks. Uses a
 * comparison table (display name vs. handle), a quote block for the example,
 * two note callouts, a bold-lead-in bullet list for tips, and numbered steps.
 */
export const chooseOrChangeYourDisplayNameDoc: Doc = {
  path: "/resources/help-center/getting-started/choose-or-change-your-display-name",
  blocks: [
    {
      type: "paragraph",
      text: "Your display name is the name people see on your profile, in feeds, in comments, on The Stage, and in many other places around MusicOSY. It is how other members recognize you.",
    },
    {
      type: "paragraph",
      text: "Your display name can be your real name, your artist name, a creative project name, a nickname, or any other name that represents you honestly. You can change it as your identity, music, or interests evolve.",
    },

    { type: "heading", text: "Your display name and handle" },
    {
      type: "paragraph",
      text: "Your display name and handle serve different purposes.",
    },
    {
      type: "table",
      headers: ["Field", "Purpose"],
      rows: [
        [
          "Display name",
          "The name shown on your profile, in feeds, comments, and many places around MusicOSY. Display names do not need to be unique.",
        ],
        [
          "Handle",
          "Your unique public identifier (for example, @mayariversmusic). It defines your profile URL and is used for mentions and tags.",
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
      text: "You can change your display name without changing your handle, and vice versa. Changing your display name does not affect your profile URL, your mentions, or how people find you through your handle.",
    },
    {
      type: "paragraph",
      text: "If you want to change your public profile link or how people tag and mention you, see Choose or change your handle.",
    },

    { type: "heading", text: "Choose your display name" },
    {
      type: "paragraph",
      text: "When you create your account or set up your profile, MusicOSY will ask you to choose a display name.",
    },

    { type: "heading", text: "Tips for choosing a display name", level: 3 },
    {
      type: "paragraph",
      text: "A good display name is:",
    },
    {
      type: "list",
      items: [
        {
          lead: "Recognisable.",
          text: "Easy for people to identify you by.",
        },
        {
          lead: "Honest.",
          text: "Represents you, your music, or your creative identity accurately.",
        },
        {
          lead: "Flexible.",
          text: "Broad enough to grow with you if your music, interests, or projects evolve.",
        },
        {
          lead: "Appropriate.",
          text: "Suitable for a public music community.",
        },
      ],
    },
    {
      type: "paragraph",
      text: "You can use:",
    },
    {
      type: "list",
      items: [
        { text: "Your personal name" },
        { text: "Your artist or stage name" },
        { text: "A creative project or band name" },
        { text: "A nickname or alias" },
        { text: "A combination of the above" },
      ],
    },
    {
      type: "paragraph",
      text: "Your display name does not need to match your handle. Many members use a more formal or complete display name and a shorter or stylised handle.",
    },

    { type: "heading", text: "Change your display name" },
    {
      type: "paragraph",
      text: "You can change your display name at any time, subject to validation and any applicable cooldown or review requirements.",
    },

    { type: "heading", text: "How to change your display name", level: 3 },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Open your Profile." },
        { text: "Select Edit profile." },
        { text: "Select your current display name." },
        { text: "Enter the new display name you want to use." },
        { text: "MusicOSY will check that the name meets all requirements." },
        { text: "Review the change and its effects before confirming." },
        { text: "Select Save or Confirm." },
      ],
    },

    { type: "heading", text: "What happens after you change your display name", level: 3 },
    {
      type: "list",
      items: [
        {
          text: "Your new display name will appear on your profile, in feeds, in comments, and in other places where your name is shown.",
        },
        { text: "Your handle, profile URL, and mentions remain unchanged." },
        {
          text: "Your followers, Keeps, Setlists, Library, purchases, and all other account data remain intact.",
        },
        {
          text: "Your content, posts, music, videos, podcasts, events, and Shop products remain connected to your account.",
        },
        {
          text: "Previous display names are not publicly shown unless you choose to share them. MusicOSY may retain prior display names in internal records for security, safety, and audit purposes.",
        },
      ],
    },
    {
      type: "callout",
      variant: "note",
      title: "Note",
      text: "Display name changes may be subject to a short cooldown. If you recently changed your display name, you may need to wait before changing it again.",
    },

    { type: "heading", text: "Display name rules" },
    {
      type: "paragraph",
      text: "Your display name must meet MusicOSY's safety, accuracy, and community standards.",
    },
    {
      type: "paragraph",
      text: "You cannot use a display name that:",
    },
    {
      type: "list",
      items: [
        { text: "Impersonates another person, artist, creator, organisation, or brand" },
        { text: "Falsely implies affiliation with MusicOSY, a label, a venue, a government body, or another organisation" },
        { text: "Falsely implies verification, official status, or public authority" },
        { text: "Includes prohibited, deceptive, fraudulent, obscene, or abusive language" },
        { text: "Misrepresents your relationship to another person or entity" },
        { text: "Violates trademark, publicity, or intellectual-property rights" },
        { text: "Is designed to confuse, deceive, or mislead other members" },
      ],
    },

    { type: "heading", text: "Display name requirements" },
    {
      type: "list",
      items: [
        { text: "Display names do not need to be unique. Multiple members can use the same display name." },
        { text: "Display names must meet minimum and maximum length requirements." },
        { text: "Display names may use letters, numbers, spaces, and limited punctuation." },
        { text: "Display names are subject to moderation, impersonation, fraud, child-safety, and rights review." },
      ],
    },

    { type: "heading", text: "Display names and verification" },
    {
      type: "paragraph",
      text: "A display name does not affect your verification status. If you have a verification badge, changing your display name does not remove it, provided your identity remains consistent with your verified profile.",
    },
    {
      type: "paragraph",
      text: "However, if your display name change creates a significant mismatch with your verified identity, MusicOSY may review your verification status.",
    },

    { type: "heading", text: "Why your display name change may be delayed or unavailable" },
    {
      type: "paragraph",
      text: "A display name change may require additional confirmation, review, or a waiting period before it takes effect. This can happen when:",
    },
    {
      type: "list",
      items: [
        { text: "Your account is verified or has a public badge" },
        { text: "Your account has high visibility or a large following" },
        { text: "Your display name was recently changed" },
        { text: "Your account is connected to an organisation, label, or Workspace" },
        { text: "Your account is subject to identity, safety, or security protections" },
        { text: "Your account is under review, restricted, or has pending verification" },
        { text: "The requested display name is flagged for review due to similarity with an existing identity, brand, or public figure" },
      ],
    },
    {
      type: "paragraph",
      text: "These protections help prevent impersonation, confusion, and deceptive identity changes. If your display name change is delayed, MusicOSY will explain the next steps where permitted.",
    },

    { type: "heading", text: "Display name changes and your content" },
    {
      type: "paragraph",
      text: "Changing your display name does not affect your content, account, or connections:",
    },
    {
      type: "list",
      items: [
        { text: "Your posts, music, videos, podcasts, events, Shop products, and catalog remain intact." },
        { text: "Your followers, subscribers, Keeps, Setlists, Library, and purchases are not affected." },
        { text: "Your Workspace memberships, roles, and collaborations remain unchanged." },
        { text: "Your verification status, if you have one, remains connected to your account." },
        { text: "Your order history, receipts, and financial records are not affected." },
        { text: "Your handle and profile URL remain unchanged." },
      ],
    },
    {
      type: "paragraph",
      text: "However, if your display name appears in external materials such as press kits, websites, event listings, or promotional content, you may want to update those materials to reflect your new name.",
    },

    { type: "heading", text: "Display names in Workspaces" },
    {
      type: "paragraph",
      text: "Your personal display name is separate from any Workspace identity.",
    },
    {
      type: "paragraph",
      text: "If you belong to a Workspace (such as a band, label, studio, podcast network, or organisation), your role and identity within that Workspace are governed by the Workspace's settings and do not change your personal display name.",
    },
    {
      type: "paragraph",
      text: "Switching between your Personal Context and a Workspace Context does not change your display name. Your personal display name remains yours regardless of which Workspace you are working in.",
    },

    { type: "heading", text: "Keep your display name current" },
    {
      type: "paragraph",
      text: "Update your display name when:",
    },
    {
      type: "list",
      items: [
        { text: "You change your artist or stage name" },
        { text: "You start a new creative project or era" },
        { text: "You want to better represent your music or identity" },
        { text: "You correct a typo or error" },
        { text: "Your personal or professional name changes" },
      ],
    },
    {
      type: "paragraph",
      text: "Your display name is one of the first things people see. Keeping it current helps fans, collaborators, and industry partners recognise and connect with you.",
    },
  ],
  related: [
    "/resources/help-center/getting-started/set-up-your-profile",
    "/resources/help-center/getting-started/choose-or-change-your-handle",
    "/resources/help-center/getting-started/find-people-to-follow",
    "/resources/help-center/getting-started/follow-and-unfollow",
    "/support/account-and-access/account-safety",
    "/support/reports-and-appeals/report-impersonation",
    "/resources/help-center/using-musicosy/creator-studio-and-workspaces/set-up-your-creator-profile-and-artist-page",
    "/resources/help-center/getting-started/personal-context-versus-workspace-context",
    "/resources/help-center/using-musicosy/creator-studio-and-workspaces/verification-on-musicosy",
  ],
};
