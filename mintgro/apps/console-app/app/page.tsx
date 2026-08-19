import Hero from "@/components/sections/Hero";
import Trusted from "@/components/sections/Trusted";
import Challenges from "@/components/sections/Challenges";
import CRM from "@/components/sections/CRM";
import Industries from "@/components/sections/Industries";
import Personalized from "@/components/sections/Personalized";
import Experience from "@/components/sections/Experience";
import Steps from "@/components/sections/Steps";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import Newsletter from "@/components/sections/Newsletter";
import FinalCTA from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Trusted />
      <Challenges />
      <CRM />
      <Industries />
      <Personalized />
      <Experience />
      <Steps />
      <Pricing />
      <FAQ />
      <Newsletter />
      <FinalCTA />
    </>
  );
}
