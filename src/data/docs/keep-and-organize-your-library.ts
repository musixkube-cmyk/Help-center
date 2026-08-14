import type { Doc } from "./types";

/**
 * "Keep and organize your Library" — Using Music OSY → Collections & Library
 * doc (position 6).
 *
 * Covers Keeping items (what you can Keep, how to Keep), organizing your
 * Library (filter/sort/search/Setlists/Crates tools), moving Keeps into
 * collections, managing unavailable media, Library privacy and visibility,
 * and FAQs.
 *
 * Content provided verbatim by the user; structured into blocks.
 */
export const keepAndOrganizeYourLibraryDoc: Doc = {
  path: "/resources/help-center/using-musicosy/collections-and-library/keep-and-organize-your-library",
  blocks: [
    {
      type: "paragraph",
      text: "Your Library is your personal home on MusicOSY. When you discover a song, video, podcast, or creator that resonates with you, you can Keep it. A Keep is a personal save relationship that adds the item to your Library for quick, repeat access.",
    },
    {
      type: "paragraph",
      text: "While your Library automatically tracks your purchases, downloads, and listening history, your Keeps are entirely controlled by you. This guide will show you how to save media, organize your growing collection, and manage your personal music culture hub.",
    },

    { type: "heading", text: "What you can Keep" },
    {
      type: "paragraph",
      text: "You can create a Keep relationship with almost any eligible public or gated item on the platform.",
    },
    {
      type: "table",
      headers: ["Item Type", "Examples"],
      rows: [
        ["Music", "Individual tracks, albums, EPs, and singles"],
        ["Video", "Music videos, visualizers, and short clips"],
        ["Podcasts", "Specific episodes or entire podcast shows"],
        ["Creators", "Artist pages, producer profiles, and podcast hosts"],
        ["Events", "Upcoming local shows, tour dates, and livestreams"],
        ["Commerce", "Merchandise products, tickets, and digital downloads"],
      ],
    },
    {
      type: "callout",
      variant: "note",
      text: "Keeping an item is different from Loving it. A Love expresses public appreciation and supports the creator's social metrics. A Keep is a private action that simply saves the item to your personal Library for future retrieval.",
    },

    { type: "heading", text: "How to Keep an item" },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Find the media or profile you want to save while browsing The Stage, searching, or visiting a creator profile." },
        { lead: "Tap or click the Keep button", text: "(the bookmark icon)." },
        { text: "The item is immediately added to your Library under the Keeps section." },
      ],
    },
    {
      type: "paragraph",
      text: "To remove a Keep, simply tap the Keep button again. The item will be removed from your personal saves.",
    },

    { type: "heading", text: "Organizing your Library" },
    {
      type: "paragraph",
      text: "As your Library grows, finding specific tracks or reference materials can become difficult. MusicOSY provides several built-in tools to help you organize your Keeps and maintain a clean listening environment.",
    },
    {
      type: "table",
      headers: ["Organization Tool", "How to Use It"],
      rows: [
        ["Filter by Type", "Use the top navigation tabs in your Library to isolate Music, Videos, Podcasts, Events, or Merchandise."],
        ["Sort Options", "Organize your Keeps by Date Added, Alphabetical order, Creator name, or Most Played."],
        ["Library Search", "Use the search bar while inside the Library to instantly find a specific track or creator without querying the global MusicOSY catalog."],
        ["Setlists", "Move your playable Keeps into a Setlist to build an ordered, sequential playback queue."],
        ["Crates", "Group mixed media, merchandise, samples, and project references into a Crate for thematic organization."],
      ],
    },
    {
      type: "callout",
      variant: "warning",
      text: "Keeping an item does not automatically add it to a Setlist or Crate. You must manually add your Keeps to your collections if you want to build specific listening queues or project folders.",
    },

    { type: "heading", text: "Moving Keeps into Collections" },
    {
      type: "paragraph",
      text: "Your Keeps act as a master list of everything you have saved. To turn that master list into an actionable experience, you should move items into Collections.",
    },
    {
      type: "list",
      items: [
        { lead: "For continuous listening:", text: "Select your favorite Kept songs and add them to a Setlist. This creates an ordered playlist that you can play from top to bottom." },
        { lead: "For project organization:", text: "Select Kept reference tracks, sound samples, and merchandise ideas and add them to a Crate. This creates a flexible folder that does not force a playback sequence." },
      ],
    },

    { type: "heading", text: "Managing unavailable media" },
    {
      type: "paragraph",
      text: "Because your Library relies on reference links to the canonical MusicOSY catalog, changes to the underlying media will affect how items appear in your Keeps.",
    },
    {
      type: "table",
      headers: ["Event", "What happens in your Library"],
      rows: [
        ["A creator unpublishes a track", "The Keep remains in your Library as a historical record, but the item will display an \"Unavailable\" status and will be skipped during playback."],
        ["A track becomes territory-restricted", "The item remains visible in your Library. However, playback and \"Take It With You\" downloads will be blocked when you are physically located in the restricted region."],
        ["Your subscription to a creator ends", "Subscriber-only Keeps will lock. You will see the item in your Library, but it will require a renewed subscription to access or download."],
      ],
    },
    {
      type: "callout",
      variant: "warning",
      text: "If a Kept item becomes permanently unavailable due to a rights takedown or platform removal, you cannot restore playback. However, the reference will remain in your Library history so you can remember what you previously saved.",
    },

    { type: "heading", text: "Library privacy and visibility" },
    {
      type: "paragraph",
      text: "Your Library is your private sanctuary on MusicOSY. The platform is designed to protect your personal listening habits and save states.",
    },
    {
      type: "list",
      items: [
        { lead: "Keeps are private:", text: "Other members, creators, and workspaces cannot see your saved items." },
        { lead: "History is private:", text: "Your listening and watching history is completely hidden from the public." },
        { lead: "Collections dictate sharing:", text: "The only way another member can see your Keeps is if you manually add them to a Public or Unlisted Setlist or Crate, and then share that specific collection." },
      ],
    },

    { type: "heading", text: "Frequently Asked Questions" },

    { type: "heading", text: "Does Keeping a track notify the creator?", level: 3 },
    {
      type: "paragraph",
      text: "No. Keeps are strictly private actions. Creators can see aggregate analytics about how many people have saved their music, but they cannot see the specific identities of the members who Kept their tracks.",
    },

    { type: "heading", text: "Is there a limit to how many items I can Keep?", level: 3 },
    {
      type: "paragraph",
      text: "Standard member accounts can Keep tens of thousands of items. Your Library is designed to scale with your taste over years of active listening and discovery.",
    },

    { type: "heading", text: "Can I Keep a post or a social update from The Stage?", level: 3 },
    {
      type: "paragraph",
      text: "Yes. If a creator releases a post, announcement, or clip that you want to reference later, you can Keep it. It will be stored in your Library alongside your saved music and videos.",
    },

    { type: "heading", text: "How do I download my Keeps for offline listening?", level: 3 },
    {
      type: "paragraph",
      text: "Keeping an item does not automatically download it. To save media to your device, you must use the Take It With You feature on eligible tracks, albums, or Setlists. Downloads require an active subscription, purchase entitlement, or ad-free plan, depending on the creator's access rules.",
    },
  ],
  related: [
    "/resources/help-center/using-musicosy/collections-and-library/collections",
    "/resources/help-center/using-musicosy/collections-and-library/create-collections",
    "/resources/help-center/using-musicosy/collections-and-library/shared-collections",
    "/resources/help-center/using-musicosy/collections-and-library/playlists",
    "/resources/help-center/using-musicosy/collections-and-library/your-library",
    "/resources/help-center/using-musicosy/collections-and-library/save-music-to-your-library",
    "/resources/help-center/using-musicosy/collections-and-library/edit-or-delete-a-collection",
    "/resources/help-center/using-musicosy/collections-and-library/add-remove-and-reorder-playlist-items",
  ],
};
