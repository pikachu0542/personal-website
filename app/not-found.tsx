import Link from "next/link";
import { Container } from "@/components/layout/Container";

export default function NotFound() {
  return (
    <Container className="pb-12 pt-2">
      <section className="flex min-h-[380px] flex-col justify-between gap-10 rounded-[36px] bg-brand p-9 text-white sm:p-14">
        <div className="font-mono text-[13px] opacity-85">// error 404</div>
        <div className="flex flex-col gap-4">
          <h1 className="text-[88px] font-extrabold leading-none tracking-[-0.04em] sm:text-[140px]">
            404
          </h1>
          <p className="max-w-[480px] text-xl leading-relaxed opacity-90">
            This page doesn&apos;t exist, or it moved. Let&apos;s get you back on track.
          </p>
        </div>
        <div>
          <Link
            href="/"
            className="inline-block rounded-[14px] bg-white px-7 py-4 text-base font-extrabold text-[#1d5bf0]"
          >
            Back to home
          </Link>
        </div>
      </section>
    </Container>
  );
}