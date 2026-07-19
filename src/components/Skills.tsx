import { useState } from 'react';
import { AnimatedSection } from './AnimatedSection';
import { PORTFOLIO_DATA } from '@/data/portfolio-data';
import { motion, AnimatePresence } from 'framer-motion';

export function Skills() {
  const [activeTab, setActiveTab] = useState(PORTFOLIO_DATA.skills[0].category);

  return (
    <AnimatedSection id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          <p className="mt-4 text-muted-foreground">Hover over a skill to see my proficiency level</p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {PORTFOLIO_DATA.skills.map((skillGroup) => (
            <button
              key={skillGroup.category}
              onClick={() => setActiveTab(skillGroup.category)}
              className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all ${
                activeTab === skillGroup.category
                  ? 'bg-accent text-white shadow-lg shadow-accent/25'
                  : 'bg-secondary text-foreground hover:bg-secondary/80 border border-border'
              }`}
            >
              {skillGroup.category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          >
            {PORTFOLIO_DATA.skills
              .find((g) => g.category === activeTab)
              ?.items.map((skill, idx) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  className="group relative flex flex-col items-center justify-center gap-3 p-5 rounded-2xl glass border border-border hover:border-accent/50 cursor-default select-none transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/10"
                >
                  {/* Skill name */}
                  <span className="font-semibold text-sm text-center leading-tight">{skill.name}</span>

                  {/* Proficiency ring — revealed on hover */}
                  <div className="relative w-14 h-14 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-14 h-14 -rotate-90" viewBox="0 0 56 56">
                      <circle
                        cx="28" cy="28" r="22"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="4"
                        className="text-border"
                      />
                      <motion.circle
                        cx="28" cy="28" r="22"
                        fill="none"
                        stroke="url(#skillGrad)"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeDasharray={`${2 * Math.PI * 22}`}
                        initial={{ strokeDashoffset: 2 * Math.PI * 22 }}
                        animate={{ strokeDashoffset: 2 * Math.PI * 22 * (1 - skill.proficiency / 100) }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                      />
                      <defs>
                        <linearGradient id="skillGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#38bdf8" />
                          <stop offset="100%" stopColor="#a855f7" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-accent">
                      {skill.proficiency}%
                    </span>
                  </div>

                  {/* Default dot indicator (shown when not hovered) */}
                  <div className="w-2 h-2 rounded-full bg-accent/60 group-hover:opacity-0 transition-opacity absolute bottom-4" />

                  {/* Tooltip on hover */}
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-card border border-border rounded-lg px-3 py-1.5 text-xs font-semibold text-accent shadow-lg pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                    Proficiency: {skill.proficiency}%
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-border" />
                  </div>
                </motion.div>
              ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </AnimatedSection>
  );
}
