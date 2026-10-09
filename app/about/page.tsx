import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { about } from "@/data/about";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: `Learn more about ${site.name}.`,
};

export default function AboutPage() {
  return (
    <Container className="flex flex-col gap-12 pb-12 pt-2">
      <section>
        <div className="mb-3 font-mono text-[13px] text-accent">// about</div>
        <h1 className="text-4xl font-extrabold tracking-[-0.035em] sm:text-[56px]">
          A little about me
        </h1>
      </section>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-12">
        {/* Photo tile */}
        <div className="flex min-h-[320px] items-center justify-center overflow-hidden rounded-[28px] bg-brand md:col-span-4">
          {/* Same photo as the home page: public/images/me.jpg */}
          <Image
            src="/images/me.jpg"
            alt={`Portrait of ${site.name}`}
            width={240}
            height={240}
            className="h-60 w-60 rounded-full border-4 border-white/55 bg-white/20 object-cover"
          />
        </div>

        {/* Bio tile */}
        <div className="flex flex-col gap-5 rounded-[28px] border border-line bg-card p-8 sm:p-10 md:col-span-8">
          <div className="font-mono text-[13px] text-muted">my story</div>
          {about.bio.map((paragraph) => (
            <p key={paragraph} className="text-[17px] leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Quick facts */}
        {about.facts.map((fact) => (
          <div
            key={fact.label}
            className="flex min-h-[160px] flex-col justify-between rounded-[28px] border border-line bg-card p-8 md:col-span-4"
          >
            <div className="font-mono text-[13px] text-muted">{fact.label}</div>
            <div className="text-[24px] font-extrabold leading-tight tracking-[-0.02em]">
              {fact.value}
            </div>
          </div>
        ))}

        {/* Where to next */}
        <Link
          href="/resume"
          className="flex min-h-[160px] flex-col justify-between rounded-[28px] bg-chip p-8 text-accent md:col-span-6"
        >
          <div className="font-mono text-[13px]">the professional side</div>
          <div className="text-[24px] font-extrabold tracking-[-0.02em]">See my résumé →</div>
        </Link>
        <Link
          href="/hobbies"
          className="flex min-h-[160px] flex-col justify-between rounded-[28px] bg-chip p-8 text-accent md:col-span-6"
        >
          <div className="font-mono text-[13px]">the fun side</div>
          <div className="text-[24px] font-extrabold tracking-[-0.02em]">See my hobbies →</div>
        </Link>
      </section>
    </Container>
  );
}