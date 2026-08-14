import type { Doc } from "./types";

/**
 * "Playlists" — Using Music OSY → Collections & Library doc (position 4).
 *
 * Explains that MusicOSY playlists are called Setlists. Covers the anatomy
 * of a Setlist (reference list, eligible media types), visibility and
 * ownership, playback mechanics and the Up Next queue, building
 * Collaborative Setlists (permissions + entitlement rules), system-generated
 * and editorial Setlists, Setlists vs Crates vs Keeps comparison, and FAQs.
 *
 * Content provided verbatim by the user; structured into blocks.
 */
export const playlistsDoc: Doc = {
  path: "/resources/help-center/using-musicosy/collections-and-library/playlists",
  blocks: [
    {
      type: "paragraph",
      text: "On MusicOSY, traditional playlists are called Setlists. A Setlist is an ordered, curated sequence of playable media designed for continuous listening or watching. Whether you are building a personal workout mix, curating a specific genre journey, or organizing a queue of podcast episodes, Setlists are your primary tool for sequential playback.",
    },
    {
      type: "paragraph",
      text: "While a Crate is used for flexible grouping and a Keep is used for quick saving, a Setlist is strictly built for the Listen environment. It dictates the exact order in which your media plays and serves as the owner of your Up Next queue.",
    },

    { type: "heading", text: "The Anatomy of a Setlist" },
    {
      type: "paragraph",
      text: "A Setlist is a reference list. When you add a song or video to a Setlist, you are not creating a new copy of that media. You are creating a pointer to the canonical catalog object. This ensures that if a creator updates a track's audio quality or adds synchronized lyrics, your Setlist automatically reflects those improvements.",
    },

    { type: "heading", text: "Eligible Media Types", level: 3 },
    {
      type: "paragraph",
      text: "Because Setlists are designed for continuous playback, they only accept media that can be played sequentially in the MusicOSY player.",
    },
    {
      type: "table",
      headers: ["Media Type", "Eligibility"],
      rows: [
        ["Songs and Tracks", "Fully supported. Includes singles, album tracks, and live recordings."],
        ["Music Videos", "Fully supported. The player will seamlessly transition between audio-only tracks and video tracks."],
        ["Podcast Episodes", "Fully supported. Ideal for queuing up a backlog of shows to listen to on a commute."],
        ["Live Replays", "Supported, provided the replay has been published and you retain access to it."],
        ["Albums or Releases", "You can add an entire album to a Setlist, which will automatically expand into its individual tracks in the correct order."],
      ],
    },
    {
      type: "callout",
      variant: "note",
      text: "You cannot add social posts, merchandise products, event flyers, or sound samples to a Setlist. Those items belong in a Crate.",
    },

    { type: "heading", text: "Setlist Visibility and Ownership" },
    {
      type: "paragraph",
      text: "When you build a Setlist, you must decide who can see it and who has the authority to change its sequence. You can adjust these settings at any time from the Setlist details menu.",
    },
    {
      type: "table",
      headers: ["Visibility Level", "Who Can See It", "Who Can Edit It", "Best Use Case"],
      rows: [
        ["Private", "Only you", "Only you", "Personal listening, guilty pleasures, unfinished ideas."],
        ["Unlisted", "Anyone with the direct link", "Only you (or approved collaborators)", "Sharing a specific mix with friends via Backstage messages."],
        ["Public", "Everyone on MusicOSY", "Only you", "Showcasing your taste on your profile and in global Search."],
        ["Collaborative", "Based on your base visibility", "You and approved contributors", "Building a party queue with friends or bandmates."],
        ["Workspace-owned", "Authorized workspace members", "Members with edit permissions", "Label rosters, band rehearsal setlists, or team asset libraries."],
      ],
    },
    {
      type: "callout",
      variant: "warning",
      text: "Always check your Context Switcher in the top navigation bar before creating a new Setlist. If your Workspace context is active, the Setlist will be created as a company or team asset, not a personal one.",
    },

    { type: "heading", text: "Playback Mechanics and the Up Next Queue" },
    {
      type: "paragraph",
      text: "Setlists are the engine behind your continuous listening sessions. When you press play on a Setlist, it takes ownership of your Up Next queue.",
    },

    { type: "heading", text: "How Queue Ownership Works", level: 3 },
    {
      type: "list",
      ordered: true,
      items: [
        { lead: "Starting Playback:", text: "When you select \"Play All\" on a Setlist, the player loads the entire sequence into your Up Next queue." },
        { lead: "Making Changes:", text: "If you add a new song to your Up Next queue, skip a track, or reorder the queue while listening, you are only changing your current session. The underlying saved Setlist remains completely untouched." },
        { lead: "Session End and Autoplay:", text: "When the final track in your Setlist finishes, the player will notify you that the Setlist has ended. If you have Autoplay enabled, MusicOSY will seamlessly transition into a personalized recommendation station based on the genres and moods of the Setlist you just finished." },
      ],
    },
    {
      type: "callout",
      variant: "note",
      text: "If a track in your Setlist becomes unavailable due to a territory restriction or a creator unpublishing it, the player will automatically skip it during playback. Your Setlist is never broken or deleted; the unavailable item will simply display a neutral \"Unavailable\" status in the tracklist.",
    },

    { type: "heading", text: "Building a Collaborative Setlist" },
    {
      type: "paragraph",
      text: "A Collaborative Setlist allows multiple MusicOSY members to add, remove, or reorder tracks. This is highly effective for shared office queues, band rehearsals, or community-curated radio stations.",
    },

    { type: "heading", text: "Managing Collaborator Permissions", level: 3 },
    {
      type: "paragraph",
      text: "As the Setlist owner, you control exactly what your invited collaborators are allowed to do.",
    },
    {
      type: "table",
      headers: ["Permission Setting", "What the Collaborator Can Do"],
      rows: [
        ["Add items", "Search for and add eligible songs, videos, or episodes to the Setlist."],
        ["Remove items", "Remove any track from the Setlist, including tracks that you added."],
        ["Reorder items", "Change the playback sequence by dragging and dropping tracks."],
      ],
    },

    { type: "heading", text: "Entitlement Rules for Collaborators", level: 3 },
    {
      type: "paragraph",
      text: "MusicOSY enforces strict entitlement checks during collaborative sessions. A collaborator can only add media that they are personally entitled to view and play.",
    },
    {
      type: "list",
      items: [
        { text: "If a collaborator tries to add a subscriber-only track that they do not own, the platform will block the action." },
        { text: "If a collaborator adds a track that is restricted in their territory, but available in yours, the track will be added to the Setlist. However, it will only play for members in territories where the track is legally available." },
      ],
    },

    { type: "heading", text: "System-Generated and Editorial Setlists" },
    {
      type: "paragraph",
      text: "Not all Setlists are built by hand. MusicOSY generates specific Setlists to enhance your discovery and listening experience.",
    },
    {
      type: "table",
      headers: ["Setlist Type", "Description", "Editing Capabilities"],
      rows: [
        ["System-Generated", "Automatically created by the platform based on your listening habits (e.g., \"Your Weekly Fresh Drops\", \"Continue Listening\").", "Read-only. You cannot reorder or remove items, but you can save individual tracks to your personal Library."],
        ["Editorial", "Curated by the MusicOSY editorial team or featured creators (e.g., \"Global Rising Sounds\", \"Deep Focus\").", "Read-only. These are updated regularly by the curators."],
        ["Algorithmic Radio", "A dynamic Setlist generated on the fly when you select \"Start Radio\" on a specific song or artist.", "Dynamic. You can thumbs-up or thumbs-down tracks to influence the immediate Up Next queue."],
      ],
    },
    {
      type: "callout",
      variant: "warning",
      text: "You cannot delete or change the visibility of a System-Generated or Editorial Setlist. If you want to modify an editorial sequence, you must create a new personal Setlist and manually add the tracks you want to keep.",
    },

    { type: "heading", text: "Setlists vs. Crates vs. Keeps" },
    {
      type: "paragraph",
      text: "Because MusicOSY separates social discovery from continuous listening, it is vital to understand which collection tool to use for your current goal.",
    },
    {
      type: "table",
      headers: ["Feature", "Setlist (Playlist)", "Crate (Collection)", "Keep (Saved Item)"],
      rows: [
        ["Primary Purpose", "Ordered, sequential playback.", "Themed grouping of mixed media.", "Quick personal save for later."],
        ["Eligible Items", "Playable media only (Songs, Videos, Podcasts).", "Mixed media (Songs, Merch, Events, Samples, Posts).", "Any eligible individual item."],
        ["Playback Behavior", "Plays continuously from top to bottom.", "Plays individual items or adds to Up Next.", "Not a playback source."],
        ["Sharing", "Highly shareable (Public, Unlisted, Collaborative).", "Shareable (Public, Unlisted).", "Strictly private to your account."],
      ],
    },

    { type: "heading", text: "Frequently Asked Questions" },

    { type: "heading", text: "Can I add a subscriber-only track to a Public Setlist?", level: 3 },
    {
      type: "paragraph",
      text: "Yes. You can add it to the list. However, members who view your Public Setlist but do not have the required subscription will see the track as locked. They will see the track title and creator, but they cannot play it or add it to their own Up Next queue.",
    },

    { type: "heading", text: "Is there a limit to how many items I can put in a Setlist?", level: 3 },
    {
      type: "paragraph",
      text: "Standard member accounts can add thousands of items to a single Setlist. If you are managing massive catalogs for a label or distribution company, your Workspace plan may provide expanded Setlist limits.",
    },

    { type: "heading", text: "What happens to my Setlists if I downgrade my plan or cancel a subscription?", level: 3 },
    {
      type: "paragraph",
      text: "Your personal Setlists are never deleted when your plan changes. However, if your Setlist contains premium tracks or subscriber-only episodes that you no longer have access to, those specific items will become unplayable until you renew your entitlement.",
    },

    { type: "heading", text: "Can I merge two Setlists together?", level: 3 },
    {
      type: "paragraph",
      text: "MusicOSY does not have an automatic \"merge\" button. To combine two Setlists, open the Setlist you want to move items from, select all tracks, and use the \"Add to Setlist\" action to append them to your target Setlist.",
    },
  ],
  related: [
    "/resources/help-center/using-musicosy/collections-and-library/collections",
    "/resources/help-center/using-musicosy/collections-and-library/create-collections",
    "/resources/help-center/using-musicosy/collections-and-library/shared-collections",
    "/resources/help-center/using-musicosy/collections-and-library/your-library",
    "/resources/help-center/using-musicosy/collections-and-library/keep-and-organize-your-library",
    "/resources/help-center/using-musicosy/collections-and-library/save-music-to-your-library",
    "/resources/help-center/using-musicosy/collections-and-library/edit-or-delete-a-collection",
    "/resources/help-center/using-musicosy/collections-and-library/add-remove-and-reorder-playlist-items",
  ],
};
