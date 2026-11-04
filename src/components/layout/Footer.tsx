import Link from "next/link";
import Image from "next/image";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { nav, siteConfig } from "@/data/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-ink-950 text-ink-200">
      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-2">
          <Link href="/" className="flex items-center gap-2.5 font-display text-lg font-bold text-white">
            <span className="flex size-9 items-center justify-center rounded-lg bg-white p-1">
              <Image src="/logo.jpg" alt={siteConfig.name} width={28} height={28} className="rounded-md object-cover" />
            </span>
            {siteConfig.name}
          </Link>
          <p className="max-w-sm text-sm leading-relaxed text-ink-300">
            {siteConfig.tagline}. Ajudamos escritórios contábeis a substituir planilhas e retrabalho por dados
            centralizados, dashboards e automações.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Navegação</h3>
          <ul className="flex flex-col gap-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-ink-300 transition-colors hover:text-brand-300">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div id="contato" className="flex flex-col gap-4 scroll-mt-24">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Contato</h3>
          <ul className="flex flex-col gap-3 text-sm text-ink-300">
            <li className="flex items-center gap-2">
              <Mail className="size-4 text-brand-400" aria-hidden="true" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-brand-300">
                {siteConfig.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="size-4 text-brand-400" aria-hidden="true" />
              <a href={`tel:${siteConfig.phoneHref}`} className="hover:text-brand-300">
                {siteConfig.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle className="size-4 text-brand-400" aria-hidden="true" />
              <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-brand-300">
                WhatsApp
              </a>
            </li>
            {siteConfig.linkedin && (
              <li>
                <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-brand-300">
                  LinkedIn
                </a>
              </li>
            )}
            {siteConfig.instagram && (
              <li>
                <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-brand-300">
                  Instagram
                </a>
              </li>
            )}
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10 py-6">
        <Container className="flex flex-col items-center justify-between gap-2 text-xs text-ink-400 sm:flex-row">
          <p>
            © {year} {siteConfig.name}. Todos os direitos reservados.
          </p>
          <Link href="/privacidade" className="hover:text-brand-300">
            Política de privacidade
          </Link>
        </Container>
      </div>
    </footer>
  );
}
