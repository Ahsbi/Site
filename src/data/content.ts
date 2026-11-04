import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Briefcase,
  Building2,
  Calculator,
  Clock4,
  Database,
  FileSpreadsheet,
  Gauge,
  GraduationCap,
  Handshake,
  LayoutDashboard,
  LineChart,
  Plug,
  Receipt,
  Search,
  Settings2,
  Sparkles,
  TrendingUp,
  UserCircle2,
  Wallet,
  Zap,
} from "lucide-react";

export const siteConfig = {
  name: "AhsBi Consultoria",
  tagline: "Consultoria em Business Intelligence para Escritórios Contábeis",
  url: "https://www.ahsbiconsultoria.com.br",
  email: "ahsconsultoriabi@gmail.com",
  phone: "(85) 99792-9650",
  phoneHref: "+5585997929650",
  whatsapp: `https://wa.me/5585997929650?text=${encodeURIComponent(
    "Olá! Vim pelo site e gostaria de agendar um diagnóstico para o meu escritório contábil.",
  )}`,
  /** Optional social profiles — leave empty to hide the link. */
  linkedin: "",
  instagram: "",
};

export const consultant = {
  eyebrow: "Quem conduz o projeto",
  name: "Anderson Silva",
  role: "Contador de formação · Especialista em Business Intelligence",
  credential: "Microsoft Certified: Power BI Data Analyst Associate",
  text: "Antes de trabalhar com dados, me formei em Contabilidade. Entendo balancete, DRE, regimes tributários e a correria do fechamento, então você não precisa traduzir a rotina do escritório para um técnico de TI. Eu mesmo conduzo cada projeto, do diagnóstico ao treinamento da equipe.",
  highlights: [
    "Formação em Ciências Contábeis",
    "Certificação Microsoft em Power BI",
    "Atendimento direto, sem intermediários",
    "Atuação em Fortaleza e on-line",
  ],
  cta: "Conhecer minha trajetória",
};

export const nav: { label: string; href: string }[] = [
  { label: "Desafios", href: "/#desafios" },
  { label: "Soluções", href: "/#solucoes" },
  { label: "Exemplo", href: "/#exemplo" },
  { label: "Como funciona", href: "/#como-funciona" },
  { label: "Parceria", href: "/apresentacao" },
  { label: "Dúvidas", href: "/#duvidas" },
  { label: "Contato", href: "/#contato" },
];

export const hero = {
  eyebrow: "Consultoria em BI para escritórios contábeis",
  headline: "Transforme processos manuais do seu escritório contábil em decisões estratégicas com dados.",
  subheadline:
    "Automatizamos a coleta, organização e análise das informações do seu escritório para que você tenha dashboards e indicadores atualizados, com muito menos planilhas e retrabalho no fechamento.",
  primaryCta: "Agendar um diagnóstico",
  secondaryCta: "Ver exemplo de painel",
  stats: [
    { value: "Contador", label: "de formação, especialista em BI" },
    { value: "Microsoft", label: "Certified: Power BI Data Analyst" },
    { value: "30 min", label: "de diagnóstico gratuito, sem compromisso" },
  ],
  mockupNote: "Exemplo ilustrativo com dados fictícios",
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
      title: "Indicadores sempre atualizados",
      description: "Acompanhe os principais números do escritório a cada atualização, sem montar relatório.",
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
      items: [
        "Receita de honorários",
        "Despesas",
        "Fluxo de caixa",
        "Inadimplência de honorários",
        "Lucratividade",
        "Projeções financeiras",
      ],
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
        "Obrigações entregues no prazo",
        "Entregas por fiscal, DP e contábil",
        "Pendências de documentos",
        "Horas por cliente",
        "Gargalos operacionais",
      ],
    },
    {
      title: "Dashboard de Clientes",
      icon: UserCircle2,
      items: [
        "Rentabilidade por cliente (honorário × horas)",
        "Carteira por regime tributário",
        "Churn",
        "Potencial de crescimento",
        "Segmentação de clientes",
      ],
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

export const integrations: {
  eyebrow: string;
  title: string;
  subtitle: string;
  note: string;
  items: IntegrationItem[];
} = {
  eyebrow: "Ecossistema de dados",
  title: "Integrações",
  subtitle:
    "Trabalhamos a partir dos relatórios e exportações dos sistemas que o seu escritório já usa. Você não precisa trocar de sistema.",
  items: [
    { label: "Domínio", icon: Building2 },
    { label: "Fortes", icon: Building2 },
    { label: "Questor", icon: Building2 },
    { label: "Alterdata", icon: Building2 },
    { label: "Conta Azul", icon: Settings2 },
    { label: "Omie", icon: Settings2 },
    { label: "Nibo", icon: Settings2 },
    { label: "Excel", icon: FileSpreadsheet },
    { label: "Bancos de dados", icon: Database },
    { label: "APIs", icon: Plug },
    { label: "Extratos bancários", icon: Receipt },
    { label: "Power BI", icon: BarChart3 },
  ],
  note: "Os nomes citados são marcas de seus respectivos fabricantes. A conexão é feita a partir das exportações ou integrações disponíveis em cada sistema, avaliadas no diagnóstico.",
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

export const founderProgram = {
  eyebrow: "Programa Escritório Parceiro Fundador",
  title: "3 vagas para escritórios que querem sair na frente",
  text: "Estou selecionando três escritórios contábeis de Fortaleza para desenvolver os primeiros projetos em condições especiais. Em troca, peço sua opinião sincera e, se o resultado for bom, autorização para contar essa história como case.",
  items: [
    {
      title: "Piloto com um cliente real",
      description:
        "Um painel gerencial completo para um cliente do escritório, com dados anonimizados, para vocês verem o valor antes de qualquer compromisso.",
    },
    {
      title: "Condição de fundador",
      description: "Investimento reduzido no primeiro projeto e prioridade na agenda durante a implantação.",
    },
    {
      title: "Construção conjunta",
      description:
        "Vocês ajudam a definir os indicadores e o formato do serviço que o escritório vai oferecer aos clientes.",
    },
  ],
  cta: "Quero conhecer o programa",
  whatsappText: "Olá! Vim pelo site e quero saber mais sobre o Programa Escritório Parceiro Fundador.",
};

export interface Offer {
  eyebrow: string;
  title: string;
  description: string;
  icon: LucideIcon;
  items: string[];
}

export const offers: { eyebrow: string; title: string; subtitle: string; items: Offer[] } = {
  eyebrow: "Duas frentes",
  title: "BI para o seu escritório e para os clientes dele",
  subtitle:
    "Os dados que o escritório já produz podem melhorar a gestão interna e também virar um novo serviço recorrente para a carteira.",
  items: [
    {
      eyebrow: "Para a gestão do escritório",
      title: "Mais controle, menos retrabalho",
      description: "Painéis internos para o sócio enxergar rentabilidade, prazos e produtividade sem montar planilhas.",
      icon: Calculator,
      items: [
        "Rentabilidade por cliente: honorário × horas da equipe",
        "Obrigações e prazos por departamento",
        "Inadimplência de honorários e base para reajustes",
        "Produtividade e gargalos da equipe",
      ],
    },
    {
      eyebrow: "Para os clientes do escritório",
      title: "Uma nova fonte de receita",
      description: "Painéis gerenciais entregues com a marca do escritório, como serviço adicional de BPO ou consultoria.",
      icon: Briefcase,
      items: [
        "DRE gerencial mensal, visual e comparativa",
        "Faturamento, custos, despesas e margem",
        "Fluxo de caixa e inadimplência",
        "O cliente continua sendo do escritório; eu trabalho nos bastidores",
      ],
    },
  ],
};

export const officeDemo = {
  eyebrow: "Exemplo prático",
  title: "Como seria o painel do seu escritório",
  subtitle:
    "Uma prévia com dados fictícios de um escritório com 184 clientes. No projeto real, os números vêm dos sistemas e planilhas que vocês já usam.",
  note: "Dados fictícios, apenas para ilustração.",
  kpis: [
    { label: "Honorários no mês", value: "R$ 186 mil", trend: "+6% vs. mês anterior" },
    { label: "Clientes ativos", value: "184", trend: "+4 no trimestre" },
    { label: "Obrigações no prazo", value: "96%", trend: "meta: 98%" },
    { label: "Inadimplência", value: "4,2%", trend: "-1,1 p.p. no trimestre" },
  ],
  matrixTitle: "Rentabilidade por cliente",
  matrixSubtitle: "Cada ponto é um cliente: honorário mensal × horas consumidas pela equipe",
  matrixLegend: { ok: "Honorário cobre as horas", bad: "Consome mais horas do que paga" },
  regimeTitle: "Carteira por regime tributário",
  regimes: [
    { label: "Simples Nacional", value: 112 },
    { label: "Lucro Presumido", value: 51 },
    { label: "Lucro Real", value: 14 },
    { label: "MEI e outros", value: 7 },
  ],
  insight: "12 clientes consomem mais horas do que o honorário cobre. É por eles que começa a conversa de reajuste.",
  cta: "Quero um painel assim",
};

export const faq = {
  eyebrow: "Dúvidas frequentes",
  title: "Perguntas que os escritórios costumam fazer",
  items: [
    {
      q: "Preciso trocar o sistema contábil que já uso?",
      a: "Não. Os painéis são construídos a partir dos relatórios e exportações do seu sistema atual (Domínio, Fortes, Questor, Alterdata, Conta Azul, entre outros) e das planilhas que vocês já mantêm.",
    },
    {
      q: "Como ficam a LGPD e o sigilo dos dados dos clientes?",
      a: "Os dados ficam em um ambiente com acesso controlado, definido junto com o escritório, e o trabalho é coberto por acordo de confidencialidade. Na demonstração e no piloto, usamos dados fictícios ou anonimizados.",
    },
    {
      q: "Quanto tempo leva para ter o primeiro painel?",
      a: "Depende de como os dados estão organizados. Um piloto com um cliente costuma ficar pronto em poucos dias úteis depois que recebemos as exportações. O prazo de cada projeto é definido no diagnóstico.",
    },
    {
      q: "Minha equipe precisa saber Power BI?",
      a: "Não. A equipe só consulta os painéis. No final, faço um treinamento prático para que todos saibam interpretar os indicadores.",
    },
    {
      q: "Vocês vão atender os clientes do escritório diretamente?",
      a: "Não. No modelo de parceria, o relacionamento é sempre do escritório, que apresenta o serviço com a própria marca. Isso fica previsto em contrato.",
    },
    {
      q: "Como é cobrado?",
      a: "Em geral, há um valor de implantação e uma mensalidade de manutenção, que variam conforme o número de fontes de dados e de painéis. O diagnóstico inicial de 30 minutos é gratuito.",
    },
  ],
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
