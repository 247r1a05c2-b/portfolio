import { ExternalLink, Github, Star, Zap } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import { PORTFOLIO_DATA } from '@/data/portfolio-data';
import { motion } from 'framer-motion';

function MajorProjectCard({ project }: { project: typeof PORTFOLIO_DATA.majorProjects[0] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4 }}
      className="group relative flex flex-col justify-between bg-card rounded-3xl p-6 border border-accent/30 hover:border-accent/70 hover:shadow-xl hover:shadow-accent/10 transition-all shadow-sm"
    >
      <div className="absolute -top-3 left-5">
        <span className="inline-flex items-center gap-1 px-3 py-1 bg-accent text-white text-xs font-bold rounded-full shadow-lg shadow-accent/30">
          <Star className="w-3 h-3 fill-white" /> Major Project
        </span>
      </div>

      <div>
        <div className="flex justify-between items-start mb-4 mt-2">
          <div className="p-3 rounded-2xl bg-accent/10">
            <Zap className="w-6 h-6 text-accent" />
          </div>
          <div className="flex gap-3">
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors" title="GitHub Repository">
                <Github className="w-5 h-5" />
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors" title="Live Demo">
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
        <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-5">{project.description}</p>
      </div>

      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tech.map((tech) => (
          <span key={tech} className="px-2.5 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full">
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <AnimatedSection id="projects" className="py-24 bg-secondary-bg/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {PORTFOLIO_DATA.majorProjects.map((project) => (
            <MajorProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
