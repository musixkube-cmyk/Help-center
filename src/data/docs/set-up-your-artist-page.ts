import type { Doc } from "./types";

/**
 * "Set up your Artist Page" — the doc that introduces the public,
 * catalog-facing music identity on MusicOSY.
 *
 * Content provided verbatim by the user; structured into blocks. Uses two
 * tables (personal-profile vs. Artist Page, and the Artist Page tabs
 * reference), a note callout, and bullet lists with bold lead-ins for the
 * creation steps.
 */
export const setUpYourArtistPageDoc: Doc = {
  path: "/resources/help-center/getting-started/set-up-your-artist-page",
  blocks: [
    {
      type: "paragraph",
      text: "Your Artist Page is the public destination for your music on MusicOSY. It is where listeners, fans, collaborators, and industry partners find your releases, events, Shop, and public artist identity.",
    },
    {
      type: "paragraph",
      text: "Your Artist Page is connected to your personal profile but is not the same thing. Your personal profile belongs to you as a member. Your Artist Page represents an artist, band, act, or creative project in public-facing music spaces.",
    },
    {
      type: "callout",
      variant: "note",
      title: "Note",
      text: "You do not need an Artist Page to create, upload, or publish music on MusicOSY. Every member can press Create and share work from their personal profile. An Artist Page becomes useful when you want a dedicated, catalog-facing public identity for your music.",
    },

    { type: "heading", text: "Artist Page and personal profile" },
    {
      type: "table",
      headers: ["Surface", "Purpose"],
      rows: [
        [
          "Personal profile",
          "Your social identity, community interaction, personal posts, Library, follows, Backstage messages, and account settings",
        ],
        [
          "Artist Page",
          "Your catalog-facing music identity: releases, videos, events, Shop, EPK, and professional presentation",
        ],
      ],
    },
    {
      type: "paragraph",
      text: "You can link the two. A member visiting your Artist Page can navigate to your personal profile, and vice versa. But each surface controls its own content, visibility, and audience.",
    },
    {
      type: "paragraph",
      text: "Your personal profile stays yours whether you are listening, creating, working with a label, joining a band, managing an event, or collaborating in a Workspace. Your Artist Page represents the public music identity you choose to present.",
    },

    { type: "heading", text: "Before you begin" },
    {
      type: "paragraph",
      text: "Before creating an Artist Page, make sure:",
    },
    {
      type: "list",
      items: [
        {
          text: "Your personal profile is set up with a display name, handle, and profile photo.",
        },
        {
          text: "You have at least one eligible release, track, video, or public creative work ready to connect—or you plan to publish soon.",
        },
        {
          text: "You know whether the page represents you as a solo artist, a band, a collective, or a creative project.",
        },
      ],
    },
    {
      type: "paragraph",
      text: "You do not need a large catalog, a label, or a manager to create an Artist Page. You can start with one song and grow from there.",
    },

    { type: "heading", text: "Create your Artist Page" },
    {
      type: "paragraph",
      text: "When you are ready to build a public music identity, open Studio or your creator tools and select Set up Artist Page.",
    },
    {
      type: "paragraph",
      text: "MusicOSY will guide you through:",
    },
    {
      type: "list",
      ordered: true,
      items: [
        {
          lead: "Choose what the page represents.",
          text: "Select whether this is a solo artist, band, collective, producer alias, podcast show, or other creative project.",
        },
        {
          lead: "Add the public artist name.",
          text: "This is the name listeners will see. It can be different from your personal display name.",
        },
        {
          lead: "Upload artist imagery.",
          text: "Add a profile image, banner, or approved brand assets. Use imagery you have the right to use.",
        },
        {
          lead: "Write your artist bio.",
          text: "Introduce your sound, story, influences, and current work. Keep it genuine and current.",
        },
        {
          lead: "Add official links.",
          text: "Connect your website, social channels, press links, booking contact, or other supported destinations.",
        },
        {
          lead: "Connect eligible content.",
          text: "Link your releases, tracks, videos, events, Shop items, Setlists, and public posts.",
        },
        {
          lead: "Review and publish.",
          text: "Preview your page before making it publicly visible.",
        },
      ],
    },
    {
      type: "paragraph",
      text: "A new Artist Page may begin as a Work in Progress (draft). Draft pages are visible only to you and authorized editors until you choose to publish.",
    },

    { type: "heading", text: "Choose what appears on your Artist Page" },
    {
      type: "paragraph",
      text: "Your Artist Page does not automatically show everything connected to your account. You choose which eligible content represents the artist or project.",
    },
    {
      type: "paragraph",
      text: "Content that can appear on an Artist Page includes:",
    },
    {
      type: "list",
      items: [
        { text: "Featured releases, singles, and albums" },
        { text: "Music videos and clips" },
        { text: "Upcoming and past events" },
        { text: "Public posts from The Stage" },
        { text: "Public Setlists (playlists)" },
        { text: "Merch Table (Shop) items and collections" },
        { text: "Selected community or fan club activity" },
        { text: "Official links and press materials" },
        { text: "EPK (Electronic Press Kit) access, where configured" },
      ],
    },
    {
      type: "paragraph",
      text: "Each item keeps its own privacy, visibility, age, territory, rights, and access rules. Adding something to your Artist Page does not make private content public or give visitors access to restricted material.",
    },
    {
      type: "paragraph",
      text: "You can add, remove, reorder, and feature content at any time. Your Artist Page grows with your catalog.",
    },

    { type: "heading", text: "Artist Page tabs" },
    {
      type: "paragraph",
      text: "Your Artist Page can display tabs based on your eligible content and activity. Tabs appear automatically when the corresponding content exists and is available.",
    },
    {
      type: "table",
      headers: ["Tab", "Appears when"],
      rows: [
        ["About", "Your Artist Page exists. Shows bio, links, and public details."],
        ["Music", "You have eligible published tracks, releases, or albums."],
        ["Videos", "You have eligible published videos or music videos."],
        ["Events", "You have eligible public or upcoming events."],
        ["Shop", "You have an active Merch Table with eligible products."],
        ["Posts", "You have eligible public social posts."],
        ["Setlists", "You have public or shared Setlists."],
        ["Community", "You operate or are associated with an eligible community or fan club."],
        ["EPK", "You have configured an Electronic Press Kit."],
      ],
    },
    {
      type: "paragraph",
      text: "Tabs that you do not yet qualify for will not appear. You do not need to enable them manually.",
    },

    { type: "heading", text: "Work with a band or team" },
    {
      type: "paragraph",
      text: "An Artist Page can represent one person, a band, a collective, or another creative project.",
    },
    {
      type: "paragraph",
      text: "If you work with other people, use a Workspace to manage shared access. A Workspace allows authorized members—such as bandmates, managers, label staff, or approved collaborators—to help operate the Artist Page.",
    },
    {
      type: "paragraph",
      text: "Your Workspace role determines what you can do:",
    },
    {
      type: "list",
      items: [
        { text: "View the page and its content" },
        { text: "Edit metadata, imagery, or links" },
        { text: "Publish or schedule releases" },
        { text: "Manage events, Shop, or community" },
        { text: "Administer the page and its settings" },
      ],
    },
    {
      type: "paragraph",
      text: "Being invited to a Workspace does not automatically give someone ownership of the artist identity, catalog, rights, payouts, personal account, or private information. Each role is scoped and auditable.",
    },
    {
      type: "paragraph",
      text: "Switching between your Personal Context and a Workspace Context does not change your personal profile, Library, follows, or messages.",
    },

    { type: "heading", text: "Verification" },
    {
      type: "paragraph",
      text: "Some Artist Pages may display a verification badge. Verification confirms that the page is authentically associated with the artist, band, or project it represents.",
    },
    {
      type: "paragraph",
      text: "Verification is not something you can assign to yourself. It is granted through a review process.",
    },
    {
      type: "paragraph",
      text: "A verified badge does not imply endorsement by MusicOSY, editorial priority, rights ownership, or any special platform treatment.",
    },
    {
      type: "paragraph",
      text: "Verification may be revoked if the associated identity, organisation, or account changes materially.",
    },
    {
      type: "paragraph",
      text: "You can request verification through Settings → Account if your Artist Page meets the eligibility criteria.",
    },

    { type: "heading", text: "Your Artist Page is not proof of ownership" },
    {
      type: "paragraph",
      text: "Creating, claiming, linking, or appearing on an Artist Page does not automatically prove that you:",
    },
    {
      type: "list",
      items: [
        { text: "Own a catalog or master recordings" },
        { text: "Control distribution or publishing rights" },
        { text: "Represent an artist or organisation" },
        { text: "Qualify for payouts or revenue share" },
        { text: "Hold a management, label, or agency relationship" },
      ],
    },
    {
      type: "paragraph",
      text: "MusicOSY may require additional verification, permissions, agreements, or review before certain actions are available, including distribution, rights management, monetization, verification badges, and payout access.",
    },
    {
      type: "paragraph",
      text: "Use accurate names, imagery, links, and public claims. Do not create or operate an Artist Page that:",
    },
    {
      type: "list",
      items: [
        { text: "Impersonates another artist or person" },
        { text: "Falsely claims affiliation, representation, or endorsement" },
        { text: "Misrepresents ownership, rights, or catalog authority" },
        { text: "Uses another person's name, image, or likeness without permission" },
      ],
    },
    {
      type: "paragraph",
      text: "If you believe someone is impersonating you or misusing your identity on MusicOSY, use the Report option on their page or contact Support.",
    },

    { type: "heading", text: "Keep your Artist Page current" },
    {
      type: "paragraph",
      text: "Update your Artist Page as your career grows. Consider refreshing it when you:",
    },
    {
      type: "list",
      items: [
        { text: "Release new music or a new project" },
        { text: "Announce a live session, tour, or event" },
        { text: "Launch merchandise or a new Shop collection" },
        { text: "Add a collaborator, manager, or label relationship" },
        { text: "Update artist images or branding" },
        { text: "Change your official website or social links" },
        { text: "Build or update an EPK or press kit" },
        { text: "Start a new creative era or direction" },
      ],
    },
    {
      type: "paragraph",
      text: "A clear, current Artist Page makes it easier for fans to listen, follow, support, shop, and stay connected to what comes next.",
    },
  ],
  related: [
    "/resources/help-center/getting-started/set-up-your-profile",
    "/resources/help-center/getting-started/choose-or-change-your-handle",
    "/resources/help-center/using-musicosy/creator-studio-and-workspaces/build-an-epk-electronic-press-kit",
    "/resources/help-center/using-musicosy/creator-studio-and-workspaces/create-or-join-a-workspace",
    "/resources/help-center/using-musicosy/creator-studio-and-workspaces/workspace-roles-and-permissions",
    "/resources/help-center/using-musicosy/create-and-publish/publish-music",
    "/resources/help-center/using-musicosy/creator-studio-and-workspaces/manage-your-catalog",
    "/resources/help-center/using-musicosy/creator-studio-and-workspaces/credits-rights-and-splits",
    "/resources/help-center/using-musicosy/creator-studio-and-workspaces/distribution",
    "/resources/help-center/using-musicosy/creator-studio-and-workspaces/verification-on-musicosy",
    "/support/reports-and-appeals/report-impersonation",
  ],
};
