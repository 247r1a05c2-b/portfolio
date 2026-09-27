import { useState } from 'react';
import { Award } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import { PORTFOLIO_DATA } from '@/data/portfolio-data';
import { motion, AnimatePresence } from 'framer-motion';

export function Certificates() {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', ...Array.from(new Set(PORTFOLIO_DATA.certifications.map(c => c.category)))];
  
  const filteredCerts = filter === 'All' 
    ? PORTFOLIO_DATA.certifications 
    : PORTFOLIO_DATA.certifications.filter(c => c.category === filter);

  return (
    <AnimatedSection id="certificates" className="py-24 bg-secondary-bg/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Licenses & <span className="text-gradient">Certifications</span></h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat
                  ? 'bg-foreground text-background'
                  : 'bg-card border border-border text-muted-foreground hover:border-foreground/30 hover:text-foreground'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredCerts.map((cert) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={cert.id}
                className="bg-card p-6 rounded-2xl border border-border hover:border-highlight/50 transition-colors group flex flex-col text-center shadow-sm hover:shadow-lg"
              >
                <div className="w-16 h-16 mx-auto bg-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Award className="w-8 h-8 text-highlight" />
                </div>
                
                <h3 className="font-bold text-lg mb-2 leading-tight">{cert.name}</h3>
                <p className="text-muted-foreground text-sm font-medium mb-1">{cert.issuer}</p>
                <p className="text-xs text-muted-foreground mb-4">Issued: {cert.year}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
