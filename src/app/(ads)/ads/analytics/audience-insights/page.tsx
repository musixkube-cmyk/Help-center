"use client";

export default function AudienceInsightsPage() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight text-neutral-900">Audience Insights</h1>
        <p className="mt-1 text-sm text-neutral-500">Learn who responds to your campaigns — age, gender, genre, artist affinity, location, language.</p>
      </div>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
        {[
          { label: "Top Age", value: "25–34", pct: "38%" },
          { label: "Top Gender", value: "Female", pct: "56%" },
          { label: "Top Genre", value: "Pop", pct: "24%" },
          { label: "Top Artist", value: "Drake", pct: "12%" },
          { label: "Top Location", value: "California", pct: "18%" },
          { label: "Top Language", value: "English", pct: "89%" },
        ].map((s) => (
          <div key={s.label} className="rounded-xl border border-neutral-100 bg-white p-5">
            <p className="text-xs font-medium uppercase tracking-wider text-neutral-400">{s.label}</p>
            <p className="mt-2 text-xl font-bold text-neutral-900">{s.value}</p>
            <p className="mt-1 text-xs text-neutral-500">{s.pct} of audience</p>
          </div>
        ))}
      </div>
    </div>
  );
}
