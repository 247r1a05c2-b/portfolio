import { Briefcase, Calendar, Globe, ChevronRight } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import { PORTFOLIO_DATA } from '@/data/portfolio-data';
import { motion } from 'framer-motion';

export function Experience() {
  return (
    <AnimatedSection id="experience" className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-highlight to-accent/20 rounded-full" />

          <div className="space-y-8">
            {PORTFOLIO_DATA.internships.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className="relative pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 top-5 w-5 h-5 rounded-full bg-background border-2 border-accent flex items-center justify-center -translate-x-1/2 shadow-[0_0_10px_rgba(56,189,248,0.4)]">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                </div>

                <div className="group glass p-6 rounded-2xl border border-border hover:border-accent/50 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/5">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-xl font-bold group-hover:text-accent transition-colors">
                        {exp.company}
                      </h3>
                      <p className="text-accent font-semibold text-sm mt-0.5">{exp.role}</p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full bg-highlight/10 text-highlight border border-highlight/20">
                      {exp.domain}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-accent/70" />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Globe className="w-4 h-4 text-accent/70" />
                      {exp.type}
                    </span>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
