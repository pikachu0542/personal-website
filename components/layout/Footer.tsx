"use client"

import { Container } from "@/components/layout/Container";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="pb-8 pt-4 text-sm text-muted">
      <Container className="flex flex-wrap items-center justify-between gap-3">
        <div>
          © {new Date().getFullYear()} {site.name}
        </div>
        <ul className="flex gap-5 font-semibold">
          {site.socialLinks?.map((s) => (
            <li key={s.href}>
              <a
                href={s.href}
                className="transition-colors hover:text-foreground"
                {...(s.platform !== "email"
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </footer>
  );
}