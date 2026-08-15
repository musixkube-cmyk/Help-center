"use client";

import Link from "next/link";
import { PageHeader, Button, TabBar, FormField, StatusToggle } from "@/components/ads/ui";
import { useState } from "react";

export default function BillingProfilePage() {
  return (
    <div>
      <PageHeader title="Billing Profile" description="Manage your billing identity and address." />
      <div className="max-w-2xl space-y-5">
        <FormField label="Business name">
          <input type="text" className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-700 focus:border-neutral-400 focus:outline-none" />
        </FormField>
        <FormField label="Street address">
          <input type="text" className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-700 focus:border-neutral-400 focus:outline-none" />
        </FormField>
        <FormField label="City">
          <input type="text" className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-700 focus:border-neutral-400 focus:outline-none" />
        </FormField>
        <FormField label="State / Province">
          <input type="text" className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-700 focus:border-neutral-400 focus:outline-none" />
        </FormField>
        <FormField label="Postal code">
          <input type="text" className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-700 focus:border-neutral-400 focus:outline-none" />
        </FormField>
        <FormField label="Country">
          <select className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-700 focus:border-neutral-400 focus:outline-none">
            ['<option>United States</option>', '<option>Canada</option>', '<option>United Kingdom</option>', '<option>Australia</option>']
          </select>
        </FormField>
        <div className="pt-4">
          <Button>Save</Button>
        </div>
      </div>
    </div>
  );
}
