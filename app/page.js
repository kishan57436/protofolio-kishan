import Image from "next/image";
import HeroSection from "./component/homepage/hero-section";
import AboutSection from "./component/homepage/about";
import Experience from "./component/homepage/experience";
import Skills from "./component/homepage/skills";
import Projects from "./component/homepage/projects";
import Education from "./component/homepage/education";
import ContactSection from "./component/homepage/contact";

export default function Home() {
  return (
    // <div>kishan</div>

    <div suppressHydrationWarning >
    <HeroSection />
    <AboutSection />
    <Experience />
    <Skills />
    <Projects />
    <Education />
    {/* <Blog blogs={blogs} /> */}
    <ContactSection />
  </div>
  
  );
}
