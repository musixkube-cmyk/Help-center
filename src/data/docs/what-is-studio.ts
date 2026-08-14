import type { Doc } from "./types";

/**
 * "What is Studio?" — Using Musicosy → Create & Publish doc.
 *
 * Overview of Studio as MusicOSY's creative workspace: what you can do,
 * starting a Session Project, privacy guarantees, working with collaborators
 * (Sessions), the relationship between Studio and publishing, and Studio
 * Allowances/eligibility for advanced tools.
 *
 * Content provided verbatim by the user; structured into blocks.
 */
export const whatIsStudioDoc: Doc = {
  path: "/resources/help-center/using-musicosy/create-and-publish/what-is-studio",
  blocks: [
    {
      type: "paragraph",
      text: "Studio is MusicOSY’s creative workspace for making, organizing, releasing, and managing your work.",
    },
    {
      type: "paragraph",
      text: "Use Studio when your idea needs more than a single social post on The Stage. You can start a Session Project, add media, keep drafts (Work in Progress), prepare credits and Split Sheets, Call In a Collaborator, and move work toward a formal Release when it is ready.",
    },
    {
      type: "paragraph",
      text: "Example:",
    },
    {
      type: "quote",
      text: "Start a song idea in Studio.\nAdd a demo, lyrics, cover artwork, and notes.\nCall In a Collaborator (e.g., an eligible producer) to review the Session.\nPrepare the finished work for a Fresh Drop (release) when the team is ready.",
    },
    {
      type: "paragraph",
      text: "Studio is natively connected to your MusicOSY account. You do not need a separate account or login to move between listening, posting, Studio, creator tools, and eligible Workspace operations.",
    },

    { type: "heading", text: "What you can do in Studio" },
    {
      type: "paragraph",
      text: "Use Studio to:",
    },
    {
      type: "list",
      items: [
        { text: "Start and manage Session Projects" },
        { text: "Add to Studio (music, video, artwork, notes, and other supported media)" },
        { text: "Save your Work in Progress (drafts)" },
        { text: "Organize project material and source assets" },
        { text: "Prepare titles, descriptions, tags, credits, and Split Sheets" },
        { text: "Work with eligible collaborators in a shared Session" },
        { text: "Review versions, feedback, renders, exports, and project details" },
        { text: "Prepare work for publishing, catalog management, or external distribution workflows" },
        { text: "Access eligible creative tools, including AI assistance, rendering, stems, and mastering" },
      ],
    },
    {
      type: "paragraph",
      text: "Studio can be used for personal work or shared work, depending on the project, your active Context (Personal vs. Workspace), and the permissions granted to you.",
    },

    { type: "heading", text: "Start with a Session Project" },
    {
      type: "paragraph",
      text: "A Studio project is a private working space for a creative idea.",
    },
    {
      type: "paragraph",
      text: "To begin:",
    },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Open Studio from the universal Create menu or your navigation." },
        { text: "Select Start a project." },
        { text: "Name your Session Project." },
        { text: "Add to Studio or create the available music, video, artwork, notes, or other material." },
        { text: "Save your progress." },
        { text: "Continue working, Call In a Collaborator, or prepare the project for release when ready." },
      ],
    },
    {
      type: "paragraph",
      text: "Every member can create personal drafts. MusicOSY may offer more advanced Studio features based on your active Toolkits, account eligibility, project needs, or applicable Studio Allowances.",
    },

    { type: "heading", text: "Your work stays private" },
    {
      type: "paragraph",
      text: "Studio work is strictly private until you explicitly choose to release it.",
    },
    {
      type: "paragraph",
      text: "Projects, drafts, unsent forms, upload progress, render settings, and scheduled publishing configurations are autosaved and recoverable where technically practical.",
    },
    {
      type: "paragraph",
      text: "Starting a project, adding files, or making changes in Studio does not automatically:",
    },
    {
      type: "list",
      items: [
        { lead: "Release", text: "content to The Stage" },
        { text: "Add a work to your public profile or Artist Page" },
        { text: "Send a Fresh Drop to external distribution channels" },
        { text: "Create official catalog credits or financial Split Sheets" },
        { text: "Give another person access to your project" },
        { text: "Start a paid render, AI job, distribution delivery, or other consequential action without your explicit confirmation" },
      ],
    },
    {
      type: "paragraph",
      text: "Closing the MusicOSY app or browser will never silently publish your content, submit a form, spend money, start distribution, or begin an AI generation job.",
    },

    { type: "heading", text: "Work with others (Sessions)" },
    {
      type: "paragraph",
      text: "You can Call In a Collaborator to eligible Studio projects when the project’s collaboration settings and your permissions allow it.",
    },
    {
      type: "paragraph",
      text: "A collaborator’s access depends on:",
    },
    {
      type: "list",
      items: [
        { text: "The project owner (Personal Context vs. Workspace Context)" },
        { text: "Workspace roles and scoped permissions" },
        { text: "Project-level access settings" },
        { text: "Content visibility and privacy settings" },
        { text: "Account, safety, Block, rights, and eligibility rules" },
      ],
    },
    {
      type: "paragraph",
      text: "Workspace roles determine what people can do inside a particular shared project, label, network, or Studio. They do not replace your global MusicOSY identity, and a Workspace role never overrides a personal member Block.",
    },
    {
      type: "callout",
      variant: "note",
      text: "Giving someone project access does not automatically grant them ownership, formal catalog credit, royalty splits, distribution authority, or permission to publish the work outside of the MusicOSY Session.",
    },

    { type: "heading", text: "Studio and publishing" },
    {
      type: "paragraph",
      text: "Studio helps you make and prepare work. Releasing (publishing) is a separate, governed decision.",
    },
    {
      type: "paragraph",
      text: "When your work is ready, you can hand it off from Studio into the relevant post, catalog, Fresh Drop, or distribution workflow. The available next steps depend on the kind of content you created and the rights, permissions, and eligibility rules that apply.",
    },
    {
      type: "paragraph",
      text: "A Studio project may become a source asset for a catalog item, but the Studio project itself is not automatically a public release, rights record, financial record, or distribution record.",
    },
    {
      type: "paragraph",
      text: "Before you release or distribute work, ensure your metadata, credits, permissions, rights declarations, audience settings, and territory choices are accurate.",
    },

    { type: "heading", text: "Studio Allowances and eligibility" },
    {
      type: "paragraph",
      text: "Some Studio tools (like AI generation, high-res rendering, or advanced mastering) may have eligibility requirements, feature availability rules, storage limits, or concurrency limits.",
    },
    {
      type: "paragraph",
      text: "MusicOSY uses Studio Allowances to manage these resources. The platform will always show you the applicable allowance, quota, AI credit cost, or recovery information before you consume them, ensuring you are never surprised by metered usage.",
    },
  ],
  related: [
    "/resources/help-center/using-musicosy/create-and-publish/start-a-studio-project",
    "/resources/help-center/using-musicosy/create-and-publish/save-and-manage-drafts",
    "/resources/help-center/using-musicosy/create-and-publish/upload-music-video-and-artwork",
    "/resources/help-center/using-musicosy/create-and-publish/add-credits-and-collaborators",
    "/resources/help-center/using-musicosy/create-and-publish/studio-collaboration-and-session-roles",
    "/resources/help-center/using-musicosy/create-and-publish/ai-tools",
    "/resources/help-center/using-musicosy/create-and-publish/rendering",
    "/resources/help-center/using-musicosy/create-and-publish/stems",
    "/resources/help-center/using-musicosy/create-and-publish/mastering",
    "/resources/help-center/using-musicosy/create-and-publish/choose-content-visibility",
  ],
};
