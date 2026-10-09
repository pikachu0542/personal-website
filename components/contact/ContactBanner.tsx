import { site } from "@/data/site";

export function ContactBanner() {
  return (
    <section className="flex flex-wrap items-center justify-between gap-8 rounded-[36px] bg-brand p-8 text-white sm:p-12">
      <h2 className="max-w-[620px] text-4xl font-extrabold leading-[1.05] tracking-[-0.035em] sm:text-[46px]">
        Want to work together? <span className="opacity-70">Say hi.</span>
      </h2>
      <a
        href={`mailto:${site.email}`}
        className="rounded-[14px] bg-white px-8 py-[18px] text-[17px] font-extrabold text-[#1d5bf0]"
      >
        {site.email}
      </a>
    </section>
  );
}