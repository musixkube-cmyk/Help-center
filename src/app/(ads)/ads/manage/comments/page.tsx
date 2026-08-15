"use client";

import Link from "next/link";
import { PageHeader, Button, TabBar, FormField, StatusToggle } from "@/components/ads/ui";
import { useState } from "react";

export default function CommentsManagerPage() {
  return (
    <div>
      <PageHeader title="Comments Manager" description="Moderate ad comments, filter by sentiment, and respond." />
      <div className="rounded-xl border border-neutral-100 bg-white p-6">
        <p className="text-sm text-neutral-500">Content for Comments Manager will appear here.</p>
      </div>
    </div>
  );
}
