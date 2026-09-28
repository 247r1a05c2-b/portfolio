import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolio-data';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border py-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center mb-8">
          {/* Logo / Brand */}
          <div className="text-center md:text-left">
            <span className="text-2xl font-bold text-gradient block mb-2">
              {PORTFOLIO_DATA.identity.shortName}
            </span>
            <p className="text-sm text-muted-foreground">
              Software Developer · AI/ML · CSE Undergraduate
            </p>
          </div>

          {/* Socials */}
          <div className="flex justify-center gap-4">
            <a href={PORTFOLIO_DATA.identity.github} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href={PORTFOLIO_DATA.identity.linkedin} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href={`mailto:${PORTFOLIO_DATA.identity.email}`} className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Back to top */}
          <div className="flex justify-center md:justify-end">
            <button 
              onClick={scrollToTop}
              className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center hover:-translate-y-2 transition-transform shadow-lg"
              aria-label="Back to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-border/50">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <a href={PORTFOLIO_DATA.identity.github} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">GitHub</a>
            <a href={PORTFOLIO_DATA.identity.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">LinkedIn</a>
            <a href={`https://leetcode.com/${PORTFOLIO_DATA.identity.leetcodeUsername}`} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">LeetCode</a>
            <a href={`mailto:${PORTFOLIO_DATA.identity.email}`} className="hover:text-accent transition-colors">Email</a>
          </div>
          <p className="text-xs text-muted-foreground mt-2 opacity-50">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
