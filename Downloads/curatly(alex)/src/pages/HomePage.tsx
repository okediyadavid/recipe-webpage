import { AnimatedHero } from "../components/AnimatedHero";
import { EnhancedStatsSection } from "../components/EnhancedStatsSection";
import { EnhancedFAQ } from "../components/EnhancedFAQ";

export function HomePage() {
  return (
    <>
      <AnimatedHero />
      <EnhancedStatsSection />
      <EnhancedFAQ />
    </>
  );
}