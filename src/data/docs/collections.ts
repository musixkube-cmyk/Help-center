import type { Doc } from "./types";

/**
 * "Collections" — Using Musicosy → Collections & Library doc (position 1).
 *
 * Comprehensive guide to Collections on MusicOSY: Keeps (saved items),
 * Setlists (playlists), and Crates (curated groupings). Covers the three
 * Collection types, how to create/manage/share them, Library organization,
 * playback rules, Workspace collections, and FAQs.
 *
 * Content provided verbatim by the user; structured into blocks.
 */
export const collectionsDoc: Doc = {
  path: "/resources/help-center/using-musicosy/collections-and-library/collections",
  blocks: [
    // === Overview ===
    { type: "heading", text: "Overview" },
    {
      type: "paragraph",
      text: "Collections are how you organize, save, and share the music, videos, podcasts, events, and products you love on MusicOSY. Whether you are building a personal listening queue, curating a themed group of tracks, saving a product for later, or sharing a collaborative playlist with friends, Collections give you full control over your Library.",
    },
    {
      type: "paragraph",
      text: "There are three core Collection types on MusicOSY:",
    },
    {
      type: "table",
      headers: ["Collection Type", "MusicOSY Name", "Purpose"],
      rows: [
        ["Saved Items", "Keeps", "Save any eligible item to your personal Library for quick access later"],
        ["Playlists", "Setlists", "Build ordered sequences of songs, videos, episodes, or sounds"],
        ["Curated Groupings", "Crates", "Group media, references, sounds, samples, or products by theme or project"],
      ],
    },
    {
      type: "callout",
      variant: "note",
      text: "All three Collection types live inside your Library, which is your personal home for everything you have saved, purchased, downloaded, and organized on MusicOSY.",
    },

    // === Keeps (Saved Items) ===
    { type: "heading", text: "Keeps (Saved Items)" },
    {
      type: "paragraph",
      text: "A Keep is a personal save relationship between you and an eligible item on MusicOSY. When you Keep something, it is added to your Library so you can find it again quickly.",
    },

    { type: "heading", text: "What You Can Keep", level: 3 },
    {
      type: "table",
      headers: ["Item Type", "Example"],
      rows: [
        ["Track or Release", "A song, album, EP, or single"],
        ["Video", "A music video, clip, or visualizer"],
        ["Podcast Episode or Show", "A specific episode or an entire show"],
        ["Creator or Artist", "A creator profile you want to revisit"],
        ["Event", "An upcoming concert or livestream"],
        ["Product", "A merch item, ticket, or digital download"],
        ["Post or Clip", "A social post or short-form video"],
      ],
    },

    { type: "heading", text: "How to Keep an Item", level: 3 },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Find the item you want to save (in Discover, Listen, Search, a creator profile, or anywhere else on MusicOSY)." },
        { text: "Tap or click the Keep button (bookmark icon)." },
        { text: "The item is immediately added to your Library under Keeps." },
      ],
    },
    {
      type: "paragraph",
      text: "To remove a Keep, tap or click the Keep button again. The item is removed from your personal saves.",
    },
    {
      type: "callout",
      variant: "warning",
      title: "Important",
      text: "Keeping an item does not follow the creator, start a purchase, grant playback access, change the item's public ranking, or notify the creator. It is purely a personal save action.",
    },

    { type: "heading", text: "Keep Rules at a Glance", level: 3 },
    {
      type: "table",
      headers: ["Rule", "Details"],
      rows: [
        ["One Keep per item", "You can only have one active Keep per item. Tapping Keep again removes it."],
        ["No automatic access", "Keeping a paid or subscriber-only item does not grant playback or download access."],
        ["Availability changes", "If a Kept item becomes unavailable (removed, restricted, or territory-limited), the Keep may remain in your Library as an unavailable record, but playback will be blocked."],
        ["Privacy", "Your Keeps are private by default. Other members cannot see your saved items unless you share a Setlist or Crate that contains them."],
      ],
    },

    // === Setlists (Playlists) ===
    { type: "heading", text: "Setlists (Playlists)" },
    {
      type: "paragraph",
      text: "A Setlist is an ordered collection of playable items that you create, organize, and optionally share. Setlists are the MusicOSY version of playlists.",
    },

    { type: "heading", text: "Setlist Types", level: 3 },
    {
      type: "table",
      headers: ["Type", "Visibility", "Who Can Edit"],
      rows: [
        ["Private", "Visible only to you", "You only"],
        ["Unlisted", "Accessible by direct link only", "You only"],
        ["Public", "Visible in Search, profiles, and discovery", "You only"],
        ["Collaborative", "Visible based on your chosen setting", "You and approved collaborators"],
        ["Workspace-owned", "Visible to authorized workspace members", "Members with edit permission"],
        ["Editorial / Creator-published", "Published by a creator or MusicOSY editorial team", "The publishing creator or editorial team"],
        ["System-generated", "Auto-created by MusicOSY (e.g., \"Your Top Mix\")", "Managed by the platform"],
      ],
    },

    { type: "heading", text: "Creating a Setlist", level: 3 },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Go to your Library or tap the Create button." },
        { text: "Select Build a Setlist." },
        { text: "Enter a title and optional description." },
        { text: "Choose your visibility setting:" },
        { text: "Private" },
        { text: "Unlisted (shareable by link)" },
        { text: "Public" },
        { text: "Collaborative" },
        { text: "Tap Create." },
      ],
    },
    {
      type: "paragraph",
      text: "Your new Setlist is now ready. You can start adding items immediately.",
    },

    { type: "heading", text: "Adding Items to a Setlist", level: 3 },
    {
      type: "paragraph",
      text: "You can add eligible songs, videos, episodes, and sounds to a Setlist from:",
    },
    {
      type: "list",
      items: [
        { text: "The player (tap the Setlist icon while playing)" },
        { text: "Discover or Listen (tap the item's action menu)" },
        { text: "Search results" },
        { text: "A creator's catalog" },
        { text: "Your Library" },
      ],
    },
    {
      type: "callout",
      variant: "note",
      text: "Adding an item to a Setlist does not create a copy of the media. The Setlist references the canonical item. If the item becomes unavailable, your Setlist remains intact but that specific entry will show an unavailable state.",
    },

    { type: "heading", text: "Removing and Reordering Items", level: 3 },
    {
      type: "table",
      headers: ["Action", "How"],
      rows: [
        ["Remove an item", "Open the Setlist, find the item, tap the action menu, and select Remove from Setlist"],
        ["Reorder items", "Open the Setlist in edit mode, then drag items to your preferred position"],
        ["Clear all items", "Open the Setlist settings and select Clear All"],
      ],
    },

    { type: "heading", text: "Editing a Setlist", level: 3 },
    {
      type: "paragraph",
      text: "You can edit the following Setlist properties at any time (unless the Setlist is Workspace-owned and your role does not permit edits):",
    },
    {
      type: "list",
      items: [
        { text: "Title" },
        { text: "Description" },
        { text: "Cover image" },
        { text: "Visibility (Private, Unlisted, Public, Collaborative)" },
        { text: "Collaboration settings (who can add, remove, or reorder)" },
      ],
    },

    { type: "heading", text: "Deleting a Setlist", level: 3 },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Open the Setlist." },
        { text: "Go to Setlist settings (gear icon)." },
        { text: "Select Delete Setlist." },
        { text: "Confirm the deletion." },
      ],
    },
    {
      type: "callout",
      variant: "warning",
      title: "Warning",
      text: "Deleting a Setlist removes it from your Library and from any public or shared surfaces where it appeared. This action cannot be undone once confirmed. Items inside the Setlist are not deleted from MusicOSY. They remain in their original catalog locations.",
    },

    { type: "heading", text: "Collaborative Setlists", level: 3 },
    {
      type: "paragraph",
      text: "A Collaborative Setlist allows other members to add, remove, or reorder items based on the permissions you set.",
    },
    {
      type: "table",
      headers: ["Setting", "Effect"],
      rows: [
        ["Contributors can add items", "Approved members can add eligible items"],
        ["Contributors can remove items", "Approved members can remove items"],
        ["Contributors can reorder", "Approved members can change item order"],
        ["Owner approval required", "Changes require your approval before taking effect"],
      ],
    },
    {
      type: "paragraph",
      text: "To invite a collaborator:",
    },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Open the Setlist." },
        { text: "Tap Invite Collaborator." },
        { text: "Enter the member's username or select from your follows." },
        { text: "Choose their permission level." },
        { text: "Send the invitation." },
      ],
    },
    {
      type: "callout",
      variant: "note",
      text: "A collaborator's ability to add an item depends on whether that item is eligible for the Setlist. Items that are private, restricted, territory-limited, or otherwise unavailable to the collaborator cannot be added.",
    },

    // === Crates (Curated Groupings) ===
    { type: "heading", text: "Crates (Curated Groupings)" },
    {
      type: "paragraph",
      text: "A Crate is a flexible grouping of media, references, sounds, samples, products, or other items organized around a theme, project, mood, or purpose. Unlike a Setlist, a Crate is not limited to playable items and does not have a playback sequence.",
    },

    { type: "heading", text: "Use Cases for Crates", level: 3 },
    {
      type: "table",
      headers: ["Use Case", "Example"],
      rows: [
        ["Reference collection", "Group songs that inspired a new track you are producing"],
        ["Sample and sound library", "Collect samples, loops, stems, and presets for a Studio project"],
        ["Mood or theme grouping", "Gather tracks, videos, and posts around a specific vibe"],
        ["Product wishlist", "Save merch items, tickets, or digital products you are considering"],
        ["Project materials", "Collect reference tracks, artwork, and notes for a collaboration"],
        ["Event planning", "Group event listings, venue pages, and related content"],
      ],
    },

    { type: "heading", text: "Creating a Crate", level: 3 },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Go to your Library." },
        { text: "Tap Create Crate." },
        { text: "Enter a name and optional description." },
        { text: "Choose visibility:" },
        { text: "Private" },
        { text: "Unlisted (shareable by link)" },
        { text: "Public" },
        { text: "Tap Create." },
      ],
    },

    { type: "heading", text: "Adding Items to a Crate", level: 3 },
    {
      type: "paragraph",
      text: "You can add the following item types to a Crate:",
    },
    {
      type: "list",
      items: [
        { text: "Songs, albums, and releases" },
        { text: "Videos and clips" },
        { text: "Podcast episodes and shows" },
        { text: "Posts" },
        { text: "Products and merch" },
        { text: "Events" },
        { text: "Samples, stems, presets, and templates" },
        { text: "Other creators or profiles" },
        { text: "External links (where permitted)" },
      ],
    },
    {
      type: "paragraph",
      text: "To add an item, tap the action menu on any eligible item and select Add to Crate, then choose the Crate.",
    },

    { type: "heading", text: "Crate vs. Setlist vs. Keep", level: 3 },
    {
      type: "table",
      headers: ["Feature", "Keep", "Setlist", "Crate"],
      rows: [
        ["Purpose", "Quick save for later", "Ordered playback sequence", "Themed grouping of mixed items"],
        ["Item types", "Any eligible item", "Playable items (songs, videos, episodes, sounds)", "Mixed media, products, references, sounds"],
        ["Order", "No fixed order", "Ordered (you control sequence)", "No fixed order"],
        ["Playback", "Not a playback source", "Direct playback source", "Not a playback source"],
        ["Sharing", "Not shareable directly", "Shareable (Public, Unlisted, Collaborative)", "Shareable (Public, Unlisted)"],
        ["Collaboration", "No", "Yes (Collaborative Setlists)", "No (individual only)"],
      ],
    },

    // === Your Library ===
    { type: "heading", text: "Your Library" },
    {
      type: "paragraph",
      text: "Your Library is the central hub for all your Collections, purchases, history, and saved content.",
    },

    { type: "heading", text: "What Lives in Your Library", level: 3 },
    {
      type: "table",
      headers: ["Section", "Contents"],
      rows: [
        ["Keeps", "All items you have saved"],
        ["Setlists", "Your playlists (private, public, collaborative)"],
        ["Crates", "Your curated groupings"],
        ["Purchases", "Songs, albums, videos, and episodes you have bought"],
        ["Downloads", "Items you have downloaded for offline use"],
        ["Subscriptions", "Creator subscriptions and platform plans"],
        ["Tickets", "Event tickets and access passes"],
        ["History", "Listening and watching history"],
        ["Continue Listening", "Items you started but did not finish"],
        ["Saved Events", "Events you have saved or RSVP'd to"],
      ],
    },

    { type: "heading", text: "Organizing Your Library", level: 3 },
    {
      type: "paragraph",
      text: "You can organize your Library by:",
    },
    {
      type: "list",
      items: [
        { text: "Filtering by content type (music, video, podcast, products, events)" },
        { text: "Sorting by date added, title, creator, or last accessed" },
        { text: "Searching within your Library" },
        { text: "Creating Setlists and Crates to group related items" },
      ],
    },

    { type: "heading", text: "Library Privacy", level: 3 },
    {
      type: "table",
      headers: ["Setting", "Default"],
      rows: [
        ["Your Keeps are visible to other members", "No (private by default)"],
        ["Your listening history is visible to other members", "No (private by default)"],
        ["Your public Setlists appear on your profile", "Yes (if set to Public)"],
        ["Your purchases are visible to other members", "No"],
        ["Your Crate contents are visible to other members", "Only if the Crate is Public or Unlisted and shared"],
      ],
    },
    {
      type: "paragraph",
      text: "You can adjust your Library privacy settings in Settings > Privacy and Safety.",
    },

    // === Sharing Collections ===
    { type: "heading", text: "Sharing Collections" },

    { type: "heading", text: "Sharing a Setlist", level: 3 },
    {
      type: "table",
      headers: ["Visibility", "How Others Access It"],
      rows: [
        ["Public", "Appears in Search, your profile, and discovery surfaces"],
        ["Unlisted", "Accessible only through the direct link you share"],
        ["Collaborative", "Visible based on your setting; collaborators can edit"],
        ["Private", "Not visible to anyone else"],
      ],
    },
    {
      type: "paragraph",
      text: "To share a Public or Unlisted Setlist:",
    },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Open the Setlist." },
        { text: "Tap Pass the Mic (share icon)." },
        { text: "Choose your sharing method:" },
        { text: "Copy Link" },
        { text: "Share to Backstage (direct message)" },
        { text: "Share to external apps" },
      ],
    },

    { type: "heading", text: "Sharing a Crate", level: 3 },
    {
      type: "paragraph",
      text: "Crate sharing follows the same visibility model. A Public Crate appears on your profile and in Search. An Unlisted Crate is accessible only by direct link.",
    },
    {
      type: "callout",
      variant: "warning",
      title: "Important",
      text: "Sharing a Setlist or Crate shares the reference to the items inside it. It does not grant the recipient playback access to paid, subscriber-only, or restricted content. Each item's access rules still apply when the recipient opens it.",
    },

    // === Managing Collections ===
    { type: "heading", text: "Managing Collections" },

    { type: "heading", text: "Editing a Collection", level: 3 },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Open the Setlist or Crate." },
        { text: "Tap the settings icon (gear)." },
        { text: "Update the title, description, cover image, or visibility." },
        { text: "Tap Save." },
      ],
    },

    { type: "heading", text: "Deleting a Collection", level: 3 },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Open the Setlist or Crate." },
        { text: "Tap the settings icon (gear)." },
        { text: "Select Delete." },
        { text: "Confirm the deletion." },
      ],
    },
    {
      type: "callout",
      variant: "warning",
      title: "Warning",
      text: "Deleting a Collection is permanent. Items inside the Collection are not deleted from MusicOSY, but the Collection itself and its arrangement are removed. If the Collection was Public, it will no longer appear in Search or on your profile.",
    },

    { type: "heading", text: "Restoring a Deleted Collection", level: 3 },
    {
      type: "paragraph",
      text: "Deleted Collections cannot be restored. If you want to preserve a Collection but stop using it, consider changing its visibility to Private instead of deleting it.",
    },

    // === Collections and Playback ===
    { type: "heading", text: "Collections and Playback" },

    { type: "heading", text: "Playing a Setlist", level: 3 },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Open the Setlist from your Library, Search, or a creator profile." },
        { text: "Tap Play All to start from the first item." },
        { text: "Tap any individual item to start from that position." },
        { text: "Use the player controls to manage queue, shuffle, and repeat." },
      ],
    },

    { type: "heading", text: "Setlist Playback Rules", level: 3 },
    {
      type: "table",
      headers: ["Rule", "Details"],
      rows: [
        ["Unavailable items are skipped", "If an item in your Setlist becomes unavailable, it is skipped during playback. Your Setlist is not affected."],
        ["Paid items require entitlement", "If a Setlist contains a paid or subscriber-only track, playback requires an active purchase or subscription."],
        ["Territory restrictions apply", "Items restricted in your region will not play, even if they are in your Setlist."],
        ["Queue ownership", "Playing a Setlist sets your queue source to that Setlist. You can edit your queue without changing the Setlist itself."],
      ],
    },
    {
      type: "callout",
      variant: "note",
      text: "Editing your playback queue (removing, reordering, or adding items during playback) does not modify the saved Setlist. Queue changes apply only to your current listening session.",
    },

    { type: "heading", text: "Crates and Playback", level: 3 },
    {
      type: "paragraph",
      text: "Crates are not a direct playback source. To play items from a Crate, open the Crate and tap an individual item, or add items from the Crate to a Setlist or your Up Next queue.",
    },

    // === Collections in Workspaces ===
    { type: "heading", text: "Collections in Workspaces" },
    {
      type: "paragraph",
      text: "If you belong to a Workspace (such as a label, management team, or creative collective), you may encounter Workspace-owned Setlists or shared collections.",
    },
    {
      type: "table",
      headers: ["Feature", "Personal Collection", "Workspace Collection"],
      rows: [
        ["Owner", "You", "The Workspace"],
        ["Visibility", "You control it", "Workspace permissions control it"],
        ["Editing", "You control it", "Based on your Workspace role"],
        ["Deletion", "You can delete it", "Requires appropriate Workspace role"],
        ["Leaves with you", "Yes (it is yours)", "No (it belongs to the Workspace)"],
      ],
    },
    {
      type: "callout",
      variant: "warning",
      title: "Important",
      text: "Your personal Setlists, Crates, and Keeps are never affected by your Workspace membership. Leaving a Workspace does not delete your personal Collections. Similarly, Workspace Collections are not visible in your personal Library unless you have been granted access.",
    },

    // === Frequently Asked Questions ===
    { type: "heading", text: "Frequently Asked Questions" },

    { type: "heading", text: "Can other members see what I have Kept?", level: 3 },
    {
      type: "paragraph",
      text: "No. Your Keeps are private by default. Other members cannot see your saved items unless you add them to a Public Setlist or Crate.",
    },

    { type: "heading", text: "What happens to my Setlist if a song is removed from MusicOSY?", level: 3 },
    {
      type: "paragraph",
      text: "The Setlist remains intact. The removed item will display as unavailable within the Setlist. All other items continue to function normally.",
    },

    { type: "heading", text: "Can I add a subscriber-only track to a Public Setlist?", level: 3 },
    {
      type: "paragraph",
      text: "Yes. You can add it. However, members who view your Setlist but do not have the required subscription will see the track as locked or unavailable. They will see the track title and creator but cannot play it.",
    },

    { type: "heading", text: "Is there a limit to how many items I can add to a Setlist or Crate?", level: 3 },
    {
      type: "paragraph",
      text: "Limits depend on your current plan and any applicable usage allowances. Check Settings > My Tools for your current limits.",
    },

    { type: "heading", text: "Can I collaborate on a Crate?", level: 3 },
    {
      type: "paragraph",
      text: "Currently, Crates are individual collections. For collaborative organization, use a Collaborative Setlist or a Workspace project.",
    },

    { type: "heading", text: "What is the difference between Keep and Add to Setlist?", level: 3 },
    {
      type: "paragraph",
      text: "Keep saves an item to your personal Library for quick access. Add to Setlist places an item into a specific ordered playlist. You can do both. Keeping an item does not add it to a Setlist, and adding to a Setlist does not Keep it.",
    },

    { type: "heading", text: "Can I share my listening history?", level: 3 },
    {
      type: "paragraph",
      text: "Your listening history is private by default. You can choose to enable eligible sharing features in Settings > Privacy and Safety, but full history is never public.",
    },

    { type: "heading", text: "Do Collections count toward my storage or upload limits?", level: 3 },
    {
      type: "paragraph",
      text: "No. Setlists, Crates, and Keeps are reference records. They do not consume storage or upload allowances. Only actual media files you upload or download affect those limits.",
    },

    // === Related Topics ===
    { type: "heading", text: "Related Topics" },
    {
      type: "table",
      headers: ["Topic", "Where to Find It"],
      rows: [
        ["Your Library", "Help Center > Collections and Library > Your Library"],
        ["Playback and Queue Management", "Help Center > Media and Playback"],
        ["Downloads and Offline Access", "Help Center > Media and Playback"],
        ["Subscriptions and Purchases", "Help Center > Creator Commerce and Services"],
        ["Privacy and Visibility Settings", "Help Center > Account and Access"],
        ["Workspace Roles and Permissions", "Help Center > Creator Studio and Workspaces"],
      ],
    },
  ],
  related: [
    "/resources/help-center/using-musicosy/collections-and-library/your-library",
    "/resources/help-center/using-musicosy/collections-and-library/create-collections",
    "/resources/help-center/using-musicosy/collections-and-library/shared-collections",
    "/resources/help-center/using-musicosy/collections-and-library/playlists",
    "/resources/help-center/using-musicosy/collections-and-library/keep-and-organize-your-library",
    "/resources/help-center/using-musicosy/collections-and-library/add-remove-and-reorder-playlist-items",
  ],
};
