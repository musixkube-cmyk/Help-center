import type { Doc } from "./types";

/**
 * "Workspace roles and permissions" — Creator Studio & Workspaces doc.
 *
 * Roles are reusable permission bundles local to a single Workspace. Covers:
 * what a role is (and isn't), roles-vs-permissions distinction, the
 * pre-action checks beyond role, default roles (14-row table), how roles
 * work (union, custom roles, system-only perms), Teams (what they do and
 * do NOT do), object-level permissions, common access levels table,
 * high-impact actions / separation of duties, role-vs-personal boundary,
 * roles + Toolkits, role changes, leaving/removal, requesting more access,
 * and role conflicts.
 *
 * Content provided verbatim by the user; structured into blocks. Uses 2
 * tables (Default Workspace roles, Common access levels), a quote block
 * for the multi-role example, multiple lists with and without bold lead-ins,
 * and several note-style paragraphs.
 */
export const workspaceRolesAndPermissionsDoc: Doc = {
  path: "/resources/help-center/using-musicosy/creator-studio-and-workspaces/workspace-roles-and-permissions",
  blocks: [
    {
      type: "paragraph",
      text: "Workspace roles determine what you can do inside a specific MusicOSY Workspace.",
    },
    {
      type: "paragraph",
      text: "Your role may let you view a project, edit a release, upload media, manage an event, review analytics, invite collaborators, or administer a team. It does not change your personal MusicOSY account or give you access to anything outside the Workspace where the role was assigned.",
    },

    { type: "heading", text: "A role is local to a Workspace" },
    {
      type: "paragraph",
      text: "For example, you can be:",
    },
    {
      type: "quote",
      text: "An owner in your artist Workspace, a producer in another artist’s Studio Workspace, an editor in a podcast Workspace, a manager in a label Workspace, an advertiser in a business Workspace.",
    },
    {
      type: "paragraph",
      text: "These roles do not follow you everywhere. Being a producer in one Workspace does not make you a producer across all of MusicOSY.",
    },

    { type: "heading", text: "What is a Workspace role?" },
    {
      type: "paragraph",
      text: "A Workspace role is a reusable bundle of permissions that defines your general level of access inside a shared team environment.",
    },
    {
      type: "paragraph",
      text: "Roles help teams give members the tools they need while protecting projects, catalog records, finances, private information, and important business decisions.",
    },
    {
      type: "paragraph",
      text: "Depending on your role, you may be able to:",
    },
    {
      type: "list",
      items: [
        { text: "View shared projects or assets" },
        { text: "Edit Studio sessions" },
        { text: "Upload media" },
        { text: "Add credits or contributors" },
        { text: "Manage release details" },
        { text: "Create or edit events" },
        { text: "View approved analytics" },
        { text: "Manage Shop activity" },
        { text: "Invite collaborators" },
        { text: "Approve workflow steps" },
        { text: "Manage team members" },
        { text: "Manage billing or Workspace settings" },
        { text: "Administer the Workspace" },
      ],
    },
    {
      type: "paragraph",
      text: "The Workspace switcher shows whether you can view, edit, publish, manage, bill, or administer within each Workspace.",
    },

    { type: "heading", text: "Roles and permissions are different" },
    {
      type: "paragraph",
      text: "Your role is your general level of access. A permission is a specific action you are allowed to take.",
    },
    {
      type: "paragraph",
      text: "For example, someone may have an editor role that allows them to update release metadata but not publish the release. A manager may be able to invite collaborators but not change billing. A producer may be able to work in Studio without being able to distribute music or approve royalty splits.",
    },
    {
      type: "paragraph",
      text: "MusicOSY checks more than your role before allowing an action. It may also check:",
    },
    {
      type: "list",
      items: [
        { text: "Your active Workspace" },
        { text: "The item you are trying to manage" },
        { text: "Whether the Workspace owns that item" },
        { text: "Your specific permission for that action" },
        { text: "Approval requirements" },
        { text: "Verification status" },
        { text: "Toolkit access" },
        { text: "Account status" },
        { text: "Rights, safety, legal, financial, and policy restrictions" },
      ],
    },
    {
      type: "paragraph",
      text: "A role or Membership Plan does not override these protections.",
    },

    { type: "heading", text: "Default Workspace roles" },
    {
      type: "paragraph",
      text: "MusicOSY provides a set of default roles that cover common team functions. Your Workspace owner or administrator can assign these roles, and may also create custom roles where supported.",
    },
    {
      type: "table",
      headers: ["Role", "Typical scope"],
      rows: [
        ["Workspace owner", "Governs Workspace administration, subject to higher financial, legal, and platform rules"],
        ["Workspace administrator", "Broad operational management without irreversible ownership transfer by default"],
        ["Content publisher", "Creates and manages authorized content and catalog publication"],
        ["Studio manager", "Manages authorized Studio projects, assets, and collaboration"],
        ["Rights manager", "Handles scoped catalog, metadata, claim, and distribution-right workflows"],
        ["Commerce manager", "Manages eligible offers, listings, orders, and customer workflows"],
        ["Finance viewer", "Views permitted financial reports and statements"],
        ["Finance approver", "Approves scoped refunds, splits, payouts, or adjustments under separation rules"],
        ["Marketing manager", "Manages eligible campaigns, promotions, and audience-facing activity"],
        ["Event manager", "Manages authorized events, tickets, attendees, and live operations"],
        ["Developer administrator", "Manages Workspace integrations, API credentials, and webhooks"],
        ["Analyst", "Views authorized aggregate analytics"],
        ["Support agent", "Handles scoped support without unrestricted account, financial, or case access"],
        ["Contributor", "Works on assigned projects or content without administrative authority"],
        ["Viewer", "Views authorized Workspace material only"],
      ],
    },

    { type: "heading", text: "How roles work" },
    {
      type: "list",
      items: [
        { text: "A member may hold multiple roles in the same Workspace. Effective permissions are the union of all allowed permissions, constrained by explicit denies and higher-priority policies." },
        { text: "Role labels may be customized for display, but the underlying permission bundle and audit identity remain unambiguous." },
        { text: "A custom role must declare each included permission and may not include protected system-only permissions." },
        { text: "No role can override platform governance, legal, safety, rights, identity-verification, financial-separation, or account-level restrictions." },
      ],
    },

    { type: "heading", text: "Teams and roles" },
    {
      type: "paragraph",
      text: "A Workspace may contain one or more Teams to organize members by function or project.",
    },
    {
      type: "paragraph",
      text: "Teams may represent:",
    },
    {
      type: "list",
      items: [
        { text: "A&R" },
        { text: "Marketing" },
        { text: "Rights and catalog" },
        { text: "Studio production" },
        { text: "Finance" },
        { text: "Events" },
        { text: "Merchandise" },
        { text: "Customer support" },
        { text: "Advertising" },
        { text: "Executive administration" },
        { text: "External contractor group" },
      ],
    },

    { type: "heading", text: "What Teams do" },
    {
      type: "list",
      items: [
        { text: "Group members for easier collaboration and communication" },
        { text: "Assign project or channel visibility" },
        { text: "Organize members by function" },
      ],
    },

    { type: "heading", text: "What Teams do NOT do" },
    {
      type: "list",
      items: [
        { text: "Override Workspace role permissions" },
        { text: "Grant owner-level authority" },
        { text: "Grant payout control or legal authority" },
        { text: "Grant data export access beyond the member’s role" },
        { text: "Create a separate identity or account" },
      ],
    },
    {
      type: "paragraph",
      text: "A Team member’s effective permissions are limited by their Workspace role. A Team can narrow access but cannot expand it beyond the role ceiling.",
    },

    { type: "heading", text: "Object-level permissions" },
    {
      type: "paragraph",
      text: "In addition to Workspace roles, individual objects may have object-level permissions that narrow access further.",
    },
    {
      type: "paragraph",
      text: "Object-level controls may apply to:",
    },
    {
      type: "list",
      items: [
        { text: "Studio projects" },
        { text: "Source assets" },
        { text: "Catalog releases" },
        { text: "Unreleased tracks" },
        { text: "Rights documentation" },
        { text: "Financial statements" },
        { text: "Tax records" },
        { text: "Payout accounts" },
        { text: "Customer or order data" },
        { text: "Sensitive cases" },
        { text: "Advertising accounts" },
        { text: "Developer secrets" },
        { text: "Team channels" },
        { text: "Unlisted or private content" },
      ],
    },

    { type: "heading", text: "How object-level permissions work" },
    {
      type: "list",
      items: [
        { text: "An object owner or authorized administrator may grant named collaborators a narrower role such as viewer, editor, reviewer, exporter, or publisher." },
        { text: "Object-level sharing must specify recipient, scope, expiration, authority, and revocation behavior." },
        { text: "Object sharing cannot elevate a recipient beyond their Workspace membership and role ceiling unless a distinct external-sharing model explicitly permits it." },
        { text: "A member removed from a Workspace must lose object-level access derived from that Workspace." },
        { text: "Object-level permission changes create audit events and invalidate relevant tokens, share links, caches, and realtime topics." },
      ],
    },
    {
      type: "paragraph",
      text: "For example, a Studio project may be visible only to specific collaborators, even if other Workspace members have a “Studio manager” role. A financial report may be visible only to members with “Finance viewer” or higher.",
    },

    { type: "heading", text: "Common access levels" },
    {
      type: "paragraph",
      text: "Your Workspace may use different names for roles, but access usually falls into levels like these:",
    },
    {
      type: "table",
      headers: ["Access level", "What it usually means"],
      rows: [
        ["View", "See approved shared information without changing it"],
        ["Edit", "Make changes to approved projects, metadata, or content"],
        ["Publish", "Submit or publish eligible content on behalf of the Workspace"],
        ["Manage", "Coordinate projects, teams, workflows, or eligible tools"],
        ["Bill", "View or manage approved billing-related activity"],
        ["Administer", "Manage Workspace-level settings, roles, and access"],
      ],
    },
    {
      type: "paragraph",
      text: "Your Workspace owner or administrator decides which roles and permissions are available for the team.",
    },

    { type: "heading", text: "High-impact actions and separation of duties" },
    {
      type: "paragraph",
      text: "Some actions are too important to be included automatically in a general role. These actions require specific permission and may require separation of duties, meaning the person who initiates an action cannot be the only person who approves it.",
    },
    {
      type: "paragraph",
      text: "Actions that may require separate permission or approval include:",
    },
    {
      type: "list",
      items: [
        { text: "Publishing or unpublishing content" },
        { text: "Deleting a project or release" },
        { text: "Transferring Workspace ownership" },
        { text: "Distributing music" },
        { text: "Submitting a rights claim" },
        { text: "Approving a contributor split" },
        { text: "Changing financial records" },
        { text: "Starting or changing a payout" },
        { text: "Spending advertising budget" },
        { text: "Changing Workspace billing" },
        { text: "Inviting another administrator" },
        { text: "Closing a Workspace" },
        { text: "Changing the legal entity or tax profile" },
        { text: "Adding or changing a payout account" },
        { text: "Approving a refund above a threshold" },
        { text: "Changing split recipients or percentages" },
        { text: "Accessing or exporting restricted audit data" },
        { text: "Responding to a legal request" },
        { text: "Managing staff-grade support or governance access" },
        { text: "Creating a high-privilege service account" },
        { text: "Rotating compromised integration credentials" },
        { text: "Bulk exporting member or customer data" },
        { text: "Disabling a security control" },
      ],
    },

    { type: "heading", text: "How separation of duties works" },
    {
      type: "list",
      items: [
        { text: "The same member should not initiate and solely approve a high-risk action unless the Workspace is eligible for a documented sole-owner exception." },
        { text: "A policy may require two-person approval, re-authentication, verification, delayed execution, or finance/legal review." },
        { text: "Permission changes must not take effect only in client memory; backend authorization and active sessions must re-evaluate promptly." },
        { text: "Temporary elevation must be time-bound, reason-coded, auditable, and automatically expire." },
      ],
    },
    {
      type: "paragraph",
      text: "If you do not have access to one of these actions, contact the Workspace owner or administrator. Do not ask another member to share their sign-in information or perform an action under their account.",
    },

    { type: "heading", text: "Roles do not change your personal account" },
    {
      type: "paragraph",
      text: "Your Workspace role does not give the Workspace access to your personal MusicOSY activity.",
    },
    {
      type: "paragraph",
      text: "The Workspace cannot access your:",
    },
    {
      type: "list",
      items: [
        { text: "Personal profile settings" },
        { text: "Personal Library" },
        { text: "Personal Keeps or Setlists" },
        { text: "Personal follows" },
        { text: "Private Backstage messages" },
        { text: "Personal blocks and mutes" },
        { text: "Account recovery methods" },
        { text: "Personal privacy settings" },
        { text: "Personal purchases" },
      ],
    },
    {
      type: "paragraph",
      text: "Likewise, your personal account cannot make Workspace changes unless you switch into the Workspace and have the required permission.",
    },
    {
      type: "paragraph",
      text: "Switching between your Personal Context and a Workspace Context does not transfer your personal data to the Workspace, and vice versa.",
    },

    { type: "heading", text: "Roles and Toolkits" },
    {
      type: "paragraph",
      text: "Your Workspace role determines what you can do inside the Workspace, but some actions also require a specific Toolkit or Membership Plan.",
    },
    {
      type: "paragraph",
      text: "For example:",
    },
    {
      type: "list",
      items: [
        { text: "A member with a “Studio manager” role may still need the Production Toolkit to access advanced Studio features." },
        { text: "A member with a “Commerce manager” role may need the Creator Business Toolkit to manage Shop operations." },
        { text: "A member with a “Rights manager” role may need the Catalog, Rights & Distribution Toolkit to handle distribution workflows." },
      ],
    },
    {
      type: "paragraph",
      text: "If a tool is unavailable, MusicOSY will show a clear reason—such as needing a plan, Workspace permission, verification, available usage, or access in your region.",
    },
    {
      type: "paragraph",
      text: "Your Workspace owner or administrator can manage Toolkit access for the Workspace.",
    },

    { type: "heading", text: "When your role changes" },
    {
      type: "paragraph",
      text: "A Workspace owner or authorized administrator may change your role when your responsibilities change.",
    },
    {
      type: "paragraph",
      text: "For example, you may move from view-only access to an editor role, receive publishing permission for a release, or lose access after a project ends.",
    },
    {
      type: "paragraph",
      text: "When your role changes:",
    },
    {
      type: "list",
      items: [
        { text: "MusicOSY may send a Signal Center notification explaining that your Workspace access has been updated." },
        { text: "Your new permissions take effect promptly across all Workspace surfaces, tools, and integrations." },
        { text: "Your previous permissions are revoked." },
        { text: "Active sessions and realtime subscriptions are re-evaluated." },
      ],
    },
    {
      type: "paragraph",
      text: "A role change affects your future access. It does not erase required audit, financial, rights, or activity records connected to work you already completed.",
    },

    { type: "heading", text: "When you leave or are removed from a Workspace" },
    {
      type: "paragraph",
      text: "If you leave a Workspace or your access is removed:",
    },
    {
      type: "list",
      items: [
        { text: "You lose future access to Workspace projects, assets, tools, and shared areas." },
        { text: "Your role and Team membership are revoked." },
        { text: "Your completed contributions, audit history, and applicable rights or financial dependencies are preserved." },
        { text: "You do not lose your personal MusicOSY account or other Workspace memberships." },
        { text: "Object-level access derived from that Workspace is revoked." },
        { text: "Relevant tokens, share links, and realtime subscriptions are invalidated." },
      ],
    },
    {
      type: "paragraph",
      text: "Removal should be used carefully. If you have pending work, financial obligations, or rights claims, consider resolving those before removal.",
    },

    { type: "heading", text: "If you need more access" },
    {
      type: "paragraph",
      text: "If you cannot complete an action, first check that you are in the correct Workspace.",
    },
    {
      type: "paragraph",
      text: "Then confirm whether you need:",
    },
    {
      type: "list",
      items: [
        { text: "A different Workspace role" },
        { text: "A specific permission" },
        { text: "Owner or administrator approval" },
        { text: "A required Toolkit" },
        { text: "Verification or an agreement" },
        { text: "Access to a particular project, release, event, or asset" },
      ],
    },
    {
      type: "paragraph",
      text: "Contact your Workspace owner or administrator with a clear description of what you need to do and why.",
    },

    { type: "heading", text: "Role conflicts and limits" },
    {
      type: "paragraph",
      text: "If you hold multiple roles in the same Workspace, your effective permissions are the union of all allowed permissions. However:",
    },
    {
      type: "list",
      items: [
        { text: "Explicit denies always take precedence over allows." },
        { text: "Higher-priority policies (safety, legal, rights, financial, enforcement) always override role permissions." },
        { text: "Object-level permissions can narrow your access below your role ceiling." },
        { text: "Team membership can narrow your access but cannot expand it beyond your role ceiling." },
      ],
    },
    {
      type: "paragraph",
      text: "If two roles appear to conflict, the most restrictive interpretation applies for safety-sensitive actions.",
    },
  ],
  related: [
    "/resources/help-center/getting-started/personal-context-versus-workspace-context",
    "/resources/help-center/getting-started/personal-profiles-vs-team-workspaces",
    "/resources/help-center/using-musicosy/creator-studio-and-workspaces/create-or-join-a-workspace",
    "/resources/help-center/using-musicosy/creator-studio-and-workspaces/switch-workspaces",
    "/resources/help-center/using-musicosy/creator-studio-and-workspaces/invite-and-manage-workspace-members",
    "/resources/help-center/using-musicosy/creator-studio-and-workspaces/collaborate-in-studio",
    "/resources/help-center/using-musicosy/creator-studio-and-workspaces/creator-tools-and-eligibility",
    "/resources/help-center/getting-started/understanding-your-toolkits-and-upgrades",
    "/support/account-and-access/account-safety",
  ],
};
