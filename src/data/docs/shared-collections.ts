import type { Doc } from "./types";

/**
 * "Shared collections" — Using Music OSY → Collections & Library doc (position 3).
 *
 * Covers sharing Setlists and Crates, visibility/sharing levels (Private,
 * Unlisted, Public, Collaborative, Workspace-owned), the Pass the Mic share
 * flow, building Collaborative Setlists (inviting collaborators + permission
 * levels), Workspace and team collections, how shared collections handle
 * media changes (reference links), and following/saving shared collections.
 *
 * Content provided verbatim by the user; structured into blocks.
 */
export const sharedCollectionsDoc: Doc = {
  path: "/resources/help-center/using-musicosy/collections-and-library/shared-collections",
  blocks: [
    {
      type: "paragraph",
      text: "On MusicOSY, music and media are meant to be experienced together. Sharing your collections allows you to build listening queues with friends, showcase your curated tastes to the global community, or organize project assets with your band, label, or management team.",
    },
    {
      type: "paragraph",
      text: "Because MusicOSY separates ordered playback from flexible media grouping, you can share two distinct types of collections:",
    },
    {
      type: "list",
      items: [
        { lead: "Setlists:", text: "Ordered sequences of playable media designed for continuous listening or watching." },
        { lead: "Crates:", text: "Flexible groupings of mixed media, references, samples, and products organized around a theme or project." },
      ],
    },
    {
      type: "paragraph",
      text: "This guide explains how to share, collaborate, and manage access for your Setlists and Crates.",
    },

    { type: "heading", text: "Collection visibility and sharing levels" },
    {
      type: "paragraph",
      text: "When you share a collection, you control who can see it and who can edit it. You can adjust these visibility settings at any time from the collection settings menu.",
    },
    {
      type: "table",
      headers: ["Visibility Level", "Who Can See It", "Who Can Edit It", "Best Use Case"],
      rows: [
        ["Private", "Only you", "Only you", "Personal listening queues, unreleased project references, private drafts."],
        ["Unlisted", "Anyone with the direct link", "Only you (or approved collaborators)", "Sharing a specific mix with friends via Backstage messages or sending reference tracks to a producer."],
        ["Public", "Everyone on MusicOSY", "Only you", "Showcasing your taste on your Artist Page, profile, and in global Search."],
        ["Collaborative", "Based on your base visibility", "You and approved contributors", "Building a queue together with friends, bandmates, or fans."],
        ["Workspace-owned", "Authorized workspace members", "Members with edit permissions", "Label rosters, band setlists, or team asset libraries."],
      ],
    },
    {
      type: "callout",
      variant: "note",
      text: "Making a Setlist or Crate Public does not grant other members playback access to paid, subscriber-only, or restricted content inside it. Each item's individual access rules still apply when another member opens your shared collection.",
    },

    { type: "heading", text: "How to share a collection" },
    {
      type: "paragraph",
      text: "You can share any Public or Unlisted collection with your followers, friends, or external networks.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Open the Setlist or Crate from your Library or profile." },
        { lead: "Tap the Pass the Mic icon", text: "(the share button)." },
        { text: "Choose your sharing destination:" },
      ],
    },
    {
      type: "list",
      items: [
        { lead: "Backstage:", text: "Send the collection directly to another member or group conversation." },
        { lead: "Copy Link:", text: "Copy a direct URL to paste anywhere." },
        { lead: "External Apps:", text: "Share directly to your connected social media platforms or messaging apps." },
      ],
    },
    {
      type: "callout",
      variant: "warning",
      text: "If you share a Private collection, the link will only work for you. To allow others to view it, you must change the visibility to Unlisted or Public first.",
    },

    { type: "heading", text: "Building a Collaborative Setlist" },
    {
      type: "paragraph",
      text: "A Collaborative Setlist allows other MusicOSY members to add, remove, or reorder tracks. This is ideal for party queues, band rehearsals, or community-curated radio stations.",
    },

    { type: "heading", text: "Inviting collaborators", level: 3 },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Open your Setlist and tap the Settings (gear) icon." },
        { text: "Toggle on Collaborative." },
        { text: "Tap Invite Collaborator." },
        { text: "Search for the member's username or select them from your follows." },
        { text: "Assign their permission level and send the invitation." },
      ],
    },

    { type: "heading", text: "Collaboration permissions", level: 3 },
    {
      type: "paragraph",
      text: "As the owner, you can restrict what your collaborators are allowed to do.",
    },
    {
      type: "table",
      headers: ["Permission", "What the Collaborator Can Do"],
      rows: [
        ["Add items", "Search for and add eligible songs, videos, or episodes to the Setlist."],
        ["Remove items", "Remove any track from the Setlist, including tracks added by you."],
        ["Reorder items", "Change the playback sequence by dragging and dropping tracks."],
      ],
    },
    {
      type: "callout",
      variant: "note",
      text: "Collaborators can only add media that they are personally entitled to view and play. If a collaborator tries to add a subscriber-only track that they do not own, the platform will block the action.",
    },

    { type: "heading", text: "Workspace and team collections" },
    {
      type: "paragraph",
      text: "If you belong to a Workspace (such as a label, management team, or band), you can create collections that belong to the organization rather than your personal profile.",
    },
    {
      type: "list",
      items: [
        { lead: "Context Switching:", text: "Before creating a new Setlist or Crate, check your Context Switcher in the top navigation bar. If your Workspace is active, the collection will be created as a team asset." },
        { lead: "Team Access:", text: "All authorized team members with the correct Workspace roles can view, edit, or manage the collection." },
        { lead: "Leaving a Workspace:", text: "If you leave a band or label, you will lose access to their Workspace-owned collections. Your personal Setlists and Crates will always remain with you." },
      ],
    },

    { type: "heading", text: "How shared collections handle media changes" },
    {
      type: "paragraph",
      text: "Because collections rely on reference links rather than physical copies of files, changes to the underlying media or your team will not break your collection.",
    },
    {
      type: "table",
      headers: ["Event", "What Happens to the Shared Collection"],
      rows: [
        ["A track is removed from MusicOSY", "The Setlist or Crate remains intact. The removed item will display an \"Unavailable\" status, and the player will automatically skip it during playback."],
        ["A track becomes territory-restricted", "The track remains visible in the collection. However, listeners in restricted regions will not be able to play it."],
        ["A collaborator is removed", "The tracks they previously added remain in the Setlist. They simply lose the ability to make future edits."],
        ["A Crate item is sold out (Merch/Tickets)", "The product remains in the Crate for reference, but the \"Unlock\" or \"Get Tickets\" button will change to reflect the sold-out status."],
      ],
    },

    { type: "heading", text: "Following and saving shared collections" },
    {
      type: "paragraph",
      text: "When you discover a Public Setlist or Crate created by another member or creator, you can integrate it into your own listening experience.",
    },
    {
      type: "list",
      items: [
        { lead: "Keep:", text: "Tap the Keep (bookmark) icon to save the collection to your personal Library for quick access later." },
        { lead: "Follow (Setlists only):", text: "If you follow a Public Setlist, you will receive a notification in your Signal Center whenever the creator adds new tracks to it." },
        { lead: "Add to Up Next:", text: "You can take individual items from a shared Crate or Setlist and add them directly to your current playback queue without saving the entire collection." },
      ],
    },
  ],
  related: [
    "/resources/help-center/using-musicosy/collections-and-library/collections",
    "/resources/help-center/using-musicosy/collections-and-library/create-collections",
    "/resources/help-center/using-musicosy/collections-and-library/playlists",
    "/resources/help-center/using-musicosy/collections-and-library/your-library",
    "/resources/help-center/using-musicosy/collections-and-library/keep-and-organize-your-library",
    "/resources/help-center/using-musicosy/collections-and-library/save-music-to-your-library",
    "/resources/help-center/using-musicosy/collections-and-library/edit-or-delete-a-collection",
    "/resources/help-center/using-musicosy/collections-and-library/add-remove-and-reorder-playlist-items",
  ],
};
