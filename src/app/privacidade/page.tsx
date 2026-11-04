import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { consultant, siteConfig } from "@/data/content";

export const metadata: Metadata = {
  title: "Política de Privacidade | AhsBi Consultoria",
  description: "Como o site da AhsBi Consultoria trata dados pessoais, em conformidade com a LGPD.",
};

const sections = [
  {
    title: "Quem somos",
    text: `Este site é mantido por ${consultant.name}, responsável pela consultoria ${siteConfig.name}. Para qualquer assunto sobre privacidade, entre em contato pelo e-mail ${siteConfig.email}.`,
  },
  {
    title: "Quais dados coletamos",
    text: "O site não possui formulários nem cadastro. Quando você entra em contato por WhatsApp, e-mail ou telefone, recebemos os dados que você decidir informar, como nome, telefone, e-mail e informações sobre o seu escritório.",
  },
  {
    title: "Estatísticas de acesso",
    text: "Usamos o Vercel Web Analytics para contar visitas e páginas acessadas de forma agregada. Essa ferramenta não utiliza cookies e não identifica visitantes individualmente.",
  },
  {
    title: "Para que usamos os dados",
    text: "Os dados de contato são usados apenas para responder à sua solicitação, agendar conversas e enviar propostas que você pediu. Não vendemos nem compartilhamos seus dados com terceiros para fins de marketing.",
  },
  {
    title: "Dados de projetos",
    text: "Em projetos e demonstrações, os dados dos clientes do escritório são tratados sob acordo de confidencialidade, com acesso restrito às pessoas envolvidas no projeto. Em demonstrações e pilotos, usamos dados fictícios ou anonimizados.",
  },
  {
    title: "Seus direitos",
    text: "Você pode, a qualquer momento, pedir acesso, correção ou exclusão dos seus dados, ou pedir que não entremos mais em contato. Basta enviar um e-mail para o endereço acima.",
  },
];

export default function PrivacidadePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-white py-20 sm:py-24">
        <Container className="flex max-w-3xl flex-col gap-10">
          <div className="flex flex-col gap-3">
            <h1 className="font-display text-3xl font-bold tracking-tight text-ink-950 sm:text-4xl">
              Política de Privacidade
            </h1>
            <p className="text-sm text-ink-500">Última atualização: novembro de 2026</p>
          </div>
          {sections.map((s) => (
            <section key={s.title} className="flex flex-col gap-2">
              <h2 className="font-display text-xl font-bold text-ink-950">{s.title}</h2>
              <p className="leading-relaxed text-ink-600">{s.text}</p>
            </section>
          ))}
        </Container>
      </main>
      <Footer />
    </>
  );
}
