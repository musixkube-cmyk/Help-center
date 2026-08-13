import type { Doc } from "./types";

/**
 * "Invite and manage workspace members" — Creator Studio & Workspaces doc.
 *
 * Covers: who can invite, the invitation workflow (steps, contents, rules,
 * role selection table), sensitive actions requiring separate permission,
 * Teams within a Workspace, pre-send review checklist, membership states
 * table, what happens on accept / what membership does NOT create, the
 * post-invite flow, changing roles, suspending, removing, re-invitation,
 * urgent-access removal, bulk operations, SSO/SCIM directory sync, and
 * the Personal-Context boundary.
 *
 * Content provided verbatim by the user; structured into blocks. Uses a
 * note callout for the "scoped contextual relationship" warning, 2 tables
 * (Choose the right role: Member/Possible access × 15 rows; Membership
 * states: State/Meaning × 8 rows), 3 ordered lists (invite steps,
 * role-change steps, removal steps), and many bulleted lists.
 */
export const inviteAndManageWorkspaceMembersDoc: Doc = {
  path: "/resources/help-center/using-musicosy/creator-studio-and-workspaces/invite-and-manage-workspace-members",
  blocks: [
    {
      type: "paragraph",
      text: "Invite members to a Workspace when they need to collaborate on shared music, projects, releases, events, catalog work, campaigns, or organization activity.",
    },
    {
      type: "paragraph",
      text: "Before you invite someone, make sure you are in the correct Workspace and understand what access they need. Workspace access should be intentional: each person should receive only the role and permissions required for their work.",
    },
    {
      type: "callout",
      variant: "note",
      title: "Note",
      text: "A Workspace membership is a scoped, contextual relationship. It does not create a personal follow, social connection, direct-message access, employment relationship, ownership stake, payout right, credit, or legal authority. A member’s Workspace role is limited to that specific Workspace and does not follow them elsewhere on MusicOSY.",
    },

    { type: "heading", text: "Who can invite members" },
    {
      type: "paragraph",
      text: "Only a Workspace owner or a member with permission to manage Workspace membership can invite someone.",
    },
    {
      type: "paragraph",
      text: "Your ability to invite may depend on:",
    },
    {
      type: "list",
      items: [
        { text: "Your Workspace role" },
        { text: "Your specific member-management permission" },
        { text: "The Workspace plan or Toolkit access" },
        { text: "Available seats or member limits" },
        { text: "Approval requirements" },
        { text: "Workspace status (active, suspended, restricted)" },
        { text: "Safety, rights, financial, or other platform restrictions" },
      ],
    },
    {
      type: "paragraph",
      text: "Being able to view a Workspace does not automatically mean you can invite other people. Viewing, editing, publishing, managing, billing, and administering are distinct permission levels.",
    },

    { type: "heading", text: "Invite a member" },
    { type: "heading", text: "Steps to invite", level: 3 },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Switch to the Workspace you want to manage." },
        { text: "Open the Team, Members, Roster, or member-management area." },
        { text: "Select Invite member." },
        { text: "Search for the MusicOSY member you want to invite by their display name, @handle, or email address." },
        { text: "Choose the role and permissions they need." },
        { text: "Optionally assign them to a Team within the Workspace." },
        { text: "Review what the selected role allows the member to view, edit, publish, manage, or administer." },
        { text: "Add a message if your Workspace supports invitation notes." },
        { text: "Review the invitation carefully." },
        { text: "Select Send invite." },
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
        { text: "The Team assignment, if applicable" },
        { text: "The access and permissions the role provides" },
        { text: "Any verification or approval requirements" },
        { text: "The invitation expiration date" },
        { text: "Relevant plan, seat, or license conditions" },
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
        { text: "Acceptance must re-evaluate the recipient’s account status, organization restrictions, Workspace capacity, plan/seat availability, age/legal eligibility, and required verification." },
        { text: "An invitation does not grant access before acceptance and activation." },
        { text: "Expired, revoked, declined, or accepted invitations cannot be reused." },
      ],
    },
    {
      type: "paragraph",
      text: "A recipient can decline an invitation without providing a reason. They can also report, block, or decline abusive invitations.",
    },

    { type: "heading", text: "Choose the right role" },
    {
      type: "paragraph",
      text: "Give each person the lowest level of access they need to do their work.",
    },
    {
      type: "paragraph",
      text: "For example:",
    },
    {
      type: "table",
      headers: ["Member", "Possible access"],
      rows: [
        ["Producer", "Shared Studio projects, approved production tools, collaboration tasks"],
        ["Editor", "Approved project, media, metadata, or content editing"],
        ["Content publisher", "Create and manage authorized content and catalog publication"],
        ["Studio manager", "Manage authorized Studio projects, assets, and collaboration"],
        ["Rights manager", "Handle scoped catalog, metadata, claim, and distribution-right workflows"],
        ["Commerce manager", "Manage eligible offers, listings, orders, and customer workflows"],
        ["Finance viewer", "View permitted financial reports and statements"],
        ["Finance approver", "Approve scoped refunds, splits, payouts, or adjustments under separation rules"],
        ["Marketing manager", "Manage eligible campaigns, promotions, and audience-facing activity"],
        ["Event manager", "Manage authorized events, tickets, attendees, and live operations"],
        ["Developer administrator", "Manage Workspace integrations, API credentials, and webhooks"],
        ["Analyst", "View authorized aggregate analytics"],
        ["Support agent", "Handle scoped support without unrestricted account, financial, or case access"],
        ["Contributor", "Work on assigned projects or content without administrative authority"],
        ["Viewer", "View authorized Workspace material only"],
        ["Administrator", "Workspace settings, member management, and authorized Workspace administration"],
      ],
    },

    { type: "heading", text: "Sensitive actions require separate permission" },
    {
      type: "paragraph",
      text: "Some actions require specific permission even when a member has a broad role. These include:",
    },
    {
      type: "list",
      items: [
        { text: "Publishing or unpublishing content" },
        { text: "Deleting a project or release" },
        { text: "Transferring ownership" },
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
        { text: "Accessing or exporting restricted audit data" },
        { text: "Responding to a legal request" },
        { text: "Bulk exporting member or customer data" },
        { text: "Disabling a security control" },
      ],
    },
    {
      type: "paragraph",
      text: "If your Workspace has multiple administrators, MusicOSY may require two-person approval for these actions.",
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

    { type: "heading", text: "Assigning a Team during invitation", level: 3 },
    {
      type: "paragraph",
      text: "When inviting a member, you can optionally assign them to a Team. Team assignment:",
    },
    {
      type: "list",
      items: [
        { text: "Groups the member for easier collaboration and communication" },
        { text: "May assign project or channel visibility" },
        { text: "Organizes the member by function" },
      ],
    },

    { type: "heading", text: "What Teams do NOT do", level: 3 },
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

    { type: "heading", text: "Review an invitation before sending" },
    {
      type: "paragraph",
      text: "Before you send an invitation, confirm:",
    },
    {
      type: "list",
      items: [
        { text: "You selected the correct Workspace" },
        { text: "You selected the correct person" },
        { text: "The role matches their responsibility" },
        { text: "The Team assignment is appropriate (if applicable)" },
        { text: "The member needs access now" },
        { text: "The invitation does not provide unnecessary financial, rights, catalog, billing, publishing, or administrative access" },
        { text: "You recognize and trust the person you are inviting" },
        { text: "The Workspace has available seats or capacity" },
      ],
    },
    {
      type: "paragraph",
      text: "Do not invite someone to a Workspace simply because they follow you, comment on your content, or claim to represent an artist, label, brand, or organization. Verify their identity and authority through a trusted channel before granting access.",
    },

    { type: "heading", text: "Membership states" },
    {
      type: "paragraph",
      text: "A Workspace membership moves through these states:",
    },
    {
      type: "table",
      headers: ["State", "Meaning"],
      rows: [
        ["Invited", "The member has received an invitation but has not yet responded"],
        ["Pending approval", "The Workspace requires approval before the member can join"],
        ["Active", "The member is a current member with the assigned role"],
        ["Suspended", "The member’s access is temporarily limited"],
        ["Removed", "The member has been removed by an administrator or owner"],
        ["Left", "The member chose to leave the Workspace"],
        ["Expired", "The membership ended due to time limits or plan changes"],
        ["Declined", "The member declined the invitation"],
      ],
    },

    { type: "heading", text: "What happens when someone accepts" },
    {
      type: "paragraph",
      text: "When a member accepts an invitation:",
    },
    {
      type: "list",
      items: [
        { text: "MusicOSY grants them only the role and permissions selected in the invitation." },
        { text: "They gain access to the Workspace’s shared projects, assets, and tools as permitted by their role." },
        { text: "They can switch into the Workspace context using the Workspace switcher." },
        { text: "Their membership is recorded with the Workspace, including their role, join date, and the invitation source." },
      ],
    },

    { type: "heading", text: "What membership does NOT create" },
    {
      type: "paragraph",
      text: "A Workspace invitation and membership do not:",
    },
    {
      type: "list",
      items: [
        { text: "Create a personal follow or social connection" },
        { text: "Grant direct-message access in Backstage" },
        { text: "Create employment, representation, or agency relationships" },
        { text: "Grant ownership of the Workspace or its assets" },
        { text: "Create a payout right or financial entitlement" },
        { text: "Grant access to the inviter’s personal profile, Library, or private activity" },
        { text: "Create a credit, contribution, or authorship claim" },
        { text: "Override personal blocks, mutes, or privacy settings" },
      ],
    },

    { type: "heading", text: "What happens after you invite someone" },
    {
      type: "paragraph",
      text: "The invited member receives a Workspace invitation through Signal Center, email, or another supported notification channel.",
    },
    {
      type: "paragraph",
      text: "They can review the invitation and choose to accept or decline it.",
    },
    {
      type: "paragraph",
      text: "Until they accept, they do not receive Workspace access.",
    },
    {
      type: "paragraph",
      text: "If they accept, MusicOSY grants only the role and permissions selected in the invitation. A Workspace invitation does not give a member access to your personal profile, Library, Keeps, Setlists, Backstage messages, account settings, or private activity.",
    },
    {
      type: "paragraph",
      text: "Workspace invitations may expire, be revoked, or become unavailable if the Workspace changes, the role is no longer available, or the invitation cannot be completed safely.",
    },

    { type: "heading", text: "Change a member’s role" },
    {
      type: "paragraph",
      text: "Update a member’s role when their responsibilities change.",
    },
    { type: "heading", text: "Steps to change a role", level: 3 },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Switch to the correct Workspace." },
        { text: "Open the member-management area." },
        { text: "Select the member whose access you want to update." },
        { text: "Select Change role or Edit permissions." },
        { text: "Choose the new role or permission level." },
        { text: "Review the impact of the change." },
        { text: "Confirm the update." },
      ],
    },

    { type: "heading", text: "What happens when a role changes", level: 3 },
    {
      type: "list",
      items: [
        { text: "The member’s new permissions take effect promptly across all Workspace surfaces, tools, and integrations." },
        { text: "Their previous permissions are revoked." },
        { text: "Active sessions and realtime subscriptions are re-evaluated." },
        { text: "Relevant tokens, share links, caches, and realtime topics are invalidated." },
        { text: "MusicOSY may send a Signal Center notification explaining that their Workspace access has been updated." },
      ],
    },
    {
      type: "paragraph",
      text: "A role change affects what the member can do going forward. It does not erase required project, financial, rights, approval, or audit records connected to work they already completed.",
    },

    { type: "heading", text: "Suspend a member" },
    {
      type: "paragraph",
      text: "Suspending a member temporarily limits their Workspace access without fully removing them.",
    },
    {
      type: "paragraph",
      text: "Suspension may be appropriate when:",
    },
    {
      type: "list",
      items: [
        { text: "An investigation is in progress" },
        { text: "A member’s account is under review" },
        { text: "A security concern requires temporary access limitation" },
        { text: "A member’s role is being reassessed" },
      ],
    },
    {
      type: "paragraph",
      text: "During suspension:",
    },
    {
      type: "list",
      items: [
        { text: "The member cannot access Workspace tools, projects, or assets." },
        { text: "Their membership record is preserved." },
        { text: "They can be reinstated without a new invitation if the suspension is lifted." },
      ],
    },
    {
      type: "paragraph",
      text: "Suspension is distinct from removal. A suspended member retains their membership record and can be restored. A removed member must be re-invited to regain access.",
    },

    { type: "heading", text: "Remove a member" },
    {
      type: "paragraph",
      text: "Remove someone from a Workspace when they no longer need access, leave the team, change roles outside MusicOSY, or should no longer be able to view or manage shared work.",
    },
    { type: "heading", text: "Steps to remove", level: 3 },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Switch to the correct Workspace." },
        { text: "Open the member-management area." },
        { text: "Select the member you want to remove." },
        { text: "Select Remove from Workspace." },
        { text: "Review the consequences." },
        { text: "Confirm the removal." },
      ],
    },

    { type: "heading", text: "What happens when a member is removed", level: 3 },
    {
      type: "list",
      items: [
        { text: "They lose future access to Workspace projects, assets, tools, and shared areas." },
        { text: "Their role and Team membership are revoked." },
        { text: "Object-level access derived from that Workspace is revoked." },
        { text: "Relevant tokens, share links, caches, and realtime subscriptions are invalidated." },
        { text: "Their completed contributions, audit history, and applicable rights or financial dependencies are preserved." },
        { text: "They do not lose their personal MusicOSY account or other Workspace memberships." },
      ],
    },
    {
      type: "paragraph",
      text: "Removing a member does not delete their personal MusicOSY account. It also does not erase required records related to shared releases, financial activity, rights, approvals, completed work, safety, or audit history.",
    },

    { type: "heading", text: "Re-invitation" },
    {
      type: "paragraph",
      text: "A removed member can be re-invited later if the Workspace owner or administrator chooses. Re-invitation creates a new membership record and does not automatically restore their previous role, Team assignment, or object-level permissions.",
    },

    { type: "heading", text: "Remove access quickly when needed" },
    {
      type: "paragraph",
      text: "If a member’s access creates an immediate risk to a project, catalog, finances, rights, team safety, or organization security, remove or restrict their Workspace access as soon as you have the authority to do so.",
    },
    {
      type: "paragraph",
      text: "For urgent concerns involving:",
    },
    {
      type: "list",
      items: [
        { text: "Impersonation" },
        { text: "Fraud" },
        { text: "Harassment" },
        { text: "Compromised accounts" },
        { text: "Rights misuse" },
        { text: "Safety threats" },
        { text: "Unauthorized data access" },
      ],
    },
    {
      type: "paragraph",
      text: "Remove or suspend the member immediately, then report the issue through the appropriate MusicOSY reporting or Support channel.",
    },
    {
      type: "paragraph",
      text: "If you are using enterprise features like SSO or SCIM directory provisioning, a deprovision event from your identity provider may automatically suspend or remove Workspace access. This preserves relevant projects, contributions, financial, rights, legal, and audit records.",
    },

    { type: "heading", text: "Manage members in bulk" },
    {
      type: "paragraph",
      text: "If your Workspace or Organization supports bulk operations, you may be able to:",
    },
    {
      type: "list",
      items: [
        { text: "Invite multiple members at once (where governed)" },
        { text: "Assign roles in bulk" },
        { text: "Assign Teams in bulk" },
        { text: "Export member lists" },
        { text: "Review membership audits" },
      ],
    },
    {
      type: "paragraph",
      text: "Bulk operations require appropriate authority and are subject to additional review, audit, and safety controls. A bulk invitation must still identify each recipient, role, and access scope individually.",
    },

    { type: "heading", text: "Membership and directory sync" },
    {
      type: "paragraph",
      text: "If your Organization uses SSO (Single Sign-On) or SCIM (System for Cross-domain Identity Management) for directory provisioning:",
    },
    {
      type: "list",
      items: [
        { text: "Members may be automatically provisioned or deprovisioned based on your identity provider." },
        { text: "A deprovision event suspends or removes Workspace access promptly." },
        { text: "Deprovisioning does not automatically purge user data." },
        { text: "Members retain their contribution history, audit records, and applicable financial or rights records." },
        { text: "Re-provisioning may restore access according to current Workspace configuration." },
      ],
    },
    {
      type: "paragraph",
      text: "Contact your Organization administrator if you have questions about directory-sync behavior.",
    },

    { type: "heading", text: "Membership and Personal Context" },
    {
      type: "paragraph",
      text: "A Workspace membership is separate from your Personal Context.",
    },
    {
      type: "paragraph",
      text: "Joining a Workspace does not:",
    },
    {
      type: "list",
      items: [
        { text: "Change your personal profile" },
        { text: "Give the Workspace access to your personal Library" },
        { text: "Give the Workspace access to your Backstage messages" },
        { text: "Give the Workspace access to your personal purchases" },
        { text: "Give the Workspace access to your account settings" },
        { text: "Give the Workspace access to your personal Studio projects (unless explicitly shared)" },
        { text: "Change your personal billing or payment methods" },
      ],
    },
    {
      type: "paragraph",
      text: "Similarly, your Workspace role does not give you access to another member’s personal account, private content, private messages, financial information, or account settings.",
    },
  ],
  related: [
    "/resources/help-center/using-musicosy/creator-studio-and-workspaces/create-or-join-a-workspace",
    "/resources/help-center/using-musicosy/creator-studio-and-workspaces/switch-workspaces",
    "/resources/help-center/using-musicosy/creator-studio-and-workspaces/workspace-roles-and-permissions",
    "/resources/help-center/getting-started/personal-context-versus-workspace-context",
    "/resources/help-center/using-musicosy/creator-studio-and-workspaces/collaborate-in-studio",
    "/support/account-and-access/account-safety",
    "/support/reports-and-appeals/report-impersonation",
    "/resources/help-center/getting-started/understanding-your-toolkits-and-upgrades",
  ],
};
