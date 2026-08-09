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

export const megaMenu: NavNode[] = [
  {
    label: "Discover",
    path: "/discover",
    blurb: "Trending, newly dropped, playlists and podcasts.",
  },
  {
    label: "For Fans",
    path: "/for-fans",
    blurb: "Stream, buy, collect and back the artists you love.",
    children: build("/for-fans", [
      "Follow artists",
      ["Social Engagement", ["Like", "Share", "Comment"]],
      "Purchase merchandise",
      "Buy songs",
      "Stream songs",
      "Listen to podcasts",
      "Curate playlists / Build collections",
      "Engage with favorite artists",
      "Streaming plans",
      "See what friends are listening to",
      "Repost",
    ]),
  },
  {
    label: "For Creators",
    path: "/for-creators",
    blurb: "Studio, distribution, commerce and royalties in one spine.",
    children: build("/for-creators", [
      [
        "Music Distribution",
        [
          "Distribute to third-party streaming platforms",
          "Physical distribution",
          "Video distribution on Musicosy",
          "Video creation tools",
        ],
      ],
      [
        "Studio Production Tools",
        [
          "Mixing & mastering",
          "Audio restoration",
          "Stem separator",
          "Beat marketplace",
          "Sample library",
          "Mixed-media playlists",
          "In-browser player",
          "Timeline comments",
          "Version history",
          "Public sharing",
          "Video & streaming",
          "Connected to releases",
        ],
      ],
      ["Social Media Management", ["Sync posts to other platforms"]],
      ["Analytics", ["Creator analytics", "Streaming analytics", "Campaign tracking"]],
      ["Merchandise & E-Commerce", ["Sell merch", "Direct to fan"]],
      [
        "Catalog & Asset Management",
        ["Manage stems, masters, press photos, contract drafts, deal memos, sync briefs"],
      ],
      ["Tour Management", ["Plan and manage tours"]],
      ["Royalties & Accounting", ["Royalty tracking", "Financial reporting"]],
      ["Release Planning", ["Barcode generation", "Release management"]],
      ["Rights & Licensing", ["Rights management", "Sync & licensing marketplace"]],
      ["Marketing & Branding", ["Marketing tools", "Branding resources"]],
      ["Collaboration & File Sharing", ["Share projects and files"]],
      ["CRM & Contracts", ["Contract management", "CRM tools"]],
      ["Promotion", ["Website builder", "Social posts", "Smart links"]],
    ]),
  },
  {
    label: "For Labels",
    path: "/for-labels",
    blurb: "Roster-scale ops: A&R, accounting, rights and reporting.",
    children: [
      // Role-based personas first — mirrors how For Creators groups by category.
      // Explicit paths preserve the /for-labels/by-role/* URLs.
      {
        label: "For Managers",
        path: "/for-labels/by-role/for-managers",
        blurb: "Artist relations, projects and team ops for managers.",
        children: build("/for-labels/by-role/for-managers", [
          "Artist relations",
          "Project management",
          "Marketing & pitching",
          "CRM",
          "Finance & budgeting",
          "Catalog management",
          "Team management",
        ]),
      },
      {
        label: "For Publishers",
        path: "/for-labels/by-role/for-publishers",
        blurb: "Rights, royalties, catalog and sync for publishers.",
        children: build("/for-labels/by-role/for-publishers", [
          "Rights management",
          "Royalty administration",
          "Catalog management",
          "Sync & licensing",
        ]),
      },
      {
        label: "For Music Supervisors",
        path: "/for-labels/by-role/for-music-supervisors",
        blurb: "Sync briefs, licensing and catalog discovery.",
        children: build("/for-labels/by-role/for-music-supervisors", [
          "Sync briefs",
          "Licensing",
          "Catalog discovery",
        ]),
      },
      {
        label: "For Producers & Engineers",
        path: "/for-labels/by-role/for-producers-and-engineers",
        blurb: "Studio tools, audio files and collaboration.",
        children: build("/for-labels/by-role/for-producers-and-engineers", [
          "Studio tools",
          "Audio file management",
          "Collaboration",
        ]),
      },
      {
        label: "For Songwriters",
        path: "/for-labels/by-role/for-songwriters",
        blurb: "Collaboration, metadata and rights for songwriters.",
        children: build("/for-labels/by-role/for-songwriters", [
          "Collaboration",
          "Metadata",
          "Rights management",
        ]),
      },
      {
        label: "For Tour Managers",
        path: "/for-labels/by-role/for-tour-managers",
        blurb: "Tour planning, logistics and budgeting.",
        children: build("/for-labels/by-role/for-tour-managers", [
          "Tour planning",
          "Logistics",
          "Budgeting",
        ]),
      },
      // Label-level capabilities
      ...build("/for-labels", [
        "A&R and artist discovery",
        "Release management",
        "Distribution beyond Musicosy",
        "Marketing & PR",
        "Accounting",
        "Artist relations",
        "Contract management",
        "Performance rights & royalty administration",
        "Collaboration & audio sharing",
        "Project management",
        "Legal & contracts",
        "CRM",
        "Finance & budget allocation",
        "Catalog management",
        "Time stacking / Geo stacking",
        "Social media management",
        "Financial reporting",
        "Roster & team management",
        "Artist website",
        "Performance analytics",
        "Audio file management",
      ]),
    ],
  },
  {
    label: "For Business",
    path: "/for-business",
    blurb: "Adnote — targeting built on real listening behavior.",
    children: build("/for-business", [
      "Advertising Terms",
      "Payment Terms",
      "Commercial Terms of Service",
      "Business Products (Data) Terms",
      "Lead Generation Terms",
      "Custom Audience Terms",
      "Controller to Controller Data Terms",
      ["Pricing", ["Platform Plans"]],
    ]),
  },
];

export const footerNav: NavNode[] = [
  {
    label: "Platform",
    path: "/platform",
    children: [
      { label: "For Creators", path: "/for-creators" },
      { label: "For Labels", path: "/for-labels" },
      { label: "For Song Writers", path: "/for-labels/by-role/for-songwriters" },
      { label: "For Producers", path: "/for-labels/by-role/for-producers-and-engineers" },
      { label: "For Tour Managers", path: "/for-labels/by-role/for-tour-managers" },
      { label: "For Business", path: "/for-business" },
    ],
  },
  {
    label: "Solutions",
    path: "/solutions",
    children: build("/solutions", [
      "Podcasters",
      "Independent Artists",
      "Indie Labels",
      "Touring Artists",
    ]),
  },
  {
    label: "Developers",
    path: "/developers",
    children: build("/developers", [
      "API Docs",
      "SDKs",
      "Webhooks",
      "Partner Program",
      "Agentic Hub & MCP Server",
      "API access",
    ]),
  },
  {
    label: "Advertising",
    path: "/advertising",
    children: build("/advertising", [
      "Audio Advertisements",
      "Sponsored Listening Sessions",
      "Display Advertising",
      "Playlist Sponsorships",
      "Artist Campaign Promotions",
      "Brand Sponsorship Opportunities",
    ]),
  },
  {
    label: "Resources",
    path: "/resources",
    children: [
      ...build("/resources", ["Blog", "Guides", "Glossary"]),
      { label: "Help Center", path: "/resources/help-center" },
      { label: "Privacy & Safety", path: "/privacy-and-safety" },
    ],
  },
];

/**
 * Help Center sections — comprehensive policy & support content that lives
 * in the Help Center sidebar (NOT in the footer).
 */
export const helpCenterSections: NavNode[] = [
  {
    label: "Privacy & Safety",
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
    label: "Legal & Policies",
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
    label: "Support Center",
    path: "/support",
    children: build("/support", [
      "Support & Account Management",
      [
        "Using Musicosy",
        [
          "Discover & Browse",
          "Content Interaction",
          "Collections",
          "Media & Playback",
          "Direct Messages",
          "Live",
          "Account Management",
          "AI Music Generation",
          "Monetization",
          "Third-Party Integrations",
          "Getting Started",
        ],
      ],
      [
        "Advertising Hub",
        [
          "Ad Campaign Creation",
          "Ad Group Management",
          "Audience Targeting",
          "Creative Asset Management",
          "Ad Campaign Analytics",
          "Advertising Operations",
        ],
      ],
    ]),
  },
];

export const allNav: NavNode[] = [...megaMenu, ...footerNav, ...helpCenterSections];

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
