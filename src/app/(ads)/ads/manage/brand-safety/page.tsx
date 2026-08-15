"use client";

import Link from "next/link";
import { PageHeader, Button, TabBar, FormField, StatusToggle } from "@/components/ads/ui";
import { useState } from "react";

export default function BrandSafetyPage() {
  return (
    <div>
      <PageHeader title="Brand Safety" description="Configure safety controls, suitability policies, and exclusions." />
      <div className="max-w-2xl space-y-5">
        <FormField label="Brand suitability level"
          description="Controls the sensitivity of content placement.">
          <select className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-700 focus:border-neutral-400 focus:outline-none">
            ['<option>Standard</option>', '<option>Limited</option>', '<option>Maximal</option>']
          </select>
        </FormField>
        <FormField label="Block list"
          description="Content categories or publishers to exclude.">
          <textarea className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-700 focus:border-neutral-400 focus:outline-none" rows={3} />
        </FormField>
        <FormField label="Content sensitivity"
          description="Enable strict content sensitivity filtering.">
          <StatusToggle active={false} onToggle={() => {}} />
        </FormField>
        <FormField label="Alcohol content">
          <StatusToggle active={false} onToggle={() => {}} />
        </FormField>
        <FormField label="Political content">
          <StatusToggle active={false} onToggle={() => {}} />
        </FormField>
        <FormField label="Tragedy content">
          <StatusToggle active={false} onToggle={() => {}} />
        </FormField>
        <div className="pt-4">
          <Button>Save</Button>
        </div>
      </div>
    </div>
  );
}
