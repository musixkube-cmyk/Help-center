import type { Doc } from "./types";

/**
 * "Search MusicOSY" — Using MusicOSY → Discover & Browse doc.
 *
 * Covers: searching for music, people/creators, events; using
 * suggestions; opening and refining results; what you can do from
 * Search; why a result may not appear (eligibility); and searching
 * safely.
 *
 * Content provided verbatim by the user; structured into blocks. Uses a
 * quote block for the example search terms, multiple bulleted lists,
 * and several paragraphs. NOTE: a stray "[Platform](Platform Business
 * Rules.docx)" artifact was present in the source content (a Word-doc
 * cross-reference) and was excluded — flagged to the user.
 */
export const searchMusicosyDoc: Doc = {
  path: "/resources/help-center/using-musicosy/discover-and-browse/search-musicosy",
  blocks: [
    {
      type: "paragraph",
      text: "Use Search MusicOSY when you know what you want to find—or when you have only a clue.",
    },
    {
      type: "paragraph",
      text: "Search can help you find people, music, artists, releases, podcasts, videos, Setlists, events, products, and other eligible public content across MusicOSY.",
    },
    {
      type: "paragraph",
      text: "You can search by a name, title, lyric, topic, @handle, genre, mood, or keyword. Start broad when you are exploring. Be specific when you are looking for one exact person, track, release, or event.",
    },

    { type: "heading", text: "Search for music" },
    {
      type: "paragraph",
      text: "Use Search to find the music you want to hear now or save for later.",
    },
    {
      type: "paragraph",
      text: "You can search by:",
    },
    {
      type: "list",
      items: [
        { text: "Song title" },
        { text: "Artist name" },
        { text: "Album, EP, or release title" },
        { text: "Lyrics" },
        { text: "Genre or mood" },
        { text: "Producer, featured artist, host, or guest name" },
        { text: "Podcast show or episode title" },
        { text: "Video or clip title" },
        { text: "Setlist title" },
        { text: "A word, phrase, or topic connected to the music" },
      ],
    },
    {
      type: "paragraph",
      text: "For example:",
    },
    {
      type: "quote",
      text: "“midnight drive”, “indie soul”, “summer festival”, “songs about starting over”, “@mayariversmusic”, “podcasts for producers”.",
    },
    {
      type: "paragraph",
      text: "When you find a result, you can open it to listen, watch, follow, Love, Keep, share, add to a Setlist, visit the creator profile, or explore related content.",
    },

    { type: "heading", text: "Search for people and creators" },
    {
      type: "paragraph",
      text: "To find a person, artist, creator, producer, host, label, or public project, search for their:",
    },
    {
      type: "list",
      items: [
        { text: "Display name" },
        { text: "Artist name" },
        { text: "Project name" },
        { text: "@handle" },
        { text: "Podcast name" },
        { text: "Band name" },
        { text: "Organization name" },
      ],
    },
    {
      type: "paragraph",
      text: "If you know someone’s exact @handle, use it. A handle is unique and is the most reliable way to find the correct MusicOSY profile.",
    },
    {
      type: "paragraph",
      text: "Search results may show eligible public profiles, Artist Pages, public Workspaces, music, events, and related content connected to your search.",
    },

    { type: "heading", text: "Search for events" },
    {
      type: "paragraph",
      text: "Use Search to find events, performances, Live Sessions, tours, and music activity.",
    },
    {
      type: "paragraph",
      text: "Try searching by:",
    },
    {
      type: "list",
      items: [
        { text: "Artist or creator name" },
        { text: "Venue name" },
        { text: "City or region" },
        { text: "Event title" },
        { text: "Festival name" },
        { text: "Tour name" },
        { text: "Music genre" },
        { text: "Date-related keywords, where available" },
      ],
    },
    {
      type: "paragraph",
      text: "Open an event result to learn more, view eligible ticket options, save the event, share it, or explore the artists and creators involved.",
    },

    { type: "heading", text: "Use suggestions to explore" },
    {
      type: "paragraph",
      text: "As you type, MusicOSY may show search suggestions to help you complete your search or discover related music, creators, releases, and topics.",
    },
    {
      type: "paragraph",
      text: "Suggestions can help when:",
    },
    {
      type: "list",
      items: [
        { text: "You are unsure how to spell an artist’s name" },
        { text: "You only remember part of a song title" },
        { text: "You know a lyric but not the artist" },
        { text: "You want to explore a genre, mood, scene, or topic" },
        { text: "You want to find music related to something you already enjoy" },
      ],
    },
    {
      type: "paragraph",
      text: "Suggestions are a starting point. You can always refine your search with a more specific name, phrase, lyric, or handle.",
    },

    { type: "heading", text: "Open and refine your results" },
    {
      type: "paragraph",
      text: "After searching, explore the available result types to find what you need.",
    },
    {
      type: "paragraph",
      text: "Depending on your search, you may find results for:",
    },
    {
      type: "list",
      items: [
        { text: "People and creators" },
        { text: "Songs and releases" },
        { text: "Albums and EPs" },
        { text: "Podcasts and episodes" },
        { text: "Videos and clips" },
        { text: "Setlists" },
        { text: "Events" },
        { text: "Products" },
        { text: "Public Workspaces" },
        { text: "Other eligible public content" },
      ],
    },
    {
      type: "paragraph",
      text: "If your first search does not show what you want, try:",
    },
    {
      type: "list",
      items: [
        { text: "Using the exact artist name or @handle" },
        { text: "Searching a song title without punctuation" },
        { text: "Searching a lyric or distinctive phrase" },
        { text: "Adding a genre, city, mood, or release name" },
        { text: "Searching the name of a featured artist, producer, host, or guest" },
        { text: "Trying a different spelling or a shorter phrase" },
      ],
    },

    { type: "heading", text: "What you can do from Search" },
    {
      type: "paragraph",
      text: "Search is not only for finding something. It is also a way to move into the rest of MusicOSY.",
    },
    {
      type: "paragraph",
      text: "From an eligible result, you may be able to:",
    },
    {
      type: "list",
      items: [
        { text: "Play music or begin a Listen session" },
        { text: "Open a creator profile or Artist Page" },
        { text: "Follow a person or creator" },
        { text: "Love or Keep a track, video, or post" },
        { text: "Add music to a Setlist" },
        { text: "Open a release" },
        { text: "Watch a video" },
        { text: "Enter a Live Session" },
        { text: "Find an event" },
        { text: "Share the result in Backstage or another supported app" },
        { text: "Visit a Shop or product page, where available" },
      ],
    },
    {
      type: "paragraph",
      text: "Search can connect you to the same music and creators you see on The Stage, but it gives you more control when you want to find something specific.",
    },

    { type: "heading", text: "Why a result may not appear" },
    {
      type: "paragraph",
      text: "Search only shows content that is eligible for you to see.",
    },
    {
      type: "paragraph",
      text: "A person, track, release, event, Setlist, product, or Workspace may not appear if it is:",
    },
    {
      type: "list",
      items: [
        { text: "Private or not discoverable" },
        { text: "Restricted to approved followers, subscribers, collaborators, or Workspace members" },
        { text: "Limited by age or territory" },
        { text: "Unavailable because of rights, licensing, or access rules" },
        { text: "Removed from public discovery" },
        { text: "Restricted by safety, moderation, or enforcement rules" },
        { text: "Blocked between you and another member" },
        { text: "No longer published or active" },
      ],
    },
    {
      type: "paragraph",
      text: "A public profile can appear in Search only when it is eligible for discovery. Private profiles are not ordinarily discoverable, and a block prevents ordinary mutual discovery between members.",
    },

    { type: "heading", text: "Search safely" },
    {
      type: "paragraph",
      text: "Search results may include music, opinions, people, communities, and topics that are unfamiliar to you.",
    },
    {
      type: "paragraph",
      text: "Use MusicOSY controls if you find content that violates platform rules or makes you feel unsafe:",
    },
    {
      type: "list",
      items: [
        { text: "Block or mute a member" },
        { text: "Report content or a profile" },
        { text: "Manage your Home feed and recommendations" },
        { text: "Update your topics and interests" },
      ],
    },
    {
      type: "paragraph",
      text: "Do not use Search to locate, harass, impersonate, or target another member.",
    },
  ],
  related: [
    "/resources/help-center/using-musicosy/discover-and-browse/what-is-the-stage",
    "/resources/help-center/using-musicosy/discover-and-browse/discover-content",
    "/resources/help-center/using-musicosy/discover-and-browse/manage-your-home-feed-and-recommendations",
    "/resources/help-center/using-musicosy/discover-and-browse/feed",
    "/resources/help-center/using-musicosy/discover-and-browse/for-you-feed",
    "/resources/help-center/using-musicosy/discover-and-browse/friends-tab",
    "/resources/help-center/using-musicosy/discover-and-browse/trending-content",
    "/resources/help-center/using-musicosy/discover-and-browse/trending-content-and-fresh-drops",
    "/resources/help-center/using-musicosy/discover-and-browse/recommended-creators-and-music",
    "/resources/help-center/using-musicosy/discover-and-browse/manage-topics-and-interests",
    "/resources/help-center/using-musicosy/content-interaction/block-and-mute",
  ],
};
