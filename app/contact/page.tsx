import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name}.`,
};

// "https://github.com/yourname" becomes "github.com/yourname"
const prettyUrl = (url: string) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

export default function ContactPage() {
  const profiles = site.socialLinks.filter((s) => s.platform !== "email");

  return (
    <Container className="flex flex-col gap-12 pb-12 pt-2">
      <section>
        <div className="mb-3 font-mono text-[13px] text-accent">// contact</div>
        <h1 className="text-4xl font-extrabold tracking-[-0.035em] sm:text-[56px]">
          Let&apos;s talk
        </h1>
        <p className="mt-4 max-w-[560px] text-lg leading-relaxed text-muted">
          Have a project, a question, or just want to say hi? Email is the best
          way to reach me.
        </p>
      </section>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-12">
        {/* Email tile */}
        <a
          href={`mailto:${site.email}`}
          className="flex min-h-[260px] flex-col justify-between rounded-[28px] bg-brand p-9 text-white md:col-span-8"
        >
          <div className="font-mono text-[13px] opacity-85">email</div>
          <div className="break-all text-3xl font-extrabold tracking-[-0.03em] sm:text-[44px] sm:leading-tight">
            {site.email}
          </div>
        </a>

        {/* Location tile */}
        <div className="flex min-h-[260px] flex-col justify-between rounded-[28px] border border-line bg-card p-8 md:col-span-4">
          <div className="font-mono text-[13px] text-muted">based in</div>
          <div className="text-[28px] font-extrabold leading-tight tracking-[-0.02em]">
            {site.location ?? "Somewhere on the internet"}
          </div>
        </div>

        {/* One tile per profile */}
        {profiles.map((s) => (
          <a
            key={s.href}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col gap-6 rounded-[28px] border border-line bg-card p-8 transition-colors hover:border-accent md:col-span-4"
          >
            <div className="font-mono text-[13px] text-muted">{s.label.toLowerCase()}</div>
            <div className="mt-auto flex items-end justify-between gap-3">
              <span className="break-all text-[17px] font-extrabold">{prettyUrl(s.href)}</span>
              <span className="text-xl font-extrabold text-accent" aria-hidden="true">↗</span>
            </div>
          </a>
        ))}
      </section>
    </Container>
  );
}