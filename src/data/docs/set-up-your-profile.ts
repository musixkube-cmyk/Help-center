import type { Doc } from "./types";

/**
 * "Set up your profile" — the fifth doc in Getting Started.
 *
 * Content provided verbatim by the user; structured into blocks. Introduces
 * the `quote` block type for the example bios section. Uses two tables
 * (display name/handle comparison + profile tabs reference) and two note
 * callouts.
 */
export const setUpYourProfileDoc: Doc = {
  path: "/resources/help-center/getting-started/set-up-your-profile",
  blocks: [
    {
      type: "paragraph",
      text: "Your profile is your home on MusicOSY. It helps people recognize you, understand what you are into, and decide whether they want to follow your journey.",
    },
    {
      type: "paragraph",
      text: "You can set up a profile whether you are here to listen, discover, collect music, create, perform, collaborate, or build a career. Your profile begins as your personal MusicOSY identity and can grow with you over time. You do not need to finish setting up your profile before you start using the platform.",
    },
    {
      type: "callout",
      variant: "note",
      title: "Note",
      text: "Your profile is your public presentation on MusicOSY. It is connected to your member account but is not the account itself. Your account holds your sign-in credentials, security settings, purchases, and private data. Your profile is what other members can see.",
    },

    { type: "heading", text: "Add the essentials" },
    {
      type: "paragraph",
      text: "Start by opening your profile and selecting Edit profile. Add the details that help make your profile feel like you:",
    },
    {
      type: "list",
      items: [
        {
          lead: "Profile photo:",
          text: "Choose an image that represents you, your music, or your creative identity. Your photo appears next to your name across MusicOSY—in feeds, comments, messages, and search results.",
        },
        {
          lead: "Cover media (optional):",
          text: "Add a banner image or short video that sets the tone for your profile.",
        },
        {
          lead: "Display name:",
          text: "Add the name you want people to see across MusicOSY. Display names do not need to be unique. You can change your display name, though some changes may be subject to a short cooldown.",
        },
        {
          lead: "Handle:",
          text: "Choose a unique @handle that people can use to find, mention, and link to your profile. Handles must be unique across MusicOSY and must meet length, character, and safety requirements. Changing your handle may be subject to a cooldown or review, especially for verified or high-visibility accounts.",
        },
        {
          lead: "Bio:",
          text: "Tell people a little about yourself, your sound, your interests, or what you are building. Keep it concise and genuine.",
        },
        {
          lead: "Pronouns (optional):",
          text: "Add your pronouns if you would like them displayed.",
        },
        {
          lead: "Genres and moods:",
          text: "Select the music, scenes, and interests that represent you. These help MusicOSY recommend content and connect you with relevant creators and communities.",
        },
        {
          lead: "Location (optional):",
          text: "Add your city, region, or country at the level of detail you are comfortable sharing. You can control who sees this.",
        },
        {
          lead: "Links:",
          text: "Add approved links to your website, music, social platforms, or other places people can find your work. Links are checked for safety before they appear on your profile.",
        },
      ],
    },

    { type: "heading", text: "Display name and handle" },
    {
      type: "paragraph",
      text: "Your display name and handle serve different purposes:",
    },
    {
      type: "table",
      headers: ["Field", "Purpose"],
      rows: [
        [
          "Display name",
          "The name shown on your profile, in feeds, and in many places around MusicOSY. Display names may be non-unique and can be changed subject to policy.",
        ],
        [
          "Handle",
          "Your unique public identifier (for example, @yourname). It defines your profile URL, is used for mentions and tags, and must meet uniqueness, length, character, and safety requirements.",
        ],
      ],
    },
    {
      type: "paragraph",
      text: "You can update both after creating your account. Some changes—especially those involving identity, verification, or high-visibility accounts—may require additional confirmation, review, or a cooling period.",
    },

    { type: "heading", text: "Make your profile yours" },
    {
      type: "paragraph",
      text: "Your profile does not have to be perfect before you start using MusicOSY. Begin with the basics, then update it as your music, interests, and community grow.",
    },
    {
      type: "paragraph",
      text: "A strong profile usually makes it easy for someone to understand:",
    },
    {
      type: "list",
      items: [
        { text: "Who you are" },
        { text: "What kind of music or culture you love" },
        { text: "What you create, if you create" },
        { text: "What you want to share with the MusicOSY community" },
        { text: "Where someone can hear more from you or connect with you" },
      ],
    },

    { type: "heading", text: "Example bios" },
    {
      type: "quote",
      text: "Independent singer-songwriter making late-night pop and acoustic demos. Building my first EP one song at a time.",
    },
    {
      type: "quote",
      text: "Music lover, concert chaser, and Setlist builder. Here for new R&B, underground hip-hop, and live sessions.",
    },
    {
      type: "quote",
      text: "Producer and beat maker. Collaborating on indie projects. Check my Studio for works in progress.",
    },

    { type: "heading", text: "Tips for a strong profile" },
    {
      type: "list",
      items: [
        {
          lead: "Use a clear, recognisable profile photo.",
          text: "Avoid images that are blurry, misleading, or that you do not have the right to use.",
        },
        {
          lead: "Keep your bio short and specific.",
          text: "A sentence or two is enough to start.",
        },
        {
          lead: "Select genres and moods that genuinely reflect your taste.",
          text: "This improves your recommendations and helps like-minded members find you.",
        },
        {
          text: "Add links only to destinations you control or are authorised to represent.",
        },
        {
          lead: "Update your profile as your interests and work evolve.",
          text: "There is no penalty for changing your bio, photo, or genres.",
        },
      ],
    },

    { type: "heading", text: "Profile tabs and creator expansion" },
    {
      type: "paragraph",
      text: "Your profile can grow beyond the basics as you use MusicOSY. Profile tabs appear automatically when you have eligible content or activity to show.",
    },
    {
      type: "table",
      headers: ["Tab", "Appears when"],
      rows: [
        ["About", "Your profile exists. Shows your bio, links, genres, and public details."],
        ["Posts", "You have published eligible social posts."],
        ["Music", "You have published eligible tracks, releases, or albums."],
        ["Videos", "You have published eligible videos or music videos."],
        ["Podcasts", "You have published eligible podcast shows or episodes."],
        ["Live", "You have active, upcoming, or replay-eligible live sessions."],
        ["Events", "You have eligible public or upcoming events."],
        ["Shop", "You have an active Creator Shop with eligible products."],
        ["Setlists", "You have public or shared Setlists (playlists)."],
        ["Community", "You operate or are associated with an eligible community or fan club."],
      ],
    },
    {
      type: "paragraph",
      text: "You do not need to enable these tabs manually. They appear when the corresponding content or capability is eligible and available. Tabs that you do not yet qualify for will not appear.",
    },
    {
      type: "paragraph",
      text: "A profile tab shows only content that is currently published, available, and eligible for the viewer. Unpublished, private, restricted, or unavailable content will not appear on your public profile.",
    },

    { type: "heading", text: "Profile visibility and discoverability" },
    {
      type: "paragraph",
      text: "You can control how visible and discoverable your profile is. These are separate settings:",
    },
    {
      type: "list",
      items: [
        {
          lead: "Visibility",
          text: "controls who can view your profile and its content. Options may include public, limited (visible to approved followers or connections), or private.",
        },
        {
          lead: "Discoverability",
          text: "controls whether your profile can appear in search results, recommendations, and browse surfaces. You can make your profile visible to people who have your direct link without making it appear in general discovery.",
        },
      ],
    },
    {
      type: "paragraph",
      text: "You can change these settings at any time in Settings → Privacy and safety. Making your profile less visible affects future discovery and follow-request behaviour. It does not erase previously completed transactions, public interactions, or required records.",
    },
    {
      type: "callout",
      variant: "note",
      title: "Note",
      text: "Even if your profile is set to limited or private, your handle and display name may still appear in contexts where they are required—such as in a credit, a completed order, or a public Setlist you created.",
    },

    { type: "heading", text: "Your personal profile and Workspaces" },
    {
      type: "paragraph",
      text: "Your personal profile belongs to you. It holds your personal Library, Keeps, follows, messages, privacy settings, purchases, and activity.",
    },
    {
      type: "paragraph",
      text: "If you join a band, label, studio, podcast network, or creative team, you may also have access to a shared Workspace. A Workspace is separate from your personal profile.",
    },
    {
      type: "paragraph",
      text: "You can switch into a Workspace to collaborate on shared projects, releases, events, or business activity. Your personal profile remains your own, even when you work with a team. Switching into a Workspace does not change your personal Library, follows, messages, purchases, or privacy settings.",
    },
    {
      type: "paragraph",
      text: "If you create music, manage a project, or operate a catalog as part of a team, those activities may be associated with your Workspace rather than your personal profile. Your role in that Workspace determines what you can view, edit, publish, manage, or administer within it.",
    },

    { type: "heading", text: "Build toward a creator profile" },
    {
      type: "paragraph",
      text: "You do not need to call yourself an artist before you begin creating on MusicOSY.",
    },
    {
      type: "paragraph",
      text: "As you share work, build a catalog, collaborate, or release music, you may add creator-focused details to your profile. This can help listeners, fans, collaborators, and industry partners understand your creative identity.",
    },
    {
      type: "paragraph",
      text: "Your creator profile can grow to include:",
    },
    {
      type: "list",
      items: [
        { text: "Your music, releases, and discography" },
        { text: "Videos and music videos" },
        { text: "Podcast shows and episodes" },
        { text: "Events and live sessions" },
        { text: "Your Creator Shop and merchandise" },
        { text: "Featured work and press assets" },
        { text: "Public links and booking/contact information" },
        { text: "An EPK (Electronic Press Kit) for press, booking, and professional use" },
      ],
    },
    {
      type: "paragraph",
      text: "These additions remain connected to your one MusicOSY member account. You do not need a separate account to become a creator. Your profile expands naturally as your activity grows.",
    },

    { type: "heading", text: "Artist Page" },
    {
      type: "paragraph",
      text: "If you release music, MusicOSY may create an Artist Page for you—a public, catalog-facing identity that presents your releases, events, and professional information to listeners. Your Artist Page is linked to your personal profile but serves a different purpose: it is the destination for your music, while your personal profile is your social identity.",
    },
    {
      type: "paragraph",
      text: "You can manage your Artist Page through your profile or through an eligible Workspace if you work with a team.",
    },

    { type: "heading", text: "Verification" },
    {
      type: "paragraph",
      text: "Some profiles may display a verification badge. Verification confirms that a profile is authentically associated with the person, artist, or organisation it represents.",
    },
    {
      type: "list",
      items: [
        { text: "Verification is not something you can assign to yourself. It is granted through a review process." },
        { text: "A verified badge does not imply endorsement by MusicOSY, editorial priority, or any special platform treatment." },
        { text: "Verification may be revoked if the associated identity, organisation, or account changes materially." },
        { text: "You can request verification through Settings → Account if your profile meets the eligibility criteria." },
      ],
    },

    { type: "heading", text: "Keep your profile safe" },
    {
      type: "paragraph",
      text: "Use a name, photo, bio, and links that accurately represent you. Do not use your profile to:",
    },
    {
      type: "list",
      items: [
        { text: "Impersonate another person, artist, or organisation" },
        { text: "Misrepresent a relationship, affiliation, or endorsement" },
        { text: "Falsely claim verification or official status" },
        { text: "Make deceptive claims about an artist, organization, brand, or product" },
        { text: "Use another person's image, name, or likeness without their permission" },
        { text: "Link to unsafe, deceptive, or prohibited destinations" },
      ],
    },
    {
      type: "paragraph",
      text: "Some profile changes may require confirmation, review, or additional verification—especially changes related to identity, verification status, monetization, payouts, creator status, or organisation access.",
    },
    {
      type: "paragraph",
      text: "If you believe someone is impersonating you or misusing your identity on MusicOSY, use the Report option on their profile or contact Support.",
    },
  ],
  related: [
    "/resources/help-center/getting-started/create-an-account",
    "/resources/help-center/getting-started/choose-or-change-your-handle",
    "/resources/help-center/getting-started/find-friends",
    "/resources/help-center/getting-started/follow-and-unfollow",
    "/resources/help-center/using-musicosy/creator-studio-and-workspaces/set-up-your-creator-profile-and-artist-page",
    "/resources/help-center/using-musicosy/creator-studio-and-workspaces/build-an-epk-electronic-press-kit",
    "/resources/help-center/getting-started/personal-profiles-vs-team-workspaces",
    "/support/account-and-access/account-privacy-and-visibility-settings",
    "/resources/help-center/using-musicosy/creator-studio-and-workspaces/verification-on-musicosy",
    "/support/reports-and-appeals/report-a-profile",
  ],
};
