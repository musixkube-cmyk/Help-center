import type { Doc } from "./types";

/**
 * "Like" — Using Music OSY → Content Interaction doc.
 *
 * On MusicOSY, a like is called a Love. Covers: what Love is (social
 * appreciation, not purchase/subscription/follow/Keep), how to Love
 * content, how to remove a Love, what happens when you Love content, a
 * comparison table distinguishing Love from Keep/Follow/Resing/Subscribe/
 * Show Love, loving responsibly, and eligibility limits.
 *
 * Content provided verbatim by the user; structured into blocks. Source
 * citations ([Platform], [Fondation]) omitted as they reference external
 * working documents. The 4-line blockquote of example "sayings" is
 * rendered as a single quote block (renderer wraps in curly quotes and
 * collapses newlines).
 */
export const likeDoc: Doc = {
  path: "/resources/help-center/using-musicosy/content-interaction/like",
  blocks: [
    {
      type: "paragraph",
      text: "On MusicOSY, a like is called a Love.",
    },
    {
      type: "paragraph",
      text: "Use Love to show appreciation for a song, post, video, episode, event, creator, or other eligible content that connects with you.",
    },
    {
      type: "paragraph",
      text: "A Love is a quick way to say:",
    },
    {
      type: "quote",
      text: "This moved me. I see this. More people should hear this. I am here for this.",
    },
    {
      type: "paragraph",
      text: "Love is social appreciation. It is not a purchase, a subscription, a follow, a Keep, or a commitment to support someone financially.",
    },

    { type: "heading", text: "Love something" },
    {
      type: "paragraph",
      text: "To Love eligible content:",
    },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Open the post, track, video, release, episode, event, or other item." },
        { text: "Select the Love button." },
        { text: "The Love will be added to the content." },
      ],
    },
    {
      type: "paragraph",
      text: "You can Love content from The Stage, Search, Artist Pages, releases, videos, Setlists, events, and other supported MusicOSY surfaces.",
    },
    {
      type: "paragraph",
      text: "MusicOSY creates one active Love relationship between you and an eligible item. Selecting Love again does not create duplicate Loves.",
    },

    { type: "heading", text: "Remove a Love" },
    {
      type: "paragraph",
      text: "You can remove a Love whenever you want.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Open the content you previously Loved." },
        { text: "Select the active Love button again." },
        { text: "Your Love will be removed." },
      ],
    },
    {
      type: "paragraph",
      text: "When you remove a Love, MusicOSY updates the active Love relationship and the related aggregate count.",
    },
    {
      type: "paragraph",
      text: "Removing a Love does not delete the content, unfollow the creator, remove a Keep from your Library, cancel a purchase, or change your other interactions with that item.",
    },

    { type: "heading", text: "What happens when you Love content" },
    {
      type: "paragraph",
      text: "Loving content can help you participate in MusicOSY culture.",
    },
    {
      type: "paragraph",
      text: "Depending on the content and its settings, a Love may:",
    },
    {
      type: "list",
      items: [
        { text: "Add to the visible or aggregate appreciation shown on the item" },
        { text: "Help creators understand that their work connected with listeners" },
        { text: "Contribute to eligible social engagement and recommendation signals" },
        { text: "Help MusicOSY understand the kinds of music and content you enjoy" },
        { text: "Help shape future recommendations where allowed" },
        { text: "Create an eligible notification for the creator or content owner" },
      ],
    },
    {
      type: "paragraph",
      text: "Loves are tracked separately from streams, views, follows, Keeps, purchases, subscriptions, event attendance, and other activity. MusicOSY must not combine these measurements or represent one as another.",
    },

    { type: "heading", text: "Love is not a Keep" },
    {
      type: "paragraph",
      text: "Love and Keep do different things.",
    },
    {
      type: "table",
      headers: ["Action", "What it does"],
      rows: [
        ["Love", "Shows appreciation for eligible content"],
        ["Keep", "Saves eligible content to your personal Library"],
        ["Follow", "Connects you to a creator or profile"],
        ["Resing", "Shares someone’s content with attribution to your community"],
        ["Subscribe", "Joins an eligible supporter or paid relationship"],
        ["Show Love", "Sends a one-time direct payment through a creator’s Love Jar, where available"],
      ],
    },
    {
      type: "paragraph",
      text: "If you want to return to something later, use Keep.",
    },
    {
      type: "paragraph",
      text: "If you want to support a creator financially, look for Show Love or their Love Jar, where available.",
    },
    {
      type: "paragraph",
      text: "Loving a track does not automatically Keep it, follow the artist, subscribe you, purchase it, or give you access to restricted content.",
    },

    { type: "heading", text: "Love responsibly" },
    {
      type: "paragraph",
      text: "Love content because you genuinely appreciate it.",
    },
    {
      type: "paragraph",
      text: "Do not use Loves to coordinate spam, manipulate engagement, harass another member, or falsely imply that you own, endorse, represent, or are affiliated with a creator or organization.",
    },
    {
      type: "paragraph",
      text: "MusicOSY may limit interaction actions when necessary to protect the community from spam, abuse, fraud, safety concerns, or other misuse.",
    },
    {
      type: "paragraph",
      text: "You may not be able to Love content if it is unavailable, private, restricted, removed, blocked between you and another member, or otherwise ineligible for interaction.",
    },
  ],
  related: [
    "/resources/help-center/using-musicosy/content-interaction/love-and-keep-content",
    "/resources/help-center/using-musicosy/content-interaction/comment",
    "/resources/help-center/using-musicosy/content-interaction/leave-a-note-and-join-the-conversation",
    "/resources/help-center/using-musicosy/content-interaction/share",
    "/resources/help-center/using-musicosy/content-interaction/repost",
    "/resources/help-center/using-musicosy/content-interaction/resing-and-pass-the-mic",
    "/resources/help-center/using-musicosy/content-interaction/save-content",
    "/resources/help-center/using-musicosy/content-interaction/block-and-mute",
    "/resources/help-center/using-musicosy/collections-and-library/keep-and-organize-your-library",
    "/resources/help-center/using-musicosy/discover-and-browse/manage-your-home-feed-and-recommendations",
    "/resources/help-center/using-musicosy/discover-and-browse/recommended-creators-and-music",
  ],
};
