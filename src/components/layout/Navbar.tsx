"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { nav, siteConfig } from "@/data/content";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink-100 bg-white/80 backdrop-blur-md">
      <Container className="flex items-center justify-between py-4">
        <Link href="/" aria-label={`${siteConfig.name}, página inicial`}>
          <Logo showTagline taglineClassName="lg:hidden" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink-600 transition-colors hover:text-brand-700"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href={siteConfig.whatsapp} external variant="primary" className="px-5 py-3 text-sm">
            Agendar diagnóstico
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex size-10 items-center justify-center rounded-lg border border-ink-100 text-ink-900 lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-ink-100 bg-white lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-ink-700 hover:bg-ink-50"
              >
                {item.label}
              </Link>
            ))}
            <Button href={siteConfig.whatsapp} external variant="primary" className="mt-2 justify-center py-3 text-sm">
              Agendar diagnóstico
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
