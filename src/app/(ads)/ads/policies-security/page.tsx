"use client";

import { PageHeader, CardGrid, MetricCard } from "@/components/ads/ui";

export default function PoliciesSecurityPage() {
  return (
    <div className="mx-auto max-w-7xl p-6">
      <PageHeader title="Advertising Policies & Security" description="Review advertising policies, privacy settings, security configurations, and brand safety controls." />
      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <MetricCard label="Policy Compliance" value="98%" delta="2 campaigns flagged" deltaType="neutral" />
        <MetricCard label="Security Score" value="A+" delta="All checks passed" deltaType="positive" />
        <MetricCard label="Brand Safety Events" value="3" delta="last 30 days" deltaType="neutral" />
      </div>
      <CardGrid cards={[
        { label: "Advertising Policies", description: "Content policies, prohibited categories, and restricted content guidelines", href: "/ads/policies-security/privacy" },
        { label: "Privacy & Data", description: "Data collection policies, consent management, and user privacy controls", href: "/ads/policies-security/privacy" },
        { label: "Security", description: "Account security, API access controls, and fraud prevention", href: "/ads/policies-security/security" },
        { label: "Brand Safety", description: "Content adjacency controls, blocklists, and suitability settings", href: "/ads/policies-security/brand-safety" },
      ]} />
    </div>
  );
}
