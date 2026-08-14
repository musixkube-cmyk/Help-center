import type { Doc } from "./types";

/**
 * "Listen on MusicOSY" — Using Music OSY → Media & Playback doc (position 1).
 *
 * First doc in the Media & Playback sub-section. Covers the Listen environment
 * (dedicated playback hub): player interface (Now-Playing Bar, Full-Screen,
 * Queue View), core playback controls, managing the Up Next queue (queue
 * ownership), audio and video settings (playback modes + audio quality),
 * Autoplay and continuous discovery, synchronized lyrics, and offline
 * listening (Take It With You).
 *
 * Content provided verbatim by the user; structured into blocks.
 */
export const listenOnMusicosyDoc: Doc = {
  path: "/resources/help-center/using-musicosy/media-and-playback/listen-on-musicosy",
  blocks: [
    {
      type: "paragraph",
      text: "The Listen environment is your dedicated playback hub on MusicOSY. Whether you are streaming a high-fidelity album, watching a music video, or catching up on a podcast, the Listen player is designed for uninterrupted, continuous media consumption.",
    },
    {
      type: "paragraph",
      text: "While The Stage is built for social discovery and interaction, Listen is strictly focused on the audio and visual experience. This guide explains how to navigate the player, manage your playback queue, and customize your listening settings.",
    },

    { type: "heading", text: "The Player Interface" },
    {
      type: "paragraph",
      text: "The MusicOSY player adapts to how you are using the platform. You can control your media from a compact bar while you browse, or expand it to a full-screen immersive experience.",
    },
    {
      type: "table",
      headers: ["Player View", "Description", "Best Used When"],
      rows: [
        ["Now-Playing Bar", "A compact strip at the bottom of the screen showing basic controls and track info.", "Browsing Discover, searching, or managing your Library while music plays in the background."],
        ["Full-Screen Player", "An immersive view featuring full artwork, synchronized lyrics, and detailed media metadata.", "Actively listening, reading lyrics, or watching music videos and live sessions."],
        ["Queue View", "A side panel or overlay showing your upcoming tracks and playback history.", "Curating your immediate listening session or checking what song is coming up next."],
      ],
    },
    {
      type: "callout",
      variant: "note",
      text: "If you are playing a music video or a live session replay, the Full-Screen Player will automatically prioritize the video feed. You can toggle back to audio-only mode to save data or hide the video while the app is in the background.",
    },

    { type: "heading", text: "Core Playback Controls" },
    {
      type: "paragraph",
      text: "The Listen environment provides precise control over your media.",
    },
    {
      type: "table",
      headers: ["Control", "Function"],
      rows: [
        ["Play / Pause", "Starts or stops the current media."],
        ["Next / Previous", "Skips to the next track or restarts the current track. Tapping Previous twice will skip to the previous track in the queue."],
        ["Scrub Bar", "Drag the indicator to jump to a specific timestamp in a song, podcast, or video."],
        ["Shuffle", "Randomizes the playback order of your current Setlist or album."],
        ["Repeat", "Cycles through three states: Repeat Off, Repeat All (loops the entire queue), and Repeat One (loops the current track indefinitely)."],
      ],
    },

    { type: "heading", text: "Managing the Up Next Queue" },
    {
      type: "paragraph",
      text: "Your Up Next queue is the temporary list of media scheduled to play immediately after your current track. Understanding how the queue works is essential for a seamless listening experience.",
    },

    { type: "heading", text: "Queue Ownership", level: 3 },
    {
      type: "paragraph",
      text: "When you press play on a Setlist or an album, that collection takes ownership of your queue. The player will follow the sequence of that collection until it ends. If you manually intervene by playing a completely different song from Search, you break the queue ownership and start a new session.",
    },
    {
      type: "table",
      headers: ["Your Action", "Effect on the Queue"],
      rows: [
        ["Press Play on a Setlist", "Loads the entire Setlist into the queue in order."],
        ["Tap \"Add to Up Next\"", "Places the selected track at the very end of your current queue."],
        ["Tap \"Play Next\"", "Inserts the selected track immediately after the currently playing song."],
        ["Tap Play on a new song from Search", "Clears the current queue entirely and starts a new queue with the new song."],
      ],
    },
    {
      type: "callout",
      variant: "warning",
      text: "Editing your Up Next queue does not change your saved Setlist. Queue changes only apply to your current listening session. If you want to permanently change the order of your tracks, you must edit the Setlist directly.",
    },

    { type: "heading", text: "Audio and Video Settings" },
    {
      type: "paragraph",
      text: "MusicOSY natively supports both audio and video playback within the same player. You can customize how media is delivered to your device based on your environment and data preferences.",
    },

    { type: "heading", text: "Playback Modes", level: 3 },
    {
      type: "table",
      headers: ["Mode", "Description"],
      rows: [
        ["Audio Only", "Streams only the audio track. This is ideal for listening to music videos while your phone is locked, in your pocket, or when you want to conserve mobile data."],
        ["Video Enabled", "Streams both audio and video. The player will display the music video, visualizer, or podcast video feed when available."],
        ["Auto-Play Video", "The player will automatically switch to video mode when the app is open and active, but will seamlessly downgrade to audio-only when you minimize the app or lock your screen."],
      ],
    },

    { type: "heading", text: "Audio Quality", level: 3 },
    {
      type: "paragraph",
      text: "You can adjust your streaming and download quality in your account settings.",
    },
    {
      type: "table",
      headers: ["Quality Tier", "Best For"],
      rows: [
        ["Data Saver", "Streaming on limited mobile data plans."],
        ["Standard", "Everyday listening on standard Bluetooth headphones or device speakers."],
        ["High Fidelity", "Critical listening on wired headphones, studio monitors, or high-end Bluetooth codecs."],
      ],
    },
    {
      type: "callout",
      variant: "warning",
      text: "Streaming in High Fidelity consumes significantly more data. If you are not connected to Wi-Fi, ensure your mobile plan supports heavy data usage to avoid overage charges.",
    },

    { type: "heading", text: "Autoplay and Continuous Discovery" },
    {
      type: "paragraph",
      text: "When your Setlist, album, or queue reaches the end, MusicOSY does not just stop playing. If you have Autoplay enabled in your settings, the Listen environment will seamlessly transition into a personalized radio station.",
    },
    {
      type: "list",
      items: [
        { lead: "How it works:", text: "The algorithm analyzes the genres, moods, and creators of the media you just finished and generates an infinite queue of similar tracks." },
        { lead: "Learning your taste:", text: "If you skip an Autoplay track, the platform learns your boundary for that specific genre. If you Keep or Love an Autoplay track, it influences your future recommendations." },
      ],
    },
    {
      type: "callout",
      variant: "note",
      text: "You can disable Autoplay in your Playback Settings if you prefer silence when your chosen Setlist or album finishes.",
    },

    { type: "heading", text: "Lyrics and synchronized media" },
    {
      type: "paragraph",
      text: "For eligible tracks, MusicOSY provides time-synced lyrics.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Open the Full-Screen Player." },
        { text: "Tap the Lyrics icon." },
        { text: "The lyrics will scroll in real-time with the music." },
        { text: "Tap any line of the lyrics to instantly scrub the track to that exact timestamp." },
      ],
    },
    {
      type: "paragraph",
      text: "If a creator has uploaded synchronized vocal stems or behind-the-scenes studio commentary, it will also appear in this view.",
    },

    { type: "heading", text: "Offline Listening (Take It With You)" },
    {
      type: "paragraph",
      text: "If you are traveling or entering an area with poor network coverage, you can download your media for offline playback.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Navigate to any eligible Setlist, album, or podcast show." },
        { text: "Tap the Take It With You (download) icon." },
        { text: "The media will download to your device's local storage." },
      ],
    },
    {
      type: "callout",
      variant: "warning",
      text: "Downloaded media requires periodic network validation. You must connect your device to the internet at least once every 30 days to verify your active entitlements and maintain access to your offline Library.",
    },
  ],
  related: [
    "/resources/help-center/using-musicosy/collections-and-library/collections",
    "/resources/help-center/using-musicosy/collections-and-library/playlists",
    "/resources/help-center/using-musicosy/collections-and-library/add-remove-and-reorder-playlist-items",
    "/resources/help-center/using-musicosy/collections-and-library/your-library",
    "/resources/help-center/using-musicosy/collections-and-library/keep-and-organize-your-library",
    "/resources/help-center/using-musicosy/collections-and-library/save-music-to-your-library",
  ],
};
