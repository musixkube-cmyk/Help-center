import type { Doc } from "./types";

/**
 * "Discover content" — Using MusicOSY → Discover & Browse doc.
 *
 * Discovery happens on The Stage and through rails like Fresh Drops,
 * Trending, and personalized recommendations. Covers: what you find, diving
 * deeper into content (with example flow quote), moving from discovery to
 * listening (preview/full/Up Next/Keep), shaping recommendations, content
 * availability & safety, and the one-canonical-catalog principle.
 *
 * Content provided verbatim by the user; structured into blocks. Uses a
 * quote block for the example discovery flow, multiple bulleted lists, and
 * a bold-lead-in list for the audio-engagement options.
 */
export const discoverContentDoc: Doc = {
  path: "/resources/help-center/using-musicosy/discover-and-browse/discover-content",
  blocks: [
    {
      type: "paragraph",
      text: "Discovery on MusicOSY happens primarily on The Stage (the main social feed) and through dedicated discovery rails like Fresh Drops (new releases), Trending, and personalized recommendations.",
    },
    {
      type: "paragraph",
      text: "Use discovery when you are open to finding something new. Scroll The Stage, explore creators, follow a sound, open a Setlist, watch a clip, find a Live Session, or move from a quick post into a full listening experience. You do not need to know exactly what you are looking for before you begin.",
    },

    { type: "heading", text: "What you will find" },
    {
      type: "paragraph",
      text: "As you explore The Stage and discovery surfaces, you may find:",
    },
    {
      type: "list",
      items: [
        { text: "Music clips, full tracks, and Fresh Drops" },
        { text: "Posts from artists, creators, labels, and community members" },
        { text: "Videos, visual performances, and podcasts" },
        { text: "Take the Stage moments (live broadcasts) and upcoming Live Sessions" },
        { text: "Public Setlists and music recommendations" },
        { text: "Events, ticketed experiences, and local music activity" },
        { text: "Community conversations and Notes (comments)" },
        { text: "Rising sounds and emerging talent" },
        { text: "Eligible promoted content and AdNote campaigns" },
      ],
    },
    {
      type: "paragraph",
      text: "Stop on anything that catches your attention. You can explore as deeply as you want or keep moving until you find the next thing that feels right.",
    },

    { type: "heading", text: "Dive deeper into what moves you" },
    {
      type: "paragraph",
      text: "When you find something interesting, select it to open the next layer of the experience. Depending on the content, you may be able to:",
    },
    {
      type: "list",
      items: [
        { text: "Open a track, album, podcast episode, or full release" },
        { text: "Visit a member’s personal profile or an Artist Page" },
        { text: "Watch a video or enter a Live Session" },
        { text: "Open an event page or RSVP (Raise Your Hand)" },
        { text: "Explore a public Setlist" },
        { text: "Read the Notes on a post and join the conversation" },
        { text: "Visit a Merch Table (Shop) or creator offering" },
      ],
    },
    {
      type: "paragraph",
      text: "Discovery is designed to help you move naturally from a quick moment of interest into a deeper music experience.",
    },
    {
      type: "paragraph",
      text: "Example flow:",
    },
    {
      type: "quote",
      text: "See a clip on The Stage → Open the Artist Page → Play the full track → Keep it in your Library → Add it to a Setlist → Follow the artist → Find their upcoming event.",
    },

    { type: "heading", text: "Move from discovery to listening" },
    {
      type: "paragraph",
      text: "Discovery helps you find music. Listen helps you stay with it.",
    },
    {
      type: "paragraph",
      text: "When you find an eligible track, album, podcast, or episode on The Stage, you have several ways to engage with the audio:",
    },
    {
      type: "list",
      items: [
        { lead: "Play a preview:", text: "Listen to a short clip directly within the feed." },
        { lead: "Play Full:", text: "Transition into the dedicated, audio-first Listen player for uninterrupted playback." },
        { lead: "Add to Up Next:", text: "Place the track in your active playback queue without leaving your current view or disrupting what is currently playing." },
        { lead: "Keep or Add to Setlist:", text: "Save the canonical object to your personal Library for later." },
      ],
    },
    {
      type: "paragraph",
      text: "Selecting full playback from discovery begins or replaces an eligible Listen session based on your choice. Adding something to Up Next changes your active queue without changing your position on The Stage.",
    },

    { type: "heading", text: "Shape your recommendations" },
    {
      type: "paragraph",
      text: "MusicOSY’s recommendation engine learns from your explicit and implicit signals. The platform becomes more useful as you show it what matters to you.",
    },
    {
      type: "paragraph",
      text: "You can shape your discovery experience by:",
    },
    {
      type: "list",
      items: [
        { text: "Following artists, creators, and communities" },
        { text: "Loving music and content you enjoy" },
        { text: "Keeping tracks, posts, and videos for later" },
        { text: "Building and following Setlists" },
        { text: "Searching for specific artists, genres, scenes, and topics" },
        { text: "Exploring new sounds outside your usual taste" },
        { text: "Managing your preferred genres, moods, and scenes in your profile settings" },
        { text: "Using Not Interested, Mute, Block, and reporting tools when something is not for you" },
      ],
    },
    {
      type: "paragraph",
      text: "You are not locked into one genre, scene, or recommendation pattern. Your interests can change, and your discovery feeds will adapt with you.",
    },

    { type: "heading", text: "Content availability and safety" },
    {
      type: "paragraph",
      text: "Not every item is available to every member. MusicOSY checks whether content is eligible for you before showing or playing it. Availability depends on visibility, access, age, territory, rights, safety, moderation, account status, and other platform rules.",
    },
    {
      type: "paragraph",
      text: "A track, profile, event, or post may be unavailable or hidden from your discovery feeds if it is:",
    },
    {
      type: "list",
      items: [
        { text: "Set to private or limited to approved followers" },
        { text: "Restricted by age or geographic territory" },
        { text: "Removed from public discovery due to moderation or safety enforcement" },
        { text: "Unavailable because of rights, licensing, or takedowns" },
        { text: "Blocked between you and another member" },
        { text: "No longer published or active" },
      ],
    },
    {
      type: "paragraph",
      text: "If something becomes unavailable while you are browsing, MusicOSY will show an unavailable message or gracefully hide the item rather than breaking your feed.",
    },

    { type: "heading", text: "One platform, one canonical catalog" },
    {
      type: "paragraph",
      text: "You can move from Discovery to an Artist Page, release, Setlist, event, Search result, Library item, or Listen session without losing the identity of what you found.",
    },
    {
      type: "paragraph",
      text: "MusicOSY uses canonical objects. Saving a track to your Library, adding it to a Setlist, or playing it in Listen does not create a separate copy of the original item. It is the exact same underlying release. This means your play counts, credits, Loves, and Keeps are unified across the entire platform, and creators receive accurate, consolidated signals no matter where you discover their work.",
    },
  ],
  related: [
    "/resources/help-center/using-musicosy/discover-and-browse/what-is-the-stage",
    "/resources/help-center/using-musicosy/discover-and-browse/manage-your-home-feed-and-recommendations",
    "/resources/help-center/using-musicosy/discover-and-browse/search-musicosy",
    "/resources/help-center/using-musicosy/discover-and-browse/trending-content-and-fresh-drops",
    "/resources/help-center/using-musicosy/media-and-playback/listen-on-musicosy",
    "/resources/help-center/using-musicosy/media-and-playback/manage-your-up-next-queue",
    "/resources/help-center/using-musicosy/collections-and-library/keep-and-organize-your-library",
    "/resources/help-center/getting-started/how-to-build-a-setlist",
    "/resources/help-center/using-musicosy/content-interaction/block-and-mute",
  ],
};
