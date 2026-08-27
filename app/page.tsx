import { CourseSection } from "@/components/course-section";
import { FeaturesSection } from "@/components/features-section";
import { HeroVideo } from "@/components/hero-video";
import { MethodSection } from "@/components/method-section";
import { RegisterSection } from "@/components/register-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <div id="top">
      <SiteHeader />
      <main>
        <HeroVideo />
        <FeaturesSection />
        <CourseSection />
        <MethodSection />
        <RegisterSection />
      </main>
      <SiteFooter />
    </div>
  );
}
