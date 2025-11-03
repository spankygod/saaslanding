import Navbar from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { StatsSection } from "@/components/stats-section";
import { Testimonial } from "@/components/testimonial";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <div className="min-h-screen relative flex flex-col">
      <div className="fixed inset-0 z-[-1] bg-cover bg-bottom bg-no-repeat bg-[url('/bg/bgpenguin.png')]" />
      <Navbar />

      <main className="flex-1 flex items-start justify-center relative pt-8">
        <HeroSection />
        <StatsSection />
        <Testimonial />
      </main>

      <SiteFooter />
    </div>
  );
}
