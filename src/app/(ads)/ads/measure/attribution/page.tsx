"use client";

import Link from "next/link";
import { PageHeader, Button, TabBar, FormField, StatusToggle } from "@/components/ads/ui";
import { useState } from "react";

export default function AttributionPage() {
  return (
    <div>
      <PageHeader title="Attribution" description="Conversion path analysis and attribution model comparison." />
      <div className="rounded-xl border border-neutral-100 bg-white p-6">
        <p className="text-sm text-neutral-500">Content for Attribution will appear here.</p>
      </div>
    </div>
  );
}
