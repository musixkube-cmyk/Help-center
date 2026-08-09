"use client";

import { Play, Heart, Repeat2 } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

export type CarouselItem = {
  title: string;
  subtitle: string;
  meta: string;
  hue: number;
};

export function SectionCarousel({
  title,
  items,
}: {
  title: string;
  items: CarouselItem[];
}) {
  return (
    <section className="w-full px-6 lg:px-10 py-10">
      <h2 className="text-4xl sm:text-5xl">{title}</h2>
      <div className="relative mt-6">
        <Carousel
          opts={{ align: "start", dragFree: true, containScroll: "trimSnaps" }}
          className="w-full"
        >
          <CarouselContent className="-ml-3">
            {items.map((item) => (
              <CarouselItem
                key={item.title}
                className="basis-[160px] pl-3 sm:basis-[190px] lg:basis-[210px]"
              >
                <div className="group relative bg-card p-3 transition-colors hover:bg-secondary">
                  <div
                    className="relative aspect-square w-full overflow-hidden"
                    style={{
                      backgroundImage: `linear-gradient(145deg, oklch(0.35 0.09 ${item.hue}), oklch(0.72 0.18 ${item.hue + 12}))`,
                    }}
                  >
                    <div className="disco-sheen absolute inset-0" />
                    <button
                      aria-label={`Play ${item.title}`}
                      className="absolute bottom-3 right-3 flex h-11 w-11 translate-y-2 items-center justify-center rounded-full bg-ink text-ink-foreground opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                    >
                      <Play className="h-4 w-4 fill-current" />
                    </button>
                  </div>
                  <p className="mt-3 truncate font-semibold">{item.title}</p>
                  <p className="truncate text-sm text-muted-foreground">
                    {item.subtitle}
                  </p>
                  <div className="mt-2 flex items-center justify-between text-xs uppercase tracking-widest text-muted-foreground">
                    <span className="truncate">{item.meta}</span>
                    <span className="flex shrink-0 gap-2 opacity-0 transition-opacity group-hover:opacity-100">
                      <Heart className="h-3.5 w-3.5" />
                      <Repeat2 className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-2 size-9 border-border bg-card/90 backdrop-blur-sm hover:bg-card lg:-left-3" />
          <CarouselNext className="-right-2 size-9 border-border bg-card/90 backdrop-blur-sm hover:bg-card lg:-right-3" />
        </Carousel>
      </div>
    </section>
  );
}
