import { Hero } from '@/components/sections/Hero';
import { AboutSection } from '@/components/sections/About';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { StatsSection } from '@/components/sections/StatsSection';
import { ImpactSection } from '@/components/sections/Impact';
import { CTASection } from '@/components/sections/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <HowItWorks />
      <StatsSection />
      <ImpactSection />
      <CTASection />
    </>
  );
}