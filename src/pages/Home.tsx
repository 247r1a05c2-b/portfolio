import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Experience } from '@/components/Experience';
import { Projects } from '@/components/Projects';
import { LeetCode } from '@/components/LeetCode';
import { OtherRepositories } from '@/components/OtherRepositories';
import { Education } from '@/components/Education';
import { Certificates } from '@/components/Certificates';
import { Achievements } from '@/components/Achievements';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { useScrollspy } from '@/hooks/useScrollspy';

export default function Home() {
  const sectionIds = [
    'home', 'about', 'skills', 'experience', 'projects',
    'leetcode', 'education', 'certificates',
    'achievements', 'contact'
  ];
  const activeSection = useScrollspy(sectionIds, 200);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent/30 selection:text-accent">
      <Navbar activeSection={activeSection} />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <LeetCode />
        <OtherRepositories />
        <Education />
        <Certificates />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
