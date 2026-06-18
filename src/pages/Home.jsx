import HeroSection from "@/components/home-components/HeroSection";
import ServiceIntro from "@/components/home-components/ServiceIntro";
import Methodology from "@/components/home-components/Methodology";
import TrainingSection from "@/components/home-components/TrainingSection";
import CallToAction from "@/components/home-components/CallToAction";

export default function Home() {
  return (
    <div className="pt-12">
      <HeroSection />
      <ServiceIntro />
      <Methodology />
      <TrainingSection />
      <CallToAction />
    </div>
  );
}