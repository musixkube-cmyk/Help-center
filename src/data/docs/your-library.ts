import type { Doc } from "./types";

/**
 * "Your Library" — Using Music OSY → Collections & Library doc (position 5).
 *
 * Covers the personal Library hub: what lives in it (Keeps, Setlists, Crates,
 * Purchases, Downloads, Subscriptions, Tickets/Events, History), the Keep
 * feature (rules), offline access ("Take It With You" downloads + entitlement
 * conditions), listening history and privacy, how the Library handles
 * unavailable media, and organizing your Library.
 *
 * Content provided verbatim by the user; structured into blocks.
 */
export const yourLibraryDoc: Doc = {
  path: "/resources/help-center/using-musicosy/collections-and-library/your-library",
  blocks: [
    {
      type: "paragraph",
      text: "Your Library is your personal home on MusicOSY. It is the central hub where you can access everything you have saved, purchased, downloaded, and organized. Whether you are returning to a favorite song, picking up a podcast where you left off, or accessing a ticket for an upcoming show, your Library keeps your music culture experience tailored entirely to you.",
    },
    {
      type: "paragraph",
      text: "Because MusicOSY separates social discovery from continuous listening, your Library is strictly designed for personal retrieval, organization, and repeat access.",
    },

    { type: "heading", text: "What Lives in Your Library" },
    {
      type: "paragraph",
      text: "Your Library aggregates your personal relationships with eligible media across the entire platform.",
    },
    {
      type: "table",
      headers: ["Library Section", "What It Contains"],
      rows: [
        ["Keeps", "Songs, albums, videos, podcasts, events, and creator profiles you have saved for quick access."],
        ["Setlists", "Your personal, collaborative, and followed playlists designed for sequential playback."],
        ["Crates", "Your curated folders for mixed media, merchandise, samples, and project references."],
        ["Purchases", "Music, videos, digital products, and merchandise you have bought and unlocked."],
        ["Downloads", "Media you have saved for offline listening using the \"Take It With You\" feature."],
        ["Subscriptions", "Active creator subscriptions, fan club memberships, and platform plans."],
        ["Tickets and Events", "Upcoming event tickets, RSVPs, and saved local shows."],
        ["History", "Your listening and watching history, including \"Continue Listening\" and \"Continue Watching\" queues."],
      ],
    },
    {
      type: "callout",
      variant: "note",
      text: "Your Library is a personal relationship layer. Saving an item to your Library does not alter the creator's ownership, copyright, publication status, or public analytics.",
    },

    { type: "heading", text: "The \"Keep\" Feature" },
    {
      type: "paragraph",
      text: "On MusicOSY, the action of saving an item to your favorites is called a Keep. When you tap the Keep (bookmark) icon on any eligible song, video, post, or creator profile, it is instantly added to your Library.",
    },

    { type: "heading", text: "Keep Rules at a Glance", level: 3 },
    {
      type: "list",
      items: [
        { lead: "One Keep per item:", text: "You can only have one active Keep per item. Tapping the Keep icon again removes it from your personal saves." },
        { lead: "No automatic access:", text: "Keeping a paid or subscriber-only item does not grant playback access. You must still purchase or subscribe to unlock the media." },
        { lead: "Privacy:", text: "Your Keeps are strictly private by default. Other members cannot see your saved items unless you explicitly add them to a public Setlist or Crate." },
      ],
    },

    { type: "heading", text: "Offline Access (Take It With You)" },
    {
      type: "paragraph",
      text: "You can download eligible music, podcasts, and videos to your device for offline listening. On MusicOSY, this feature is known as Take It With You.",
    },

    { type: "heading", text: "How Offline Entitlements Work", level: 3 },
    {
      type: "paragraph",
      text: "Downloads are a controlled offline entitlement, not a permanent transfer of copyright ownership. The availability of your downloads depends on your current plan, purchases, and the creator's distribution settings.",
    },
    {
      type: "table",
      headers: ["Condition", "Offline Playback Status"],
      rows: [
        ["Active Subscription / Purchase", "Downloads remain fully playable offline."],
        ["Subscription Expires", "Downloaded subscriber-only media will lock and become unplayable until you renew."],
        ["Track Removed from Platform", "The download is invalidated and removed from your device upon the next network sync."],
        ["Territory Restriction", "If you travel to a region where the media is restricted, offline playback may be blocked."],
      ],
    },
    {
      type: "callout",
      variant: "warning",
      text: "MusicOSY requires periodic network validation for downloaded content. You must connect your device to the internet at least once every 30 days to verify your active entitlements and maintain access to your offline Library.",
    },

    { type: "heading", text: "Listening History and Privacy" },
    {
      type: "paragraph",
      text: "Your Library automatically tracks your listening and watching history to power features like Continue Listening, Continue Watching, and personalized recommendations.",
    },

    { type: "heading", text: "Managing Your History", level: 3 },
    {
      type: "list",
      items: [
        { lead: "Privacy First:", text: "Your listening history is completely private by default. Other members, creators, and workspaces cannot see what you are listening to unless you deliberately share a Setlist or post about it." },
        { lead: "Clearing History:", text: "You can remove individual items or clear your entire listening history from your Library settings." },
        { lead: "Pausing History:", text: "If you want to listen without influencing your future recommendations, you can pause history tracking in your Privacy and Safety settings." },
      ],
    },
    {
      type: "callout",
      variant: "note",
      text: "Clearing your visible history removes it from your Library view and resets certain personalized recommendations. It does not erase completed purchases, financial records, creator royalty streams, or required platform analytics.",
    },

    { type: "heading", text: "How Your Library Handles Unavailable Media" },
    {
      type: "paragraph",
      text: "Because your Library relies on reference links to the canonical MusicOSY catalog, changes to the underlying media or your account status will affect how items appear in your Library.",
    },
    {
      type: "table",
      headers: ["Event", "What Happens in Your Library"],
      rows: [
        ["A creator unpublishes a track", "The Keep or Setlist reference remains in your Library, but the item displays an \"Unavailable\" status and will be skipped during playback."],
        ["A track becomes restricted in your territory", "The item remains visible in your Library, but playback is blocked when you are physically located in the restricted region."],
        ["Your subscription to a creator ends", "Subscriber-only Keeps and Downloads will lock. You will see the item in your Library, but it will require a renewed subscription to access."],
        ["You block a creator", "The creator's media is suppressed from your Library feeds and recommendations, though transactional records (like past purchases) are retained for your order history."],
      ],
    },

    { type: "heading", text: "Organizing Your Library" },
    {
      type: "paragraph",
      text: "As your Library grows, you can use built-in tools to keep your media organized and easy to find.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        { lead: "Filter by Content Type:", text: "Use the top navigation tabs in your Library to isolate Music, Videos, Podcasts, Events, or Merchandise." },
        { lead: "Sort Options:", text: "Organize your Keeps and History by Date Added, Alphabetical, Creator, or Most Played." },
        { lead: "Search Within Library:", text: "Use the search bar while inside the Library to instantly find a specific track, episode, or Setlist without querying the global MusicOSY catalog." },
        { lead: "Build Collections:", text: "Move your Keeps into Setlists for sequential playback or Crates for thematic grouping." },
      ],
    },
  ],
  related: [
    "/resources/help-center/using-musicosy/collections-and-library/collections",
    "/resources/help-center/using-musicosy/collections-and-library/create-collections",
    "/resources/help-center/using-musicosy/collections-and-library/shared-collections",
    "/resources/help-center/using-musicosy/collections-and-library/playlists",
    "/resources/help-center/using-musicosy/collections-and-library/keep-and-organize-your-library",
    "/resources/help-center/using-musicosy/collections-and-library/save-music-to-your-library",
    "/resources/help-center/using-musicosy/collections-and-library/edit-or-delete-a-collection",
    "/resources/help-center/using-musicosy/collections-and-library/add-remove-and-reorder-playlist-items",
  ],
};
