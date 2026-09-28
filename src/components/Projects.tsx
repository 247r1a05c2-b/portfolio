import { ExternalLink, Github, Star, ArrowUpRight, Code2 } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import { PORTFOLIO_DATA } from '@/data/portfolio-data';
import { motion } from 'framer-motion';
import { useState } from 'react';

const focusByCategory: Record<string, string> = {
  'GenAI / RAG': 'Retrieval, document intelligence & grounded generation',
  'ML / AI': 'Model development, preprocessing & applied prediction',
  'Computer Vision': 'Real-time visual recognition & automation',
};

function ProjectCard({ project }: { project: any }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4 }}
      className="group relative flex flex-col bg-card rounded-3xl p-6 border border-border hover:border-accent/60 hover:shadow-xl hover:shadow-accent/10 transition-all"
    >
      <div className="absolute -top-3 left-5">
        <span className="inline-flex items-center gap-1 px-3 py-1 bg-accent text-white text-xs font-bold rounded-full shadow-lg shadow-accent/30">
          <Star className="w-3 h-3 fill-white" /> Major Project
        </span>
      </div>

      <div className="flex items-start justify-between gap-4 mt-2 mb-5">
        <div className="w-11 h-11 rounded-2xl bg-accent/10 text-accent flex items-center justify-center">
          <Code2 className="w-5 h-5" />
        </div>
        <div className="flex gap-2">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} GitHub repository`} className="p-2 rounded-lg bg-secondary text-muted-foreground hover:text-foreground hover:bg-accent/10 transition-colors">
              <Github className="w-5 h-5" />
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} live demo`} className="p-2 rounded-lg bg-secondary text-muted-foreground hover:text-accent hover:bg-accent/10 transition-colors">
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>

      <div className="flex-1">
        <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">{project.category}</p>
        <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">{project.title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-5">{project.description}</p>

        <div className="rounded-2xl bg-secondary/60 border border-border/60 p-4 mb-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Engineering Focus</p>
          <p className="text-sm font-medium">{focusByCategory[project.category] || 'End-to-end software development'}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech: string) => (
          <span key={tech} className="px-2.5 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full">{tech}</span>
        ))}
      </div>
    </motion.article>
  );
}

export function Projects() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...Array.from(new Set(PORTFOLIO_DATA.majorProjects.map(p => p.category)))];
  const projects = filter === 'All' ? PORTFOLIO_DATA.majorProjects : PORTFOLIO_DATA.majorProjects.filter(p => p.category === filter);

  return (
    <AnimatedSection id="projects" className="py-24 bg-secondary-bg/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent mb-3">Selected Work</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Major <span className="text-gradient">Projects</span></h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Projects that demonstrate practical work across AI/ML, GenAI, computer vision and software development.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all border ${
                filter === category
                  ? 'bg-accent text-white border-accent'
                  : 'bg-card text-muted-foreground border-border hover:border-accent/40 hover:text-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map(project => <ProjectCard key={project.id} project={project} />)}
        </div>

        <div className="mt-10 text-center">
          <a
            href={PORTFOLIO_DATA.identity.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
          >
            Explore more on GitHub
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
}
