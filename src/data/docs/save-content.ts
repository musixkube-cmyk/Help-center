import type { Doc } from "./types";

/**
 * "Save content" — Using MusicOSY → Content Interaction doc.
 *
 * Saving content on MusicOSY is called Keeping it. Covers: how to Keep
 * content, finding your saved content in your Library, removing a Keep,
 * how Keep differs from Love (and Follow/Resing/Pass the Mic/Unlock),
 * organizing what you Keep, what happens if saved content becomes
 * unavailable, and keeping your Library personal.
 *
 * Content provided verbatim by the user; structured into blocks.
 */
export const saveContentDoc: Doc = {
  path: "/resources/help-center/using-musicosy/content-interaction/save-content",
  blocks: [
    {
      type: "paragraph",
      text: "Saving content on MusicOSY is called Keeping it.",
    },
    {
      type: "paragraph",
      text: "Use Keep to save music, videos, posts, creators, events, and other eligible content to your personal Library so you can find it again later.",
    },
    {
      type: "paragraph",
      text: "A Keep is for you. It helps you build your own music world without needing to remember every song, creator, post, or event you want to revisit.",
    },

    { type: "heading", text: "Keep content" },
    {
      type: "paragraph",
      text: "To save eligible content:",
    },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Open the track, Fresh Drop (release), video, post, creator, event, product, or other item on The Stage, in Listen mode, or via Search." },
        { text: "Select Keep or the save control." },
        { text: "The item is added to your Library." },
        { text: "Open your Library when you want to find it again." },
      ],
    },
    {
      type: "paragraph",
      text: "You can Keep eligible:",
    },
    {
      type: "list",
      items: [
        { text: "Songs and tracks" },
        { text: "Albums, EPs, and releases" },
        { text: "Podcast episodes" },
        { text: "Videos and clips" },
        { text: "Posts" },
        { text: "Creators and Artist Pages" },
        { text: "Events" },
        { text: "Merch Table products" },
        { text: "Other supported MusicOSY content" },
      ],
    },
    {
      type: "paragraph",
      text: "Your Keeps stay connected to your personal MusicOSY account and Library. A Workspace does not own or control your personal Keeps.",
    },

    { type: "heading", text: "Find your saved content" },
    {
      type: "paragraph",
      text: "Open your Library to return to the content you have Kept.",
    },
    {
      type: "paragraph",
      text: "Your Library can include:",
    },
    {
      type: "list",
      items: [
        { text: "Keeps" },
        { text: "Setlists" },
        { text: "Downloads" },
        { text: "Purchases" },
        { text: "Listening history" },
        { text: "Subscriptions (Inner Circle memberships)" },
        { text: "Other saved content" },
      ],
    },
    {
      type: "paragraph",
      text: "Use your Library when you want to return to something you discovered on The Stage, found through Search, heard in Listen mode, received in Backstage, or saved from an Artist Page.",
    },

    { type: "heading", text: "Remove a Keep" },
    {
      type: "paragraph",
      text: "You can remove a saved item when you no longer want it in your Library.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Open the item or find it in your Library." },
        { text: "Select the active Keep button or the available remove option." },
        { text: "Confirm the removal if MusicOSY asks you to." },
      ],
    },
    {
      type: "paragraph",
      text: "Only one active Keep exists for each eligible item in your personal Library. Selecting Keep again removes that personal save relationship where allowed.",
    },
    {
      type: "paragraph",
      text: "Removing a Keep does not:",
    },
    {
      type: "list",
      items: [
        { text: "Delete the original content" },
        { text: "Unfollow the creator" },
        { text: "Remove a Love" },
        { text: "Cancel a purchase or subscription" },
        { text: "Remove an event ticket" },
        { text: "Delete a Setlist" },
        { text: "Remove the item from another member’s Library" },
      ],
    },

    { type: "heading", text: "Keep is not the same as Love" },
    {
      type: "paragraph",
      text: "Use Love when you want to show social appreciation.",
    },
    {
      type: "paragraph",
      text: "Use Keep when you want to save something for yourself.",
    },
    {
      type: "table",
      headers: ["Action", "What it does"],
      rows: [
        ["Love", "Shows appreciation for eligible content."],
        ["Keep", "Saves eligible content to your personal Library."],
        ["Follow", "Connects you to a creator or profile to see their future updates."],
        ["Resing", "Amplifies content to your community on The Stage."],
        ["Pass the Mic (Share)", "Sends content to another person or destination."],
        ["Unlock (Purchase)", "Gives access only after a completed eligible transaction."],
      ],
    },
    {
      type: "paragraph",
      text: "Keeping a song does not automatically Love it, Follow the artist, subscribe you, create a purchase, grant access, or notify the creator.",
    },

    { type: "heading", text: "Organize what you keep" },
    {
      type: "paragraph",
      text: "Keeping content is the first step. Organizing it makes your Library useful.",
    },
    {
      type: "paragraph",
      text: "After saving music, you can:",
    },
    {
      type: "list",
      items: [
        { text: "Add eligible tracks to a Setlist" },
        { text: "Create a Crate (collection) around a mood, genre, season, or memory" },
        { text: "Build a private reference library" },
        { text: "Save music for later listening" },
        { text: "Keep events you may want to attend" },
        { text: "Return to creators you want to explore more deeply" },
        { text: "Organize music before sharing it with someone else via Backstage" },
      ],
    },
    {
      type: "paragraph",
      text: "Example:",
    },
    {
      type: "quote",
      text: "Keep tracks throughout the week → Open Library on Friday → Add your favorites to a Weekend Reset Setlist → Share the Setlist in Backstage",
    },

    { type: "heading", text: "If saved content becomes unavailable" },
    {
      type: "paragraph",
      text: "Keeping something does not guarantee permanent access.",
    },
    {
      type: "paragraph",
      text: "An item may become unavailable because of rights, licensing, privacy, territory, age, moderation, enforcement, removal, or a change in the creator’s publication settings (e.g., taking a post Off Stage).",
    },
    {
      type: "paragraph",
      text: "If this happens, MusicOSY may show the item in your Library as unavailable history or remove it according to the item type and applicable policy. MusicOSY will not imply that you can still play, view, buy, or access content that is no longer available.",
    },

    { type: "heading", text: "Keep your Library personal" },
    {
      type: "paragraph",
      text: "Your Library is your personal MusicOSY space.",
    },
    {
      type: "paragraph",
      text: "Other members do not automatically see what you Keep. Your Keeps do not automatically appear on your profile, Feed, or Artist Page.",
    },
    {
      type: "paragraph",
      text: "If you want to share music you saved, create a public or shared Setlist, share the item directly via Pass the Mic, or Resing eligible content to your community.",
    },
  ],
  related: [
    "/resources/help-center/using-musicosy/content-interaction/love-and-keep-content",
    "/resources/help-center/getting-started/how-to-build-a-setlist",
    "/resources/help-center/using-musicosy/collections-and-library/your-library",
    "/resources/help-center/using-musicosy/collections-and-library/keep-and-organize-your-library",
    "/resources/help-center/using-musicosy/collections-and-library/create-collections",
    "/resources/help-center/using-musicosy/content-interaction/block-and-mute",
  ],
};
