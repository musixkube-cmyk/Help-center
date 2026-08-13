import type { Doc } from "./types";

/**
 * "Manage topics and interests" — Using Music OSY → Discover & Browse doc.
 *
 * Your topics and interests help MusicOSY understand the music culture you
 * want to explore. Covers: how topics and interests work, reviewing and
 * updating your interests (5-step process), adding a new interest (with
 * examples), removing an interest (with caveats about why content may
 * still appear), exploring beyond selected interests, and privacy/
 * eligibility.
 *
 * Content provided verbatim by the user; structured into blocks. Uses a
 * 5-step ordered list for the update process, two example quote callouts
 * (R&B→electronic scenario), and multiple bulleted lists.
 */
export const manageTopicsAndInterestsDoc: Doc = {
  path: "/resources/help-center/using-musicosy/discover-and-browse/manage-topics-and-interests",
  blocks: [
    {
      type: "paragraph",
      text: "Your topics and interests help MusicOSY understand the music culture you want to explore.",
    },
    {
      type: "paragraph",
      text: "Use them to tell MusicOSY more about the genres, moods, artists, podcast topics, scenes, and creative interests that matter to you. Your choices help shape the music, creators, events, Fresh Drops, and recommendations you see across The Stage and in your For You feed.",
    },
    {
      type: "paragraph",
      text: "Your taste evolves. You can update your topics whenever you want.",
    },

    { type: "heading", text: "How topics and interests work" },
    {
      type: "paragraph",
      text: "MusicOSY uses your selected interests as one of many signals to personalize your discovery experience.",
    },
    {
      type: "paragraph",
      text: "Your topics and interests may help the platform surface:",
    },
    {
      type: "list",
      items: [
        { text: "Music and Fresh Drops in your favorite genres" },
        { text: "Artists and creators connected to your taste" },
        { text: "Podcasts and episodes you may enjoy" },
        { text: "Rising (trending) sounds and cultural moments" },
        { text: "Public Setlists related to your interests" },
        { text: "Take the Stage moments (Live Sessions) and events connected to your music culture" },
        { text: "Recommended creators and music" },
      ],
    },
    {
      type: "paragraph",
      text: "Choosing a genre or mood does not lock you into a fixed identity or prevent you from discovering something entirely new. MusicOSY is designed to balance your declared interests with organic cultural discovery.",
    },

    { type: "heading", text: "Review and update your interests" },
    {
      type: "paragraph",
      text: "To review or change your topics and interests:",
    },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Navigate to your Settings or open the Manage topics and interests option from your Home feed controls." },
        { text: "Review the genres, moods, artists, podcast topics, scenes, and other interests connected to your account." },
        { text: "Add new interests you want to explore." },
        { text: "Remove interests that no longer represent your current taste." },
        { text: "Save your changes." },
      ],
    },
    {
      type: "paragraph",
      text: "MusicOSY will immediately begin recalibrating your recommendation candidates. You will see the most impact as you actively explore, listen, Love, Keep, and search for music connected to your updated interests.",
    },

    { type: "heading", text: "Add a new interest" },
    {
      type: "paragraph",
      text: "Add a topic when you want to intentionally train your feed to show more of a particular sound, scene, or culture.",
    },
    {
      type: "paragraph",
      text: "Examples of interests you can add:",
    },
    {
      type: "list",
      items: [
        { text: "A new genre or subgenre (e.g., House, Afrobeat, Lo-Fi)" },
        { text: "A specific mood or vibe" },
        { text: "A regional or local music scene" },
        { text: "Podcast categories" },
        { text: "Creative interests (e.g., music production, DJ culture, songwriting)" },
      ],
    },
    {
      type: "quote",
      text: "Example: If you usually listen to R&B but want to explore electronic music, add \"Electronic\" and \"Club Culture\" to your interests. Then, actively search for those artists, Love their tracks, and add them to your Setlists to reinforce the signal.",
    },

    { type: "heading", text: "Remove an interest" },
    {
      type: "paragraph",
      text: "Remove a topic when it no longer reflects the culture you want to see on The Stage.",
    },
    {
      type: "paragraph",
      text: "Removing an interest tells the recommendation engine to stop prioritizing that topic. However, it does not instantly erase every related item from your feed. You may still see content connected to a removed topic if:",
    },
    {
      type: "list",
      items: [
        { text: "You Follow creators who make that type of music" },
        { text: "You have recently Loved or Kept similar tracks" },
        { text: "The content is currently Rising globally or in your region" },
        { text: "You are exploring a public Setlist or Live Session that features it" },
      ],
    },
    {
      type: "paragraph",
      text: "For a harder boundary, combine topic removal with the Not Interested feed control, or use Mute and Block for specific creators or keywords.",
    },

    { type: "heading", text: "Explore beyond your selected interests" },
    {
      type: "paragraph",
      text: "Topics and interests are a compass, not a cage.",
    },
    {
      type: "paragraph",
      text: "MusicOSY will still introduce you to unfamiliar music, emerging artists, and cultural moments outside your selected profile. Use Search, Rising rails, Fresh Drops, and the Friends Tab to explore beyond what the algorithm already knows about you. Discovery works best when you leave room for surprise.",
    },

    { type: "heading", text: "Privacy and eligibility" },
    {
      type: "paragraph",
      text: "Your interests are part of your private MusicOSY experience.",
    },
    {
      type: "paragraph",
      text: "They help shape your recommendations, but they do not expose your private Library, Backstage messages, purchases, or listening history to other members or creators. Furthermore, your selected interests never override platform safety, age-gating, territory rights, or eligibility rules. You will only be recommended content that you are strictly permitted to access.",
    },
  ],
  related: [
    "/resources/help-center/using-musicosy/discover-and-browse/manage-your-home-feed-and-recommendations",
    "/resources/help-center/using-musicosy/discover-and-browse/for-you-feed",
    "/resources/help-center/using-musicosy/discover-and-browse/recommended-creators-and-music",
    "/resources/help-center/using-musicosy/discover-and-browse/discover-content",
  ],
};
