"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { NavLink } from "@/components/site/nav-link";
import { Button } from "@/components/ui/button";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  // Video autoplays muted (browsers block autoplay-with-sound). Sound is only
  // enabled after a user gesture on the play/mute button below.
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(true);

  // Kick off muted autoplay on mount (best-effort; most browsers allow this).
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    const p = v.play();
    if (p && typeof p.then === "function") {
      p.then(() => setPlaying(true)).catch(() => setPlaying(false));
    }
  }, []);

  const togglePlay = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      const p = v.play();
      if (p && typeof p.then === "function") {
        p.then(() => setPlaying(true)).catch(() => setPlaying(false));
      } else {
        setPlaying(true);
      }
    } else {
      v.pause();
      setPlaying(false);
    }
  }, []);

  const toggleMute = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    const next = !v.muted;
    v.muted = next;
    setMuted(next);
    // Enabling sound is a user gesture — if the video is paused, resume it so
    // the user actually hears something.
    if (!next && v.paused) {
      const p = v.play();
      if (p && typeof p.then === "function") {
        p.then(() => setPlaying(true)).catch(() => setPlaying(false));
      } else {
        setPlaying(true);
      }
    }
  }, []);

  return (
    <section className="relative isolate overflow-hidden bg-ink text-ink-foreground">
      <video
        ref={videoRef}
        src="/hero-disco.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-label="Musicosy brand video"
        className="absolute inset-0 h-full w-full scale-105 object-cover opacity-80"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/25" />

      {/* Hero content */}
      <div className="relative flex h-[92vh] min-h-[620px] w-full flex-col justify-end px-6 pb-16 pt-28 lg:px-10">

        <p className="max-w-xl text-lg text-ink-foreground/75">
          One platform where fans listen and buy, creators ship and get paid, and every
          play settles back to the people who made it.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button
            size="lg"
            className="rounded-none bg-accent uppercase tracking-widest text-accent-foreground hover:bg-accent/90"
            asChild
          >
            <NavLink href="/discover">Start listening</NavLink>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-none border-ink-foreground/40 bg-transparent uppercase tracking-widest text-ink-foreground hover:bg-ink-foreground/10 hover:text-ink-foreground"
            asChild
          >
            <NavLink href="/for-creators">Upload your music</NavLink>
          </Button>
        </div>
      </div>

      {/* Video controls: play/pause + mute/unmute (sound enabled on click) */}
      <div className="absolute bottom-6 right-6 z-10 flex items-center gap-2 lg:bottom-8 lg:right-8">
        <button
          type="button"
          onClick={togglePlay}
          aria-label={playing ? "Pause video" : "Play video"}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-ink-foreground/30 bg-ink/60 text-ink-foreground backdrop-blur-sm transition-colors hover:bg-ink/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          {playing ? (
            <Pause className="h-5 w-5 fill-current" />
          ) : (
            <Play className="h-5 w-5 fill-current" />
          )}
        </button>
        <button
          type="button"
          onClick={toggleMute}
          aria-label={muted ? "Unmute video" : "Mute video"}
          aria-pressed={!muted}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-ink-foreground/30 bg-ink/60 text-ink-foreground backdrop-blur-sm transition-colors hover:bg-ink/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          {muted ? (
            <VolumeX className="h-5 w-5" />
          ) : (
            <Volume2 className="h-5 w-5" />
          )}
        </button>
      </div>
    </section>
  );
}
