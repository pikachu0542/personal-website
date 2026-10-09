import Image from "next/image";
import { Hobby } from "@/types";

/** Photo tile: cover image fills the card, text sits on a dark gradient. */
export function HobbyCard({ hobby }: { hobby: Hobby }) {
  const { coverImage } = hobby;

  return (
    <article className="group relative aspect-[4/5] overflow-hidden rounded-[28px] border border-line bg-chip">
      <Image
        src={coverImage.src}
        alt={coverImage.alt}
        fill
        sizes="(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw"
        className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
      />

      {/* Dark fade so the white text stays readable on any photo */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"
        aria-hidden="true"
      />

      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-7 text-white">
        <h3 className="text-[28px] font-extrabold leading-tight tracking-[-0.02em]">
          {hobby.title}
        </h3>
        <p className="text-[15px] leading-relaxed text-white/85">{hobby.summary}</p>
        {hobby.tags && hobby.tags.length > 0 && (
          <ul className="flex flex-wrap gap-2">
            {hobby.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full bg-white/20 px-3 py-1 font-mono text-xs backdrop-blur-sm"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}