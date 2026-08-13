import type { Doc } from "./types";

/**
 * "For You feed" — Using Music OSY → Discover & Browse doc.
 *
 * The For You feed is a personalized discovery view of The Stage. Covers:
 * what makes it different (broad cultural discovery beyond follows), how
 * it becomes personal (signals), exploring beyond usual taste, the
 * For-You-vs-Friends-Tab distinction, managing what appears, and
 * eligibility/promoted content.
 *
 * Content provided verbatim by the user; structured into blocks. Uses 3
 * bulleted lists for personalization signals, discovery actions, and feed
 * management actions, plus a section distinguishing the For You feed from
 * the Friends Tab.
 */
export const forYouFeedDoc: Doc = {
  path: "/resources/help-center/using-musicosy/discover-and-browse/for-you-feed",
  blocks: [
    {
      type: "paragraph",
      text: "The For You feed is a personalized discovery view of The Stage.",
    },
    {
      type: "paragraph",
      text: "It is designed to help you find music, creators, conversations, Take the Stage moments (Live Sessions), videos, events, and culture that connect with your taste—even when you do not already follow the people behind it.",
    },
    {
      type: "paragraph",
      text: "Use the For You feed when you want MusicOSY to help you discover what is next.",
    },

    { type: "heading", text: "What makes the For You feed different" },
    {
      type: "paragraph",
      text: "The For You feed is not limited to the people you follow. It introduces you to new artists, emerging scenes, conversations, sounds, Setlists, and music moments based on the interests and activity connected to your MusicOSY experience.",
    },
    {
      type: "paragraph",
      text: "You may see:",
    },
    {
      type: "list",
      items: [
        { text: "New creators and artists you have not followed yet" },
        { text: "Music related to tracks, Fresh Drops, and genres you enjoy" },
        { text: "Clips and videos connected to your interests" },
        { text: "Rising (trending) songs, sounds, and music moments" },
        { text: "Live Sessions and upcoming events" },
        { text: "Posts and conversations from across the MusicOSY community" },
        { text: "Eligible content from people, creators, and communities connected to your activity" },
        { text: "Eligible promoted content (clearly labeled as sponsored)" },
      ],
    },
    {
      type: "paragraph",
      text: "The For You feed is meant for broad cultural discovery. It helps you move beyond the people and music you already know.",
    },

    { type: "heading", text: "How your For You feed becomes personal" },
    {
      type: "paragraph",
      text: "MusicOSY uses your activity and preferences to personalize what appears in the For You feed. This includes:",
    },
    {
      type: "list",
      items: [
        { text: "Artists, creators, and communities you follow" },
        { text: "Music, videos, posts, and episodes you Love" },
        { text: "Content you Keep in your Library" },
        { text: "Setlists you create, save, or explore" },
        { text: "Genres, moods, topics, and scenes you choose" },
        { text: "Music and creators you search for" },
        { text: "Posts, clips, Live Sessions, and events you spend time exploring" },
        { text: "Content you Resing, Pass the Mic, or discuss" },
        { text: "New music and culture connected to your listening and discovery activity" },
      ],
    },
    {
      type: "paragraph",
      text: "Your activity helps MusicOSY improve recommendations without turning every action into a public popularity signal.",
    },

    { type: "heading", text: "Explore beyond your usual taste" },
    {
      type: "paragraph",
      text: "The For You feed should help you discover more than one version of your taste. Try searching for a new genre, following an artist outside your usual listening habits, or opening a Rising sound you have never heard before.",
    },
    {
      type: "paragraph",
      text: "When you find something that connects with you:",
    },
    {
      type: "list",
      items: [
        { text: "Love it" },
        { text: "Keep it in your Library" },
        { text: "Add eligible music to a Setlist" },
        { text: "Follow the creator" },
        { text: "Pass the Mic to share it in Backstage or externally" },
        { text: "Explore their Artist Page" },
        { text: "Search for related music, people, genres, and events" },
      ],
    },
    {
      type: "paragraph",
      text: "These actions help MusicOSY understand that you want more of that kind of content.",
    },

    { type: "heading", text: "Your For You feed is not your Friends Tab" },
    {
      type: "paragraph",
      text: "Your Friends Tab focuses on eligible activity and updates strictly from the people and creators you choose to follow. Your For You feed focuses on personalized discovery across the wider MusicOSY platform.",
    },
    {
      type: "paragraph",
      text: "You may see a creator in the For You feed before you follow them. You may discover a Fresh Drop before it becomes widely known. You may find a Live Session, Setlist, or music community through shared interests rather than a direct follow relationship.",
    },
    {
      type: "paragraph",
      text: "If you want more content from someone, select Follow.",
    },
    {
      type: "paragraph",
      text: "If you want to return to a track or post later, use Keep.",
    },
    {
      type: "paragraph",
      text: "If you want to hear music continuously, move to Listen.",
    },

    { type: "heading", text: "Manage what appears" },
    {
      type: "paragraph",
      text: "You have choices that influence your future recommendations. To shape your For You feed:",
    },
    {
      type: "list",
      items: [
        { text: "Follow artists, creators, and communities you care about" },
        { text: "Love music and content that moves you" },
        { text: "Keep tracks, videos, and posts you want to revisit" },
        { text: "Build Setlists around the music you enjoy" },
        { text: "Search for new sounds, topics, and people" },
        { text: "Update your topics and interests in your Settings" },
        { text: "Mute accounts, keywords, or conversations you do not want to see" },
        { text: "Block members who cross a safety boundary" },
        { text: "Flag (Report) content that violates MusicOSY rules" },
      ],
    },
    {
      type: "paragraph",
      text: "Your feed may take time to reflect new preferences. Keep exploring and interacting with the music and culture you want more of.",
    },

    { type: "heading", text: "Eligibility and Promoted Content" },
    {
      type: "paragraph",
      text: "The For You feed only includes content that is eligible to be shown to you. MusicOSY strictly evaluates visibility, age requirements, territory and rights availability, privacy settings, member blocks, safety rules, and subscription requirements before ranking any item in your feed.",
    },
    {
      type: "paragraph",
      text: "Your feed may also include eligible promoted content. Promoted content is clearly labeled as sponsored and must follow MusicOSY’s safety, rights, and advertising rules. A paid promotion does not bypass platform restrictions, eligibility standards, or your personal block/mute preferences.",
    },
  ],
  related: [
    "/resources/help-center/using-musicosy/discover-and-browse/feed",
    "/resources/help-center/using-musicosy/discover-and-browse/friends-tab",
    "/resources/help-center/using-musicosy/discover-and-browse/manage-your-home-feed-and-recommendations",
    "/resources/help-center/using-musicosy/discover-and-browse/manage-topics-and-interests",
  ],
};
