import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section className="grid grid-cols-1 gap-6 md:grid-cols-12">
      {/* Intro tile */}
      <div className="flex min-h-[330px] flex-col justify-between gap-5 rounded-[28px] border border-line bg-card p-7 sm:p-9 md:col-span-8">
        <div className="font-mono text-[13px] text-accent">● available for work</div>

        {/* Edit this headline to taste */}
        <h1 className="text-4xl font-extrabold leading-[1.04] tracking-[-0.035em] sm:text-5xl lg:text-[62px]">
          Hi, I&apos;m {site.name}. I design and build{" "}
          <span className="text-accent">things for the web.</span>
        </h1>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/projects"
            className="rounded-[14px] bg-accent px-6 py-3.5 text-[15px] font-extrabold text-on-accent"
          >
            View my work
          </Link>
          {site.resumeUrl && (
            <a
              href={site.resumeUrl}
              download
              className="rounded-[14px] bg-chip px-6 py-3.5 text-[15px] font-extrabold text-accent"
            >
              Download résumé
            </a>
          )}
        </div>
      </div>

      {/* Photo tile */}
      <div className="relative flex min-h-[330px] items-center justify-center overflow-hidden rounded-[28px] bg-brand md:col-span-4">
        {site.location && (
          <div className="absolute left-6 top-6 font-mono text-[13px] text-white/85">
            {site.location}
          </div>
        )}
        {/* Add your photo at public/images/me.jpg */}
        <Image
          src="/images/me.jpg"
          alt={`Portrait of ${site.name}`}
          width={240}
          height={240}
          priority
          className="h-60 w-60 rounded-full border-4 border-white/55 bg-white/20 object-cover"
        />
      </div>
    </section>
  );
}