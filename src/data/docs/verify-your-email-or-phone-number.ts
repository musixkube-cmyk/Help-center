import type { Doc } from "./types";

/**
 * "Verify your email or phone number" — the fourth doc in Getting Started.
 *
 * Content provided verbatim by the user; structured into blocks. Uses note
 * callouts (verification codes are single-use), bold-lead-in bullet lists,
 * and ordered steps for both email and phone verification flows.
 */
export const verifyYourEmailOrPhoneNumberDoc: Doc = {
  path: "/resources/help-center/getting-started/verify-your-email-or-phone-number",
  blocks: [
    {
      type: "paragraph",
      text: "Verifying your email address or phone number helps protect your MusicOSY account and confirms that you can receive important account messages.",
    },
    {
      type: "paragraph",
      text: "MusicOSY may ask you to verify a contact method when you create an account, update account information, sign in from a new device, recover access to your account, or use a feature that requires verification.",
    },

    { type: "heading", text: "Why verification matters" },
    {
      type: "paragraph",
      text: "Your verified email address or phone number can help MusicOSY:",
    },
    {
      type: "list",
      items: [
        { text: "Confirm that your account belongs to you" },
        { text: "Protect your account from unauthorised access" },
        { text: "Send sign-in, security, and recovery messages" },
        { text: "Help you recover your account if you lose access" },
        { text: "Notify you about important account changes" },
        { text: "Confirm eligibility for certain tools, purchases, payouts, or account actions" },
      ],
    },
    {
      type: "paragraph",
      text: "Verification is connected to your personal MusicOSY account—not to a specific Workspace. Your band, label, studio, podcast network, or team does not control your personal account recovery methods. Switching into a Workspace does not change your personal verification settings.",
    },

    { type: "heading", text: "When you may be asked to verify" },
    {
      type: "paragraph",
      text: "MusicOSY may request verification in the following situations:",
    },
    {
      type: "list",
      items: [
        {
          lead: "Account creation.",
          text: "You may need to verify your email or phone number during registration before your account is fully active.",
        },
        {
          lead: "Signing in from a new device.",
          text: "If MusicOSY detects a sign-in from an unrecognised device or browser, you may receive a security notification and be asked to verify your identity.",
        },
        {
          lead: "Changing account details.",
          text: "Updating your email address, phone number, password, passkey, or other sign-in method may require verification of your current contact method.",
        },
        {
          lead: "Account recovery.",
          text: "If you lose access to your account, MusicOSY may use your verified contact method to help restore access.",
        },
        {
          lead: "Sensitive actions.",
          text: "Certain high-impact actions—such as changing payout details, requesting a payout, modifying Workspace ownership, exporting sensitive data, or deleting your account—may require an additional verification step even if you are already signed in.",
        },
        {
          lead: "Feature eligibility.",
          text: "Some features, such as selling content, receiving payouts, or operating certain business tools, may require a verified contact method as part of a broader verification process.",
        },
      ],
    },

    { type: "heading", text: "Verify your email address" },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Open the verification message sent to the email address connected to your MusicOSY account." },
        { text: "Select the verification link or enter the verification code when prompted." },
        { text: "Return to MusicOSY." },
        { text: "Confirm that your email is verified in Settings → Account or when the verification prompt is complete." },
      ],
    },
    {
      type: "paragraph",
      text: "If you do not see the message, check your spam, junk, promotions, or filtered folders before requesting another one.",
    },
    {
      type: "callout",
      variant: "note",
      title: "Note",
      text: "Verification links and codes are single-use and time-limited. If your link or code has expired, request a new one from your account settings.",
    },

    { type: "heading", text: "Verify your phone number" },
    {
      type: "list",
      ordered: true,
      items: [
        { text: "Enter the phone number you want to connect to your MusicOSY account." },
        { text: "Wait for MusicOSY to send a verification code by text message." },
        { text: "Enter the code exactly as it appears in the message." },
        { text: "Confirm that your phone number is verified in Settings → Account." },
      ],
    },
    {
      type: "paragraph",
      text: "Standard message or data rates may apply depending on your mobile plan.",
    },
    {
      type: "callout",
      variant: "note",
      title: "Note",
      text: "Verification codes sent by text message are single-use and time-limited. If your code has expired, request a new one.",
    },

    { type: "heading", text: "If you did not receive a code or email" },
    {
      type: "paragraph",
      text: "Try the following before contacting Support:",
    },
    {
      type: "list",
      items: [
        { text: "Confirm that you entered the correct email address or phone number." },
        { text: "Check your spam, junk, promotions, and filtered email folders." },
        { text: "Wait a few minutes before requesting another code. Delivery may take a short time." },
        { text: "Make sure your phone has service and can receive text messages." },
        { text: "Do not request multiple codes at once. Use the newest code you receive. Earlier codes may become invalid when a new one is issued." },
        { text: "Return to Settings → Account and request a new verification message if that option is available." },
        { text: "If you use an email provider with strict filtering, add MusicOSY's sending address to your contacts or safe-sender list." },
      ],
    },
    {
      type: "paragraph",
      text: "If you still cannot verify your contact information, visit Sign-in help or Contact Us.",
    },

    { type: "heading", text: "Keep your contact information current" },
    {
      type: "paragraph",
      text: "Your email address and phone number are important account-security details. Update them as soon as possible if you:",
    },
    {
      type: "list",
      items: [
        { text: "Lose access to an email inbox" },
        { text: "Change your phone number" },
        { text: "Change your email provider" },
        { text: "Believe someone else may have access to your account" },
      ],
    },

    { type: "heading", text: "Changing your email or phone number" },
    {
      type: "paragraph",
      text: "Changing a verified contact method is a security-sensitive action. When you update your email address or phone number:",
    },
    {
      type: "list",
      items: [
        { text: "MusicOSY will require you to sign in again or complete an additional security step." },
        { text: "You will need to verify the new contact method before the change is complete." },
        { text: "MusicOSY will notify your previous trusted contact method when safe to do so, so you can detect unauthorised changes." },
        { text: "The change will be recorded as an account-security event." },
      ],
    },
    {
      type: "paragraph",
      text: "Until the new contact method is verified, your previous verified method remains your primary account-security contact.",
    },

    { type: "heading", text: "Protect your verification code" },
    {
      type: "paragraph",
      text: "Your verification code is private. Treat it like a password.",
    },
    {
      type: "list",
      items: [
        { text: "Do not share a code, verification link, password, or sign-in message with anyone—even if they claim to work for MusicOSY." },
        { text: "MusicOSY Support will never ask you to send your password, verification code, or security code through Backstage (direct messages), comments, email, social media, or any other channel." },
        { text: "A code can be used to access or change your account. Anyone who has your code may be able to sign in, change your settings, or recover your account." },
      ],
    },

    { type: "heading", text: "If you receive a verification message you did not request" },
    {
      type: "paragraph",
      text: "If you receive a verification code or link that you did not trigger:",
    },
    {
      type: "list",
      items: [
        { text: "Do not share the code with anyone." },
        { text: "Do not select the link." },
        { text: "Sign in to your account directly through the MusicOSY app or website." },
        { text: "Review your account safety settings, including active sessions and sign-in methods." },
        { text: "Change your password or sign-in credentials if you believe your account may be at risk." },
        { text: "Contact Support if you suspect someone is trying to access your account." },
      ],
    },

    { type: "heading", text: "Email or phone verification is not identity verification" },
    {
      type: "paragraph",
      text: "Verifying an email address or phone number confirms that you can access that contact method. It does not prove your legal identity, age, business status, or professional role.",
    },
    {
      type: "paragraph",
      text: "Email and phone verification is different from:",
    },
    {
      type: "list",
      items: [
        { lead: "Identity verification,", text: "which may require government-issued identification or other documents" },
        { lead: "Business or organisation verification,", text: "which confirms a legal entity or domain" },
        { lead: "Creator or artist verification,", text: "which confirms a public identity association" },
        { lead: "Payout or financial verification,", text: "which confirms bank account ownership, tax information, and payment eligibility" },
        { lead: "Voice or likeness verification,", text: "which confirms authority for identity-affecting AI tools" },
      ],
    },
    {
      type: "paragraph",
      text: "MusicOSY may request additional verification for certain features or actions, including high-impact account changes, payouts, business tools, distribution services, or other eligibility-based capabilities. Completing email or phone verification does not automatically satisfy these separate requirements.",
    },

    { type: "heading", text: "Verification and your account" },
    {
      type: "list",
      items: [
        { text: "A verified contact method does not change what you can create, publish, or access on MusicOSY by itself. Every member can listen, discover, follow, create, and participate regardless of verification status." },
        { text: "Verification supports account security and may be required as one step toward unlocking certain commercial, financial, or operational capabilities." },
        { text: "If your verification expires, is revoked, or becomes outdated, MusicOSY may ask you to re-verify before completing certain actions." },
        { text: "Deleting your account does not immediately erase verification records where security, fraud prevention, legal, or audit retention requires them." },
      ],
    },
  ],
  related: [
    "/resources/help-center/getting-started/create-an-account",
    "/resources/help-center/getting-started/sign-in-and-sign-out",
    "/resources/help-center/getting-started/set-up-your-profile",
    "/support/account-and-access/account-safety",
    "/support/account-and-access/recover-your-account",
    "/support/account-and-access/reset-your-password",
    "/support/account-and-access/manage-your-active-sessions",
    "/support/account-and-access/set-up-two-factor-authentication-or-a-passkey",
  ],
};
