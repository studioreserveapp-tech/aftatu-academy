import { CourseSection } from "@/components/course-section";
import { HeroVideo } from "@/components/hero-video";
import { RegisterSection } from "@/components/register-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <div id="top">
      <SiteHeader />
      <main>
        <HeroVideo />
        <CourseSection />
        <RegisterSection />
      </main>
      <SiteFooter />
    </div>
  );
}
