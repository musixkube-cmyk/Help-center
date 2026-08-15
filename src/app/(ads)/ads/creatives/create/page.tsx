"use client";

import { useState } from "react";
import { PageHeader, FormField, Button } from "@/components/ads/ui";

export default function CreateCreativePage() {
  const [adType, setAdType] = useState("audio");
  const [name, setName] = useState("");
  const [cta, setCta] = useState("Learn More");
  const [destination, setDestination] = useState("");

  return (
    <div className="mx-auto max-w-4xl p-6">
      <PageHeader
        title="Create Ad"
        description="Build a new ad creative for your campaigns."
        breadcrumbs={[{ label: "Creatives", href: "/ads/creatives" }, { label: "Create" }]}
      />

      <div className="space-y-6">
        <div className="rounded-xl border border-neutral-100 bg-white p-6">
          <h2 className="text-lg font-semibold text-neutral-900 mb-4">Ad Type</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              { id: "audio", label: "Audio Ad", desc: "30-sec audio clip between songs" },
              { id: "video", label: "Video Ad", desc: "In-feed video with companion" },
              { id: "display", label: "Display Ad", desc: "Image-based companion ad" },
            ].map((t) => (
              <button key={t.id} onClick={() => setAdType(t.id)} className={`rounded-xl border-2 p-5 text-left ${adType === t.id ? "border-neutral-900 bg-neutral-50" : "border-neutral-100"}`}>
                <h3 className="text-sm font-semibold text-neutral-900">{t.label}</h3>
                <p className="mt-1 text-xs text-neutral-500">{t.desc}</p>
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-neutral-100 bg-white p-6 space-y-5">
          <FormField label="Ad Name">
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g., Summer Promo Audio Ad" className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-400 focus:outline-none" />
          </FormField>

          {adType === "audio" && (
            <div className="space-y-4">
              <FormField label="Audio File" description="MP3 or WAV, max 30 seconds">
                <div className="flex items-center gap-3">
                  <div className="flex-1 rounded-lg border border-dashed border-neutral-300 p-6 text-center text-sm text-neutral-400">
                    Drag & drop audio file or click to browse
                  </div>
                </div>
              </FormField>
              <FormField label="Companion Image (optional)">
                <div className="rounded-lg border border-dashed border-neutral-300 p-6 text-center text-sm text-neutral-400">
                  1200×628px recommended, JPG or PNG
                </div>
              </FormField>
            </div>
          )}

          {adType === "video" && (
            <div className="space-y-4">
              <FormField label="Video File" description="MP4, 16:9 or 1:1, max 30 seconds">
                <div className="rounded-lg border border-dashed border-neutral-300 p-8 text-center text-sm text-neutral-400">
                  Drag & drop video file or click to browse
                </div>
              </FormField>
            </div>
          )}

          {adType === "display" && (
            <FormField label="Image" description="1200×628px, JPG or PNG, max 5MB">
              <div className="rounded-lg border border-dashed border-neutral-300 p-8 text-center text-sm text-neutral-400">
                Drag & drop image or click to browse
              </div>
            </FormField>
          )}

          <FormField label="Call-to-Action">
            <select value={cta} onChange={(e) => setCta(e.target.value)} className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-700 focus:border-neutral-400 focus:outline-none">
              {["Learn More", "Shop Now", "Listen Now", "Download", "Sign Up", "Watch More", "Get Offer"].map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </FormField>

          <FormField label="Destination URL">
            <input value={destination} onChange={(e) => setDestination(e.target.value)} placeholder="https://example.com" className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-400 focus:outline-none" />
          </FormField>
        </div>

        <div className="rounded-xl border border-neutral-100 bg-neutral-50 p-6 text-center">
          <p className="text-sm text-neutral-500 mb-3">Ad Preview</p>
          <div className="mx-auto max-w-sm rounded-lg border border-neutral-200 bg-white p-4">
            <div className="h-20 rounded bg-neutral-100 flex items-center justify-center text-xs text-neutral-400">
              {adType === "audio" ? "🎵 Audio" : adType === "video" ? "🎬 Video" : "🖼 Display"}
            </div>
            <p className="mt-2 text-sm font-medium text-neutral-900">{name || "Your Ad"}</p>
            <p className="text-xs text-neutral-500">{cta} → {destination || "example.com"}</p>
          </div>
        </div>

        <div className="flex gap-3">
          <Button variant="secondary">Save as Draft</Button>
          <Button>Create Ad</Button>
        </div>
      </div>
    </div>
  );
}
