"use client";

import Link from "next/link";
import { useState } from "react";
import { PageHeader, MetricCard, StatusBadge, DataTable, FilterBar, BulkActionToolbar, EmptyState, Button, TabBar, FormField, EstimatePanel, PolicyPanel, ActivityTimeline, CardGrid, StatusToggle } from "@/components/ads/ui";

export default function IntegrationsPage() {
  return (
    <div>
      <PageHeader title="Integrations" description="Connect and manage external integrations and partner sync." />
      <CardGrid cards={[
        { label: "Partner Sync", href: "/ads/manage/integrations", description: "Sync data with platform partners." },
        { label: "Publish Content", href: "/ads/manage/integrations", description: "Push content to external platforms." },
        { label: "CRM Connectors", href: "/ads/manage/integrations", description: "HubSpot, Salesforce, Zapier." },
        { label: "Analytics Partners", href: "/ads/manage/integrations", description: "Google Analytics, Mixpanel, Amplitude." },
        { label: "Shopify", href: "/ads/manage/integrations", description: "Product catalog and order sync." },
        { label: "Custom Webhooks", href: "/ads/manage/integrations", description: "Configure webhook endpoints." }
      ]} />
    </div>
  );
}
