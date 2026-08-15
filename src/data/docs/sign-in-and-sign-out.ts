import type { Doc } from "./types";

/**
 * "Sign in and sign out" — the third doc in Getting Started.
 *
 * Content provided verbatim by the user; structured into blocks. Uses
 * callouts (warning + note), a 6-row sign-in methods table, and nested
 * lists (sign-in method choices, unrecognised-sign-in actions).
 */
export const signInAndSignOutDoc: Doc = {
  path: "/resources/help-center/getting-started/sign-in-and-sign-out",
  blocks: [
    {
      type: "paragraph",
      text: "Sign in to MusicOSY to access your personal profile, Library, Keeps, Setlists, Backstage conversations, purchases, saved preferences, Studio projects, and any Workspaces you belong to.",
    },
    {
      type: "paragraph",
      text: 'You only need one MusicOSY account. The same account works across listening, creating, publishing, shopping, attending events, using Studio, and collaborating in Workspaces. There is no separate "fan account" or "artist account"—your single member account grows with you.',
    },

    { type: "heading", text: "Sign in to MusicOSY" },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Open MusicOSY." },
        { text: "Select Sign in." },
        {
          lead: "Choose your sign-in method:",
          text: "",
          children: [
            { text: "Email address and password" },
            { text: "Phone number" },
            { text: "Passkey or biometric sign-in (where set up)" },
            { text: "A connected identity provider (such as Google or Apple)" },
            { text: "Enterprise single sign-on (if your organisation has configured it)" },
          ],
        },
        {
          text: "Complete any verification or security prompt shown to you. This may include a one-time code, biometric confirmation, or step-up authentication.",
        },
        { text: "Select Continue." },
      ],
    },
    {
      type: "paragraph",
      text: "After you sign in, you will enter your personal MusicOSY experience in your Personal Context. This includes your profile, follows, Library, Backstage messages, notification preferences, settings, and personal activity.",
    },
    {
      type: "paragraph",
      text: "If you selected a specific page, post, song, Workspace link, or other feature before signing in, MusicOSY will return you to that destination after sign-in, provided the content is still available and you are eligible to access it.",
    },

    { type: "heading", text: "Signing in on a new device" },
    {
      type: "paragraph",
      text: "When MusicOSY detects a sign-in from a device or browser it does not recognise, you may receive a security notification through the Signal Center, email, or another trusted channel.",
    },
    {
      type: "list",
      items: [
        {
          lead: "If you recognise the sign-in:",
          text: "No action is needed. You may dismiss the notification.",
        },
        {
          lead: "If you do not recognise the sign-in:",
          text: "",
          children: [
            { text: "Change your password or sign-in credentials immediately." },
            { text: "Review your active sessions and remove any unfamiliar devices." },
            { text: "Review your account safety settings, including two-factor authentication and recovery options." },
            { text: "Contact Support if you believe someone else accessed your account." },
          ],
        },
      ],
    },
    {
      type: "callout",
      variant: "warning",
      title: "Important",
      text: "Never share your password, verification code, passkey, or sign-in link with another person. MusicOSY Support will never ask you to send your password or security code through Backstage, comments, email, or social media.",
    },

    { type: "heading", text: "Manage your active sessions" },
    {
      type: "paragraph",
      text: "You can review and manage the devices and browsers currently signed in to your MusicOSY account.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Open Settings → Security and login." },
        { text: "Review the list of active sessions. You will see the device type, approximate location, and last active time for each session." },
        { text: "To remove a session, select it and choose Remove or Sign out." },
      ],
    },
    {
      type: "paragraph",
      text: "Removing a session signs that device out of your account. The device will need to sign in again to access your content.",
    },
    {
      type: "paragraph",
      text: "If you suspect your account has been compromised, you can sign out of all other sessions at once. This does not affect the session you are currently using.",
    },

    { type: "heading", text: "Sign in to a Workspace" },
    {
      type: "paragraph",
      text: "Your personal account stays separate from the Workspaces you collaborate in.",
    },
    {
      type: "paragraph",
      text: "After signing in, use the Workspace switcher to open the band, label, studio, podcast network, event team, organisation, or project Workspace you need. Your role in that Workspace determines what you can view, edit, publish, manage, or administer.",
    },
    {
      type: "paragraph",
      text: "Switching into a Workspace does not change your personal MusicOSY account. Your personal Library, Backstage messages, follows, blocks, purchases, account recovery options, and privacy settings remain yours and are never accessible to Workspace members unless you explicitly share them.",
    },
    {
      type: "paragraph",
      text: "Switching back to your Personal Context restores your personal view. You do not need to sign out to switch between Workspaces.",
    },

    { type: "heading", text: "Sign out of MusicOSY" },
    {
      type: "paragraph",
      text: "Sign out when you are using a shared, borrowed, or public device, or when you want to end your current private MusicOSY session.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Open your profile or account settings." },
        { text: "Select Sign out." },
        { text: "Confirm if MusicOSY asks you to confirm." },
      ],
    },

    { type: "heading", text: "What happens when you sign out" },
    {
      type: "list",
      items: [
        { text: "Your private playback session ends. Any queue or listening progress is cleared from the active session." },
        { text: "Your personal Library, Keeps, Setlists, purchases, messages, and account tools are no longer accessible from that device." },
        { text: "Private account information is removed from the active session." },
        { text: "If another member signs in on the same device, MusicOSY clears the previous member's private queue, history, and session data before activating the new account." },
      ],
    },
    {
      type: "paragraph",
      text: "Public music, public profiles, and public content may still be available after sign-out where MusicOSY supports public browsing and listening. However, private content, purchases, downloads, messages, Library items, Studio projects, and account tools require an active sign-in.",
    },

    { type: "heading", text: "Sign-in methods" },
    {
      type: "paragraph",
      text: "MusicOSY supports multiple sign-in methods. You can manage these in Settings → Security and login.",
    },
    {
      type: "table",
      headers: ["Method", "Description"],
      rows: [
        ["Email and password", "Sign in with your registered email address and password."],
        ["Phone number", "Sign in with your registered phone number and a one-time verification code."],
        ["Passkey", "Use a passkey stored on your device for fast, secure sign-in. Passkeys use biometrics or device PIN and cannot be phished."],
        ["Identity provider", "Sign in through a connected provider such as Google, Apple, or another supported service."],
        ["Enterprise SSO", "If your organisation uses MusicOSY with single sign-on, sign in through your organisation's identity provider."],
        ["Recovery code", "Use a backup recovery code if you have lost access to your primary sign-in method."],
      ],
    },
    {
      type: "paragraph",
      text: "You can add, remove, or change sign-in methods at any time. Changes to your primary authentication method may require re-authentication and will trigger a security notification.",
    },

    { type: "heading", text: "Step-up authentication" },
    {
      type: "paragraph",
      text: "For sensitive actions, MusicOSY may ask you to re-verify your identity even if you are already signed in. This is called step-up authentication.",
    },
    {
      type: "paragraph",
      text: "Actions that may require step-up authentication include:",
    },
    {
      type: "list",
      items: [
        { text: "Changing your password, email, phone number, or passkey" },
        { text: "Adding or removing a sign-in method" },
        { text: "Changing payout or payment details" },
        { text: "Requesting a payout" },
        { text: "Changing Workspace ownership or administrator roles" },
        { text: "Exporting sensitive data" },
        { text: "Deleting your account" },
        { text: "Starting account recovery" },
      ],
    },
    {
      type: "paragraph",
      text: "Step-up authentication protects your account even if someone gains temporary access to your signed-in device.",
    },

    { type: "heading", text: "If you cannot sign in" },
    {
      type: "paragraph",
      text: "Try the following before contacting Support:",
    },
    {
      type: "list",
      items: [
        { text: "Confirm that you are using the same email address, phone number, or sign-in method you used to create your account." },
        { text: "Check your email inbox, spam folder, and text messages for a verification code or sign-in message." },
        { text: "Make sure you have a stable internet connection." },
        { text: "Try signing in again from the MusicOSY app or a supported browser." },
        { text: "If you use a passkey, make sure your device supports it and your biometric or PIN is working." },
        { text: "If you use enterprise SSO, contact your organisation's IT administrator if your organisation's sign-in page is unavailable." },
      ],
    },

    { type: "heading", text: "If you have lost access to your sign-in method" },
    {
      type: "paragraph",
      text: "If you no longer have access to your email address, phone number, or identity provider:",
    },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Select Forgot password? or Need help signing in? on the sign-in screen." },
        { text: "Follow the account recovery prompts. You may be asked to verify your identity using an alternate method or recovery code." },
        { text: "If you cannot complete self-service recovery, visit Sign-in help or Recover your account to contact Support." },
      ],
    },
    {
      type: "callout",
      variant: "note",
      title: "Note",
      text: "Account recovery may require identity verification and may take additional time for security review. This protects your account from unauthorised access.",
    },

    { type: "heading", text: "If your account is locked or restricted" },
    {
      type: "paragraph",
      text: "If your account is temporarily locked or restricted, you will see an explanation when you attempt to sign in. Follow the instructions shown, or visit Sign-in help for support. Restrictions may be temporary and may require you to verify your identity or resolve an account issue before access is restored.",
    },

    { type: "heading", text: "Staying safe" },
    {
      type: "list",
      items: [
        { text: "Use a strong, unique password that you do not use on other services." },
        { text: "Enable two-factor authentication or set up a passkey for stronger protection." },
        { text: "Never share your password, verification code, or sign-in link." },
        { text: "Be cautious of messages claiming to be from MusicOSY. Official communications will never ask for your password or security codes through Backstage, social media, or comments." },
        { text: "Review your active sessions regularly and remove any you do not recognise." },
        { text: "Keep your recovery email and phone number up to date." },
      ],
    },
  ],
  related: [
    "/resources/help-center/getting-started/create-an-account",
    "/resources/help-center/getting-started/verify-your-email-or-phone-number",
    "/resources/help-center/getting-started/set-up-your-profile",
    "/support/account-and-access/account-safety",
    "/support/account-and-access/recover-your-account",
    "/support/account-and-access/reset-your-password",
    "/support/account-and-access/manage-your-active-sessions",
    "/support/account-and-access/set-up-two-factor-authentication-or-a-passkey",
    "/resources/help-center/getting-started/personal-context-versus-workspace-context",
  ],
};
