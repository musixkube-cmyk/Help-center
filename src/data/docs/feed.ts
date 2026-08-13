import type { Doc } from "./types";

/**
 * "Feed" — Using MusicOSY → Discover & Browse doc.
 *
 * The Feed is the stream of music, people, posts, clips, releases, and
 * live culture on The Stage. Covers: what appears in it, how to scroll
 * it, Feed-vs-Listen distinction, shaping what you see, and content
 * availability/safety.
 *
 * Content provided verbatim by the user; structured into blocks. Uses 2
 * ordered/bulleted "use Feed when / use Listen when" lists, a note
 * callout distinguishing the two surfaces, and multiple bulleted lists.
 */
export const feedDoc: Doc = {
  path: "/resources/help-center/using-musicosy/discover-and-browse/feed",
  blocks: [
    {
      type: "paragraph",
      text: "Your MusicOSY Feed is the stream of music, people, posts, clips, releases, conversations, and live culture waiting for you on The Stage.",
    },
    {
      type: "paragraph",
      text: "It is designed for browsing. Scroll when you want to discover something unexpected, check in with artists you follow, see what your community is sharing, or find the next track, performance, story, or conversation that pulls you in.",
    },
    {
      type: "paragraph",
      text: "The Feed is a social experience. It is not the same as your personal Library, and it is not a continuous listening queue.",
    },

    { type: "heading", text: "What appears in your Feed" },
    {
      type: "paragraph",
      text: "Your Feed can include eligible content from across MusicOSY, such as:",
    },
    {
      type: "list",
      items: [
        { text: "Posts from people and creators you follow" },
        { text: "Music clips and Fresh Drops (new releases)" },
        { text: "Videos and visual performances" },
        { text: "Take the Stage moments (Live Sessions) and upcoming live events" },
        { text: "Notes, Resings, and community activity" },
        { text: "Public Setlists and music recommendations" },
        { text: "Events, ticketed experiences, and local music activity" },
        { text: "New creators and emerging artists" },
        { text: "Content related to music, genres, and scenes you have explored" },
        { text: "Eligible promoted content (clearly labeled as sponsored)" },
      ],
    },
    {
      type: "paragraph",
      text: "MusicOSY may show different kinds of content as you move through the Feed. One moment you may see a new song from an artist you follow; the next may be a live performance, a Setlist, a conversation, or a creator you have not discovered yet.",
    },

    { type: "heading", text: "Scroll through The Stage" },
    {
      type: "paragraph",
      text: "To browse your Feed:",
    },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Open Discover or The Stage from your main navigation." },
        { text: "Scroll through the content shown to you." },
        { text: "Pause on anything that interests you." },
        { text: "Select a post, track, profile, event, Setlist, or Live Session to explore it further." },
        { text: "Use Love, Keep, Leave a Note, Resing, Pass the Mic, Follow, or Add to Setlist to respond." },
      ],
    },
    {
      type: "paragraph",
      text: "MusicOSY may restore your previous place in the Feed when practical, so you can continue exploring without starting over.",
    },

    { type: "heading", text: "Your Feed is not Listen" },
    {
      type: "paragraph",
      text: "The Feed helps you discover music through social posts, visual browsing, people, and culture.",
    },
    {
      type: "paragraph",
      text: "Listen is for continuous, audio-first playback.",
    },
    {
      type: "paragraph",
      text: "Use the Feed when you want to:",
    },
    {
      type: "list",
      items: [
        { text: "Browse what is happening in music culture right now" },
        { text: "Find new artists, creators, and podcasts" },
        { text: "Watch short-form music moments and visual performances" },
        { text: "Join conversations and read Notes" },
        { text: "Explore releases, events, and community activity" },
        { text: "Follow a recommendation into a deeper listening experience" },
      ],
    },
    {
      type: "paragraph",
      text: "Use Listen when you want to:",
    },
    {
      type: "list",
      items: [
        { text: "Play an album, Setlist, podcast, or radio station" },
        { text: "Continue listening without repeatedly searching" },
        { text: "Manage your active playback queue (Up Next)" },
        { text: "Focus on uninterrupted, audio-first playback" },
      ],
    },
    {
      type: "callout",
      variant: "note",
      text: "Discover is not an infinite full-song queue, and Listen is not a social feed that requires you to keep searching for what plays next.",
    },

    { type: "heading", text: "Shape what you see" },
    {
      type: "paragraph",
      text: "Your Feed becomes more relevant and personal as you participate in MusicOSY. The platform learns from your explicit and implicit signals to surface culture that matters to you.",
    },
    {
      type: "paragraph",
      text: "You can shape your experience by:",
    },
    {
      type: "list",
      items: [
        { text: "Following artists, friends, and creators" },
        { text: "Loving music and posts you enjoy" },
        { text: "Keeping tracks, videos, and posts in your Library" },
        { text: "Building or exploring Setlists" },
        { text: "Searching for new music, people, and scenes" },
        { text: "Watching, listening to, or sharing content" },
        { text: "Managing your preferred topics, genres, and moods in your settings" },
        { text: "Using Not Interested, Mute, Block, or Flag when something is not for you" },
      ],
    },
    {
      type: "paragraph",
      text: "Following a creator personalizes your Feed and creates an eligible Signal Center notification relationship for their new releases, Live Sessions, and other updates.",
    },

    { type: "heading", text: "Content availability and safety" },
    {
      type: "paragraph",
      text: "Not every item can appear in every member’s Feed.",
    },
    {
      type: "paragraph",
      text: "MusicOSY’s discovery engine respects strict boundaries regarding visibility, access, age, territory, rights, safety, moderation, and member blocks.",
    },
    {
      type: "paragraph",
      text: "A post, profile, track, event, or creator may not appear in your Feed if it is:",
    },
    {
      type: "list",
      items: [
        { text: "Set to private or limited to approved followers/subscribers" },
        { text: "Restricted by age or geographic territory" },
        { text: "Unavailable because of rights, licensing, or takedowns" },
        { text: "Removed from public discovery surfaces due to moderation" },
        { text: "Limited by a safety or enforcement decision" },
        { text: "Created by a member you have blocked, or who has blocked you" },
        { text: "No longer active or published" },
      ],
    },
    {
      type: "paragraph",
      text: "If you see something on The Stage that makes you uncomfortable, you can use the More menu on the post to hide it, mute the creator, block the account, or flag it for Trust & Safety. Your negative feedback is respected immediately and helps tune your future recommendations.",
    },
  ],
  related: [
    "/resources/help-center/using-musicosy/discover-and-browse/what-is-the-stage",
    "/resources/help-center/using-musicosy/discover-and-browse/discover-content",
    "/resources/help-center/using-musicosy/discover-and-browse/for-you-feed",
    "/resources/help-center/using-musicosy/discover-and-browse/following-feed",
    "/resources/help-center/using-musicosy/discover-and-browse/search-musicosy",
    "/resources/help-center/using-musicosy/discover-and-browse/trending-content-and-fresh-drops",
    "/resources/help-center/using-musicosy/discover-and-browse/manage-topics-and-interests",
    "/resources/help-center/using-musicosy/media-and-playback/listen-on-musicosy",
    "/resources/help-center/using-musicosy/content-interaction/block-and-mute",
  ],
};
