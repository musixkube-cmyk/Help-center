import type { Doc } from "./types";

/**
 * "Personal profiles vs. Team Workspaces" — Getting Started doc explaining
 * MusicOSY's single unified member account model and the Context system
 * that separates individual life from shared professional work.
 *
 * Covers: Personal Context (what it owns), what a Team Workspace is, the
 * boundary (what stays personal), what a Workspace can manage, context
 * switching + ownership + auditability, Workspace roles (scoped, least
 * privilege, separation of duties), Personal Profile vs Artist Page
 * comparison table, and leaving a Workspace.
 *
 * Content provided verbatim by the user; structured into blocks. Uses a
 * 3-row Personal-Profile-vs-Artist-Page comparison table, multiple bold
 * lead-in lists, and a note-style paragraph for auditability.
 */
export const personalProfilesVsTeamWorkspacesDoc: Doc = {
  path: "/resources/help-center/getting-started/personal-profiles-vs-team-workspaces",
  blocks: [
    {
      type: "paragraph",
      text: "MusicOSY is built on a single, unified member account. You do not need separate accounts to listen as a fan, create as an artist, or manage a label. \"Artist,\" \"producer,\" \"podcaster,\" and \"manager\" are not fixed account types—they are activities you perform and roles you hold.",
    },
    {
      type: "paragraph",
      text: "To support this, MusicOSY uses Contexts to separate your individual life from your shared professional or collaborative work. Your personal profile is your individual home, while a Team Workspace is a shared operational environment. Joining a team does not create a second personal identity, replace your profile, or give the team control of your personal account.",
    },

    { type: "heading", text: "Your Personal Profile (Personal Context)" },
    {
      type: "paragraph",
      text: "Your Personal Context is your default home on MusicOSY. It represents you as an individual member and is the context you are in when you first log on.",
    },
    {
      type: "paragraph",
      text: "Your personal profile belongs to you and owns your individual MusicOSY experience, including:",
    },
    {
      type: "list",
      items: [
        { text: "Your public profile (display name, @handle, profile photo, and bio)" },
        { text: "Your personal Library, Keeps (saves), and Setlists (playlists)" },
        { text: "Your social graph (Follows, followers, blocks, and mutes)" },
        { text: "Your Backstage (direct messages and voice memos)" },
        { text: "Your personal purchases, tickets, and subscriptions" },
        { text: "Your personal Studio projects and drafts" },
        { text: "Your account security, recovery methods, and privacy settings" },
        { text: "Your personal posts and activity on The Stage" },
      ],
    },
    {
      type: "paragraph",
      text: "When you listen, discover, Love music, build Setlists, follow people, comment, buy tickets, or manage your personal account, you are acting in your Personal Context.",
    },

    { type: "heading", text: "What is a Team Workspace? (Workspace Context)" },
    {
      type: "paragraph",
      text: "A Team Workspace is a shared MusicOSY environment for people building something together. It acts as an authorization boundary, not a second person.",
    },
    {
      type: "paragraph",
      text: "Workspaces are used by:",
    },
    {
      type: "list",
      items: [
        { text: "Bands and music groups" },
        { text: "Labels, distributors, and publishers" },
        { text: "Management teams and booking agents" },
        { text: "Studios and production houses" },
        { text: "Podcast networks" },
        { text: "Touring and event crews" },
        { text: "Advertisers and marketing teams" },
      ],
    },
    {
      type: "paragraph",
      text: "A Workspace can own and manage shared Studio projects, canonical catalog releases, EPKs (Electronic Press Kits), Merch Table storefronts, event plans, touring Roadbooks, billing relationships, and team analytics.",
    },

    { type: "heading", text: "The Boundary: What stays personal" },
    {
      type: "paragraph",
      text: "A Workspace does not own your personal MusicOSY identity, and your personal profile does not automatically grant you authority over a Workspace's assets.",
    },
    {
      type: "paragraph",
      text: "A Workspace CANNOT see or control:",
    },
    {
      type: "list",
      items: [
        { text: "Your personal Backstage messages" },
        { text: "Your personal Library, Keeps, and listening history" },
        { text: "Your personal purchases, payment methods, or payout accounts" },
        { text: "Your personal blocks, mutes, and privacy settings" },
        { text: "Your personal Studio drafts (unless explicitly shared or transferred)" },
        { text: "Your account recovery methods" },
      ],
    },
    {
      type: "paragraph",
      text: "For example, if you are a producer in an artist's Workspace, the artist's label does not gain access to your private Library, personal messages, or private MusicOSY activity.",
    },

    { type: "heading", text: "What a Workspace can manage" },
    {
      type: "paragraph",
      text: "A Workspace manages the shared work it owns. Depending on the Workspace and your assigned role, you may be able to:",
    },
    {
      type: "list",
      items: [
        { text: "Collaborate on shared Studio projects" },
        { text: "Upload, prepare, and distribute catalog releases" },
        { text: "Manage shared metadata, credits, and Split Sheets" },
        { text: "Plan events, tours, and venue settlements" },
        { text: "Manage shared commerce (Merch Table, ticketing, subscriptions)" },
        { text: "View approved team analytics and financial reports" },
        { text: "Build Amplification Campaigns (advertising)" },
        { text: "Invite collaborators and manage team approvals" },
      ],
    },
    {
      type: "paragraph",
      text: "The Workspace owns the shared work—not your personal MusicOSY identity.",
    },

    { type: "heading", text: "Context Switching and Ownership" },
    {
      type: "paragraph",
      text: "You do not create a separate account to join a Workspace. Instead, you use the Workspace Switcher in your main navigation to move between your Personal Context and any authorized Workspaces.",
    },
    {
      type: "paragraph",
      text: "Context switching is explicit. A Workspace cannot become active by accident after you sign in, follow a deep link, or refresh a page.",
    },
    {
      type: "list",
      items: [
        {
          lead: "Ownership is determined by Context.",
          text: "If you start creating a post, release, or Studio project, the active Context determines who owns it. A personal project remains personal unless you use a governed workflow to transfer it to a Workspace.",
        },
        {
          lead: "Auditability.",
          text: "When you take an action in a Workspace, MusicOSY records that the action was taken by you (the member), on behalf of the Workspace, under a specific role.",
        },
      ],
    },

    { type: "heading", text: "Workspace Roles and Permissions" },
    {
      type: "paragraph",
      text: "Your authority inside a Workspace is determined by your assigned role (e.g., Owner, Administrator, Producer, Rights Manager, Finance Approver, Viewer).",
    },
    {
      type: "list",
      items: [
        {
          lead: "Roles are scoped.",
          text: "You might be an Owner in your personal artist Workspace, a Producer in a collaborator's Workspace, and a Viewer in a label Workspace. A role in one Workspace does not apply anywhere else.",
        },
        {
          lead: "Least privilege.",
          text: "Being invited into a Workspace does not automatically give you access to everything inside it.",
        },
        {
          lead: "Separation of duties.",
          text: "High-impact actions—such as distributing a release, approving a financial split, initiating a payout, changing tax profiles, or closing a Workspace—require specific permissions and may require multi-person approval or step-up authentication.",
        },
      ],
    },

    { type: "heading", text: "Personal Profiles vs. Artist Pages" },
    {
      type: "paragraph",
      text: "It is important to understand the difference between your Personal Profile and an Artist Page:",
    },
    {
      type: "table",
      headers: ["Feature", "Personal Profile", "Artist Page"],
      rows: [
        [
          "Purpose",
          "Your individual social identity and personal account.",
          "A public, catalog-facing identity for an artist, band, or project.",
        ],
        [
          "Activity",
          "Interacting on The Stage, sending Backstage messages, managing personal settings.",
          "Displaying canonical releases, events, Merch Table items, and EPKs.",
        ],
        [
          "Ownership",
          "Always owned by you (Personal Context).",
          "Can be owned and managed by a Team Workspace (e.g., a label or management team).",
        ],
      ],
    },
    {
      type: "paragraph",
      text: "A Team Workspace can operate an Artist Page, update its biography, and manage its releases without the team gaining access to the individual band members' personal profiles or private accounts.",
    },

    { type: "heading", text: "Leaving a Workspace" },
    {
      type: "paragraph",
      text: "If you leave a Workspace or your access is revoked by an administrator:",
    },
    {
      type: "list",
      items: [
        { text: "You immediately lose future access to the Workspace's projects, catalog, tools, and shared assets." },
        { text: "Your personal account, Library, and Personal Context remain entirely unaffected." },
        { text: "MusicOSY preserves the Workspace's audit history, financial records, rights data, and published catalog. Your past contributions remain attributed to the project, but you can no longer edit them or access private Workspace data." },
      ],
    },
  ],
  related: [
    "/resources/help-center/using-musicosy/creator-studio-and-workspaces/create-or-join-a-workspace",
    "/resources/help-center/using-musicosy/creator-studio-and-workspaces/switch-workspaces",
    "/resources/help-center/using-musicosy/creator-studio-and-workspaces/workspace-roles-and-permissions",
    "/resources/help-center/using-musicosy/creator-studio-and-workspaces/invite-and-manage-workspace-members",
    "/resources/help-center/getting-started/personal-context-versus-workspace-context",
    "/resources/help-center/using-musicosy/creator-studio-and-workspaces/set-up-your-creator-profile-and-artist-page",
    "/resources/help-center/using-musicosy/creator-studio-and-workspaces/collaborate-in-studio",
    "/support/account-and-access/account-safety",
  ],
};
