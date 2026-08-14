import type { Doc } from "./types";

/**
 * "Repost" — Using MusicOSY → Content Interaction doc.
 *
 * A repost on MusicOSY is called a Resing. Covers: how to Resing content,
 * adding your perspective, what happens when you Resing, source eligibility
 * and permissions (Open / Request only / Collaborator only / Closed), what
 * you can Resing, why you may not be able to Resing, how Resing differs from
 * Share and from Ensemble/Harmony/Rework, attribution, what happens when
 * the source becomes unavailable, removing a Resing, external distribution,
 * and Resing responsibly.
 *
 * Content provided verbatim by the user; structured into blocks.
 */
export const repostDoc: Doc = {
  path: "/resources/help-center/using-musicosy/content-interaction/repost",
  blocks: [
    {
      type: "paragraph",
      text: "A repost on MusicOSY is called a Resing.",
    },
    {
      type: "paragraph",
      text: "Use Resing when you want to put someone else’s music, post, release, video, Setlist, event, or other eligible content in front of your own community on The Stage.",
    },
    {
      type: "paragraph",
      text: "A Resing says:",
    },
    {
      type: "quote",
      text: "This deserves another listen. More people should see this. This belongs in the conversation. I want to pass this forward.",
    },
    {
      type: "paragraph",
      text: "Resing keeps the original creator connected to their work. It shares the original content with attribution instead of creating a new ownership record.",
    },

    { type: "heading", text: "Resing content" },
    {
      type: "paragraph",
      text: "To Resing eligible content:",
    },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Open the post, track, video, release, event, Setlist, or other item." },
        { text: "Select Resing." },
        { text: "Review the source content, the original creator, and any sharing options or attribution requirements shown." },
        { text: "Add a caption or Note if the option is available." },
        { text: "Select Post or Resing to share it with your community." },
      ],
    },
    {
      type: "paragraph",
      text: "Your Resing may appear on your profile, in your followers’ eligible Feed experiences, or in another supported MusicOSY surface.",
    },
    {
      type: "paragraph",
      text: "Before you confirm, MusicOSY will show you:",
    },
    {
      type: "list",
      items: [
        { text: "The source content and its creator" },
        { text: "The visibility default for your Resing" },
        { text: "Any attribution or disclosure requirement" },
        { text: "Whether the source creator has imposed interaction, comment, or distribution restrictions on Resings" },
      ],
    },

    { type: "heading", text: "Add your perspective" },
    {
      type: "paragraph",
      text: "When MusicOSY allows a caption, use it to explain why the content matters to you.",
    },
    {
      type: "paragraph",
      text: "You might write:",
    },
    {
      type: "quote",
      text: "This song has been on repeat all week. The production on this is unreal. If you love late-night soul, start here. This is the energy I want more of on The Stage. Adding this artist to my watch list.",
    },
    {
      type: "paragraph",
      text: "Your caption or Note is subject to MusicOSY post and comment rules. Keep it relevant, honest, and respectful.",
    },

    { type: "heading", text: "What happens when you Resing" },
    {
      type: "paragraph",
      text: "A Resing creates a new social presentation linked to the original source content. The original creator and source remain connected to the content.",
    },
    {
      type: "paragraph",
      text: "A Resing does not:",
    },
    {
      type: "list",
      items: [
        { text: "Transfer ownership to you" },
        { text: "Make you the creator of the content" },
        { text: "Give you rights to distribute the work outside MusicOSY" },
        { text: "Remove original attribution" },
        { text: "Change the original release, post, or catalog record" },
        { text: "Grant access to restricted content" },
        { text: "Create a financial, rights, or representation relationship" },
        { text: "Create a catalog credit, contributor credit, or split" },
        { text: "Allow you to deliver the content to external distributors" },
        { text: "Allow you to monetize, advertise, or sell the content independently" },
      ],
    },
    {
      type: "paragraph",
      text: "Resing is an amplification action. It helps people discover the original work through your connection to it.",
    },

    { type: "heading", text: "Source eligibility and permissions" },
    {
      type: "paragraph",
      text: "Not all content can be Resinged. The source creator or content owner controls whether their content can be Resinged and under what conditions.",
    },
    {
      type: "paragraph",
      text: "Source permission settings may include:",
    },
    {
      type: "table",
      headers: ["Setting", "Meaning"],
      rows: [
        ["Open", "Any eligible member may Resing the content"],
        ["Request only", "Resing creates a request that requires source owner approval"],
        ["Collaborator only", "Only approved collaborators or Workspace members may Resing"],
        ["Closed", "Resing is unavailable for this content"],
      ],
    },
    {
      type: "paragraph",
      text: "The source owner may also impose:",
    },
    {
      type: "list",
      items: [
        { text: "Default audience or visibility restrictions on Resings" },
        { text: "Attribution requirements" },
        { text: "Comment or interaction restrictions" },
        { text: "Download or distribution restrictions" },
        { text: "Territory or age restrictions" },
      ],
    },
    {
      type: "paragraph",
      text: "A source’s public visibility alone does not imply Resing permission. The platform evaluates the source’s explicit participation settings before allowing the action.",
    },

    { type: "heading", text: "What you can Resing" },
    {
      type: "paragraph",
      text: "You may be able to Resing eligible:",
    },
    {
      type: "list",
      items: [
        { text: "Posts" },
        { text: "Songs and releases" },
        { text: "Music videos and clips" },
        { text: "Podcast episodes" },
        { text: "Setlists" },
        { text: "Artist or creator content" },
        { text: "Events" },
        { text: "Live replays" },
        { text: "Other supported public MusicOSY content" },
      ],
    },
    {
      type: "paragraph",
      text: "The creator or content owner may limit whether their content can be Resinged.",
    },

    { type: "heading", text: "Why you may not be able to Resing" },
    {
      type: "paragraph",
      text: "You may not be able to Resing content if it is:",
    },
    {
      type: "list",
      items: [
        { text: "Private" },
        { text: "Limited to followers, subscribers, collaborators, or Workspace members" },
        { text: "Unlisted" },
        { text: "Ticketed, paid, or otherwise restricted" },
        { text: "Blocked between you and another member" },
        { text: "Age-restricted or territory-limited" },
        { text: "Removed from public discovery" },
        { text: "Limited by rights, safety, moderation, or enforcement rules" },
        { text: "No longer published or available" },
        { text: "Restricted by the source creator’s sharing or participation preferences" },
        { text: "Subject to a source permission setting of Closed or Request only" },
      ],
    },
    {
      type: "paragraph",
      text: "A Resing does not override the source content’s privacy, visibility, access, or safety settings.",
    },

    { type: "heading", text: "Resing is not the same as Share" },
    {
      type: "paragraph",
      text: "Resing and Share serve different purposes.",
    },
    {
      type: "table",
      headers: ["Action", "Best for"],
      rows: [
        ["Resing", "Amplifying content to your MusicOSY community on The Stage"],
        ["Share / Pass the Mic", "Sending content directly through Backstage, a link, email, text, or another app"],
        ["Love", "Showing appreciation for content"],
        ["Keep", "Saving content to your personal Library"],
        ["Follow", "Staying connected to the person behind the content"],
      ],
    },
    {
      type: "paragraph",
      text: "Use Resing when you want your community to see something.",
    },
    {
      type: "paragraph",
      text: "Use Share when you want to send something to a specific person or destination.",
    },

    { type: "heading", text: "Resing is not the same as Ensemble, Harmony, or Rework" },
    {
      type: "paragraph",
      text: "MusicOSY offers several participatory actions. Each creates a different kind of derived object with different rights and attribution rules.",
    },
    {
      type: "table",
      headers: ["Action", "What it creates"],
      rows: [
        ["Resing", "A social presentation of the source content shared to your community"],
        ["Ensemble", "A multi-contributor performance where you join or layer a contribution with the source"],
        ["Harmony", "A complementary vocal or musical layer added to the source"],
        ["Rework", "A transformative reinterpretation or remix-style version of the source"],
      ],
    },
    {
      type: "paragraph",
      text: "A Resing does not create a new performance, recording, or derivative work. It creates a social reference to the original.",
    },
    {
      type: "paragraph",
      text: "Ensemble, Harmony, and Rework each require separate source eligibility, may require additional rights or consent, and follow their own publication and distribution rules.",
    },

    { type: "heading", text: "Attribution" },
    {
      type: "paragraph",
      text: "Every Resing preserves the original source attribution.",
    },
    {
      type: "list",
      items: [
        { text: "The source creator’s name, profile, or Artist Page remains linked to the Resing where the source remains eligible for display." },
        { text: "Your Resing identifies you as the member who amplified the content, not as the creator of the source." },
        { text: "Attribution must not be removed, hidden, or misrepresented." },
        { text: "A Resing must not imply that you created, own, produced, or are otherwise responsible for the original content." },
        { text: "A Resing must not imply endorsement by the source creator, MusicOSY, or any third party." },
      ],
    },
    {
      type: "paragraph",
      text: "If the source creator changes their display name, handle, or profile, your Resing will reflect the updated attribution where technically available.",
    },

    { type: "heading", text: "What happens when the source becomes unavailable" },
    {
      type: "paragraph",
      text: "Your Resing depends on the source content. If the source becomes unavailable, your Resing may be affected.",
    },
    {
      type: "table",
      headers: ["Source change", "What happens to your Resing"],
      rows: [
        ["Source creator unpublishes the content", "Your Resing becomes unavailable or loses its source presentation"],
        ["Source is restricted by rights or takedown", "Your Resing is restricted where source dependence requires it"],
        ["Source is deleted by the creator", "Your Resing may remain only if independent rights or status supports it; otherwise it is restricted"],
        ["Source becomes private", "Your Resing retains only access explicitly permitted by the source’s new rules"],
        ["Source creator’s account is deleted", "Attribution and availability follow deletion, rights, and retention rules"],
        ["Source is restored", "Your Resing may restore if no independent restriction remains"],
      ],
    },
    {
      type: "paragraph",
      text: "Removing or restricting a source does not automatically delete your Resing record, but it may limit or remove the source content displayed within it.",
    },

    { type: "heading", text: "Remove a Resing" },
    {
      type: "paragraph",
      text: "You can remove a Resing from your profile or community view when you no longer want to amplify it.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Open the Resing on your profile or Feed." },
        { text: "Select the More menu." },
        { text: "Select Remove Resing or the available removal option." },
        { text: "Confirm the action." },
      ],
    },
    {
      type: "paragraph",
      text: "Removing your Resing stops your social presentation of the content. It does not:",
    },
    {
      type: "list",
      items: [
        { text: "Delete the original item" },
        { text: "Remove the original creator’s post" },
        { text: "Affect other members’ Resings, Loves, Keeps, Notes, or Shares" },
        { text: "Affect the source content’s catalog, rights, or publication state" },
        { text: "Remove any analytics or audit records associated with your Resing" },
      ],
    },

    { type: "heading", text: "Resing and external distribution" },
    {
      type: "paragraph",
      text: "A Resing is a MusicOSY social action. It is not a distribution action.",
    },
    {
      type: "paragraph",
      text: "You may not use a Resing to:",
    },
    {
      type: "list",
      items: [
        { text: "Deliver content to external distributors" },
        { text: "Submit content to streaming platforms, stores, or external services" },
        { text: "Claim content as your own for distribution purposes" },
        { text: "Register content with rights systems or Content ID" },
        { text: "Sell, license, or commercially exploit the source content" },
      ],
    },
    {
      type: "paragraph",
      text: "External distribution of music, video, or podcast content follows separate catalog and distribution rules and requires explicit authority.",
    },

    { type: "heading", text: "Resing responsibly" },
    {
      type: "paragraph",
      text: "Before you Resing something, consider whether it is accurate, safe, and appropriate for your community.",
    },
    {
      type: "paragraph",
      text: "Do not Resing content to:",
    },
    {
      type: "list",
      items: [
        { text: "Harass, target, shame, or intimidate someone" },
        { text: "Spread deceptive or harmful information" },
        { text: "Misrepresent someone else’s work as your own" },
        { text: "Circumvent a restriction, removal, or enforcement action" },
        { text: "Share private or restricted material" },
        { text: "Remove or hide creator attribution" },
        { text: "Amplify content that violates MusicOSY rules" },
        { text: "Evade a block, mute, or safety boundary" },
        { text: "Create the appearance of endorsement or affiliation that does not exist" },
      ],
    },
    {
      type: "paragraph",
      text: "If you see a post, account, or release that violates MusicOSY rules, Flag (report) it instead of Resing it.",
    },
  ],
  related: [
    "/resources/help-center/using-musicosy/content-interaction/resing-and-pass-the-mic",
    "/resources/help-center/using-musicosy/content-interaction/share",
    "/resources/help-center/using-musicosy/backstage-and-community/pass-the-mic-sharing",
    "/resources/help-center/using-musicosy/content-interaction/love-and-keep-content",
    "/resources/help-center/using-musicosy/content-interaction/leave-a-note-and-join-the-conversation",
    "/resources/help-center/using-musicosy/content-interaction/block-and-mute",
    "/resources/help-center/using-musicosy/content-interaction/take-your-post-off-the-stage",
  ],
};
