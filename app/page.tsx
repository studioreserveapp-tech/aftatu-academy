import { CourseSection } from "@/components/course-section";
import { CtaSection } from "@/components/cta-section";
import { HeroVideo } from "@/components/hero-video";
import { LearnSection } from "@/components/learn-section";
import { MethodSection } from "@/components/method-section";
import { NextPathSection } from "@/components/next-path-section";
import { RegisterSection } from "@/components/register-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StudioSection } from "@/components/studio-section";
import { TrustBar } from "@/components/trust-bar";

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-ink">
      <SiteHeader />
      <main>
        <HeroVideo />
        <TrustBar />
        <LearnSection />
        <StudioSection />
        <CourseSection />
        <MethodSection />
        <NextPathSection />
        <CtaSection />
        <RegisterSection />
      </main>
      <SiteFooter />
    </div>
  );
}
