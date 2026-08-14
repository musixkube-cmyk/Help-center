import type { Doc } from "./types";

/**
 * "Personal Context versus Workspace Context" — Getting Started doc explaining
 * how MusicOSY Contexts determine ownership and authority without creating
 * separate accounts or identities.
 *
 * Covers: Personal Context (what it owns + example actions), Workspace Context
 * (what it owns + example actions), the "check your context" rule with the
 * self-question quote, how ownership works (6-row comparison table), what a
 * Workspace cannot access, intentional context switching, and what happens if
 * access is lost mid-session.
 *
 * Content provided verbatim by the user; structured into blocks. Uses a 3-column
 * Action/Personal/Workspace ownership table, a quote block for the self-check
 * question, and multiple plain lists for owned-items and example actions.
 */
export const personalContextVersusWorkspaceContextDoc: Doc = {
  path: "/resources/help-center/getting-started/personal-context-versus-workspace-context",
  blocks: [
    {
      type: "paragraph",
      text: "MusicOSY uses Contexts to make it clear who you are acting for when you use the platform. You have one unified MusicOSY member account. Contexts do not create separate accounts, separate logins, or separate people. Instead, they determine the ownership of the work you create and the authority you have to act on behalf of a team.",
    },
    {
      type: "paragraph",
      text: "Your Personal Context is for your own individual MusicOSY life.",
    },
    {
      type: "paragraph",
      text: "Your Workspace Context is for the shared work you are authorized to do for a band, artist, label, studio, podcast, event team, business, or organization.",
    },

    { type: "heading", text: "Personal Context" },
    {
      type: "paragraph",
      text: "Your Personal Context is your default MusicOSY experience. When you sign in, MusicOSY starts you in your Personal Context unless you intentionally switch to an authorized Workspace.",
    },
    {
      type: "paragraph",
      text: "Use Personal Context when you are acting as yourself—as a listener, a fan, or an independent creator.",
    },
    {
      type: "paragraph",
      text: "Your Personal Context owns and controls your:",
    },
    {
      type: "list",
      items: [
        { text: "Public profile (display name, @handle, and bio)" },
        { text: "Personal Library, Keeps (saves), and Setlists (playlists)" },
        { text: "Social graph (Follows and followers)" },
        { text: "Backstage (direct messages and voice memos)" },
        { text: "Blocks, mutes, and privacy settings" },
        { text: "Account security and recovery methods" },
        { text: "Personal purchases, tickets, and subscriptions" },
        { text: "Personal posts and activity on The Stage" },
        { text: "Personal Studio projects and drafts (unless you explicitly transfer them)" },
      ],
    },
    {
      type: "paragraph",
      text: "Examples of actions in Personal Context:",
    },
    {
      type: "list",
      items: [
        { text: "Following an artist or joining a Fan Club" },
        { text: "Building a personal Setlist or Keeping a track" },
        { text: "Sending a Backstage message" },
        { text: "Buying concert tickets or merch from a Creator Shop" },
        { text: "Posting to The Stage" },
        { text: "Starting a personal Studio project" },
        { text: "Upgrading your personal Membership Plan or Toolkit" },
      ],
    },
    {
      type: "paragraph",
      text: "Your personal activity and identity remain entirely yours, even if you also belong to one or more Workspaces.",
    },

    { type: "heading", text: "Workspace Context" },
    {
      type: "paragraph",
      text: "A Workspace Context is an authorization boundary for shared work. It is not a second personal identity. Every Workspace action is performed by a real MusicOSY member holding a specific role and scoped permission within that Workspace.",
    },
    {
      type: "paragraph",
      text: "Use Workspace Context when you are acting on behalf of an authorized team, project, artist, band, label, studio, organization, or business.",
    },
    {
      type: "paragraph",
      text: "A Workspace Context may own and manage:",
    },
    {
      type: "list",
      items: [
        { text: "Shared Studio projects and source assets" },
        { text: "Canonical catalog records and releases" },
        { text: "Merch Table (Shop) activity and commerce" },
        { text: "Tour plans, Roadbooks, and events" },
        { text: "Amplification Campaigns (advertising) and marketing" },
        { text: "Team assets and organization pages" },
        { text: "Billing relationships and financial records" },
        { text: "Split Sheets and royalty allocations" },
      ],
    },
    {
      type: "paragraph",
      text: "Examples of actions in Workspace Context:",
    },
    {
      type: "list",
      items: [
        { text: "Editing a band’s shared Studio project" },
        { text: "Uploading and distributing a label-owned release" },
        { text: "Managing an artist’s tour routing and venue settlements" },
        { text: "Assigning credits and managing Split Sheets for a Workspace release" },
        { text: "Reviewing a shared marketing campaign" },
        { text: "Inviting a new member to the Workspace ensemble" },
      ],
    },

    { type: "heading", text: "The Most Important Difference: Check Your Context" },
    {
      type: "paragraph",
      text: "Before you create, edit, publish, sell, distribute, invite, approve, or manage something important, check your active context in the Workspace Switcher.",
    },
    {
      type: "paragraph",
      text: "Ask yourself:",
    },
    {
      type: "quote",
      text: "Am I doing this for myself, or am I doing this for a team?",
    },
    {
      type: "paragraph",
      text: "If you are acting for yourself, stay in Personal Context.",
    },
    {
      type: "paragraph",
      text: "If you are acting for a band, label, studio, project, or business, switch to the correct Workspace Context first.",
    },
    {
      type: "paragraph",
      text: "MusicOSY does not treat a personal action as Workspace-owned just because you belong to that Workspace. You must explicitly select the Workspace before acting for it. When you take a state-changing action in a Workspace, MusicOSY records that you (the member) acted on behalf of the Workspace, under your specific role.",
    },

    { type: "heading", text: "How Ownership Works" },
    {
      type: "paragraph",
      text: "The context active when you create or manage an object determines who owns it.",
    },
    {
      type: "table",
      headers: ["Action", "Personal Context", "Workspace Context"],
      rows: [
        [
          "Start a Studio project",
          "Creates a personal project owned by you.",
          "Creates a shared project owned by the Workspace.",
        ],
        [
          "Publish music",
          "Publishes a personal release to your creator profile.",
          "Publishes a Workspace-owned release to an Artist Page or label catalog.",
        ],
        [
          "Create a Setlist",
          "Creates a personal Setlist in your Library.",
          "Creates an authorized shared or Workspace Setlist for team reference.",
        ],
        [
          "Manage a catalog",
          "Manages your own eligible personal catalog.",
          "Manages the Workspace catalog you are permitted to edit.",
        ],
        [
          "Run an event",
          "Creates and manages your own personal event.",
          "Creates and manages an organization, venue, or tour event.",
        ],
        [
          "Invite a collaborator",
          "Invites them to your personal project (if allowed).",
          "Invites them into the authorized Workspace with a specific role.",
        ],
      ],
    },
    {
      type: "paragraph",
      text: "A personal project stays personal unless you use an approved, governed transfer or sharing workflow. A Workspace project remains Workspace-owned even when an individual member creates or edits it while acting in that Workspace Context.",
    },

    { type: "heading", text: "What a Workspace Cannot Access" },
    {
      type: "paragraph",
      text: "A Workspace does not take over your personal MusicOSY life. Switching into a Workspace does not grant the Workspace (or its other members) access to your private account.",
    },
    {
      type: "paragraph",
      text: "Even when you are active in a Workspace, it CANNOT see or control your:",
    },
    {
      type: "list",
      items: [
        { text: "Personal Library, Keeps, and listening history" },
        { text: "Personal follows and private Fan Club memberships" },
        { text: "Private Backstage messages" },
        { text: "Personal blocks and mutes" },
        { text: "Account recovery methods and security settings" },
        { text: "Personal purchases, payment methods, and subscriptions" },
        { text: "Personal Studio drafts (unless explicitly shared)" },
      ],
    },
    {
      type: "paragraph",
      text: "Furthermore, your Workspace role never overrides higher-priority platform rules. A Workspace owner cannot use their authority to bypass member blocks, content rights, safety restrictions, legal holds, financial fraud protections, or platform enforcement decisions.",
    },

    { type: "heading", text: "Switch Contexts Intentionally" },
    {
      type: "paragraph",
      text: "Use the Workspace Switcher in your main navigation whenever you need to move between your personal profile and a shared Workspace.",
    },
    {
      type: "paragraph",
      text: "MusicOSY will always show your active context clearly in the application shell. Before you make an important change—like publishing a release, launching a campaign, or updating a payout account—confirm the name of the profile or Workspace shown in the interface.",
    },

    { type: "heading", text: "What happens if you lose access?" },
    {
      type: "paragraph",
      text: "If your Workspace access is revoked or expires while you are actively working in that Workspace Context, MusicOSY will safely terminate the Workspace session, protect any sensitive views, and automatically redirect you to a safe route in your Personal Context.",
    },
  ],
  related: [
    "/resources/help-center/getting-started/personal-profiles-vs-team-workspaces",
    "/resources/help-center/using-musicosy/creator-studio-and-workspaces/create-or-join-a-workspace",
    "/resources/help-center/using-musicosy/creator-studio-and-workspaces/switch-workspaces",
    "/resources/help-center/using-musicosy/creator-studio-and-workspaces/workspace-roles-and-permissions",
    "/resources/help-center/using-musicosy/creator-studio-and-workspaces/invite-and-manage-workspace-members",
    "/resources/help-center/using-musicosy/creator-studio-and-workspaces/collaborate-in-studio",
    "/support/account-and-access/account-safety",
  ],
};
