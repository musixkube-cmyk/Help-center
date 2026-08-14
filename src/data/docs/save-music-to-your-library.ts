import type { Doc } from "./types";

/**
 * "Save music to your Library" — Using Music OSY → Collections & Library
 * doc (position 7).
 *
 * Covers Keeping music specifically: how to Keep music from different browse
 * surfaces, what happens when you Keep (action vs no-action table), Keep vs
 * Love comparison, playing/organizing saved music, how the Library handles
 * unavailable music, and FAQs.
 *
 * Content provided verbatim by the user; structured into blocks.
 */
export const saveMusicToYourLibraryDoc: Doc = {
  path: "/resources/help-center/using-musicosy/collections-and-library/save-music-to-your-library",
  blocks: [
    {
      type: "paragraph",
      text: "On MusicOSY, saving music for future listening is called a Keep. When you Keep a song, album, or release, you create a personal reference that adds the music to your Library. This allows you to quickly find your favorite tracks, build personalized recommendations, and organize your listening experience without cluttering your public profile.",
    },
    {
      type: "paragraph",
      text: "Because MusicOSY separates social discovery from continuous listening, your Library is your private sanctuary. Saving music here is entirely for your own convenience and organization.",
    },

    { type: "heading", text: "How to Keep music" },
    {
      type: "paragraph",
      text: "You can save music to your Library from almost anywhere on the platform. Look for the Keep button, which is represented by a bookmark icon.",
    },
    {
      type: "table",
      headers: ["Where you are browsing", "How to Keep the music"],
      rows: [
        ["The Listen Player", "Tap the bookmark icon on the now-playing bar or the full-screen player."],
        ["Discover or The Stage", "Tap the action menu (three dots) on a song-first post or video, then select Keep."],
        ["Search Results", "Tap the bookmark icon directly next to the track or release title."],
        ["Artist Pages", "Tap the Keep button on any track listing, album, or release header."],
      ],
    },
    {
      type: "callout",
      variant: "note",
      text: "If you have already Kept an item, the bookmark icon will appear filled in. Tapping it again will remove the item from your Library.",
    },

    { type: "heading", text: "What happens when you Keep music" },
    {
      type: "paragraph",
      text: "A Keep is strictly a personal relationship between you and the catalog object. It is designed to help you organize your listening without triggering unintended social or commercial actions.",
    },
    {
      type: "table",
      headers: ["Action", "Does a Keep do this?"],
      rows: [
        ["Add the song to your personal Library", "Yes. It will appear in your Keeps and Library search."],
        ["Improve your future recommendations", "Yes. The platform uses your Keeps to understand your taste."],
        ["Notify the creator that you saved it", "No. Creators see aggregate save counts, not individual identities."],
        ["Make the song visible to your followers", "No. Your Keeps are completely private by default."],
        ["Grant playback access to paid or subscriber-only music", "No. You must still purchase or subscribe to unlock gated content."],
      ],
    },
    {
      type: "callout",
      variant: "warning",
      text: "Keeping a subscriber-only track or a paid release will add it to your Library as a reference. However, the track will remain locked until you complete the required purchase or join the creator's Circle.",
    },

    { type: "heading", text: "Keep vs. Love" },
    {
      type: "paragraph",
      text: "MusicOSY provides two distinct ways to interact with music you enjoy. It is important to understand the difference between saving a track for later and expressing public appreciation.",
    },
    {
      type: "table",
      headers: ["Feature", "Keep (Bookmark Icon)", "Love (Heart Icon)"],
      rows: [
        ["Primary Purpose", "Save to your personal Library for quick retrieval.", "Express appreciation and support the creator."],
        ["Visibility", "Strictly private. Only you can see your Keeps.", "Public. Contributes to the visible Love count on the track."],
        ["Library Organization", "Adds the item to your Library and Keeps section.", "Does not automatically add the item to your Library."],
        ["Creator Notification", "None.", "None (creators only see aggregate Love counts)."],
        ["Best Used When", "You want to listen to the song again later or add it to a Setlist.", "You want to show support, boost the track's social metrics, or tell the algorithm you enjoy this style."],
      ],
    },
    {
      type: "callout",
      variant: "note",
      text: "You can both Keep and Love the same track. Many members Love a song to support the artist, and then Keep it so they can easily add it to their workout or commute Setlists later.",
    },

    { type: "heading", text: "Playing and organizing your saved music" },
    {
      type: "paragraph",
      text: "Once you have Kept music, it lives in the Keeps section of your Library. From there, you can manage how you listen to it.",
    },
    {
      type: "list",
      items: [
        { lead: "Play immediately:", text: "Tap any Kept song to start playback. The player will automatically load your Keeps into your Up Next queue." },
        { lead: "Add to a Setlist:", text: "Select multiple Kept songs and add them to a new or existing Setlist to build an ordered playback sequence." },
        { lead: "Add to a Crate:", text: "Move Kept reference tracks, stems, or albums into a Crate to organize them by project, mood, or theme without forcing a playback order." },
        { lead: "Take It With You:", text: "If you have an eligible plan or own the music, you can download your Kept songs for offline listening." },
      ],
    },

    { type: "heading", text: "How your Library handles unavailable music" },
    {
      type: "paragraph",
      text: "Because your Library relies on reference links to the canonical MusicOSY catalog, changes to the underlying music will affect how it appears in your saved items.",
    },
    {
      type: "table",
      headers: ["Event", "What happens in your Library"],
      rows: [
        ["A creator unpublishes a track", "The Keep remains in your Library as a historical record, but the track will display an \"Unavailable\" status and will be skipped during playback."],
        ["A track becomes restricted in your territory", "The item remains visible in your Library. However, playback and offline downloads will be blocked when you are physically located in the restricted region."],
        ["Your subscription to a creator ends", "Subscriber-only Keeps will lock. You will see the item in your Library, but it will require a renewed subscription to access."],
      ],
    },
    {
      type: "callout",
      variant: "warning",
      text: "If a Kept item becomes permanently unavailable due to a rights takedown or platform removal, you cannot restore playback. However, the reference will remain in your Library history so you can remember what you previously saved and search for alternative versions.",
    },

    { type: "heading", text: "Frequently Asked Questions" },

    { type: "heading", text: "Is there a limit to how many songs I can Keep?", level: 3 },
    {
      type: "paragraph",
      text: "Standard member accounts can Keep tens of thousands of items. Your Library is designed to scale with your taste over years of active listening and discovery.",
    },

    { type: "heading", text: "If I Keep a song, does it automatically download to my device?", level: 3 },
    {
      type: "paragraph",
      text: "No. Keeping a song only saves a reference to your Library. To save the actual audio file for offline listening, you must use the Take It With You feature on eligible tracks, albums, or Setlists.",
    },

    { type: "heading", text: "Can other members see what I have Kept?", level: 3 },
    {
      type: "paragraph",
      text: "No. Your Keeps are strictly private. Other members, creators, and workspaces cannot see your saved items. The only way another member can see your saved music is if you manually add those tracks to a Public or Unlisted Setlist and share it.",
    },

    { type: "heading", text: "Does Keeping a track count as a stream for the creator?", level: 3 },
    {
      type: "paragraph",
      text: "No. A Keep is a library action, not a playback action. A qualified stream is only recorded when you actively listen to the track for the required duration in the Listen environment.",
    },
  ],
  related: [
    "/resources/help-center/using-musicosy/collections-and-library/collections",
    "/resources/help-center/using-musicosy/collections-and-library/create-collections",
    "/resources/help-center/using-musicosy/collections-and-library/shared-collections",
    "/resources/help-center/using-musicosy/collections-and-library/playlists",
    "/resources/help-center/using-musicosy/collections-and-library/your-library",
    "/resources/help-center/using-musicosy/collections-and-library/keep-and-organize-your-library",
    "/resources/help-center/using-musicosy/collections-and-library/edit-or-delete-a-collection",
    "/resources/help-center/using-musicosy/collections-and-library/add-remove-and-reorder-playlist-items",
  ],
};
