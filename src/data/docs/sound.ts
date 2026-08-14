import type { Doc } from "./types";

/**
 * "Sound" — Using Musicosy → Media & Playback doc (position 5).
 *
 * Fifth doc in the Media & Playback sub-section. Covers sound settings: audio
 * quality tiers (streaming + download), volume and audio normalization,
 * connected devices and audio routing, Data Saver and network controls,
 * background playback, and FAQs.
 *
 * Content provided verbatim by the user; structured into blocks.
 */
export const soundDoc: Doc = {
  path: "/resources/help-center/using-musicosy/media-and-playback/sound",
  blocks: [
    {
      type: "paragraph",
      text: "The Listen environment on MusicOSY is designed to deliver your music, podcasts, and live replays exactly as the creator intended. Whether you are listening through high-end studio monitors, wireless Bluetooth headphones, or your device's built-in speakers, MusicOSY provides precise controls over audio fidelity, volume leveling, and network usage.",
    },
    {
      type: "paragraph",
      text: "This guide explains how to configure your sound settings to get the best possible audio experience while managing your data and device preferences.",
    },

    { type: "heading", text: "Audio quality settings" },
    {
      type: "paragraph",
      text: "MusicOSY natively supports high-resolution audio and adaptive streaming. You can customize your audio quality for both streaming and offline listening (Take It With You) in your Playback Settings.",
    },

    { type: "heading", text: "Streaming quality", level: 3 },
    {
      type: "paragraph",
      text: "When you are connected to the internet, MusicOSY dynamically adjusts or manually adheres to your selected streaming tier.",
    },
    {
      type: "table",
      headers: ["Quality Tier", "Best Used For", "Details"],
      rows: [
        ["Data Saver", "Commuting on limited mobile data plans.", "Streams audio at a lower bitrate to significantly reduce data consumption."],
        ["Standard", "Everyday listening on Bluetooth headphones, car systems, or standard speakers.", "Provides a high-quality, balanced audio stream that sounds great on most consumer devices."],
        ["High Fidelity (Hi-Fi)", "Critical listening on wired headphones, DACs, or studio monitors.", "Streams lossless or high-resolution audio, preserving every detail of the original studio master."],
      ],
    },
    {
      type: "callout",
      variant: "note",
      text: "Streaming in High Fidelity consumes significantly more data. If you are not connected to Wi-Fi, ensure your mobile plan supports heavy data usage to avoid overage charges.",
    },

    { type: "heading", text: "Download quality (Take It With You)", level: 3 },
    {
      type: "paragraph",
      text: "When you download eligible Setlists, albums, or podcasts for offline listening, you can choose the quality of the saved files.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Navigate to your Settings > Playback and data use." },
        { text: "Select Download quality." },
        { text: "Choose your preferred tier." },
      ],
    },
    {
      type: "callout",
      variant: "warning",
      text: "Changing your download quality setting will not automatically re-download your existing offline media. To upgrade the quality of your saved music, you must remove the existing downloads and use the Take It With You feature again.",
    },

    { type: "heading", text: "Volume and audio normalization" },
    {
      type: "paragraph",
      text: "Music libraries often contain tracks with vastly different mastering loudness levels. Audio normalization ensures a consistent listening experience so you don't have to constantly adjust your volume slider between a quiet acoustic ballad and a loud electronic drop.",
    },

    { type: "heading", text: "How normalization works", level: 3 },
    {
      type: "paragraph",
      text: "When enabled, MusicOSY analyzes the loudness of every canonical track and applies a slight gain or reduction during playback in the Listen environment. This ensures that every song in your Up Next queue plays at a uniform, comfortable volume level without altering the dynamic range or artistic intent of the track.",
    },
    {
      type: "list",
      items: [
        { lead: "To enable/disable:", text: "Go to Settings > Playback and data use and toggle Audio normalization." },
      ],
    },

    { type: "heading", text: "Connected devices and audio routing" },
    {
      type: "paragraph",
      text: "MusicOSY seamlessly routes audio to your preferred output device. The player automatically detects connected hardware and optimizes the audio stream accordingly.",
    },
    {
      type: "table",
      headers: ["Connection Type", "Behavior"],
      rows: [
        ["Wired Headphones / DAC", "Automatically enables High Fidelity streaming (if selected) and bypasses standard Bluetooth compression for pure, lossless audio."],
        ["Bluetooth", "Streams at the highest quality supported by your device's Bluetooth codec."],
        ["Casting (Wi-Fi)", "Sends the audio directly to your smart speaker or receiver, allowing the external device to handle the high-resolution decoding."],
        ["Device Speakers", "Defaults to Standard quality to optimize battery life and processing."],
      ],
    },
    {
      type: "callout",
      variant: "note",
      text: "If you switch audio devices mid-session (e.g., unplugging headphones to switch to a Bluetooth speaker), MusicOSY will briefly pause and seamlessly resume playback on the new device without losing your place in the track or your queue.",
    },

    { type: "heading", text: "Data Saver and network controls" },
    {
      type: "paragraph",
      text: "If you want to strictly control how MusicOSY uses your network connection, you can configure data and Wi-Fi preferences in your settings.",
    },
    {
      type: "table",
      headers: ["Setting", "Effect"],
      rows: [
        ["Data Saver Mode", "Forces the player to use the lowest viable audio bitrate, disables video playback in favor of audio-only, and stops artwork from loading over cellular networks."],
        ["Wi-Fi Only Streaming", "Prevents MusicOSY from streaming any media over cellular data. Playback will pause if you lose your Wi-Fi connection."],
        ["Wi-Fi Only Downloads", "Ensures that the Take It With You feature will only download media when connected to a Wi-Fi network, protecting your mobile data cap."],
      ],
    },

    { type: "heading", text: "Background playback" },
    {
      type: "paragraph",
      text: "MusicOSY supports continuous background audio, allowing you to listen to your Setlists and podcasts while using other apps on your device or when your screen is locked.",
    },
    {
      type: "list",
      items: [
        { lead: "Audio-Only Backgrounding:", text: "If you are watching a music video or a podcast with a video feed, locking your screen or minimizing the app will automatically downgrade the stream to audio-only mode. This preserves your listening session while saving battery and data." },
        { lead: "Entitlement Rules:", text: "Background playback is subject to your current plan, the creator's distribution settings, and regional rights. Some premium, subscriber-only, or rented videos may require the screen to remain active and unlocked according to the creator's access rules." },
      ],
    },

    { type: "heading", text: "Frequently Asked Questions" },

    { type: "heading", text: "Why does my audio quality drop when I'm on the train?", level: 3 },
    {
      type: "paragraph",
      text: "If you have Auto-Adjust Quality enabled in your settings, MusicOSY will temporarily lower the streaming bitrate when it detects a weak or unstable network connection to prevent buffering. Once your connection stabilizes, the audio quality will automatically restore to your preferred tier.",
    },

    { type: "heading", text: "Does Audio Normalization affect the sound quality?", level: 3 },
    {
      type: "paragraph",
      text: "No. Normalization simply adjusts the overall volume level of the track. It does not compress the audio, alter the EQ, or change the dynamic range of the creator's master recording.",
    },

    { type: "heading", text: "Can I use the MusicOSY Equalizer (EQ)?", level: 3 },
    {
      type: "paragraph",
      text: "MusicOSY relies on your device's native operating system or your connected hardware's EQ settings to ensure the purest possible audio signal from our servers to your ears. For advanced DSP effects and mastering profiles, creators use the Production Toolkit inside MusicOSY Studio before publishing the track.",
    },
  ],
  related: [
    "/resources/help-center/using-musicosy/media-and-playback/listen-on-musicosy",
    "/resources/help-center/using-musicosy/media-and-playback/video-playing",
    "/resources/help-center/using-musicosy/media-and-playback/fullscreen",
    "/resources/help-center/using-musicosy/media-and-playback/on-demand-playback",
    "/resources/help-center/using-musicosy/media-and-playback/manage-your-playback-queue",
    "/resources/help-center/using-musicosy/media-and-playback/manage-your-up-next-queue",
    "/resources/help-center/using-musicosy/media-and-playback/continue-listening",
    "/resources/help-center/using-musicosy/media-and-playback/music-playback-troubleshooting",
    "/resources/help-center/using-musicosy/media-and-playback/video-playback-troubleshooting",
  ],
};
