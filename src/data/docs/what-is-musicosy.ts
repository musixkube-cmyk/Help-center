import type { Doc } from "./types";

/**
 * "What is MusicOSY?" — the first doc in Getting Started.
 *
 * Content provided verbatim by the user; structured into blocks so the
 * DocContent renderer can lay it out consistently with the rest of the
 * Help Center.
 */
export const whatIsMusicosyDoc: Doc = {
  path: "/resources/help-center/getting-started/what-is-musicosy",
  blocks: [
    {
      type: "paragraph",
      text: "Welcome to MusicOSY. We are a social music platform built for discovering, listening, creating, performing, shopping, and building a career in music culture.",
    },
    {
      type: "paragraph",
      text: 'Whether you are here to follow your favorite artists, curate the perfect playlist, or release your own music, you belong here. On MusicOSY, everyone joins as a member. You never have to choose between being a "fan" or an "artist"—your account simply grows with you as you explore.',
    },

    { type: "heading", text: "One account for everything you do" },
    {
      type: "paragraph",
      text: "You use a single MusicOSY account for your entire journey. You do not need separate logins for listening, creating, buying merch, or managing a team.",
    },
    {
      type: "list",
      items: [
        { text: "A listener can upload a song idea." },
        { text: "A producer can buy concert tickets and follow new talent." },
        { text: "A label manager can release music and run ad campaigns." },
        { text: "An artist can listen, comment, and shop just like anyone else." },
      ],
    },
    {
      type: "paragraph",
      text: "Your personal profile is your home base. If you work with a band, label, or podcast network, you can seamlessly switch into a shared Workspace to collaborate on projects, manage finances, or plan tours, all without losing your personal Library or follows.",
    },

    { type: "heading", text: "What you can do" },
    {
      type: "paragraph",
      text: "MusicOSY brings the entire music ecosystem into one place. Depending on your interests, you can:",
    },
    {
      type: "list",
      items: [
        {
          lead: "Discover culture:",
          text: "Scroll The Stage (our main social feed) to see what creators are posting, sharing, and releasing right now.",
        },
        {
          lead: "Listen continuously:",
          text: "Head to Listen for uninterrupted, audio-first playback of albums, podcasts, and radio.",
        },
        {
          lead: "Build your collection:",
          text: "Keep (save) tracks, videos, and posts to your Library, and organize them into custom Setlists (playlists).",
        },
        {
          lead: "Connect and interact:",
          text: "Follow creators, Love tracks, Leave a Note (comment), and chat privately with other members in Backstage.",
        },
        {
          lead: "Create and release:",
          text: "Hit the universal Create button to upload a song, record a podcast, start a live stream, or design merchandise.",
        },
        {
          lead: "Support and shop:",
          text: "Buy vinyl, claim concert tickets, tip creators via their Love Jar, or join exclusive fan clubs.",
        },
      ],
    },

    { type: "heading", text: "Tools that grow with your music" },
    {
      type: "paragraph",
      text: 'We believe music creation should never be locked behind a paywall. Every member has access to basic creation tools the moment they sign up. You do not need to "apply" to be an artist.',
    },
    {
      type: "paragraph",
      text: "As your needs grow, so do your tools. Instead of forcing you into a rigid user category, MusicOSY offers Toolkits that you can unlock or upgrade when you need them:",
    },
    {
      type: "list",
      items: [
        {
          lead: "Need advanced studio effects, stem separation, or more AI credits?",
          text: "Open the Production Toolkit.",
        },
        {
          lead: "Selling merch, tickets, or subscriptions?",
          text: "Open the Creator Business Toolkit.",
        },
        {
          lead: "Managing a band's royalties, splits, and distribution?",
          text: "Open the Catalog & Rights Toolkit.",
        },
      ],
    },
    {
      type: "paragraph",
      text: "You upgrade your tools based on what you are trying to achieve today—not based on a permanent label.",
    },

    { type: "heading", text: "Find your way around" },
    {
      type: "paragraph",
      text: "The MusicOSY app is designed to keep you close to the culture, no matter what you are doing.",
    },
    {
      type: "list",
      items: [
        {
          lead: "The Stage:",
          text: "Your social home. Explore posts, clips, live moments, and fresh drops from the community.",
        },
        {
          lead: "Listen:",
          text: "Your dedicated player for continuous music, podcasts, and radio.",
        },
        {
          lead: "Library:",
          text: "Your personal vault for Keeps, Setlists, downloads, purchases, and listening history.",
        },
        {
          lead: "Studio:",
          text: "Your creative workshop for recording, editing, collaborating, and preparing releases.",
        },
        {
          lead: "Backstage:",
          text: "Your private inbox for direct messages and voice memos.",
        },
        {
          lead: "Signal Center:",
          text: "Your notification hub for social updates, release alerts, and account signals.",
        },
        {
          lead: "My Tools:",
          text: "A dashboard to see your included features and manage any Toolkits or Workspaces you belong to.",
        },
      ],
    },

    { type: "heading", text: "Get started" },
    {
      type: "paragraph",
      text: "Ready to dive in? Here is the best way to start:",
    },
    {
      type: "list",
      ordered: true,
      items: [
        {
          lead: "Set up your profile:",
          text: "Add a photo, write a bio, and select your favorite genres and moods.",
        },
        {
          lead: "Follow your favorites:",
          text: "Search for artists, producers, and podcasts you love.",
        },
        {
          lead: "Explore The Stage:",
          text: "Start scrolling, Loving, and Keeping tracks to train your recommendations.",
        },
        {
          lead: "Press Create:",
          text: "Upload a 30-second audio clip, write a post, or start a Setlist. There are no gates to becoming a creator here.",
        },
      ],
    },
  ],
  related: [
    "/resources/help-center/getting-started/create-an-account",
    "/resources/help-center/getting-started/set-up-your-artist-page",
    "/resources/help-center/getting-started/how-to-build-a-setlist",
    "/resources/help-center/getting-started/understanding-your-toolkits-and-upgrades",
    "/resources/help-center/getting-started/personal-profiles-vs-team-workspaces",
    "/resources/help-center/using-musicosy/discover-and-browse/what-is-the-stage",
  ],
};
