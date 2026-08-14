import type { Doc } from "./types";

/**
 * "Create an account" — the second doc in Getting Started.
 *
 * Content provided verbatim by the user; structured into blocks. Uses the
 * callout (for the duplicate-account note), table (display name vs handle),
 * and nested-list (optional goals) block kinds.
 */
export const createAnAccountDoc: Doc = {
  path: "/resources/help-center/getting-started/create-an-account",
  blocks: [
    {
      type: "paragraph",
      text: "Creating a MusicOSY account gives you one personal home for discovering music, building your Library, connecting with people, creating work, shopping, attending events, and collaborating with others.",
    },
    {
      type: "paragraph",
      text: "Every person joins MusicOSY as a member. You do not need to decide whether you are a fan, artist, producer, podcaster, manager, or label before you begin. These are activities, public identity labels, workspace roles, and tool-access patterns—not permanent categories that limit what you can do. Your account grows with you as you explore the platform.",
    },

    { type: "heading", text: "Before you begin" },
    {
      type: "paragraph",
      text: "To create an account, you will need:",
    },
    {
      type: "list",
      items: [
        { text: "Access to a valid email address, phone number, or supported sign-in provider" },
        { text: "A display name and a unique handle (username)" },
        { text: "Your date of birth, where required for age eligibility" },
      ],
    },
    {
      type: "paragraph",
      text: "Use information that belongs to you and that you can access later. MusicOSY uses your verified contact information to protect your account, support account recovery, and deliver important security, account, and transactional notices.",
    },
    {
      type: "callout",
      variant: "note",
      title: "Note",
      text: "If you already have a MusicOSY account, use Sign in instead of creating another one. MusicOSY may review, merge, or restrict duplicate accounts to protect members and prevent fraud or misuse.",
    },

    { type: "heading", text: "Create your account" },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Open MusicOSY and select Create account." },
        { text: "Enter your email address, phone number, or choose a supported sign-in provider." },
        { text: "Create your sign-in credentials (password, passkey, or other authentication method)." },
        {
          lead: "Choose your display name.",
          text: "This is the name other members see on your profile and around MusicOSY.",
        },
        {
          lead: "Choose your handle (username).",
          text: "Your handle identifies your public profile and is how other members find, mention, and tag you. Handles must be unique and meet MusicOSY's safety and formatting requirements.",
        },
        { text: "Read and accept the applicable MusicOSY Terms of Use and Privacy Policy." },
        {
          text: "Complete any verification step shown to you. You may be asked to verify your email address, phone number, or another account detail.",
        },
        { text: "Select Continue." },
      ],
    },
    {
      type: "paragraph",
      text: "Your account is now created. MusicOSY will guide you through a short onboarding experience to personalise your first session.",
    },

    { type: "heading", text: "Set up your experience" },
    {
      type: "paragraph",
      text: "After creating your account, MusicOSY will walk you through a few quick steps to tailor the platform to your interests. None of these choices lock you into a permanent role or remove access to any part of the platform.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        {
          lead: "Add a profile photo and bio (optional).",
          text: "You can also do this later from your Profile settings.",
        },
        {
          lead: "Select your favourite genres and music moods.",
          text: "This helps MusicOSY recommend music, creators, and content you are more likely to enjoy.",
        },
        { text: "Select podcast topics or other interests (optional)." },
        {
          lead: "Choose optional goals.",
          text: "You may see options such as:",
          children: [
            { text: "Discover music and creators" },
            { text: "Share my taste and build Setlists (playlists)" },
            { text: "Make music" },
            { text: "Create videos" },
            { text: "Start a podcast" },
            { text: "Stream live" },
            { text: "Sell merchandise or tickets" },
            { text: "Attend events" },
            { text: "Work with artists" },
            { text: "Run a team, label, or organisation" },
          ],
        },
        {
          text: "These goals personalise your onboarding tips and suggested modules. They do not assign a permanent persona, gate your access to creation, or remove any capability from your account.",
        },
        {
          lead: "Follow suggested creators, artists, genres, and topics.",
          text: "This populates your Home feed with content from people and categories you care about.",
        },
        {
          lead: "Enter The Stage.",
          text: "You will land on your MusicOSY Home feed—the same social home every member sees. From here, you can explore music culture, discover creators, interact with posts, and find what is happening across the community.",
        },
      ],
    },

    { type: "heading", text: "One account for everything" },
    {
      type: "paragraph",
      text: "Your MusicOSY account is your single personal identity on the platform. You use the same account to:",
    },
    {
      type: "list",
      items: [
        { text: "Follow artists, creators, podcasts, and communities" },
        { text: "Keep (save) songs, videos, posts, and events to your Library" },
        { text: "Build Setlists (playlists) and organise your Keeps (favourites)" },
        { text: "Love (like), Leave a Note (comment), Resing (repost), Pass the Mic (share), and interact with content" },
        { text: "Press the universal Create button to make posts, upload music, record audio, start a podcast, go live, or build a project—no artist designation required" },
        { text: "Buy music, merchandise, event tickets, and subscriptions" },
        { text: "Attend live sessions and events" },
        { text: "Join a Workspace when you collaborate with a band, label, studio, podcast network, or team" },
      ],
    },
    {
      type: "paragraph",
      text: "You do not need a separate account to access a new part of MusicOSY. Joining a Workspace does not replace your personal profile, Library, follows, messages, purchases, or privacy settings. Your personal context and any Workspace context remain separate.",
    },

    { type: "heading", text: "Display name and handle" },
    {
      type: "paragraph",
      text: "Your display name and handle serve different purposes:",
    },
    {
      type: "table",
      headers: ["Field", "Purpose"],
      rows: [
        [
          "Display name",
          "The name shown on your profile, in feeds, and in many places around MusicOSY. Display names may be non-unique and can be changed subject to policy.",
        ],
        [
          "Handle",
          "Your unique public identifier (for example, @yourname). It defines your profile URL, is used for mentions and tags, and must meet uniqueness, length, character, and safety requirements.",
        ],
      ],
    },
    {
      type: "paragraph",
      text: "You can set up or update both after creating your account. Some changes—especially those involving identity, verification, ownership, payouts, or safety—may require additional confirmation, review, or a cooling period.",
    },

    { type: "heading", text: "What you can do from day one" },
    {
      type: "paragraph",
      text: "From the moment your account is active, you have access to the full social and creative foundation of MusicOSY:",
    },
    {
      type: "list",
      items: [
        { text: "Discover music, creators, podcasts, live sessions, events, and merchandise on The Stage" },
        { text: "Listen continuously to music, podcasts, and audio content" },
        { text: "Keep content to your Library and build Setlists" },
        { text: "Create posts, upload songs, record audio, start a podcast, or go live—basic creation tools are available to every member without requiring an artist designation" },
        { text: "Backstage (direct messages) to connect privately with other members" },
        { text: "Explore My Tools to see your included capabilities and available Toolkits" },
      ],
    },
    {
      type: "paragraph",
      text: "Advanced tools expand as your needs grow. You are never locked out of creating.",
    },

    { type: "heading", text: "Need help?" },
    {
      type: "paragraph",
      text: "If you cannot complete registration, receive a verification issue, or no longer have access to the contact method connected to your account, visit Sign-in help or Contact Us.",
    },
    {
      type: "paragraph",
      text: "If you believe your account was created without your authorisation, contact MusicOSY Support immediately.",
    },
    {
      type: "paragraph",
      text: "For questions about account deletion, deactivation, or data privacy, see Account settings or Privacy and data.",
    },
  ],
  related: [
    "/resources/help-center/getting-started/what-is-musicosy",
    "/resources/help-center/getting-started/sign-in-and-sign-out",
    "/resources/help-center/getting-started/verify-your-email-or-phone-number",
    "/resources/help-center/getting-started/set-up-your-profile",
    "/resources/help-center/getting-started/choose-or-change-your-handle",
    "/resources/help-center/getting-started/understanding-your-toolkits-and-upgrades",
    "/resources/help-center/getting-started/personal-context-versus-workspace-context",
    "/support/account-and-access/account-safety",
    "/resources/help-center/getting-started/delete-or-deactivate-your-account",
  ],
};
