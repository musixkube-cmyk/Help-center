"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdvertisePage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

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

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-16 px-6 py-14 md:px-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-24 lg:py-24">
        {/* Left: marketing copy */}
        <div className="flex flex-col justify-center">
          <p className="font-display text-sm uppercase tracking-[0.3em] text-orange-600">
            Self-Service Ad Portal
          </p>
          <h1 className="mt-4 font-display text-5xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-6xl">
            Advertise with Us
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-neutral-500">
            Reach the audience that fits your sound. Partner with artists who share
            your vision. Create campaigns, target listeners by genre, region, and
            listening behavior — then track every impression in real time.
          </p>
          <ul className="mt-8 space-y-3 text-base text-neutral-900">
            <li className="flex items-start gap-3">
              <span className="mt-1 text-orange-600">&#10003;</span>
              Self-serve campaign builder with audience targeting
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-orange-600">&#10003;</span>
              Audio, display, and video ad formats
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-orange-600">&#10003;</span>
              Real-time analytics and ROI dashboards
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-orange-600">&#10003;</span>
              No minimum spend — start with any budget
            </li>
          </ul>
        </div>

        {/* Right: auth gate */}
        <div className="w-full max-w-md justify-self-center lg:justify-self-end">
          <h2 className="font-display text-xl font-semibold tracking-tight text-neutral-900">
            Sign in to your ad account
          </h2>
          <p className="mt-2 text-sm text-neutral-500">
            New advertiser? Create your account below.
          </p>

          <button
            type="button"
            className="mt-6 flex h-14 w-full items-center justify-center gap-3 rounded-full border border-neutral-200 bg-white font-medium text-neutral-900 transition-colors hover:bg-neutral-50"
          >
            <GoogleIcon /> Continue with Google
          </button>

          <button
            type="button"
            className="mt-3 flex h-14 w-full items-center justify-center gap-3 rounded-full border border-neutral-200 bg-white font-medium text-neutral-900 transition-colors hover:bg-neutral-50"
          >
            <AppleIcon /> Continue with Apple
          </button>

          <div className="my-6 flex items-center gap-4">
            <span className="h-px flex-1 bg-neutral-200" />
            <span className="text-sm text-neutral-500">or</span>
            <span className="h-px flex-1 bg-neutral-200" />
          </div>

          {/* Email input */}
          <div>
            <label htmlFor="ad-email" className="sr-only">
              Work email
            </label>
            <input
              id="ad-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Work email"
              className="h-14 w-full rounded-xl border border-neutral-200 bg-white px-4 text-base text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-400 focus:outline-none"
            />
            <button
              type="button"
              disabled={!email.trim()}
              onClick={() => {
                if (email.trim()) setShowPassword(true);
              }}
              className="mt-4 h-14 w-full rounded-full bg-neutral-900 font-medium text-white transition-opacity hover:opacity-90 disabled:bg-neutral-200 disabled:text-neutral-400"
            >
              Continue
            </button>
          </div>

          {/* Password — slow reveal */}
          <div
            className={`grid transition-all duration-500 ease-in-out ${
              showPassword ? "mt-4 max-h-40 opacity-100" : "mt-0 max-h-0 opacity-0"
            }`}
            style={{ overflow: showPassword ? "visible" : "hidden" }}
          >
            <label htmlFor="ad-password" className="sr-only">
              Password
            </label>
            <input
              id="ad-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="h-14 w-full rounded-xl border border-neutral-200 bg-white px-4 text-base text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-400 focus:outline-none"
            />
            <button
              type="button"
              disabled={!password.trim()}
              onClick={() => router.push("/ads")}
              className={`mt-3 flex h-14 items-center justify-center rounded-full bg-neutral-900 font-medium text-white transition-opacity hover:opacity-90 ${
                !password.trim() ? "pointer-events-none opacity-40" : ""
              }`}
            >
              Sign in
            </button>
          </div>

          <p className="mt-5 text-center text-xs leading-relaxed text-neutral-500">
            By continuing, you agree to our{" "}
            <span className="font-semibold text-neutral-900">Terms of Service</span>,{" "}
            <span className="font-semibold text-neutral-900">Privacy Policy</span> and{" "}
            <span className="font-semibold text-neutral-900">Cookie Use</span>.
          </p>
        </div>
      </div>
    </main>
  );
}

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5a5.6 5.6 0 0 1-2.4 3.7v3h3.9c2.3-2.1 3.5-5.2 3.5-8.9z" />
      <path fill="#34A853" d="M12 24c3.2 0 5.9-1.1 7.9-2.9l-3.9-3c-1.1.7-2.4 1.2-4 1.2-3.1 0-5.7-2.1-6.6-4.9H1.4v3.1A12 12 0 0 0 12 24z" />
      <path fill="#FBBC05" d="M5.4 14.4a7.2 7.2 0 0 1 0-4.6V6.7H1.4a12 12 0 0 0 0 10.7l4-3z" />
      <path fill="#EA4335" d="M12 4.8c1.8 0 3.3.6 4.6 1.8l3.4-3.4A12 12 0 0 0 1.4 6.7l4 3.1C6.3 6.9 8.9 4.8 12 4.8z" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.4 12.7c0-2.6 2.1-3.9 2.2-3.9-1.2-1.8-3.1-2-3.7-2-1.6-.2-3.1.9-3.9.9-.8 0-2-.9-3.3-.9-1.7 0-3.3 1-4.1 2.5-1.8 3.1-.5 7.6 1.3 10.1.9 1.2 1.9 2.6 3.2 2.6 1.3-.1 1.8-.8 3.3-.8s2 .8 3.3.8c1.4 0 2.3-1.2 3.1-2.5.6-.9 1-1.8 1.3-2.8-3.3-1.3-2.7-4-2.7-4zM14 4.9c.7-.9 1.2-2.1 1.1-3.3-1 0-2.3.7-3.1 1.6-.7.8-1.3 2-1.1 3.2 1.2.1 2.4-.6 3.1-1.5z" />
    </svg>
  );
}
