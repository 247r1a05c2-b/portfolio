import { useState } from 'react';
import { ExternalLink, Github, Star, Zap, GitFork, Loader2, ChevronDown, ChevronUp } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import { PORTFOLIO_DATA } from '@/data/portfolio-data';
import { useGitHub, GitHubRepo } from '@/hooks/useGitHub';
import { motion, AnimatePresence } from 'framer-motion';

const LANG_COLOR: Record<string, string> = {
  Python:     'bg-blue-500',
  JavaScript: 'bg-yellow-400',
  TypeScript: 'bg-blue-400',
  Java:       'bg-orange-500',
  C:          'bg-gray-500',
  HTML:       'bg-red-500',
  CSS:        'bg-purple-500',
  PHP:        'bg-indigo-400',
};

function langColor(lang: string | null) {
  return lang ? (LANG_COLOR[lang] ?? 'bg-gray-400') : 'bg-gray-400';
}

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

function GitHubRepoCard({ repo, index }: { repo: GitHubRepo; index: number }) {
  return (
    <motion.a
      href={repo.html_url}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      className="group flex flex-col justify-between bg-card rounded-2xl p-5 border border-border hover:border-highlight/60 hover:shadow-lg hover:shadow-highlight/5 transition-all"
    >
      <div>
        <div className="flex items-start justify-between mb-3">
          <div className="p-2 rounded-xl bg-highlight/10">
            <Github className="w-5 h-5 text-highlight" />
          </div>
          <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-highlight transition-colors" />
        </div>
        <h4 className="font-bold text-base mb-1.5 group-hover:text-highlight transition-colors leading-tight">
          {repo.name.replace(/-/g, ' ').replace(/_/g, ' ')}
        </h4>
        <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2 min-h-[32px]">
          {repo.description || 'No description provided.'}
        </p>
      </div>

      <div className="flex items-center justify-between mt-4 text-xs text-muted-foreground font-medium">
        <span className="flex items-center gap-1.5">
          <span className={`w-2.5 h-2.5 rounded-full ${langColor(repo.language)}`} />
          {repo.language || 'Unknown'}
        </span>
        <div className="flex gap-3">
          <span className="flex items-center gap-1"><Star className="w-3 h-3" /> {repo.stargazers_count}</span>
          <span className="flex items-center gap-1"><GitFork className="w-3 h-3" /> {repo.forks_count}</span>
        </div>
      </div>
    </motion.a>
  );
}

export function Projects() {
  const [otherExpanded, setOtherExpanded] = useState(false);
  const { repos, isLoading, error } = useGitHub(PORTFOLIO_DATA.identity.githubUsername);

  // Exclude repos already featured as major projects
  const majorGithubUrls = new Set(
    PORTFOLIO_DATA.majorProjects
      .map(p => p.github?.replace(/\/$/, '').toLowerCase())
      .filter(Boolean)
  );
  const otherRepos = repos.filter(
    r => !majorGithubUrls.has(r.html_url.replace(/\/$/, '').toLowerCase())
  );

  return (
    <AnimatedSection id="projects" className="py-24 bg-secondary-bg/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </div>

        {/* ── Major Projects ── */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-border/60" />
            <h3 className="flex items-center gap-2 text-lg font-bold text-accent px-4">
              <Star className="w-5 h-5 fill-accent" /> Major Projects
            </h3>
            <div className="h-px flex-1 bg-border/60" />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {PORTFOLIO_DATA.majorProjects.map((project) => (
              <MajorProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        {/* ── Other Projects (live from GitHub) ── */}
        <div>
          {/* Header with toggle */}
          <div className="flex items-center gap-3 mb-0">
            <div className="h-px flex-1 bg-border/60" />
            <button
              onClick={() => setOtherExpanded(v => !v)}
              className="flex items-center gap-2 text-lg font-bold text-highlight px-4 py-1.5 rounded-xl hover:bg-highlight/10 transition-colors group"
            >
              <Github className="w-5 h-5" />
              Other Projects
              {!isLoading && otherRepos.length > 0 && (
                <span className="text-xs font-normal text-muted-foreground">
                  ({otherRepos.length})
                </span>
              )}
              <motion.span
                animate={{ rotate: otherExpanded ? 0 : 180 }}
                transition={{ duration: 0.25 }}
                className="ml-1"
              >
                <ChevronUp className="w-4 h-4 text-muted-foreground group-hover:text-highlight transition-colors" />
              </motion.span>
            </button>
            <div className="h-px flex-1 bg-border/60" />
          </div>

          <AnimatePresence initial={false}>
            {otherExpanded && (
              <motion.div
                key="other-projects"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                style={{ overflow: 'hidden' }}
              >
                <div className="pt-8">
                  {isLoading ? (
                    <div className="flex items-center justify-center py-16 gap-3 text-muted-foreground">
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Loading repositories from GitHub…</span>
                    </div>
                  ) : error ? (
                    <div className="text-center py-10 text-sm text-muted-foreground bg-card rounded-2xl border border-border">
                      Could not load GitHub repositories. Check your connection or try again later.
                    </div>
                  ) : otherRepos.length === 0 ? (
                    <div className="text-center py-10 text-sm text-muted-foreground">
                      No additional repositories found.
                    </div>
                  ) : (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                      {otherRepos.map((repo, i) => (
                        <GitHubRepoCard key={repo.id} repo={repo} index={i} />
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </AnimatedSection>
  );
}
