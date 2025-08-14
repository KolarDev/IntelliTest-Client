import { HeroSection } from "@/components/landingpage/heroSection";
import { Navbar } from "@/components/Navbar";


export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <div className="h-[400vh]"></div>
    </>
  );
}
