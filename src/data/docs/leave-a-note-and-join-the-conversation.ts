import type { Doc } from "./types";

/**
 * "Leave a Note and join the conversation" — Using Music OSY → Content
 * Interaction doc.
 *
 * A Note is MusicOSY's term for a comment. Covers: leaving a Note, what
 * makes a good Note (with 4 example quotes), replying to a Note, Loving a
 * Note, mentioning someone carefully (with a "Do not" prohibition callout),
 * when Notes are unavailable, keeping the conversation musical and human,
 * and flagging harmful Notes.
 *
 * Content provided verbatim by the user; structured into blocks. The 4
 * example quotes are rendered as 4 separate quote blocks (each is a
 * distinct example of a good Note). The "Do not use mentions…" prohibition
 * is rendered as a warning callout for visual emphasis.
 */
export const leaveANoteAndJoinTheConversationDoc: Doc = {
  path: "/resources/help-center/using-musicosy/content-interaction/leave-a-note-and-join-the-conversation",
  blocks: [
    {
      type: "paragraph",
      text: "A Note is MusicOSY’s term for a comment.",
    },
    {
      type: "paragraph",
      text: "Leave a Note when you want to respond to a song, post, video, Fresh Drop (release), event, Setlist, or other cultural moment on The Stage. A thoughtful Note can celebrate a creator, share a personal connection to the work, ask a real question, recommend a related artist, or start a conversation with people who are feeling the same music.",
    },
    {
      type: "paragraph",
      text: "A Note is more than a reaction. It is your voice in the room.",
    },

    { type: "heading", text: "Leave a Note" },
    {
      type: "paragraph",
      text: "To leave a Note on eligible content:",
    },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Open the post, track, video, release, event, or other content." },
        { text: "Select the Notes area." },
        { text: "Select the text field." },
        { text: "Write your response." },
        { text: "Review your Note before posting." },
        { text: "Select Post or Send." },
      ],
    },
    {
      type: "paragraph",
      text: "Your Note will appear in the conversation beneath the content, subject to the creator’s audience settings, interaction permissions, and MusicOSY’s safety and moderation rules.",
    },

    { type: "heading", text: "What makes a good Note" },
    {
      type: "paragraph",
      text: "The best Notes add something to the moment. You might:",
    },
    {
      type: "list",
      items: [
        { text: "Tell a creator which lyric, sound, or visual stayed with you" },
        { text: "Share a memory connected to a song" },
        { text: "Ask a thoughtful question about the release or Studio process" },
        { text: "Recommend another track or artist that fits the conversation" },
        { text: "Encourage someone who is sharing work for the first time" },
        { text: "Respond to another member with respect" },
        { text: "Add useful context to a discussion" },
        { text: "Celebrate a breakthrough, Take the Stage (live) performance, or milestone" },
      ],
    },
    {
      type: "paragraph",
      text: "Examples:",
    },
    {
      type: "quote",
      text: "That bass line at 1:14 changed the entire mood of the track.",
    },
    {
      type: "quote",
      text: "This feels like driving home after a show when the city is finally quiet.",
    },
    {
      type: "quote",
      text: "The vocal arrangement in the second verse is unreal. What inspired that choice?",
    },
    {
      type: "quote",
      text: "Adding this to my late-night Setlist immediately.",
    },
    {
      type: "paragraph",
      text: "A short, genuine Note can mean more than a long response that says nothing.",
    },

    { type: "heading", text: "Reply to another Note" },
    {
      type: "paragraph",
      text: "Use replies to join an existing conversation thread.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Open the Notes thread." },
        { text: "Find the Note you want to respond to." },
        { text: "Select Reply." },
        { text: "Write your response." },
        { text: "Post your reply." },
      ],
    },
    {
      type: "paragraph",
      text: "Replying keeps conversations connected. Depending on the creator's Signal Center preferences, MusicOSY may notify the original commenter and the content owner about new activity in the thread.",
    },

    { type: "heading", text: "Love a Note" },
    {
      type: "paragraph",
      text: "If another member says something you appreciate, you can Love their Note.",
    },
    {
      type: "paragraph",
      text: "Loving a Note shows appreciation without adding another reply to the thread. It helps thoughtful conversations rise naturally and signals to the recommendation engine what the community is engaging with, without cluttering the comment section.",
    },

    { type: "heading", text: "Mention someone carefully" },
    {
      type: "paragraph",
      text: "You can Mention another member in a Note using their @handle.",
    },
    {
      type: "paragraph",
      text: "Mention someone when they are genuinely part of the conversation—for example, when you are sharing a release with a collaborator, thanking a producer, or inviting a friend who would appreciate the music.",
    },
    {
      type: "callout",
      variant: "warning",
      text: "Do not use mentions to pressure someone into replying, direct harassment toward them, bring them into a conflict, or spam them with unrelated promotion.",
    },

    { type: "heading", text: "Know when Notes are unavailable" },
    {
      type: "paragraph",
      text: "You may not be able to leave a Note if:",
    },
    {
      type: "list",
      items: [
        { text: "The creator has disabled or locked comments on the post or release." },
        { text: "The conversation is limited to specific audiences (e.g., Subscribers or Inner Circle members)." },
        { text: "The content is private, restricted, removed, or unavailable in your territory." },
        { text: "You or the other member has used Block." },
        { text: "MusicOSY has applied rate limits to prevent spam, abuse, or automated misuse." },
        { text: "The content is subject to safety, rights, age, moderation, or Trust & Safety enforcement restrictions." },
      ],
    },
    {
      type: "paragraph",
      text: "Creators have full authority to curate the conversation around their work. Respect those boundaries.",
    },

    { type: "heading", text: "Keep the conversation musical and human" },
    {
      type: "paragraph",
      text: "MusicOSY is built for music culture, not noise. Before you post a Note:",
    },
    {
      type: "list",
      items: [
        {
          lead: "Read the room:",
          text: "Understand the context of the post or track.",
        },
        {
          lead: "Respond with care:",
          text: "Engage with the art and the artist's intent.",
        },
        {
          lead: "Disagree respectfully:",
          text: "You can critique or debate without attacking the creator or other members.",
        },
        {
          lead: "Avoid spam:",
          text: "Do not post repetitive comments, self-promotion, or external links that disrupt the conversation.",
        },
        {
          lead: "Protect privacy:",
          text: "Never share private information (doxing) about yourself or anyone else.",
        },
        {
          lead: "Be authentic:",
          text: "Do not impersonate another person or creator.",
        },
        {
          lead: "No harassment:",
          text: "Do not use Notes to target, shame, threaten, or bully someone.",
        },
      ],
    },
    {
      type: "paragraph",
      text: "If a conversation is not for you, move on, Mute the member, or use your feed controls instead of escalating the situation.",
    },

    { type: "heading", text: "Flag harmful Notes" },
    {
      type: "paragraph",
      text: "Flag (Report) a Note if it is abusive, threatening, hateful, sexually exploitative, deceptive, spammy, or otherwise violates MusicOSY’s Community Guidelines.",
    },
    {
      type: "paragraph",
      text: "You can also protect your experience by:",
    },
    {
      type: "list",
      items: [
        {
          lead: "Muting",
          text: "a member to silently reduce their content and notifications.",
        },
        {
          lead: "Blocking",
          text: "a member to create a strict safety boundary. Blocking prevents ordinary mutual discovery, Notes, Backstage (direct messages), and new social interactions between you and the blocked member.",
        },
      ],
    },
  ],
  related: [
    "/resources/help-center/using-musicosy/content-interaction/comment",
    "/resources/help-center/using-musicosy/content-interaction/edit-or-delete-your-comment",
    "/resources/help-center/using-musicosy/content-interaction/mentions",
    "/resources/help-center/using-musicosy/content-interaction/block-and-mute",
  ],
};
