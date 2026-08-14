import type { Doc } from "./types";

/**
 * "Create on Musicosy" — Using Musicosy → Create & Publish doc.
 *
 * Overview of creation on MusicOSY: the universal Create button, choosing a
 * starting point (Post, Studio, Upload, Release/Catalog, Drafts), creating a
 * post for The Stage, starting a Studio project, saving and managing drafts,
 * what to check before publishing, content visibility options, and creating
 * responsibly (rights, permissions, and prohibited uses).
 *
 * Content provided verbatim by the user; structured into blocks.
 */
export const createOnMusicosyDoc: Doc = {
  path: "/resources/help-center/using-musicosy/create-and-publish/create-on-musicosy",
  blocks: [
    {
      type: "paragraph",
      text: "Create on MusicOSY to turn an idea into a post on The Stage, a Studio project, a Fresh Drop (release), a video, or another eligible creative work.",
    },
    {
      type: "paragraph",
      text: "You can start with something simple—like a quick rehearsal clip—or use Studio to develop a larger, multi-track project before you publish it.",
    },
    {
      type: "callout",
      variant: "note",
      text: "Creating or uploading something does not automatically make it public, distributed, monetized, or cleared for commercial use. Publishing and distribution are separate, governed steps.",
    },

    { type: "heading", text: "Start creating" },
    {
      type: "paragraph",
      text: "To create eligible content:",
    },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Select the universal Create button from your main navigation." },
        { text: "Choose what you want to make (e.g., Post, Studio Project, Upload, Release)." },
        { text: "Add, capture, or upload your content." },
        { text: "Add a title, caption, description, tags, artwork, credits, or other available metadata." },
        { text: "Choose your audience and interaction settings." },
        { text: "Save as a draft or continue to publish." },
      ],
    },
    {
      type: "paragraph",
      text: "The tools and options you see will vary based on the type of content, your active Context (Personal vs. Workspace), your available Toolkits, and the platform rules that apply to the item.",
    },

    { type: "heading", text: "Choose your starting point" },
    {
      type: "paragraph",
      text: "MusicOSY offers different creation flows depending on your goal:",
    },
    {
      type: "list",
      items: [
        { lead: "Post on The Stage:", text: "Use this when you want to share a moment, thought, update, image, video, or music clip directly with your community." },
        { lead: "Studio:", text: "Use this when you want to develop an idea, organize creative work, record audio, make changes over time, or work with collaborators." },
        { lead: "Upload Flow:", text: "Use this when you have finished music, video, or artwork files ready to add to your profile or catalog." },
        { lead: "Release / Catalog Flow:", text: "Use this when you are preparing music for a formal Fresh Drop, complete with official metadata, Split Sheets, credits, and external distribution steps." },
        { lead: "Drafts:", text: "Use this when your work is not yet ready to share." },
      ],
    },
    {
      type: "paragraph",
      text: "A social post on The Stage can point people to a track or release, but a social post is not the canonical catalog, rights, credit, financial, or distribution record.",
    },

    { type: "heading", text: "Create a post for The Stage" },
    {
      type: "paragraph",
      text: "To share a moment with your community:",
    },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Select Create and choose the Post option." },
        { text: "Add your text, media, music clip, link, or supported creative element." },
        { text: "Add a caption, title, tags, @mentions, or other context." },
        { text: "Review who can see and interact with the post (Visibility and Interaction settings)." },
        { text: "Save it as a draft or publish it to The Stage when ready." },
      ],
    },
    {
      type: "paragraph",
      text: "Use posts to share behind-the-scenes updates, live clips, new ideas, event announcements, or music discoveries.",
    },

    { type: "heading", text: "Start a Studio project" },
    {
      type: "paragraph",
      text: "To make something that needs more time, structure, or collaboration:",
    },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Open Studio." },
        { text: "Select Start a project." },
        { text: "Name your project." },
        { text: "Add or create audio, video, artwork, notes, or other project material using the available Toolkit features." },
        { text: "Save your progress." },
        { text: "Invite collaborators only when the project settings and your permissions allow it." },
      ],
    },
    {
      type: "paragraph",
      text: "Studio is designed for work in progress. It helps you organize ideas and build tracks before you decide whether, where, or how to publish them.",
    },

    { type: "heading", text: "Save and manage drafts" },
    {
      type: "paragraph",
      text: "Use drafts when your work is not ready to publish. A draft stays strictly private until it meets the applicable validation, processing, rights, and publishing conditions.",
    },
    {
      type: "paragraph",
      text: "Drafts are useful when you want to:",
    },
    {
      type: "list",
      items: [
        { text: "Finish a caption or metadata later" },
        { text: "Review an upload before sharing it" },
        { text: "Wait for final artwork or formal credits" },
        { text: "Ask a collaborator for input" },
        { text: "Prepare content for a scheduled future release" },
      ],
    },
    {
      type: "paragraph",
      text: "Saving a draft does not publish it to The Stage, make it discoverable, or send it to external distributors.",
    },

    { type: "heading", text: "Before you publish" },
    {
      type: "paragraph",
      text: "Before you publish or distribute, ensure you have the legal right to use everything in your creation. Confirm that:",
    },
    {
      type: "list",
      items: [
        { text: "Your title, caption, description, tags, artwork, and credits are accurate." },
        { text: "You own the content or have the necessary licenses and permissions to use it." },
        { text: "You have permission from collaborators, performers, and anyone whose name, voice, likeness, or work appears in it." },
        { text: "Your chosen audience and interaction settings match your intent." },
        { text: "You are using the appropriate flow for a social post, Studio project, catalog item, or formal release." },
        { text: "You understand that external distribution, monetization, and commercial release require separate steps and rights clearances." },
      ],
    },
    {
      type: "paragraph",
      text: "Creating or uploading content does not override rights restrictions, safety limits, legal holds, blocked relationships, or missing permissions.",
    },

    { type: "heading", text: "Choose content visibility" },
    {
      type: "paragraph",
      text: "Choose visibility based on who should be able to find and interact with your work:",
    },
    {
      type: "list",
      items: [
        { lead: "Draft:", text: "Private and visible only to you (or authorized Workspace members)." },
        { lead: "Published (The Stage):", text: "Available to your authorized audience or the public." },
        { lead: "Unpublished:", text: "Withdrawn from public or gated access (Taken Off Stage) but retained in your history." },
        { lead: "Archived (Vault):", text: "Inactive and not normally public or editable." },
      ],
    },

    { type: "heading", text: "Create responsibly" },
    {
      type: "paragraph",
      text: "Only upload or publish content that you have the right to use.",
    },
    {
      type: "paragraph",
      text: "Do not use MusicOSY creation tools to:",
    },
    {
      type: "list",
      items: [
        { text: "Upload work you do not own or have permission to use." },
        { text: "Misrepresent credits, ownership, affiliations, or endorsements." },
        { text: "Share private, restricted, or confidential Workspace information." },
        { text: "Impersonate someone else." },
        { text: "Use a person’s name, voice, likeness, image, or work without permission (including unauthorized AI voice cloning)." },
        { text: "Circumvent safety, rights, age, territory, privacy, or access restrictions." },
        { text: "Treat a participatory action (Resing, Ensemble, Harmony, or Rework) as automatic permission to distribute, monetize, or claim rights to someone else’s source work." },
      ],
    },
  ],
  related: [
    "/resources/help-center/using-musicosy/create-and-publish/what-is-studio",
    "/resources/help-center/using-musicosy/create-and-publish/start-a-studio-project",
    "/resources/help-center/using-musicosy/create-and-publish/save-and-manage-drafts",
    "/resources/help-center/using-musicosy/create-and-publish/choose-content-visibility",
  ],
};
