import type { Doc } from "./types";

/**
 * "Friends Tab" — Using Music OSY → Discover & Browse doc.
 *
 * The Friends Tab is where MusicOSY brings your social music world closer
 * together. Covers: what you can find, finding people through music,
 * following from the tab, sharing music with friends, privacy/muting/
 * blocking (incl. Mute vs Block), and a Friends Tab vs Feed vs For You vs
 * Search comparison table.
 *
 * Content provided verbatim by the user; structured into blocks. Uses a
 * 4-row comparison table, a 4-step ordered list for following, bold-lead-in
 * bullets for the Mute/Block distinction, and multiple bulleted lists.
 */
export const friendsTabDoc: Doc = {
  path: "/resources/help-center/using-musicosy/discover-and-browse/friends-tab",
  blocks: [
    {
      type: "paragraph",
      text: "The Friends Tab is where MusicOSY brings your social music world closer together.",
    },
    {
      type: "paragraph",
      text: "Use it to discover the people you know, see eligible activity from people you follow, find shared music interests, and explore the artists, Fresh Drops (new releases), Setlists, posts, and Live Sessions moving through your community.",
    },
    {
      type: "paragraph",
      text: "The Friends Tab is about connection through music. It helps you move from “I found a song I like” to “I found people who are into it too.”",
    },

    { type: "heading", text: "What you can find in the Friends Tab" },
    {
      type: "paragraph",
      text: "The Friends Tab helps you explore eligible social activity connected to your MusicOSY relationships.",
    },
    {
      type: "paragraph",
      text: "You may find:",
    },
    {
      type: "list",
      items: [
        { text: "Friends and creators you already follow" },
        { text: "People you may know or want to follow" },
        { text: "Music and creators connected to your community" },
        { text: "Public posts, Loves, Keeps, Resings, and Setlists (where sharing is enabled)" },
        { text: "New releases and Live Sessions from people you follow" },
        { text: "Shared music interests and discovery paths" },
        { text: "Profiles you can open to learn more about someone’s taste and activity" },
      ],
    },
    {
      type: "paragraph",
      text: "What appears depends on each member’s privacy settings, content visibility, profile discoverability, relationship status, and other MusicOSY eligibility rules.",
    },

    { type: "heading", text: "Find people through music" },
    {
      type: "paragraph",
      text: "The Friends Tab helps you discover people through the music they care about. You may find someone because they:",
    },
    {
      type: "list",
      items: [
        { text: "Follow an artist you follow" },
        { text: "Build Setlists around a genre or mood you enjoy" },
        { text: "Love, Keep, Resing, or share music you are exploring" },
        { text: "Participate in the same conversations" },
        { text: "Attend or share eligible events" },
        { text: "Follow creators, communities, or music scenes connected to your interests" },
        { text: "Share a similar listening or discovery path" },
      ],
    },
    {
      type: "paragraph",
      text: "Use these connections as an invitation to explore—not as a complete picture of another member’s private activity. A member’s personal Library, Backstage messages, private Keeps, private Setlists, purchases, and account settings remain strictly private unless they choose to share them publicly or directly with you.",
    },

    { type: "heading", text: "Follow someone from the Friends Tab" },
    {
      type: "paragraph",
      text: "When you find someone whose taste, work, or perspective connects with you:",
    },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Open their profile or Artist Page." },
        { text: "Review their public bio, posts, music, Setlists, and other eligible activity." },
        { text: "Select Follow." },
        { text: "Return to the Friends Tab or your Feed on The Stage to keep exploring." },
      ],
    },
    {
      type: "paragraph",
      text: "Following someone helps MusicOSY surface more of their eligible activity in your Home feed and creates relevant Signal Center notification preferences for their new releases and Live Sessions.",
    },

    { type: "heading", text: "Share music with friends" },
    {
      type: "paragraph",
      text: "The Friends Tab can help you find music worth passing along. When you find something that reminds you of someone, you can:",
    },
    {
      type: "list",
      items: [
        { text: "Pass the Mic to share it privately in Backstage or externally" },
        { text: "Resing it to amplify it to your own followers" },
        { text: "Add it to a public or shared Setlist" },
        { text: "Mention a friend in an eligible public conversation or Note" },
      ],
    },
    {
      type: "paragraph",
      text: "Music is personal. Share thoughtfully, respect privacy, and do not pressure someone to engage with content, creators, or communities they have not chosen to join.",
    },

    { type: "heading", text: "Privacy, Muting, and Blocking" },
    {
      type: "paragraph",
      text: "The Friends Tab strictly respects MusicOSY privacy and relationship boundaries. You will never see activity that is not available to you. Content or profiles will not appear if they are:",
    },
    {
      type: "list",
      items: [
        { text: "Set to private or limited to approved followers/subscribers" },
        { text: "Restricted by age, territory, rights, or access requirements" },
        { text: "Removed from discovery or limited by safety/moderation rules" },
        { text: "Connected to a member who has blocked you, or a profile you have blocked" },
      ],
    },

    { type: "heading", text: "Mute vs. Block", level: 3 },
    {
      type: "paragraph",
      text: "Not every connection belongs in your social music experience.",
    },
    {
      type: "list",
      items: [
        {
          lead: "Use Mute to",
          text: "silently reduce a person’s content or notifications in your feeds without alerting them.",
        },
        {
          lead: "Use Block to",
          text: "create a hard safety boundary. Blocking prevents ordinary mutual discovery, following, Backstage messaging, and new social interactions between you and another member.",
        },
      ],
    },
    {
      type: "paragraph",
      text: "If you see content that violates MusicOSY rules, use the Flag (Report) tools instead of engaging with or amplifying it.",
    },

    { type: "heading", text: "Friends Tab vs. Feed vs. For You" },
    {
      type: "paragraph",
      text: "Each part of MusicOSY helps you discover in a different way:",
    },
    {
      type: "table",
      headers: ["Surface", "Best for"],
      rows: [
        ["Friends Tab", "Exploring music and activity connected to people, friends, and relationships."],
        ["Feed (The Stage)", "Browsing the wider music culture, posts, releases, and activity moving through your network."],
        ["For You feed", "Discovering personalized music, Rising sounds, and creators beyond the people you already follow."],
        ["Search", "Finding a specific person, song, artist, event, Setlist, or topic."],
      ],
    },
    {
      type: "paragraph",
      text: "You can move between these surfaces at any time without losing the music, people, or content you found.",
    },
  ],
  related: [
    "/resources/help-center/getting-started/find-people-to-follow",
    "/resources/help-center/getting-started/follow-and-unfollow",
    "/support/account-and-access/manage-your-privacy-and-discoverability-settings",
    "/resources/help-center/using-musicosy/content-interaction/block-and-mute",
  ],
};
