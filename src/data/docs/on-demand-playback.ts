import type { Doc } from "./types";

/**
 * "On-demand playback" — Using Musicosy → Media & Playback doc (position 4).
 *
 * Fourth doc in the Media & Playback sub-section. Covers on-demand playback:
 * how to start it from anywhere on the platform, access and entitlement models,
 * the distinction between on-demand / Radio / Autoplay, offline on-demand
 * (Take It With You), and handling unavailable or restricted media.
 *
 * Content provided verbatim by the user; structured into blocks.
 */
export const onDemandPlaybackDoc: Doc = {
  path: "/resources/help-center/using-musicosy/media-and-playback/on-demand-playback",
  blocks: [
    {
      type: "paragraph",
      text: "On-demand playback gives you complete control over your listening and watching experience. Instead of relying on algorithmic radio or shuffle modes, on-demand playback allows you to select the exact song, album, podcast episode, or music video you want to experience right now.",
    },
    {
      type: "paragraph",
      text: "On MusicOSY, on-demand playback takes place within the Listen environment. Whether you are picking a specific track from a creator's profile, starting an album from your Library, or tapping \"Play Full\" on a video in The Stage, you are initiating an on-demand session.",
    },
    {
      type: "callout",
      variant: "note",
      text: "On-demand playback requires an active entitlement. Depending on the creator's settings and your current plan, some on-demand content may require a purchase, a creator subscription, or an ad-free platform plan.",
    },

    { type: "heading", text: "How to start on-demand playback" },
    {
      type: "paragraph",
      text: "You can trigger an on-demand session from almost anywhere on the platform. When you make a specific selection, the player loads that exact media and builds your Up Next queue based on your choice.",
    },
    {
      type: "table",
      headers: ["Your Action", "What Happens in the Player"],
      rows: [
        ["Tap a single track", "Starts the track immediately and adds the rest of the album or release to your Up Next queue."],
        ["Play an album or release", "Starts the first track and queues the entire release in its canonical order."],
        ["Open a Setlist and tap Play All", "Starts the first item and queues the entire Setlist sequentially."],
        ["Select a podcast episode", "Begins the episode from your last saved position or the very beginning."],
        ["Tap a music video", "Opens the video player and starts the visual experience in standard or fullscreen mode."],
        ["Tap \"Play Full\" on The Stage", "Transitions a short social preview into a full, continuous on-demand Listen session."],
      ],
    },
    {
      type: "callout",
      variant: "warning",
      text: "When you start an on-demand session, that specific album, Setlist, or podcast show takes ownership of your Up Next queue. If you manually intervene by searching for and playing a completely different song, you break the queue ownership and start a brand new on-demand session.",
    },

    { type: "heading", text: "Access and entitlements" },
    {
      type: "paragraph",
      text: "Not all content on MusicOSY is available for on-demand playback for every user. Creators choose how their music and media are monetized and shared. The player evaluates your current entitlements before starting the media.",
    },
    {
      type: "table",
      headers: ["Access Model", "On-Demand Playback Rules"],
      rows: [
        ["Free / Ad-Supported", "You can play eligible public tracks on-demand. Your session may include audio or video ads before or during playback."],
        ["Purchased / Unlocked", "You have full, permanent on-demand access to the specific song, album, or video you bought. Your playback will be completely ad-free."],
        ["Subscriber (Join the Circle)", "You have full on-demand access to a creator's Backstage releases and exclusive content while your subscription is active."],
        ["Rented / Borrowed", "You have temporary on-demand access for a defined window of time. Once the rental period expires, the media will lock."],
        ["Preview Only", "You can only play a short, creator-defined preview. To hear the full track on-demand, you must unlock or purchase it."],
      ],
    },
    {
      type: "callout",
      variant: "note",
      text: "If you try to play a subscriber-only track on-demand without an active subscription, the player will pause and show the purchase or subscription gate instead of starting the media.",
    },

    { type: "heading", text: "On-demand vs. Radio and Autoplay" },
    {
      type: "paragraph",
      text: "It is important to understand the difference between choosing your own media and letting the platform choose for you.",
    },
    {
      type: "list",
      items: [
        { lead: "On-Demand:", text: "You explicitly selected the song, album, or Setlist. The player will follow your exact sequence." },
        { lead: "Radio / Stations:", text: "You selected a starting point (like a single song or a genre), but the platform generates an infinite, algorithmic queue of similar media." },
        { lead: "Autoplay:", text: "This is the bridge between the two. When your on-demand album or Setlist finishes, Autoplay can seamlessly transition into a Radio station based on what you just heard." },
      ],
    },
    {
      type: "callout",
      variant: "note",
      text: "You can turn off Autoplay in your Playback Settings if you prefer silence when your chosen on-demand media finishes.",
    },

    { type: "heading", text: "Offline on-demand (Take It With You)" },
    {
      type: "paragraph",
      text: "If you are traveling, commuting, or entering an area with poor network coverage, you can download your media for offline on-demand playback using the Take It With You feature.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Navigate to any eligible Setlist, album, podcast show, or video." },
        { text: "Tap the Take It With You (download) icon." },
        { text: "Select your preferred quality and wait for the download to complete." },
      ],
    },
    {
      type: "paragraph",
      text: "Once downloaded, you can select and play these specific items on-demand without any internet connection.",
    },
    {
      type: "callout",
      variant: "warning",
      text: "Downloaded media requires periodic network validation. You must connect your device to the internet at least once every 30 days to verify your active entitlements and maintain offline on-demand access. If your subscription expires or you refund a purchase, the offline files will lock.",
    },

    { type: "heading", text: "Handling unavailable or restricted media" },
    {
      type: "paragraph",
      text: "Because on-demand playback relies on real-time rights, licensing, and territory agreements, a track's availability can change. The MusicOSY player is designed to handle these changes gracefully without breaking your listening session.",
    },
    {
      type: "table",
      headers: ["Restriction Type", "What Happens in the Player"],
      rows: [
        ["Territory Restriction", "If you travel to a region where the track is not licensed, on-demand playback will stop and display a neutral availability notice."],
        ["Creator Unpublished", "If the creator takes the track off the platform, it will be marked as unavailable in your Library and skipped in your queues."],
        ["Subscription Expired", "If your access to a creator's Circle ends, their subscriber-only tracks will lock and require a renewed subscription to play on-demand."],
        ["Age Restriction", "If the content is gated behind an age verification requirement you have not met, the player will prompt you to verify your age before starting."],
      ],
    },
  ],
  related: [
    "/resources/help-center/using-musicosy/media-and-playback/listen-on-musicosy",
    "/resources/help-center/using-musicosy/media-and-playback/video-playing",
    "/resources/help-center/using-musicosy/media-and-playback/fullscreen",
    "/resources/help-center/using-musicosy/media-and-playback/sound",
    "/resources/help-center/using-musicosy/media-and-playback/manage-your-playback-queue",
    "/resources/help-center/using-musicosy/media-and-playback/manage-your-up-next-queue",
    "/resources/help-center/using-musicosy/media-and-playback/continue-listening",
    "/resources/help-center/using-musicosy/media-and-playback/music-playback-troubleshooting",
    "/resources/help-center/using-musicosy/media-and-playback/video-playback-troubleshooting",
  ],
};
