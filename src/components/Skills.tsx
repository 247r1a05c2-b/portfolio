import { useState } from 'react';
import { AnimatedSection } from './AnimatedSection';
import { PORTFOLIO_DATA } from '@/data/portfolio-data';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';

export function Skills() {
  const [activeTab, setActiveTab] = useState(PORTFOLIO_DATA.skills[0].category);

  return (
    <AnimatedSection id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent mb-3">Technical Toolkit</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Technologies I have used across academic, personal and internship projects.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {PORTFOLIO_DATA.skills.map((skillGroup) => (
            <button
              key={skillGroup.category}
              onClick={() => setActiveTab(skillGroup.category)}
              className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all border ${
                activeTab === skillGroup.category
                  ? 'bg-accent text-white border-accent shadow-lg shadow-accent/20'
                  : 'bg-card text-muted-foreground border-border hover:border-accent/40 hover:text-foreground'
              }`}
            >
              {skillGroup.category}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
          >
            {PORTFOLIO_DATA.skills.find((g) => g.category === activeTab)?.items.map((skill, idx) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.04 }}
                className="group flex items-center gap-3 p-4 rounded-2xl bg-card border border-border hover:border-accent/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/5 transition-all"
              >
                <span className="w-8 h-8 rounded-lg bg-accent/10 text-accent flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4" />
                </span>
                <span className="font-semibold text-sm leading-tight">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </AnimatedSection>
  );
}
