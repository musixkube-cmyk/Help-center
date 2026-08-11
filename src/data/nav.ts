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
    blurb: "Guides on discovering, playing, collecting and managing your music.",
    children: build("/resources/help-center/using-musicosy", [
      ["Discover & Browse", ["Discover content", "Feed", "For You feed", "Friends Tab", "Search"]],
      ["Content Interaction", ["Like", "Comment", "Share", "Repost", "Mentions"]],
      ["Collections", ["Create collections", "Shared collections", "Playlists"]],
      ["Media & Playback", ["Video playing", "Fullscreen", "On-demand playback", "Sound"]],
      ["Account Management", ["Manage your account", "Account settings", "Notification settings"]],
      ["Getting Started", ["Create an account", "Find friends", "Follow / unfollow"]],
    ]),
  },
  {
    label: "Managing Your Account",
    path: "/support",
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
    label: "Rules & Policies",
    path: "/legal-and-policies",
    blurb: "Terms of use, copyright, IP and distribution agreements.",
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
 * Footer navigation — X-platform style, five columns.
 * Using Musicosy · Platform · Help Center · Developer resources · Business resources.
 */
export const footerNav: NavNode[] = [
  {
    label: "Using Musicosy",
    path: "/resources/help-center/using-musicosy",
    children: [
      { label: "Managing your account", path: "/support/managing-your-account" },
      { label: "Safety and security", path: "/privacy-and-safety" },
      { label: "Rules and policies", path: "/legal-and-policies" },
      { label: "Resources", path: "/resources" },
      { label: "New user FAQ", path: "/resources/new-user-faq" },
      { label: "Glossary", path: "/resources/glossary" },
      { label: "A safer Musicosy", path: "/privacy-and-safety/a-safer-musicosy" },
      { label: "Accessibility", path: "/resources/accessibility" },
      { label: "Our rules", path: "/legal-and-policies/our-rules" },
      { label: "My privacy", path: "/privacy-and-safety/my-privacy" },
      { label: "How we address misinformation", path: "/privacy-and-safety/how-we-address-misinformation" },
      { label: "Recommender Systems", path: "/privacy-and-safety/recommender-systems" },
      { label: "Sign in", path: "/support/sign-in" },
      { label: "Contact Us", path: "/support/contact-us" },
    ],
  },
  {
    label: "Platform",
    path: "/about",
    children: [
      { label: "Status", path: "/status" },
      { label: "Accessibility", path: "/resources/accessibility" },
      { label: "Embed a post", path: "/developers/embed" },
      { label: "Privacy Center", path: "/privacy-and-safety" },
      { label: "Transparency Center", path: "/legal-and-policies/transparency-center" },
      { label: "Download the app", path: "/download" },
      { label: "About the company", path: "/about" },
      { label: "Company news", path: "/resources/blog" },
      { label: "Brand toolkit", path: "/brand-toolkit" },
      { label: "Jobs and internships", path: "/careers" },
      { label: "Investors", path: "/investors" },
    ],
  },
  {
    label: "Help Center",
    path: "/resources/help-center",
    children: [
      { label: "Using Musicosy", path: "/resources/help-center/using-musicosy" },
      { label: "Musicosy for creators", path: "/for-creators" },
      { label: "Ads Help Center", path: "/advertising" },
      { label: "Managing your account", path: "/support/managing-your-account" },
      { label: "Email Preference Center", path: "/support/email-preferences" },
      { label: "Rules and policies", path: "/legal-and-policies" },
      { label: "Contact us", path: "/support/contact-us" },
    ],
  },
  {
    label: "Developer resources",
    path: "/developers",
    children: [
      { label: "Developer home", path: "/developers" },
      { label: "Documentation", path: "/developers/developers/docs" },
      { label: "Forums", path: "/developers/developers/ecosystem" },
      { label: "Communities", path: "/developers/developers/ecosystem" },
      { label: "Developer blog", path: "/resources/blog" },
      { label: "Engineering blog", path: "/resources/blog" },
      { label: "Developer terms", path: "/legal-and-policies" },
    ],
  },
  {
    label: "Business resources",
    path: "/for-business",
    children: [
      { label: "Advertise", path: "/advertise" },
      { label: "Musicosy for business", path: "/for-business" },
      { label: "Resources and guides", path: "/resources/guides" },
      { label: "Musicosy for marketers", path: "/for-business" },
      { label: "Marketing insights", path: "/for-business" },
      { label: "Brand inspiration", path: "/for-business" },
      { label: "adnote", path: "/advertise" },
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

/**
 * Platform persona routes — kept in allNav so the catch-all page can resolve
 * them, even though they're no longer surfaced in the mega menu.
 */
export const platformRoutes: NavNode[] = [
  { label: "For Fans", path: "/for-fans", blurb: "Stream, buy, collect and back the artists you love." },
  { label: "For Creators", path: "/for-creators", blurb: "Studio, distribution, commerce and royalties in one spine." },
  { label: "For Labels", path: "/for-labels", blurb: "Roster-scale ops: A&R, accounting, rights and reporting." },
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
 * allNav — every resolvable path. Includes the mega menu, help-center
 * sections, platform routes, and a flattened copy of the footer so every
 * footer link resolves to a page.
 */
export const allNav: NavNode[] = (() => {
  const merged = [
    ...megaMenu,
    ...helpCenterSections,
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
