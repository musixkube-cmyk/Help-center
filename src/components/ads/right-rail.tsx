"use client";

import { useState } from "react";
import Link from "next/link";

/* ═══════════════════════════════════════════════════════════
   Contextual Right Rail — shows on campaign creation / editing
   pages with 5 panels:
   1. Estimated Results
   2. Delivery Likelihood
   3. Policy Warnings
   4. Recommendations
   5. Activity / Change History
   ═══════════════════════════════════════════════════════════ */

interface RightRailProps {
  /** Set true on campaign creation / editing pages */
  visible?: boolean;
  /** Override default estimates */
  estimates?: { label: string; value: string }[];
  deliveryLikelihood?: number;
  policyIssues?: { severity: "error" | "warning" | "info"; message: string }[];
}

export function ContextualRightRail({
  visible = true,
  estimates = [
    { label: "Impressions", value: "45K–62K" },
    { label: "Clicks", value: "680–940" },
    { label: "Conversions", value: "18–28" },
    { label: "Reach", value: "32K–44K" },
  ],
  deliveryLikelihood = 78,
  policyIssues = [
    { severity: "warning" as const, message: "Companion image dimensions below recommended 1200×628px" },
    { severity: "info" as const, message: "No negative keywords set — consider adding brand exclusions" },
  ],
}: RightRailProps) {
  const [collapsed, setCollapsed] = useState(false);
  const [activeSection, setActiveSection] = useState<number | null>(null);

  if (!visible) return null;

  const sections = [
    { id: "estimates", label: "Estimated Results" },
    { id: "delivery", label: "Delivery Likelihood" },
    { id: "policy", label: "Policy Warnings" },
    { id: "recommendations", label: "Recommendations" },
    { id: "activity", label: "Activity / Change History" },
  ];

  return (
    <aside className={`shrink-0 border-l border-neutral-200 bg-white transition-all duration-200 ${collapsed ? "w-10" : "w-72"}`}>
      {/* Toggle handle */}
      <div className="flex h-14 items-center justify-between border-b border-neutral-200 px-3">
        {!collapsed && <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Right Rail</h3>}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="flex h-6 w-6 items-center justify-center rounded text-neutral-400 hover:bg-neutral-100 hover:text-neutral-600"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={collapsed ? "" : "rotate-180"}>
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
      </div>

      {!collapsed && (
        <div className="overflow-y-auto p-3 space-y-3" style={{ maxHeight: "calc(100vh - 3.5rem)" }}>
          {/* 1. Estimated Results */}
          <RailSection title="Estimated Results" defaultOpen>
            <div className="space-y-2 text-sm">
              {estimates.map((e) => (
                <div key={e.label} className="flex justify-between">
                  <span className="text-neutral-500">{e.label}</span>
                  <span className="font-medium text-neutral-900">{e.value}</span>
                </div>
              ))}
            </div>
            <p className="mt-2 text-[11px] text-neutral-400">Estimates based on historical data and current targeting settings</p>
          </RailSection>

          {/* 2. Delivery Likelihood */}
          <RailSection title="Delivery Likelihood" defaultOpen>
            <div className="flex items-end gap-2">
              <span className="text-2xl font-bold text-neutral-900">{deliveryLikelihood}%</span>
              <span className="mb-1 text-xs text-neutral-500">likelihood</span>
            </div>
            <div className="mt-2 h-2 rounded-full bg-neutral-100">
              <div
                className={`h-2 rounded-full transition-all ${deliveryLikelihood >= 70 ? "bg-emerald-500" : deliveryLikelihood >= 40 ? "bg-amber-500" : "bg-red-500"}`}
                style={{ width: `${deliveryLikelihood}%` }}
              />
            </div>
            <p className="mt-2 text-xs text-neutral-500">
              {deliveryLikelihood >= 70
                ? "Good likelihood of full delivery with current budget and targeting."
                : deliveryLikelihood >= 40
                  ? "Moderate likelihood. Consider expanding audience or increasing budget."
                  : "Low likelihood. Narrow targeting or low budget may limit delivery."}
            </p>
          </RailSection>

          {/* 3. Policy Warnings */}
          <RailSection title="Policy Warnings" defaultOpen={policyIssues.length > 0}>
            {policyIssues.length === 0 ? (
              <div className="flex items-center gap-2 text-sm text-emerald-600">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                No policy issues
              </div>
            ) : (
              <div className="space-y-1.5">
                {policyIssues.map((issue, i) => (
                  <div key={i} className={`flex items-start gap-1.5 rounded p-2 text-xs ${
                    issue.severity === "error" ? "bg-red-50 text-red-700" : issue.severity === "warning" ? "bg-amber-50 text-amber-700" : "bg-blue-50 text-blue-700"
                  }`}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0">
                      {issue.severity === "error"
                        ? <><circle cx="12" cy="12" r="10" /><line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" /></>
                        : <><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></>}
                    </svg>
                    {issue.message}
                  </div>
                ))}
              </div>
            )}
          </RailSection>

          {/* 4. Recommendations */}
          <RailSection title="Recommendations" defaultOpen>
            <div className="space-y-2">
              {[
                { text: "Add negative keywords to reduce wasted spend on irrelevant searches", priority: "high" },
                { text: "Increase daily budget to $80 for estimated +22% conversions", priority: "medium" },
                { text: "Enable automatic placement optimization for broader reach", priority: "medium" },
                { text: "Test companion image variant with CTA overlay", priority: "low" },
              ].map((rec, i) => (
                <div key={i} className="flex items-start gap-2 rounded-lg border border-neutral-100 p-2.5 text-xs">
                  <span className={`mt-0.5 shrink-0 rounded-full px-1.5 py-0.5 text-[10px] font-semibold uppercase ${
                    rec.priority === "high" ? "bg-red-50 text-red-600" : rec.priority === "medium" ? "bg-amber-50 text-amber-600" : "bg-neutral-100 text-neutral-500"
                  }`}>
                    {rec.priority}
                  </span>
                  <span className="text-neutral-700">{rec.text}</span>
                </div>
              ))}
            </div>
          </RailSection>

          {/* 5. Activity / Change History */}
          <RailSection title="Activity / Change History" defaultOpen={false}>
            <div className="space-y-2.5">
              {[
                { user: "Alex R.", action: "Changed budget from $50 to $100/day", time: "2 min ago" },
                { user: "Alex R.", action: "Added audience: Music Lovers 18–34", time: "15 min ago" },
                { user: "System", action: "Companion image submitted for review", time: "1 hour ago" },
                { user: "Alex R.", action: "Created ad group: Retargeting", time: "3 hours ago" },
                { user: "System", action: "Campaign activated after review approval", time: "5 hours ago" },
              ].map((item, i) => (
                <div key={i} className="flex gap-2">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-[10px] font-semibold text-neutral-600">
                    {item.user[0]}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-neutral-700"><span className="font-medium">{item.user}</span> {item.action}</p>
                    <p className="text-[11px] text-neutral-400">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </RailSection>
        </div>
      )}
    </aside>
  );
}

/* ─── Collapsible rail section ─── */
function RailSection({ title, defaultOpen, children }: { title: string; defaultOpen: boolean; children: React.ReactNode }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="rounded-xl border border-neutral-100 bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-3 py-2.5 text-xs font-semibold text-neutral-700"
      >
        {title}
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`text-neutral-400 transition-transform ${open ? "rotate-180" : ""}`}>
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      {open && <div className="border-t border-neutral-50 px-3 py-3">{children}</div>}
    </div>
  );
}
