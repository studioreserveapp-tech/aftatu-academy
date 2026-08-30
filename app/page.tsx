import { CourseSection } from "@/components/course-section";
import { CtaSection } from "@/components/cta-section";
import { HeroVideo } from "@/components/hero-video";
import { LearnSection } from "@/components/learn-section";
import { MethodSection } from "@/components/method-section";
import { RegisterSection } from "@/components/register-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TrustBar } from "@/components/trust-bar";

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-ink">
      <SiteHeader />
      {/* The stretch sits below the header: a transform would turn this
          wrapper into the containing block for fixed positioning. */}
      <div className="type-stretch">
        <main>
          <HeroVideo />
          <TrustBar />
          <LearnSection />
          <CourseSection />
          <MethodSection />
          <CtaSection />
          <RegisterSection />
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
