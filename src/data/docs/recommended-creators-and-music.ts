import type { Doc } from "./types";

/**
 * "Recommended creators and music" — Using Music OSY → Discover & Browse doc.
 *
 * MusicOSY's recommendation engine helps you discover culture, creators,
 * and sounds that connect with your unique taste. Covers: what you may be
 * recommended, how recommendations work (signals), eligibility precedes
 * ranking rule, organic vs. promoted content, shaping recommendations
 * (positive/negative feedback loops), and a note that changing recs does
 * not remove your Library.
 *
 * Content provided verbatim by the user; structured into blocks. Uses an
 * example quote callout for the late-night R&B scenario, two parallel
 * bulleted lists for the positive/negative feedback loops, and a note
 * callout about Library persistence.
 */
export const recommendedCreatorsAndMusicDoc: Doc = {
  path: "/resources/help-center/using-musicosy/discover-and-browse/recommended-creators-and-music",
  blocks: [
    {
      type: "paragraph",
      text: "MusicOSY’s recommendation engine is designed to help you discover culture, creators, and sounds that connect with your unique taste.",
    },
    {
      type: "paragraph",
      text: "Recommendations help you move beyond the artists and people you already know. They can introduce you to a new voice, a Fresh Drop you would not have searched for, a Take the Stage performance from another scene, or a creator whose work naturally aligns with the music you already love.",
    },

    { type: "heading", text: "What you may be recommended" },
    {
      type: "paragraph",
      text: "MusicOSY may surface eligible content across The Stage, your Home feed, the For You feed, Listen mode, and Search. Recommendations can include:",
    },
    {
      type: "list",
      items: [
        { text: "Artists, creators, and podcasters" },
        { text: "Songs, albums, EPs, and Fresh Drops" },
        { text: "Music videos and visual clips" },
        { text: "Podcast shows and episodes" },
        { text: "Public Setlists and community collections" },
        { text: "Live Sessions and upcoming events" },
        { text: "Music communities and public cultural moments" },
        { text: "Merch Table products or creator offerings, where available" },
      ],
    },

    { type: "heading", text: "How recommendations work" },
    {
      type: "paragraph",
      text: "MusicOSY uses a combination of your explicit choices and implicit listening habits to recommend content that may be relevant to you. The discovery engine evaluates signals such as:",
    },
    {
      type: "list",
      items: [
        { text: "Artists, creators, and communities you Follow" },
        { text: "Music, videos, and posts you Love" },
        { text: "Tracks and releases you Keep in your Library" },
        { text: "Setlists you build, save, or explore" },
        { text: "Genres, moods, and scenes you select in your profile" },
        { text: "Music, creators, and events you search for" },
        { text: "Content you watch, listen to, Resing, or leave a Note on" },
        { text: "Artists and music connected to your social graph" },
        { text: "Current cultural momentum, including Rising sounds and emerging scenes" },
      ],
    },
    {
      type: "quote",
      text: "Example: If you regularly Keep alternative R&B, follow vocalists in that space, build late-night Setlists, and search for live performances, MusicOSY will begin recommending related artists, releases, and events.",
    },
    {
      type: "paragraph",
      text: "Recommendations are optional assistance designed to aid your discovery. They are an invitation to explore, not an obligation to engage, and they do not imply that one artist is more important than another.",
    },

    { type: "heading", text: "Eligibility always precedes ranking" },
    {
      type: "paragraph",
      text: "MusicOSY operates on a strict platform rule: Eligibility precedes ranking.",
    },
    {
      type: "paragraph",
      text: "The platform will never recommend content to you simply because it exists or is popular. Before a track, profile, or event is ever ranked or shown to you, the system verifies your eligibility. Content and profiles are excluded from your recommendations if they are:",
    },
    {
      type: "list",
      items: [
        { text: "Set to private, unlisted, or limited to approved followers" },
        { text: "Restricted by your geographic territory or local licensing rights" },
        { text: "Gated behind an age-verification requirement you have not met" },
        { text: "Unavailable due to safety, moderation, or Trust & Safety enforcement" },
        { text: "Created by a member you have Blocked or Muted" },
        { text: "Excluded by the For You feed Eligibility Standards" },
      ],
    },
    {
      type: "paragraph",
      text: "A recommendation will never override privacy, subscription, purchase, Workspace, or territorial access requirements.",
    },

    { type: "heading", text: "Organic recommendations vs. Promoted content" },
    {
      type: "paragraph",
      text: "MusicOSY strictly separates organic algorithmic recommendations from paid advertising.",
    },
    {
      type: "paragraph",
      text: "You may see recommended content, editorial programming, and eligible promoted content in the same discovery areas, but they are governed differently. If a creator or brand uses AdNote to Amplify their content, it will always be clearly labeled as Sponsored or Promoted.",
    },
    {
      type: "paragraph",
      text: "Paid placement cannot be presented as ordinary recommended, Rising, or editorial content. Your \"Not Interested\" and Mute controls apply equally to sponsored content, ensuring you maintain authority over your discovery experience.",
    },

    { type: "heading", text: "Shape your recommendations" },
    {
      type: "paragraph",
      text: "Your actions directly shape your future recommendations. You can train the discovery engine using both positive and negative feedback loops:",
    },
    {
      type: "heading", text: "To find more of what you want", level: 3 },
    {
      type: "list",
      items: [
        { text: "Follow artists and creators you care about" },
        { text: "Love music and content that moves you" },
        { text: "Keep tracks, videos, and posts in your Library" },
        { text: "Build Setlists around your favorite sounds" },
        { text: "Update your topics, genres, and moods in your Settings" },
        { text: "Spend time with the music and culture you want more of" },
      ],
    },
    {
      type: "heading", text: "To see less of something", level: 3 },
    {
      type: "list",
      items: [
        { text: "Use the More menu on any post to select Not Interested" },
        { text: "Mute specific keywords, sounds, or creators to silently suppress them" },
        { text: "Block members to create a hard boundary that prevents mutual discovery" },
      ],
    },
    {
      type: "callout",
      variant: "note",
      title: "Note",
      text: "Your personal Library remains strictly yours. Changing your recommendation preferences or clearing your listening history does not remove your Keeps, Setlists, downloads, purchases, or saved music.",
    },
  ],
  related: [
    "/resources/help-center/using-musicosy/discover-and-browse/manage-your-home-feed-and-recommendations",
    "/resources/help-center/using-musicosy/discover-and-browse/manage-topics-and-interests",
    "/resources/help-center/using-musicosy/content-interaction/love-and-keep-content",
    "/privacy-and-safety/content-and-conduct/for-you-feed-eligibility-standards",
  ],
};
