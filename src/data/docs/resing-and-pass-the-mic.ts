import type { Doc } from "./types";

/**
 * "Resing and Pass the Mic" — Using MusicOSY → Content Interaction doc.
 *
 * MusicOSY gives you two distinct ways to amplify someone else's work:
 * Resing (repost/participatory amplification) and Pass the Mic
 * (sharing/recommendation). Covers: how to Resing, source eligibility
 * and permissions (Open / Request Only / Collaborator Only / Closed),
 * what happens if the source changes, how to Pass the Mic, a 7-row
 * comparison table (Resing / Pass the Mic / Ensemble / Harmony / Rework /
 * Love / Keep), respecting source controls, and sharing/amplifying
 * responsibly.
 *
 * Content provided verbatim by the user; structured into blocks. Italic
 * "Note:" lines and the bold "Important:" note are rendered as callouts.
 */
export const resingAndPassTheMicDoc: Doc = {
  path: "/resources/help-center/using-musicosy/content-interaction/resing-and-pass-the-mic",
  blocks: [
    {
      type: "paragraph",
      text: "MusicOSY gives you two distinct ways to amplify someone else’s work on The Stage:",
    },
    {
      type: "list",
      items: [
        { lead: "Resing", text: "is MusicOSY’s repost and participatory amplification tool." },
        { lead: "Pass the Mic", text: "is MusicOSY’s sharing and recommendation tool." },
      ],
    },
    {
      type: "paragraph",
      text: "Both help music and culture travel. Both preserve the original creator’s connection to their work. Neither gives you ownership of someone else’s music, master recording, composition, catalog, or creative identity.",
    },

    { type: "heading", text: "Resing" },
    {
      type: "paragraph",
      text: "A Resing is a structured participatory action that lets you respond to, repost, or build from an eligible source performance or composition.",
    },
    {
      type: "paragraph",
      text: "When you create a Resing, MusicOSY creates a new, governed social object or presentation that remains permanently linked to the original source.",
    },
    {
      type: "paragraph",
      text: "Use Resing when you want to:",
    },
    {
      type: "list",
      items: [
        { text: "Repost a creator’s Fresh Drop (release), post, or video to your community" },
        { text: "Respond to an eligible music or performance moment" },
        { text: "Join an open creative prompt or cultural conversation" },
        { text: "Put another creator’s work in front of your followers with clear attribution" },
      ],
    },

    { type: "heading", text: "How to Resing", level: 3 },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Open the eligible source post, track, video, or performance on The Stage." },
        { text: "Select Resing." },
        { text: "Review the source conditions, attribution requirements, and available options." },
        { text: "Add your response, caption, or presentation where supported." },
        { text: "Choose your audience and visibility options." },
        { text: "Review attribution and any source-owner conditions." },
        { text: "Publish your Resing." },
      ],
    },

    { type: "heading", text: "Source Eligibility and Permissions", level: 3 },
    {
      type: "paragraph",
      text: "Not every item can be Resinged. The original creator controls their participation settings and may choose whether Resings are:",
    },
    {
      type: "list",
      items: [
        { lead: "Open:", text: "Any eligible member may Resing the content." },
        { lead: "Request Only:", text: "Resing creates a request that requires source owner approval." },
        { lead: "Collaborator Only:", text: "Only approved collaborators or Workspace members may Resing." },
        { lead: "Closed:", text: "Resing is unavailable for this content." },
      ],
    },
    {
      type: "callout",
      variant: "note",
      text: "A source’s public visibility alone does not imply Resing permission. The platform evaluates the source’s explicit participation settings before allowing the action.",
    },

    { type: "heading", text: "Your Resing is connected to the source", level: 3 },
    {
      type: "paragraph",
      text: "When you create a Resing:",
    },
    {
      type: "list",
      items: [
        { text: "Your contribution becomes a new governed MusicOSY object linked to the source." },
        { text: "The source creator remains connected to the original work, and attribution remains visible." },
        { text: "Your audience, Notes (comments), downloads, and distribution options may be limited by the source creator’s conditions." },
        { text: "You control only your own eligible contribution—not the source recording, composition, catalog, or original post." },
      ],
    },
    {
      type: "callout",
      variant: "note",
      title: "Important",
      text: "Creating a Resing does not mean the source is legally cleared for external distribution, monetization, advertising, or independent release. Those actions require separate rights, catalog, and distribution approval through your Studio or label workspace.",
    },

    { type: "heading", text: "What happens if the source changes", level: 3 },
    {
      type: "paragraph",
      text: "A Resing depends on the source content remaining eligible. If the original creator takes the content Off Stage (unpublishes), deletes it, or loses rights to the source, your linked Resing may be affected:",
    },
    {
      type: "table",
      headers: ["Source status change", "Required Resing outcome"],
      rows: [
        ["Author unpublishes source", "Linked Resings become unavailable or lose source presentation according to source policy."],
        ["Rights restriction/takedown", "Linked Resings must be restricted where source dependence requires it."],
        ["Source deleted by creator", "Derived objects may remain only if independent rights/status supports it; otherwise restricted."],
        ["Source becomes private", "Existing authorized participants retain only access explicitly permitted by source rule."],
        ["Source account deleted", "Attribution/availability follows deletion, rights, and retention rules."],
        ["Source restored", "Eligible linked Resings may restore if no independent restriction remains."],
      ],
    },

    { type: "heading", text: "Pass the Mic" },
    {
      type: "paragraph",
      text: "Pass the Mic is an intentional recommendation or hand-off action.",
    },
    {
      type: "paragraph",
      text: "Use Pass the Mic when you want to spotlight another creator, release, event, community contribution, Setlist, or music moment without creating a derived presentation on your own profile.",
    },
    {
      type: "paragraph",
      text: "Pass the Mic is best for:",
    },
    {
      type: "list",
      items: [
        { text: "Sending a song to a friend via Backstage (direct messages)" },
        { text: "Sharing an artist or Fresh Drop with your community" },
        { text: "Passing along an upcoming event or Take the Stage (Live Session)" },
        { text: "Recommending a creator who deserves more listeners" },
        { text: "Sharing a Setlist, podcast, or video through an external app or direct link" },
      ],
    },

    { type: "heading", text: "How to Pass the Mic", level: 3 },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Open the eligible content you want to recommend." },
        { text: "Select Share or Pass the Mic." },
        { text: "Choose a destination (e.g., Backstage, text message, email, an external social app, or Copy Link)." },
        { text: "Add a message or Note if you want to explain why you are recommending it." },
        { text: "Send or post the share." },
      ],
    },
    {
      type: "callout",
      variant: "note",
      text: "The person receiving the share must still pass entitlement and access checks. Sharing does not override privacy, subscriber-only gating, purchase requirements, age-gating, territory rights, or safety restrictions.",
    },

    { type: "heading", text: "Resing vs. Pass the Mic vs. Other Actions" },
    {
      type: "paragraph",
      text: "It is important to understand the difference between MusicOSY’s core interaction and participatory mechanics:",
    },
    {
      type: "table",
      headers: ["Action", "What it does", "Best for"],
      rows: [
        ["Resing", "Creates a linked response or social presentation based on an eligible source.", "Participating in or amplifying a music moment directly on The Stage."],
        ["Pass the Mic", "Shares or recommends an eligible source without creating a derived contribution.", "Sending someone towards music, creators, events, or culture they should discover."],
        ["Ensemble", "Joins or layers a compatible contribution with an eligible source.", "Multi-contributor performances."],
        ["Harmony", "Adds a complementary vocal or musical layer to a source.", "Musical layering."],
        ["Rework", "Creates a transformative reinterpretation or remix-style version.", "Derivative creative works (requires strict rights clearance)."],
        ["Love", "Shows social appreciation.", "Quick, lightweight support for a track or post."],
        ["Keep", "Saves an item to your personal Library.", "Personal retrieval, organization, and building Setlists."],
      ],
    },

    { type: "heading", text: "Respect source controls and eligibility" },
    {
      type: "paragraph",
      text: "A source creator may limit or restrict Resing and Pass the Mic availability. Furthermore, platform safety and rights rules always override standard sharing permissions.",
    },
    {
      type: "paragraph",
      text: "You may not be able to use these actions if the content is:",
    },
    {
      type: "list",
      items: [
        { text: "Set to Private or Unlisted" },
        { text: "Limited to approved followers, subscribers, or Circle members" },
        { text: "Closed to Resings by the source creator" },
        { text: "Restricted by the creator’s sharing or Studio settings" },
        { text: "Blocked between you and another member" },
        { text: "Age-restricted or territory-limited" },
        { text: "Restricted by rights, safety, moderation, or Trust & Safety enforcement rules" },
        { text: "No longer available or taken down" },
      ],
    },
    {
      type: "paragraph",
      text: "A creator’s permission to allow Resings does not override private visibility, subscriber gating, or a member Block.",
    },

    { type: "heading", text: "Share and Amplify responsibly" },
    {
      type: "paragraph",
      text: "Use Resing and Pass the Mic to elevate music and culture—not to misrepresent, harass, or exploit someone else’s work.",
    },
    {
      type: "paragraph",
      text: "Do not use either action to:",
    },
    {
      type: "list",
      items: [
        { text: "Claim another creator’s work as your own" },
        { text: "Remove, obscure, or hide source attribution" },
        { text: "Circumvent content restrictions, geo-blocks, or takedowns" },
        { text: "Share private, restricted, or confidential Studio / Workspace material" },
        { text: "Imply a sponsorship, partnership, or endorsement that does not exist" },
        { text: "Target, mock, threaten, or harass another member" },
        { text: "Mislead people about rights, ownership, or commercial availability" },
      ],
    },
    {
      type: "paragraph",
      text: "If you see content that violates MusicOSY’s Community Guidelines, use the Flag (Report) tool instead of amplifying it.",
    },
  ],
  related: [
    "/resources/help-center/using-musicosy/content-interaction/repost",
    "/resources/help-center/using-musicosy/content-interaction/share",
    "/resources/help-center/using-musicosy/backstage-and-community/pass-the-mic-sharing",
    "/resources/help-center/using-musicosy/backstage-and-community/share-content-in-backstage",
    "/resources/help-center/using-musicosy/content-interaction/love-and-keep-content",
    "/resources/help-center/using-musicosy/content-interaction/leave-a-note-and-join-the-conversation",
    "/resources/help-center/using-musicosy/content-interaction/block-and-mute",
    "/resources/help-center/using-musicosy/content-interaction/take-your-post-off-the-stage",
  ],
};
