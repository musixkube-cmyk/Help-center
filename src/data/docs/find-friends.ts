import type { Doc } from "./types";

/**
 * "Find friends" — the doc that helps members discover people, artists,
 * creators, and communities on MusicOSY.
 *
 * Content provided verbatim by the user; structured into blocks. Uses a
 * 6-row action table (Follow / Subscribe / Keep / Follow a Setlist / Join a
 * Community / Message in Backstage), multiple numbered and bulleted lists,
 * and bold lead-in items where appropriate.
 */
export const findFriendsDoc: Doc = {
  path: "/resources/help-center/getting-started/find-friends",
  blocks: [
    {
      type: "paragraph",
      text: "MusicOSY is built around music, but it comes alive through the people you discover along the way.",
    },
    {
      type: "paragraph",
      text: "Find friends, artists, creators, producers, podcasters, collaborators, and music communities to make The Stage feel more like your world. Following the people and sounds you care about helps you discover new releases, conversations, live moments, Setlists (playlists), events, and creative opportunities.",
    },

    { type: "heading", text: "Find someone you already know" },
    {
      type: "paragraph",
      text: "The quickest way to find a specific person is through Search.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Open Search." },
        { text: "Enter their display name, artist name, project name, or @handle." },
        { text: "Use the People or Creators filter if available to narrow your results." },
        { text: "Select the matching profile from the results." },
        { text: "Open their profile to confirm you found the right person." },
        { text: "Select Follow to add them to your MusicOSY community." },
      ],
    },
    {
      type: "paragraph",
      text: "If you know someone's exact @handle, use it. A handle is unique across MusicOSY, while multiple members may share the same display name. For example, searching @mayariversmusic will always lead to one specific profile.",
    },

    { type: "heading", text: "Tips for finding someone", level: 3 },
    {
      type: "list",
      items: [
        { text: "Try their artist or stage name if they use one publicly." },
        { text: "Try their real name if you know it." },
        { text: "Search for a track, release, podcast, or event they are connected to." },
        { text: "Look for them in the credits of a release or Setlist you know they worked on." },
        { text: "Ask them to share their profile link or @handle directly." },
        { text: "If they have a Workspace, label, or collective, search for that name." },
      ],
    },

    { type: "heading", text: "Find people through The Stage" },
    {
      type: "paragraph",
      text: "The Stage is MusicOSY's main social feed. It is one of the best places to discover the people behind the music, conversations, and culture you enjoy.",
    },
    {
      type: "paragraph",
      text: "When you find a post, track, clip, live moment, comment, or Setlist you like:",
    },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Select the member's profile photo, display name, or @handle." },
        { text: "Explore their profile, music, public posts, Setlists, and featured work." },
        { text: "Select Follow if you want to see more from them." },
      ],
    },
    {
      type: "paragraph",
      text: "You can also discover new people through:",
    },
    {
      type: "list",
      items: [
        { text: "Posts your friends Love (like), Keep (save), Resing (repost), or Pass the Mic (share)" },
        { text: "Mentions in posts and comments" },
        { text: "Public Setlists and the members who built or follow them" },
        { text: "Artists featured on releases, tracks, and credits" },
        { text: "Conversations in comments and replies" },
        { text: "Live Sessions and Crowd Chat" },
        { text: "Public events, RSVPs, and music communities" },
        { text: "Artist Pages linked to releases you enjoy" },
        { text: "Creator Shops and merchandise you browse" },
      ],
    },

    { type: "heading", text: "Discover through credits and collaborations" },
    {
      type: "paragraph",
      text: "When you open a track, release, video, or podcast episode, you may see credits listing contributors, producers, writers, performers, and collaborators. Select any credited member's name to explore their profile and work.",
    },

    { type: "heading", text: "Discover through Setlists" },
    {
      type: "paragraph",
      text: "Public Setlists are curated by members and creators. When you find a Setlist you enjoy, you can open the profile of the person who built it. You may also see who else follows or engages with that Setlist, depending on their privacy settings.",
    },

    { type: "heading", text: "Explore recommendations" },
    {
      type: "paragraph",
      text: "MusicOSY may recommend people, creators, artists, and communities that match your interests.",
    },
    {
      type: "paragraph",
      text: "Recommendations can be influenced by the music, people, and culture you engage with, including:",
    },
    {
      type: "list",
      items: [
        { text: "Artists, genres, moods, and interests you selected during onboarding" },
        { text: "Creators and members you already follow" },
        { text: "Music and content you Love" },
        { text: "Tracks, videos, and posts you Keep" },
        { text: "Setlists you build, save, or follow" },
        { text: "Content you explore on The Stage and in Listen" },
        { text: "Music, events, podcasts, and conversations you search for" },
        { text: "Your activity across Discover, Search, and your Library" },
        { text: "Creators you interact with through comments, mentions, and Backstage (direct messages)" },
      ],
    },

    { type: "heading", text: "Where to find recommendations" },
    {
      type: "paragraph",
      text: "Use the Friends tab, creator suggestions, Discover sections, and recommended profiles to find people who match your sound. You may also see suggestions after following a creator, attending an event, or engaging with a community.",
    },

    { type: "heading", text: "How to improve your recommendations" },
    {
      type: "paragraph",
      text: "Your recommendations can change as your interests change. The more you explore, Love, Keep, follow, and listen, the more MusicOSY can help surface people and culture that feel relevant to you.",
    },
    {
      type: "paragraph",
      text: "To refine your recommendations:",
    },
    {
      type: "list",
      items: [
        { text: "Follow creators whose work you enjoy." },
        { text: "Keep and build Setlists in the genres you love." },
        { text: "Engage with posts, comments, and live sessions." },
        { text: "Use the Not interested or Show less like this options on content you want to see less of." },
        { text: "Update your genre, mood, and interest preferences in Settings → Privacy and safety or your profile." },
        { text: "Block or mute accounts you do not want to see. MusicOSY will respect these preferences in future recommendations." },
      ],
    },

    { type: "heading", text: "Find artists and creators" },
    {
      type: "paragraph",
      text: "Looking for someone whose music you already know? Try searching for:",
    },
    {
      type: "list",
      items: [
        { text: "Their artist name or stage name" },
        { text: "Their real name" },
        { text: "Their @handle" },
        { text: "A track, album, EP, podcast, or release title" },
        { text: "An event they are hosting or performing in" },
        { text: "A label, collective, or public Workspace connected to them" },
        { text: "A Creator Shop or product associated with them" },
      ],
    },

    { type: "heading", text: "What you can explore from a creator profile", level: 3 },
    {
      type: "paragraph",
      text: "From an artist or creator profile, you may be able to explore:",
    },
    {
      type: "list",
      items: [
        { text: "Their music, releases, and discography" },
        { text: "Videos and music videos" },
        { text: "Podcast shows and episodes" },
        { text: "Public posts from The Stage" },
        { text: "Their Artist Page, if they have one" },
        { text: "Events and live sessions" },
        { text: "Merch Table (Shop) items and collections" },
        { text: "Public Setlists" },
        { text: "Community or fan club" },
        { text: "Official links and press materials" },
        { text: "Their EPK (Electronic Press Kit), where publicly available" },
      ],
    },
    {
      type: "paragraph",
      text: "Not every profile will have all of these. Profile tabs appear based on eligible content and activity.",
    },

    { type: "heading", text: "Find people through events and live sessions" },
    {
      type: "paragraph",
      text: "Events and live sessions are a natural way to discover people who share your interests.",
    },
    {
      type: "list",
      items: [
        { text: "Browse the Events section to find upcoming concerts, live streams, listening parties, and community gatherings." },
        { text: "Attend a Live Session and engage in Crowd Chat with other audience members." },
        { text: "Check the lineup or guest list for an event to discover performers, hosts, and collaborators." },
        { text: "After attending an event, you may see related creators, artists, and communities in your recommendations." },
      ],
    },
    {
      type: "paragraph",
      text: "Event attendee lists may be visible depending on the event's privacy settings and the preferences of individual members.",
    },

    { type: "heading", text: "Find people through communities and Workspaces" },
    {
      type: "paragraph",
      text: "If you belong to a Community, Fan Club, or Workspace, you may discover other members through shared spaces.",
    },
    {
      type: "list",
      items: [
        { text: "In a community, you can see other members in channels, group conversations, and community posts, depending on the community's visibility settings." },
        { text: "In a Workspace, you can see other members who share that Workspace, along with their roles." },
        { text: "In a Fan Club or subscriber-only space, you can connect with other supporters of the same creator." },
      ],
    },
    {
      type: "paragraph",
      text: "Remember that community and Workspace membership does not automatically grant access to another member's personal profile, Library, or private messages. You can follow someone from a community or Workspace if their profile allows it.",
    },

    { type: "heading", text: "Find collaborators" },
    {
      type: "paragraph",
      text: "If you are looking for people to create with:",
    },
    {
      type: "list",
      items: [
        { text: "Search for creators by genre, instrument, or style." },
        { text: "Explore credits on releases you admire to find producers, writers, and performers." },
        { text: "Join communities or Workspaces focused on collaboration." },
        { text: "Use Studio to invite collaborators to a project once you have connected." },
        { text: "Attend live sessions, events, or listening parties where creators gather." },
        { text: "Post on The Stage about what you are looking for." },
      ],
    },
    {
      type: "paragraph",
      text: "When you find a potential collaborator, you can send them a message through Backstage (if their messaging settings allow it), mention them in a post, or invite them to a Studio project through the appropriate Workspace or collaboration flow.",
    },

    { type: "heading", text: "Share your profile" },
    {
      type: "paragraph",
      text: "Make it easy for people to find you by sharing your MusicOSY profile.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Open your Profile." },
        { text: "Select Pass the Mic (share) or the share icon." },
        { text: "Choose where you want to send your profile link." },
        { text: "Share it through Backstage (direct messages), text message, email, social media, or another supported app." },
      ],
    },
    {
      type: "paragraph",
      text: "Before sharing, make sure your display name, @handle, photo, bio, and public links reflect how you want to show up on MusicOSY. You can update these at any time through Edit profile.",
    },
    {
      type: "paragraph",
      text: "You can also share your @handle directly. For example: \"Find me on MusicOSY at @yourname.\"",
    },

    { type: "heading", text: "Follow, subscribe, and connect" },
    {
      type: "paragraph",
      text: "MusicOSY offers several ways to connect with people. Each serves a different purpose:",
    },
    {
      type: "table",
      headers: ["Action", "What it does"],
      rows: [
        ["Follow", "See someone's public activity in your feed and receive eligible notifications. Free and available on eligible profiles."],
        ["Subscribe / Join the Circle", "Support a creator with a recurring payment and access subscriber-only content, benefits, and community spaces."],
        ["Keep (save)", "Save a track, post, video, or creator to your personal Library for easy access later."],
        ["Follow a Setlist", "Receive updates when someone adds new content to a public Setlist you enjoy."],
        ["Join a Community", "Become a member of a creator's community, fan club, or membership space."],
        ["Message in Backstage", "Send a private message to another member, subject to their messaging settings."],
      ],
    },
    {
      type: "paragraph",
      text: "Following is not the same as subscribing. A follow is a free social connection. A subscription is a paid relationship that may unlock additional content and benefits.",
    },

    { type: "heading", text: "Why you may not find someone" },
    {
      type: "paragraph",
      text: "A person may not appear in Search, recommendations, or browse surfaces if:",
    },
    {
      type: "list",
      items: [
        { text: "Their profile is set to private or limited discoverability" },
        { text: "They recently changed their display name or @handle" },
        { text: "Their account is inactive, deactivated, deleted, restricted, or unavailable" },
        { text: "Their profile is limited by age, territory, rights, safety, or enforcement settings" },
        { text: "You or the other member has blocked the account" },
        { text: "Their profile is pending verification or review" },
        { text: "They have limited who can find or follow them through their privacy settings" },
      ],
    },

    { type: "heading", text: "Visibility and discoverability" },
    {
      type: "paragraph",
      text: "Profile visibility and profile discoverability are separate settings. A member can control whether their profile appears in Search, recommendations, and browse surfaces, subject to applicable privacy and safety rules.",
    },
    {
      type: "paragraph",
      text: "Visibility controls who can view the profile.",
    },
    {
      type: "paragraph",
      text: "Discoverability controls whether the profile appears in Search results, recommendations, and public browsing.",
    },
    {
      type: "paragraph",
      text: "A member can be visible to people who have their direct link without appearing in general discovery. This means you may be able to visit someone's profile through a shared link even if you cannot find them through Search.",
    },

    { type: "heading", text: "Blocking and discovery" },
    {
      type: "paragraph",
      text: "Blocking creates a safety boundary. A block can prevent ordinary mutual discovery, following, direct messaging in Backstage, comments, interaction notifications, and new social relationship actions.",
    },
    {
      type: "paragraph",
      text: "If you have blocked someone, or they have blocked you, you will not be able to find or interact with each other through standard platform features. This applies across Search, recommendations, The Stage, Backstage, comments, mentions, and social actions.",
    },
    {
      type: "paragraph",
      text: "If you are unable to find someone you previously followed or interacted with, consider whether a block, mute, account change, or privacy setting may be the reason.",
    },

    { type: "heading", text: "Manage your discovery preferences" },
    {
      type: "paragraph",
      text: "You can influence who appears in your recommendations and how you discover people:",
    },
    {
      type: "list",
      items: [
        { text: "Follow and unfollow creators to shape your feed." },
        { text: "Mute accounts whose content you want to see less of without blocking them." },
        { text: "Block accounts you do not want to interact with or discover." },
        { text: "Update your interests in Settings → Privacy and safety → Personalization." },
        { text: "Use negative feedback such as \"Not interested\" or \"Show less like this\" on content." },
        { text: "Review your privacy settings to control whether others can find you." },
      ],
    },
    {
      type: "paragraph",
      text: "Your privacy settings also affect whether other members can find you. If you have set your profile to private or limited discoverability, you may not appear in Search results or recommendations to other members.",
    },
  ],
  related: [
    "/resources/help-center/getting-started/follow-and-unfollow",
    "/resources/help-center/getting-started/choose-or-change-your-handle",
    "/resources/help-center/getting-started/set-up-your-profile",
    "/resources/help-center/using-musicosy/discover-and-browse/discover-content",
    "/resources/help-center/using-musicosy/discover-and-browse/search",
    "/resources/help-center/using-musicosy/content-interaction/block-and-mute",
    "/resources/help-center/using-musicosy/discover-and-browse/manage-topics-and-interests",
    "/support/account-and-access/manage-your-privacy-and-discoverability-settings",
    "/resources/help-center/using-musicosy/backstage-and-community/what-is-backstage",
    "/resources/help-center/using-musicosy/backstage-and-community/join-a-community-or-fan-club",
    "/resources/help-center/using-musicosy/live-and-events/attend-an-event",
    "/resources/help-center/using-musicosy/backstage-and-community/subscribe-to-a-creator",
  ],
};
