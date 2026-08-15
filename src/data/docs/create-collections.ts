import type { Doc } from "./types";

/**
 * "Create collections" — Using MusicOSY → Collections & Library doc (position 2).
 *
 * Covers creating Setlists (ordered playback) and Crates (themed groupings),
 * visibility settings for Setlists, choosing the right collection type, and
 * adding items to either type of collection from anywhere on the platform.
 *
 * Content provided verbatim by the user; structured into blocks.
 */
export const createCollectionsDoc: Doc = {
  path: "/resources/help-center/using-musicosy/collections-and-library/create-collections",
  blocks: [
    {
      type: "paragraph",
      text: "On MusicOSY, collections are your personal tools for organizing the music, videos, podcasts, and products you love. Depending on how you want to use your saved items, you will create either a Setlist or a Crate.",
    },
    {
      type: "paragraph",
      text: "Setlists are ordered sequences designed for continuous playback. They are the MusicOSY equivalent of traditional playlists.",
    },
    {
      type: "paragraph",
      text: "Crates are flexible folders used to group mixed media, references, sounds, and products around a specific theme, project, or mood.",
    },
    {
      type: "paragraph",
      text: "This guide will walk you through creating, populating, and managing both types of collections.",
    },

    { type: "heading", text: "How to create a Setlist" },
    {
      type: "paragraph",
      text: "Use a Setlist when you want to build a specific listening or watching experience, such as a workout mix, a curated genre journey, or a queue of podcast episodes.",
    },

    { type: "heading", text: "Creation steps", level: 3 },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Navigate to your Library from the main navigation menu." },
        { text: "Select the Create Setlist button." },
        { text: "Enter a Title for your Setlist." },
        { text: "Add an optional Description and upload a Cover Image if desired." },
        { text: "Choose your Visibility setting." },
        { text: "Select Create." },
      ],
    },
    {
      type: "paragraph",
      text: "Your new Setlist is now empty and ready for you to add media.",
    },
    {
      type: "callout",
      variant: "note",
      text: "If you make a Setlist Collaborative, you can invite specific members to add, remove, or reorder tracks. Collaborators can only add items that they are personally entitled to view and play.",
    },

    { type: "heading", text: "Setlist visibility settings", level: 3 },
    {
      type: "paragraph",
      text: "When you create a Setlist, you must decide who can see it and who can edit it. You can change these settings at any time.",
    },
    {
      type: "table",
      headers: ["Visibility Setting", "Who Can See It", "Who Can Edit It", "Best Use Case"],
      rows: [
        ["Private", "Only you", "Only you", "Personal queues, private listening, unfinished ideas"],
        ["Unlisted", "Anyone with the direct link", "Only you", "Sharing a specific mix with friends or collaborators via Backstage messages"],
        ["Public", "Everyone on MusicOSY", "Only you", "Showcasing your taste on your profile and in global search"],
        ["Collaborative", "Based on your base visibility", "You and approved collaborators", "Building a queue together with friends or bandmates"],
      ],
    },

    { type: "heading", text: "How to create a Crate" },
    {
      type: "paragraph",
      text: "Use a Crate when you need to organize items that are not meant for sequential playback. Crates are ideal for producers gathering samples, managers organizing tour assets, or fans saving merchandise and event flyers.",
    },

    { type: "heading", text: "Creation steps", level: 3 },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Navigate to your Library." },
        { text: "Select the Create Crate button." },
        { text: "Enter a Name for your Crate (for example, \"Album 2 References\" or \"Summer Tour Merch\")." },
        { text: "Add an optional Description." },
        { text: "Choose your Visibility setting (Private, Unlisted, or Public)." },
        { text: "Select Create." },
      ],
    },
    {
      type: "callout",
      variant: "warning",
      text: "Unlike a Setlist, a Crate does not have a playback sequence. If you open a Crate and press play on a song inside it, MusicOSY will simply start that individual song or add it to your Up Next queue, rather than playing the entire Crate in order.",
    },

    { type: "heading", text: "Choosing the right collection type" },
    {
      type: "paragraph",
      text: "Because Setlists and Crates serve different purposes, they accept different types of media and behave differently during playback.",
    },
    {
      type: "table",
      headers: ["Feature", "Setlist", "Crate"],
      rows: [
        ["Primary Purpose", "Ordered playback sequence", "Themed grouping of mixed items"],
        ["Eligible Items", "Songs, albums, music videos, podcast episodes", "All Setlist items, plus social posts, sound samples, stems, presets, merchandise, events, and creator profiles"],
        ["Playback Behavior", "Plays sequentially from top to bottom", "Plays individual items or adds them to your Up Next queue"],
        ["Collaboration", "Supports Collaborative Setlists", "Individual ownership only"],
      ],
    },

    { type: "heading", text: "Adding items to your collections" },
    {
      type: "paragraph",
      text: "You can add items to your Setlists and Crates from almost anywhere on the platform.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Find the song, video, podcast, or product you want to save." },
        { text: "Tap or click the Action Menu (the three dots next to the item)." },
        { text: "Select Add to Setlist or Add to Crate." },
        { text: "Choose the specific collection from your list, or select Create New to build a collection on the fly." },
      ],
    },
    {
      type: "callout",
      variant: "note",
      text: "Adding an item to a collection creates a reference link, not a physical copy. If a creator unpublishes a song or a product sells out and is removed from the platform, the item will remain in your collection but will display an \"Unavailable\" status.",
    },

    { type: "heading", text: "Managing your collections" },
    {
      type: "paragraph",
      text: "Once your collections are built, you can easily maintain them to keep your Library organized. You can update titles, change visibility, and reorder tracks at any time. For detailed instructions on modifying your collections after they are created, please refer to our dedicated management guides listed below.",
    },
  ],
  related: [
    "/resources/help-center/using-musicosy/collections-and-library/collections",
    "/resources/help-center/using-musicosy/collections-and-library/shared-collections",
    "/resources/help-center/using-musicosy/collections-and-library/playlists",
    "/resources/help-center/using-musicosy/collections-and-library/your-library",
    "/resources/help-center/using-musicosy/collections-and-library/keep-and-organize-your-library",
    "/resources/help-center/using-musicosy/collections-and-library/save-music-to-your-library",
    "/resources/help-center/using-musicosy/collections-and-library/edit-or-delete-a-collection",
    "/resources/help-center/using-musicosy/collections-and-library/add-remove-and-reorder-playlist-items",
  ],
};
