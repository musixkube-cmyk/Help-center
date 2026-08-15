import Link from "next/link";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <div className="px-6 pt-8 md:px-12">
        <Link
          href="/"
          className="font-display text-xs uppercase tracking-[0.3em] text-neutral-500 transition-colors hover:text-neutral-900"
        >
          &larr; Back
        </Link>
      </div>

      <div className="flex min-h-[80vh] flex-col items-center justify-center gap-6 px-6">
        <h1 className="font-display text-4xl font-bold tracking-tight text-neutral-900">My Dashboard</h1>
        <p className="max-w-md text-center text-neutral-500">
          Your dashboard is being built. Stream stats, catalog management, earnings
          and more — all landing here.
        </p>
        <Link
          href="/"
          className="mt-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
