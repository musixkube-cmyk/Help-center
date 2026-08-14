import type { Doc } from "./types";

/**
 * "What is The Stage?" — Using MusicOSY → Discover & Browse doc.
 *
 * The Stage is MusicOSY's main social feed and discovery surface. Covers:
 * what you find on it, how it works (Home / Following / Discover tabs +
 * personalization signals), The Stage vs Listen distinction, the full
 * interaction toolkit (Love, Keep, Note, Resing, Pass the Mic, Ensemble,
 * Add to Setlist, Follow), discovery safety boundaries, and how to make
 * it yours.
 *
 * Content provided verbatim by the user; structured into blocks. Uses 2
 * tables (Stage vs Listen, Interaction actions), a note callout clarifying
 * Love ≠ Follow, Keep ≠ public, Follow ≠ paid subscription, and multiple
 * bulleted lists.
 */
export const whatIsTheStageDoc: Doc = {
  path: "/resources/help-center/using-musicosy/discover-and-browse/what-is-the-stage",
  blocks: [
    {
      type: "paragraph",
      text: "The Stage is MusicOSY’s main social feed and discovery surface.",
    },
    {
      type: "paragraph",
      text: "It is where music culture happens in real time: new releases (Fresh Drops), clips, conversations, performances, artist updates, live moments, Setlists (playlists), events, and the people shaping what is next.",
    },
    {
      type: "paragraph",
      text: "The Stage is built for discovery and participation. You can scroll to find something new, stop when something moves you, and choose how you want to respond. Love a track. Keep a post. Leave a Note. Resing a release. Follow the creator. Pass the Mic to share it in Backstage. Add it to a Setlist. Open their Artist Page. Join a Live Session.",
    },
    {
      type: "paragraph",
      text: "The Stage is not just a place to watch. It is where you take part in music culture.",
    },

    { type: "heading", text: "What you will find on The Stage" },
    {
      type: "paragraph",
      text: "The Stage aggregates eligible public and authorized content from across the MusicOSY ecosystem. As you scroll, you may see:",
    },
    {
      type: "list",
      items: [
        { text: "Music clips, full tracks, and Fresh Drops (new releases)" },
        { text: "Videos, visual performances, and podcasts" },
        { text: "Posts from artists, creators, labels, and community members" },
        { text: "Take the Stage moments (live broadcasts) and upcoming Live Sessions" },
        { text: "Artist updates, studio diaries, and behind-the-scenes content" },
        { text: "Public Setlists and music recommendations" },
        { text: "Community conversations and Notes (comments)" },
        { text: "Events, ticketed experiences, and local music activity" },
        { text: "Emerging artists and rising sounds" },
        { text: "Eligible promoted content and AdNote campaigns" },
      ],
    },
    {
      type: "paragraph",
      text: "What appears on The Stage changes continuously as creators release new work, members share what they Love, events begin, and music culture moves forward.",
    },

    { type: "heading", text: "How The Stage works" },
    {
      type: "paragraph",
      text: "The Stage is designed to help you discover music, creators, and community—not to force you into one kind of listening experience. You can navigate The Stage using different views or tabs:",
    },
    {
      type: "list",
      items: [
        { lead: "Home:", text: "A personalized mix of content from creators you follow, combined with recommendations based on your taste." },
        { lead: "Following:", text: "A chronological feed of posts, releases, and updates strictly from the members and artists you follow." },
        { lead: "Discover / Trending:", text: "A curated view of what is currently breaking, trending, or being heavily Resung (reposted) across the wider MusicOSY community." },
      ],
    },
    {
      type: "paragraph",
      text: "As you use the platform, MusicOSY refines your Home feed based on signals such as:",
    },
    {
      type: "list",
      items: [
        { text: "The artists and members you follow" },
        { text: "Music you Love or Keep" },
        { text: "Setlists you build or explore" },
        { text: "Genres, moods, and scenes you select in your profile" },
        { text: "Content you watch, listen to, share, or skip" },
        { text: "Conversations and creators you engage with" },
        { text: "Music, events, and people you search for" },
      ],
    },
    {
      type: "paragraph",
      text: "Your activity helps MusicOSY understand what you want more of. You are always free to explore outside your usual taste, search for something specific, or manage your personalization preferences in your settings.",
    },

    { type: "heading", text: "The Stage and Listen are different" },
    {
      type: "paragraph",
      text: "It is important to understand the difference between MusicOSY’s two primary consumption surfaces:",
    },
    {
      type: "table",
      headers: ["Surface", "Purpose"],
      rows: [
        [
          "The Stage",
          "Visual, social, and community-driven. Built for scrolling, discovering culture, reading Notes, watching clips, and seeing what is happening right now.",
        ],
        [
          "Listen",
          "Audio-first and continuous. Built for uninterrupted playback of albums, Setlists, podcasts, radio, and queues.",
        ],
      ],
    },
    {
      type: "paragraph",
      text: "Use The Stage when you want to see what is happening and engage with the community.",
    },
    {
      type: "paragraph",
      text: "Use Listen when you want to settle into music and let it play.",
    },
    {
      type: "paragraph",
      text: "You can move between them at any time. A track you discover on The Stage can be sent directly to your Listen queue, saved to your Library, or added to a Setlist.",
    },

    { type: "heading", text: "Interact with what moves you" },
    {
      type: "paragraph",
      text: "The Stage gives you a rich set of tools to respond to content. Every interaction has a different purpose and sends a different signal to the platform.",
    },
    {
      type: "table",
      headers: ["Action", "What it does"],
      rows: [
        ["Love", "Shows appreciation for a track, post, video, or moment. Signals to MusicOSY that you want more content like this."],
        ["Keep", "Saves the item to your personal Library so you can easily return to it later."],
        ["Leave a Note", "Adds a comment to the post or track, allowing you to join the conversation."],
        ["Resing", "Reposts the content to your own followers’ Home feeds, amplifying it to your community."],
        ["Pass the Mic", "Shares the content privately via Backstage (direct messages) or externally to other apps and social platforms."],
        ["Ensemble", "Creates a collaborative video or audio response (like a stitch or duet) using the original clip as your foundation."],
        ["Add to Setlist", "Curates the track or episode into one of your personal or shared Setlists."],
        ["Follow", "Subscribes to the creator’s public updates, ensuring their future posts appear in your Following feed."],
      ],
    },
    {
      type: "callout",
      variant: "note",
      text: "Loving a track does not automatically follow its creator. Keeping a post does not automatically make it public. Following someone does not automatically subscribe you to their paid Fan Club or Circle.",
    },

    { type: "heading", text: "Discover safely" },
    {
      type: "paragraph",
      text: "Not every piece of content is eligible to appear on The Stage. MusicOSY’s discovery engine respects strict boundaries regarding visibility, access, age, territory, rights, safety, moderation, and member blocks.",
    },
    {
      type: "paragraph",
      text: "This means a post, profile, release, event, or creator may not be visible to everyone. Content may be excluded from The Stage if it is:",
    },
    {
      type: "list",
      items: [
        { text: "Set to private or limited discoverability by the creator" },
        { text: "Restricted by age or territory rights" },
        { text: "Removed from discovery surfaces due to moderation or safety enforcement" },
        { text: "Created by a member you have blocked, or who has blocked you" },
        { text: "Flagged as sensitive and hidden behind a content warning you have chosen not to view" },
      ],
    },
    {
      type: "paragraph",
      text: "If something on The Stage makes you uncomfortable, unsafe, or concerned, use the More menu on the post to mute the creator, block the account, or report the content to Trust & Safety.",
    },

    { type: "heading", text: "Make The Stage yours" },
    {
      type: "paragraph",
      text: "The best way to shape your Stage is to participate.",
    },
    {
      type: "paragraph",
      text: "Follow the people you care about. Love the music that hits. Keep the tracks you want to revisit. Build Setlists. Explore new genres. Leave thoughtful Notes. Search for the scenes you want to find. Pass the Mic on what deserves a bigger audience.",
    },
    {
      type: "paragraph",
      text: "The Stage gets more personal, and more reflective of your unique musical identity, as you make it your own.",
    },
  ],
  related: [
    "/resources/help-center/using-musicosy/discover-and-browse/discover-content",
    "/resources/help-center/using-musicosy/discover-and-browse/manage-your-home-feed-and-recommendations",
    "/resources/help-center/using-musicosy/discover-and-browse/search-musicosy",
    "/resources/help-center/using-musicosy/content-interaction/love-and-keep-content",
    "/resources/help-center/getting-started/how-to-build-a-setlist",
    "/resources/help-center/using-musicosy/content-interaction/leave-a-note-and-join-the-conversation",
    "/resources/help-center/using-musicosy/content-interaction/resing-and-pass-the-mic",
    "/resources/help-center/using-musicosy/content-interaction/block-and-mute",
    "/resources/help-center/using-musicosy/discover-and-browse/manage-topics-and-interests",
  ],
};
