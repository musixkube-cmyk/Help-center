export type NavNode = {
  label: string;
  path: string;
  blurb?: string;
  children?: NavNode[];
};

const slug = (s: string) =>
  s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

/** Build a node tree, assigning paths from parent path + slug(label). */
function build(
  base: string,
  items: Array<string | [string, string[] | NavNode[]]>,
): NavNode[] {
  return items.map((item) => {
    if (typeof item === "string") {
      return { label: item, path: `${base}/${slug(item)}` };
    }
    const [label, kids] = item;
    const path = `${base}/${slug(label)}`;
    return {
      label,
      path,
      children: build(path, kids as Array<string | [string, string[]]>),
    };
  });
}

/**
 * Mega menu — hosts the help-center documents only.
 * Every top-level item is a help-center category; children are document
 * groups that surface in the mega panel columns. No product/music entries.
 */
export const megaMenu: NavNode[] = [
  {
    label: "Help Center",
    path: "/resources/help-center",
    blurb: "Getting started, using Musicosy, and finding resources.",
    children: [
      { label: "Getting Started", path: "/resources/help-center/getting-started" },
      { label: "Using Musicosy", path: "/resources/help-center/using-musicosy" },
      { label: "New User FAQ", path: "/resources/new-user-faq" },
      { label: "Resources & Guides", path: "/resources/guides" },
      { label: "Glossary", path: "/resources/glossary" },
      { label: "Company News / Blog", path: "/resources/blog" },
    ],
  },
  {
    label: "Support Center",
    path: "/support",
    blurb: "Account help, reporting, payments, and technical support.",
    children: [
      { label: "Account & Access", path: "/support/account-and-access" },
      { label: "Reports & Appeals", path: "/support/reports-and-appeals" },
      { label: "Payments & Purchases", path: "/support/payments-and-purchases" },
      { label: "Technical Support", path: "/support/technical-support" },
      { label: "Sign In", path: "/support/sign-in" },
      { label: "Contact Us", path: "/support/contact-us" },
    ],
  },
  {
    label: "Trust & Policies",
    path: "/privacy-and-safety",
    blurb: "Safety controls, privacy rights, and transparency reports.",
    children: [
      { label: "Safety & Security", path: "/privacy-and-safety/safety-and-security" },
      { label: "Privacy Center", path: "/privacy-and-safety/privacy" },
      { label: "Transparency Center", path: "/legal-and-policies/transparency-center" },
      { label: "Report a Safety Issue", path: "/support/reports-and-appeals" },
    ],
  },
  {
    label: "Legal Center",
    path: "/legal-and-policies",
    blurb: "Terms of use, copyright, IP, distribution agreements and policies.",
    children: [
      { label: "Terms of Use", path: "/legal-and-policies/terms-of-use" },
      { label: "Copyright & IP", path: "/legal-and-policies/copyright-and-ip" },
      { label: "Law Enforcement", path: "/legal-and-policies/law-enforcement" },
      { label: "Our Rules", path: "/legal-and-policies/our-rules" },
    ],
  },
];

/**
 * Footer navigation — six flat columns (no nesting, no duplicates).
 *
 *   Help & Support · Resources · Trust & Policies · For the Music Industry
 *   · Business · Company
 *
 * Every path is folded into `allNav` (via flatten) so the catch-all page
 * resolves every footer link.
 */
export const footerNav: NavNode[] = [
  {
    label: "Help & Support",
    path: "/resources/help-center",
    children: [
      { label: "Help Center", path: "/resources/help-center" },
      { label: "Using Musicosy", path: "/resources/help-center/using-musicosy" },
      { label: "Support Center", path: "/support" },
      { label: "Account & Access", path: "/support/account-and-access" },
      { label: "New User FAQ", path: "/resources/new-user-faq" },
      { label: "Sign In", path: "/support/sign-in" },
      { label: "Email Preference Center", path: "/support/email-preferences" },
      { label: "Contact Us", path: "/support/contact-us" },
    ],
  },
  {
    label: "Resources",
    path: "/resources",
    children: [
      { label: "Resources Home", path: "/resources" },
      { label: "Resources & Guides", path: "/resources/guides" },
      { label: "Glossary", path: "/resources/glossary" },
      { label: "Accessibility", path: "/resources/accessibility" },
      { label: "Company News", path: "/resources/blog" },
    ],
  },
  {
    label: "Trust & Policies",
    path: "/privacy-and-safety",
    children: [
      { label: "Safety & Security", path: "/privacy-and-safety/safety-and-security" },
      { label: "Privacy Center", path: "/privacy-and-safety/privacy" },
      { label: "Transparency Center", path: "/legal-and-policies/transparency-center" },
      { label: "Legal Center", path: "/legal-and-policies" },
      { label: "Report a Safety Issue", path: "/support/reports-and-appeals" },
    ],
  },
  {
    label: "For the Music Industry",
    path: "/for-creators",
    children: [
      { label: "For Creators", path: "/for-creators" },
      { label: "For Labels", path: "/for-labels" },
      { label: "For Distributors", path: "/for-distributors" },
      { label: "For Sync Agents", path: "/for-sync-agents" },
    ],
  },
  {
    label: "Business",
    path: "/for-business",
    children: [
      { label: "Musicosy for Business", path: "/for-business" },
      { label: "Advertise / Adnote", path: "/advertise" },
      { label: "Ads Help Center", path: "/advertising" },
    ],
  },
  {
    label: "Company",
    path: "/about",
    children: [
      { label: "About Musicosy", path: "/about" },
      { label: "Brand Toolkit", path: "/brand-toolkit" },
      { label: "Jobs & Internships", path: "/careers" },
      { label: "Investors", path: "/investors" },
      { label: "Status", path: "/status" },
      { label: "Download the App", path: "/download" },
    ],
  },
];

/**
 * Footer Utility Bar — the dense quick-access strip that sits in a row below
 * the logo, above the copyright/cookies bottom rail. Holds the navigation /
 * destination links (16). The legal/policy links live in footerBottomRail.
 */
export const footerUtilityBar: NavNode[] = [
  { label: "About", path: "/about" },
  { label: "Get App", path: "/download" },
  { label: "Help", path: "/resources/help-center" },
  { label: "Careers", path: "/careers" },
  { label: "Ads & Business", path: "/for-business" },
  { label: "Podcast", path: "/podcast" },
  { label: "Stream", path: "/for-fans" },
  { label: "Creators", path: "/for-creators" },
  { label: "Fans", path: "/for-fans" },
  { label: "Distributors", path: "/for-distributors" },
  { label: "Sync", path: "/for-sync-agents" },
  { label: "Developers", path: "/developers" },
  { label: "News", path: "/resources/blog" },
  { label: "US TIDA", path: "/us-tida" },
  { label: "Sign In", path: "/support/sign-in" },
  { label: "Contact Us", path: "/support/contact-us" },
];

/**
 * Footer Bottom Rail — the legal/policy links that sit in the very bottom
 * row alongside the copyright. Kept separate from the utility bar so they
 * render in their own row beneath the separating line.
 */
export const footerBottomRail: NavNode[] = [
  { label: "Terms", path: "/legal-and-policies" },
  { label: "Privacy", path: "/privacy-and-safety" },
  { label: "Cookies", path: "/legal-and-policies" },
  { label: "DMCA", path: "/legal-and-policies/copyright-and-ip/dmca-policy" },
  { label: "Accessibility", path: "/resources/accessibility" },
  { label: "Privacy Center", path: "/privacy-and-safety" },
  { label: "Legal Center", path: "/legal-and-policies" },
  { label: "Support Center", path: "/support" },
];

/**
 * Help Center sections — comprehensive policy & support content that lives
 * in the Help Center sidebar (NOT in the footer).
 */
export const helpCenterSections: NavNode[] = [
  // ── 1. HELP CENTER ───────────────────────────────────────────────────────
  {
    label: "Help Center",
    path: "/resources/help-center",
    blurb: "Guides on getting started, using Musicosy, and finding resources.",
    children: [
      {
        label: "Getting Started",
        path: "/resources/help-center/getting-started",
        blurb: "Set up your account and find your way around Musicosy.",
        children: build("/resources/help-center/getting-started", [
          "What is Musicosy?",
          "Create an account",
          "Sign in and sign out",
          "Verify your email or phone number",
          "Set up your profile",
          "Set up your Artist Page",
          "Choose or change your handle",
          "Choose or change your display name",
          "Find friends",
          "Find people to follow",
          "Follow and unfollow",
          "How to build a Setlist",
          "Understanding your Toolkits and upgrades",
          "Personal profiles vs. Team Workspaces",
          "Personal Context versus Workspace Context",
          "Delete or deactivate your account",
        ]),
      },
      {
        label: "Using Musicosy",
        path: "/resources/help-center/using-musicosy",
        blurb: "Discover, interact, collect, play, create, and go live.",
        children: build("/resources/help-center/using-musicosy", [
          ["Discover & Browse", ["What is The Stage?", "Discover content", "Manage your Home feed and recommendations", "Search MusicOSY", "Feed", "For You feed", "Friends Tab", "Trending content", "Trending content and Fresh Drops", "Recommended creators and music", "Manage topics and interests"]],
          ["Content Interaction", ["Like", "Love and Keep content", "Comment", "Leave a Note and join the conversation", "Share", "Repost", "Resing and Pass the Mic", "Mentions", "Save content", "Block and mute", "Edit or delete your comment", "Take your post off The Stage"]],
          ["Collections & Library", ["Collections", "Create collections", "Shared collections", "Playlists", "Your Library", "Keep and organize your Library", "Save music to your Library", "Edit or delete a collection", "Add, remove, and reorder playlist items"]],
          ["Media & Playback", ["Listen on Musicosy", "Video playing", "Fullscreen", "On-demand playback", "Sound", "Manage your playback queue", "Manage your Up Next queue", "Continue listening", "Music playback troubleshooting", "Video playback troubleshooting"]],
          ["Backstage & Community", ["What is Backstage?", "Send a message", "Manage message requests", "Start a group conversation", "Group Conversations & Live Chat", "Share content in Backstage", "Pass the Mic (Sharing)", "Mute a conversation"]],
          ["Create & Publish", ["Create on Musicosy", "What is Studio?", "Start a Studio project", "Save and manage drafts", "Upload music, video, and artwork", "Add titles, descriptions, and tags", "Add credits and collaborators", "Studio Collaboration & Session Roles", "AI Tools", "Rendering", "Stems", "Mastering", "AI Voice, Likeness & Provenance", "Music Recognition & Audio Matching", "Lyrics, Transcripts & Chapters", "Publish a post", "Publish music", "Choose content visibility", "Edit or delete published content", "Understand processing and review status", "Fix upload or publishing problems"]],
          ["Live & Events", ["Watch a live session", "Take the Stage", "Schedule a live session", "Invite live guests", "Live chat", "Live Moderation & Crowd Chat Safety", "Watch a live replay", "Replays & Clipping Live Sessions", "Find events", "Attend an event", "Tickets and event access", "Event Check-in & Ticket Scanning", "Venue Management & Settlement", "Tour Routing", "Roadbook", "Tour Merch Inventory", "Event cancellations and refunds"]],
          ["Creator Studio & Workspaces", ["Set up your creator profile", "Set up your creator profile and Artist Page", "Artist Pages vs. Personal Profiles", "Create or join a workspace", "Switch workspaces", "Workspace roles and permissions", "Invite and manage workspace members", "Collaborate in Studio", "View creator analytics", "Manage your catalog", "Credits, rights, and splits", "Distribution", "Store Mapping & Metadata (ISRC/UPC)", "Creator tools and eligibility", "Verification on MusicOSY", "Representation & Booking Routes", "Build an EPK (Electronic Press Kit)", "Handling Takedowns & Rights Claims", "Payouts, Tax Profiles & Invoices", "Reserves, Holds & Financial Disputes"]],
          ["Creator Commerce & Services", ["Creator Shops", "Merch Table", "Subscriptions", "Ticketing", "Subscribe to a creator", "Selling Services & Bookings", "Fulfillment, Shipping & Returns", "Global Shop Search"]],
          ["Podcasts & RSS", ["RSS Feeds & External Directories", "Dynamic Ad Insertion (DAI) & Sponsorships", "Private Feeds & Subscriber Episodes"]],
          ["Communities & Fan Clubs", ["Creating a Fan Club / Membership Space", "Community Channels & Roles", "Community Moderation & Governance", "Join a community or fan club"]],
        ]),
      },
    ],
  },

  // ── 2. SUPPORT CENTER ────────────────────────────────────────────────────
  {
    label: "Support Center",
    path: "/support",
    blurb: "Account help, reporting, payments, and technical support.",
    children: build("/support", [
      ["Account & Access", ["Account settings & privacy", "Account privacy and visibility settings", "Manage your privacy and discoverability settings", "Notification settings", "Push notifications", "Account status", "Account safety", "Manage your active sessions", "Set up two-factor authentication or a passkey", "Sign-in help", "Recover your account", "Reset your password", "Verify your identity", "Deactivate your account", "Delete your account"]],
      ["Reports & Appeals", ["Reporting content", "Report a post / account / LIVE / comment / DM", "Report a profile", "Report underage account", "Report sexual abuse", "Report impersonation", "Report bullying", "Report suggested search / hashtag / sound / Series", "Report another issue", "Share feedback", "Check report status", "Appeal an account or content decision", "Content violations & bans", "Transaction policy violations"]],
      ["Payments & Purchases", ["Payment methods", "Billing and receipts", "Subscription help", "Cancel a subscription", "Refunds", "Music and digital purchase help", "Event ticket help", "Merchandise order help", "Payout and earnings support"]],
      ["Technical Support", ["Playback problems", "Upload and publishing problems", "App crashes or errors", "Notification problems", "Report a bug", "Supported devices and browsers", "Service status"]],
    ]),
  },

  // ── 3. Trust & Policies ─────────────────────────────────────────────────
  {
    label: "Trust & Policies",
    path: "/privacy-and-safety",
    blurb: "Safety controls, privacy rights, and transparency reports.",
    children: [
      { label: "Trust & Policies Home", path: "/privacy-and-safety" },
      {
        label: "Safety & Security",
        path: "/privacy-and-safety/safety-and-security",
        blurb: "Platform rules, content conduct, and account security.",
        children: [
          {
            label: "Safety",
            path: "/privacy-and-safety/safety",
            children: build("/privacy-and-safety/safety", [
              "Platform Rules",
              "Content Restrictions",
              "Guidance for parents/caregivers",
              "Age verification",
              "Underage appeals",
              "Under 13 Experience",
              "Youth Portal",
              "Teen privacy & safety settings",
              "Post privacy settings",
              "Stitch privacy settings",
              "Manage video downloads",
              "Activity status",
              "Suggested accounts",
              "Manage topics",
              "Audience controls",
            ]),
          },
          {
            label: "Content & Conduct",
            path: "/privacy-and-safety/content-and-conduct",
            children: build("/privacy-and-safety/content-and-conduct", [
              "Community Guidelines",
              "Community Principles",
              "Youth Safety & Well-Being",
              "Safety & Civility",
              "Mental & Behavioral Health",
              "Sensitive & Mature Themes",
              "Integrity & Authenticity",
              "Regulated Goods & Services",
              "For You feed Eligibility Standards",
              "Creator Code of Conduct",
              "Restricted Mode",
              "Content levels on posts",
              "Age-restricted LIVE content",
              "Dangerous & deceptive content",
              "Violent extremism",
              "Content Algorithm",
              "Political Ads",
            ]),
          },
          {
            label: "Security",
            path: "/privacy-and-safety/security",
            children: build("/privacy-and-safety/security", [
              "Content violations & bans",
              "Transaction policy violations",
              "Avoid phishing",
            ]),
          },
        ],
      },
      {
        label: "Privacy Center",
        path: "/privacy-and-safety/privacy",
        blurb: "How we collect, protect, and respect your data.",
        children: build("/privacy-and-safety/privacy", [
          "Collecting your personal data",
          "Protecting your personal data",
          "Your data rights",
          "California Notice of Collection",
          "Account privacy",
          "Cookies policy",
          "Location detection",
          "Information we collect",
          "Consumer Health Data Privacy Policy",
          "Privacy Policies",
          "Privacy Policy",
          "Kids Privacy Policy",
          "Google Privacy Policy",
          "SheerID Privacy Policy",
        ]),
      },
      {
        label: "Transparency Center",
        path: "/legal-and-policies/transparency-center",
        blurb: "Reports on enforcement, moderation, and government requests.",
        children: build("/legal-and-policies/transparency-center", [
          "Community enforcement transparency",
          "Content moderation transparency",
          "Government and legal requests",
          "Copyright transparency",
          "Advertising transparency",
        ]),
      },
    ],
  },

  // ── 4. Legal Center ──────────────────────────────────────────────────────
  {
    label: "Legal Center",
    path: "/legal-and-policies",
    blurb: "Terms of use, copyright, IP, distribution agreements and policies.",
    children: [
      { label: "Rules & Policies Home", path: "/legal-and-policies" },
      {
        label: "Terms of Use",
        path: "/legal-and-policies/terms-of-use",
        children: build("/legal-and-policies/terms-of-use", [
          "Subscription Terms & Conditions",
          "Gift Card Terms",
          "User Guidelines",
          "Song Purchase Terms",
          "Community Rules & Guidelines",
          "Distribution Agreement",
          "Music Terms",
          "Commercial Music Library Terms",
          "Buyer Policy",
          "Branded Content Policy",
          "Rewards Policy",
          "Campaign Terms & Conditions",
          "Community Terms",
          "Intellectual Property Policy",
          "DMCA Policy",
          "Arbitration (NAMA DR)",
          "Open Source Software Notices",
          "AI Services Terms",
        ]),
      },
      {
        label: "Copyright & IP",
        path: "/legal-and-policies/copyright-and-ip",
        children: build("/legal-and-policies/copyright-and-ip", [
          "Intellectual Property Policy",
          "Trademark & counterfeiting",
          "DMCA Policy",
          "Copyright reporting",
          "Commercial use",
          "Ownership & copyright",
        ]),
      },
      {
        label: "Law Enforcement",
        path: "/legal-and-policies/law-enforcement",
        children: build("/legal-and-policies/law-enforcement", [
          "Law Enforcement Data Request Guidelines",
        ]),
      },
      {
        label: "Legal, Policy & Compliance",
        path: "/legal-and-policies/legal-policy-and-compliance",
        blurb: "Core legal policies, agreements, verification, tax, data lifecycle, and compliance controls.",
        children: build("/legal-and-policies/legal-policy-and-compliance", [
          "Terms of use",
          "Privacy policy",
          "Community guidelines",
          "Copyright policy",
          "Creator agreement",
          "Distribution agreement",
          "Advertising agreement",
          "Subscription terms",
          "Merchant terms",
          "Payout terms",
          "Age verification",
          "Identity verification",
          "Business verification",
          "Tax collection",
          "Tax reporting",
          "Consent management",
          "Data export",
          "Data deletion",
          "Account deletion",
          "Archive/purge workflow",
          "Legal hold",
          "Territory restrictions",
          "Sanctions restrictions",
          "Audit retention",
        ]),
      },
    ],
  },

  // ── 5. For the Music Industry ────────────────────────────────────────────
  {
    label: "For the Music Industry",
    path: "/for-creators",
    blurb: "Portals for creators, labels, distributors, and sync agents.",
    children: [
      { label: "For Creators", path: "/for-creators" },
      { label: "For Labels", path: "/for-labels" },
      { label: "For Distributors", path: "/for-distributors" },
      { label: "For Sync Agents", path: "/for-sync-agents" },
      { label: "Creator resources", path: "/for-creators/creator-resources" },
      { label: "Label resources", path: "/for-labels/label-resources" },
      { label: "Distribution resources", path: "/for-distributors/distribution-resources" },
      { label: "Sync and licensing resources", path: "/for-sync-agents/sync-and-licensing-resources" },
    ],
  },

  // ── 6. Business & Advertising ────────────────────────────────────────────
  {
    label: "Business & Advertising",
    path: "/for-business",
    blurb: "Adnote, business tools, and the Ads Help Center.",
    children: [
      { label: "Musicosy for Business", path: "/for-business" },
      { label: "Advertise / Adnote", path: "/advertise" },
      { label: "Ads Help Center", path: "/advertising" },
    ],
  },
];

/**
 * Ads Help Center — the complete 18-section Adnote help tree at /advertising.
 * Stands on its own; surfaced in the Business resources footer column.
 */
export const adsHelpCenter: NavNode = {
  label: "Ads Help Center",
  path: "/advertising",
  blurb: "Everything you need to run ads on Musicosy with adnote — from first setup to advanced optimization.",
  children: build("/advertising", [
    [
      "Getting Started",
      [
        ["What describes your intent?", ["Promote a product", "Grow an audience", "Drive installs", "Generate leads"]],
        ["Advertiser or Agency?", ["Set up as an advertiser", "Set up as an agency", "Switch account type"]],
        ["Business Information", ["Business name & details", "Business address", "Business category"]],
        ["Advertiser Account Information", ["Account name", "Time zone", "Currency"]],
        ["Business Verification", ["Submit documents", "Verification status", "Rejected verification"]],
        ["Invite Members", ["Add a member", "Member roles", "Resend invitations"]],
      ],
    ],
    [
      "Advertising on Musicosy",
      [
        "About advertising on Musicosy",
        "How ads are delivered",
        "Adnote product overview",
        "Ad quality standards",
        "Creator Promotions (Boosting)",
        "Brand Safety & Ad Review",
        "Supported markets",
      ],
    ],
    [
      "Musicosy Accounts",
      [
        "Link your Musicosy account",
        "Account roles for advertising",
        "Switch between accounts",
        "Connected accounts",
        "Account security for advertisers",
      ],
    ],
    [
      "Managing Your Ad Center",
      [
        "Ad Center overview",
        "Navigate the Ad Center",
        "Create from the Ad Center",
        "Edit an active ad",
        "Duplicate an ad",
        "Archive and restore",
        "Ad Center shortcuts",
      ],
    ],
    [
      "Ad Objectives",
      [
        ["Reach", ["Maximize reach", "Reach frequency"]],
        ["Consideration Objectives", ["Traffic", "App installs", "Video views", "Engagement"]],
        ["App Promotion", ["App install", "App re-engagement"]],
        ["Lead Generation", ["Instant forms", "CRM sync"]],
        ["Sales", ["Conversions", "Catalog sales"]],
        ["Musicosy Shop Ads", ["Set up Shop Ads", "Product feeds"]],
        ["Musicosy Growth Max", ["How Growth Max works", "Budget allocation", "Performance signals"]],
      ],
    ],
    [
      "Campaign Creation",
      [
        "Create a campaign",
        "Select an objective",
        "Campaign budget",
        ["Budget and Scheduling", ["Daily vs lifetime budget", "Start and end dates", "Schedule rules"]],
        ["Budget Strategy", ["Lowest cost", "Cost cap", "Bid cap", "Minimum ROAS"]],
        "Campaign naming",
      ],
    ],
    [
      "Ad Group Management",
      [
        ["Placements Overview", ["Automatic placements", "Manual placements", "Placement reviews"]],
        ["Ad Targeting", ["Demographics", "Interests", "Behaviors", "Custom targeting"]],
        ["Audiences", ["Saved audiences", "Lookalike audiences", "Custom audiences"]],
        ["Bidding and Optimization", ["Optimization events", "Bid strategy", "Cost controls"]],
        ["Brand Safety", ["Block lists", "Allow lists", "Inventory filters"]],
        ["Delivery Type", ["Standard delivery", "Accelerated delivery"]],
      ],
    ],
    [
      "Ad Placements & Formats",
      [
        ["In-Feed Video", ["Video specs", "Duration limits", "Captions & subtitles"]],
        ["In-Feed Interactive", ["Carousel", "Collection", "Instant experience"]],
        ["Non-Feed Placement", ["Banner", "Interstitial", "Audio ads"]],
        ["Interactive Enhancements", ["Add a CTA", "Add a sticker", "Add a form"]],
        ["Industry Ad Solutions", ["Entertainment", "Retail", "Auto", "Finance"]],
      ],
    ],
    [
      "Creative Management",
      [
        ["Create an Ad", ["Upload a video", "Upload an image", "Add ad text"]],
        ["Ad Creation Best Practices", ["Creative guidelines", "Aspect ratios", "File sizes"]],
        ["Creative Optimization", ["A/B testing", "Dynamic creative", "Creative reporting"]],
        ["Creative Partnerships", ["Find a partner", "Manage partners", "Asset sharing"]],
      ],
    ],
    [
      "Ad Management",
      [
        "Ads Manager overview",
        "Filter and search ads",
        "Bulk editing",
        "Ad status explained",
        "Pause and resume",
        ["Ads Manager", ["Columns and metrics", "Saved views", "Export reports"]],
        "Ad versioning",
      ],
    ],
    [
      "Audience & Lead Management",
      [
        ["Audience Management", ["Create an audience", "Audience insights", "Audience sharing"]],
        ["Lead Management", ["View leads", "Download leads", "Lead integrations", ["Leads Center", ["Manage lead forms", "Lead quality", "CRM connections"]]]],
      ],
    ],
    [
      "Measurement & Analytics",
      [
        ["App Measurement", ["SDK setup", "App events", "Attribution windows"]],
        ["Offline Conversions", ["Upload offline data", "Match rates", "Offline event sets"]],
        ["Web Measurement", ["Pixel setup", "Conversions API", "Event matching"]],
        ["Insights and Reporting", ["Custom reports", "Report templates", "Scheduled reports"]],
        ["Shop Ads Measurement", ["Purchase attribution", "ROAS tracking"]],
        ["Musicosy Market Scope", ["Market Scope overview", "Cohort analysis", "Brand lift"]],
      ],
    ],
    [
      "Tools & Resources",
      [
        ["MCP Server", ["Connect MCP", "Available tools", "Authentication"]],
        ["AI Skills", ["Enable AI Skills", "Creative AI", "Audience AI"]],
        ["Events Manager", ["Track events", "Priority events", "Event debugging"]],
        ["Catalog Manager", ["Create a catalog", "Upload a feed", "Catalog diagnostics"]],
        ["Notification Center", ["Notification settings", "Alert types"]],
        ["Ad Plans", ["Create a plan", "Plan templates", "Share a plan"]],
        "Creative hub",
        "Business suite",
        "Supply-Side Platform (SSP)",
      ],
    ],
    [
      "Ad Auction & Optimization",
      [
        "How the ad auction works",
        "Auction signals",
        "Learning phase",
        "Optimization tips",
      ],
    ],
    [
      "Billing & Payment",
      [
        ["Billing Options", ["Prepay", "Postpay", "Invoice billing"]],
        ["Payment", ["Add a payment method", "Supported methods", "Auto-recharge"]],
        ["Billing Management", ["View invoices", "Billing thresholds", "Tax documents"]],
        ["Promotions", ["Redeem a code", "Promotion terms"]],
        ["Troubleshooting", ["Declined payment", "Billing errors", "Refund requests"]],
      ],
    ],
    [
      "Account Management",
      [
        "Account settings",
        "Switch ad accounts",
        "Close an ad account",
        ["Audience Controls", ["Default audience", "Restrict audiences"]],
        ["Billing Information", ["Business billing", "Tax information"]],
        ["Business Verification", ["Verify your business", "Edit business info"]],
        "Account limits",
        "Ad account status",
        "Reactivating an account",
      ],
    ],
    [
      "Team & Members",
      [
        "Add a team member",
        "Remove a member",
        "Member invitations",
        "Manage access",
        "Transfer ownership",
        ["Role-Based Permissions", ["Admin", "Analyst", "Editor", "Advertiser"]],
      ],
    ],
    [
      "Policies & Security",
      [
        ["Advertising Policies", ["Ad content policy", "Prohibited content", "Restricted content"]],
        ["Privacy Practices", ["Data use", "User consent", "Retargeting rules"]],
        ["Account Security", ["Two-factor auth", "Suspicious activity", "Recover an account"]],
      ],
    ],
  ]),
};

/**
 * Platform persona routes — kept in allNav so the catch-all page can resolve
 * them, even though they're no longer surfaced in the mega menu.
 */
export const platformRoutes: NavNode[] = [
  { label: "For Fans", path: "/for-fans", blurb: "Stream, buy, collect and back the artists you love." },
  { label: "For Creators", path: "/for-creators", blurb: "Studio, distribution, commerce and royalties in one spine." },
  { label: "For Labels", path: "/for-labels", blurb: "Roster-scale ops: A&R, accounting, rights and reporting." },
  { label: "For Distributors", path: "/for-distributors", blurb: "Distribution pipeline, catalog management and royalty delivery." },
  { label: "For Sync Agents", path: "/for-sync-agents", blurb: "Sync briefs, licensing and catalog discovery for sync." },
  { label: "For Business", path: "/for-business", blurb: "Adnote — targeting built on real listening behavior." },
  { label: "Podcast", path: "/podcast", blurb: "The Musicosy podcast — conversations with artists, producers and the team building the platform." },
  { label: "US TIDA", path: "/us-tida", blurb: "US Transparency in Data and Ads — reports on government, takedown and ad requests." },
];

/** Flatten a node tree into a list of every node (self + descendants). */
function flatten(nodes: NavNode[]): NavNode[] {
  const out: NavNode[] = [];
  const walk = (list: NavNode[]) => {
    for (const n of list) {
      out.push(n);
      if (n.children) walk(n.children);
    }
  };
  walk(nodes);
  return out;
}

/**
 * allNav — every resolvable path. Includes the help-center sections (full
 * trees), the mega menu, the ads help center, platform routes, and a flattened
 * copy of the footer so every footer link resolves to a page.
 *
 * NOTE: helpCenterSections is listed BEFORE megaMenu on purpose. Both define a
 * node at /privacy-and-safety, /legal-and-policies and /resources/help-center,
 * but helpCenterSections carries the FULL document tree (every leaf) whereas
 * the megaMenu copies are abbreviated (group labels only). Putting the full
 * trees first means the dedup keeps them — so deep leaf pages like
 * /legal-and-policies/terms-of-use/subscription-terms-and-conditions resolve.
 */
export const allNav: NavNode[] = (() => {
  const merged = [
    ...helpCenterSections,
    ...megaMenu,
    adsHelpCenter,
    ...platformRoutes,
    ...flatten(footerNav),
  ];
  const seen = new Set<string>();
  const deduped: NavNode[] = [];
  for (const n of merged) {
    if (seen.has(n.path)) continue;
    seen.add(n.path);
    deduped.push(n);
  }
  return deduped;
})();

export function findNode(path: string, nodes: NavNode[] = allNav): NavNode | undefined {
  for (const node of nodes) {
    if (node.path === path) return node;
    if (node.children) {
      const hit = findNode(path, node.children);
      if (hit) return hit;
    }
  }
  return undefined;
}

export function findTrail(path: string, nodes: NavNode[] = allNav, trail: NavNode[] = []): NavNode[] {
  for (const node of nodes) {
    const next = [...trail, node];
    if (node.path === path) return next;
    if (node.children) {
      const hit = findTrail(path, node.children, next);
      if (hit.length) return hit;
    }
  }
  return [];
}

/**
 * rootSections — the top-level "center" trees. When a user lands on any page
 * inside one of these trees, the catch-all page renders a persistent sidebar
 * showing the full tree so they can jump between siblings without going back
 * to the homepage.
 *
 * Membership is decided by TREE-WALK (not path prefix) so that nodes whose
 * path prefix differs from their parent — e.g. /support/managing-your-account
 * (a child of the Using Musicosy help-center section) — still resolve to the
 * correct center.
 */
export const rootSections: NavNode[] = [
  // Help-center sections (they carry the full detailed trees).
  ...helpCenterSections,
  // Resources — standalone center for Guides, Glossary, FAQ, Accessibility, Blog.
  // (Not in the mega menu anymore, but still a center with a sidebar.)
  {
    label: "Resources",
    path: "/resources",
    blurb: "Guides, glossary, FAQ, accessibility and company news.",
    children: [
      { label: "Resources Home", path: "/resources" },
      { label: "Resources & Guides", path: "/resources/guides" },
      { label: "Glossary", path: "/resources/glossary" },
      { label: "New User FAQ", path: "/resources/new-user-faq" },
      { label: "Accessibility", path: "/resources/accessibility" },
      { label: "Company News / Blog", path: "/resources/blog" },
    ],
  },
].filter(Boolean);

function treeContains(node: NavNode, path: string): boolean {
  if (node.path === path) return true;
  if (node.children) {
    return node.children.some((c) => treeContains(c, path));
  }
  return false;
}

/**
 * Find the root section whose tree contains the given path.
 * Returns undefined for standalone leaf pages (e.g. /about, /careers) that
 * don't belong to any center — those render without a sidebar.
 */
export function findRootSection(path: string): NavNode | undefined {
  for (const section of rootSections) {
    if (treeContains(section, path)) return section;
  }
  return undefined;
}

/**
 * Flatten a single root section tree depth-first (pre-order). The resulting
 * order matches exactly what the sidebar renders top-to-bottom, so prev/next
 * neighbors derived from this list follow the sidebar's reading order.
 */
export function flattenTree(node: NavNode): NavNode[] {
  const out: NavNode[] = [];
  const walk = (n: NavNode) => {
    out.push(n);
    if (n.children) n.children.forEach(walk);
  };
  walk(node);
  return out;
}

/**
 * Get the prev/next neighbors of a path within its root section's tree.
 * Used by the Back/Next buttons at the bottom of every center page so readers
 * can page through the help center in sidebar order without scrolling back up.
 */
export function getNeighbors(
  path: string,
  rootSection: NavNode,
): { prev?: NavNode; next?: NavNode } {
  const list = flattenTree(rootSection);
  const idx = list.findIndex((n) => n.path === path);
  if (idx === -1) return {};
  return {
    prev: idx > 0 ? list[idx - 1] : undefined,
    next: idx < list.length - 1 ? list[idx + 1] : undefined,
  };
}
