import type { Doc } from "./types";

/**
 * "Trending content" — Using Music OSY → Discover & Browse doc.
 *
 * Trending content (often labeled as Rising on MusicOSY) highlights the
 * music, creators, sounds, videos, conversations, and topics that are
 * gaining meaningful cultural momentum right now. Covers: what can trend,
 * what "Trending" actually means (qualified activity, growth velocity,
 * scoped results), exploring/interacting with trending music, a Trending
 * vs. Fresh Drops vs. For You comparison table, and eligibility/safety/
 * promoted content rules.
 *
 * Content provided verbatim by the user; structured into blocks. Uses 2
 * bulleted lists (trending areas + interaction actions), a 3-row
 * comparison table, and a note callout for the promoted-content rule.
 */
export const trendingContentDoc: Doc = {
  path: "/resources/help-center/using-musicosy/discover-and-browse/trending-content",
  blocks: [
    {
      type: "paragraph",
      text: "Trending content (often labeled as Rising on MusicOSY) highlights the music, creators, sounds, videos, conversations, and topics that are gaining meaningful cultural momentum right now.",
    },
    {
      type: "paragraph",
      text: "Trending is a discovery tool. It helps you find what is moving through music culture beyond your usual Feed, follows, and personalized recommendations on The Stage.",
    },
    {
      type: "paragraph",
      text: "A Rising label does not simply mean that an item has the highest raw number of plays or Loves. MusicOSY treats trending as a time-bound classification based on qualified activity, growth velocity, and the specific scope of the trend.",
    },

    { type: "heading", text: "What can trend" },
    {
      type: "paragraph",
      text: "Trending areas surface eligible content that is currently breaking or gaining traction. You may see discovery rails and sections such as:",
    },
    {
      type: "list",
      items: [
        { text: "Rising Songs and Fresh Drops" },
        { text: "Breakout Sounds and audio clips" },
        { text: "Trending music videos and visual performances" },
        { text: "Rising creators and emerging artists" },
        { text: "Viral posts, Notes, and community conversations" },
        { text: "Popular public Setlists" },
        { text: "Trending topics and Sound Tags" },
        { text: "Take the Stage moments (Live Sessions)" },
        { text: "Upcoming events and local music activity" },
      ],
    },
    {
      type: "paragraph",
      text: "What is trending changes continuously as new music is released, creators share work, Live Sessions begin, communities respond to sounds, and new scenes gain momentum.",
    },

    { type: "heading", text: "What “Trending” actually means" },
    {
      type: "paragraph",
      text: "A trending label represents meaningful, qualified activity during a current period. It is not a permanent award, a guarantee of quality, or a promise that something will remain popular forever.",
    },
    {
      type: "paragraph",
      text: "MusicOSY evaluates growth velocity, completion rates, Loves, Keeps, and Resings, while actively filtering out spam, bots, and artificial engagement. The platform uses the \"Trending\" or \"Rising\" label truthfully; an item cannot be classified as trending unless it meets strict qualification criteria.",
    },
    {
      type: "paragraph",
      text: "Trending results are often scoped. A track can be Rising in a specific music scene, geographic region, or genre without being the most-played item across the entire global platform.",
    },

    { type: "heading", text: "Explore and interact with trending music" },
    {
      type: "paragraph",
      text: "When you find something trending, you can decide how deeply you want to explore it. From an eligible trending item, you can:",
    },
    {
      type: "list",
      items: [
        { text: "Play Full to start a continuous Listen session" },
        { text: "Open the Artist Page or creator profile" },
        { text: "Follow the creator to see their future updates" },
        { text: "Love the track or post to show appreciation" },
        { text: "Keep the content in your personal Library" },
        { text: "Add eligible music to a Setlist" },
        { text: "Read and leave Notes to join the conversation" },
        { text: "Pass the Mic to share the discovery privately in Backstage or externally" },
        { text: "Search for related artists, lyrics, genres, or scenes" },
      ],
    },
    {
      type: "paragraph",
      text: "A trend is a starting point. Use it to find your next favorite artist, the source behind a viral sound, or a new community to explore.",
    },

    { type: "heading", text: "Trending vs. Fresh Drops vs. For You" },
    {
      type: "paragraph",
      text: "It is important to understand how Trending content differs from other discovery surfaces on MusicOSY:",
    },
    {
      type: "table",
      headers: ["Surface", "What it shows"],
      rows: [
        ["Trending (Rising)", "Music and culture gaining qualified momentum and cultural attention right now."],
        ["Fresh Drops", "Newly released or newly available music, albums, and episodes, regardless of their current momentum."],
        ["For You feed", "A personalized feed tailored strictly to your individual taste, follows, and listening history."],
      ],
    },
    {
      type: "paragraph",
      text: "A Fresh Drop may immediately begin trending, but not every new release will. Similarly, you may see a Trending song that does not match your usual taste—that is the nature of cultural discovery. You can explore it, skip it, or use your Feed controls to shape what you see more often.",
    },

    { type: "heading", text: "Eligibility, Safety, and Promoted Content" },
    {
      type: "paragraph",
      text: "Not every public item is eligible to appear in trending areas.",
    },
    {
      type: "paragraph",
      text: "MusicOSY strictly excludes content from trending surfaces when there is not enough meaningful activity, when privacy risks are too high, or when safety, rights, moderation, age, territory, or enforcement rules make broad presentation inappropriate. Private, unlisted, blocked, or restricted content will never appear in general trending rails.",
    },
    {
      type: "paragraph",
      text: "Furthermore, a trending label does not override access restrictions. If a track or event is unavailable to you due to territory rights or age-gating, the trend will not grant you access.",
    },
    {
      type: "callout",
      variant: "note",
      title: "A note on promoted content",
      text: "MusicOSY may show eligible promoted content (AdNote campaigns) in discovery areas, but paid placement is always clearly identified as Sponsored. An advertisement will never be falsely labeled as \"Trending,\" \"Rising,\" or \"Editorial\" unless that label is independently and organically true.",
    },
  ],
  related: [
    "/resources/help-center/using-musicosy/discover-and-browse/trending-content-and-fresh-drops",
    "/resources/help-center/using-musicosy/discover-and-browse/for-you-feed",
    "/resources/help-center/using-musicosy/discover-and-browse/discover-content",
    "/resources/help-center/using-musicosy/discover-and-browse/manage-your-home-feed-and-recommendations",
  ],
};
