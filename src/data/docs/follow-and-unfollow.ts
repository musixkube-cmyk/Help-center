import type { Doc } from "./types";

/**
 * "Follow and unfollow" — Getting Started doc covering the free social
 * connection on MusicOSY: how to follow, public vs approval-required
 * profiles, what a follow does and does not do, follow vs Join the Circle
 * (subscribe), how to unfollow, bulk follow management, removing followers,
 * blocking/muting, and reasons you may be unable to follow someone.
 *
 * Content provided verbatim by the user; structured into blocks. Uses a
 * 2-row comparison table (Follow vs Join the Circle), multiple numbered
 * and bulleted lists, bold lead-in items, and a note callout.
 */
export const followAndUnfollowDoc: Doc = {
  path: "/resources/help-center/getting-started/follow-and-unfollow",
  blocks: [
    {
      type: "paragraph",
      text: "Following creators, fans, collaborators, and communities is how you shape your culture on MusicOSY. When you follow someone, their latest posts, Fresh Drops (new releases), and live sessions appear on The Stage (your main feed), and your recommendations become more aligned with your taste.",
    },
    {
      type: "paragraph",
      text: "Following is a free social connection. It is the foundation of your MusicOSY network, but it is distinct from paid subscriptions, direct messaging permissions, and commercial relationships.",
    },

    { type: "heading", text: "How to follow someone" },
    {
      type: "paragraph",
      text: "You can follow eligible public or approval-required profiles from almost anywhere on the platform:",
    },
    {
      type: "list",
      ordered: true,
      items: [
        {
          lead: "From a Profile:",
          text: "Open any member or Artist Page and select Follow.",
        },
        {
          lead: "From The Stage:",
          text: "When you see a post, track, or video you enjoy, select the creator's name or the Follow button directly on the presentation.",
        },
        {
          lead: "From Search:",
          text: "Find a creator, band, or podcaster in Search and select Follow from their result card.",
        },
        {
          lead: "From Events and Live Sessions:",
          text: "Follow artists directly from an event lineup or a live Crowd Chat participant list.",
        },
      ],
    },
    {
      type: "paragraph",
      text: "When you follow someone, the button changes to Following, and you will begin seeing their eligible public activity in your feeds and Signal Center (notifications).",
    },

    { type: "heading", text: "Public versus approval-required profiles" },
    {
      type: "paragraph",
      text: "Not all profiles are fully public. Members can choose how much of their world they share with the broader MusicOSY community.",
    },
    { type: "heading", text: "Public profiles", level: 3 },
    {
      type: "paragraph",
      text: "If a profile is public, selecting Follow creates an immediate, active connection. You will instantly see their public posts, catalog, and activity.",
    },
    { type: "heading", text: "Approval-required (Private) profiles", level: 3 },
    {
      type: "paragraph",
      text: "Some members protect their profiles and require approval before new people can follow them.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        {
          text: "When you select Follow on an approval-required profile, your request enters a Pending state.",
        },
        { text: "The button will change to Requested." },
        {
          text: "You will not be able to see their protected posts, personal Keeps (saves), or private Setlists (playlists) while pending.",
        },
        { text: "The profile owner can approve or decline your request." },
        {
          text: "You can cancel your request at any time before it is approved.",
        },
      ],
    },
    {
      type: "callout",
      variant: "note",
      text: "If an approval-required profile declines your request or ignores it, you will not receive a notification. You can request to follow again later, but repeated requests after being declined may be restricted by our safety systems.",
    },

    { type: "heading", text: "What following does (and doesn't do)" },
    {
      type: "paragraph",
      text: "It is important to understand the boundaries of a follow on MusicOSY.",
    },
    { type: "heading", text: "Following someone WILL:", level: 3 },
    {
      type: "list",
      items: [
        { text: "Add their public posts and updates to The Stage." },
        {
          text: "Make you eligible to receive notifications when they publish a Fresh Drop, Take the Stage (go live), or announce an event (based on your Signal Center preferences).",
        },
        {
          text: "Improve your Discover and Listen recommendations based on their musical taste and catalog.",
        },
        {
          text: "Allow you to Ensemble (stitch) or Rework (remix) their public, eligible content, provided they have permitted it.",
        },
      ],
    },
    { type: "heading", text: "Following someone WILL NOT:", level: 3 },
    {
      type: "list",
      items: [
        {
          lead: "Grant Backstage (DM) access:",
          text: "Following someone does not automatically allow you to send them a direct message in Backstage. Members control who can message them (e.g., everyone, mutual follows, or no one).",
        },
        {
          lead: "Unlock paid or exclusive content:",
          text: "A follow does not grant access to subscriber-only posts, private communities, or premium downloads.",
        },
        {
          lead: "Create a financial or professional relationship:",
          text: "Following a label, manager, or producer does not imply representation, employment, or a booking agreement.",
        },
      ],
    },

    { type: "heading", text: "Follow versus Join the Circle (Subscribe)" },
    {
      type: "paragraph",
      text: "MusicOSY separates free social support from paid commercial support.",
    },
    {
      type: "table",
      headers: ["Action", "What it means"],
      rows: [
        [
          "Follow",
          "A free social connection. You see their public activity and support their discovery.",
        ],
        [
          "Join the Circle (Subscribe)",
          "A paid, recurring relationship. You financially support the creator and unlock exclusive benefits like private Backstage Releases, ad-free listening, early ticket access, or entry into private Fan Clubs.",
        ],
      ],
    },
    {
      type: "paragraph",
      text: "You do not need to follow someone to Join the Circle, and following someone does not obligate you to subscribe. However, many creators offer exclusive community spaces that require both a subscription and a follow.",
    },

    { type: "heading", text: "How to unfollow" },
    {
      type: "paragraph",
      text: "Your tastes evolve, and your feed should evolve with them. You can unfollow anyone at any time.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Open the member's profile." },
        { text: "Select the Following button." },
        { text: "Confirm that you want to Unfollow." },
      ],
    },
    { type: "heading", text: "What happens when you unfollow:", level: 3 },
    {
      type: "list",
      items: [
        {
          text: "Their future posts and releases will stop appearing on your Stage and in your recommendations.",
        },
        { text: "They are not notified that you unfollowed them." },
        {
          text: "Your existing Keeps (saved songs), Setlists, and purchases related to their music remain completely intact in your Library. Unfollowing a creator does not delete the music you have already saved or bought.",
        },
      ],
    },

    { type: "heading", text: "Managing your follows in bulk" },
    {
      type: "paragraph",
      text: "To review or clean up the people you follow:",
    },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Open your Profile." },
        { text: "Select your Following count." },
        {
          text: "From here, you can scroll through your network and unfollow accounts directly from the list.",
        },
      ],
    },

    { type: "heading", text: "Managing your followers" },
    {
      type: "paragraph",
      text: "You have control over who follows you and who can interact with your public presence.",
    },
    { type: "heading", text: "Removing a follower", level: 3 },
    {
      type: "paragraph",
      text: "If you have a public profile and want to remove someone from your followers list without blocking them:",
    },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Open your Profile and select your Followers count." },
        { text: "Find the member you want to remove." },
        {
          text: "Select the menu icon next to their name and choose Remove follower.",
        },
      ],
    },
    {
      type: "list",
      items: [
        { text: "The member is not notified when you remove them." },
        {
          text: "If your profile is public, they can choose to follow you again in the future.",
        },
      ],
    },

    { type: "heading", text: "Blocking and Muting" },
    {
      type: "paragraph",
      text: "If someone is making you uncomfortable, spamming your Notes (comments), or you simply never want to see their content again, use safety tools instead of just unfollowing:",
    },
    {
      type: "list",
      items: [
        {
          lead: "Mute:",
          text: "Hides their posts and Notes from your Stage without them knowing. You remain connected, but their noise is turned off.",
        },
        {
          lead: "Block:",
          text: "Creates a strict safety boundary. A block prevents ordinary mutual discovery, following, Backstage messaging, and interaction. If you block someone, they are automatically removed from your followers, and you are removed from theirs.",
        },
      ],
    },

    { type: "heading", text: "Why you might not be able to follow someone" },
    {
      type: "paragraph",
      text: "If the Follow button is missing, grayed out, or returns an error, it may be due to one of the following reasons:",
    },
    {
      type: "list",
      items: [
        {
          lead: "You have been blocked:",
          text: "If the member has blocked you, you cannot follow them or view their profile.",
        },
        {
          lead: "You have blocked them:",
          text: "You cannot follow someone you have previously blocked. You must unblock them first.",
        },
        {
          lead: "Account restrictions:",
          text: "The account may be suspended, deactivated, or restricted by MusicOSY Trust & Safety.",
        },
        {
          lead: "Platform limits:",
          text: "To prevent spam and automation, MusicOSY limits how many accounts you can follow in a short period, especially for new or unverified accounts. If you hit a rate limit, wait 24 hours before trying again.",
        },
      ],
    },
  ],
  related: [
    "/resources/help-center/getting-started/find-friends",
    "/resources/help-center/getting-started/choose-or-change-your-handle",
    "/resources/help-center/getting-started/set-up-your-profile",
    "/resources/help-center/using-musicosy/discover-and-browse/what-is-the-stage",
    "/resources/help-center/using-musicosy/content-interaction/block-and-mute",
    "/support/account-and-access/notification-settings",
    "/resources/help-center/using-musicosy/creator-commerce-and-services/subscribe-to-a-creator",
  ],
};
