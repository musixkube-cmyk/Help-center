# Musicosy Content Manifest

Every route in the site maps to a markdown file in `content/`.
Write your content in the matching file, push to GitHub, and it will
be extracted and rendered onto the corresponding page.

## Convention

| Route type | File path |
|---|---|
| Section page (has child routes) | `content<path>/index.md` |
| Leaf document (no children) | `content<path>.md` |
| Homepage `/` | `content/index.md` |

Each file starts with YAML frontmatter:

```yaml
---
title: "Account Privacy"
path: "/privacy-and-safety/privacy/account-privacy"
description: "How to control who sees your account."
---
```

## Full document tree

### Help Center Documents (mega menu)

- [SECTION] **Using Musicosy** — `/resources/help-center`
  → `content/resources/help-center/index.md`
  - [SECTION] **Discover & Browse** — `/resources/help-center/using-musicosy/discover-and-browse`
    → `content/resources/help-center/using-musicosy/discover-and-browse/index.md`
    - [DOC] **Discover content** — `/resources/help-center/using-musicosy/discover-and-browse/discover-content`
      → `content/resources/help-center/using-musicosy/discover-and-browse/discover-content.md`
    - [DOC] **Feed** — `/resources/help-center/using-musicosy/discover-and-browse/feed`
      → `content/resources/help-center/using-musicosy/discover-and-browse/feed.md`
    - [DOC] **For You feed** — `/resources/help-center/using-musicosy/discover-and-browse/for-you-feed`
      → `content/resources/help-center/using-musicosy/discover-and-browse/for-you-feed.md`
    - [DOC] **Friends Tab** — `/resources/help-center/using-musicosy/discover-and-browse/friends-tab`
      → `content/resources/help-center/using-musicosy/discover-and-browse/friends-tab.md`
    - [DOC] **Search** — `/resources/help-center/using-musicosy/discover-and-browse/search`
      → `content/resources/help-center/using-musicosy/discover-and-browse/search.md`
  - [SECTION] **Content Interaction** — `/resources/help-center/using-musicosy/content-interaction`
    → `content/resources/help-center/using-musicosy/content-interaction/index.md`
    - [DOC] **Like** — `/resources/help-center/using-musicosy/content-interaction/like`
      → `content/resources/help-center/using-musicosy/content-interaction/like.md`
    - [DOC] **Comment** — `/resources/help-center/using-musicosy/content-interaction/comment`
      → `content/resources/help-center/using-musicosy/content-interaction/comment.md`
    - [DOC] **Share** — `/resources/help-center/using-musicosy/content-interaction/share`
      → `content/resources/help-center/using-musicosy/content-interaction/share.md`
    - [DOC] **Repost** — `/resources/help-center/using-musicosy/content-interaction/repost`
      → `content/resources/help-center/using-musicosy/content-interaction/repost.md`
    - [DOC] **Mentions** — `/resources/help-center/using-musicosy/content-interaction/mentions`
      → `content/resources/help-center/using-musicosy/content-interaction/mentions.md`
  - [SECTION] **Collections** — `/resources/help-center/using-musicosy/collections`
    → `content/resources/help-center/using-musicosy/collections/index.md`
    - [DOC] **Create collections** — `/resources/help-center/using-musicosy/collections/create-collections`
      → `content/resources/help-center/using-musicosy/collections/create-collections.md`
    - [DOC] **Shared collections** — `/resources/help-center/using-musicosy/collections/shared-collections`
      → `content/resources/help-center/using-musicosy/collections/shared-collections.md`
    - [DOC] **Playlists** — `/resources/help-center/using-musicosy/collections/playlists`
      → `content/resources/help-center/using-musicosy/collections/playlists.md`
  - [SECTION] **Media & Playback** — `/resources/help-center/using-musicosy/media-and-playback`
    → `content/resources/help-center/using-musicosy/media-and-playback/index.md`
    - [DOC] **Video playing** — `/resources/help-center/using-musicosy/media-and-playback/video-playing`
      → `content/resources/help-center/using-musicosy/media-and-playback/video-playing.md`
    - [DOC] **Fullscreen** — `/resources/help-center/using-musicosy/media-and-playback/fullscreen`
      → `content/resources/help-center/using-musicosy/media-and-playback/fullscreen.md`
    - [DOC] **On-demand playback** — `/resources/help-center/using-musicosy/media-and-playback/on-demand-playback`
      → `content/resources/help-center/using-musicosy/media-and-playback/on-demand-playback.md`
    - [DOC] **Sound** — `/resources/help-center/using-musicosy/media-and-playback/sound`
      → `content/resources/help-center/using-musicosy/media-and-playback/sound.md`
  - [SECTION] **Account Management** — `/resources/help-center/using-musicosy/account-management`
    → `content/resources/help-center/using-musicosy/account-management/index.md`
    - [DOC] **Manage your account** — `/resources/help-center/using-musicosy/account-management/manage-your-account`
      → `content/resources/help-center/using-musicosy/account-management/manage-your-account.md`
    - [DOC] **Account settings** — `/resources/help-center/using-musicosy/account-management/account-settings`
      → `content/resources/help-center/using-musicosy/account-management/account-settings.md`
    - [DOC] **Notification settings** — `/resources/help-center/using-musicosy/account-management/notification-settings`
      → `content/resources/help-center/using-musicosy/account-management/notification-settings.md`
  - [SECTION] **Getting Started** — `/resources/help-center/using-musicosy/getting-started`
    → `content/resources/help-center/using-musicosy/getting-started/index.md`
    - [DOC] **Create an account** — `/resources/help-center/using-musicosy/getting-started/create-an-account`
      → `content/resources/help-center/using-musicosy/getting-started/create-an-account.md`
    - [DOC] **Find friends** — `/resources/help-center/using-musicosy/getting-started/find-friends`
      → `content/resources/help-center/using-musicosy/getting-started/find-friends.md`
    - [DOC] **Follow / unfollow** — `/resources/help-center/using-musicosy/getting-started/follow-unfollow`
      → `content/resources/help-center/using-musicosy/getting-started/follow-unfollow.md`
- [SECTION] **Managing Your Account** — `/support`
  → `content/support/index.md`
  - [DOC] **Account settings & privacy** — `/support/managing-your-account/account-settings-and-privacy`
    → `content/support/managing-your-account/account-settings-and-privacy.md`
  - [DOC] **Notification settings** — `/support/managing-your-account/notification-settings`
    → `content/support/managing-your-account/notification-settings.md`
  - [DOC] **Push notifications** — `/support/managing-your-account/push-notifications`
    → `content/support/managing-your-account/push-notifications.md`
  - [DOC] **Account status** — `/support/managing-your-account/account-status`
    → `content/support/managing-your-account/account-status.md`
  - [DOC] **Account safety** — `/support/managing-your-account/account-safety`
    → `content/support/managing-your-account/account-safety.md`
  - [DOC] **Blocking someone** — `/support/managing-your-account/blocking-someone`
    → `content/support/managing-your-account/blocking-someone.md`
  - [DOC] **Muting** — `/support/managing-your-account/muting`
    → `content/support/managing-your-account/muting.md`
  - [DOC] **Remove followers** — `/support/managing-your-account/remove-followers`
    → `content/support/managing-your-account/remove-followers.md`
- [SECTION] **Safety & Security** — `/privacy-and-safety`
  → `content/privacy-and-safety/index.md`
  - [SECTION] **Privacy** — `/privacy-and-safety/privacy`
    → `content/privacy-and-safety/privacy/index.md`
    - [DOC] **Account privacy** — `/privacy-and-safety/privacy/account-privacy`
      → `content/privacy-and-safety/privacy/account-privacy.md`
    - [DOC] **Your data rights** — `/privacy-and-safety/privacy/your-data-rights`
      → `content/privacy-and-safety/privacy/your-data-rights.md`
    - [DOC] **Cookies policy** — `/privacy-and-safety/privacy/cookies-policy`
      → `content/privacy-and-safety/privacy/cookies-policy.md`
    - [DOC] **Location detection** — `/privacy-and-safety/privacy/location-detection`
      → `content/privacy-and-safety/privacy/location-detection.md`
  - [SECTION] **Safety** — `/privacy-and-safety/safety`
    → `content/privacy-and-safety/safety/index.md`
    - [DOC] **Platform Rules** — `/privacy-and-safety/safety/platform-rules`
      → `content/privacy-and-safety/safety/platform-rules.md`
    - [DOC] **Content Restrictions** — `/privacy-and-safety/safety/content-restrictions`
      → `content/privacy-and-safety/safety/content-restrictions.md`
    - [DOC] **Reporting content** — `/privacy-and-safety/safety/reporting-content`
      → `content/privacy-and-safety/safety/reporting-content.md`
    - [DOC] **Age verification** — `/privacy-and-safety/safety/age-verification`
      → `content/privacy-and-safety/safety/age-verification.md`
  - [SECTION] **Reporting** — `/privacy-and-safety/reporting`
    → `content/privacy-and-safety/reporting/index.md`
    - [DOC] **Report a post** — `/privacy-and-safety/reporting/report-a-post`
      → `content/privacy-and-safety/reporting/report-a-post.md`
    - [DOC] **Report bullying** — `/privacy-and-safety/reporting/report-bullying`
      → `content/privacy-and-safety/reporting/report-bullying.md`
    - [DOC] **Report impersonation** — `/privacy-and-safety/reporting/report-impersonation`
      → `content/privacy-and-safety/reporting/report-impersonation.md`
    - [DOC] **Share feedback** — `/privacy-and-safety/reporting/share-feedback`
      → `content/privacy-and-safety/reporting/share-feedback.md`
  - [SECTION] **Security** — `/privacy-and-safety/security`
    → `content/privacy-and-safety/security/index.md`
    - [DOC] **Account safety** — `/privacy-and-safety/security/account-safety`
      → `content/privacy-and-safety/security/account-safety.md`
    - [DOC] **Avoid phishing** — `/privacy-and-safety/security/avoid-phishing`
      → `content/privacy-and-safety/security/avoid-phishing.md`
    - [DOC] **Content violations & bans** — `/privacy-and-safety/security/content-violations-and-bans`
      → `content/privacy-and-safety/security/content-violations-and-bans.md`
    - [DOC] **Reporting vulnerabilities** — `/privacy-and-safety/security/reporting-vulnerabilities`
      → `content/privacy-and-safety/security/reporting-vulnerabilities.md`
  - [SECTION] **Content & Conduct** — `/privacy-and-safety/content-and-conduct`
    → `content/privacy-and-safety/content-and-conduct/index.md`
    - [DOC] **Community Guidelines** — `/privacy-and-safety/content-and-conduct/community-guidelines`
      → `content/privacy-and-safety/content-and-conduct/community-guidelines.md`
    - [DOC] **Creator Code of Conduct** — `/privacy-and-safety/content-and-conduct/creator-code-of-conduct`
      → `content/privacy-and-safety/content-and-conduct/creator-code-of-conduct.md`
    - [DOC] **Restricted Mode** — `/privacy-and-safety/content-and-conduct/restricted-mode`
      → `content/privacy-and-safety/content-and-conduct/restricted-mode.md`
    - [DOC] **Content levels** — `/privacy-and-safety/content-and-conduct/content-levels`
      → `content/privacy-and-safety/content-and-conduct/content-levels.md`
  - [SECTION] **Law Enforcement** — `/privacy-and-safety/law-enforcement`
    → `content/privacy-and-safety/law-enforcement/index.md`
    - [DOC] **Law Enforcement Data Request Guidelines** — `/privacy-and-safety/law-enforcement/law-enforcement-data-request-guidelines`
      → `content/privacy-and-safety/law-enforcement/law-enforcement-data-request-guidelines.md`
- [SECTION] **Rules & Policies** — `/legal-and-policies`
  → `content/legal-and-policies/index.md`
  - [SECTION] **Terms of Use** — `/legal-and-policies/terms-of-use`
    → `content/legal-and-policies/terms-of-use/index.md`
    - [DOC] **Subscription Terms** — `/legal-and-policies/terms-of-use/subscription-terms`
      → `content/legal-and-policies/terms-of-use/subscription-terms.md`
    - [DOC] **User Guidelines** — `/legal-and-policies/terms-of-use/user-guidelines`
      → `content/legal-and-policies/terms-of-use/user-guidelines.md`
    - [DOC] **Distribution Agreement** — `/legal-and-policies/terms-of-use/distribution-agreement`
      → `content/legal-and-policies/terms-of-use/distribution-agreement.md`
    - [DOC] **AI Services Terms** — `/legal-and-policies/terms-of-use/ai-services-terms`
      → `content/legal-and-policies/terms-of-use/ai-services-terms.md`
  - [SECTION] **Copyright & IP** — `/legal-and-policies/copyright-and-ip`
    → `content/legal-and-policies/copyright-and-ip/index.md`
    - [DOC] **Intellectual Property Policy** — `/legal-and-policies/copyright-and-ip/intellectual-property-policy`
      → `content/legal-and-policies/copyright-and-ip/intellectual-property-policy.md`
    - [DOC] **DMCA Policy** — `/legal-and-policies/copyright-and-ip/dmca-policy`
      → `content/legal-and-policies/copyright-and-ip/dmca-policy.md`
    - [DOC] **Copyright reporting** — `/legal-and-policies/copyright-and-ip/copyright-reporting`
      → `content/legal-and-policies/copyright-and-ip/copyright-reporting.md`
    - [DOC] **Trademark & counterfeiting** — `/legal-and-policies/copyright-and-ip/trademark-and-counterfeiting`
      → `content/legal-and-policies/copyright-and-ip/trademark-and-counterfeiting.md`
- [SECTION] **Resources** — `/resources`
  → `content/resources/index.md`
  - [DOC] **Guides** — `/resources/guides`
    → `content/resources/guides.md`
  - [DOC] **Glossary** — `/resources/glossary`
    → `content/resources/glossary.md`
  - [DOC] **Help Center** — `/resources/help-center`
    → `content/resources/help-center.md`
  - [DOC] **New User FAQ** — `/resources/new-user-faq`
    → `content/resources/new-user-faq.md`
  - [DOC] **Accessibility** — `/resources/accessibility`
    → `content/resources/accessibility.md`
  - [DOC] **Blog** — `/resources/blog`
    → `content/resources/blog.md`

### Help Center Policy Sections (sidebar)

- [SECTION] **Privacy & Safety** — `/privacy-and-safety`
  → `content/privacy-and-safety/index.md`
  - [SECTION] **Privacy** — `/privacy-and-safety/privacy`
    → `content/privacy-and-safety/privacy/index.md`
    - [DOC] **Collecting your personal data** — `/privacy-and-safety/privacy/collecting-your-personal-data`
      → `content/privacy-and-safety/privacy/collecting-your-personal-data.md`
    - [DOC] **Protecting your personal data** — `/privacy-and-safety/privacy/protecting-your-personal-data`
      → `content/privacy-and-safety/privacy/protecting-your-personal-data.md`
    - [DOC] **Your data rights** — `/privacy-and-safety/privacy/your-data-rights`
      → `content/privacy-and-safety/privacy/your-data-rights.md`
    - [DOC] **California Notice of Collection** — `/privacy-and-safety/privacy/california-notice-of-collection`
      → `content/privacy-and-safety/privacy/california-notice-of-collection.md`
    - [DOC] **Account privacy** — `/privacy-and-safety/privacy/account-privacy`
      → `content/privacy-and-safety/privacy/account-privacy.md`
    - [DOC] **Notification settings** — `/privacy-and-safety/privacy/notification-settings`
      → `content/privacy-and-safety/privacy/notification-settings.md`
    - [DOC] **Cookies policy** — `/privacy-and-safety/privacy/cookies-policy`
      → `content/privacy-and-safety/privacy/cookies-policy.md`
    - [DOC] **Location detection** — `/privacy-and-safety/privacy/location-detection`
      → `content/privacy-and-safety/privacy/location-detection.md`
    - [DOC] **Information we collect** — `/privacy-and-safety/privacy/information-we-collect`
      → `content/privacy-and-safety/privacy/information-we-collect.md`
    - [DOC] **Consumer Health Data Privacy Policy** — `/privacy-and-safety/privacy/consumer-health-data-privacy-policy`
      → `content/privacy-and-safety/privacy/consumer-health-data-privacy-policy.md`
    - [DOC] **Privacy Policies** — `/privacy-and-safety/privacy/privacy-policies`
      → `content/privacy-and-safety/privacy/privacy-policies.md`
    - [DOC] **Privacy Policy** — `/privacy-and-safety/privacy/privacy-policy`
      → `content/privacy-and-safety/privacy/privacy-policy.md`
    - [DOC] **Kids Privacy Policy** — `/privacy-and-safety/privacy/kids-privacy-policy`
      → `content/privacy-and-safety/privacy/kids-privacy-policy.md`
    - [DOC] **Additional Terms of Service** — `/privacy-and-safety/privacy/additional-terms-of-service`
      → `content/privacy-and-safety/privacy/additional-terms-of-service.md`
    - [DOC] **Google Privacy Policy** — `/privacy-and-safety/privacy/google-privacy-policy`
      → `content/privacy-and-safety/privacy/google-privacy-policy.md`
    - [DOC] **SheerID Privacy Policy** — `/privacy-and-safety/privacy/sheerid-privacy-policy`
      → `content/privacy-and-safety/privacy/sheerid-privacy-policy.md`
  - [SECTION] **Safety** — `/privacy-and-safety/safety`
    → `content/privacy-and-safety/safety/index.md`
    - [DOC] **Platform Rules** — `/privacy-and-safety/safety/platform-rules`
      → `content/privacy-and-safety/safety/platform-rules.md`
    - [DOC] **Content Restrictions** — `/privacy-and-safety/safety/content-restrictions`
      → `content/privacy-and-safety/safety/content-restrictions.md`
    - [DOC] **Reporting content** — `/privacy-and-safety/safety/reporting-content`
      → `content/privacy-and-safety/safety/reporting-content.md`
    - [DOC] **Guidance for parents/caregivers** — `/privacy-and-safety/safety/guidance-for-parents-caregivers`
      → `content/privacy-and-safety/safety/guidance-for-parents-caregivers.md`
    - [DOC] **Age verification** — `/privacy-and-safety/safety/age-verification`
      → `content/privacy-and-safety/safety/age-verification.md`
    - [DOC] **Underage appeals** — `/privacy-and-safety/safety/underage-appeals`
      → `content/privacy-and-safety/safety/underage-appeals.md`
    - [DOC] **Under 13 Experience** — `/privacy-and-safety/safety/under-13-experience`
      → `content/privacy-and-safety/safety/under-13-experience.md`
    - [DOC] **Youth Portal** — `/privacy-and-safety/safety/youth-portal`
      → `content/privacy-and-safety/safety/youth-portal.md`
    - [DOC] **Teen privacy & safety settings** — `/privacy-and-safety/safety/teen-privacy-and-safety-settings`
      → `content/privacy-and-safety/safety/teen-privacy-and-safety-settings.md`
    - [DOC] **Post privacy settings** — `/privacy-and-safety/safety/post-privacy-settings`
      → `content/privacy-and-safety/safety/post-privacy-settings.md`
    - [DOC] **Stitch privacy settings** — `/privacy-and-safety/safety/stitch-privacy-settings`
      → `content/privacy-and-safety/safety/stitch-privacy-settings.md`
    - [DOC] **Manage video downloads** — `/privacy-and-safety/safety/manage-video-downloads`
      → `content/privacy-and-safety/safety/manage-video-downloads.md`
    - [DOC] **Activity status** — `/privacy-and-safety/safety/activity-status`
      → `content/privacy-and-safety/safety/activity-status.md`
    - [DOC] **Suggested accounts** — `/privacy-and-safety/safety/suggested-accounts`
      → `content/privacy-and-safety/safety/suggested-accounts.md`
    - [DOC] **Manage topics** — `/privacy-and-safety/safety/manage-topics`
      → `content/privacy-and-safety/safety/manage-topics.md`
    - [DOC] **Audience controls** — `/privacy-and-safety/safety/audience-controls`
      → `content/privacy-and-safety/safety/audience-controls.md`
  - [SECTION] **Reporting** — `/privacy-and-safety/reporting`
    → `content/privacy-and-safety/reporting/index.md`
    - [DOC] **Report a post / account / LIVE / comment / DM** — `/privacy-and-safety/reporting/report-a-post-account-live-comment-dm`
      → `content/privacy-and-safety/reporting/report-a-post-account-live-comment-dm.md`
    - [DOC] **Report underage account** — `/privacy-and-safety/reporting/report-underage-account`
      → `content/privacy-and-safety/reporting/report-underage-account.md`
    - [DOC] **Report sexual abuse** — `/privacy-and-safety/reporting/report-sexual-abuse`
      → `content/privacy-and-safety/reporting/report-sexual-abuse.md`
    - [DOC] **Report impersonation** — `/privacy-and-safety/reporting/report-impersonation`
      → `content/privacy-and-safety/reporting/report-impersonation.md`
    - [DOC] **Report bullying** — `/privacy-and-safety/reporting/report-bullying`
      → `content/privacy-and-safety/reporting/report-bullying.md`
    - [DOC] **Report suggested search / hashtag / sound / Series** — `/privacy-and-safety/reporting/report-suggested-search-hashtag-sound-series`
      → `content/privacy-and-safety/reporting/report-suggested-search-hashtag-sound-series.md`
    - [DOC] **Report another issue** — `/privacy-and-safety/reporting/report-another-issue`
      → `content/privacy-and-safety/reporting/report-another-issue.md`
    - [DOC] **Share feedback** — `/privacy-and-safety/reporting/share-feedback`
      → `content/privacy-and-safety/reporting/share-feedback.md`
  - [SECTION] **Content & Conduct** — `/privacy-and-safety/content-and-conduct`
    → `content/privacy-and-safety/content-and-conduct/index.md`
    - [DOC] **Community Guidelines** — `/privacy-and-safety/content-and-conduct/community-guidelines`
      → `content/privacy-and-safety/content-and-conduct/community-guidelines.md`
    - [DOC] **Community Principles** — `/privacy-and-safety/content-and-conduct/community-principles`
      → `content/privacy-and-safety/content-and-conduct/community-principles.md`
    - [DOC] **Youth Safety & Well-Being** — `/privacy-and-safety/content-and-conduct/youth-safety-and-well-being`
      → `content/privacy-and-safety/content-and-conduct/youth-safety-and-well-being.md`
    - [DOC] **Safety & Civility** — `/privacy-and-safety/content-and-conduct/safety-and-civility`
      → `content/privacy-and-safety/content-and-conduct/safety-and-civility.md`
    - [DOC] **Mental & Behavioral Health** — `/privacy-and-safety/content-and-conduct/mental-and-behavioral-health`
      → `content/privacy-and-safety/content-and-conduct/mental-and-behavioral-health.md`
    - [DOC] **Sensitive & Mature Themes** — `/privacy-and-safety/content-and-conduct/sensitive-and-mature-themes`
      → `content/privacy-and-safety/content-and-conduct/sensitive-and-mature-themes.md`
    - [DOC] **Integrity & Authenticity** — `/privacy-and-safety/content-and-conduct/integrity-and-authenticity`
      → `content/privacy-and-safety/content-and-conduct/integrity-and-authenticity.md`
    - [DOC] **Regulated Goods & Services** — `/privacy-and-safety/content-and-conduct/regulated-goods-and-services`
      → `content/privacy-and-safety/content-and-conduct/regulated-goods-and-services.md`
    - [DOC] **For You feed Eligibility Standards** — `/privacy-and-safety/content-and-conduct/for-you-feed-eligibility-standards`
      → `content/privacy-and-safety/content-and-conduct/for-you-feed-eligibility-standards.md`
    - [DOC] **Creator Code of Conduct** — `/privacy-and-safety/content-and-conduct/creator-code-of-conduct`
      → `content/privacy-and-safety/content-and-conduct/creator-code-of-conduct.md`
    - [DOC] **Restricted Mode** — `/privacy-and-safety/content-and-conduct/restricted-mode`
      → `content/privacy-and-safety/content-and-conduct/restricted-mode.md`
    - [DOC] **Content levels on posts** — `/privacy-and-safety/content-and-conduct/content-levels-on-posts`
      → `content/privacy-and-safety/content-and-conduct/content-levels-on-posts.md`
    - [DOC] **Age-restricted LIVE content** — `/privacy-and-safety/content-and-conduct/age-restricted-live-content`
      → `content/privacy-and-safety/content-and-conduct/age-restricted-live-content.md`
    - [DOC] **Dangerous & deceptive content** — `/privacy-and-safety/content-and-conduct/dangerous-and-deceptive-content`
      → `content/privacy-and-safety/content-and-conduct/dangerous-and-deceptive-content.md`
    - [DOC] **Violent extremism** — `/privacy-and-safety/content-and-conduct/violent-extremism`
      → `content/privacy-and-safety/content-and-conduct/violent-extremism.md`
    - [DOC] **Content Algorithm** — `/privacy-and-safety/content-and-conduct/content-algorithm`
      → `content/privacy-and-safety/content-and-conduct/content-algorithm.md`
    - [DOC] **Political Ads** — `/privacy-and-safety/content-and-conduct/political-ads`
      → `content/privacy-and-safety/content-and-conduct/political-ads.md`
  - [SECTION] **Security** — `/privacy-and-safety/security`
    → `content/privacy-and-safety/security/index.md`
    - [DOC] **Account safety** — `/privacy-and-safety/security/account-safety`
      → `content/privacy-and-safety/security/account-safety.md`
    - [DOC] **Account status** — `/privacy-and-safety/security/account-status`
      → `content/privacy-and-safety/security/account-status.md`
    - [DOC] **Content violations & bans** — `/privacy-and-safety/security/content-violations-and-bans`
      → `content/privacy-and-safety/security/content-violations-and-bans.md`
    - [DOC] **Transaction policy violations** — `/privacy-and-safety/security/transaction-policy-violations`
      → `content/privacy-and-safety/security/transaction-policy-violations.md`
    - [DOC] **Reporting security vulnerabilities** — `/privacy-and-safety/security/reporting-security-vulnerabilities`
      → `content/privacy-and-safety/security/reporting-security-vulnerabilities.md`
    - [DOC] **Avoid phishing** — `/privacy-and-safety/security/avoid-phishing`
      → `content/privacy-and-safety/security/avoid-phishing.md`
  - [SECTION] **Law Enforcement** — `/privacy-and-safety/law-enforcement`
    → `content/privacy-and-safety/law-enforcement/index.md`
    - [DOC] **Law Enforcement Data Request Guidelines** — `/privacy-and-safety/law-enforcement/law-enforcement-data-request-guidelines`
      → `content/privacy-and-safety/law-enforcement/law-enforcement-data-request-guidelines.md`
- [SECTION] **Legal & Policies** — `/legal-and-policies`
  → `content/legal-and-policies/index.md`
  - [SECTION] **Terms of Use** — `/legal-and-policies/terms-of-use`
    → `content/legal-and-policies/terms-of-use/index.md`
    - [DOC] **Subscription Terms & Conditions** — `/legal-and-policies/terms-of-use/subscription-terms-and-conditions`
      → `content/legal-and-policies/terms-of-use/subscription-terms-and-conditions.md`
    - [DOC] **Gift Card Terms** — `/legal-and-policies/terms-of-use/gift-card-terms`
      → `content/legal-and-policies/terms-of-use/gift-card-terms.md`
    - [DOC] **User Guidelines** — `/legal-and-policies/terms-of-use/user-guidelines`
      → `content/legal-and-policies/terms-of-use/user-guidelines.md`
    - [DOC] **Song Purchase Terms** — `/legal-and-policies/terms-of-use/song-purchase-terms`
      → `content/legal-and-policies/terms-of-use/song-purchase-terms.md`
    - [DOC] **Community Rules & Guidelines** — `/legal-and-policies/terms-of-use/community-rules-and-guidelines`
      → `content/legal-and-policies/terms-of-use/community-rules-and-guidelines.md`
    - [DOC] **Distribution Agreement** — `/legal-and-policies/terms-of-use/distribution-agreement`
      → `content/legal-and-policies/terms-of-use/distribution-agreement.md`
    - [DOC] **Music Terms** — `/legal-and-policies/terms-of-use/music-terms`
      → `content/legal-and-policies/terms-of-use/music-terms.md`
    - [DOC] **Commercial Music Library Terms** — `/legal-and-policies/terms-of-use/commercial-music-library-terms`
      → `content/legal-and-policies/terms-of-use/commercial-music-library-terms.md`
    - [DOC] **Buyer Policy** — `/legal-and-policies/terms-of-use/buyer-policy`
      → `content/legal-and-policies/terms-of-use/buyer-policy.md`
    - [DOC] **Branded Content Policy** — `/legal-and-policies/terms-of-use/branded-content-policy`
      → `content/legal-and-policies/terms-of-use/branded-content-policy.md`
    - [DOC] **Rewards Policy** — `/legal-and-policies/terms-of-use/rewards-policy`
      → `content/legal-and-policies/terms-of-use/rewards-policy.md`
    - [DOC] **Campaign Terms & Conditions** — `/legal-and-policies/terms-of-use/campaign-terms-and-conditions`
      → `content/legal-and-policies/terms-of-use/campaign-terms-and-conditions.md`
    - [DOC] **Community Terms** — `/legal-and-policies/terms-of-use/community-terms`
      → `content/legal-and-policies/terms-of-use/community-terms.md`
    - [DOC] **Intellectual Property Policy** — `/legal-and-policies/terms-of-use/intellectual-property-policy`
      → `content/legal-and-policies/terms-of-use/intellectual-property-policy.md`
    - [DOC] **DMCA Policy** — `/legal-and-policies/terms-of-use/dmca-policy`
      → `content/legal-and-policies/terms-of-use/dmca-policy.md`
    - [DOC] **Arbitration (NAMA DR)** — `/legal-and-policies/terms-of-use/arbitration-nama-dr`
      → `content/legal-and-policies/terms-of-use/arbitration-nama-dr.md`
    - [DOC] **Open Source Software Notices** — `/legal-and-policies/terms-of-use/open-source-software-notices`
      → `content/legal-and-policies/terms-of-use/open-source-software-notices.md`
    - [DOC] **AI Services Terms** — `/legal-and-policies/terms-of-use/ai-services-terms`
      → `content/legal-and-policies/terms-of-use/ai-services-terms.md`
  - [SECTION] **Copyright & IP** — `/legal-and-policies/copyright-and-ip`
    → `content/legal-and-policies/copyright-and-ip/index.md`
    - [DOC] **Intellectual Property Policy** — `/legal-and-policies/copyright-and-ip/intellectual-property-policy`
      → `content/legal-and-policies/copyright-and-ip/intellectual-property-policy.md`
    - [DOC] **Trademark & counterfeiting** — `/legal-and-policies/copyright-and-ip/trademark-and-counterfeiting`
      → `content/legal-and-policies/copyright-and-ip/trademark-and-counterfeiting.md`
    - [DOC] **DMCA Policy** — `/legal-and-policies/copyright-and-ip/dmca-policy`
      → `content/legal-and-policies/copyright-and-ip/dmca-policy.md`
    - [DOC] **Copyright reporting** — `/legal-and-policies/copyright-and-ip/copyright-reporting`
      → `content/legal-and-policies/copyright-and-ip/copyright-reporting.md`
    - [DOC] **Commercial use** — `/legal-and-policies/copyright-and-ip/commercial-use`
      → `content/legal-and-policies/copyright-and-ip/commercial-use.md`
    - [DOC] **Ownership & copyright** — `/legal-and-policies/copyright-and-ip/ownership-and-copyright`
      → `content/legal-and-policies/copyright-and-ip/ownership-and-copyright.md`
- [SECTION] **Support Center** — `/support`
  → `content/support/index.md`
  - [DOC] **Support & Account Management** — `/support/support-and-account-management`
    → `content/support/support-and-account-management.md`
  - [SECTION] **Using Musicosy** — `/support/using-musicosy`
    → `content/support/using-musicosy/index.md`
    - [DOC] **Discover & Browse** — `/support/using-musicosy/discover-and-browse`
      → `content/support/using-musicosy/discover-and-browse.md`
    - [DOC] **Content Interaction** — `/support/using-musicosy/content-interaction`
      → `content/support/using-musicosy/content-interaction.md`
    - [DOC] **Collections** — `/support/using-musicosy/collections`
      → `content/support/using-musicosy/collections.md`
    - [DOC] **Media & Playback** — `/support/using-musicosy/media-and-playback`
      → `content/support/using-musicosy/media-and-playback.md`
    - [DOC] **Direct Messages** — `/support/using-musicosy/direct-messages`
      → `content/support/using-musicosy/direct-messages.md`
    - [DOC] **Live** — `/support/using-musicosy/live`
      → `content/support/using-musicosy/live.md`
    - [DOC] **Account Management** — `/support/using-musicosy/account-management`
      → `content/support/using-musicosy/account-management.md`
    - [DOC] **AI Music Generation** — `/support/using-musicosy/ai-music-generation`
      → `content/support/using-musicosy/ai-music-generation.md`
    - [DOC] **Monetization** — `/support/using-musicosy/monetization`
      → `content/support/using-musicosy/monetization.md`
    - [DOC] **Third-Party Integrations** — `/support/using-musicosy/third-party-integrations`
      → `content/support/using-musicosy/third-party-integrations.md`
    - [DOC] **Getting Started** — `/support/using-musicosy/getting-started`
      → `content/support/using-musicosy/getting-started.md`
  - [SECTION] **Advertising Hub** — `/support/advertising-hub`
    → `content/support/advertising-hub/index.md`
    - [DOC] **Ad Campaign Creation** — `/support/advertising-hub/ad-campaign-creation`
      → `content/support/advertising-hub/ad-campaign-creation.md`
    - [DOC] **Ad Group Management** — `/support/advertising-hub/ad-group-management`
      → `content/support/advertising-hub/ad-group-management.md`
    - [DOC] **Audience Targeting** — `/support/advertising-hub/audience-targeting`
      → `content/support/advertising-hub/audience-targeting.md`
    - [DOC] **Creative Asset Management** — `/support/advertising-hub/creative-asset-management`
      → `content/support/advertising-hub/creative-asset-management.md`
    - [DOC] **Ad Campaign Analytics** — `/support/advertising-hub/ad-campaign-analytics`
      → `content/support/advertising-hub/ad-campaign-analytics.md`
    - [DOC] **Advertising Operations** — `/support/advertising-hub/advertising-operations`
      → `content/support/advertising-hub/advertising-operations.md`

### Platform Personas

- [DOC] **For Fans** — `/for-fans`
  → `content/for-fans.md`
- [DOC] **For Creators** — `/for-creators`
  → `content/for-creators.md`
- [DOC] **For Labels** — `/for-labels`
  → `content/for-labels.md`
- [DOC] **For Business** — `/for-business`
  → `content/for-business.md`

### Developer Portal

- [SECTION] **Developers** — `/developers/developers`
  → `content/developers/developers/index.md`
  - [SECTION] **API** — `/developers/developers/api`
    → `content/developers/developers/api/index.md`
    - [DOC] **Business** — `/developers/developers/api/business`
      → `content/developers/developers/api/business.md`
  - [DOC] **App Center** — `/developers/developers/apps`
    → `content/developers/developers/apps.md`
  - [DOC] **Connectors** — `/developers/developers/connectors`
    → `content/developers/developers/connectors.md`
  - [DOC] **Console** — `/developers/developers/console`
    → `content/developers/developers/console.md`
  - [DOC] **Docs** — `/developers/developers/docs`
    → `content/developers/developers/docs.md`
  - [DOC] **Ecosystem** — `/developers/developers/ecosystem`
    → `content/developers/developers/ecosystem.md`
  - [DOC] **Keys** — `/developers/developers/keys`
    → `content/developers/developers/keys.md`
  - [DOC] **MCP** — `/developers/developers/mcp`
    → `content/developers/developers/mcp.md`
  - [DOC] **Partners** — `/developers/developers/partners`
    → `content/developers/developers/partners.md`
  - [DOC] **Sandbox** — `/developers/developers/sandbox`
    → `content/developers/developers/sandbox.md`
  - [SECTION] **SDKs** — `/developers/developers/sdks`
    → `content/developers/developers/sdks/index.md`
    - [DOC] **Events** — `/developers/developers/sdks/events`
      → `content/developers/developers/sdks/events.md`
    - [DOC] **Playback** — `/developers/developers/sdks/playback`
      → `content/developers/developers/sdks/playback.md`
  - [DOC] **Tools** — `/developers/developers/tools`
    → `content/developers/developers/tools.md`
  - [DOC] **Usage** — `/developers/developers/usage`
    → `content/developers/developers/usage.md`
  - [DOC] **Webhooks** — `/developers/developers/webhooks`
    → `content/developers/developers/webhooks.md`
- [SECTION] **Embed** — `/developers/embed`
  → `content/developers/embed/index.md`
  - [DOC] **Clip** — `/developers/embed/clip`
    → `content/developers/embed/clip.md`
  - [SECTION] **Player** — `/developers/embed/player`
    → `content/developers/embed/player/index.md`
    - [DOC] **Interactive Chapter & Transcript** — `/developers/embed/player/chapters`
      → `content/developers/embed/player/chapters.md`
    - [DOC] **Clip** — `/developers/embed/player/clip`
      → `content/developers/embed/player/clip.md`
    - [DOC] **Settings** — `/developers/embed/player/settings`
      → `content/developers/embed/player/settings.md`
- [SECTION] **API** — `/developers/api`
  → `content/developers/api/index.md`
  - [SECTION] **v1** — `/developers/api/v1`
    → `content/developers/api/v1/index.md`
    - [SECTION] **Publish** — `/developers/api/v1/publish`
      → `content/developers/api/v1/publish/index.md`
      - [DOC] **Audio** — `/developers/api/v1/publish/audio`
        → `content/developers/api/v1/publish/audio.md`
      - [DOC] **Podcast** — `/developers/api/v1/publish/podcast`
        → `content/developers/api/v1/publish/podcast.md`
      - [DOC] **Presigned URL** — `/developers/api/v1/publish/presigned-url`
        → `content/developers/api/v1/publish/presigned-url.md`
      - [DOC] **Video** — `/developers/api/v1/publish/video`
        → `content/developers/api/v1/publish/video.md`

## Flat index (alphabetical by path)

| Route | File |
|---|---|
| `/` | `content/index.md` |
| `/about` | `content/about.md` |
| `/advertising` | `content/advertising.md` |
| `/brand-toolkit` | `content/brand-toolkit.md` |
| `/careers` | `content/careers.md` |
| `/developers` | `content/developers.md` |
| `/developers/api` | `content/developers/api/index.md` |
| `/developers/api/v1` | `content/developers/api/v1/index.md` |
| `/developers/api/v1/publish` | `content/developers/api/v1/publish/index.md` |
| `/developers/api/v1/publish/audio` | `content/developers/api/v1/publish/audio.md` |
| `/developers/api/v1/publish/podcast` | `content/developers/api/v1/publish/podcast.md` |
| `/developers/api/v1/publish/presigned-url` | `content/developers/api/v1/publish/presigned-url.md` |
| `/developers/api/v1/publish/video` | `content/developers/api/v1/publish/video.md` |
| `/developers/developers` | `content/developers/developers/index.md` |
| `/developers/developers/api` | `content/developers/developers/api/index.md` |
| `/developers/developers/api/business` | `content/developers/developers/api/business.md` |
| `/developers/developers/apps` | `content/developers/developers/apps.md` |
| `/developers/developers/connectors` | `content/developers/developers/connectors.md` |
| `/developers/developers/console` | `content/developers/developers/console.md` |
| `/developers/developers/docs` | `content/developers/developers/docs.md` |
| `/developers/developers/ecosystem` | `content/developers/developers/ecosystem.md` |
| `/developers/developers/keys` | `content/developers/developers/keys.md` |
| `/developers/developers/mcp` | `content/developers/developers/mcp.md` |
| `/developers/developers/partners` | `content/developers/developers/partners.md` |
| `/developers/developers/sandbox` | `content/developers/developers/sandbox.md` |
| `/developers/developers/sdks` | `content/developers/developers/sdks/index.md` |
| `/developers/developers/sdks/events` | `content/developers/developers/sdks/events.md` |
| `/developers/developers/sdks/playback` | `content/developers/developers/sdks/playback.md` |
| `/developers/developers/tools` | `content/developers/developers/tools.md` |
| `/developers/developers/usage` | `content/developers/developers/usage.md` |
| `/developers/developers/webhooks` | `content/developers/developers/webhooks.md` |
| `/developers/embed` | `content/developers/embed/index.md` |
| `/developers/embed/clip` | `content/developers/embed/clip.md` |
| `/developers/embed/player` | `content/developers/embed/player/index.md` |
| `/developers/embed/player/chapters` | `content/developers/embed/player/chapters.md` |
| `/developers/embed/player/clip` | `content/developers/embed/player/clip.md` |
| `/developers/embed/player/settings` | `content/developers/embed/player/settings.md` |
| `/download` | `content/download.md` |
| `/for-business` | `content/for-business.md` |
| `/for-creators` | `content/for-creators.md` |
| `/for-fans` | `content/for-fans.md` |
| `/for-labels` | `content/for-labels.md` |
| `/investors` | `content/investors.md` |
| `/legal-and-policies` | `content/legal-and-policies/index.md` |
| `/legal-and-policies/copyright-and-ip` | `content/legal-and-policies/copyright-and-ip/index.md` |
| `/legal-and-policies/copyright-and-ip/commercial-use` | `content/legal-and-policies/copyright-and-ip/commercial-use.md` |
| `/legal-and-policies/copyright-and-ip/copyright-reporting` | `content/legal-and-policies/copyright-and-ip/copyright-reporting.md` |
| `/legal-and-policies/copyright-and-ip/dmca-policy` | `content/legal-and-policies/copyright-and-ip/dmca-policy.md` |
| `/legal-and-policies/copyright-and-ip/intellectual-property-policy` | `content/legal-and-policies/copyright-and-ip/intellectual-property-policy.md` |
| `/legal-and-policies/copyright-and-ip/ownership-and-copyright` | `content/legal-and-policies/copyright-and-ip/ownership-and-copyright.md` |
| `/legal-and-policies/copyright-and-ip/trademark-and-counterfeiting` | `content/legal-and-policies/copyright-and-ip/trademark-and-counterfeiting.md` |
| `/legal-and-policies/our-rules` | `content/legal-and-policies/our-rules.md` |
| `/legal-and-policies/terms-of-use` | `content/legal-and-policies/terms-of-use/index.md` |
| `/legal-and-policies/terms-of-use/ai-services-terms` | `content/legal-and-policies/terms-of-use/ai-services-terms.md` |
| `/legal-and-policies/terms-of-use/arbitration-nama-dr` | `content/legal-and-policies/terms-of-use/arbitration-nama-dr.md` |
| `/legal-and-policies/terms-of-use/branded-content-policy` | `content/legal-and-policies/terms-of-use/branded-content-policy.md` |
| `/legal-and-policies/terms-of-use/buyer-policy` | `content/legal-and-policies/terms-of-use/buyer-policy.md` |
| `/legal-and-policies/terms-of-use/campaign-terms-and-conditions` | `content/legal-and-policies/terms-of-use/campaign-terms-and-conditions.md` |
| `/legal-and-policies/terms-of-use/commercial-music-library-terms` | `content/legal-and-policies/terms-of-use/commercial-music-library-terms.md` |
| `/legal-and-policies/terms-of-use/community-rules-and-guidelines` | `content/legal-and-policies/terms-of-use/community-rules-and-guidelines.md` |
| `/legal-and-policies/terms-of-use/community-terms` | `content/legal-and-policies/terms-of-use/community-terms.md` |
| `/legal-and-policies/terms-of-use/distribution-agreement` | `content/legal-and-policies/terms-of-use/distribution-agreement.md` |
| `/legal-and-policies/terms-of-use/dmca-policy` | `content/legal-and-policies/terms-of-use/dmca-policy.md` |
| `/legal-and-policies/terms-of-use/gift-card-terms` | `content/legal-and-policies/terms-of-use/gift-card-terms.md` |
| `/legal-and-policies/terms-of-use/intellectual-property-policy` | `content/legal-and-policies/terms-of-use/intellectual-property-policy.md` |
| `/legal-and-policies/terms-of-use/music-terms` | `content/legal-and-policies/terms-of-use/music-terms.md` |
| `/legal-and-policies/terms-of-use/open-source-software-notices` | `content/legal-and-policies/terms-of-use/open-source-software-notices.md` |
| `/legal-and-policies/terms-of-use/rewards-policy` | `content/legal-and-policies/terms-of-use/rewards-policy.md` |
| `/legal-and-policies/terms-of-use/song-purchase-terms` | `content/legal-and-policies/terms-of-use/song-purchase-terms.md` |
| `/legal-and-policies/terms-of-use/subscription-terms` | `content/legal-and-policies/terms-of-use/subscription-terms.md` |
| `/legal-and-policies/terms-of-use/subscription-terms-and-conditions` | `content/legal-and-policies/terms-of-use/subscription-terms-and-conditions.md` |
| `/legal-and-policies/terms-of-use/user-guidelines` | `content/legal-and-policies/terms-of-use/user-guidelines.md` |
| `/legal-and-policies/transparency-center` | `content/legal-and-policies/transparency-center.md` |
| `/privacy-and-safety` | `content/privacy-and-safety/index.md` |
| `/privacy-and-safety/a-safer-musicosy` | `content/privacy-and-safety/a-safer-musicosy.md` |
| `/privacy-and-safety/content-and-conduct` | `content/privacy-and-safety/content-and-conduct/index.md` |
| `/privacy-and-safety/content-and-conduct/age-restricted-live-content` | `content/privacy-and-safety/content-and-conduct/age-restricted-live-content.md` |
| `/privacy-and-safety/content-and-conduct/community-guidelines` | `content/privacy-and-safety/content-and-conduct/community-guidelines.md` |
| `/privacy-and-safety/content-and-conduct/community-principles` | `content/privacy-and-safety/content-and-conduct/community-principles.md` |
| `/privacy-and-safety/content-and-conduct/content-algorithm` | `content/privacy-and-safety/content-and-conduct/content-algorithm.md` |
| `/privacy-and-safety/content-and-conduct/content-levels` | `content/privacy-and-safety/content-and-conduct/content-levels.md` |
| `/privacy-and-safety/content-and-conduct/content-levels-on-posts` | `content/privacy-and-safety/content-and-conduct/content-levels-on-posts.md` |
| `/privacy-and-safety/content-and-conduct/creator-code-of-conduct` | `content/privacy-and-safety/content-and-conduct/creator-code-of-conduct.md` |
| `/privacy-and-safety/content-and-conduct/dangerous-and-deceptive-content` | `content/privacy-and-safety/content-and-conduct/dangerous-and-deceptive-content.md` |
| `/privacy-and-safety/content-and-conduct/for-you-feed-eligibility-standards` | `content/privacy-and-safety/content-and-conduct/for-you-feed-eligibility-standards.md` |
| `/privacy-and-safety/content-and-conduct/integrity-and-authenticity` | `content/privacy-and-safety/content-and-conduct/integrity-and-authenticity.md` |
| `/privacy-and-safety/content-and-conduct/mental-and-behavioral-health` | `content/privacy-and-safety/content-and-conduct/mental-and-behavioral-health.md` |
| `/privacy-and-safety/content-and-conduct/political-ads` | `content/privacy-and-safety/content-and-conduct/political-ads.md` |
| `/privacy-and-safety/content-and-conduct/regulated-goods-and-services` | `content/privacy-and-safety/content-and-conduct/regulated-goods-and-services.md` |
| `/privacy-and-safety/content-and-conduct/restricted-mode` | `content/privacy-and-safety/content-and-conduct/restricted-mode.md` |
| `/privacy-and-safety/content-and-conduct/safety-and-civility` | `content/privacy-and-safety/content-and-conduct/safety-and-civility.md` |
| `/privacy-and-safety/content-and-conduct/sensitive-and-mature-themes` | `content/privacy-and-safety/content-and-conduct/sensitive-and-mature-themes.md` |
| `/privacy-and-safety/content-and-conduct/violent-extremism` | `content/privacy-and-safety/content-and-conduct/violent-extremism.md` |
| `/privacy-and-safety/content-and-conduct/youth-safety-and-well-being` | `content/privacy-and-safety/content-and-conduct/youth-safety-and-well-being.md` |
| `/privacy-and-safety/how-we-address-misinformation` | `content/privacy-and-safety/how-we-address-misinformation.md` |
| `/privacy-and-safety/law-enforcement` | `content/privacy-and-safety/law-enforcement/index.md` |
| `/privacy-and-safety/law-enforcement/law-enforcement-data-request-guidelines` | `content/privacy-and-safety/law-enforcement/law-enforcement-data-request-guidelines.md` |
| `/privacy-and-safety/my-privacy` | `content/privacy-and-safety/my-privacy.md` |
| `/privacy-and-safety/privacy` | `content/privacy-and-safety/privacy/index.md` |
| `/privacy-and-safety/privacy/account-privacy` | `content/privacy-and-safety/privacy/account-privacy.md` |
| `/privacy-and-safety/privacy/additional-terms-of-service` | `content/privacy-and-safety/privacy/additional-terms-of-service.md` |
| `/privacy-and-safety/privacy/california-notice-of-collection` | `content/privacy-and-safety/privacy/california-notice-of-collection.md` |
| `/privacy-and-safety/privacy/collecting-your-personal-data` | `content/privacy-and-safety/privacy/collecting-your-personal-data.md` |
| `/privacy-and-safety/privacy/consumer-health-data-privacy-policy` | `content/privacy-and-safety/privacy/consumer-health-data-privacy-policy.md` |
| `/privacy-and-safety/privacy/cookies-policy` | `content/privacy-and-safety/privacy/cookies-policy.md` |
| `/privacy-and-safety/privacy/google-privacy-policy` | `content/privacy-and-safety/privacy/google-privacy-policy.md` |
| `/privacy-and-safety/privacy/information-we-collect` | `content/privacy-and-safety/privacy/information-we-collect.md` |
| `/privacy-and-safety/privacy/kids-privacy-policy` | `content/privacy-and-safety/privacy/kids-privacy-policy.md` |
| `/privacy-and-safety/privacy/location-detection` | `content/privacy-and-safety/privacy/location-detection.md` |
| `/privacy-and-safety/privacy/notification-settings` | `content/privacy-and-safety/privacy/notification-settings.md` |
| `/privacy-and-safety/privacy/privacy-policies` | `content/privacy-and-safety/privacy/privacy-policies.md` |
| `/privacy-and-safety/privacy/privacy-policy` | `content/privacy-and-safety/privacy/privacy-policy.md` |
| `/privacy-and-safety/privacy/protecting-your-personal-data` | `content/privacy-and-safety/privacy/protecting-your-personal-data.md` |
| `/privacy-and-safety/privacy/sheerid-privacy-policy` | `content/privacy-and-safety/privacy/sheerid-privacy-policy.md` |
| `/privacy-and-safety/privacy/your-data-rights` | `content/privacy-and-safety/privacy/your-data-rights.md` |
| `/privacy-and-safety/recommender-systems` | `content/privacy-and-safety/recommender-systems.md` |
| `/privacy-and-safety/reporting` | `content/privacy-and-safety/reporting/index.md` |
| `/privacy-and-safety/reporting/report-a-post` | `content/privacy-and-safety/reporting/report-a-post.md` |
| `/privacy-and-safety/reporting/report-a-post-account-live-comment-dm` | `content/privacy-and-safety/reporting/report-a-post-account-live-comment-dm.md` |
| `/privacy-and-safety/reporting/report-another-issue` | `content/privacy-and-safety/reporting/report-another-issue.md` |
| `/privacy-and-safety/reporting/report-bullying` | `content/privacy-and-safety/reporting/report-bullying.md` |
| `/privacy-and-safety/reporting/report-impersonation` | `content/privacy-and-safety/reporting/report-impersonation.md` |
| `/privacy-and-safety/reporting/report-sexual-abuse` | `content/privacy-and-safety/reporting/report-sexual-abuse.md` |
| `/privacy-and-safety/reporting/report-suggested-search-hashtag-sound-series` | `content/privacy-and-safety/reporting/report-suggested-search-hashtag-sound-series.md` |
| `/privacy-and-safety/reporting/report-underage-account` | `content/privacy-and-safety/reporting/report-underage-account.md` |
| `/privacy-and-safety/reporting/share-feedback` | `content/privacy-and-safety/reporting/share-feedback.md` |
| `/privacy-and-safety/safety` | `content/privacy-and-safety/safety/index.md` |
| `/privacy-and-safety/safety/activity-status` | `content/privacy-and-safety/safety/activity-status.md` |
| `/privacy-and-safety/safety/age-verification` | `content/privacy-and-safety/safety/age-verification.md` |
| `/privacy-and-safety/safety/audience-controls` | `content/privacy-and-safety/safety/audience-controls.md` |
| `/privacy-and-safety/safety/content-restrictions` | `content/privacy-and-safety/safety/content-restrictions.md` |
| `/privacy-and-safety/safety/guidance-for-parents-caregivers` | `content/privacy-and-safety/safety/guidance-for-parents-caregivers.md` |
| `/privacy-and-safety/safety/manage-topics` | `content/privacy-and-safety/safety/manage-topics.md` |
| `/privacy-and-safety/safety/manage-video-downloads` | `content/privacy-and-safety/safety/manage-video-downloads.md` |
| `/privacy-and-safety/safety/platform-rules` | `content/privacy-and-safety/safety/platform-rules.md` |
| `/privacy-and-safety/safety/post-privacy-settings` | `content/privacy-and-safety/safety/post-privacy-settings.md` |
| `/privacy-and-safety/safety/reporting-content` | `content/privacy-and-safety/safety/reporting-content.md` |
| `/privacy-and-safety/safety/stitch-privacy-settings` | `content/privacy-and-safety/safety/stitch-privacy-settings.md` |
| `/privacy-and-safety/safety/suggested-accounts` | `content/privacy-and-safety/safety/suggested-accounts.md` |
| `/privacy-and-safety/safety/teen-privacy-and-safety-settings` | `content/privacy-and-safety/safety/teen-privacy-and-safety-settings.md` |
| `/privacy-and-safety/safety/under-13-experience` | `content/privacy-and-safety/safety/under-13-experience.md` |
| `/privacy-and-safety/safety/underage-appeals` | `content/privacy-and-safety/safety/underage-appeals.md` |
| `/privacy-and-safety/safety/youth-portal` | `content/privacy-and-safety/safety/youth-portal.md` |
| `/privacy-and-safety/security` | `content/privacy-and-safety/security/index.md` |
| `/privacy-and-safety/security/account-safety` | `content/privacy-and-safety/security/account-safety.md` |
| `/privacy-and-safety/security/account-status` | `content/privacy-and-safety/security/account-status.md` |
| `/privacy-and-safety/security/avoid-phishing` | `content/privacy-and-safety/security/avoid-phishing.md` |
| `/privacy-and-safety/security/content-violations-and-bans` | `content/privacy-and-safety/security/content-violations-and-bans.md` |
| `/privacy-and-safety/security/reporting-security-vulnerabilities` | `content/privacy-and-safety/security/reporting-security-vulnerabilities.md` |
| `/privacy-and-safety/security/reporting-vulnerabilities` | `content/privacy-and-safety/security/reporting-vulnerabilities.md` |
| `/privacy-and-safety/security/transaction-policy-violations` | `content/privacy-and-safety/security/transaction-policy-violations.md` |
| `/resources` | `content/resources/index.md` |
| `/resources/accessibility` | `content/resources/accessibility.md` |
| `/resources/blog` | `content/resources/blog.md` |
| `/resources/glossary` | `content/resources/glossary.md` |
| `/resources/guides` | `content/resources/guides.md` |
| `/resources/help-center` | `content/resources/help-center/index.md` |
| `/resources/help-center/using-musicosy` | `content/resources/help-center/using-musicosy.md` |
| `/resources/help-center/using-musicosy/account-management` | `content/resources/help-center/using-musicosy/account-management/index.md` |
| `/resources/help-center/using-musicosy/account-management/account-settings` | `content/resources/help-center/using-musicosy/account-management/account-settings.md` |
| `/resources/help-center/using-musicosy/account-management/manage-your-account` | `content/resources/help-center/using-musicosy/account-management/manage-your-account.md` |
| `/resources/help-center/using-musicosy/account-management/notification-settings` | `content/resources/help-center/using-musicosy/account-management/notification-settings.md` |
| `/resources/help-center/using-musicosy/collections` | `content/resources/help-center/using-musicosy/collections/index.md` |
| `/resources/help-center/using-musicosy/collections/create-collections` | `content/resources/help-center/using-musicosy/collections/create-collections.md` |
| `/resources/help-center/using-musicosy/collections/playlists` | `content/resources/help-center/using-musicosy/collections/playlists.md` |
| `/resources/help-center/using-musicosy/collections/shared-collections` | `content/resources/help-center/using-musicosy/collections/shared-collections.md` |
| `/resources/help-center/using-musicosy/content-interaction` | `content/resources/help-center/using-musicosy/content-interaction/index.md` |
| `/resources/help-center/using-musicosy/content-interaction/comment` | `content/resources/help-center/using-musicosy/content-interaction/comment.md` |
| `/resources/help-center/using-musicosy/content-interaction/like` | `content/resources/help-center/using-musicosy/content-interaction/like.md` |
| `/resources/help-center/using-musicosy/content-interaction/mentions` | `content/resources/help-center/using-musicosy/content-interaction/mentions.md` |
| `/resources/help-center/using-musicosy/content-interaction/repost` | `content/resources/help-center/using-musicosy/content-interaction/repost.md` |
| `/resources/help-center/using-musicosy/content-interaction/share` | `content/resources/help-center/using-musicosy/content-interaction/share.md` |
| `/resources/help-center/using-musicosy/discover-and-browse` | `content/resources/help-center/using-musicosy/discover-and-browse/index.md` |
| `/resources/help-center/using-musicosy/discover-and-browse/discover-content` | `content/resources/help-center/using-musicosy/discover-and-browse/discover-content.md` |
| `/resources/help-center/using-musicosy/discover-and-browse/feed` | `content/resources/help-center/using-musicosy/discover-and-browse/feed.md` |
| `/resources/help-center/using-musicosy/discover-and-browse/for-you-feed` | `content/resources/help-center/using-musicosy/discover-and-browse/for-you-feed.md` |
| `/resources/help-center/using-musicosy/discover-and-browse/friends-tab` | `content/resources/help-center/using-musicosy/discover-and-browse/friends-tab.md` |
| `/resources/help-center/using-musicosy/discover-and-browse/search` | `content/resources/help-center/using-musicosy/discover-and-browse/search.md` |
| `/resources/help-center/using-musicosy/getting-started` | `content/resources/help-center/using-musicosy/getting-started/index.md` |
| `/resources/help-center/using-musicosy/getting-started/create-an-account` | `content/resources/help-center/using-musicosy/getting-started/create-an-account.md` |
| `/resources/help-center/using-musicosy/getting-started/find-friends` | `content/resources/help-center/using-musicosy/getting-started/find-friends.md` |
| `/resources/help-center/using-musicosy/getting-started/follow-unfollow` | `content/resources/help-center/using-musicosy/getting-started/follow-unfollow.md` |
| `/resources/help-center/using-musicosy/media-and-playback` | `content/resources/help-center/using-musicosy/media-and-playback/index.md` |
| `/resources/help-center/using-musicosy/media-and-playback/fullscreen` | `content/resources/help-center/using-musicosy/media-and-playback/fullscreen.md` |
| `/resources/help-center/using-musicosy/media-and-playback/on-demand-playback` | `content/resources/help-center/using-musicosy/media-and-playback/on-demand-playback.md` |
| `/resources/help-center/using-musicosy/media-and-playback/sound` | `content/resources/help-center/using-musicosy/media-and-playback/sound.md` |
| `/resources/help-center/using-musicosy/media-and-playback/video-playing` | `content/resources/help-center/using-musicosy/media-and-playback/video-playing.md` |
| `/resources/new-user-faq` | `content/resources/new-user-faq.md` |
| `/status` | `content/status.md` |
| `/support` | `content/support/index.md` |
| `/support/advertising-hub` | `content/support/advertising-hub/index.md` |
| `/support/advertising-hub/ad-campaign-analytics` | `content/support/advertising-hub/ad-campaign-analytics.md` |
| `/support/advertising-hub/ad-campaign-creation` | `content/support/advertising-hub/ad-campaign-creation.md` |
| `/support/advertising-hub/ad-group-management` | `content/support/advertising-hub/ad-group-management.md` |
| `/support/advertising-hub/advertising-operations` | `content/support/advertising-hub/advertising-operations.md` |
| `/support/advertising-hub/audience-targeting` | `content/support/advertising-hub/audience-targeting.md` |
| `/support/advertising-hub/creative-asset-management` | `content/support/advertising-hub/creative-asset-management.md` |
| `/support/contact-us` | `content/support/contact-us.md` |
| `/support/email-preferences` | `content/support/email-preferences.md` |
| `/support/managing-your-account` | `content/support/managing-your-account.md` |
| `/support/managing-your-account/account-safety` | `content/support/managing-your-account/account-safety.md` |
| `/support/managing-your-account/account-settings-and-privacy` | `content/support/managing-your-account/account-settings-and-privacy.md` |
| `/support/managing-your-account/account-status` | `content/support/managing-your-account/account-status.md` |
| `/support/managing-your-account/blocking-someone` | `content/support/managing-your-account/blocking-someone.md` |
| `/support/managing-your-account/muting` | `content/support/managing-your-account/muting.md` |
| `/support/managing-your-account/notification-settings` | `content/support/managing-your-account/notification-settings.md` |
| `/support/managing-your-account/push-notifications` | `content/support/managing-your-account/push-notifications.md` |
| `/support/managing-your-account/remove-followers` | `content/support/managing-your-account/remove-followers.md` |
| `/support/sign-in` | `content/support/sign-in.md` |
| `/support/support-and-account-management` | `content/support/support-and-account-management.md` |
| `/support/using-musicosy` | `content/support/using-musicosy/index.md` |
| `/support/using-musicosy/account-management` | `content/support/using-musicosy/account-management.md` |
| `/support/using-musicosy/ai-music-generation` | `content/support/using-musicosy/ai-music-generation.md` |
| `/support/using-musicosy/collections` | `content/support/using-musicosy/collections.md` |
| `/support/using-musicosy/content-interaction` | `content/support/using-musicosy/content-interaction.md` |
| `/support/using-musicosy/direct-messages` | `content/support/using-musicosy/direct-messages.md` |
| `/support/using-musicosy/discover-and-browse` | `content/support/using-musicosy/discover-and-browse.md` |
| `/support/using-musicosy/getting-started` | `content/support/using-musicosy/getting-started.md` |
| `/support/using-musicosy/live` | `content/support/using-musicosy/live.md` |
| `/support/using-musicosy/media-and-playback` | `content/support/using-musicosy/media-and-playback.md` |
| `/support/using-musicosy/monetization` | `content/support/using-musicosy/monetization.md` |
| `/support/using-musicosy/third-party-integrations` | `content/support/using-musicosy/third-party-integrations.md` |

## Footer column mapping

The footer has five columns. Each link points to a route documented above.

### Using Musicosy (column heading → `/resources/help-center/using-musicosy`)

- Managing your account → `/support/managing-your-account`
- Safety and security → `/privacy-and-safety`
- Rules and policies → `/legal-and-policies`
- Resources → `/resources`
- New user FAQ → `/resources/new-user-faq`
- Glossary → `/resources/glossary`
- A safer Musicosy → `/privacy-and-safety/a-safer-musicosy`
- Accessibility → `/resources/accessibility`
- Our rules → `/legal-and-policies/our-rules`
- My privacy → `/privacy-and-safety/my-privacy`
- How we address misinformation → `/privacy-and-safety/how-we-address-misinformation`
- Recommender Systems → `/privacy-and-safety/recommender-systems`
- Sign in → `/support/sign-in`
- Contact Us → `/support/contact-us`

### Platform (column heading → `/about`)

- Status → `/status`
- Accessibility → `/resources/accessibility`
- Embed a post → `/developers/embed`
- Privacy Center → `/privacy-and-safety`
- Transparency Center → `/legal-and-policies/transparency-center`
- Download the app → `/download`
- About the company → `/about`
- Company news → `/resources/blog`
- Brand toolkit → `/brand-toolkit`
- Jobs and internships → `/careers`
- Investors → `/investors`

### Help Center (column heading → `/resources/help-center`)

- Using Musicosy → `/resources/help-center/using-musicosy`
- Musicosy for creators → `/for-creators`
- Ads Help Center → `/advertising`
- Managing your account → `/support/managing-your-account`
- Email Preference Center → `/support/email-preferences`
- Rules and policies → `/legal-and-policies`
- Contact us → `/support/contact-us`

### Developer resources (column heading → `/developers`)

- Developer home → `/developers`
- Documentation → `/developers/developers/docs`
- Forums → `/developers/developers/ecosystem`
- Communities → `/developers/developers/ecosystem`
- Developer blog → `/resources/blog`
- Engineering blog → `/resources/blog`
- Developer terms → `/legal-and-policies`

### Business resources (column heading → `/for-business`)

- Advertise → `/advertising`
- Musicosy for business → `/for-business`
- Resources and guides → `/resources/guides`
- Musicosy for marketers → `/for-business`
- Marketing insights → `/for-business`
- Brand inspiration → `/for-business`
- Ads Studio → `/advertising`
