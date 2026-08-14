import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/Hero";
import Challenges from "@/components/Challenges";
import Features from "@/components/Features";
import Industries from "@/components/Industries";
import Personalization from "@/components/Personalization";
import MultiDeviceDemo from "@/components/MultiDeviceDemo";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Subscribe from "@/components/Subscribe";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <Challenges />
      <Features />
      <Industries />
      <Personalization />
      <MultiDeviceDemo />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <Subscribe />
      <Footer />
    </div>
  );
}