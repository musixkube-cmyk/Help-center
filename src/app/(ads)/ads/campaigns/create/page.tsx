"use client";

import Link from "next/link";
import { useState } from "react";
import { PageHeader, Button, FormField, EstimatePanel, PolicyPanel, StatusToggle } from "@/components/ads/ui";

const steps = ["Creation Method", "Objective", "Campaign Setup", "Plan & Commitment", "Ad Group Setup", "Ad Creation", "Review & Launch"];

const objectives = [
  { category: "Awareness", items: ["Reach"] },
  { category: "Consideration", items: ["Traffic", "Video Views", "Community Interaction", "Brand Consideration", "Music Streams"] },
  { category: "Conversion", items: ["App Promotion", "Lead Generation", "Sales"] },
];

const methods = [
  { id: "blank", label: "Blank build", desc: "Start from scratch with full control over every setting." },
  { id: "plan", label: "Plan-led build", desc: "Choose a plan first; recommended settings are pre-filled." },
  { id: "duplicate", label: "Duplicate existing campaign", desc: "Copy an existing campaign and modify as needed." },
  { id: "template", label: "Use template", desc: "Start with a proven template for your objective." },
];

export default function CreateCampaignPage() {
  const [step, setStep] = useState(0);
  const [method, setMethod] = useState("");
  const [objective, setObjective] = useState("");
  const [subObjective, setSubObjective] = useState("");

  return (
    <div>
      <PageHeader title="Create Campaign" description={`Step ${step + 1} of 7 — ${steps[step]}`} />

      {/* Step indicator */}
      <div className="mb-8 flex items-center gap-1">
        {steps.map((s, i) => (
          <div key={s} className="flex items-center gap-1">
            <div className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold ${i < step ? "bg-neutral-900 text-white" : i === step ? "border-2 border-neutral-900 text-neutral-900" : "border border-neutral-200 text-neutral-400"}`}>
              {i < step ? "✓" : i + 1}
            </div>
            {i < steps.length - 1 && <div className={`h-px w-6 ${i < step ? "bg-neutral-900" : "bg-neutral-200"}`} />}
          </div>
        ))}
      </div>

      <div className="flex gap-6">
        <div className="flex-1">
          {/* Step 0: Creation Method */},
          {step === 0 && (
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-neutral-900">How do you want to create your campaign?</h2>
              <div className="grid grid-cols-2 gap-4">
                {methods.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setMethod(m.id)}
                    className={`rounded-xl border p-5 text-left transition-colors ${method === m.id ? "border-neutral-900 bg-neutral-50" : "border-neutral-200 hover:border-neutral-300"}`}
                  >
                    <h3 className="text-sm font-semibold text-neutral-900">{m.label}</h3>
                    <p className="mt-1 text-xs text-neutral-500">{m.desc}</p>
                  </button>
                ))}
              </div>
            </div>
          )},

          {/* Step 1: Objective */},
          {step === 1 && (
            <div className="space-y-6">
              {objectives.map((cat) => (
                <div key={cat.category}>
                  <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-neutral-400">{cat.category}</h3>
                  <div className="grid grid-cols-3 gap-3">
                    {cat.items.map((item) => (
                      <button
                        key={item}
                        onClick={() => { setObjective(cat.category); setSubObjective(item); }}
                        className={`rounded-lg border px-4 py-3 text-sm font-medium transition-colors ${subObjective === item ? "border-neutral-900 bg-neutral-50 text-neutral-900" : "border-neutral-200 text-neutral-600 hover:border-neutral-300"}`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )},

          {/* Step 2: Campaign Setup */},
          {step === 2 && (
            <div className="max-w-xl space-y-5">
              <FormField label="Campaign name">
                <input type="text" placeholder="e.g. Summer Launch 2026" className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-700 focus:border-neutral-400 focus:outline-none" />
              </FormField>
              <FormField label="Special ad category" description="Required for ads about credit, employment, housing, or social issues.">
                <select className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-700 focus:border-neutral-400 focus:outline-none">
                  <option>None</option>
                  <option>Credit</option>
                  <option>Employment</option>
                  <option>Housing</option>
                  <option>Social Issues</option>
                </select>
              </FormField>
              <FormField label="Split test" description="Run an A/B test on this campaign.">
                <StatusToggle active={false} onToggle={() => {}} />
              </FormField>
            </div>
          )},

          {/* Step 3: Plan & Commitment */},
          {step === 3 && (
            <div className="max-w-xl space-y-5">
              <h2 className="text-lg font-semibold text-neutral-900">Select your plan</h2>
              <div className="grid grid-cols-2 gap-4">
                {["Social Scroll — Medium", "Music Stream — Medium", "Social Scroll — Large", "Music Stream — Large"].map((plan) => (
                  <div key={plan} className="rounded-xl border border-neutral-200 p-5">
                    <h3 className="text-sm font-semibold text-neutral-900">{plan}</h3>
                    <p className="mt-1 text-xs text-neutral-500">Flat-rate plan with optimized delivery</p>
                  </div>
                ))}
              </div>
              <FormField label="Budget optimization" description="Campaign Budget Optimization (CBO) distributes budget across ad groups automatically.">
                <select className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-700 focus:border-neutral-400 focus:outline-none">
                  <option>Campaign Budget Optimization (CBO)</option>
                  <option>Ad Group Budget</option>
                </select>
              </FormField>
              <FormField label="Commitment">
                <select className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-700 focus:border-neutral-400 focus:outline-none">
                  <option>Daily</option>
                  <option>Weekly</option>
                  <option>Monthly</option>
                </select>
              </FormField>
              <FormField label="Budget amount">
                <input type="number" placeholder="0.00" className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-700 focus:border-neutral-400 focus:outline-none" />
              </FormField>
              <FormField label="Delivery type">
                <select className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-700 focus:border-neutral-400 focus:outline-none">
                  <option>Standard</option>
                  <option>Accelerated</option>
                  <option>Scheduled</option>
                </select>
              </FormField>
            </div>
          )},

          {/* Step 4: Ad Group Setup */},
          {step === 4 && (
            <div className="space-y-6">
              <FormField label="Ad group name">
                <input type="text" placeholder="e.g. AG — Summer Launch" className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-700 focus:border-neutral-400 focus:outline-none" />
              </FormField>
              <div className="rounded-xl border border-neutral-100 bg-white p-5 space-y-5">
                <h3 className="text-sm font-semibold text-neutral-900">Audience</h3>
                <FormField label="Locations">
                  <input type="text" placeholder="United States, Canada…" className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-700 focus:border-neutral-400 focus:outline-none" />
                </FormField>
                <FormField label="Age range">
                  <select className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-700 focus:border-neutral-400 focus:outline-none">
                    <option>18–55</option><option>18–24</option><option>25–34</option><option>35–44</option><option>45–55</option><option>55+</option>
                  </select>
                </FormField>
                <FormField label="Gender">
                  <select className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-700 focus:border-neutral-400 focus:outline-none">
                    <option>All</option><option>Male</option><option>Female</option><option>Non-binary</option>
                  </select>
                </FormField>
                <FormField label="Language">
                  <input type="text" placeholder="English" className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-700 focus:border-neutral-400 focus:outline-none" />
                </FormField>
              </div>
              <div className="rounded-xl border border-neutral-100 bg-white p-5 space-y-5">
                <h3 className="text-sm font-semibold text-neutral-900">Placements</h3>
                <div className="grid grid-cols-2 gap-2">
                  {["Automatic (recommended)", "In-Feed Audio", "In-Feed Video", "Top Feed", "Search Ads", "Catalog Ads"].map((p) => (
                    <label key={p} className="flex items-center gap-2 text-sm text-neutral-700">
                      <input type="checkbox" className="h-4 w-4 rounded border-neutral-300" defaultChecked={p === "Automatic (recommended)"} />
                      {p}
                    </label>
                  ))}
                </div>
              </div>
              <div className="rounded-xl border border-neutral-100 bg-white p-5 space-y-5">
                <h3 className="text-sm font-semibold text-neutral-900">Delivery & Safety</h3>
                <FormField label="Frequency cap">
                  <input type="text" placeholder="e.g. 3 impressions per day" className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-700 focus:border-neutral-400 focus:outline-none" />
                </FormField>
                <FormField label="Brand suitability">
                  <select className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-700 focus:border-neutral-400 focus:outline-none">
                    <option>Standard</option><option>Limited</option><option>Maximal</option>
                  </select>
                </FormField>
              </div>
            </div>
          )},

          {/* Step 5: Ad Creation */},
          {step === 5 && (
            <div className="flex gap-6">
              <div className="w-64 rounded-xl border border-neutral-100 bg-white p-4">
                <h3 className="text-sm font-semibold text-neutral-900 mb-3">Asset selector</h3>
                <div className="space-y-2 text-xs text-neutral-500">
                  <div className="rounded-lg border border-neutral-200 p-2">Audio files</div>
                  <div className="rounded-lg border border-neutral-200 p-2">Companion images</div>
                  <div className="rounded-lg border border-neutral-200 p-2">Logo</div>
                  <div className="rounded-lg border border-neutral-200 p-2">From Creative Library</div>
                </div>
              </div>
              <div className="flex-1 space-y-5">
                <FormField label="Ad name">
                  <input type="text" placeholder="e.g. Summer Audio Ad 1" className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-700 focus:border-neutral-400 focus:outline-none" />
                </FormField>
                <FormField label="Audio upload">
                  <div className="rounded-lg border-2 border-dashed border-neutral-200 p-8 text-center text-sm text-neutral-400">
                    Drag and drop audio file, or click to browse
                  </div>
                </FormField>
                <FormField label="Companion image">
                  <div className="rounded-lg border-2 border-dashed border-neutral-200 p-8 text-center text-sm text-neutral-400">
                    Drag and drop image, or click to browse
                  </div>
                </FormField>
                <FormField label="CTA">
                  <select className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-700 focus:border-neutral-400 focus:outline-none">
                    <option>Learn More</option><option>Shop Now</option><option>Sign Up</option><option>Listen Now</option><option>Download</option>
                  </select>
                </FormField>
                <FormField label="Destination URL">
                  <input type="url" placeholder="https://" className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-700 focus:border-neutral-400 focus:outline-none" />
                </FormField>
              </div>
              <div className="w-72 rounded-xl border border-neutral-100 bg-white p-4">
                <h3 className="text-sm font-semibold text-neutral-900 mb-3">Live preview</h3>
                <div className="flex h-64 items-center justify-center rounded-lg bg-neutral-50 text-xs text-neutral-400">Ad preview</div>
              </div>
            </div>
          )},

          {/* Step 6: Review & Launch */},
          {step === 6 && (
            <div className="flex gap-6">
              <div className="flex-1 space-y-4">
                <h2 className="text-lg font-semibold text-neutral-900">Review your campaign</h2>
                <div className="rounded-xl border border-neutral-100 bg-white p-5 space-y-3 text-sm">
                  <div className="flex justify-between"><span className="text-neutral-500">Objective</span><span className="font-medium text-neutral-900">{subObjective || "—"}</span></div>
                  <div className="flex justify-between"><span className="text-neutral-500">Campaign name</span><span className="font-medium text-neutral-900">—</span></div>
                  <div className="flex justify-between"><span className="text-neutral-500">Plan</span><span className="font-medium text-neutral-900">—</span></div>
                  <div className="flex justify-between"><span className="text-neutral-500">Budget</span><span className="font-medium text-neutral-900">—</span></div>
                  <div className="flex justify-between"><span className="text-neutral-500">Delivery type</span><span className="font-medium text-neutral-900">Standard</span></div>
                </div>
              </div>
              <div className="w-72 space-y-4">
                <EstimatePanel estimates={[
                  { label: "Estimated reach", value: "~45K" },
                  { label: "Estimated clicks", value: "~560" },
                  { label: "Estimated CPM", value: "$8.20" },
                ]} deliveryLikelihood={78} />
                <PolicyPanel issues={[]} />
              </div>
            </div>
          )}
        </div>

        {/* Context panel (steps 3+) */},
        {step >= 3 && step < 6 && (
          <div className="w-72 shrink-0 space-y-4">
            <EstimatePanel estimates={[
              { label: "Estimated reach", value: "~45K" },
              { label: "Estimated clicks", value: "~560" },
              { label: "Estimated CPM", value: "$8.20" },
            ]} deliveryLikelihood={78} />
          </div>
        )}
      </div>

      {/* Footer actions */}
      <div className="mt-8 flex items-center justify-between border-t border-neutral-200 pt-4">
        <button onClick={() => step > 0 && setStep(step - 1)} disabled={step === 0} className="text-sm font-medium text-neutral-500 disabled:opacity-30">
          Back
        </button>
        <div className="flex gap-3">
          <Button variant="secondary">Save Draft</Button>
          {step < 6 ? (
            <Button onClick={() => setStep(step + 1)}>Continue</Button>
          ) : (
            <Button>Publish Campaign</Button>
          )}
        </div>
      </div>
    </div>
  );
}
