import { AnimatedSection } from './AnimatedSection';
import { PORTFOLIO_DATA } from '@/data/portfolio-data';
import { Rocket, GraduationCap, Github, Heart, Award } from 'lucide-react';

const iconMap: Record<string, any> = {
  'rocket': Rocket,
  'graduation-cap': GraduationCap,
  'github': Github,
  'heart': Heart,
};

export function Achievements() {
  return (
    <AnimatedSection id="achievements" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Key <span className="text-gradient">Achievements</span></h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PORTFOLIO_DATA.achievements.map((ach) => {
            const Icon = iconMap[ach.icon] || Award;
            return (
              <div key={ach.id} className="glass p-6 rounded-2xl border-t border-l border-white/10 hover:-translate-y-2 transition-transform duration-300">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold mb-2">{ach.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {ach.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
