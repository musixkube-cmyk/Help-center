import type { Doc } from "./types";

/**
 * "Create or join a Workspace" — Creator Studio & Workspaces doc.
 *
 * A Workspace is a shared MusicOSY environment for people building
 * something together — a band, label, studio, podcast network, project,
 * event team, tour, business, or organization. Covers Organizations vs
 * Workspaces vs Teams, Workspace types, creating, owning, inviting,
 * roles, joining, membership states, Personal vs Workspace Context
 * switching, ownership boundaries, authority limits, Teams, sensitive
 * actions / separation of duties, object-level permissions, billing,
 * verification, leaving, removing members, suspicious invitations, and
 * the Workspace lifecycle.
 *
 * Content provided verbatim by the user; structured into blocks. Uses 4
 * tables (Org/Workspace/Team, Workspace types, Roles, Membership states,
 * Lifecycle), multiple ordered/bulleted lists with bold lead-ins, and
 * note + warning callouts.
 */
export const createOrJoinAWorkspaceDoc: Doc = {
  path: "/resources/help-center/using-musicosy/creator-studio-and-workspaces/create-or-join-a-workspace",
  blocks: [
    {
      type: "paragraph",
      text: "A Workspace is a shared MusicOSY environment for people building something together. It is a separate operating context from your personal profile, with its own projects, catalog, assets, billing, team members, roles, and tools.",
    },
    {
      type: "paragraph",
      text: "Create a Workspace when you need a dedicated place for a band, label, studio, podcast network, creative project, event team, tour, business, or organization. Join a Workspace when another member invites you to collaborate on shared work.",
    },
    {
      type: "paragraph",
      text: "You always use your existing MusicOSY account. You do not need a separate login, a second account, or a different identity to create, join, or work in a Workspace.",
    },
    {
      type: "callout",
      variant: "note",
      text: "A Workspace is an authorization boundary, not a second person. It acts only through authenticated members who hold the required role and scoped permission. Every action taken in a Workspace records who acted, in which Workspace, under what role, and on what object.",
    },

    { type: "heading", text: "Organizations, Workspaces, and Teams" },
    {
      type: "paragraph",
      text: "MusicOSY models organizational structure as three distinct levels:",
    },
    {
      type: "table",
      headers: ["Level", "Purpose", "Example"],
      rows: [
        [
          "Organization",
          "A legal or business entity that may own one or more Workspaces",
          "Northside Records, After Hours Media Group",
        ],
        [
          "Workspace",
          "An operational boundary for people, projects, assets, commerce, and administration",
          "\"Northside Records A&R,\" \"After Hours Podcast Production\"",
        ],
        [
          "Team",
          "A scoped group inside a Workspace for collaboration or administration",
          "Marketing team, Rights team, Event crew",
        ],
      ],
    },
    {
      type: "paragraph",
      text: "An Organization may own multiple Workspaces. A Workspace may contain multiple Teams. A Team cannot exist without a Workspace.",
    },
    {
      type: "paragraph",
      text: "You do not need to create an Organization to create a Workspace. A single Workspace is sufficient for most bands, projects, and small teams. Organizations become useful when you need to manage multiple Workspaces under one business identity, enforce shared policies, or use enterprise features like domain verification and single sign-on.",
    },

    { type: "heading", text: "Workspace types" },
    {
      type: "paragraph",
      text: "When you create a Workspace, you choose the type that best matches what you are building. The type determines which tools, settings, and capabilities are available.",
    },
    {
      type: "table",
      headers: ["Workspace type", "Typical use"],
      rows: [
        ["Personal artist workspace", "A solo artist managing their own catalog, releases, and team"],
        ["Shared music project", "A band, collaboration, or production project"],
        ["Podcast workspace", "A podcast show, season, or network"],
        ["Studio workspace", "A recording studio, production house, or mixing team"],
        ["Creator collective", "A group of creators collaborating under a shared brand"],
        ["Label workspace", "A record label managing a roster, releases, and distribution"],
        ["Publisher workspace", "A music publisher managing compositions and rights"],
        ["Distributor workspace", "A distributor managing delivery to external platforms"],
        ["Management workspace", "A management company representing artists"],
        ["Advertising workspace", "A team running campaigns, promotions, or AdNote operations"],
        ["Event/tour workspace", "An event team, tour operation, or venue group"],
        ["Organization workspace", "A business, brand, or enterprise with multiple teams"],
      ],
    },
    {
      type: "paragraph",
      text: "Your available Workspace types and tools may depend on your MusicOSY access, Membership Plan, Toolkit access, verification status, agreements, region, or other eligibility requirements.",
    },

    { type: "heading", text: "Create a Workspace" },
    {
      type: "paragraph",
      text: "Create a Workspace when you are ready to organize shared work beyond your personal profile.",
    },
    { type: "heading", text: "Before you begin", level: 3 },
    {
      type: "paragraph",
      text: "Before creating a Workspace, make sure:",
    },
    {
      type: "list",
      items: [
        { text: "You know what the Workspace represents (a band, label, project, studio, podcast, event, or business)." },
        { text: "You have a clear name that accurately identifies the project or organization." },
        { text: "You understand that you will become the Workspace owner with the highest level of authority." },
        { text: "You are prepared to manage invitations, roles, permissions, and potentially billing." },
        { text: "You have reviewed the applicable Workspace terms and any relevant Toolkit or plan requirements." },
      ],
    },
    { type: "heading", text: "Steps to create", level: 3 },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Open the Workspace switcher from your main navigation." },
        { text: "Select Create Workspace." },
        { text: "Choose the Workspace type that best matches what you are building." },
        { text: "Enter a name for the Workspace." },
        {
          text: "Add the information needed to identify the band, project, studio, label, organization, or team. This may include:",
          children: [
            { text: "Display name" },
            { text: "Description or purpose" },
            { text: "Associated artist, brand, or organization (if applicable)" },
            { text: "Region or territory" },
            { text: "Contact or business information (if applicable)" },
          ],
        },
        { text: "Review the available tools, settings, and access options for your selected Workspace type." },
        { text: "Select Create." },
      ],
    },
    {
      type: "paragraph",
      text: "After creating a Workspace, you become its owner with the highest level of authority. The Workspace begins in an active state, and you can begin organizing shared projects, inviting members, and using eligible Workspace tools.",
    },
    { type: "heading", text: "What the Workspace owner can do", level: 3 },
    {
      type: "paragraph",
      text: "As the Workspace owner, you can:",
    },
    {
      type: "list",
      items: [
        { text: "Invite and remove members" },
        { text: "Assign and change roles" },
        { text: "Create and manage Teams" },
        { text: "Configure Workspace settings" },
        { text: "Manage shared projects, catalog, and assets" },
        { text: "Approve or delegate approvals for publishing, distribution, and financial actions" },
        { text: "Manage billing and payment methods (if applicable)" },
        { text: "Configure integrations and connected services" },
        { text: "Archive or close the Workspace" },
      ],
    },
    {
      type: "paragraph",
      text: "The owner role is subject to platform-wide safety, legal, rights, financial, and enforcement rules. Ownership does not override content rights, member blocks, legal restrictions, safety restrictions, financial holds, or platform enforcement.",
    },

    { type: "heading", text: "Choose a Workspace name carefully" },
    {
      type: "paragraph",
      text: "Your Workspace name should make it easy for invited members to understand what they are joining.",
    },
    {
      type: "paragraph",
      text: "Good examples include:",
    },
    {
      type: "list",
      items: [
        { text: "The Midnight Echoes" },
        { text: "Jordan Lee Studio" },
        { text: "Northside Records" },
        { text: "After Hours Podcast" },
        { text: "Summer Tour 2026" },
      ],
    },
    {
      type: "paragraph",
      text: "Use a name that accurately represents the project, artist, business, or team. Do not create a Workspace that:",
    },
    {
      type: "list",
      items: [
        { text: "Impersonates another artist, label, organization, or public figure" },
        { text: "Falsely implies affiliation with MusicOSY or another platform" },
        { text: "Uses a name that is deceptive, misleading, or likely to cause confusion" },
        { text: "Violates trademark, publicity, or intellectual-property rights" },
      ],
    },
    {
      type: "paragraph",
      text: "MusicOSY may reserve, restrict, review, or decline Workspace names that violate these rules.",
    },

    { type: "heading", text: "Invite members to your Workspace" },
    {
      type: "paragraph",
      text: "After creating a Workspace, invite the people who need to collaborate with you.",
    },
    { type: "heading", text: "Steps to invite", level: 3 },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Open the Workspace." },
        { text: "Go to the Team, Roster, or Members area." },
        { text: "Select Invite member." },
        { text: "Search for or enter the member you want to invite by their display name, handle, or email address." },
        { text: "Select the role and access level they need." },
        { text: "Review what the role allows them to do." },
        { text: "Optionally assign them to a Team within the Workspace." },
        { text: "Send the invitation." },
      ],
    },
    { type: "heading", text: "What an invitation includes", level: 3 },
    {
      type: "paragraph",
      text: "A Workspace invitation clearly identifies:",
    },
    {
      type: "list",
      items: [
        { text: "The Workspace being joined (name, type, and owner)" },
        { text: "The person or team sending the invitation" },
        { text: "The role being offered" },
        { text: "The access and permissions the role provides" },
        { text: "Any Team assignment" },
        { text: "The invitation expiration date" },
        { text: "Any verification or approval requirements" },
      ],
    },
    { type: "heading", text: "Invitation rules", level: 3 },
    {
      type: "list",
      items: [
        { text: "Invitations are sent to one recipient at a time." },
        { text: "Invitations are time-bound and expire after a defined period." },
        { text: "Invitations are revocable before they are accepted." },
        { text: "Invitations are resistant to forwarding or reuse—they cannot be shared with another person." },
        { text: "Acceptance requires the recipient to be signed in and may require additional verification." },
        { text: "A member may decline an invitation without providing a reason." },
      ],
    },

    { type: "heading", text: "Choosing roles" },
    {
      type: "paragraph",
      text: "When inviting a member, select the role that gives them the minimum access they need to do their work. Common roles include:",
    },
    {
      type: "table",
      headers: ["Role", "Typical authority"],
      rows: [
        ["Owner", "Full Workspace governance (subject to platform rules)"],
        ["Administrator", "Broad operational management"],
        ["Content publisher", "Create and manage authorized content and catalog publication"],
        ["Studio manager", "Manage authorized Studio projects and assets"],
        ["Rights manager", "Handle scoped catalog, metadata, claim, and distribution workflows"],
        ["Commerce manager", "Manage eligible offers, listings, orders, and customer workflows"],
        ["Finance viewer", "View permitted financial reports and statements"],
        ["Finance approver", "Approve scoped refunds, splits, payouts, or adjustments"],
        ["Marketing manager", "Manage eligible campaigns, promotions, and audience-facing activity"],
        ["Event manager", "Manage authorized events, tickets, attendees, and live operations"],
        ["Developer administrator", "Manage Workspace integrations, API credentials, and webhooks"],
        ["Analyst", "View authorized aggregate analytics"],
        ["Support agent", "Handle scoped support without unrestricted access"],
        ["Contributor", "Work on assigned projects without administrative authority"],
        ["Viewer", "View authorized Workspace material only"],
      ],
    },
    {
      type: "paragraph",
      text: "You can also create custom roles with specific permission bundles if the default roles do not fit your needs.",
    },
    {
      type: "callout",
      variant: "warning",
      title: "Important",
      text: "Give each person the lowest level of access they need to do their work. You can always grant more access later, but removing access after a mistake is harder.",
    },

    { type: "heading", text: "Join a Workspace" },
    {
      type: "paragraph",
      text: "When someone invites you to a Workspace, you may receive a Signal Center notification, email, or another supported notification.",
    },
    { type: "heading", text: "Before accepting, review", level: 3 },
    {
      type: "list",
      items: [
        { text: "The Workspace name and type" },
        { text: "The inviter (who sent the invitation)" },
        { text: "The role you are being offered" },
        { text: "What you will be able to view, edit, publish, manage, or administer" },
        { text: "Whether the Workspace represents a band, label, project, studio, business, or other organization you recognize" },
        { text: "Any verification or approval requirements" },
      ],
    },
    { type: "heading", text: "Steps to join", level: 3 },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Open the Workspace invitation from your notification or email." },
        { text: "Review the Workspace details and your assigned role." },
        { text: "Select Accept to join or Decline if you do not want to participate." },
        { text: "If required, complete any verification or approval step." },
        { text: "Open the Workspace switcher when you are ready to work in that context." },
      ],
    },
    { type: "heading", text: "What happens when you accept", level: 3 },
    {
      type: "paragraph",
      text: "When you accept an invitation:",
    },
    {
      type: "list",
      items: [
        { text: "MusicOSY grants you only the role and permissions selected for you." },
        { text: "You gain access to the Workspace's shared projects, assets, and tools as permitted by your role." },
        { text: "You can switch into the Workspace context using the Workspace switcher." },
        { text: "Your membership is recorded with the Workspace, including your role, join date, and the invitation source." },
      ],
    },
    {
      type: "paragraph",
      text: "For example, being invited as a Producer may give you access to approved production tools inside that Workspace without giving you control of the Workspace's catalog, finances, billing, rights, or administrator settings.",
    },
    { type: "heading", text: "Membership states", level: 3 },
    {
      type: "table",
      headers: ["State", "Meaning"],
      rows: [
        ["Invited", "You have received an invitation but have not yet responded"],
        ["Pending approval", "The Workspace requires approval before you can join"],
        ["Active", "You are a current member with the assigned role"],
        ["Suspended", "Your access is temporarily limited"],
        ["Removed", "You have been removed by an administrator or owner"],
        ["Left", "You chose to leave the Workspace"],
        ["Expired", "Your membership ended due to time limits or plan changes"],
      ],
    },

    { type: "heading", text: "Switching between Personal Context and Workspace Context" },
    {
      type: "paragraph",
      text: "Your Personal Context is your default. It owns your personal profile, Library, follows, messages, purchases, and settings.",
    },
    {
      type: "paragraph",
      text: "When you switch into a Workspace Context, you are acting on behalf of that Workspace. The Workspace becomes the owner of any new objects you create while in that context.",
    },
    { type: "heading", text: "How to switch", level: 3 },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Open the Workspace switcher from your main navigation." },
        { text: "Select the Workspace you want to work in, or select your personal profile to return to Personal Context." },
        { text: "MusicOSY will confirm the context change and show you the active identity." },
      ],
    },
    { type: "heading", text: "What switching does", level: 3 },
    {
      type: "list",
      items: [
        { text: "Changes the default owner for newly created objects (projects, posts, releases, campaigns, events, etc.)" },
        { text: "Changes which tools and navigation items are visible" },
        { text: "Changes which settings and billing you can access" },
        { text: "Updates your notification scope to include Workspace-relevant activity" },
      ],
    },
    { type: "heading", text: "What switching does NOT do", level: 3 },
    {
      type: "list",
      items: [
        { text: "Does not change your personal identity, profile, or account" },
        { text: "Does not transfer your personal Library, follows, Keeps, Setlists, or purchases" },
        { text: "Does not give the Workspace access to your personal messages, blocks, mutes, or privacy settings" },
        { text: "Does not change your personal billing or payment methods" },
        { text: "Does not affect your membership in other Workspaces" },
      ],
    },
    { type: "heading", text: "Context attribution", level: 3 },
    {
      type: "paragraph",
      text: "When you take a state-changing action in a Workspace, MusicOSY records:",
    },
    {
      type: "list",
      items: [
        { text: "Who acted (your member identity)" },
        { text: "In which context (the Workspace)" },
        { text: "Under what role (your assigned role and permission)" },
        { text: "On what object (the target project, release, campaign, etc.)" },
        { text: "What changed (prior state and new state)" },
      ],
    },
    {
      type: "paragraph",
      text: "This means that even though you are acting \"as the Workspace,\" your personal identity is always recorded for audit purposes.",
    },

    { type: "heading", text: "What a Workspace can own" },
    {
      type: "paragraph",
      text: "A Workspace may own and manage:",
    },
    {
      type: "list",
      items: [
        { text: "Catalog items (tracks, releases, albums, videos, podcasts)" },
        { text: "Studio projects and source assets" },
        { text: "Shared media and asset libraries" },
        { text: "Campaigns and advertising operations" },
        { text: "Tour plans and event operations" },
        { text: "Team members and role assignments" },
        { text: "Billing relationships and payment methods" },
        { text: "Financial records, statements, and payout configurations" },
        { text: "Organization pages and public profiles" },
        { text: "Integrations and API credentials" },
        { text: "Approval workflows and release calendars" },
      ],
    },

    { type: "heading", text: "What a Workspace cannot own" },
    {
      type: "paragraph",
      text: "A Workspace must not own or control:",
    },
    {
      type: "list",
      items: [
        { text: "Your personal follows" },
        { text: "Your personal Library" },
        { text: "Your private messages (Backstage)" },
        { text: "Your personal blocks and mutes" },
        { text: "Your personal account recovery methods" },
        { text: "Your personal privacy settings" },
        { text: "Your personal purchases or subscriptions" },
        { text: "Your personal profile or identity" },
        { text: "Your personal drafts or Studio projects (unless explicitly transferred)" },
      ],
    },
    {
      type: "paragraph",
      text: "Switching into a Workspace does not give the Workspace access to any of these personal items.",
    },

    { type: "heading", text: "Workspace authority limits" },
    {
      type: "paragraph",
      text: "Workspace authority never overrides:",
    },
    {
      type: "list",
      items: [
        { text: "Content rights or licensing restrictions" },
        { text: "Member blocks or mutes" },
        { text: "Legal restrictions or court orders" },
        { text: "Safety restrictions or child-safety protections" },
        { text: "Financial holds or fraud restrictions" },
        { text: "Platform enforcement decisions" },
        { text: "Age or territory restrictions" },
        { text: "Privacy or data-protection requirements" },
      ],
    },
    {
      type: "paragraph",
      text: "A Workspace owner cannot use their authority to bypass these higher-priority rules.",
    },

    { type: "heading", text: "Teams within a Workspace" },
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
    { type: "heading", text: "What Teams do", level: 3 },
    {
      type: "list",
      items: [
        { text: "Group members for easier collaboration and communication" },
        { text: "Assign project or channel visibility" },
        { text: "Organize members by function" },
      ],
    },
    { type: "heading", text: "What Teams do NOT do", level: 3 },
    {
      type: "list",
      items: [
        { text: "Override Workspace role permissions" },
        { text: "Grant owner-level authority" },
        { text: "Grant payout control or legal authority" },
        { text: "Grant data export access beyond the member's role" },
        { text: "Create a separate identity or account" },
      ],
    },
    {
      type: "paragraph",
      text: "A Team member's effective permissions are limited by their Workspace role. A Team can narrow access but cannot expand it beyond the role ceiling.",
    },

    { type: "heading", text: "Sensitive actions and separation of duties" },
    {
      type: "paragraph",
      text: "High-risk actions in a Workspace may require separation of duties, meaning the person who initiates an action cannot be the only person who approves it.",
    },
    {
      type: "paragraph",
      text: "Actions that may require separate approval include:",
    },
    {
      type: "list",
      items: [
        { text: "Transferring Workspace ownership" },
        { text: "Changing legal entity or tax profile" },
        { text: "Adding or changing a payout account" },
        { text: "Requesting or approving a payout above a threshold" },
        { text: "Approving a refund above a threshold" },
        { text: "Changing split recipients or percentages" },
        { text: "Submitting or disputing rights claims" },
        { text: "Accessing or exporting restricted audit data" },
        { text: "Responding to a legal request" },
        { text: "Managing staff-grade support or governance access" },
        { text: "Creating a high-privilege service account" },
        { text: "Rotating compromised integration credentials" },
        { text: "Bulk exporting member or customer data" },
        { text: "Disabling a security control" },
      ],
    },
    {
      type: "paragraph",
      text: "If your Workspace has multiple administrators, MusicOSY may require two-person approval for these actions. If you are the sole owner, a documented sole-owner exception may apply, but the action will still be audited.",
    },

    { type: "heading", text: "Object-level permissions" },
    {
      type: "paragraph",
      text: "In addition to Workspace roles, individual objects may have object-level permissions that narrow access further.",
    },
    {
      type: "paragraph",
      text: "For example:",
    },
    {
      type: "list",
      items: [
        { text: "A Studio project may be visible only to specific collaborators, even if other Workspace members have a \"Studio manager\" role." },
        { text: "A financial report may be visible only to members with \"Finance viewer\" or higher." },
        { text: "A sensitive rights document may be visible only to the \"Rights manager\" and \"Owner.\"" },
      ],
    },
    {
      type: "paragraph",
      text: "Object-level sharing specifies:",
    },
    {
      type: "list",
      items: [
        { text: "The recipient (member or Team)" },
        { text: "The scope (view, edit, review, export, publish)" },
        { text: "The expiration (if time-limited)" },
        { text: "The authority (who granted the access)" },
        { text: "The revocation behavior" },
      ],
    },
    {
      type: "paragraph",
      text: "Removing a member from a Workspace also removes their object-level access derived from that Workspace.",
    },

    { type: "heading", text: "Workspace billing" },
    {
      type: "paragraph",
      text: "If your Workspace uses paid features, Toolkits, or plans, billing is managed at the Workspace level.",
    },
    {
      type: "list",
      items: [
        { text: "The Workspace owner or an authorized billing administrator manages payment methods." },
        { text: "Workspace billing is separate from your personal billing." },
        { text: "A Workspace role must explicitly grant billing access; ordinary content editing does not grant it." },
        { text: "Consumer payment methods are not visible to collaborators, followers, creators, or ordinary Workspace members." },
        { text: "Payout method changes require elevated verification and may trigger fraud-protection review or cooling periods." },
      ],
    },

    { type: "heading", text: "Verification and enterprise features" },
    {
      type: "paragraph",
      text: "Some Workspace types or features may require additional verification:",
    },
    {
      type: "list",
      items: [
        { text: "Domain verification for organization-managed Workspaces" },
        { text: "Business verification for commercial or financial operations" },
        { text: "Single sign-on (SSO) configuration for enterprise Workspaces" },
        { text: "Directory provisioning (SCIM) for automated member management" },
        { text: "Session and device policies for enhanced security" },
      ],
    },
    {
      type: "paragraph",
      text: "These features are typically available for Organization-level Workspaces or through enterprise agreements.",
    },

    { type: "heading", text: "Leaving a Workspace" },
    {
      type: "paragraph",
      text: "You can leave a Workspace at any time.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Open the Workspace." },
        { text: "Go to Settings or your membership area." },
        { text: "Select Leave Workspace." },
        { text: "Confirm your decision." },
      ],
    },
    { type: "heading", text: "When you leave:", level: 3 },
    {
      type: "list",
      items: [
        { text: "You lose future access to Workspace projects, assets, and tools." },
        { text: "Your role and Team membership are removed." },
        { text: "Your contributions, audit history, and any pending rights or financial obligations are preserved." },
        { text: "You can be re-invited later if the Workspace owner chooses." },
      ],
    },
    {
      type: "paragraph",
      text: "Leaving a Workspace does not affect your personal account, Library, follows, messages, or other Workspaces.",
    },

    { type: "heading", text: "Removing a member from a Workspace" },
    {
      type: "paragraph",
      text: "A Workspace owner or administrator can remove a member.",
    },
    { type: "heading", text: "When a member is removed:", level: 3 },
    {
      type: "list",
      items: [
        { text: "They lose future access to Workspace projects, assets, and tools." },
        { text: "Their role and Team membership are revoked." },
        { text: "Their completed contributions, audit history, and applicable rights or financial records are preserved." },
        { text: "They do not lose their personal MusicOSY account or other Workspace memberships." },
      ],
    },
    {
      type: "paragraph",
      text: "Removal should be used carefully. If a member has pending work, financial obligations, or rights claims, consider resolving those before removal.",
    },

    { type: "heading", text: "If you do not recognize an invitation" },
    {
      type: "paragraph",
      text: "Do not accept a Workspace invitation from a person, artist, label, business, or organization you do not recognize.",
    },
    {
      type: "paragraph",
      text: "If you think an invitation is suspicious:",
    },
    {
      type: "list",
      items: [
        { text: "Decline the invitation." },
        { text: "Check the inviter's profile and public identity." },
        { text: "Contact the person through a trusted channel outside the invitation." },
        { text: "Report the invitation if you believe it is impersonation, spam, fraud, or abuse." },
      ],
    },
    {
      type: "paragraph",
      text: "MusicOSY will never ask you to accept a Workspace invitation to verify your account, unlock a feature, or resolve a security issue.",
    },

    { type: "heading", text: "Workspace lifecycle" },
    {
      type: "table",
      headers: ["State", "Meaning"],
      rows: [
        ["Draft", "Setup is in progress; limited configuration available"],
        ["Active", "The Workspace is operational and eligible for its configured capabilities"],
        ["Suspended", "One or more capabilities are limited under governance, finance, or security rules"],
        ["Archived", "The Workspace is retained but removed from ordinary active operations"],
        ["Delete pending", "The Workspace is scheduled for deletion; ordinary access is disabled"],
        ["Purged", "Eligible data has been removed, subject to retention rules"],
      ],
    },
    {
      type: "paragraph",
      text: "A Workspace may also be in a restricted, finance hold, or legal hold state, which limits specific capabilities while preserving records.",
    },
    {
      type: "paragraph",
      text: "Deleting or archiving a Workspace requires evaluation of:",
    },
    {
      type: "list",
      items: [
        { text: "Members and their roles" },
        { text: "Projects, catalog, and assets" },
        { text: "Orders, payments, and financial records" },
        { text: "Rights, splits, and payout obligations" },
        { text: "Active campaigns, events, or integrations" },
        { text: "Legal holds, safety cases, or audit requirements" },
      ],
    },
  ],
  related: [
    "/resources/help-center/getting-started/personal-profiles-vs-team-workspaces",
    "/resources/help-center/using-musicosy/creator-studio-and-workspaces/switch-workspaces",
    "/resources/help-center/using-musicosy/creator-studio-and-workspaces/workspace-roles-and-permissions",
    "/resources/help-center/using-musicosy/creator-studio-and-workspaces/invite-and-manage-workspace-members",
    "/resources/help-center/using-musicosy/creator-studio-and-workspaces/collaborate-in-studio",
    "/resources/help-center/using-musicosy/creator-studio-and-workspaces/creator-tools-and-eligibility",
    "/support/reports-and-appeals/report-impersonation",
    "/support/account-and-access/account-safety",
    "/resources/help-center/getting-started/personal-context-versus-workspace-context",
  ],
};
