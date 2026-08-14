import type { Doc } from "./types";

/**
 * "Love and Keep content" — Using Music OSY → Content Interaction doc.
 *
 * MusicOSY gives you two simple ways to respond when something connects
 * with you: Love (appreciation) and Keep (save). Covers: Loving content,
 * Keeping content, a 6-row comparison table distinguishing Love/Keep/
 * Follow/Resing/Subscribe/Show Love, finding your Keeps, what happens
 * when Kept content becomes unavailable, Love and privacy, and Love and
 * recommendations.
 *
 * Content provided verbatim by the user; structured into blocks.
 */
export const loveAndKeepContentDoc: Doc = {
  path: "/resources/help-center/using-musicosy/content-interaction/love-and-keep-content",
  blocks: [
    {
      type: "paragraph",
      text: "MusicOSY gives you two simple ways to respond when something connects with you:",
    },
    {
      type: "list",
      items: [
        { lead: "Love", text: "shows appreciation." },
        { lead: "Keep", text: "saves something for you." },
      ],
    },
    {
      type: "paragraph",
      text: "They may look similar, but they do different things.",
    },
    {
      type: "paragraph",
      text: "Use Love when you want to say, “This moved me.”",
    },
    {
      type: "paragraph",
      text: "Use Keep when you want to say, “I want to come back to this.”",
    },

    { type: "heading", text: "Love content" },
    {
      type: "paragraph",
      text: "A Love is MusicOSY’s version of a like.",
    },
    {
      type: "paragraph",
      text: "You can Love eligible songs, releases, episodes, videos, posts, events, creators, and other supported content.",
    },
    {
      type: "paragraph",
      text: "When you Love something:",
    },
    {
      type: "list",
      items: [
        { text: "You express positive appreciation" },
        { text: "The content may receive an eligible Love count or aggregate signal" },
        { text: "The creator may see aggregate appreciation, depending on content and privacy settings" },
        { text: "MusicOSY may use the interaction as an eligible recommendation signal" },
        { text: "You help show what is connecting with the community" },
      ],
    },
    {
      type: "paragraph",
      text: "To Love something:",
    },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Open the eligible post, track, video, release, episode, event, or other content." },
        { text: "Select Love." },
        { text: "Select Love again if you want to remove it." },
      ],
    },
    {
      type: "paragraph",
      text: "You can have one active Love for an eligible item. Selecting Love again removes your active Love where the item remains eligible.",
    },

    { type: "heading", text: "Keep content" },
    {
      type: "paragraph",
      text: "A Keep saves eligible content to your personal Library.",
    },
    {
      type: "paragraph",
      text: "Keep something when you want to return to it later, organize it, add it to a Setlist, or remember it as part of your music world.",
    },
    {
      type: "paragraph",
      text: "You can Keep eligible:",
    },
    {
      type: "list",
      items: [
        { text: "Tracks" },
        { text: "Releases" },
        { text: "Episodes" },
        { text: "Videos" },
        { text: "Creators" },
        { text: "Events" },
        { text: "Products" },
        { text: "Other supported MusicOSY content" },
      ],
    },
    {
      type: "paragraph",
      text: "To Keep something:",
    },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Open the eligible item." },
        { text: "Select Keep." },
        { text: "Find it later in your Library." },
        { text: "Select Keep again if you want to remove it, where available." },
      ],
    },
    {
      type: "paragraph",
      text: "A Keep creates a personal Library relationship. It does not change your current playback session.",
    },

    { type: "heading", text: "Love and Keep do different things" },
    {
      type: "table",
      headers: ["Action", "Purpose", "What it does not do"],
      rows: [
        ["Love", "Express appreciation", "Does not save the item to your Library"],
        ["Keep", "Save for personal retrieval", "Does not automatically notify or follow the creator"],
        ["Follow", "Stay connected to a creator or profile", "Does not save their music to your Library"],
        ["Resing", "Share content with attribution", "Does not save or purchase the content"],
        ["Subscribe", "Join an eligible supporter relationship", "Does not automatically Keep every release"],
        ["Show Love", "Send a one-time direct payment, where available", "Is not the same as a standard Love"],
      ],
    },
    {
      type: "paragraph",
      text: "Loving a track does not purchase it, give you access to restricted content, grant rights, create a financial obligation, or promise that it will be recommended to other members.",
    },
    {
      type: "paragraph",
      text: "Keeping an item does not follow the creator, subscribe you, start a purchase, grant access, change public ranking, or automatically notify the creator.",
    },

    { type: "heading", text: "Find your Keeps" },
    {
      type: "paragraph",
      text: "Open your Library to return to content you have Kept.",
    },
    {
      type: "paragraph",
      text: "Your Library can help you organize and revisit:",
    },
    {
      type: "list",
      items: [
        { text: "Music you want to hear again" },
        { text: "Videos and posts you want to revisit" },
        { text: "Creators you want to remember" },
        { text: "Events you may want to attend" },
        { text: "Products you may want to explore later" },
        { text: "Content you want to add to a Setlist" },
      ],
    },
    {
      type: "paragraph",
      text: "Keeps are personal. Your Keep activity is not automatically public.",
    },

    { type: "heading", text: "If Kept content becomes unavailable" },
    {
      type: "paragraph",
      text: "Keeping something does not guarantee that it will always remain playable or available.",
    },
    {
      type: "paragraph",
      text: "A Kept item can become unavailable because of:",
    },
    {
      type: "list",
      items: [
        { text: "Rights or licensing changes" },
        { text: "Territory restrictions" },
        { text: "Age restrictions" },
        { text: "Privacy changes" },
        { text: "Removal from MusicOSY" },
        { text: "A creator taking content off The Stage" },
        { text: "Safety, moderation, or enforcement actions" },
        { text: "An expired purchase, rental, subscription, or other access condition" },
      ],
    },
    {
      type: "paragraph",
      text: "If this happens, the item may remain in your Library as unavailable history, or it may be removed according to the type of content and applicable policy. MusicOSY should not imply that you still have access when the item is unavailable.",
    },

    { type: "heading", text: "Love and privacy" },
    {
      type: "paragraph",
      text: "Your Love may be public, private, aggregate-only, or unavailable depending on the content, relationship, privacy settings, safety rules, and platform configuration.",
    },
    {
      type: "paragraph",
      text: "A creator may receive aggregate Love information, but whether they can see individual members who Loved something depends on content privacy and member visibility settings.",
    },
    {
      type: "paragraph",
      text: "Your Love may be removed from ordinary public display if you block the creator, the creator blocks you, you delete your account, or the content becomes unavailable.",
    },

    { type: "heading", text: "Love and recommendations" },
    {
      type: "paragraph",
      text: "Loves and Keeps can help MusicOSY understand the kinds of music and culture that matter to you.",
    },
    {
      type: "paragraph",
      text: "They may influence eligible recommendations over time, but they do not guarantee that you will see more of a creator, that a creator will trend, or that other members will be shown the same content.",
    },
    {
      type: "paragraph",
      text: "Use Loves and Keeps honestly. They are part of your personal music experience and the wider social energy of MusicOSY.",
    },
  ],
  related: [
    "/resources/help-center/using-musicosy/content-interaction/leave-a-note-and-join-the-conversation",
    "/resources/help-center/using-musicosy/content-interaction/resing-and-pass-the-mic",
    "/resources/help-center/using-musicosy/collections-and-library/keep-and-organize-your-library",
    "/resources/help-center/using-musicosy/collections-and-library/your-library",
    "/resources/help-center/using-musicosy/content-interaction/block-and-mute",
  ],
};
