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
    label: "Using Musicosy",
    path: "/resources/help-center",
    blurb: "Guides on discovering, playing, collecting and managing your account.",
    children: [
      ...build("/resources/help-center/using-musicosy", [
        ["Discover & Browse", ["Discover content", "Feed", "For You feed", "Friends Tab", "Search"]],
        ["Content Interaction", ["Like", "Comment", "Share", "Repost", "Mentions"]],
        ["Collections", ["Create collections", "Shared collections", "Playlists"]],
        ["Media & Playback", ["Video playing", "Fullscreen", "On-demand playback", "Sound"]],
        ["Getting Started", ["Create an account", "Find friends", "Follow / unfollow"]],
      ]),
      // Account Management — merged from the former standalone "Managing Your Account"
      {
        label: "Account Management",
        path: "/support/managing-your-account",
        blurb: "Account settings, billing, subscriptions and account status.",
        children: build("/support/managing-your-account", [
          "Account settings & privacy",
          "Notification settings",
          "Push notifications",
          "Account status",
          "Account safety",
          "Blocking someone",
          "Muting",
          "Remove followers",
        ]),
      },
    ],
  },
  {
    label: "Safety & Security",
    path: "/privacy-and-safety",
    blurb: "How we collect, protect and respect your data — plus safety controls.",
    children: build("/privacy-and-safety", [
      ["Privacy", ["Account privacy", "Your data rights", "Cookies policy", "Location detection"]],
      ["Safety", ["Platform Rules", "Content Restrictions", "Reporting content", "Age verification"]],
      ["Reporting", ["Report a post", "Report bullying", "Report impersonation", "Share feedback"]],
      ["Security", ["Account safety", "Avoid phishing", "Content violations & bans", "Reporting vulnerabilities"]],
      ["Content & Conduct", ["Community Guidelines", "Creator Code of Conduct", "Restricted Mode", "Content levels"]],
      ["Law Enforcement", ["Law Enforcement Data Request Guidelines"]],
    ]),
  },
  {
    label: "Legal Center",
    path: "/legal-and-policies",
    blurb: "Terms of use, copyright, IP, distribution agreements and policies.",
    children: build("/legal-and-policies", [
      ["Terms of Use", ["Subscription Terms", "User Guidelines", "Distribution Agreement", "AI Services Terms"]],
      ["Copyright & IP", ["Intellectual Property Policy", "DMCA Policy", "Copyright reporting", "Trademark & counterfeiting"]],
    ]),
  },
  {
    label: "Resources",
    path: "/resources",
    blurb: "Guides, glossary, FAQ, accessibility and the Help Center.",
    children: build("/resources", [
      "Guides",
      "Glossary",
      "Help Center",
      "New User FAQ",
      "Accessibility",
      "Blog",
    ]),
  },
];

/**
 * Footer navigation — eight columns + a bottom utility bar.
 *
 *   Help & Support · Resources · Trust, Privacy & Policies · Platform & Company
 *   · For Music Industry · Business & Advertising · Developers · Company
 *
 * Each column is a NavNode; children may themselves have children (rendered
 * as indented sub-links). Every path here is folded into `allNav` (via
 * flatten) so the catch-all page resolves every footer link.
 */
export const footerNav: NavNode[] = [
  // 1. Help & Support
  {
    label: "Help & Support",
    path: "/resources/help-center",
    children: [
      {
        label: "Help Center",
        path: "/resources/help-center",
        children: [
          { label: "Using Musicosy", path: "/resources/help-center/using-musicosy" },
        ],
      },
      { label: "Managing Your Account", path: "/support/managing-your-account" },
      { label: "New User FAQ", path: "/resources/new-user-faq" },
      { label: "Sign In", path: "/support/sign-in" },
      { label: "Email Preference Center", path: "/support/email-preferences" },
      { label: "Contact Us", path: "/support/contact-us" },
    ],
  },
  // 2. Resources
  {
    label: "Resources",
    path: "/resources",
    children: [
      { label: "Resources Home", path: "/resources" },
      { label: "Resources & Guides", path: "/resources/guides" },
      { label: "Glossary", path: "/resources/glossary" },
      { label: "Accessibility", path: "/resources/accessibility" },
    ],
  },
  // 3. Trust, Privacy & Policies
  {
    label: "Trust, Privacy & Policies",
    path: "/privacy-and-safety",
    children: [
      {
        label: "Safety & Security",
        path: "/privacy-and-safety",
        children: [
          { label: "A Safer Musicosy", path: "/privacy-and-safety/a-safer-musicosy" },
          { label: "How We Address Misinformation", path: "/privacy-and-safety/how-we-address-misinformation" },
          { label: "Recommender Systems", path: "/privacy-and-safety/recommender-systems" },
        ],
      },
      {
        label: "Privacy Center",
        path: "/privacy-and-safety",
        children: [
          { label: "My Privacy", path: "/privacy-and-safety/my-privacy" },
        ],
      },
      { label: "Transparency Center", path: "/legal-and-policies/transparency-center" },
      {
        label: "Rules & Policies",
        path: "/legal-and-policies",
        children: [
          { label: "Our Rules", path: "/legal-and-policies/our-rules" },
        ],
      },
    ],
  },
  // 4. Platform & Company
  {
    label: "Platform & Company",
    path: "/about",
    children: [
      {
        label: "About Musicosy",
        path: "/about",
        children: [
          { label: "Platform", path: "/about" },
        ],
      },
      { label: "Download the App", path: "/download" },
      { label: "Status", path: "/status" },
      { label: "Company News", path: "/resources/blog" },
      { label: "Brand Toolkit", path: "/brand-toolkit" },
      { label: "Jobs & Internships", path: "/careers" },
      { label: "Investors", path: "/investors" },
    ],
  },
  // 5. For Music Industry
  {
    label: "For Music Industry",
    path: "/for-creators",
    children: [
      { label: "Musicosy for Creators", path: "/for-creators" },
      { label: "Musicosy for Labels", path: "/for-labels" },
      { label: "Musicosy for Distributors", path: "/for-distributors" },
      { label: "Musicosy for Sync Agents", path: "/for-sync-agents" },
    ],
  },
  // 6. Business & Advertising
  {
    label: "Business & Advertising",
    path: "/for-business",
    children: [
      { label: "Business Resources", path: "/for-business" },
      {
        label: "Musicosy for Business",
        path: "/for-business",
        children: [
          { label: "Musicosy for Marketers", path: "/for-business" },
          { label: "Marketing Insights", path: "/for-business" },
          { label: "Brand Inspiration", path: "/for-business" },
        ],
      },
      { label: "Resources & Guides", path: "/resources/guides" },
      { label: "Advertise / Adnote", path: "/advertise" },
      { label: "Ads Help Center", path: "/advertising" },
    ],
  },
  // 7. Developers
  {
    label: "Developers",
    path: "/developers",
    children: [
      {
        label: "Developer Resources",
        path: "/developers",
        children: [
          { label: "Developer Home", path: "/developers" },
        ],
      },
      { label: "Documentation", path: "/developers/developers/docs" },
      {
        label: "Developer Community",
        path: "/developers/developers/ecosystem",
        children: [
          { label: "Forums", path: "/developers/developers/ecosystem" },
          { label: "Communities", path: "/developers/developers/ecosystem" },
        ],
      },
      {
        label: "Developer & Engineering Blog",
        path: "/resources/blog",
        children: [
          { label: "Developer Blog", path: "/resources/blog" },
          { label: "Engineering Blog", path: "/resources/blog" },
        ],
      },
      { label: "Developer Terms", path: "/legal-and-policies" },
    ],
  },
  // 8. Company
  {
    label: "Company",
    path: "/about",
    children: [
      { label: "About the Company", path: "/about" },
      { label: "Company News", path: "/resources/blog" },
      { label: "Brand Toolkit", path: "/brand-toolkit" },
      { label: "Jobs & Internships", path: "/careers" },
      { label: "Investors", path: "/investors" },
      { label: "Status", path: "/status" },
      { label: "Contact Us", path: "/support/contact-us" },
    ],
  },
];

/**
 * Footer Utility Bar — the bottom rail of quick links that sits below the
 * eight-column nav grid. Kept separate from footerNav so it renders as a
 * horizontal strip, not a column.
 */
export const footerUtilityBar: NavNode[] = [
  { label: "Privacy Center", path: "/privacy-and-safety" },
  { label: "Rules & Policies", path: "/legal-and-policies" },
  { label: "Accessibility", path: "/resources/accessibility" },
  { label: "Status", path: "/status" },
  { label: "Download the App", path: "/download" },
  { label: "Sign In", path: "/support/sign-in" },
  { label: "Contact Us", path: "/support/contact-us" },
];

/**
 * Help Center sections — comprehensive policy & support content that lives
 * in the Help Center sidebar (NOT in the footer).
 */
export const helpCenterSections: NavNode[] = [
  {
    label: "Using Musicosy",
    path: "/resources/help-center",
    blurb: "Guides on discovering, playing, collecting and managing your account.",
    children: [
      ...build("/resources/help-center/using-musicosy", [
        ["Discover & Browse", ["Discover content", "Feed", "For You feed", "Friends Tab", "Search"]],
        ["Content Interaction", ["Like", "Comment", "Share", "Repost", "Mentions"]],
        ["Collections", ["Create collections", "Shared collections", "Playlists"]],
        ["Media & Playback", ["Video playing", "Fullscreen", "On-demand playback", "Sound"]],
        ["Getting Started", ["Create an account", "Find friends", "Follow / unfollow"]],
      ]),
      {
        label: "Account Management",
        path: "/support/managing-your-account",
        blurb: "Account settings, billing, subscriptions and account status.",
        children: build("/support/managing-your-account", [
          "Account settings & privacy",
          "Notification settings",
          "Push notifications",
          "Account status",
          "Account safety",
          "Blocking someone",
          "Muting",
          "Remove followers",
        ]),
      },
    ],
  },
  {
    label: "Safety & Security",
    path: "/privacy-and-safety",
    children: build("/privacy-and-safety", [
      [
        "Privacy",
        [
          "Collecting your personal data",
          "Protecting your personal data",
          "Your data rights",
          "California Notice of Collection",
          "Account privacy",
          "Notification settings",
          "Cookies policy",
          "Location detection",
          "Information we collect",
          "Consumer Health Data Privacy Policy",
          "Privacy Policies",
          "Privacy Policy",
          "Kids Privacy Policy",
          "Additional Terms of Service",
          "Google Privacy Policy",
          "SheerID Privacy Policy",
        ],
      ],
      [
        "Safety",
        [
          "Platform Rules",
          "Content Restrictions",
          "Reporting content",
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
        ],
      ],
      [
        "Reporting",
        [
          "Report a post / account / LIVE / comment / DM",
          "Report underage account",
          "Report sexual abuse",
          "Report impersonation",
          "Report bullying",
          "Report suggested search / hashtag / sound / Series",
          "Report another issue",
          "Share feedback",
        ],
      ],
      [
        "Content & Conduct",
        [
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
        ],
      ],
      [
        "Security",
        [
          "Account safety",
          "Account status",
          "Content violations & bans",
          "Transaction policy violations",
          "Reporting security vulnerabilities",
          "Avoid phishing",
        ],
      ],
      [
        "Law Enforcement",
        ["Law Enforcement Data Request Guidelines"],
      ],
    ]),
  },
  {
    label: "Legal Center",
    path: "/legal-and-policies",
    children: build("/legal-and-policies", [
      [
        "Terms of Use",
        [
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
        ],
      ],
      [
        "Copyright & IP",
        [
          "Intellectual Property Policy",
          "Trademark & counterfeiting",
          "DMCA Policy",
          "Copyright reporting",
          "Commercial use",
          "Ownership & copyright",
        ],
      ],
    ]),
  },
  {
    label: "Support & Contact",
    path: "/support",
    children: build("/support", [
      "Contact us",
      "Sign in",
      "Email Preference Center",
      "New user FAQ",
      "Account status",
    ]),
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
  // Help-center sections first (they carry the full detailed trees).
  ...helpCenterSections,
  // Resources — the mega-menu Resources node (Guides, Glossary, FAQ, …).
  megaMenu.find((n) => n.path === "/resources")!,
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
