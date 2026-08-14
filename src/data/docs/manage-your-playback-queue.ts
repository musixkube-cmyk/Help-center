import type { Doc } from "./types";

/**
 * "Manage your playback queue" — Using Musicosy → Media & Playback doc (position 6).
 *
 * Sixth doc in the Media & Playback sub-section. Covers the temporary playback
 * queue: queue ownership, the queue interface (Playing Now / Up Next / Recently
 * Played), modifying the active queue (add / reorder / remove / clear), saving
 * a queue as a Setlist, queue vs. Setlist comparison, and Autoplay.
 *
 * Content provided verbatim by the user; structured into blocks.
 */
export const manageYourPlaybackQueueDoc: Doc = {
  path: "/resources/help-center/using-musicosy/media-and-playback/manage-your-playback-queue",
  blocks: [
    {
      type: "paragraph",
      text: "Your playback queue is the temporary sequence of media scheduled to play during your current listening session in the Listen environment. While a Setlist is a permanent collection saved to your Library, your queue is dynamic. It holds your current track, your upcoming media (Up Next), and your recently played history.",
    },
    {
      type: "paragraph",
      text: "Managing your queue allows you to curate your immediate listening experience on the fly without altering your saved Collections or Setlists.",
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
        ["Play a Setlist or Album", "The Setlist or Album", "The player loads the entire collection into your queue in its exact saved order."],
        ["Play a single track from Search", "The Single Track", "The player starts the track. When it ends, Autoplay takes over and generates an infinite radio station based on that track."],
        ["Play a Creator Radio Station", "The Algorithm", "The platform continuously feeds similar tracks into your queue based on your real-time feedback (Loves, Skips, Keeps)."],
      ],
    },
    {
      type: "callout",
      variant: "note",
      text: "If you are listening to an Album and you manually search for and play a completely different song, you break the Album's queue ownership. The Album is removed from your upcoming tracks, and the new song takes over the queue.",
    },

    { type: "heading", text: "Viewing your queue interface" },
    {
      type: "paragraph",
      text: "You can open the full queue panel from the Now-Playing bar or the Full-Screen Player. The queue interface is divided into three distinct sections to help you navigate your session.",
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

    { type: "heading", text: "Modifying your active queue" },
    {
      type: "paragraph",
      text: "You have full control over your Up Next list while media is playing. Adjusting your queue allows you to change the mood of your session instantly.",
    },

    { type: "heading", text: "Adding media to your queue", level: 3 },
    {
      type: "paragraph",
      text: "When you find a new song or video while browsing The Stage or searching, you can inject it into your current session.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Tap the Action Menu (three dots) on the desired media." },
        { text: "Select Add to Up Next to place it at the very end of your queue." },
        { text: "Select Play Next to insert it immediately after the currently playing track." },
      ],
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
      type: "paragraph",
      text: "If you want to start completely fresh:",
    },
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
      text: "Clearing your queue or removing items from it only affects your current, temporary listening session. It does not delete songs from your saved Setlists, nor does it remove Keeps from your personal Library.",
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
        { text: "Tap the Save as Setlist button at the top or bottom of the queue interface." },
        { text: "Enter a title and an optional description for your new collection." },
        { text: "Choose your visibility setting (Private, Unlisted, or Public)." },
        { text: "Tap Create." },
      ],
    },
    {
      type: "paragraph",
      text: "Your current Up Next order is instantly saved to your Library as a new Setlist. You can now edit, share, and replay this exact sequence at any time.",
    },

    { type: "heading", text: "Queue vs. Setlist" },
    {
      type: "paragraph",
      text: "It is common to confuse your temporary queue with your saved Setlists. Use this table to understand how they interact.",
    },
    {
      type: "table",
      headers: ["Feature", "Playback Queue (Up Next)", "Setlist (Playlist)"],
      rows: [
        ["Lifespan", "Temporary. Disappears when you close the app or clear the session.", "Permanent. Saved to your Library until you delete it."],
        ["Editing Impact", "Changes only affect your current listening session.", "Changes alter the actual collection for all future plays."],
        ["Sharing", "Cannot be shared directly with other members.", "Can be shared publicly, via link, or collaboratively."],
        ["Offline Access", "Cannot be downloaded as a queue.", "Can be downloaded using the Take It With You feature."],
      ],
    },

    { type: "heading", text: "Autoplay and the infinite queue" },
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
      text: "You can disable Autoplay in your Playback Settings if you prefer silence when your chosen Setlist, Album, or queue finishes.",
    },
  ],
  related: [
    "/resources/help-center/using-musicosy/media-and-playback/listen-on-musicosy",
    "/resources/help-center/using-musicosy/media-and-playback/video-playing",
    "/resources/help-center/using-musicosy/media-and-playback/fullscreen",
    "/resources/help-center/using-musicosy/media-and-playback/on-demand-playback",
    "/resources/help-center/using-musicosy/media-and-playback/sound",
    "/resources/help-center/using-musicosy/media-and-playback/manage-your-up-next-queue",
    "/resources/help-center/using-musicosy/media-and-playback/continue-listening",
    "/resources/help-center/using-musicosy/media-and-playback/music-playback-troubleshooting",
    "/resources/help-center/using-musicosy/media-and-playback/video-playback-troubleshooting",
  ],
};
