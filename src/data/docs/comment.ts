import type { Doc } from "./types";

/**
 * "Comment" — Using Music OSY → Content Interaction doc.
 *
 * On MusicOSY, a comment is called a Note. Covers: leaving a Note,
 * replying to a Note, what you can comment on, why you may not be able
 * to comment, editing/deleting your Note, commenting with care, Loving
 * a Note, mentioning someone, and reporting/muting/blocking.
 *
 * Content provided verbatim by the user; structured into blocks. Uses 3
 * ordered lists (6-step Leave, 5-step Reply, 5-step Edit/Delete), a
 * 6-item bold-lead-in bullet list for "comment with care", and multiple
 * bulleted lists.
 */
export const commentDoc: Doc = {
  path: "/resources/help-center/using-musicosy/content-interaction/comment",
  blocks: [
    {
      type: "paragraph",
      text: "Comments are where music becomes conversation.",
    },
    {
      type: "paragraph",
      text: "Use comments to react to a song, ask a question, share what a lyric means to you, celebrate a Fresh Drop, join a discussion, or connect with the people behind the music.",
    },
    {
      type: "paragraph",
      text: "On MusicOSY, a comment is called a Note. A Note is your voice in the conversation around a post, track, video, release, event, or other eligible content on The Stage.",
    },

    { type: "heading", text: "Leave a Note" },
    {
      type: "paragraph",
      text: "To comment on eligible content:",
    },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Open the post, track, video, release, event, or other item." },
        { text: "Select the Notes or comments area." },
        { text: "Select the text field." },
        { text: "Write your Note." },
        { text: "Review it before posting." },
        { text: "Select Post or Send." },
      ],
    },
    {
      type: "paragraph",
      text: "Your Note will appear in the public conversation, subject to the content’s audience settings, comment permissions, and active moderation rules. You must be signed in to publish a Note.",
    },

    { type: "heading", text: "Reply to a Note" },
    {
      type: "paragraph",
      text: "Reply when you want to respond directly to another member instead of starting a new top-level thread.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Open the comment thread." },
        { text: "Find the Note you want to respond to." },
        { text: "Select Reply." },
        { text: "Write your response." },
        { text: "Post your reply." },
      ],
    },
    {
      type: "paragraph",
      text: "Replies help keep conversations organized and readable. When allowed by the creator's settings, MusicOSY will notify the person whose Note you replied to, as well as the content owner.",
    },

    { type: "heading", text: "What you can comment on" },
    {
      type: "paragraph",
      text: "You may be able to leave a Note on eligible:",
    },
    {
      type: "list",
      items: [
        { text: "Posts on The Stage" },
        { text: "Songs, albums, and releases" },
        { text: "Music videos and visual clips" },
        { text: "Podcasts and episodes" },
        { text: "Public Setlists" },
        { text: "Live replays" },
        { text: "Events" },
        { text: "Creator updates and Artist Pages" },
      ],
    },
    {
      type: "paragraph",
      text: "Comment availability depends on the content owner’s settings, the audience selected for the content, your relationship to the creator (e.g., followers-only), and MusicOSY safety and moderation rules.",
    },

    { type: "heading", text: "Why you may not be able to comment" },
    {
      type: "paragraph",
      text: "Notes may be unavailable or restricted if:",
    },
    {
      type: "list",
      items: [
        { text: "The creator has disabled comments on the specific post or release." },
        { text: "The creator has locked the comment thread after a certain period." },
        { text: "The content is private, restricted, or no longer available." },
        { text: "The content is limited to approved followers, subscribers, collaborators, or Workspace members." },
        { text: "You or the other member has used Block." },
        { text: "Your account or the content is subject to a safety, moderation, age, territory, rights, or enforcement restriction." },
        { text: "MusicOSY has applied rate limits to prevent spam, abuse, or automated misuse." },
      ],
    },
    {
      type: "paragraph",
      text: "Creators have full authority to hide, lock, limit, or disable comments on their own content to cultivate the community experience they want.",
    },

    { type: "heading", text: "Edit or delete your Note" },
    {
      type: "paragraph",
      text: "You maintain control over the Notes you have posted.",
    },
    {
      type: "paragraph",
      text: "To manage your comments:",
    },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Open the comment thread." },
        { text: "Find your Note." },
        { text: "Select the More menu next to your comment." },
        { text: "Choose Edit or Delete." },
        { text: "Confirm your changes." },
      ],
    },
    {
      type: "paragraph",
      text: "For detailed instructions on managing your comment history, see Edit or delete your comment.",
    },

    { type: "heading", text: "Comment with care" },
    {
      type: "paragraph",
      text: "MusicOSY is a platform for music culture, discovery, and creative expression. Keep conversations thoughtful, honest, and human.",
    },
    {
      type: "paragraph",
      text: "When you leave a Note:",
    },
    {
      type: "list",
      items: [
        {
          lead: "Respond to the work:",
          text: "Engage with the art, the lyrics, or the performance.",
        },
        {
          lead: "Encourage creators:",
          text: "Constructive feedback and genuine appreciation help artists grow.",
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
          text: "Never share private information (doxing) about yourself, the creator, or anyone else.",
        },
        {
          lead: "Be authentic:",
          text: "Do not impersonate another member or claim false affiliation.",
        },
      ],
    },
    {
      type: "paragraph",
      text: "A thoughtful Note can turn a casual listener into a real community connection.",
    },

    { type: "heading", text: "Love a Note" },
    {
      type: "paragraph",
      text: "If someone leaves a Note you appreciate, you can Love it.",
    },
    {
      type: "paragraph",
      text: "Loving a comment is a quick way to acknowledge a thoughtful response, show agreement, or highlight a great observation without adding another message to the thread and cluttering the conversation.",
    },

    { type: "heading", text: "Mention someone in a Note" },
    {
      type: "paragraph",
      text: "You can mention another member in an eligible comment by using their @handle.",
    },
    {
      type: "paragraph",
      text: "Use mentions when the person is genuinely relevant to the conversation. Do not repeatedly tag people who have not asked to be included, use mentions to target or harass someone, or tag members into unwanted promotion.",
    },
    {
      type: "paragraph",
      text: "For more information on tagging and notifications, see Mentions.",
    },

    { type: "heading", text: "Report, mute, or block" },
    {
      type: "paragraph",
      text: "If a Note violates MusicOSY rules, is abusive, threatening, deceptive, hateful, sexually exploitative, spammy, or otherwise unsafe, report it immediately.",
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
          text: "a member to silently reduce their content and notifications in your feeds.",
        },
        {
          lead: "Blocking",
          text: "a member to create a strict safety boundary. Blocking prevents ordinary mutual discovery, Notes, Backstage (direct messages), and new social interactions between you and the blocked member.",
        },
      ],
    },
    {
      type: "paragraph",
      text: "Use the platform's built-in tools to curate a safe environment. For more details, see Block and mute or Report a post / account / LIVE / comment / DM.",
    },
  ],
  related: [
    "/resources/help-center/using-musicosy/content-interaction/leave-a-note-and-join-the-conversation",
    "/resources/help-center/using-musicosy/content-interaction/edit-or-delete-your-comment",
    "/resources/help-center/using-musicosy/content-interaction/mentions",
    "/resources/help-center/using-musicosy/content-interaction/block-and-mute",
  ],
};
