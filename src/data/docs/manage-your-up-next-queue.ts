import type { Doc } from "./types";

/**
 * "Manage your Up Next queue" — Using Musicosy → Media & Playback doc (position 7).
 *
 * Seventh doc in the Media & Playback sub-section. Covers the Up Next queue
 * specifically: queue ownership, the Up Next interface, adding media (with
 * Play Next vs Add to Up Next), reordering/removing/clearing, saving a queue
 * as a Setlist, handling unavailable media, and Autoplay with a disclosure.
 *
 * Content provided verbatim by the user; structured into blocks.
 */
export const manageYourUpNextQueueDoc: Doc = {
  path: "/resources/help-center/using-musicosy/media-and-playback/manage-your-up-next-queue",
  blocks: [
    {
      type: "paragraph",
      text: "Your Up Next queue is the temporary, ordered sequence of media scheduled to play during your current listening or watching session in the Listen environment. While a Setlist is a permanent collection saved to your Library, your Up Next queue is dynamic and session-specific.",
    },
    {
      type: "paragraph",
      text: "Managing your queue allows you to curate your immediate experience on the fly, inject new discoveries, and control the flow of your session without altering your saved collections.",
    },

    { type: "heading", text: "Understanding queue ownership" },
    {
      type: "paragraph",
      text: "When you start playing media on MusicOSY, the platform establishes a \"queue owner.\" This determines how your upcoming tracks are populated and what happens when your current media finishes.",
    },
    {
      type: "table",
      headers: ["Your Action", "Queue Owner", "What Happens Next"],
      rows: [
        ["Play a Setlist or Album", "The Setlist or Album", "The player loads the entire collection into your Up Next queue in its exact saved order."],
        ["Play a single track from Search", "The Single Track", "The player starts the track. When it ends, Autoplay takes over (if enabled) and generates an infinite radio station based on that track."],
        ["Play a Creator Radio Station", "The Algorithm", "The platform continuously feeds similar tracks into your queue based on your real-time feedback (Loves, Skips, Keeps)."],
        ["Select \"Play Full\" from The Stage", "The Selected Item", "The social preview transitions into a full Listen session. Continuation requires an explicit queue/radio selection or Autoplay."],
      ],
    },
    {
      type: "callout",
      variant: "note",
      text: "If you are listening to an Album and you manually search for and play a completely different song, you break the Album's queue ownership. The Album is removed from your upcoming tracks, and the new song takes over the queue.",
    },

    { type: "heading", text: "Viewing the Up Next interface" },
    {
      type: "paragraph",
      text: "You can open the full queue panel from the Now-Playing bar or the Full-Screen Player. The interface is divided into three distinct sections:",
    },
    {
      type: "table",
      headers: ["Queue Section", "Description"],
      rows: [
        ["Playing Now", "The media currently streaming to your device."],
        ["Up Next", "The ordered list of specific songs, videos, or episodes scheduled to play immediately after the current track."],
        ["Recently Played", "A historical log of the media you have already listened to during this active session."],
      ],
    },
    {
      type: "callout",
      variant: "note",
      text: "You can tap any item in your Recently Played list to instantly restart it or add it back to your Up Next list.",
    },

    { type: "heading", text: "Adding media to your queue" },
    {
      type: "paragraph",
      text: "When you find a new song or video while browsing The Stage, searching, or exploring your Library, you can inject it into your current session using two distinct methods.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Tap the Action Menu (three dots) on the desired media." },
        {
          text: "Choose your injection method:",
          children: [
            { text: "Play Next: Inserts the selected track immediately after the currently playing song, bumping the rest of the queue down." },
            { text: "Add to Up Next: Places the selected track at the very end of your current queue." },
          ],
        },
      ],
    },
    {
      type: "callout",
      variant: "note",
      text: "A queue must not add paid, restricted, explicit, blocked, muted, age-gated, territory-ineligible, or otherwise unavailable media without current eligibility validation. If you try to add a subscriber-only track you do not have access to, the platform will block the action.",
    },

    { type: "heading", text: "Reordering, removing, and clearing" },
    {
      type: "paragraph",
      text: "You have full control over your Up Next list while media is playing. Adjusting your queue allows you to change the mood of your session instantly.",
    },

    { type: "heading", text: "Reordering and removing items", level: 3 },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Open the queue panel from the player." },
        { text: "Press and hold the drag handle next to any item in the Up Next section." },
        { text: "Drag the item up or down to change its playback position." },
        { text: "To remove an item, tap the Remove icon (trash can or minus sign) next to the track." },
      ],
    },

    { type: "heading", text: "Clearing the queue", level: 3 },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Open the queue panel." },
        { text: "Tap Clear Queue or Clear Up Next at the bottom of the list." },
        { text: "Confirm the action. This removes all upcoming tracks but does not stop the currently playing media." },
      ],
    },
    {
      type: "callout",
      variant: "warning",
      text: "Clearing your queue or removing items from it only affects your current, temporary listening session. It does not delete songs from your saved Setlists, nor does it remove Keeps from your personal Library. Queue changes never modify a canonical Setlist unless you explicitly open the Setlist editor.",
    },

    { type: "heading", text: "Saving your queue as a Setlist" },
    {
      type: "paragraph",
      text: "Sometimes you build a perfect sequence of music on the fly and want to keep it forever. You can convert your temporary queue into a permanent Setlist.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Open your queue panel while your session is active." },
        { text: "Tap the Save as Setlist button." },
        { text: "Enter a title and an optional description for your new collection." },
        { text: "Choose your visibility setting (Private, Unlisted, or Public)." },
        { text: "Tap Create." },
      ],
    },
    {
      type: "paragraph",
      text: "Your current Up Next order is instantly saved to your Library as a new Setlist. You can now edit, share, and replay this exact sequence at any time.",
    },

    { type: "heading", text: "How Up Next handles unavailable media" },
    {
      type: "paragraph",
      text: "Because your queue relies on real-time rights, licensing, and territory agreements, a track's availability can change while it is sitting in your Up Next list. The MusicOSY player is designed to handle these changes gracefully without breaking your listening session.",
    },
    {
      type: "table",
      headers: ["Restriction Type", "What Happens in the Queue"],
      rows: [
        ["Territory Restriction", "If you travel to a region where a queued track is not licensed, the player will skip it and show a neutral availability notice."],
        ["Subscription Expiry", "If your access to a creator's Circle ends, their subscriber-only tracks will lock and be skipped."],
        ["Content Unpublished", "If the creator takes the track off the platform, it will be marked as unavailable and skipped."],
        ["Network Loss", "The player will buffer/pause and attempt to reconnect, preserving your exact queue position."],
      ],
    },
    {
      type: "callout",
      variant: "note",
      text: "A queue item that becomes unavailable must be skipped or marked unavailable; it will never play merely because it was already queued.",
    },

    { type: "heading", text: "Autoplay and continuous discovery" },
    {
      type: "paragraph",
      text: "When your Up Next queue reaches the end, MusicOSY does not simply stop playing. If you have Autoplay enabled in your settings, the platform seamlessly transitions into an algorithmic radio station.",
    },
    {
      type: "list",
      items: [
        { text: "Autoplay analyzes the genres, moods, and creators of the media you just finished." },
        { text: "It generates an infinite queue of similar tracks to keep your listening session going." },
        { text: "If you Love, Keep, or skip an Autoplay track, the algorithm immediately adjusts the upcoming queue to better match your preferences." },
      ],
    },
    {
      type: "callout",
      variant: "note",
      title: "Autoplay Disclosure",
      text: "Where a queue transitions from a member-owned source (like an Album or Setlist) to recommended continuation, the player will visibly identify the change (e.g., \"Your Setlist ended. Autoplay is now playing recommendations.\"). You can stop, disable, or replace that continuation at any time.",
    },
    {
      type: "callout",
      variant: "note",
      text: "You can disable Autoplay in your Playback Settings if you prefer silence when your chosen Setlist, Album, or queue finishes.",
    },
  ],
  related: [
    "/resources/help-center/using-musicosy/media-and-playback/listen-on-musicosy",
    "/resources/help-center/using-musicosy/media-and-playback/video-playing",
    "/resources/help-center/using-musicosy/media-and-playback/fullscreen",
    "/resources/help-center/using-musicosy/media-and-playback/on-demand-playback",
    "/resources/help-center/using-musicosy/media-and-playback/sound",
    "/resources/help-center/using-musicosy/media-and-playback/manage-your-playback-queue",
    "/resources/help-center/using-musicosy/media-and-playback/continue-listening",
    "/resources/help-center/using-musicosy/media-and-playback/music-playback-troubleshooting",
    "/resources/help-center/using-musicosy/media-and-playback/video-playback-troubleshooting",
  ],
};
