import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PresentationHero } from "@/components/apresentacao/PresentationHero";
import { WhoIAm } from "@/components/apresentacao/WhoIAm";
import { Differential } from "@/components/apresentacao/Differential";
import { Audience } from "@/components/apresentacao/Audience";
import { Services } from "@/components/apresentacao/Services";
import { ProjectsTeaser } from "@/components/apresentacao/ProjectsTeaser";
import { Partnership } from "@/components/apresentacao/Partnership";
import { PartnershipJourney } from "@/components/apresentacao/PartnershipJourney";
import { Transformation } from "@/components/apresentacao/Transformation";
import { PresentationCta } from "@/components/apresentacao/PresentationCta";

export const metadata: Metadata = {
  title: "Apresentação | BI Contábil — Especialista em Business Intelligence",
  description:
    "Conheça o posicionamento profissional, a metodologia e o modelo de parceria com escritórios contábeis do especialista em Business Intelligence e gestão orientada a dados.",
};

export default function ApresentacaoPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PresentationHero />
        <WhoIAm />
        <Differential />
        <Audience />
        <Services />
        <ProjectsTeaser />
        <Partnership />
        <PartnershipJourney />
        <Transformation />
        <PresentationCta />
      </main>
      <Footer />
    </>
  );
}
