import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Challenges } from "@/components/sections/Challenges";
import { Benefits } from "@/components/sections/Benefits";
import { Dashboards } from "@/components/sections/Dashboards";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { Integrations } from "@/components/sections/Integrations";
import { WhyBI } from "@/components/sections/WhyBI";
import { Testimonials } from "@/components/sections/Testimonials";
import { FinalCta } from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Challenges />
        <Benefits />
        <Dashboards />
        <HowItWorks />
        <BeforeAfter />
        <Integrations />
        <WhyBI />
        <Testimonials />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
