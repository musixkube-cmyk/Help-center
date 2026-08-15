"use client";

import Link from "next/link";
import { useState } from "react";
import { PageHeader, MetricCard, StatusBadge, DataTable, FilterBar, BulkActionToolbar, EmptyState, Button, TabBar, FormField, EstimatePanel, PolicyPanel, ActivityTimeline, CardGrid, StatusToggle } from "@/components/ads/ui";

export default function AISkillsAndMCPPage() {
  return (
    <div>
      <PageHeader title="AI Skills & MCP" description="Browse, install, and manage AI skills and MCP server integrations." />
      <CardGrid cards={[
        { label: "Browse Skills", href: "/ads/manage/ai-skills", description: "Discover available AI skills." },
        { label: "Installed Skills", href: "/ads/manage/ai-skills", description: "Manage your active AI skills." },
        { label: "MCP Servers", href: "/ads/manage/ai-skills", description: "Install and configure MCP servers." },
        { label: "Task Automation", href: "/ads/manage/ai-skills", description: "Set up automated AI tasks." }
      ]} />
    </div>
  );
}
