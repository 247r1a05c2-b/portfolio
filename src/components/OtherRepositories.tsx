import { ChevronDown, ExternalLink, Github } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import { useState } from 'react';

const repositories = [
  { name: 'House Price Prediction', description: 'Machine learning project for predicting house prices.', url: 'https://github.com/247r1a05c2-b/House-Price-Predict' },
  { name: 'Student Performance Prediction', description: 'ML project for analyzing and predicting student performance.', url: 'https://github.com/247r1a05c2-b/Student-Performance-Prediction' },
  { name: 'Chat Application', description: 'Python socket-based real-time chat application.', url: 'https://github.com/247r1a05c2-b/chat-application-using-python' },
  { name: 'Faculty Period Allocation System', description: 'Web application for faculty timetable and period allocation.', url: 'https://github.com/247r1a05c2-b/faculty-period-allocation-system' },
  { name: 'ApexPlanet Task 3', description: 'Web development internship task project.', url: 'https://github.com/247r1a05c2-b/ApexPlanet-Task3' },
];

export function OtherRepositories() {
  const [open, setOpen] = useState(false);

  return (
    <AnimatedSection id="github" className="py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <button onClick={() => setOpen(!open)} className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border bg-card hover:border-accent/50 transition-colors font-medium">
            <Github className="w-5 h-5" />
            {open ? 'Hide More Projects' : 'Explore More GitHub Work'}
            <ChevronDown className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} />
          </button>
          <p className="text-sm text-muted-foreground mt-3">A small selection of additional projects beyond the major portfolio case studies.</p>
        </div>

        {open && (
          <div className="grid md:grid-cols-2 gap-5 mt-8">
            {repositories.map(repo => (
              <div key={repo.name} className="bg-card border border-border rounded-2xl p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold">{repo.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{repo.description}</p>
                  </div>
                  <a href={repo.url} target="_blank" rel="noreferrer" aria-label={`Open ${repo.name} GitHub repository`} className="text-muted-foreground hover:text-accent">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </AnimatedSection>
  );
}
