import type { Doc } from "./types";

/**
 * "Continue listening" — Using Musicosy → Media & Playback doc (position 8).
 *
 * Eighth doc in the Media & Playback sub-section. Covers how MusicOSY saves
 * playback progress (resume state), where to find the Continue listening
 * rails, cross-device handoff, privacy and History controls, handling
 * unavailable/restricted media, and FAQs.
 *
 * Content provided verbatim by the user; structured into blocks.
 */
export const continueListeningDoc: Doc = {
  path: "/resources/help-center/using-musicosy/media-and-playback/continue-listening",
  blocks: [
    {
      type: "paragraph",
      text: "MusicOSY is designed to respect your time and your place in a story. Whether you are halfway through a two-hour podcast episode, pausing a live session replay, or stepping away from an album, the Continue listening feature automatically saves your progress so you can pick up exactly where you left off.",
    },
    {
      type: "paragraph",
      text: "Because MusicOSY unifies your experience across devices, your resume state is securely synced to your account, allowing you to start a session on your phone and finish it on your desktop without losing your place.",
    },

    { type: "heading", text: "How MusicOSY saves your progress" },
    {
      type: "paragraph",
      text: "The Listen environment continuously and securely tracks your playback position for eligible media. This data is stored privately in your Library history and is used to power the Continue listening rails across the platform.",
    },
    {
      type: "table",
      headers: ["Media Type", "How Progress is Saved"],
      rows: [
        ["Podcasts and Episodes", "Saves your exact timestamp. When you return, the player automatically skips to the second you paused."],
        ["Albums and Releases", "Remembers the last track you played and your position within that track, queuing the rest of the album in your Up Next."],
        ["Setlists", "Remembers the last song played in the sequence and resumes the Setlist order from that point."],
        ["Long-form Videos & Replays", "Saves your timestamp for \"Continue watching\" so you can resume video playback seamlessly."],
        ["Individual Songs", "Remembers the last played track to populate your \"Recently Played\" and quick-resume modules."],
      ],
    },
    {
      type: "callout",
      variant: "note",
      text: "Your listening progress is updated in real-time. If you lose internet connection, the MusicOSY app caches your resume state locally and syncs it to your account the next time you connect to the network.",
    },

    { type: "heading", text: "Where to find Continue listening" },
    {
      type: "paragraph",
      text: "You can access your saved sessions from several key areas within the MusicOSY app shell:",
    },
    {
      type: "list",
      ordered: true,
      items: [
        { lead: "The Home Feed:", text: "The Continue listening rail appears near the top of your Home screen, displaying the albums, podcasts, and Setlists you were most recently engaged with." },
        { lead: "Your Library:", text: "Navigate to your Library and select the History or Continue listening tab to see a chronological list of your paused and recently completed media." },
        { lead: "The Listen Player:", text: "If you open the player and press \"Play\" on a podcast or album you recently paused, MusicOSY will automatically prompt you to Resume from your last saved timestamp or Start Over." },
        { lead: "Search:", text: "If you search for a specific podcast show or album you are currently in the middle of, the search result card will display a progress bar and a \"Resume\" button." },
      ],
    },

    { type: "heading", text: "Cross-device handoff" },
    {
      type: "paragraph",
      text: "Your resume state is tied to your MusicOSY member account, not your physical device.",
    },
    {
      type: "list",
      items: [
        { lead: "Seamless Transitions:", text: "If you pause a podcast on your phone during your commute and later open MusicOSY on your desktop or tablet, the player will recognize your account's last known timestamp and offer to resume playback." },
        { lead: "Offline to Online:", text: "If you are listening to a downloaded episode via Take It With You and go offline, your progress is saved locally. Once your device reconnects to the internet, your local progress syncs with your cloud history." },
      ],
    },

    { type: "heading", text: "Privacy and History controls" },
    {
      type: "paragraph",
      text: "Your listening habits are your own. MusicOSY strictly separates your private consumption data from public social metrics and creator analytics.",
    },

    { type: "heading", text: "What remains private", level: 3 },
    {
      type: "list",
      items: [
        { lead: "Creators cannot see your timeline:", text: "A podcaster or musician can see aggregate analytics (e.g., \"50% of listeners drop off at minute 12\"), but they cannot see your personal listening history, when you paused, or whether you finished a track." },
        { lead: "Followers cannot see your activity:", text: "Your Continue listening state and History are completely hidden from your followers and the public Stage feed." },
      ],
    },

    { type: "heading", text: "Managing your History", level: 3 },
    {
      type: "paragraph",
      text: "You have full control over the data that powers the Continue listening feature.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Navigate to your Library > History." },
        { text: "Tap the Settings (gear) icon or Clear History." },
        { text: "You can choose to remove individual items or clear your entire listening history." },
      ],
    },
    {
      type: "callout",
      variant: "warning",
      text: "Clearing your visible history will permanently delete your saved timestamps. If you clear your history for a specific podcast episode, MusicOSY will no longer offer to \"Resume\" that episode; it will start from the beginning the next time you press play. Clearing history may also reset certain personalized recommendations.",
    },

    { type: "heading", text: "Pausing History", level: 3 },
    {
      type: "paragraph",
      text: "If you want to listen to a specific Setlist or genre without it influencing your future recommendations or cluttering your Continue listening rail, you can temporarily Pause Listening History in your Privacy and Playback settings. Media consumed while history is paused will not generate a resume state.",
    },

    { type: "heading", text: "Handling unavailable or restricted media" },
    {
      type: "paragraph",
      text: "Because your History and Continue listening states rely on real-time rights, licensing, and catalog availability, the platform must gracefully handle situations where media changes status while sitting in your history.",
    },
    {
      type: "table",
      headers: ["Event", "What Happens to Your Resume State"],
      rows: [
        ["Territory Restriction", "If you travel to a region where a podcast or track is not licensed, the item remains in your history but playback is blocked. The player will show a neutral availability notice."],
        ["Creator Unpublishes", "If a creator deletes or unpublishes an episode, it is marked as \"Unavailable\" in your history. The player will automatically skip it if it appears in a queued Setlist."],
        ["Subscription Expiry", "If your subscription to a creator's Circle ends, their subscriber-only back catalog will lock. You will see the item in your history, but you must renew to resume playback."],
        ["Content Takedown", "If media is removed due to a rights claim or safety violation, it is immediately purged from playable surfaces and marked unavailable in your History."],
      ],
    },

    { type: "heading", text: "Frequently Asked Questions" },

    { type: "heading", text: "Does MusicOSY save my progress for short songs?", level: 3 },
    {
      type: "paragraph",
      text: "For standard 3-minute songs, MusicOSY simply remembers the last played track and the queue it belonged to, rather than a micro-timestamp. Timestamp resume is primarily utilized for long-form media like podcasts, live replays, DJ mixes, and audiobooks.",
    },

    { type: "heading", text: "Why did my podcast episode start over instead of resuming?", level: 3 },
    {
      type: "paragraph",
      text: "If you manually cleared your Library history, switched to a different member account, or if the podcaster uploaded a new version of the episode (replacing the canonical audio file), MusicOSY treats it as a new media object and will start from the beginning.",
    },

    { type: "heading", text: "Can I turn off the Continue listening rail on my Home screen?", level: 3 },
    {
      type: "paragraph",
      text: "Yes. If you prefer a cleaner Home feed, you can hide the Continue listening module by tapping the Edit Home or Customize button on your Home screen and toggling the visibility of the rail.",
    },
  ],
  related: [
    "/resources/help-center/using-musicosy/media-and-playback/listen-on-musicosy",
    "/resources/help-center/using-musicosy/media-and-playback/video-playing",
    "/resources/help-center/using-musicosy/media-and-playback/fullscreen",
    "/resources/help-center/using-musicosy/media-and-playback/on-demand-playback",
    "/resources/help-center/using-musicosy/media-and-playback/sound",
    "/resources/help-center/using-musicosy/media-and-playback/manage-your-playback-queue",
    "/resources/help-center/using-musicosy/media-and-playback/manage-your-up-next-queue",
    "/resources/help-center/using-musicosy/media-and-playback/music-playback-troubleshooting",
    "/resources/help-center/using-musicosy/media-and-playback/video-playback-troubleshooting",
  ],
};
