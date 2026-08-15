"use client";

import Link from "next/link";
import { PageHeader, Button, TabBar, FormField, StatusToggle } from "@/components/ads/ui";
import { useState } from "react";

export default function PaymentPreferencesPage() {
  return (
    <div>
      <PageHeader title="Payment Preferences" description="Configure automatic or manual payment settings." />
      <div className="max-w-2xl space-y-5">
        <FormField label="Payment method">
          <select className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-700 focus:border-neutral-400 focus:outline-none">
            ['<option>Automatic payment</option>', '<option>Manual payment</option>']
          </select>
        </FormField>
        <FormField label="Threshold"
          description="Charge when spend reaches this threshold.">
          <select className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-700 focus:border-neutral-400 focus:outline-none">
            ['<option>$50</option>', '<option>$100</option>', '<option>$250</option>', '<option>$500</option>', '<option>$1,000</option>']
          </select>
        </FormField>
        <FormField label="Backup payment"
          description="Use backup card if primary fails.">
          <StatusToggle active={false} onToggle={() => {}} />
        </FormField>
        <div className="pt-4">
          <Button>Save</Button>
        </div>
      </div>
    </div>
  );
}
