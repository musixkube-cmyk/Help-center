import type { Doc } from "./types";

/**
 * "Manage your Home feed and recommendations" — Using MusicOSY →
 * Discover & Browse doc.
 *
 * Covers: how recommendations work (signals + eligibility), following,
 * Love vs Keep vs Follow vs Add to Setlist, managing topics/interests,
 * exploring outside usual taste, seeing less of something (Not
 * Interested / Mute / Block / Flag), and what managing your feed does
 * NOT change.
 *
 * Content provided verbatim by the user; structured into blocks. Uses a
 * bold-lead-in list for the Love/Keep/Follow/Setlist distinction, a
 * 3-step ordered list for following, and multiple bulleted lists.
 */
export const manageYourHomeFeedAndRecommendationsDoc: Doc = {
  path: "/resources/help-center/using-musicosy/discover-and-browse/manage-your-home-feed-and-recommendations",
  blocks: [
    {
      type: "paragraph",
      text: "Your Home feed on The Stage is designed to help you stay close to the music, creators, conversations, releases, and culture that matter to you.",
    },
    {
      type: "paragraph",
      text: "MusicOSY uses your choices and activity to make your Home experience more relevant over time. You can influence what appears by following people, choosing interests, Loving content, Keeping music, exploring new scenes, and using controls when something is not for you.",
    },
    {
      type: "paragraph",
      text: "Your Home feed will not become perfect after one action. It evolves continuously as your musical taste and activity change.",
    },

    { type: "heading", text: "How recommendations work" },
    {
      type: "paragraph",
      text: "MusicOSY uses a variety of signals to decide what eligible content to surface in your Home feed and recommendations.",
    },
    {
      type: "paragraph",
      text: "These signals include:",
    },
    {
      type: "list",
      items: [
        { text: "Artists, creators, and communities you Follow" },
        { text: "Genres, moods, scenes, and interests you select" },
        { text: "Tracks, videos, posts, and episodes you Love" },
        { text: "Music and content you Keep in your Library" },
        { text: "Setlists you create, save, or explore" },
        { text: "Content you watch, listen to, Resing, or leave a Note on" },
        { text: "Artists, creators, releases, events, and topics you search for" },
        { text: "Music and creators connected to the people you follow" },
        { text: "Current activity across The Stage, including Fresh Drops, Live Sessions, events, and emerging music culture" },
      ],
    },
    {
      type: "paragraph",
      text: "Eligibility precedes ranking. MusicOSY strictly evaluates whether content is eligible for you before it can ever appear in your feed. Visibility settings, age gates, territory rights, safety moderation, blocks, subscriptions, and access rules all dictate what you are permitted to see.",
    },

    { type: "heading", text: "Follow the people you want more from" },
    {
      type: "paragraph",
      text: "Following is one of the clearest ways to shape your Home feed.",
    },
    {
      type: "paragraph",
      text: "When you follow an artist, creator, friend, podcast, label, or community, MusicOSY uses that relationship to:",
    },
    {
      type: "list",
      items: [
        { text: "Show more of their eligible posts and music" },
        { text: "Surface new Fresh Drops and Live Sessions" },
        { text: "Recommend related creators and music" },
        { text: "Build a more relevant Following and Home experience" },
      ],
    },
    {
      type: "paragraph",
      text: "To follow someone:",
    },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Open their profile or Artist Page." },
        { text: "Select Follow." },
        { text: "Keep exploring their music, posts, Setlists, events, and public activity." },
      ],
    },
    {
      type: "paragraph",
      text: "If you no longer want updates from someone, you can unfollow them at any time.",
    },

    { type: "heading", text: "Love and Keep what matters" },
    {
      type: "paragraph",
      text: "Loving and Keeping content tell MusicOSY that something connected with you, but they serve entirely different purposes.",
    },
    {
      type: "list",
      items: [
        { lead: "Use Love", text: "to show appreciation for a track, post, video, or moment. It acts as a social signal and a recommendation cue." },
        { lead: "Use Keep", text: "to save music or content to your personal Library so you can return to it later." },
        { lead: "Use Follow", text: "to connect to a person or creator’s ongoing updates." },
        { lead: "Use Add to Setlist", text: "to organize the music you want to hear again." },
      ],
    },
    {
      type: "paragraph",
      text: "Use the action that matches your intent. Keeping a song does not automatically Follow the artist. Loving a post does not automatically subscribe you to a creator’s paid Circle or Fan Club.",
    },

    { type: "heading", text: "Manage your topics and interests" },
    {
      type: "paragraph",
      text: "Your selected topics and interests help MusicOSY understand the music culture you want to explore.",
    },
    {
      type: "paragraph",
      text: "You can update your interests in your settings, including:",
    },
    {
      type: "list",
      items: [
        { text: "Genres and subgenres" },
        { text: "Moods" },
        { text: "Music scenes" },
        { text: "Podcast topics" },
        { text: "Live music and events" },
      ],
    },
    {
      type: "paragraph",
      text: "Update your interests when your taste changes, or when your Home feed no longer reflects what you are looking for. For example, if you want to pivot from R&B to electronic music or regional jazz, update your interests and spend time engaging with the new content you want more of.",
    },

    { type: "heading", text: "Explore outside your usual taste" },
    {
      type: "paragraph",
      text: "Your Home feed is not meant to trap you in one sound.",
    },
    {
      type: "paragraph",
      text: "Use Search, Trending content, Fresh Drops, creator profiles, Setlists, and events to explore outside your normal recommendations.",
    },
    {
      type: "paragraph",
      text: "When you find a new sound or creator you enjoy:",
    },
    {
      type: "list",
      items: [
        { text: "Follow them" },
        { text: "Love their music" },
        { text: "Keep a track or post" },
        { text: "Add music to a Setlist" },
        { text: "Explore their Artist Page" },
        { text: "Share the discovery in Backstage" },
      ],
    },
    {
      type: "paragraph",
      text: "Your active exploration helps MusicOSY learn that you want more of that kind of content.",
    },

    { type: "heading", text: "See less of something" },
    {
      type: "paragraph",
      text: "If a creator, topic, sound, or kind of content is not for you, use the available controls on the content or profile.",
    },
    {
      type: "paragraph",
      text: "Depending on the context, you can:",
    },
    {
      type: "list",
      items: [
        { text: "Select Not Interested or hide the content" },
        { text: "Update your topics and interests" },
        { text: "Mute a member, keyword, or conversation" },
        { text: "Block a member" },
        { text: "Flag (Report) content that violates MusicOSY rules" },
      ],
    },
    {
      type: "paragraph",
      text: "Muting helps reduce content or notifications silently without creating a hard safety boundary.",
    },
    {
      type: "paragraph",
      text: "Blocking is a strict safety and relationship boundary. A block prevents ordinary mutual discovery, following, Backstage messaging, Notes, and interaction notifications between you and another member.",
    },
    {
      type: "paragraph",
      text: "Use Flagging when content violates safety, rights, or community rules. Do not use the reporting tool simply because you dislike a genre, artist, or recommendation.",
    },

    { type: "heading", text: "What managing your feed does not change" },
    {
      type: "paragraph",
      text: "Managing your Home feed affects future recommendations and presentation. It does not:",
    },
    {
      type: "list",
      items: [
        { text: "Delete canonical content from MusicOSY" },
        { text: "Remove another member’s content for everyone" },
        { text: "Erase your completed purchases, tickets, subscriptions, or transactions" },
        { text: "Change your past Notes, posts, Loves, Keeps, or Setlists" },
        { text: "Override age, territory, rights, safety, privacy, or enforcement restrictions" },
        { text: "Grant access to content that is otherwise private, paid, subscriber-only, or unavailable" },
      ],
    },
    {
      type: "paragraph",
      text: "Your Library remains strictly yours. It is not an algorithmically rewritten feed. MusicOSY does not remove your Keeps, Setlists, downloads, purchases, or saved content simply because your recommendations change.",
    },
  ],
  related: [
    "/resources/help-center/using-musicosy/discover-and-browse/manage-topics-and-interests",
    "/resources/help-center/using-musicosy/content-interaction/love-and-keep-content",
    "/resources/help-center/using-musicosy/content-interaction/block-and-mute",
    "/resources/help-center/using-musicosy/discover-and-browse/what-is-the-stage",
  ],
};
