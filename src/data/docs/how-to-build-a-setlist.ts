import type { Doc } from "./types";

/**
 * "How to build a Setlist" — Getting Started doc covering MusicOSY's
 * playlist feature. A Setlist is a curated, ordered collection of playable
 * media. Covers creating (from Library or player), adding music, what
 * adding does, ordering, queue vs Setlist, editing, unavailable items,
 * deletion, visibility (private/shared/public), availability recheck,
 * collaboration, Workspace Setlists, playback, autoplay, discovery,
 * following, sharing, and a Setlist/Keep/Library comparison table.
 *
 * Content provided verbatim by the user; structured into blocks. Uses a
 * 3-row comparison table, multiple numbered and bulleted lists, bold
 * lead-in items, and a note callout.
 */
export const howToBuildASetlistDoc: Doc = {
  path: "/resources/help-center/getting-started/how-to-build-a-setlist",
  blocks: [
    {
      type: "paragraph",
      text: "A Setlist is MusicOSY's name for a playlist: a curated, ordered collection of songs, videos, podcast episodes, or other playable media.",
    },
    {
      type: "paragraph",
      text: "Build a Setlist for any moment, mood, memory, project, road trip, workout, creative reference, live show, or music discovery session. Keep it personal, share it with friends, or invite collaborators to build it with you.",
    },
    {
      type: "callout",
      variant: "note",
      text: "A Setlist is different from a Keep. A Keep saves a single item to your Library for quick access. A Setlist is an ordered sequence you curate, arrange, and optionally share. You can Keep a track and also add it to one or more Setlists.",
    },

    { type: "heading", text: "Create a new Setlist" },
    {
      type: "paragraph",
      text: "You can create a Setlist from your Library or while listening to something you want to add.",
    },
    { type: "heading", text: "From your Library", level: 3 },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Open Library." },
        { text: "Select Setlists." },
        { text: "Select Create Setlist or Build a Setlist." },
        { text: "Give your Setlist a title." },
        {
          text: "Add a description if you want people to understand the mood, purpose, or story behind it.",
        },
        { text: "Choose a cover image, if available." },
        {
          text: "Choose who can see or contribute to your Setlist.",
        },
        { text: "Select Create." },
      ],
    },
    { type: "heading", text: "From the player or any content page", level: 3 },
    {
      type: "list",
      ordered: true,
      items: [
        {
          text: "Find a track, video, episode, or other playable item you want to include.",
        },
        { text: "Select the More menu or the Add to Setlist action." },
        { text: "Select Create new Setlist." },
        {
          text: "Name your Setlist, add an optional description, and choose visibility.",
        },
        { text: "Select Create." },
      ],
    },
    {
      type: "paragraph",
      text: "The item you selected will be added automatically. Your new Setlist is ready for you to start adding music.",
    },

    { type: "heading", text: "Add music to your Setlist" },
    {
      type: "paragraph",
      text: "When you find a track, video, episode, or other playable item you want to include:",
    },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Select the More menu on the item." },
        { text: "Select Add to Setlist." },
        {
          text: "Choose an existing Setlist, or select Create new Setlist.",
        },
        { text: "Confirm your selection." },
      ],
    },
    {
      type: "paragraph",
      text: "You can add eligible music from Search, The Stage, Listen, an Artist Page, a release page, your Library, and other supported MusicOSY surfaces.",
    },

    { type: "heading", text: "What adding an item does" },
    {
      type: "paragraph",
      text: "Adding an item to a Setlist saves a reference to the original media. It does not create a new copy of the song, video, episode, or release. The item remains connected to its canonical source, which means:",
    },
    {
      type: "list",
      items: [
        {
          text: "If the original track becomes unavailable, your Setlist will show that the item cannot be played rather than removing it silently.",
        },
        {
          text: "Adding an item does not change its publication status, rights, or availability.",
        },
        {
          text: "Adding an item does not notify the creator unless the platform explicitly provides a creator-visible aggregate signal.",
        },
      ],
    },

    { type: "heading", text: "What you can add" },
    {
      type: "paragraph",
      text: "You can add any eligible playable item, including:",
    },
    {
      type: "list",
      items: [
        { text: "Individual tracks" },
        {
          text: "Releases or albums (added as individual tracks)",
        },
        { text: "Music videos" },
        { text: "Podcast episodes" },
        { text: "Live session replays where playback is eligible" },
        { text: "Other supported playable media" },
      ],
    },
    {
      type: "paragraph",
      text: "You cannot add items that are private, deleted, restricted, or otherwise ineligible for the Setlist's audience.",
    },

    { type: "heading", text: "Put your Setlist in order" },
    {
      type: "paragraph",
      text: "A Setlist is more than a group of songs—it is a sequence. The order shapes the experience.",
    },
    {
      type: "paragraph",
      text: "To change the order:",
    },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Open the Setlist." },
        { text: "Select Edit Setlist." },
        {
          text: "Press and hold an item, or use the reorder control.",
        },
        { text: "Drag the item to its new position." },
        { text: "Save your changes." },
      ],
    },
    {
      type: "paragraph",
      text: "Use the order to shape the experience you want someone to have. Start soft and build energy. Tell a story. Create a clean transition between genres. Put your favorite track first. There is no wrong way to curate your sound.",
    },

    { type: "heading", text: "Your queue is not your Setlist" },
    {
      type: "paragraph",
      text: "Changes to your listening queue (Up Next) do not automatically change your Setlist. Your Up Next queue is for the current listening session. A Setlist changes only when you explicitly edit the Setlist itself.",
    },
    {
      type: "paragraph",
      text: "This means:",
    },
    {
      type: "list",
      items: [
        {
          text: "Skipping a track in the player does not remove it from your Setlist.",
        },
        {
          text: "Reordering your Up Next queue does not reorder your Setlist.",
        },
        {
          text: "Adding a track to Up Next does not add it to your Setlist.",
        },
        {
          text: "Editing your Setlist does not change what is currently playing in your Up Next queue.",
        },
      ],
    },

    { type: "heading", text: "Edit your Setlist" },
    {
      type: "paragraph",
      text: "You can return to a Setlist whenever you want to update it.",
    },
    {
      type: "paragraph",
      text: "From Edit Setlist, you can:",
    },
    {
      type: "list",
      items: [
        { text: "Change the title" },
        { text: "Update the description" },
        { text: "Change the cover image" },
        { text: "Add more music" },
        { text: "Remove items" },
        { text: "Reorder items" },
        { text: "Change visibility" },
        { text: "Manage collaborators, where available" },
        { text: "Archive or delete the Setlist" },
      ],
    },

    { type: "heading", text: "If an item becomes unavailable" },
    {
      type: "paragraph",
      text: "If a track or other item later becomes unavailable because of rights, territory, privacy, safety, or access restrictions, the rest of your Setlist remains available. MusicOSY will show that the specific item cannot be played instead of removing the entire Setlist.",
    },
    {
      type: "paragraph",
      text: "You can choose to leave the unavailable item in place, remove it, or replace it with something else.",
    },

    { type: "heading", text: "Deleting a Setlist" },
    {
      type: "paragraph",
      text: "Deleting a Setlist removes the curated sequence and its metadata. It does not delete the tracks, videos, episodes, or other items themselves. Those items remain in their original catalog locations.",
    },
    {
      type: "paragraph",
      text: "If you have shared a public Setlist and delete it, existing links to that Setlist will no longer resolve.",
    },

    { type: "heading", text: "Choose who can see your Setlist" },
    {
      type: "paragraph",
      text: "When you create or edit a Setlist, choose the visibility that fits your purpose.",
    },
    { type: "heading", text: "Private", level: 3 },
    {
      type: "paragraph",
      text: "Only you and explicitly authorized collaborators can view the Setlist.",
    },
    {
      type: "paragraph",
      text: "Use a private Setlist for:",
    },
    {
      type: "list",
      items: [
        { text: "Personal listening" },
        { text: "Unfinished ideas" },
        { text: "Reference music" },
        { text: "Gifts or surprises" },
        { text: "Planning a performance" },
        { text: "Music you are not ready to share" },
      ],
    },
    {
      type: "paragraph",
      text: "Private Setlists do not appear in Search, Discover, The Stage, recommendations, or public profile tabs.",
    },
    { type: "heading", text: "Shared", level: 3 },
    {
      type: "paragraph",
      text: "Invite specific members to view, contribute to, or help edit the Setlist, depending on the access you give them.",
    },
    {
      type: "paragraph",
      text: "Use a shared Setlist for:",
    },
    {
      type: "list",
      items: [
        { text: "Road trips" },
        { text: "Parties" },
        { text: "Band references" },
        { text: "Collaborative music discovery" },
        { text: "Event planning" },
        { text: "Studio inspiration" },
        { text: "Team or Workspace projects" },
      ],
    },
    {
      type: "paragraph",
      text: "Shared Setlists are accessible by link or invitation only. They do not appear in public Search or Discover unless you change their visibility.",
    },
    { type: "heading", text: "Public", level: 3 },
    {
      type: "paragraph",
      text: "Anyone who can access your profile or the shared Setlist link may be able to view and play eligible items.",
    },
    {
      type: "paragraph",
      text: "Use a public Setlist to:",
    },
    {
      type: "list",
      items: [
        { text: "Share your taste" },
        { text: "Highlight music you Love" },
        { text: "Curate a mood or theme" },
        { text: "Support artists you follow" },
        {
          text: "Build a community around a genre, scene, or moment",
        },
      ],
    },
    {
      type: "paragraph",
      text: "Public Setlists may appear in Search, Discover, recommendations, and your public profile's Setlists tab.",
    },

    { type: "heading", text: "Availability recheck" },
    {
      type: "paragraph",
      text: "Public and shared Setlists recheck whether each item is available when someone plays it. A track that is available to you may not be available to every listener because access can depend on location, rights, age, entitlement, or other availability rules.",
    },
    {
      type: "paragraph",
      text: "Each listener sees only the items they are currently eligible to access. Items that are unavailable to a specific listener will be shown as unavailable within the Setlist rather than being hidden entirely.",
    },

    { type: "heading", text: "Build a Setlist with others" },
    {
      type: "paragraph",
      text: "If collaboration is enabled for your Setlist, you can invite other members to help build it.",
    },
    {
      type: "paragraph",
      text: "Collaborators may be able to add, remove, or reorder tracks based on the access you give them. Use a collaborative Setlist for a shared experience, but remember that the Setlist owner controls its main settings, visibility, and lifecycle.",
    },
    { type: "heading", text: "Collaboration rules", level: 3 },
    {
      type: "list",
      items: [
        {
          text: "The Setlist owner decides whether collaboration is open, invitation-only, or closed.",
        },
        {
          text: "Contributors can only add, remove, or reorder items according to the owner's collaboration settings.",
        },
        {
          text: "A collaborator's additions are subject to the same eligibility and availability rules as the owner's.",
        },
        {
          text: "Removing a collaborator does not automatically remove the items they added, unless the owner chooses to do so.",
        },
        { text: "The owner can disable collaboration at any time." },
      ],
    },
    {
      type: "paragraph",
      text: "Only invite people you trust to edit a Setlist that matters to you.",
    },

    { type: "heading", text: "Workspace Setlists" },
    {
      type: "paragraph",
      text: "If you are working in a Workspace, you may be able to create Workspace-owned Setlists for shared projects, reference music, event planning, or team collaboration. Workspace Setlists are governed by Workspace roles and permissions.",
    },
    {
      type: "paragraph",
      text: "Switching from your Personal Context to a Workspace Context does not transfer your personal Setlists to the Workspace, and vice versa.",
    },

    { type: "heading", text: "Play your Setlist" },
    {
      type: "paragraph",
      text: "Open any Setlist and select Play to begin listening in order.",
    },
    {
      type: "paragraph",
      text: "You can also:",
    },
    {
      type: "list",
      items: [
        { text: "Play to start from the beginning." },
        { text: "Shuffle to play in random order." },
        { text: "Repeat to loop the Setlist." },
        {
          text: "Select a specific item to start playback from that point.",
        },
      ],
    },

    { type: "heading", text: "When your Setlist ends" },
    {
      type: "paragraph",
      text: "If your Setlist ends and autoplay is enabled, MusicOSY may begin playing recommendations afterward. MusicOSY will identify when your Setlist has ended and playback has moved into recommendations.",
    },
    {
      type: "paragraph",
      text: "You will see a clear indicator that your Setlist has ended and that you are now listening to recommendations. You can stop, disable autoplay, or replace the continuation with a different source at any time.",
    },
    {
      type: "paragraph",
      text: "MusicOSY will not silently add recommended tracks into your manually curated Setlist. Recommendations appear only in the playback session, not in the Setlist itself.",
    },

    { type: "heading", text: "Follow and discover Setlists" },
    {
      type: "paragraph",
      text: "You can discover and follow Setlists created by other members, creators, or MusicOSY.",
    },
    { type: "heading", text: "Discover Setlists", level: 3 },
    {
      type: "paragraph",
      text: "You may find Setlists through:",
    },
    {
      type: "list",
      items: [
        { text: "Search for a creator, genre, mood, or theme" },
        { text: "Discover and recommendation rails" },
        { text: "A creator's Setlists tab on their profile" },
        { text: "The Stage when someone shares a Setlist" },
        { text: "Library suggestions based on your listening" },
      ],
    },
    { type: "heading", text: "Follow a Setlist", level: 3 },
    {
      type: "paragraph",
      text: "When you follow a public Setlist, you will receive eligible updates when the owner adds or removes items. You can unfollow at any time.",
    },
    {
      type: "paragraph",
      text: "Following a Setlist does not copy it to your Library. It creates a reference so you can return to it and receive updates.",
    },

    { type: "heading", text: "Share your Setlist" },
    {
      type: "paragraph",
      text: "You can share a public or shared Setlist through Pass the Mic (share), direct link, Backstage (direct messages), or other supported sharing methods.",
    },
    {
      type: "paragraph",
      text: "The recipient must be eligible to access the Setlist and its items. If the Setlist is private or shared by invitation, only invited members can view it.",
    },

    { type: "heading", text: "Setlists versus Keeps versus Library" },
    {
      type: "table",
      headers: ["Feature", "What it does"],
      rows: [
        [
          "Keep",
          "Saves a single item (track, video, episode, creator, event, product) to your Library for quick personal access.",
        ],
        [
          "Setlist",
          "An ordered, curated collection of playable items that you arrange, name, describe, and optionally share.",
        ],
        [
          "Library",
          "Your personal space that contains your Keeps, Setlists, downloads, purchases, history, subscriptions, and saved content.",
        ],
      ],
    },
    {
      type: "paragraph",
      text: "A Keep is a personal save. A Setlist is a curated sequence. Your Library holds both, along with your other personal media relationships.",
    },
    {
      type: "paragraph",
      text: "You can Keep a track and also add it to one or more Setlists. Keeping an item does not automatically add it to a Setlist, and adding an item to a Setlist does not automatically Keep it.",
    },
  ],
  related: [
    "/resources/help-center/using-musicosy/collections-and-library/your-library",
    "/resources/help-center/using-musicosy/collections-and-library/save-music-to-your-library",
    "/resources/help-center/using-musicosy/collections-and-library/create-collections",
    "/resources/help-center/using-musicosy/collections-and-library/shared-collections",
    "/resources/help-center/using-musicosy/collections-and-library/add-remove-and-reorder-playlist-items",
    "/resources/help-center/using-musicosy/media-and-playback/listen-on-musicosy",
    "/resources/help-center/using-musicosy/media-and-playback/manage-your-playback-queue",
    "/resources/help-center/using-musicosy/content-interaction/share",
    "/resources/help-center/using-musicosy/discover-and-browse/discover-content",
    "/resources/help-center/using-musicosy/discover-and-browse/search",
  ],
};
