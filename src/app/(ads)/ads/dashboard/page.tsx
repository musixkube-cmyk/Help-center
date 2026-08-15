"use client";

import { useState } from "react";
import Link from "next/link";
import {
  PageHeader, MetricCard, DataTable, StatusBadge, StatusToggle, TabBar, Button,
  FilterBar, CustomColumns, BreakdownSelector, ExportButton, ActionsDropdown,
} from "@/components/ads/ui";

/* ═══════════════════════════════════════════════════════════
   Dashboard /ads/dashboard [P]
   
   Spec structure:
   ├── Dashboard Sections [C] — tabs: Campaigns, Audience, Tools, Analytics, Management, GMV Max, Settings
   ├── Campaign Performance Table [C]
   │   ├── All Campaigns View [L → Ads Manager / Campaigns]
   │   ├── Campaign Count Display [C]
   │   ├── CTR Destination [L → Analytics / CTR]
   │   ├── Clickers Destination [L → Analytics / Click Metrics]
   │   ├── Search & Filter [C]
   │   ├── Custom Columns [C]
   │   ├── Breakdown [C]
   │   ├── Campaign On / Off Toggle [C]
   │   ├── Actions Dropdown [C]
   │   └── View Report [L → Analytics & Measurement / Reports]
   └── GMV Max [P]
   ═══════════════════════════════════════════════════════════ */

const SECTIONS = ["Campaigns", "Audience", "Tools", "Analytics", "Management", "GMV Max", "Settings"];

const campaigns = [
  { id: "1", name: "Summer Launch 2026", status: "active" as const, objective: "Conversions", budget: "$100/day", spend: "$2,450", results: "1,230 clicks", ctr: "2.1%", clickers: "1,230", roas: "3.4x", on: true },
  { id: "2", name: "Brand Awareness Push", status: "active" as const, objective: "Awareness", budget: "$30/day", spend: "$890", results: "45K impressions", ctr: "0.8%", clickers: "360", roas: "2.1x", on: true },
  { id: "3", name: "Catalog Carousel Test", status: "paused" as const, objective: "Conversions", budget: "$20/day", spend: "$340", results: "89 clicks", ctr: "0.5%", clickers: "89", roas: "1.8x", on: false },
  { id: "4", name: "Retargeting — Site Visitors", status: "active" as const, objective: "Conversions", budget: "$50/day", spend: "$1,120", results: "340 conversions", ctr: "1.9%", clickers: "570", roas: "5.2x", on: true },
  { id: "5", name: "Audio Discovery Campaign", status: "draft" as const, objective: "Awareness", budget: "$25/day", spend: "$0", results: "—", ctr: "—", clickers: "—", roas: "—", on: false },
];

const ALL_COLUMNS = [
  { key: "name", label: "Campaign" },
  { key: "status", label: "Status" },
  { key: "objective", label: "Objective" },
  { key: "budget", label: "Budget" },
  { key: "spend", label: "Spend" },
  { key: "results", label: "Results" },
  { key: "ctr", label: "CTR" },
  { key: "clickers", label: "Clickers" },
  { key: "roas", label: "ROAS" },
];

const BREAKDOWN_OPTIONS = [
  { key: "age", label: "Age" },
  { key: "gender", label: "Gender" },
  { key: "placement", label: "Placement" },
  { key: "region", label: "Region" },
  { key: "device", label: "Device" },
];

export default function DashboardPage() {
  const [section, setSection] = useState(0);
  const [campaignToggles, setCampaignToggles] = useState<Record<string, boolean>>(
    Object.fromEntries(campaigns.map((c) => [c.id, c.on]))
  );
  const [visibleCols, setVisibleCols] = useState(ALL_COLUMNS.map((c) => c.key));
  const [breakdown, setBreakdown] = useState("");

  const toggleCampaign = (id: string) => {
    setCampaignToggles((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div>
      <PageHeader
        title="Dashboard"
        description="Overview of your advertising performance, campaign health, and recent activity."
        breadcrumbs={[{ label: "Ad Center" }, { label: "Dashboard" }]}
        actions={
          <Link href="/ads/ads-manager/campaigns/create">
            <Button>Create Campaign</Button>
          </Link>
        }
      />

      {/* ─── Dashboard Sections Tabs ─── */}
      <TabBar tabs={SECTIONS} active={section} onChange={setSection} />

      {/* ═══ Campaigns Section ═══ */}
      {section === 0 && (
        <div>
          {/* KPI Scorecards */}
          <div className="mb-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
            <MetricCard label="Total Spend" value="$4,800" delta="+12% vs last 30d" deltaType="negative" prefix="$" />
            <MetricCard label="Impressions" value="187K" delta="+8% vs last 30d" deltaType="positive" />
            <MetricCard label="Clicks" value="2,659" delta="+15% vs last 30d" deltaType="positive" />
            <MetricCard label="Conversions" value="526" delta="+22% vs last 30d" deltaType="positive" />
          </div>
          <div className="mb-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
            <MetricCard label="CTR" value="1.42%" delta="+0.12pp" deltaType="positive" />
            <MetricCard label="CPA" value="$9.12" delta="-$1.40" deltaType="positive" prefix="$" />
            <MetricCard label="ROAS" value="3.6x" delta="+0.4x" deltaType="positive" />
            <MetricCard label="Active Campaigns" value="3" delta="of 5 total" deltaType="neutral" />
          </div>

          {/* ─── Campaign Performance Table ─── */}
          <div className="space-y-3">
            {/* Toolbar: Search, Filter, Custom Columns, Breakdown, Export, Count */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex-1 min-w-[200px]">
                <FilterBar
                  searchPlaceholder="Search campaigns…"
                  filters={[
                    { label: "Status", options: ["Active", "Paused", "Draft"] },
                    { label: "Objective", options: ["Awareness", "Consideration", "Conversion"] },
                  ]}
                />
              </div>
              <CustomColumns allColumns={ALL_COLUMNS} visibleKeys={visibleCols} onChange={setVisibleCols} />
              <BreakdownSelector options={BREAKDOWN_OPTIONS} selected={breakdown} onChange={setBreakdown} />
              <ExportButton
                onExportCSV={() => alert("Exporting campaigns as CSV…")}
                onExportPDF={() => alert("Exporting campaigns as PDF…")}
              />
            </div>

            {/* Campaign Count Display */}
            <div className="flex items-center justify-between">
              <p className="text-sm text-neutral-500">
                <span className="font-medium text-neutral-900">{campaigns.length}</span> campaigns
              </p>
              <Link href="/ads/ads-manager/campaigns" className="text-xs font-medium text-neutral-500 hover:text-neutral-700">
                View all in Ads Manager →
              </Link>
            </div>

            {/* Data Table */}
            <DataTable
              columns={[
                ...(visibleCols.includes("name") ? [{ key: "name" as const, label: "Campaign", render: (v: string, row: typeof campaigns[0]) => (
                  <div className="flex items-center gap-2">
                    <StatusToggle active={campaignToggles[row.id]} onToggle={() => toggleCampaign(row.id)} />
                    <span className="font-medium text-neutral-900">{v}</span>
                  </div>
                )}] : []),
                ...(visibleCols.includes("status") ? [{ key: "status" as const, label: "Status", render: (_: string, row: typeof campaigns[0]) => <StatusBadge status={row.status} /> }] : []),
                ...(visibleCols.includes("objective") ? [{ key: "objective" as const, label: "Objective" }] : []),
                ...(visibleCols.includes("budget") ? [{ key: "budget" as const, label: "Budget" }] : []),
                ...(visibleCols.includes("spend") ? [{ key: "spend" as const, label: "Spend", render: (v: string) => <span className="font-medium text-neutral-900">{v}</span> }] : []),
                ...(visibleCols.includes("results") ? [{ key: "results" as const, label: "Results" }] : []),
                ...(visibleCols.includes("ctr") ? [{ key: "ctr" as const, label: "CTR", render: (v: string) => v === "—" ? <span className="text-neutral-400">{v}</span> : <Link href="/ads/analytics/ctr" className="font-medium text-neutral-900 hover:text-blue-600 hover:underline">{v}</Link> }] : []),
                ...(visibleCols.includes("clickers") ? [{ key: "clickers" as const, label: "Clickers", render: (v: string) => v === "—" ? <span className="text-neutral-400">{v}</span> : <Link href="/ads/analytics/click-metrics" className="font-medium text-neutral-900 hover:text-blue-600 hover:underline">{v}</Link> }] : []),
                ...(visibleCols.includes("roas") ? [{ key: "roas" as const, label: "ROAS", render: (v: string) => <span className="font-medium text-neutral-900">{v}</span> }] : []),
                { key: "_actions" as const, label: "", render: (_: string, row: typeof campaigns[0]) => (
                  <div className="flex items-center gap-2">
                    <ActionsDropdown actions={[
                      { label: "Edit", onClick: () => {} },
                      { label: "Duplicate", onClick: () => {} },
                      { label: "Pause", onClick: () => toggleCampaign(row.id) },
                      { label: "Delete", onClick: () => {}, variant: "danger" as const },
                    ]} />
                    <Link href="/ads/analytics/reports" className="text-xs font-medium text-neutral-500 hover:text-neutral-700">View Report</Link>
                  </div>
                )},
              ].filter(Boolean)}
              data={campaigns}
              rowHref={(row) => `/ads/ads-manager/campaigns/${row.id}`}
            />
          </div>
        </div>
      )}

      {/* ═══ Audience Section ═══ */}
      {section === 1 && (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            <MetricCard label="Total Audiences" value="24" delta="+3 this month" deltaType="positive" />
            <MetricCard label="Custom Audiences" value="12" />
            <MetricCard label="Lookalike Audiences" value="8" />
            <MetricCard label="Total Reach" value="2.4M" />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { label: "Audience List", desc: "View and manage all audiences", href: "/ads/audiences" },
              { label: "Create Audience", desc: "Build a new custom or lookalike audience", href5: "/ads/audiences/create" },
              { label: "Demographic Targeting", desc: "Set age, gender, and language defaults", href: "/ads/audiences/demographic" },
              { label: "Location Targeting", desc: "Define geographic targeting rules", href: "/ads/audiences/location" },
              { label: "Music Behavior", desc: "Target by listening behavior and genre", href: "/ads/audiences/music-behavior" },
              { label: "Artist Affinity", desc: "Target by artist and creator affinity", href: "/ads/audiences/artist-affinity" },
            ].map((card) => (
              <Link key={card.label} href={card.href} className="rounded-xl border border-neutral-100 bg-white p-5 transition-colors hover:border-neutral-200 hover:bg-neutral-50">
                <h3 className="text-sm font-semibold text-neutral-900">{card.label}</h3>
                <p className="mt-1 text-xs text-neutral-500">{card.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* ═══ Tools Section ═══ */}
      {section === 2 && (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { label: "Keyword Planner", href: "/ads/tools/keyword-planner" },
            { label: "Negative Keywords", href: "/ads/tools/negative-keywords" },
            { label: "Video Editor", href: "/ads/tools/video-editor" },
            { label: "Integrations", href: "/ads/tools/integrations" },
            { label: "MCP Server", href: "/ads/tools/mcp" },
            { label: "AI Skills", href: "/ads/ai/skills" },
          ].map((card) => (
            <Link key={card.label} href={card.href} className="rounded-xl border border-neutral-100 bg-white p-5 transition-colors hover:border-neutral-200 hover:bg-neutral-50">
              <h3 className="text-sm font-semibold text-neutral-900">{card.label}</h3>
            </Link>
          ))}
        </div>
      )}

      {/* ═══ Analytics Section ═══ */}
      {section === 3 && (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            <MetricCard label="Impressions" value="187K" delta="+8%" deltaType="positive" />
            <MetricCard label="CTR" value="1.42%" delta="+0.12pp" deltaType="positive" />
            <MetricCard label="Conversions" value="526" delta="+22%" deltaType="positive" />
            <MetricCard label="ROAS" value="3.6x" delta="+0.4x" deltaType="positive" />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { label: "Analytics Dashboard", href: "/ads/analytics" },
              { label: "Campaign Analytics", href: "/ads/analytics/campaigns" },
              { label: "Audience Insights", href: "/ads/analytics/audience" },
              { label: "Attribution Analytics", href: "/ads/analytics/attribution" },
              { label: "Reports", href: "/ads/analytics/reports" },
              { label: "Experiments", href: "/ads/analytics/experiments" },
            ].map((card) => (
              <Link key={card.label} href={card.href} className="rounded-xl border border-neutral-100 bg-white p-5 transition-colors hover:border-neutral-200 hover:bg-neutral-50">
                <h3 className="text-sm font-semibold text-neutral-900">{card.label}</h3>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* ═══ Management Section ═══ */}
      {section === 4 && (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { label: "Ads Manager", desc: "Campaigns, ad groups, ads", href: "/ads/ads-manager" },
            { label: "Placement & Inventory", desc: "Manage ad placements", href: "/ads/inventory" },
            { label: "CatalogD Manager", desc: "Product catalog and feeds", href: "/ads/catalog" },
            { label: "Events Manager", desc: "Conversion tracking", href: "/ads/events" },
            { label: "Automated Rules", desc: "Automation and alerts", href: "/ads/automated-rules" },
            { label: "Comments Manager", desc: "Ad comment moderation", href: "/ads/comments-manager" },
            { label: "Notification Center", desc: "Issues and announcements", href: "/ads/notifications" },
          ].map((card) => (
            <Link key={card.label} href={card.href} className="rounded-xl border border-neutral-100 bg-white p-5 transition-colors hover:border-neutral-200 hover:bg-neutral-50">
              <h3 className="text-sm font-semibold text-neutral-900">{card.label}</h3>
              {card.desc && <p className="mt-1 text-xs text-neutral-500">{card.desc}</p>}
            </Link>
          ))}
        </div>
      )}

      {/* ═══ GMV Max Section ═══ */}
      {section === 5 && (
        <div>
          <div className="mb-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
            <MetricCard label="GMV Total" value="$128,400" delta="+18% vs last 30d" deltaType="positive" prefix="$" />
            <MetricCard label="ROAS" value="4.2x" delta="+0.6x" deltaType="positive" />
            <MetricCard label="Avg. Order Value" value="$67.20" delta="+$4.30" deltaType="positive" prefix="$" />
            <MetricCard label="Conv. Rate" value="3.8%" delta="+0.3pp" deltaType="positive" />
          </div>
          <div className="rounded-xl border border-neutral-100 bg-white p-6">
            <h3 className="text-sm font-semibold text-neutral-900 mb-4">GMV Max Performance</h3>
            <p className="text-sm text-neutral-500">GMV Max optimizes your campaigns for maximum gross merchandise value. View detailed performance metrics and optimization settings on the dedicated page.</p>
            <Link href="/ads/gmv-max" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-neutral-900 hover:text-blue-600">
              View GMV Max Dashboard →
            </Link>
          </div>
        </div>
      )}

      {/* ═══ Settings Section ═══ */}
      {section === 6 && (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { label: "Ad Settings", href: "/ads/settings" },
            { label: "API Access", href: "/ads/settings/api" },
            { label: "Brand Safety", href: "/ads/settings/brand-safety" },
            { label: "Notification Settings", href: "/ads/settings/notifications" },
            { label: "Targeting Defaults", href: "/ads/settings/targeting-defaults" },
            { label: "Account Settings", href: "/ads/account/settings" },
            { label: "Billing & Payment", href: "/ads/billing" },
            { label: "Team & Members", href: "/ads/account/team" },
            { label: "Policies & Security", href: "/ads/policies-security" },
          ].map((card) => (
            <Link key={card.label} href={card.href} className="rounded-xl border border-neutral-100 bg-white p-5 transition-colors hover:border-neutral-200 hover:bg-neutral-50">
              <h3 className="text-sm font-semibold text-neutral-900">{card.label}</h3>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
