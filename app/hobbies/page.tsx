import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { HobbyCard } from "@/components/hobbies/HobbyCard";
import { hobbies } from "@/data/hobbies";

export const metadata: Metadata = {
  title: "Hobbies",
  description: "What I like to do outside of work.",
};

export default function HobbiesPage() {
  return (
    <Container className="flex flex-col gap-12 pb-12 pt-2">
      <section>
        <div className="mb-3 font-mono text-[13px] text-accent">// off the clock</div>
        <h1 className="text-4xl font-extrabold tracking-[-0.035em] sm:text-[56px]">
          When I&apos;m not coding
        </h1>
        <p className="mt-4 max-w-[560px] text-lg leading-relaxed text-muted">
          A few things that keep me busy away from the keyboard.
        </p>
      </section>

      {hobbies.length > 0 ? (
        <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {hobbies.map((h) => (
            <HobbyCard key={h.id} hobby={h} />
          ))}
        </section>
      ) : (
        <p className="text-muted">Hobbies coming soon.</p>
      )}
    </Container>
  );
}