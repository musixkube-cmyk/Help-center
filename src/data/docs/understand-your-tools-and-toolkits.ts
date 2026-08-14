import type { Doc } from "./types";

/**
 * "Understand your tools and Toolkits" — Getting Started doc explaining
 * MusicOSY's capability model. Everyone joins as a member and can create;
 * Toolkits are bundles of expanded capability (Production, Podcast & Live,
 * Creator Business, Catalog/Rights/Distribution, Label & Team, Touring,
 * Growth & Marketing, Advertising). Covers the 5 capability layers, the
 * included Creator Foundation, My Tools / Studio Allowances, how Toolkits
 * are granted, and the "Open More Tools" upgrade experience.
 *
 * Content provided verbatim by the user; structured into blocks. Uses a
 * 5-row capability-layer table, an 8-section Toolkit catalog, multiple
 * bold lead-in lists, and a note callout.
 *
 * NOTE: nav node label is currently "Understanding your Toolkits and
 * upgrades" (path .../understanding-your-toolkits-and-upgrades). The doc
 * title here is the user's preferred wording "Understand your tools and
 * Toolkits" — both render off the same path. Label alignment is a
 * separate route-tree decision for the user.
 */
export const understandYourToolsAndToolkitsDoc: Doc = {
  path: "/resources/help-center/getting-started/understanding-your-toolkits-and-upgrades",
  blocks: [
    {
      type: "paragraph",
      text: "MusicOSY is built on a simple principle: everyone joins as a member, and everyone can create.",
    },
    {
      type: "paragraph",
      text: "You do not need to declare yourself an \"artist,\" \"label,\" or \"producer\" to start making music. You do not need to pay a gatekeeper to publish your first song. MusicOSY is designed to let you begin your creative journey immediately, inside the same social home where you listen, discover, and connect.",
    },
    {
      type: "paragraph",
      text: "As your music life grows, you may need more capability: deeper Studio tools, longer Live Sessions, more collaborators, selling tools, rights management, distribution, touring support, or advertising tools. That is where Toolkits come in.",
    },
    {
      type: "paragraph",
      text: "A Toolkit is a bundle of expanded MusicOSY capabilities designed for a specific kind of work. You choose Toolkits based on what you need to do—not based on your identity. A fan who makes one song is a creator. A producer who follows artists is also a fan. MusicOSY supports all of these realities with the same account.",
    },

    { type: "heading", text: "The 5 Capability Layers" },
    {
      type: "paragraph",
      text: "To understand how tools appear, it helps to understand the five capability layers of MusicOSY. You move through these layers based on your activity, not your title.",
    },
    {
      type: "table",
      headers: ["Layer", "How it is accessed"],
      rows: [
        [
          "Social Membership (Included)",
          "Listening, discovering, following, posting, commenting, building Setlists, and attending events.",
        ],
        [
          "Creator Foundation (Included)",
          "Uploading your first songs, basic in-app recording, basic publishing, starter templates, and a public creator profile section.",
        ],
        [
          "Production Tools (Metered/Upgraded)",
          "Advanced DAW depth, AI generation, mastering, stems, and higher processing limits.",
        ],
        [
          "Business Operations (Enabled by activity/upgrade)",
          "Selling merch, managing subscriptions, ticketing, and advanced catalog rights.",
        ],
        [
          "Enterprise Operations (Enabled by organization plan)",
          "Label roster management, white-label distribution, and programmatic advertising.",
        ],
      ],
    },
    {
      type: "paragraph",
      text: "The core rule: MusicOSY does not gate identity or the ability to create. We gate scale, power, processing cost, operating complexity, and business infrastructure.",
    },

    { type: "heading", text: "The Creator Foundation (Included for Everyone)" },
    {
      type: "paragraph",
      text: "Before exploring Toolkits, it is important to know what you already have. Every MusicOSY member has access to the Creator Foundation at no extra cost. This includes:",
    },
    {
      type: "list",
      items: [
        {
          lead: "Starter Studio:",
          text: "Basic music, podcast, and video recording and editing in the browser or app.",
        },
        {
          lead: "Starter Publishing:",
          text: "Uploading and publishing a limited number of songs, videos, and posts.",
        },
        {
          lead: "Basic Catalog:",
          text: "A personal creator profile section to display your public releases.",
        },
        {
          lead: "Starter Analytics:",
          text: "Basic insights into your streams, views, and audience.",
        },
        {
          lead: "Basic Collaboration:",
          text: "Inviting a limited number of collaborators to your projects.",
        },
      ],
    },
    {
      type: "paragraph",
      text: "You can build a complete public presence, release music, and grow an audience using only the Creator Foundation.",
    },

    { type: "heading", text: "What is a Toolkit?" },
    {
      type: "paragraph",
      text: "A Toolkit gives you additional features, capacity, controls, or services for a specific part of MusicOSY. Think of them as professional modules inside the same social app. You only open them when you need them.",
    },
    {
      type: "paragraph",
      text: "Toolkits can become available through:",
    },
    {
      type: "list",
      items: [
        { text: "A personal Toolkit Plan or Membership Plan purchase." },
        {
          text: "A Workspace grant (e.g., your label or band pays for the Toolkit, and you access it via your Workspace role).",
        },
        { text: "Verification or an approved enterprise agreement." },
        { text: "Usage-based eligibility or platform invitations." },
      ],
    },

    { type: "heading", text: "My Tools and Studio Allowances" },
    {
      type: "paragraph",
      text: "Open My Tools from your main navigation to see your current creative and business operating view (your Control Room).",
    },
    {
      type: "paragraph",
      text: "My Tools helps you:",
    },
    {
      type: "list",
      items: [
        { text: "See what is included with your current access." },
        {
          text: "Monitor your Studio Allowances (usage limits for storage, render minutes, AI credits, and live hours).",
        },
        {
          text: "View available Toolkits and Open More Tools (upgrade) when you hit a ceiling.",
        },
        { text: "See Toolkits granted to you through a Workspace." },
        {
          text: "Review tools that require verification, tax setup, or permission.",
        },
      ],
    },
    {
      type: "paragraph",
      text: "If a tool is locked, MusicOSY will show a clear reason—such as needing a plan upgrade, Workspace permission, identity verification, or available Studio Allowance.",
    },

    { type: "heading", text: "The MusicOSY Toolkits" },

    { type: "heading", text: "1. Production Toolkit", level: 3 },
    {
      type: "paragraph",
      text: "For members who want to make more music and do more inside Studio.",
    },
    {
      type: "paragraph",
      text: "When basic creation is no longer enough for the kind of music you want to make, the Production Toolkit unlocks professional-grade audio capabilities.",
    },
    {
      type: "list",
      items: [
        {
          lead: "Advanced Music Studio:",
          text: "Deep DAW editing, advanced effect chains, and DSP effects.",
        },
        {
          lead: "Audio Intelligence:",
          text: "Stem separation, advanced audio analysis, and high-resolution audio export.",
        },
        {
          lead: "Mastering & Enhancement:",
          text: "Pro mastering profiles and audio cleanup tools.",
        },
        {
          lead: "Libraries:",
          text: "Access to expanded sample libraries, sound effects, loops, and one-shots.",
        },
        {
          lead: "AI & Processing:",
          text: "More AI music assistance, AI pitching agents, and increased AI generation credits.",
        },
        {
          lead: "Capacity:",
          text: "More active projects, expanded cloud storage, and higher render minutes.",
        },
      ],
    },

    { type: "heading", text: "2. Podcast & Live Toolkit", level: 3 },
    {
      type: "paragraph",
      text: "For members building live shows, podcasts, interviews, and performance experiences.",
    },
    {
      type: "paragraph",
      text: "Choose this Toolkit when you are ready to Take the Stage more often, bring more people into the session, or produce a broadcast-quality live or podcast experience.",
    },
    {
      type: "list",
      items: [
        {
          lead: "Live Production:",
          text: "Longer Live Sessions, more Featured Guests, Green Room/Waiting Room controls, and scene switching.",
        },
        {
          lead: "Broadcast Tools:",
          text: "Lower thirds, tickers, overlays, and simulcast to multiple external destinations.",
        },
        {
          lead: "Podcast Studio:",
          text: "Remote high-quality recording, local isolated participant tracks (ISO), and advanced episode analytics.",
        },
        {
          lead: "Monetization:",
          text: "Commercial insertion, dynamic ad insertion (DAI), and live tip jars.",
        },
        {
          lead: "Accessibility:",
          text: "Advanced live captions and automated transcript generation.",
        },
      ],
    },

    { type: "heading", text: "3. Creator Business Toolkit", level: 3 },
    {
      type: "paragraph",
      text: "For creators turning their work into a business and building a supporter community.",
    },
    {
      type: "paragraph",
      text: "Choose this Toolkit when you are ready to sell, manage a storefront, or offer exclusive access to your fans.",
    },
    {
      type: "list",
      items: [
        {
          lead: "Merch Table:",
          text: "Full creator storefront for physical merchandise, print-on-demand integration, and inventory management.",
        },
        {
          lead: "Digital Commerce:",
          text: "Paid downloads, rentals, and digital product sales.",
        },
        {
          lead: "Fan Relationships:",
          text: "Create subscription tiers (Join the Circle), offer subscriber-only content, and manage your Love Jar (tips).",
        },
        {
          lead: "Ticketing:",
          text: "Sell tickets for local, online, or hybrid events.",
        },
        {
          lead: "Promotions:",
          text: "Create discount codes, bundles, and paid download offers.",
        },
        {
          lead: "Insights:",
          text: "Advanced sales, revenue, and customer analytics.",
        },
      ],
    },

    { type: "heading", text: "4. Catalog, Rights & Distribution Toolkit", level: 3 },
    {
      type: "paragraph",
      text: "For creators, teams, and organizations managing music beyond a single release.",
    },
    {
      type: "paragraph",
      text: "Choose this Toolkit when you are managing multiple releases, contributors, rights relationships, or external distribution destinations.",
    },
    {
      type: "list",
      items: [
        {
          lead: "Catalog Management:",
          text: "Large-catalog workflows, metadata registry, and release scheduling.",
        },
        {
          lead: "Rights & Finance:",
          text: "Contributor credits, Split Sheets (revenue/rights allocation), royalty calculations, and payable balances.",
        },
        {
          lead: "Audio Intelligence:",
          text: "Music fingerprinting, Sound Match (Content ID), and rights claims management.",
        },
        {
          lead: "Distribution:",
          text: "Digital, physical, and omni-channel distribution to external DSPs and stores.",
        },
        {
          lead: "Delivery:",
          text: "Delivery status tracking, error management, and takedown/counterclaim workflows.",
        },
      ],
    },

    { type: "heading", text: "5. Label & Team Toolkit", level: 3 },
    {
      type: "paragraph",
      text: "For people working together in shared Workspaces (Labels, Management, Networks).",
    },
    {
      type: "paragraph",
      text: "Choose this Toolkit when you are operating a roster, managing a team, or handling shared organizational assets.",
    },
    {
      type: "list",
      items: [
        {
          lead: "Roster Management:",
          text: "Manage multiple artists, shared catalogs, and shared media/asset libraries (Enterprise DAM).",
        },
        {
          lead: "Team Operations:",
          text: "Advanced Workspace roles, team invitations, and approval workflows for releases and marketing.",
        },
        {
          lead: "Financials:",
          text: "Shared financial reporting, team billing, and organization-wide analytics.",
        },
        {
          lead: "White-Label:",
          text: "White-label distribution headers and customized organization branding.",
        },
        {
          lead: "Dashboards:",
          text: "Dedicated Label, Publisher, Distributor, and Manager operations dashboards.",
        },
      ],
    },

    { type: "heading", text: "6. Touring Toolkit", level: 3 },
    {
      type: "paragraph",
      text: "For artists and managers taking their music on the road.",
    },
    {
      type: "paragraph",
      text: "Choose this Toolkit when you are planning events, routing tours, and managing physical operations.",
    },
    {
      type: "list",
      items: [
        {
          lead: "Tour Planning:",
          text: "Tour routing, calendar management, and Roadbook (itinerary, travel, hospitality, and production requirements).",
        },
        {
          lead: "Venue Operations:",
          text: "Venue management, capacity tracking, and day-of-show runbooks.",
        },
        {
          lead: "Merch Run:",
          text: "Tour-specific merchandise inventory allocation, booth sales tracking, and stock in transit.",
        },
        {
          lead: "Tour Finance:",
          text: "Tour budgeting, venue/promoter settlement, expense tracking, and tour closeout reporting.",
        },
      ],
    },

    { type: "heading", text: "7. Growth & Marketing Toolkit", level: 3 },
    {
      type: "paragraph",
      text: "For creators and teams running campaigns and capturing audiences.",
    },
    {
      type: "list",
      items: [
        {
          lead: "Press & EPK:",
          text: "Build and share Electronic Press Kits (EPKs) and smart links.",
        },
        {
          lead: "Fan Capture:",
          text: "Email capture, audience segmentation, and landing pages.",
        },
        {
          lead: "Campaigns:",
          text: "Release campaigns, automated promotion, and omni-social publishing/syndication.",
        },
        {
          lead: "Booking:",
          text: "Tour routing, agency operations, and brand partnership management.",
        },
      ],
    },

    { type: "heading", text: "8. Advertising Toolkit (AdNote)", level: 3 },
    {
      type: "paragraph",
      text: "For creators promoting their own work, and brands running campaigns.",
    },
    {
      type: "list",
      items: [
        {
          lead: "Creator Promotion:",
          text: "Amplify your songs, videos, Merch Table drops, or events directly from your profile.",
        },
        {
          lead: "Advertiser Platform:",
          text: "Campaign builder, audience targeting (genre, geography, creator-audience), and budget/bidding controls.",
        },
        {
          lead: "Inventory:",
          text: "Audio ads, video ads, feed ads, and sponsored content.",
        },
        {
          lead: "Measurement:",
          text: "Conversion tracking, brand safety controls, and campaign analytics.",
        },
      ],
    },

    { type: "heading", text: "How Toolkits are Granted" },
    {
      type: "paragraph",
      text: "You do not need to buy every Toolkit yourself. Access is dynamic and based on your context:",
    },
    {
      type: "list",
      items: [
        {
          lead: "Personal Purchase:",
          text: "You buy a Toolkit Plan or Membership Plan for your Personal Context.",
        },
        {
          lead: "Workspace Grant:",
          text: "You join a Label or Band Workspace that has already purchased the Label & Team Toolkit or Catalog Toolkit. You inherit the tools permitted by your assigned Workspace Role (e.g., a \"Producer\" role gets Studio tools; a \"Finance\" role gets Split Sheet access).",
        },
        {
          lead: "Verification/Agreement:",
          text: "Certain enterprise tools (like programmatic SSP advertising or blanket licensing) require platform approval, legal agreements, or business verification.",
        },
      ],
    },
    {
      type: "callout",
      variant: "note",
      text: "Switching from your Personal Context to a Workspace Context changes the tools you see, but it does not change your personal identity, Library, or social graph.",
    },

    { type: "heading", text: "Upgrading: \"Open More Tools\"" },
    {
      type: "paragraph",
      text: "You do not need every Toolkit at once. Upgrade when you reach a real need.",
    },
    {
      type: "paragraph",
      text: "The upgrade experience is designed to feel like: \"My music is growing; I need more power.\" It should never feel like: \"Pay us before you are allowed to be an artist.\"",
    },
    {
      type: "paragraph",
      text: "When you hit a Studio Allowance limit (e.g., you run out of AI credits, render minutes, or storage) or need a gated feature (e.g., external distribution or Split Sheets), MusicOSY will prompt you to Open More Tools.",
    },
    { type: "heading", text: "What happens when you upgrade?", level: 3 },
    {
      type: "list",
      items: [
        { text: "Your new tools unlock immediately across your eligible surfaces." },
        { text: "Your Studio Allowances reset or expand." },
        {
          text: "Your MusicOSY identity does not change. You are still the same member with the same profile, Keeps, Setlists, follows, and Backstage conversations.",
        },
        {
          text: "You can downgrade or cancel a Toolkit Plan at the end of your billing cycle, though you may lose access to advanced features or exceed your new storage limits (requiring you to archive older projects).",
        },
      ],
    },
  ],
  related: [
    "/resources/help-center/getting-started/what-is-musicosy",
    "/resources/help-center/using-musicosy/create-and-publish/create-on-musicosy",
    "/resources/help-center/using-musicosy/create-and-publish/what-is-studio",
    "/resources/help-center/using-musicosy/creator-studio-and-workspaces/set-up-your-creator-profile-and-artist-page",
    "/resources/help-center/getting-started/personal-context-versus-workspace-context",
    "/resources/help-center/using-musicosy/creator-studio-and-workspaces/create-or-join-a-workspace",
    "/resources/help-center/using-musicosy/creator-studio-and-workspaces/workspace-roles-and-permissions",
    "/resources/help-center/using-musicosy/creator-studio-and-workspaces/view-creator-analytics",
    "/resources/help-center/using-musicosy/creator-studio-and-workspaces/manage-your-catalog",
  ],
};
