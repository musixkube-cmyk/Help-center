import type { Doc } from "./types";

/**
 * "Video playing" — Using Musicosy → Media & Playback doc (position 2).
 *
 * Second doc in the Media & Playback sub-section. Covers the video player:
 * supported formats (16:9 widescreen, 9:16 vertical), core player controls,
 * continuous watching and the shared Up Next queue (audio + video unified),
 * offline viewing (Take It With You), accessibility and viewing preferences,
 * and handling unavailable or restricted videos (territory / unpublish /
 * network loss / entitlement expiry).
 *
 * Content provided verbatim by the user; structured into blocks.
 */
export const videoPlayingDoc: Doc = {
  path: "/resources/help-center/using-musicosy/media-and-playback/video-playing",
  blocks: [
    {
      type: "paragraph",
      text: "MusicOSY supports a rich variety of video content. From official widescreen music videos and long-form podcast recordings to vertical social clips on The Stage and live session replays, the video player is designed to deliver a seamless visual and audio experience.",
    },
    {
      type: "paragraph",
      text: "Because MusicOSY unifies audio and video into a single continuous listening and watching environment, you can mix songs, music videos, and podcast episodes in the same Up Next queue without interrupting your session.",
    },

    { type: "heading", text: "Supported video formats" },
    {
      type: "paragraph",
      text: "The MusicOSY player automatically adapts to the format of the content you are watching.",
    },
    {
      type: "table",
      headers: ["Format", "Primary Use Case"],
      rows: [
        ["16:9 Widescreen", "Official music videos, live session replays, documentaries, interviews, and podcast video feeds."],
        ["9:16 Vertical", "Short-form social clips on The Stage, visualizers, creator updates, and mobile-first promotions."],
      ],
    },
    {
      type: "callout",
      variant: "note",
      text: "When browsing The Stage, vertical videos may autoplay on mute depending on your device settings and accessibility preferences. Tapping the video or selecting \"Play Full\" will open the immersive player and restore your audio.",
    },

    { type: "heading", text: "Core player controls" },
    {
      type: "paragraph",
      text: "The video player provides precise control over your viewing experience. You can access these controls by tapping the video screen or opening the full-screen player.",
    },
    {
      type: "table",
      headers: ["Control", "Function"],
      rows: [
        ["Play and Pause", "Start or stop the video playback."],
        ["Scrub Bar", "Drag the indicator to jump to a specific timestamp or chapter."],
        ["Playback Speed", "Adjust the viewing speed (e.g., 0.5x, 1.25x, 1.5x, 2x)."],
        ["Quality Selection", "Manually choose your streaming resolution or leave it on Auto."],
        ["Captions and Transcripts", "Turn on subtitles, select a language, or view the full text transcript."],
        ["Picture-in-Picture", "Pop the video out into a floating window so you can browse the app while watching."],
        ["Fullscreen", "Expand the video to fill your entire screen."],
        ["Keep", "Save the video to your personal Library for quick access later."],
        ["Love", "Express your appreciation and add the video to your public engagement metrics."],
        ["Add to Setlist", "Add the video to an ordered collection for continuous playback."],
      ],
    },

    { type: "heading", text: "Continuous watching and the Up Next queue" },
    {
      type: "paragraph",
      text: "On MusicOSY, audio and video share the same playback engine. When you press play on a Setlist or an album that contains both audio tracks and music videos, the player will seamlessly transition between them.",
    },

    { type: "heading", text: "Managing video in your queue", level: 3 },
    {
      type: "list",
      items: [
        { lead: "Adding to Up Next:", text: "You can add any eligible video to your immediate Up Next queue from the action menu." },
        { lead: "Autoplay:", text: "When your current video or Setlist ends, MusicOSY can automatically continue playing related video or audio recommendations based on your Autoplay settings." },
        { lead: "Background Audio:", text: "If you are watching a music video and lock your device or put the app in the background, MusicOSY will automatically downgrade the stream to audio-only mode. This preserves your listening session while saving battery and mobile data." },
      ],
    },
    {
      type: "callout",
      variant: "warning",
      text: "Background audio playback is subject to your current plan entitlements, the creator's distribution settings, and regional rights restrictions. Some premium or subscriber-only videos may require the screen to remain active and unlocked.",
    },

    { type: "heading", text: "Offline viewing (Take It With You)" },
    {
      type: "paragraph",
      text: "If you are traveling or expect to lose network coverage, you can download eligible videos to your device using the Take It With You feature.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Navigate to the music video, podcast episode, or live replay." },
        { text: "Tap the Take It With You (download) icon." },
        { text: "Select your preferred video quality (e.g., Standard or High Definition)." },
        { text: "The video will download to your device's local storage for offline viewing." },
      ],
    },
    {
      type: "callout",
      variant: "warning",
      text: "Downloaded videos are protected offline entitlements, not permanent file transfers. You must connect your device to the internet at least once every 30 days to verify your active subscriptions or purchases. If your entitlement expires or the creator removes the video from the platform, the offline file will be invalidated.",
    },

    { type: "heading", text: "Accessibility and viewing preferences" },
    {
      type: "paragraph",
      text: "MusicOSY is committed to making video content accessible to all members. The player supports several accessibility features that you can manage in your Settings.",
    },
    {
      type: "table",
      headers: ["Feature", "Description"],
      rows: [
        ["Closed Captions", "Display synchronized subtitles for dialogue and sound cues."],
        ["Transcripts", "View a searchable, text-based transcript of the video alongside the player."],
        ["Reduced Motion", "Disable autoplay previews on The Stage and minimize animated player transitions."],
        ["Chapters", "Navigate long-form videos and podcasts using visual chapter markers on the scrub bar."],
      ],
    },

    { type: "heading", text: "Handling unavailable or restricted videos" },
    {
      type: "paragraph",
      text: "Because video availability is governed by complex rights, licensing, and territory agreements, a video's status can change. The MusicOSY player is designed to handle these changes gracefully without breaking your queue.",
    },
    {
      type: "table",
      headers: ["Event", "What Happens in the Player"],
      rows: [
        ["Territory Restriction", "If you travel to a region where the video is not licensed, playback will stop and display a neutral availability notice."],
        ["Creator Unpublishes", "If the creator takes the video off the platform, it will be skipped in your Setlist and marked as unavailable in your Library."],
        ["Network Loss", "The player will buffer and attempt to reconnect. If you have downloaded the video via Take It With You, playback will seamlessly switch to your offline copy."],
        ["Entitlement Expiry", "If your subscription to a creator ends while watching a subscriber-only video, the player will pause and prompt you to renew your access."],
      ],
    },
  ],
  related: [
    "/resources/help-center/using-musicosy/media-and-playback/listen-on-musicosy",
    "/resources/help-center/using-musicosy/media-and-playback/fullscreen",
    "/resources/help-center/using-musicosy/media-and-playback/on-demand-playback",
    "/resources/help-center/using-musicosy/media-and-playback/sound",
    "/resources/help-center/using-musicosy/media-and-playback/manage-your-playback-queue",
    "/resources/help-center/using-musicosy/media-and-playback/manage-your-up-next-queue",
    "/resources/help-center/using-musicosy/media-and-playback/continue-listening",
    "/resources/help-center/using-musicosy/media-and-playback/music-playback-troubleshooting",
    "/resources/help-center/using-musicosy/media-and-playback/video-playback-troubleshooting",
  ],
};
