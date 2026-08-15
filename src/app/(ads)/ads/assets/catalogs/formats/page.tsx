"use client";

import Link from "next/link";
import { useState } from "react";
import { PageHeader, MetricCard, StatusBadge, DataTable, FilterBar, BulkActionToolbar, EmptyState, Button, TabBar, FormField, EstimatePanel, PolicyPanel, ActivityTimeline, CardGrid, StatusToggle } from "@/components/ads/ui";

export default function CatalogFormatsPage() {
  return (
    <div>
      <PageHeader title="Catalog Formats" description="Browse shoppable format options for your catalogs." />
      <CardGrid cards={[
        { label: "Swipeable Carousel", href: "/ads/assets/catalogs/formats", description: "Users swipe through product cards." },
        { label: "Product Showcase", href: "/ads/assets/catalogs/formats", description: "Featured product with details." },
        { label: "Shoppable Format", href: "/ads/assets/catalogs/formats", description: "Direct purchase from ad unit." }
      ]} />
    </div>
  );
}
