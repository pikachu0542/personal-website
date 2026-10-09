"use client";

import Image from "next/image";
import { KeyboardEvent, useRef, useState } from "react";
import { ImageAsset } from "@/types";

const arrowButton =
  "absolute top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-card/90 text-foreground backdrop-blur-sm transition-colors hover:border-accent";

/** Image carousel with arrows, dots, keyboard arrows, and touch swipe. */
export function ImageCarousel({ images }: { images: ImageAsset[] }) {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const count = images.length;

  if (count === 0) return null;

  // Wraps around: after the last image comes the first.
  const goTo = (i: number) => setIndex((i + count) % count);

  function onKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    if (e.key === "ArrowLeft") goTo(index - 1);
    if (e.key === "ArrowRight") goTo(index + 1);
  }

  function onTouchEnd(endX: number) {
    if (touchStartX.current === null) return;
    const delta = endX - touchStartX.current;
    if (Math.abs(delta) > 50) goTo(delta < 0 ? index + 1 : index - 1);
    touchStartX.current = null;
  }

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-4">
      <div
        role="region"
        aria-roledescription="carousel"
        aria-label="Project images"
        tabIndex={0}
        onKeyDown={onKeyDown}
        onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => onTouchEnd(e.changedTouches[0].clientX)}
        className="relative aspect-[16/9] w-full overflow-hidden rounded-[28px] border border-line bg-chip outline-none focus-visible:border-accent"
      >
        {/* Track: slides sit side by side, and we slide the whole row */}
        <div
          className="flex h-full transition-transform duration-500 ease-out motion-reduce:transition-none"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((img, i) => (
            <div
              key={img.src}
              className="relative h-full w-full shrink-0"
              aria-hidden={i !== index}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                priority={i === 0}
                sizes="(min-width: 1200px) 1120px, 100vw"
                className="object-contain"
              />
            </div>
          ))}
        </div>

        {count > 1 && (
          <>
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              aria-label="Previous image"
              className={`${arrowButton} left-4`}
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              aria-label="Next image"
              className={`${arrowButton} right-4`}
            >
              →
            </button>
          </>
        )}
      </div>

      {count > 1 && (
        <div className="flex items-center justify-between gap-4">
          <div className="font-mono text-[13px] text-muted" aria-live="polite">
            {index + 1} / {count}
          </div>
          <div className="flex items-center gap-2">
            {images.map((img, i) => (
              <button
                key={img.src}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to image ${i + 1}`}
                aria-current={i === index}
                className={`h-2.5 rounded-full transition-all ${
                  i === index ? "w-6 bg-accent" : "w-2.5 bg-muted/40 hover:bg-muted"
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}