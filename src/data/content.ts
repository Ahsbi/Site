import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Building2,
  Clock4,
  Database,
  FileSpreadsheet,
  Gauge,
  GraduationCap,
  Handshake,
  LayoutDashboard,
  LineChart,
  Plug,
  Search,
  Settings2,
  Sparkles,
  TrendingUp,
  UserCircle2,
  Wallet,
  Zap,
} from "lucide-react";

export const siteConfig = {
  name: "BI Contábil",
  tagline: "Consultoria em Business Intelligence para Escritórios Contábeis",
  email: "ahsconsultoriabi@gmail.com",
  phone: "(85) 99792-9650",
  phoneHref: "+5585997929650",
  whatsapp: "https://wa.me/5585997929650",
};

export const nav: { label: string; href: string }[] = [
  { label: "Desafios", href: "/#desafios" },
  { label: "Benefícios", href: "/#beneficios" },
  { label: "Dashboards", href: "/#dashboards" },
  { label: "Como funciona", href: "/#como-funciona" },
  { label: "Apresentação", href: "/apresentacao" },
  { label: "Contato", href: "/#contato" },
];

export const hero = {
  eyebrow: "Consultoria em BI para escritórios contábeis",
  headline: "Transforme processos manuais do seu escritório contábil em decisões estratégicas com dados.",
  subheadline:
    "Automatizamos a coleta, organização e análise das informações do seu escritório para que você tenha dashboards, indicadores e insights atualizados sem depender de planilhas e relatórios manuais.",
  primaryCta: "Agendar um diagnóstico",
  secondaryCta: "Conhecer a solução",
  stats: [
    { value: "100%", label: "dos dados do escritório em um só lugar" },
    { value: "0", label: "planilhas manuais para consolidar relatórios" },
    { value: "24/7", label: "indicadores atualizados em tempo real" },
  ],
};

export const challenges = {
  eyebrow: "Diagnóstico",
  title: "Qual é o maior desafio do seu escritório?",
  subtitle:
    "Se alguma dessas situações faz parte da rotina do seu escritório, o problema não é a sua equipe — é a falta de um ambiente de dados estruturado.",
  items: [
    "Sua equipe perde horas criando relatórios e consolidando planilhas?",
    "As informações estão espalhadas em diferentes sistemas e arquivos?",
    "Você demora para entender o desempenho financeiro e operacional do escritório?",
    "Acompanhar os principais indicadores ainda depende de processos manuais?",
    "É difícil identificar gargalos e oportunidades de melhoria?",
    "Sua equipe passa mais tempo organizando dados do que analisando informações?",
  ],
};

export interface Benefit {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const benefits: { eyebrow: string; title: string; items: Benefit[] } = {
  eyebrow: "Resultados",
  title: "O que sua empresa ganha com a consultoria",
  items: [
    {
      title: "Menos trabalho manual",
      description: "Automatize a atualização de dados e reduza o tempo gasto com planilhas.",
      icon: Zap,
    },
    {
      title: "Informações centralizadas",
      description: "Consolide dados de diferentes sistemas em um único ambiente.",
      icon: Database,
    },
    {
      title: "Indicadores em tempo real",
      description: "Acompanhe os principais números do escritório sempre atualizados.",
      icon: Gauge,
    },
    {
      title: "Mais produtividade",
      description: "Permita que sua equipe foque em análise e estratégia.",
      icon: Sparkles,
    },
    {
      title: "Decisões mais rápidas",
      description: "Tenha acesso às informações necessárias no momento em que precisar.",
      icon: Clock4,
    },
    {
      title: "Maior previsibilidade",
      description: "Utilize dados históricos e indicadores para identificar tendências e oportunidades.",
      icon: LineChart,
    },
  ],
};

export interface DashboardGroup {
  title: string;
  icon: LucideIcon;
  items: string[];
}

export const dashboards: { eyebrow: string; title: string; subtitle: string; groups: DashboardGroup[] } = {
  eyebrow: "Soluções",
  title: "Dashboards para gestão contábil",
  subtitle:
    "Criamos painéis sob medida para cada área do escritório, conectados às suas fontes de dados e sempre atualizados.",
  groups: [
    {
      title: "Dashboard Executivo",
      icon: LayoutDashboard,
      items: ["Faturamento", "Receita recorrente", "Crescimento", "Ticket médio", "Margem", "Clientes ativos"],
    },
    {
      title: "Dashboard Financeiro",
      icon: Wallet,
      items: ["Receita", "Despesas", "Fluxo de caixa", "Inadimplência", "Lucratividade", "Projeções financeiras"],
    },
    {
      title: "Dashboard Comercial",
      icon: Handshake,
      items: ["Novos clientes", "Leads", "Conversão", "Ticket médio", "Performance comercial", "Origem dos clientes"],
    },
    {
      title: "Dashboard Operacional",
      icon: Settings2,
      items: [
        "Produtividade por departamento",
        "Volume de clientes",
        "Entregas realizadas",
        "Pendências",
        "SLA",
        "Gargalos operacionais",
      ],
    },
    {
      title: "Dashboard de Clientes",
      icon: UserCircle2,
      items: ["Carteira de clientes", "Rentabilidade", "Churn", "Potencial de crescimento", "Segmentação de clientes"],
    },
  ],
};

export interface Step {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const howItWorks: { eyebrow: string; title: string; steps: Step[] } = {
  eyebrow: "Metodologia",
  title: "Como funciona a consultoria",
  steps: [
    {
      number: "01",
      title: "Diagnóstico",
      description: "Entendemos os processos, sistemas, dados e principais desafios do escritório.",
      icon: Search,
    },
    {
      number: "02",
      title: "Estruturação dos Dados",
      description: "Organizamos e conectamos as fontes de dados necessárias para criar uma base confiável.",
      icon: Database,
    },
    {
      number: "03",
      title: "Desenvolvimento da Solução",
      description: "Criamos dashboards, indicadores e automações personalizadas para o negócio.",
      icon: LayoutDashboard,
    },
    {
      number: "04",
      title: "Autonomia",
      description: "Treinamos sua equipe para interpretar os indicadores e utilizar os dados de forma estratégica.",
      icon: GraduationCap,
    },
  ],
};

export const beforeAfter = {
  eyebrow: "Transformação",
  title: "Antes e depois",
  before: {
    label: "Antes da consultoria",
    items: [
      "Planilhas descentralizadas",
      "Relatórios manuais",
      "Retrabalho",
      "Informações desatualizadas",
      "Dificuldade para analisar dados",
      "Dependência de pessoas",
    ],
  },
  after: {
    label: "Depois da consultoria",
    items: [
      "Dados centralizados",
      "Atualização automatizada",
      "Dashboards interativos",
      "Indicadores atualizados",
      "Mais produtividade",
      "Decisões baseadas em dados",
    ],
  },
};

export interface IntegrationItem {
  label: string;
  icon: LucideIcon;
}

export const integrations: { eyebrow: string; title: string; subtitle: string; items: IntegrationItem[] } = {
  eyebrow: "Ecossistema de dados",
  title: "Integrações",
  subtitle:
    "Conectamos as ferramentas que o seu escritório já utiliza em um único ambiente central de Business Intelligence.",
  items: [
    { label: "Sistemas Contábeis", icon: Building2 },
    { label: "ERPs", icon: Settings2 },
    { label: "Excel", icon: FileSpreadsheet },
    { label: "Bancos de Dados", icon: Database },
    { label: "APIs", icon: Plug },
    { label: "Power BI", icon: BarChart3 },
  ],
};

export const whyBI = {
  eyebrow: "Por que BI",
  title: "Por que investir em BI para contabilidade?",
  intro:
    "Business Intelligence não serve apenas para criar dashboards bonitos — é a base para um escritório mais estratégico, produtivo e preparado para crescer.",
  items: [
    "Redução de processos manuais",
    "Padronização das informações",
    "Maior produtividade",
    "Melhor acompanhamento dos resultados",
    "Identificação de oportunidades",
    "Redução de retrabalho",
    "Tomada de decisão baseada em dados",
  ],
};

export const testimonials = {
  eyebrow: "Cases",
  title: "Depoimentos e cases",
  message:
    "Estamos construindo os primeiros cases de sucesso da consultoria. Em breve, esta área vai reunir depoimentos, resultados e comparativos de antes e depois de escritórios contábeis reais que transformaram sua gestão com dados.",
};

export interface ProjectItem {
  title: string;
  description: string;
  embedUrl: string;
  icon: LucideIcon;
}

export const projects: { eyebrow: string; title: string; subtitle: string; items: ProjectItem[] } = {
  eyebrow: "Projetos desenvolvidos",
  title: "Projetos que transformam dados em decisões",
  subtitle:
    "Mais do que falar sobre dados, eu desenvolvo soluções que ajudam empresas a visualizar, analisar e tomar melhores decisões.",
  items: [
    {
      title: "Controle ao Crescimento",
      description:
        "Dashboard desenvolvido para apoiar empresas na organização financeira e no acompanhamento de indicadores essenciais para a gestão e o crescimento do negócio.",
      embedUrl:
        "https://app.powerbi.com/view?r=eyJrIjoiMmRlNzEyNjktNDY2MC00NWQxLTk4Y2YtNWJhM2M5ZDU1YjM3IiwidCI6IjcwNmUwZTIyLTUwZjktNDI2Ni1iOGMxLWViNDIyNmNkZDllYSJ9",
      icon: TrendingUp,
    },
    {
      title: "Controladoria XP Bucks",
      description:
        "Dashboard desenvolvido para acompanhamento de indicadores estratégicos de controladoria, proporcionando uma visão consolidada para análise e tomada de decisão.",
      embedUrl:
        "https://app.powerbi.com/view?r=eyJrIjoiYzZjNGY3NGEtOTBiZi00MDZkLWExZTQtMjAwODE0N2ZhZTI2IiwidCI6IjcwNmUwZTIyLTUwZjktNDI2Ni1iOGMxLWViNDIyNmNkZDllYSJ9",
      icon: Wallet,
    },
    {
      title: "Análise de Indicadores",
      description:
        "Dashboard desenvolvido para transformar dados em indicadores estratégicos, permitindo análises mais rápidas e uma visão clara do desempenho do negócio.",
      embedUrl:
        "https://app.powerbi.com/view?r=eyJrIjoiMDg1NjE5NjMtYjBlYy00NTg0LWI2MDMtMmNiNDU5OTJlNDU4IiwidCI6IjcwNmUwZTIyLTUwZjktNDI2Ni1iOGMxLWViNDIyNmNkZDllYSJ9",
      icon: BarChart3,
    },
  ],
};

export const finalCta = {
  headline: "Descubra como transformar os dados do seu escritório contábil em uma ferramenta estratégica para o crescimento.",
  text: "Agende uma conversa e descubra quais processos podem ser automatizados e quais indicadores podem ajudar seu escritório a tomar decisões melhores.",
  button: "Agendar diagnóstico",
};
