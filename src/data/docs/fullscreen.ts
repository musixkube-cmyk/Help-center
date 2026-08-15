import type { Doc } from "./types";

/**
 * "Fullscreen" — Using Musicosy → Media & Playback doc (position 3).
 *
 * Third doc in the Media & Playback sub-section. Covers fullscreen mode: how to
 * enter/exit, the available controls, behavior across the two video formats
 * (16:9 widescreen and 9:16 vertical), Picture-in-Picture vs fullscreen,
 * captions/transcripts/lyrics, background playback transitions, device
 * behavior (orientation, casting, split-screen), access controls, the Up Next
 * queue, live sessions, troubleshooting, and FAQs.
 *
 * Content provided verbatim by the user; structured into blocks.
 */
export const fullscreenDoc: Doc = {
  path: "/resources/help-center/using-musicosy/media-and-playback/fullscreen",
  blocks: [
    { type: "heading", text: "Overview" },
    {
      type: "paragraph",
      text: "Fullscreen mode expands your video content to fill the entire screen of your device, removing all other interface elements so you can focus entirely on the visual experience. On MusicOSY, fullscreen is available for eligible video content in the Listen environment, including music videos, podcast video feeds, live session replays, documentaries, interviews, and full performances.",
    },
    {
      type: "paragraph",
      text: "Fullscreen mode preserves all playback controls, access checks, and entitlement validation. Entering fullscreen does not change what you are watching, alter your queue, or bypass any content restrictions. It is purely a presentation change that gives you an immersive viewing experience.",
    },

    { type: "heading", text: "Entering and exiting fullscreen" },

    { type: "heading", text: "How to enter fullscreen", level: 3 },
    {
      type: "table",
      headers: ["Method", "Action"],
      rows: [
        ["Player button", "Tap the fullscreen icon (expanding arrows) on the video player controls."],
        ["Device rotation", "Rotate your phone or tablet to landscape orientation while a video is playing."],
        ["Double-tap (mobile)", "Double-tap the video area on supported mobile devices."],
        ["Keyboard shortcut (desktop)", "Press the designated fullscreen key while the player has focus."],
        ["Cast device", "When casting to a television or external display, the receiving screen automatically enters fullscreen."],
      ],
    },

    { type: "heading", text: "How to exit fullscreen", level: 3 },
    {
      type: "table",
      headers: ["Method", "Action"],
      rows: [
        ["Player button", "Tap the exit-fullscreen icon (contracting arrows) on the video player controls."],
        ["Device rotation", "Rotate your phone or tablet back to portrait orientation."],
        ["Swipe down (mobile)", "Swipe down from the top of the screen on supported mobile devices."],
        ["Keyboard shortcut (desktop)", "Press the Escape key or the designated fullscreen key."],
        ["Navigate away", "Open another section of MusicOSY. The player returns to its compact or standard view."],
      ],
    },
    {
      type: "callout",
      variant: "note",
      text: "Entering fullscreen does not start a new playback session or alter your Up Next queue. Exiting fullscreen does not stop playback. Your media continues playing seamlessly in both directions.",
    },

    { type: "heading", text: "Fullscreen controls" },
    {
      type: "paragraph",
      text: "When you enter fullscreen, the playback controls temporarily overlay the video and then fade from view to maximize your viewing area. You can bring them back at any time.",
    },

    { type: "heading", text: "Accessing controls in fullscreen", level: 3 },
    {
      type: "paragraph",
      text: "Tap anywhere on the video surface to reveal the control overlay. The controls will remain visible for a short period before fading again. On desktop, moving your cursor over the video area will also reveal controls.",
    },

    { type: "heading", text: "Available controls in fullscreen", level: 3 },
    {
      type: "table",
      headers: ["Control", "Function"],
      rows: [
        ["Play / Pause", "Start or stop playback."],
        ["Next / Previous", "Skip to the next or previous item in your Up Next queue."],
        ["Seek bar", "Drag to jump to a specific timestamp."],
        ["Volume", "Adjust audio level or mute."],
        ["Captions", "Toggle subtitles on or off, select language."],
        ["Transcript", "Open the full text transcript panel where available."],
        ["Playback speed", "Change the viewing speed (0.5x, 1x, 1.25x, 1.5x, 2x)."],
        ["Quality selection", "Manually choose streaming resolution or use Auto."],
        ["Picture-in-Picture", "Shrink the video into a floating window while you browse."],
        ["Cast", "Send the video to a connected television or speaker."],
        ["Keep", "Save the current video to your Library."],
        ["Add to Setlist", "Add the current video to an existing or new Setlist."],
        ["Add to Up Next", "Queue the current video for later playback."],
        ["Pass the Mic", "Share the video via link, Backstage message, or external app."],
        ["Report", "Flag the content for safety, rights, or policy concerns."],
        ["Exit fullscreen", "Return to the standard player view."],
      ],
    },
    {
      type: "callout",
      variant: "warning",
      text: "All controls available in the standard player remain available in fullscreen. Fullscreen does not remove or restrict any interaction. You can save, share, queue, report, and manage your media without exiting fullscreen.",
    },

    { type: "heading", text: "Fullscreen and video formats" },
    {
      type: "paragraph",
      text: "MusicOSY supports two primary video formats, and fullscreen behaves differently depending on the format and your device.",
    },

    { type: "heading", text: "16:9 widescreen content", level: 3 },
    {
      type: "paragraph",
      text: "This format includes official music videos, podcast video feeds, live session replays, documentaries, interviews, and full performances.",
    },
    {
      type: "table",
      headers: ["Device", "Fullscreen Behavior"],
      rows: [
        ["Desktop / Laptop", "Video expands to fill the browser window or application frame. Controls overlay the bottom of the video."],
        ["Tablet (landscape)", "Video fills the entire screen. Controls overlay and auto-hide."],
        ["Phone (landscape)", "Video fills the entire screen. Controls overlay and auto-hide. System status bar is hidden."],
        ["Television (via Cast)", "Video fills the television screen. Controls appear on the casting device (phone or tablet)."],
      ],
    },

    { type: "heading", text: "9:16 vertical content", level: 3 },
    {
      type: "paragraph",
      text: "This format includes short-form social clips from The Stage, visualizers, and creator updates.",
    },
    {
      type: "table",
      headers: ["Device", "Fullscreen Behavior"],
      rows: [
        ["Phone (portrait)", "Vertical video already fills most of the screen in standard view. Fullscreen removes remaining interface elements for a true edge-to-edge experience."],
        ["Phone (landscape)", "Vertical video is displayed centered with letterboxing (dark bars on the sides). Controls overlay the video."],
        ["Tablet / Desktop", "Vertical video is displayed centered with letterboxing. Controls overlay the video."],
        ["Television (via Cast)", "Vertical video is centered on the television with surrounding dark space."],
      ],
    },
    {
      type: "callout",
      variant: "note",
      text: "When watching 9:16 vertical content in fullscreen on a landscape device, the video maintains its original aspect ratio. MusicOSY does not stretch, crop, or distort vertical content to fill a horizontal screen.",
    },

    { type: "heading", text: "Fullscreen and Picture-in-Picture" },
    {
      type: "paragraph",
      text: "Fullscreen and Picture-in-Picture (PiP) are two distinct viewing modes. You can switch between them depending on whether you want an immersive experience or want to continue browsing MusicOSY while watching.",
    },
    {
      type: "table",
      headers: ["Feature", "Fullscreen", "Picture-in-Picture"],
      rows: [
        ["Screen coverage", "Video fills the entire screen.", "Video appears in a small floating window."],
        ["Other app access", "Hidden until you exit fullscreen.", "You can browse MusicOSY or use other apps."],
        ["Controls", "Full control overlay available.", "Limited controls (play, pause, close, expand)."],
        ["Best used when", "You want to focus entirely on the video.", "You want to watch while browsing, reading, or multitasking."],
        ["Queue interaction", "Full Up Next queue controls available.", "Limited queue interaction."],
      ],
    },

    { type: "heading", text: "Switching between modes", level: 3 },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "While in fullscreen, tap the Picture-in-Picture icon in the control overlay. The video shrinks into a floating window and you return to the standard MusicOSY interface." },
        { text: "While in Picture-in-Picture, tap the Expand icon on the floating window. The video returns to fullscreen." },
      ],
    },
    {
      type: "callout",
      variant: "warning",
      text: "Switching between fullscreen and Picture-in-Picture does not restart the video, change your Up Next queue, or trigger a new playback session. Your viewing position is preserved.",
    },

    { type: "heading", text: "Fullscreen and captions, transcripts, and lyrics" },
    {
      type: "paragraph",
      text: "Accessibility features remain fully functional in fullscreen mode.",
    },

    { type: "heading", text: "Captions and subtitles", level: 3 },
    {
      type: "table",
      headers: ["Action", "How"],
      rows: [
        ["Enable captions", "Tap the Captions icon in the fullscreen control overlay."],
        ["Select language", "Tap the Captions icon, then choose your preferred language from the list."],
        ["Disable captions", "Tap the Captions icon again to turn them off."],
        ["Adjust caption size", "Access caption settings through the player settings menu within fullscreen."],
      ],
    },

    { type: "heading", text: "Transcripts", level: 3 },
    {
      type: "paragraph",
      text: "Where a transcript is available for a podcast episode or video, you can open the transcript panel in fullscreen. The transcript appears as a side panel or overlay, and you can tap any line to jump to that timestamp in the video.",
    },

    { type: "heading", text: "Lyrics", level: 3 },
    {
      type: "paragraph",
      text: "For music videos linked to a canonical track with licensed lyrics, synchronized lyrics may be available in fullscreen. Tap the Lyrics icon to display them. Lyrics scroll in real-time with the music, and you can tap any line to seek to that moment.",
    },
    {
      type: "callout",
      variant: "note",
      text: "Captions, transcripts, and lyrics are subject to rights, licensing, and availability. If a creator has not provided captions or if lyric rights do not permit display, those features will not appear in fullscreen. Fullscreen does not create or unlock accessibility content that is not otherwise available.",
    },

    { type: "heading", text: "Fullscreen and background playback" },
    {
      type: "paragraph",
      text: "When you exit fullscreen or navigate away from the video, MusicOSY handles the transition based on your entitlement, the creator's settings, and the content type.",
    },
    {
      type: "table",
      headers: ["Scenario", "Behavior"],
      rows: [
        ["You exit fullscreen but stay in the Listen environment", "Video continues playing in the standard player view."],
        ["You navigate to another section (Library, Search, Discover)", "The persistent player continues eligible playback. Video may transition to audio-only depending on your plan and the creator's settings."],
        ["You lock your device or switch apps", "Audio continues in the background if your plan and the content's rights permit background playback. Video pauses."],
        ["You enter Studio", "Playback continues unless Studio recording mode requires exclusive device audio focus."],
        ["You sign out", "Your personal playback session ends. The queue and history are cleared."],
      ],
    },
    {
      type: "callout",
      variant: "warning",
      text: "Background audio playback for music videos is subject to your current plan entitlement, the creator's distribution settings, content rights, and device operating-system policies. Some premium or subscriber-only videos may require the screen to remain active and unlocked. If your video stops when you exit fullscreen, check your plan and the content's access rules.",
    },

    { type: "heading", text: "Fullscreen and device behavior" },

    { type: "heading", text: "Orientation and auto-rotation", level: 3 },
    {
      type: "table",
      headers: ["Device Setting", "Fullscreen Behavior"],
      rows: [
        ["Auto-rotate enabled", "Rotating your device to landscape automatically enters fullscreen for 16:9 content. Rotating back to portrait exits fullscreen."],
        ["Auto-rotate disabled", "You must manually enter and exit fullscreen using the player button or gesture."],
        ["Desktop / Laptop", "Fullscreen fills the browser or application window. It does not require a specific screen orientation."],
      ],
    },

    { type: "heading", text: "Multiple displays and casting", level: 3 },
    {
      type: "paragraph",
      text: "When you cast a video to a television or external display:",
    },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "The receiving screen enters fullscreen automatically." },
        { text: "Your phone, tablet, or computer becomes the remote control." },
        { text: "Playback controls, queue management, and volume adjustments happen on your casting device." },
        { text: "Access and entitlement checks are re-evaluated on the target session." },
      ],
    },
    {
      type: "callout",
      variant: "note",
      text: "If your casting session is interrupted or the receiving device disconnects, MusicOSY will attempt to resume playback on your local device from the same position. If the content requires an active network connection and you are offline, playback will pause until connectivity is restored or you switch to a downloaded copy via Take It With You.",
    },

    { type: "heading", text: "Split-screen and multitasking", level: 3 },
    {
      type: "paragraph",
      text: "On devices that support split-screen or multitasking:",
    },
    {
      type: "list",
      items: [
        { text: "Entering fullscreen in one window fills that window, not the entire physical screen." },
        { text: "The video continues playing in your allocated window space." },
        { text: "Controls remain accessible within the window." },
        { text: "Exiting fullscreen returns the player to its standard in-window view." },
      ],
    },

    { type: "heading", text: "Fullscreen and access controls" },
    {
      type: "paragraph",
      text: "Fullscreen is a presentation mode only. It does not alter, bypass, or weaken any access, entitlement, safety, or rights rules.",
    },
    {
      type: "table",
      headers: ["Rule", "Behavior in Fullscreen"],
      rows: [
        ["Territory restrictions", "If a video becomes unavailable in your region while you are watching in fullscreen, playback stops or skips according to rights rules. A neutral availability notice appears."],
        ["Subscription expiry", "If your subscription expires while watching subscriber-only content in fullscreen, playback stops and an access offer is presented."],
        ["Content removal", "If a creator unpublishes a video while you are watching in fullscreen, playback stops and the item is marked unavailable."],
        ["Age restrictions", "Age-gated content continues to enforce age verification in fullscreen."],
        ["Block and mute", "Content from blocked or muted creators does not become accessible simply because you entered fullscreen."],
        ["Ad-free entitlement", "If you have an active ad-free plan, playback ads do not appear in fullscreen. Sponsorship disclosures embedded in the content remain visible."],
      ],
    },
    {
      type: "callout",
      variant: "warning",
      text: "A public share link or fullscreen embed does not grant access to restricted content. Every fullscreen session re-evaluates your current entitlement, territory, age, and relationship status at the time of access.",
    },

    { type: "heading", text: "Fullscreen and the Up Next queue" },
    {
      type: "paragraph",
      text: "Fullscreen mode gives you full access to your Up Next queue. You can view, reorder, add, and remove items without exiting fullscreen.",
    },

    { type: "heading", text: "Managing your queue in fullscreen", level: 3 },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Tap the video to reveal controls." },
        { text: "Tap the Queue icon to open the Up Next panel." },
        {
          text: "From the panel, you can:",
          children: [
            { text: "View the current and upcoming items." },
            { text: "Remove items by tapping the remove icon." },
            { text: "Reorder items by dragging them to a new position." },
            { text: "Add items from your Library or Search." },
            { text: "Clear the entire queue." },
          ],
        },
      ],
    },
    {
      type: "callout",
      variant: "note",
      text: "Editing your Up Next queue in fullscreen does not modify any saved Setlist. Queue changes apply only to your current listening or watching session. To permanently change a Setlist, exit fullscreen and edit the Setlist directly from your Library.",
    },

    { type: "heading", text: "Fullscreen and live sessions" },
    {
      type: "paragraph",
      text: "When watching a live session or live replay in fullscreen:",
    },
    {
      type: "table",
      headers: ["Feature", "Behavior"],
      rows: [
        ["Live chat (Crowd Chat)", "Chat appears as a collapsible overlay on the side of the screen. You can show or hide it."],
        ["Live reactions", "Reactions appear as overlays without interrupting the video."],
        ["Host announcements", "Pinned announcements appear at the top of the fullscreen view."],
        ["Seek / Scrub", "Disabled during active live broadcasts. Available during live replays."],
        ["Quality selection", "Available. You can manually select a resolution or use Auto."],
        ["Exit fullscreen", "Returns you to the standard live viewer interface. The live session continues."],
      ],
    },
    {
      type: "callout",
      variant: "warning",
      text: "During an active live broadcast, you cannot seek backward or forward. The scrub bar is disabled. Once the live session ends and a replay becomes available, standard seek controls are restored for the replay.",
    },

    { type: "heading", text: "Troubleshooting fullscreen" },
    {
      type: "table",
      headers: ["Issue", "Possible Cause", "Solution"],
      rows: [
        ["Fullscreen button is missing", "The content is audio-only or does not support video playback.", "Confirm the item has a video component. Audio tracks do not have a fullscreen option."],
        ["Video does not fill the screen", "You are watching 9:16 vertical content on a landscape device.", "This is expected. Vertical content maintains its aspect ratio and displays with letterboxing on horizontal screens."],
        ["Controls do not appear when tapping", "Controls may be set to auto-hide too quickly, or a device setting is interfering.", "Tap the center of the video. Check your device's touch sensitivity and accessibility settings."],
        ["Fullscreen exits unexpectedly", "Another app or system notification is taking focus.", "Close background apps or enable Do Not Disturb mode on your device."],
        ["Video freezes in fullscreen", "Network interruption or buffering issue.", "Check your connection. Try lowering the video quality in settings. If you have downloaded the content, switch to your offline copy."],
        ["Captions do not appear in fullscreen", "Captions may not be available for this content, or the language you selected is not supported.", "Check the Captions menu for available languages. If none appear, the creator has not provided captions for this video."],
        ["Fullscreen is blocked on a shared or managed device", "Device-level restrictions may prevent fullscreen mode.", "Check your device's screen time, parental controls, or managed-device policies."],
        ["Casting to TV does not enter fullscreen", "The receiving device may not support fullscreen casting.", "Ensure your casting device and TV are on the same network and running compatible software."],
      ],
    },

    { type: "heading", text: "Frequently Asked Questions" },

    { type: "heading", text: "Does entering fullscreen change my playback quality?", level: 3 },
    {
      type: "paragraph",
      text: "No. Fullscreen is a display mode only. Your streaming quality remains whatever you have selected in settings (Auto, Standard, or High Definition). If you want to change quality, use the Quality Selection control in the fullscreen overlay.",
    },

    { type: "heading", text: "Can I use fullscreen while on a video call or using another app?", level: 3 },
    {
      type: "paragraph",
      text: "On devices that support split-screen or Picture-in-Picture, you can watch MusicOSY video in a reduced window while using another app. True fullscreen requires the video to occupy the full screen, which means other apps are hidden.",
    },

    { type: "heading", text: "Does fullscreen use more data or battery?", level: 3 },
    {
      type: "paragraph",
      text: "Fullscreen itself does not increase data usage or battery consumption. However, if you manually increase the video quality while in fullscreen, that higher quality will use more data. Battery usage depends on your device's screen brightness, resolution, and network conditions.",
    },

    { type: "heading", text: "Can I take a screenshot or recording in fullscreen?", level: 3 },
    {
      type: "paragraph",
      text: "MusicOSY respects the content rights and creator settings governing each video. Some content may have screenshot or screen-recording protections enabled by the creator or rights holder. If a screenshot or recording is blocked, you will see a notification explaining that this content does not permit capture.",
    },

    { type: "heading", text: "Does fullscreen work with downloaded videos?", level: 3 },
    {
      type: "paragraph",
      text: "Yes. If you have downloaded a video using Take It With You, you can watch it in fullscreen while offline. All controls, captions, and transcripts that were available at download time remain accessible.",
    },

    { type: "heading", text: "Why does my video show black bars in fullscreen?", level: 3 },
    {
      type: "paragraph",
      text: "Black bars (letterboxing or pillarboxing) appear when the video's aspect ratio does not match your screen's aspect ratio. For example, a 16:9 video on a 21:9 ultrawide monitor will show thin bars on the sides. A 9:16 vertical video on a landscape screen will show bars on both sides. MusicOSY preserves the original aspect ratio and does not crop or stretch content.",
    },
  ],
  related: [
    "/resources/help-center/using-musicosy/media-and-playback/listen-on-musicosy",
    "/resources/help-center/using-musicosy/media-and-playback/video-playing",
    "/resources/help-center/using-musicosy/media-and-playback/on-demand-playback",
    "/resources/help-center/using-musicosy/media-and-playback/sound",
    "/resources/help-center/using-musicosy/media-and-playback/manage-your-playback-queue",
    "/resources/help-center/using-musicosy/media-and-playback/manage-your-up-next-queue",
    "/resources/help-center/using-musicosy/media-and-playback/continue-listening",
    "/resources/help-center/using-musicosy/media-and-playback/music-playback-troubleshooting",
    "/resources/help-center/using-musicosy/media-and-playback/video-playback-troubleshooting",
  ],
};
