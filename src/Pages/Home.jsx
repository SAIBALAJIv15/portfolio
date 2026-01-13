import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { Contact } from "lucide-react";




export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />
        {/* Star Background */}
        <StarBackground />
        <Navbar />
        <main>
          <HeroSection />
           <AboutSection /> 
           <SkillsSection /> 
           <ProjectsSection />
           <ContactSection />
        </main>
        <Footer />

      
    </div>
  );
};