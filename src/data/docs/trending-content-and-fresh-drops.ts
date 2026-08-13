import type { Doc } from "./types";

/**
 * "Trending content and Fresh Drops" — Using Music OSY → Discover & Browse doc.
 *
 * Covers both sides of music momentum: Trending content (qualified momentum)
 * and Fresh Drops (newly published music/media). Includes: what trending is,
 * what a Fresh Drop is, a 4-row comparison table, how to explore a Fresh Drop
 * (8-step process), following new releases, why a Fresh Drop may not appear
 * (eligibility), and promoted releases vs organic discovery.
 *
 * Content provided verbatim by the user; structured into blocks. Source
 * citations ([Platform], [Fondation]) omitted as they reference external
 * working documents, not user-facing content.
 */
export const trendingContentAndFreshDropsDoc: Doc = {
  path: "/resources/help-center/using-musicosy/discover-and-browse/trending-content-and-fresh-drops",
  blocks: [
    {
      type: "paragraph",
      text: "Music moves fast. A song can catch fire overnight, a creator can break through during a Live Session, and a newly released project can become the first thing everyone is talking about.",
    },
    {
      type: "paragraph",
      text: "MusicOSY helps you discover both sides of that momentum:",
    },
    {
      type: "list",
      items: [
        {
          lead: "Trending content",
          text: "shows music, sounds, creators, videos, topics, and conversations gaining meaningful attention now.",
        },
        {
          lead: "Fresh Drops",
          text: "show newly published music, media, releases, and other newly available content.",
        },
      ],
    },
    {
      type: "paragraph",
      text: "Use Trending content when you want to know what is moving.",
    },
    {
      type: "paragraph",
      text: "Use Fresh Drops when you want to hear what is new.",
    },

    { type: "heading", text: "What is trending content?" },
    {
      type: "paragraph",
      text: "Trending content reflects qualified momentum during a current period.",
    },
    {
      type: "paragraph",
      text: "It can include eligible songs, sounds, videos, creators, posts, Setlists, topics, Live Sessions, events, and community conversations that are gaining attention within the trend scope shown.",
    },
    {
      type: "paragraph",
      text: "Trending is time-bound. It is not a permanent status, a raw view count, or a guarantee that something is universally popular.",
    },
    {
      type: "paragraph",
      text: "A song may trend because listeners are discovering it quickly. A sound may trend because creators are using it in new ways. A video may trend because it is being watched, shared, and discussed. A creator may trend because a release, performance, post, or music moment is connecting with the community.",
    },
    {
      type: "paragraph",
      text: "MusicOSY must use trending labels truthfully. Something can be described as trending only when it meets the applicable classification and criteria.",
    },

    { type: "heading", text: "What is a Fresh Drop?" },
    {
      type: "paragraph",
      text: "A Fresh Drop is newly published music or media on MusicOSY.",
    },
    {
      type: "paragraph",
      text: "Fresh Drops can include eligible:",
    },
    {
      type: "list",
      items: [
        { text: "Singles" },
        { text: "Albums and EPs" },
        { text: "Music videos" },
        { text: "Podcasts and episodes" },
        { text: "Clips" },
        { text: "Live replays" },
        { text: "Creator posts" },
        { text: "Setlists" },
        { text: "Events" },
        { text: "Merchandise or creator offerings, where available" },
      ],
    },
    {
      type: "paragraph",
      text: "Fresh Drops help you find music and culture at the beginning of its journey.",
    },
    {
      type: "paragraph",
      text: "A Fresh Drop may be from an artist you already follow, a creator you have never heard before, a favorite podcast, a local music community, or an emerging act making their first release.",
    },

    { type: "heading", text: "The difference between trending and new" },
    {
      type: "paragraph",
      text: "New content and trending content are not the same.",
    },
    {
      type: "table",
      headers: ["Fresh Drops", "Trending content"],
      rows: [
        [
          "Newly published or newly available music and media",
          "Music, creators, sounds, videos, or topics gaining meaningful current momentum",
        ],
        [
          "Focuses on what has just arrived",
          "Focuses on what is moving through culture now",
        ],
        [
          "Can include a first release, new episode, new video, or new event",
          "Can include new work, older work rediscovered by the community, or a cultural moment gaining attention",
        ],
        [
          "Does not require broad activity to appear",
          "Uses qualified activity within the trend scope shown",
        ],
      ],
    },
    {
      type: "paragraph",
      text: "A Fresh Drop can become trending, but it does not have to.",
    },
    {
      type: "paragraph",
      text: "A trending track may be brand new, but it may also be an older song finding a new audience through a Setlist, Live Session, video, creator conversation, or community moment.",
    },

    { type: "heading", text: "Explore a Fresh Drop" },
    {
      type: "paragraph",
      text: "When you find a Fresh Drop that interests you:",
    },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Open the release, post, video, episode, Artist Page, or event." },
        { text: "Listen, watch, or explore the available content." },
        { text: "Love it if it connects with you." },
        { text: "Keep it in your Library so you can return to it." },
        { text: "Add eligible music to a Setlist." },
        { text: "Follow the creator if you want to see what they release next." },
        { text: "Share it in Backstage or repost it to your community." },
        { text: "Search for related artists, sounds, lyrics, topics, and music scenes." },
      ],
    },
    {
      type: "paragraph",
      text: "Fresh Drops are a way to be early. You can discover a release before it becomes a bigger moment, then help support it by listening, sharing, following, and adding it to your world.",
    },

    { type: "heading", text: "Follow new releases from creators you love" },
    {
      type: "paragraph",
      text: "When a creator you follow releases new content, MusicOSY may show it in your Feed, recommendations, Signal Center, or other eligible discovery surfaces.",
    },
    {
      type: "paragraph",
      text: "Your notification preferences affect which optional updates you receive. MusicOSY may also notify you when a creator you follow launches an eligible paid release.",
    },
    {
      type: "paragraph",
      text: "Follow creators whose releases you do not want to miss. Then use your notification preferences to choose how you want to hear from MusicOSY.",
    },

    { type: "heading", text: "Why a Fresh Drop may not appear" },
    {
      type: "paragraph",
      text: "A release is not publicly discoverable simply because it has been uploaded.",
    },
    {
      type: "paragraph",
      text: "Before newly published content can appear in Fresh Drops, Search, The Stage, or other discovery areas, MusicOSY checks its publication status, visibility, access, territory, age, rights, moderation, and other eligibility requirements.",
    },
    {
      type: "paragraph",
      text: "A Fresh Drop may not appear for you if it is:",
    },
    {
      type: "list",
      items: [
        { text: "Still a draft, scheduled, processing, or under review" },
        { text: "Private or limited to approved followers" },
        { text: "Available only to subscribers, purchasers, collaborators, or Workspace members" },
        { text: "Restricted by age, location, rights, or licensing" },
        { text: "Removed from discovery" },
        { text: "Limited by safety, moderation, or enforcement rules" },
        { text: "No longer published or available" },
      ],
    },
    {
      type: "paragraph",
      text: "If a creator schedules content, MusicOSY rechecks its eligibility at release time before publishing it.",
    },

    { type: "heading", text: "Promoted releases and organic discovery" },
    {
      type: "paragraph",
      text: "Some Fresh Drops or trending areas may include eligible promoted content.",
    },
    {
      type: "paragraph",
      text: "Promoted content must be clearly identified. Paid placement cannot be presented as ordinary trending, recommended, or editorial content unless that label is independently true and sponsorship is also clear.",
    },
    {
      type: "paragraph",
      text: "A promotion can help a creator reach people, but it does not override MusicOSY’s rights, safety, privacy, age, territory, or access rules.",
    },
  ],
  related: [
    "/resources/help-center/using-musicosy/discover-and-browse/what-is-the-stage",
    "/resources/help-center/using-musicosy/discover-and-browse/discover-content",
    "/resources/help-center/using-musicosy/discover-and-browse/manage-your-home-feed-and-recommendations",
    "/resources/help-center/using-musicosy/discover-and-browse/search-musicosy",
    "/resources/help-center/using-musicosy/discover-and-browse/feed",
    "/resources/help-center/using-musicosy/discover-and-browse/for-you-feed",
    "/resources/help-center/using-musicosy/discover-and-browse/friends-tab",
    "/resources/help-center/using-musicosy/discover-and-browse/trending-content",
    "/resources/help-center/using-musicosy/discover-and-browse/recommended-creators-and-music",
    "/resources/help-center/using-musicosy/discover-and-browse/manage-topics-and-interests",
    "/resources/help-center/using-musicosy/content-interaction/love-and-keep-content",
    "/privacy-and-safety/content-and-conduct/for-you-feed-eligibility-standards",
  ],
};
