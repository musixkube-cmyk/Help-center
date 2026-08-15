import type { Doc } from "./types";

/**
 * "Edit or delete a collection" — Using Music OSY → Collections & Library
 * doc (position 8).
 *
 * Covers editing collection details (editable properties table for Setlists
 * vs Crates), managing items inside collections (reorder/remove), deleting
 * a collection (steps + what happens table), Collaborative and Workspace
 * deletions, and FAQs.
 *
 * Content provided verbatim by the user; structured into blocks.
 */
export const editOrDeleteACollectionDoc: Doc = {
  path: "/resources/help-center/using-musicosy/collections-and-library/edit-or-delete-a-collection",
  blocks: [
    {
      type: "paragraph",
      text: "As your music taste evolves or your creative projects wrap up, you may need to update or remove the collections in your Library. On MusicOSY, you can easily edit the details of your Setlists and Crates, manage the items inside them, or delete them entirely when you no longer need them.",
    },

    { type: "heading", text: "How to edit a collection" },
    {
      type: "paragraph",
      text: "You can update the core details of any collection you own. If you are managing a collection on behalf of a band, label, or team, ensure your Workspace Context is active and that your role grants editing permissions.",
    },

    { type: "heading", text: "Steps to edit", level: 3 },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Navigate to your Library from the main navigation menu." },
        { text: "Select the Setlist or Crate you want to modify." },
        { text: "Tap or click the Settings icon (the gear) or the Edit Details button." },
        { text: "Update your desired fields." },
        { text: "Select Save." },
      ],
    },

    { type: "heading", text: "Editable collection properties", level: 3 },
    {
      type: "table",
      headers: ["Property", "Setlists", "Crates", "Description"],
      rows: [
        ["Title or Name", "Yes", "Yes", "The public or private name of your collection."],
        ["Description", "Yes", "Yes", "A text summary explaining the theme, mood, or purpose of the collection."],
        ["Cover Image", "Yes", "Yes", "The visual artwork representing the collection. You can upload a custom image or generate one using MusicOSY AI tools."],
        ["Visibility", "Yes", "Yes", "Change who can see the collection (Private, Unlisted, or Public)."],
        ["Collaboration", "Yes", "No", "Invite other members to add, remove, or reorder tracks in a Setlist. Crates are strictly individual or workspace-owned."],
      ],
    },
    {
      type: "callout",
      variant: "note",
      text: "Changing a Public collection to Private will immediately remove it from global Search, your public profile, and the Libraries of any members who were following it.",
    },

    { type: "heading", text: "Managing items inside your collection" },
    {
      type: "paragraph",
      text: "Editing the collection details is different from managing the media inside it.",
    },
    {
      type: "list",
      items: [
        { lead: "For Setlists:", text: "Because Setlists are designed for sequential playback, the order of your tracks matters. You can enter the Reorder mode to drag and drop songs, videos, or podcast episodes into your preferred listening sequence." },
        { lead: "For Crates:", text: "Crates are flexible folders used for grouping mixed media, merchandise, and project references. They do not have a playback sequence, so reordering is not applicable." },
      ],
    },
    {
      type: "paragraph",
      text: "To remove an item from either collection type, open the collection, tap the Action Menu (the three dots) next to the specific item, and select Remove.",
    },
    {
      type: "callout",
      variant: "warning",
      text: "Removing an item from your Setlist or Crate does not delete the media from MusicOSY. It also does not remove your personal Keep (save) from your Library. It simply removes the reference from that specific collection. For detailed instructions on managing tracks, please refer to the guide on adding, removing, and reordering playlist items.",
    },

    { type: "heading", text: "How to delete a collection" },
    {
      type: "paragraph",
      text: "If a collection has served its purpose, you can permanently delete it from your account.",
    },

    { type: "heading", text: "Steps to delete", level: 3 },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Open the Setlist or Crate from your Library." },
        { text: "Tap the Settings icon (the gear)." },
        { text: "Scroll to the bottom and select Delete Collection." },
        { text: "Confirm your choice in the warning modal." },
      ],
    },
    {
      type: "callout",
      variant: "warning",
      text: "Deleting a collection is permanent. Once you confirm the deletion, the arrangement, metadata, and collaborative history of that specific collection cannot be restored. If you simply want to hide a collection from the public without losing your work, change its Visibility setting to Private instead of deleting it.",
    },

    { type: "heading", text: "What happens when you delete a collection" },
    {
      type: "paragraph",
      text: "MusicOSY separates your organizational folders from the canonical media catalog. Deleting a folder never destroys the underlying art.",
    },
    {
      type: "table",
      headers: ["Action", "Impact on the Collection", "Impact on the Underlying Media"],
      rows: [
        ["Delete a Setlist", "The playlist is permanently removed from your Library, your profile, and global Search.", "All songs, albums, and videos inside the Setlist remain completely unaffected in the MusicOSY catalog."],
        ["Delete a Crate", "The folder is permanently removed from your Library and project references.", "All referenced tracks, sound samples, merchandise, and event flyers remain untouched."],
        ["Impact on Keeps", "None.", "Any items you previously Kept (saved) will remain safely in your personal Library."],
        ["Impact on Purchases", "None.", "Any music or merchandise you purchased or unlocked remains in your Purchase History and Library."],
      ],
    },

    { type: "heading", text: "Collaborative and Workspace deletions", level: 3 },
    {
      type: "list",
      items: [
        { lead: "Collaborative Setlists:", text: "If you are the owner of a Collaborative Setlist, deleting it will remove the collection from the Libraries of all invited collaborators." },
        { lead: "Workspace Collections:", text: "If you delete a collection while operating in a Workspace Context, you are deleting a shared team asset. The collection will be removed for all authorized members of that organization. Ensure you have the correct Studio Admin or Manager permissions before deleting shared team folders." },
      ],
    },

    { type: "heading", text: "Frequently Asked Questions" },

    { type: "heading", text: "Will deleting a Setlist delete the songs inside it?", level: 3 },
    {
      type: "paragraph",
      text: "No. A Setlist is simply a reference list. Deleting the Setlist only deletes the list itself. The canonical songs, videos, and episodes remain fully intact on MusicOSY and will remain in your Library if you have Kept them.",
    },

    { type: "heading", text: "Can I undo a deleted collection?", level: 3 },
    {
      type: "paragraph",
      text: "No. MusicOSY does not have a \"restore\" function for deleted user collections. If you accidentally delete a Setlist, you will need to create a new one and manually add your tracks back into it.",
    },

    { type: "heading", text: "What happens to my followers if I delete a Public Setlist?", level: 3 },
    {
      type: "paragraph",
      text: "The Setlist will immediately disappear from your public profile and global Search. Any members who were following the Setlist will lose access to it, and it will be removed from their active feeds and Libraries.",
    },

    { type: "heading", text: "Can I delete a System-Generated or Editorial Setlist?", level: 3 },
    {
      type: "paragraph",
      text: "No. Setlists generated by MusicOSY (like \"Your Weekly Fresh Drops\" or \"Continue Listening\") are managed by the platform. You cannot delete them, but you can hide them or remove individual tracks from your Up Next queue.",
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
    "/resources/help-center/using-musicosy/collections-and-library/add-remove-and-reorder-playlist-items",
  ],
};
