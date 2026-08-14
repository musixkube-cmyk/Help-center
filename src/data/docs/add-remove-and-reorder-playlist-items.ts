import type { Doc } from "./types";

/**
 * "Add, remove, and reorder playlist items" — Using Music OSY → Collections &
 * Library doc (position 9, final doc in sub-section).
 *
 * Comprehensive guide to managing items inside Setlists (MusicOSY playlists):
 * what you can add, adding items from 5 sources (+ entire albums), removing
 * items (single/multiple/clear all), reordering items, managing items in
 * Collaborative Setlists (permissions), handling unavailable items,
 * Setlist items vs Up Next queue, tips for organizing, and FAQs.
 *
 * Content provided verbatim by the user; structured into blocks.
 */
export const addRemoveAndReorderPlaylistItemsDoc: Doc = {
  path: "/resources/help-center/using-musicosy/collections-and-library/add-remove-and-reorder-playlist-items",
  blocks: [
    {
      type: "paragraph",
      text: "On MusicOSY, playlists are called Setlists. A Setlist is an ordered sequence of playable media designed for continuous listening or watching. The order of items in your Setlist determines the playback sequence, so managing what is inside and where each item sits is essential to building the perfect listening experience.",
    },
    {
      type: "paragraph",
      text: "This guide covers everything you need to know about adding new items, removing existing ones, and changing the playback order within your Setlists.",
    },

    { type: "heading", text: "What you can add to a Setlist" },
    {
      type: "paragraph",
      text: "Because Setlists are built for sequential playback in the Listen environment, they only accept media that can be played continuously.",
    },
    {
      type: "table",
      headers: ["Eligible Item Type", "Examples"],
      rows: [
        ["Songs and Tracks", "Singles, album tracks, live recordings, remixes"],
        ["Music Videos", "Official videos, visualizers, live performance videos"],
        ["Podcast Episodes", "Individual episodes from any eligible show"],
        ["Live Replays", "Published replays of live sessions you have access to"],
        ["Full Albums or Releases", "Adding an album expands into its individual tracks in order"],
      ],
    },
    {
      type: "callout",
      variant: "note",
      text: "You cannot add social posts, merchandise products, event flyers, sound samples, or stems to a Setlist. Those items belong in a Crate, which is a flexible grouping folder not designed for sequential playback.",
    },

    { type: "heading", text: "Adding items to a Setlist" },
    {
      type: "paragraph",
      text: "You can add eligible media to a Setlist from almost anywhere on the platform.",
    },

    { type: "heading", text: "From the Listen player", level: 3 },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "While a track is playing, tap the Action Menu (three dots) on the now-playing bar." },
        { text: "Select Add to Setlist." },
        { text: "Choose an existing Setlist from your list, or select Create New Setlist to build one on the fly." },
        { text: "The item is added to the end of the selected Setlist." },
      ],
    },

    { type: "heading", text: "From Discover or The Stage", level: 3 },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Find a song-first post, video, or podcast clip in your feed." },
        { text: "Tap the Action Menu on the item." },
        { text: "Select Add to Setlist." },
        { text: "Choose your destination Setlist." },
      ],
    },

    { type: "heading", text: "From Search", level: 3 },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Search for a track, album, episode, or creator." },
        { text: "Tap the Action Menu next to the result." },
        { text: "Select Add to Setlist." },
        { text: "Choose your destination Setlist." },
      ],
    },

    { type: "heading", text: "From a creator profile or Artist Page", level: 3 },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Open the creator's Music tab or Discography." },
        { text: "Tap the Action Menu next to any track or release." },
        { text: "Select Add to Setlist." },
        { text: "Choose your destination Setlist." },
      ],
    },

    { type: "heading", text: "From your Library", level: 3 },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Open your Library and navigate to your Keeps." },
        { text: "Select the items you want to add." },
        { text: "Tap Add to Setlist." },
        { text: "Choose your destination Setlist." },
      ],
    },
    {
      type: "callout",
      variant: "warning",
      text: "Adding an item to a Setlist creates a reference link to the canonical media object. It does not create a copy of the file. If the creator updates the track's audio quality, adds synchronized lyrics, or changes the artwork, your Setlist automatically reflects those improvements.",
    },

    { type: "heading", text: "Adding an entire album or release", level: 3 },
    {
      type: "paragraph",
      text: "When you add a full album or release to a Setlist, MusicOSY expands it into its individual tracks in the correct catalog order. This is useful when you want to include a complete album as part of a larger listening sequence.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Find the album or release in Search, on a creator profile, or in Discover." },
        { text: "Tap the Action Menu on the release header." },
        { text: "Select Add to Setlist." },
        { text: "The individual tracks are added in their original release order." },
      ],
    },

    { type: "heading", text: "Removing items from a Setlist" },
    {
      type: "paragraph",
      text: "You can remove any item from a Setlist you own or have edit permissions for.",
    },

    { type: "heading", text: "How to remove a single item", level: 3 },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Open the Setlist from your Library." },
        { text: "Find the item you want to remove." },
        { text: "Tap the Action Menu (three dots) next to the item." },
        { text: "Select Remove from Setlist." },
        { text: "The item is removed immediately." },
      ],
    },

    { type: "heading", text: "How to remove multiple items", level: 3 },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Open the Setlist." },
        { text: "Tap Edit or the Select button." },
        { text: "Tap each item you want to remove to select it." },
        { text: "Tap Remove." },
        { text: "Confirm the removal." },
      ],
    },

    { type: "heading", text: "How to clear all items", level: 3 },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Open the Setlist." },
        { text: "Tap the Settings icon (gear)." },
        { text: "Select Clear All Items." },
        { text: "Confirm the action." },
      ],
    },
    {
      type: "callout",
      variant: "warning",
      text: "Clearing all items removes every track from the Setlist but does not delete the Setlist itself. The Setlist title, description, cover image, visibility settings, and collaborator permissions remain intact. If you want to delete the Setlist entirely, use the Delete option in Settings instead.",
    },

    { type: "heading", text: "What removing an item does and does not do", level: 3 },
    {
      type: "table",
      headers: ["Action", "Effect"],
      rows: [
        ["Removes the item from this specific Setlist", "Yes"],
        ["Removes the item from your Library or Keeps", "No"],
        ["Deletes the media from MusicOSY", "No"],
        ["Affects other Setlists containing the same item", "No"],
        ["Notifies the creator", "No"],
        ["Removes the item from a collaborative Setlist for all members", "Yes, if you have remove permissions"],
      ],
    },

    { type: "heading", text: "Reordering items in a Setlist" },
    {
      type: "paragraph",
      text: "The order of items in your Setlist determines the playback sequence. You can change this order at any time.",
    },

    { type: "heading", text: "How to reorder", level: 3 },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Open the Setlist from your Library." },
        { text: "Tap Edit or the Reorder icon." },
        { text: "Press and hold the drag handle (three horizontal lines) next to any item." },
        { text: "Drag the item up or down to your preferred position." },
        { text: "Release to place the item." },
        { text: "Tap Save or Done when you are finished." },
      ],
    },
    {
      type: "callout",
      variant: "note",
      text: "Reordering is only available for Setlists that use manual ordering. If you are playing a Setlist in Shuffle mode, the playback order is randomized, but your saved manual order remains unchanged underneath.",
    },

    { type: "heading", text: "Reordering on mobile", level: 3 },
    {
      type: "paragraph",
      text: "On mobile devices, use the drag handle to move items. If you are having trouble with drag gestures, you can also use the Move to Top or Move to Bottom options in the item's Action Menu for quick repositioning.",
    },

    { type: "heading", text: "Reordering in Collaborative Setlists", level: 3 },
    {
      type: "paragraph",
      text: "If you are a collaborator on a shared Setlist and the owner has granted you reorder permissions, you can drag and drop items just as you would in your own Setlist. Your changes are visible to all collaborators immediately.",
    },
    {
      type: "paragraph",
      text: "If the owner has not granted reorder permissions, the drag handles will not appear, and the reorder option will not be available in the Action Menu.",
    },

    { type: "heading", text: "Managing items in Collaborative Setlists" },
    {
      type: "paragraph",
      text: "A Collaborative Setlist allows multiple members to contribute. The Setlist owner controls what each collaborator is allowed to do.",
    },

    { type: "heading", text: "Collaborator permissions", level: 3 },
    {
      type: "table",
      headers: ["Permission", "What the Collaborator Can Do"],
      rows: [
        ["Add items", "Search for and add eligible songs, videos, or episodes"],
        ["Remove items", "Remove any track from the Setlist, including tracks added by the owner"],
        ["Reorder items", "Change the playback sequence by dragging and dropping tracks"],
      ],
    },

    { type: "heading", text: "How permissions affect your editing experience", level: 3 },
    {
      type: "table",
      headers: ["Your Permission Level", "Add", "Remove", "Reorder"],
      rows: [
        ["Owner", "Always", "Always", "Always"],
        ["Collaborator with all permissions", "Yes", "Yes", "Yes"],
        ["Collaborator with add only", "Yes", "No", "No"],
        ["Collaborator with add and remove", "Yes", "Yes", "No"],
        ["Viewer or listener", "No", "No", "No"],
      ],
    },
    {
      type: "callout",
      variant: "warning",
      text: "As a collaborator, you can only add media that you are personally entitled to view and play. If you try to add a subscriber-only track that you do not have access to, the platform will block the action. The track must be available under your own account entitlements.",
    },

    { type: "heading", text: "Removing items added by other collaborators", level: 3 },
    {
      type: "paragraph",
      text: "If the owner has granted you remove permissions, you can remove any item from the Setlist, regardless of who added it. This includes items added by the owner. Use this capability responsibly in shared listening contexts.",
    },

    { type: "heading", text: "Handling unavailable items in a Setlist" },
    {
      type: "paragraph",
      text: "Because Setlists reference canonical media objects, changes to the underlying content can affect how items appear and play within your Setlist. Your Setlist is never broken or deleted when an item becomes unavailable.",
    },
    {
      type: "table",
      headers: ["Event", "What Happens in Your Setlist"],
      rows: [
        ["A creator unpublishes a track", "The item remains in your Setlist but displays an \"Unavailable\" status. The player skips it during playback."],
        ["A track becomes territory-restricted", "The item remains visible. Playback is blocked when you are in the restricted region."],
        ["Your subscription to a creator ends", "Subscriber-only items lock and require a renewed subscription to play."],
        ["A track is removed due to a rights claim", "The item displays as unavailable. The Setlist itself remains intact."],
        ["A purchased track is refunded", "The item locks and becomes unplayable."],
      ],
    },
    {
      type: "callout",
      variant: "note",
      text: "You can manually remove unavailable items from your Setlist at any time. However, if the item becomes available again later (for example, if a territory restriction is lifted or a subscription is renewed), you will need to add it back manually.",
    },

    { type: "heading", text: "Playback behavior with unavailable items", level: 3 },
    {
      type: "paragraph",
      text: "When you press play on a Setlist that contains unavailable items:",
    },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "The player loads the full Setlist into your Up Next queue." },
        { text: "Unavailable items are marked with a neutral status indicator." },
        { text: "During playback, the player automatically skips unavailable items." },
        { text: "Your listening session continues with the next available track." },
        { text: "The skipped item remains in the Setlist for future reference." },
      ],
    },

    { type: "heading", text: "Setlist items vs. your Up Next queue" },
    {
      type: "paragraph",
      text: "It is important to understand the difference between editing your Setlist and editing your playback queue.",
    },
    {
      type: "table",
      headers: ["Action", "Affects Your Saved Setlist?", "Affects Your Current Playback?"],
      rows: [
        ["Add, remove, or reorder items in the Setlist editor", "Yes", "Only on next playback"],
        ["Add or remove items in your Up Next queue during playback", "No", "Yes, for the current session only"],
        ["Clear your Up Next queue", "No", "Yes, stops current playback"],
        ["Shuffle playback mode", "No", "Changes playback order for the session"],
      ],
    },
    {
      type: "callout",
      variant: "warning",
      text: "Editing your Up Next queue while listening does not modify the saved Setlist. Queue changes apply only to your current listening session. If you want to permanently change the order or contents of your Setlist, you must open the Setlist editor and make changes there.",
    },

    { type: "heading", text: "Saving your queue as a Setlist", level: 3 },
    {
      type: "paragraph",
      text: "If you have built a great queue during a listening session and want to preserve it:",
    },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Open your Up Next queue from the player." },
        { text: "Tap Save as Setlist." },
        { text: "Enter a title and optional description." },
        { text: "Choose your visibility setting." },
        { text: "Tap Create." },
      ],
    },
    {
      type: "paragraph",
      text: "Your current queue order is saved as a new Setlist in your Library.",
    },

    { type: "heading", text: "Tips for organizing your Setlists" },
    {
      type: "table",
      headers: ["Tip", "Why It Helps"],
      rows: [
        ["Keep Setlists focused on a single mood, activity, or genre", "Makes it easier to find the right listening experience quickly"],
        ["Place your favorite tracks at the top", "Ensures you hear your best picks first when pressing play"],
        ["Review and remove unavailable items periodically", "Keeps your Setlists clean and avoids unexpected skips"],
        ["Use descriptive titles and cover images", "Helps you identify Setlists at a glance in your Library"],
        ["Create a \"Work in Progress\" Setlist for new discoveries", "Gives you a holding area before organizing tracks into permanent Setlists"],
      ],
    },

    { type: "heading", text: "Frequently Asked Questions" },

    { type: "heading", text: "Is there a limit to how many items I can add to a Setlist?", level: 3 },
    {
      type: "paragraph",
      text: "Standard member accounts can add thousands of items to a single Setlist. If you are managing very large catalogs for a label or organization, your Workspace plan may provide expanded Setlist limits.",
    },

    { type: "heading", text: "Can I add the same track to multiple Setlists?", level: 3 },
    {
      type: "paragraph",
      text: "Yes. A track can appear in as many Setlists as you like. Each Setlist holds its own reference to the track, and removing it from one Setlist does not affect the others.",
    },

    { type: "heading", text: "What happens to my Setlist order when I play in Shuffle mode?", level: 3 },
    {
      type: "paragraph",
      text: "Shuffle mode randomizes the playback order for your current session only. Your saved manual order remains unchanged. When you turn Shuffle off, playback returns to your saved sequence.",
    },

    { type: "heading", text: "Can I undo a removal?", level: 3 },
    {
      type: "paragraph",
      text: "MusicOSY does not have an automatic undo for Setlist item removal. If you accidentally remove a track, you will need to find it again in Search, your Library, or your Keeps and add it back to the Setlist.",
    },

    { type: "heading", text: "Do collaborators see my changes immediately?", level: 3 },
    {
      type: "paragraph",
      text: "Yes. When you add, remove, or reorder items in a Collaborative Setlist, your changes are visible to all collaborators in real time.",
    },

    { type: "heading", text: "Can I add items to a Workspace-owned Setlist?", level: 3 },
    {
      type: "paragraph",
      text: "Only if your Workspace role grants you edit permissions for that Setlist. Check with your Workspace administrator if you cannot see the add or edit options.",
    },
  ],
  related: [
    "/resources/help-center/using-musicosy/collections-and-library/collections",
    "/resources/help-center/using-musicosy/collections-and-library/create-collections",
    "/resources/help-center/using-musicosy/collections-and-library/shared-collections",
    "/resources/help-center/using-musicosy/collections-and-library/playlists",
    "/resources/help-center/using-musicosy/collections-and-library/your-library",
    "/resources/help-center/using-musicosy/collections-and-library/keep-and-organize-your-library",
    "/resources/help-center/using-musicosy/collections-and-library/save-music-to-your-library",
    "/resources/help-center/using-musicosy/collections-and-library/edit-or-delete-a-collection",
  ],
};
