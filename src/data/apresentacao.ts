import type { LucideIcon } from "lucide-react";
import {
  Award,
  BarChart3,
  Briefcase,
  Building2,
  Calculator,
  ClipboardCheck,
  Database,
  GraduationCap,
  Handshake,
  LayoutDashboard,
  Layers,
  LineChart,
  PieChart,
  PlayCircle,
  RefreshCw,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Workflow,
  Zap,
} from "lucide-react";

export const presentationHero = {
  eyebrow: "Apresentação profissional",
  headline: "Transformando dados em decisões que impulsionam negócios.",
  subheadline:
    "Especialista em Business Intelligence e gestão orientada a dados, com formação em Contabilidade — ajudando PMEs e escritórios de contabilidade a transformar informações complexas em decisões estratégicas.",
  focusAreas: [
    { label: "Contabilidade", icon: Calculator },
    { label: "Business Intelligence", icon: BarChart3 },
    { label: "Análise de Dados", icon: LineChart },
    { label: "Power BI", icon: PieChart },
    { label: "Automação", icon: Zap },
    { label: "Gestão orientada a dados", icon: Target },
  ],
  credential: {
    title: "Microsoft Certified",
    subtitle: "Power BI Data Analyst Associate",
  },
  primaryCta: "Conhecer o modelo de parceria",
  secondaryCta: "Falar comigo",
};

export interface AreaItem {
  label: string;
  icon: LucideIcon;
}

export const whoIAm: { eyebrow: string; title: string; text: string; areas: AreaItem[] } = {
  eyebrow: "Quem sou",
  title: "Especialista em Business Intelligence com formação em Contabilidade",
  text: "Minha formação contábil, aliada à especialização em dados e Business Intelligence, permite que eu conecte informações financeiras e operacionais à tecnologia para transformar dados em decisões estratégicas — unindo domínio técnico de dados a uma visão prática de gestão para PMEs e escritórios contábeis.",
  areas: [
    { label: "Formação em Contabilidade", icon: Calculator },
    { label: "Gestão e Controladoria", icon: ClipboardCheck },
    { label: "Business Intelligence", icon: BarChart3 },
    { label: "Power BI", icon: PieChart },
    { label: "Análise de Dados", icon: LineChart },
    { label: "Dashboards Executivos", icon: LayoutDashboard },
    { label: "Automação de Processos", icon: Zap },
    { label: "Treinamentos Práticos", icon: GraduationCap },
    { label: "Gestão orientada a dados", icon: Target },
  ],
};

export interface DifferentialFlowStep {
  label: string;
  icon: LucideIcon;
}

export const differential: {
  eyebrow: string;
  title: string;
  equation: string;
  text: string;
  flow: DifferentialFlowStep[];
} = {
  eyebrow: "Meu diferencial",
  title: "A conexão entre contabilidade, dados e Business Intelligence",
  equation: "Contabilidade + Negócios + Dados + Business Intelligence",
  text: "Minha formação contábil, aliada à especialização em dados e Business Intelligence, permite que eu conecte informações financeiras e operacionais à tecnologia para transformar dados em decisões estratégicas.",
  flow: [
    { label: "Contabilidade", icon: Calculator },
    { label: "Controladoria", icon: ClipboardCheck },
    { label: "Dados", icon: Database },
    { label: "Business Intelligence", icon: BarChart3 },
    { label: "Decisão Estratégica", icon: Target },
  ],
};

export interface AudienceGroup {
  title: string;
  description: string;
  icon: LucideIcon;
  items: string[];
}

export const audience: { eyebrow: string; title: string; groups: AudienceGroup[] } = {
  eyebrow: "Para quem",
  title: "Para quem é o meu trabalho",
  groups: [
    {
      title: "PMEs",
      description: "Empresas que precisam:",
      icon: Building2,
      items: [
        "Organizar seus dados",
        "Reduzir controles manuais",
        "Automatizar processos",
        "Acompanhar indicadores",
        "Tomar decisões com mais segurança",
      ],
    },
    {
      title: "Escritórios de Contabilidade",
      description: "Escritórios que desejam:",
      icon: Briefcase,
      items: [
        "Criar novas soluções para seus clientes",
        "Agregar serviços de BI ao portfólio",
        "Diferenciar-se no mercado",
        "Oferecer uma gestão mais estratégica",
        "Transformar dados contábeis em informações para tomada de decisão",
      ],
    },
  ],
};

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const services: { eyebrow: string; title: string; subtitle: string; items: ServiceItem[] } = {
  eyebrow: "O que desenvolvo",
  title: "Soluções para uma gestão orientada a dados",
  subtitle: "Do diagnóstico ao treinamento da equipe — desenvolvo o que o seu negócio precisa para decidir com dados.",
  items: [
    {
      title: "Dashboards Estratégicos",
      description:
        "Desenvolvimento de dashboards personalizados para acompanhamento de indicadores financeiros, comerciais e operacionais.",
      icon: LayoutDashboard,
    },
    {
      title: "Projetos de Business Intelligence",
      description: "Estruturação de dados, integração de fontes e desenvolvimento de soluções analíticas.",
      icon: Database,
    },
    {
      title: "Automação de Relatórios",
      description: "Redução de processos manuais e automatização da atualização das informações.",
      icon: RefreshCw,
    },
    {
      title: "Treinamentos em Power BI",
      description: "Treinamentos práticos para equipes e profissionais que desejam desenvolver uma cultura orientada a dados.",
      icon: GraduationCap,
    },
  ],
};

export interface FlowStep {
  label: string;
  icon: LucideIcon;
}

export interface BenefitItem {
  label: string;
  icon: LucideIcon;
}

export const partnership: {
  eyebrow: string;
  title: string;
  subtitle: string;
  text: string;
  flow: FlowStep[];
  benefits: BenefitItem[];
} = {
  eyebrow: "Parceria estratégica",
  title: "Parceria com Escritórios Contábeis",
  subtitle: "Modelo de co-apresentação",
  text: "O objetivo é trabalhar em parceria com escritórios contábeis para desenvolver e apresentar soluções de Business Intelligence aos seus clientes. O escritório mantém o relacionamento com o cliente e eu atuo como parceiro especialista na parte técnica e estratégica de dados.",
  flow: [
    { label: "Escritório Contábil", icon: Briefcase },
    { label: "Cliente", icon: Users },
    { label: "Dados", icon: Database },
    { label: "Análise de BI", icon: BarChart3 },
    { label: "Insights", icon: Sparkles },
    { label: "Decisão", icon: Target },
  ],
  benefits: [
    { label: "Ampliação do portfólio de serviços", icon: Layers },
    { label: "Diferenciação competitiva", icon: Award },
    { label: "Nova possibilidade de geração de receita", icon: TrendingUp },
    { label: "Maior valor percebido pelos clientes", icon: ShieldCheck },
    { label: "Apoio técnico especializado", icon: Handshake },
    { label: "Apresentações e reuniões realizadas em parceria", icon: Users },
  ],
};

export interface JourneyStep {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const partnershipJourney: { eyebrow: string; title: string; steps: JourneyStep[] } = {
  eyebrow: "Como funciona",
  title: "A jornada da parceria",
  steps: [
    {
      number: "01",
      title: "Identificação da oportunidade",
      description: "O escritório identifica clientes que podem se beneficiar de uma solução baseada em dados.",
      icon: Search,
    },
    {
      number: "02",
      title: "Diagnóstico em conjunto",
      description: "Realizamos uma conversa para entender os desafios e as oportunidades.",
      icon: ClipboardCheck,
    },
    {
      number: "03",
      title: "Desenvolvimento da solução",
      description: "Estruturamos os dados e desenvolvemos os dashboards necessários.",
      icon: Workflow,
    },
    {
      number: "04",
      title: "Co-apresentação",
      description: "Apresentamos a solução em parceria com o escritório.",
      icon: PlayCircle,
    },
    {
      number: "05",
      title: "Acompanhamento",
      description: "Apoiamos a evolução da solução e a utilização estratégica dos dados.",
      icon: RefreshCw,
    },
  ],
};

export const transformation = {
  eyebrow: "Transformação",
  title: "A transformação gerada",
  before: {
    label: "Antes",
    items: [
      "Planilhas descentralizadas",
      "Relatórios manuais",
      "Dados dispersos",
      "Dificuldade para analisar resultados",
      "Decisões baseadas em percepção",
    ],
  },
  after: {
    label: "Depois",
    items: [
      "Dados centralizados",
      "Dashboards automatizados",
      "Indicadores atualizados",
      "Visão estratégica do negócio",
      "Decisões orientadas por dados",
    ],
  },
  flow: ["Dados", "Informação", "Insights", "Decisão", "Crescimento"],
};

export const presentationCta = {
  eyebrow: "Vamos conversar",
  title: "Pronto para transformar dados em decisões?",
  text: "Seja para estruturar o BI da sua empresa ou criar uma parceria estratégica com o seu escritório contábil, vamos conversar sobre o próximo passo.",
  primaryCta: "Agendar uma conversa",
  whatsappCta: "Falar no WhatsApp",
};
