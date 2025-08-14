import { FeatureSection } from "@/components/landingpage/featuresSection";
import { HeroSection } from "@/components/landingpage/heroSection";
import { Navbar } from "@/components/Navbar";


export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <div className="h-[400vh]"></div>
    </>
  );
}
