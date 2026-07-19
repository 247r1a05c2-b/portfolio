import { AnimatedSection } from './AnimatedSection';
import { PORTFOLIO_DATA } from '@/data/portfolio-data';
import { GraduationCap, Calendar } from 'lucide-react';

export function Education() {
  return (
    <AnimatedSection id="education" className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="text-gradient">Education</span></h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-secondary rounded-full" />

          <div className="space-y-12">
            {PORTFOLIO_DATA.education.map((item, idx) => (
              <div key={item.id} className={`relative flex flex-col md:flex-row ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Dot */}
                <div className="absolute left-[-5px] md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background z-10 top-6" />

                {/* Content Card */}
                <div className={`ml-8 md:ml-0 md:w-1/2 ${idx % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                  <div className="glass p-6 rounded-2xl hover:shadow-xl transition-shadow border border-border/50 relative group">
                    {/* Hover connector line */}
                    <div className={`hidden md:block absolute top-6 w-12 h-[2px] bg-accent/30 group-hover:bg-accent transition-colors ${idx % 2 === 0 ? '-left-12' : '-right-12'}`} />
                    
                    <div className="flex items-center gap-2 text-accent text-sm font-bold mb-2">
                      <Calendar className="w-4 h-4" />
                      {item.duration}
                    </div>
                    
                    <h3 className="text-xl font-bold mb-1">{item.degree}</h3>
                    <h4 className="text-muted-foreground font-medium flex items-center gap-2 mb-4">
                      <GraduationCap className="w-4 h-4" />
                      {item.institution}
                    </h4>
                    
                    <div className="inline-block px-3 py-1 bg-secondary text-foreground text-sm font-bold rounded-lg mb-3">
                      {item.score}
                    </div>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
