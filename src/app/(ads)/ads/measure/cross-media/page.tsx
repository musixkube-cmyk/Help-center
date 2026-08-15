"use client";

import Link from "next/link";
import { PageHeader, Button, TabBar, FormField, StatusToggle } from "@/components/ads/ui";
import { useState } from "react";

export default function CrossMediaMeasurementPage() {
  return (
    <div>
      <PageHeader title="Cross-Media Measurement" description="Cross-channel measurement views for holistic performance analysis." />
      <div className="rounded-xl border border-neutral-100 bg-white p-6">
        <p className="text-sm text-neutral-500">Content for Cross-Media Measurement will appear here.</p>
      </div>
    </div>
  );
}
