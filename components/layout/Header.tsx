"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { site } from "@/data/site";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="py-6">
      <Container className="flex flex-wrap items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2.5 text-xl font-extrabold">
          <span className="inline-block h-7 w-7 rounded-[9px] bg-brand" aria-hidden="true" />
          {site.name}
        </Link>

        <nav className="flex flex-wrap items-center gap-7 text-[15px] font-medium">
          {site.navLinks.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={
                  active
                    ? "font-extrabold text-accent"
                    : "text-muted transition-colors hover:text-foreground"
                }
              >
                {item.label}
              </Link>
            );
          })}
          <ThemeToggle />
        </nav>
      </Container>
    </header>
  );
}