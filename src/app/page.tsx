import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Challenges } from "@/components/sections/Challenges";
import { Benefits } from "@/components/sections/Benefits";
import { Dashboards } from "@/components/sections/Dashboards";
import { ProjectsShowcase } from "@/components/sections/ProjectsShowcase";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { Integrations } from "@/components/sections/Integrations";
import { WhyBI } from "@/components/sections/WhyBI";
import { Offers } from "@/components/sections/Offers";
import { OfficeDemo } from "@/components/sections/OfficeDemo";
import { Consultant } from "@/components/sections/Consultant";
import { FounderProgram } from "@/components/sections/FounderProgram";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Challenges />
        <Offers />
        <OfficeDemo />
        <Benefits />
        <Dashboards />
        <ProjectsShowcase />
        <Consultant />
        <HowItWorks />
        <BeforeAfter />
        <Integrations />
        <WhyBI />
        <FounderProgram />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
