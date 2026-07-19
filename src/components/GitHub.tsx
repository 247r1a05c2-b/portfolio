import { Users, BookOpen, Star, GitFork, Activity } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import { useGitHub } from '@/hooks/useGitHub';
import { PORTFOLIO_DATA } from '@/data/portfolio-data';

export function GitHub() {
  const { user, repos, isLoading, error } = useGitHub(PORTFOLIO_DATA.identity.githubUsername);

  return (
    <AnimatedSection id="github" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">GitHub <span className="text-gradient">Activity</span></h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </div>

        {isLoading ? (
          <div className="flex justify-center py-20">
            <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : error ? (
          <div className="text-center py-10 bg-destructive/10 rounded-2xl text-destructive max-w-2xl mx-auto">
            <p>Failed to load GitHub data.</p>
            <p className="text-sm opacity-80 mt-2">{error}</p>
          </div>
        ) : user && (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Profile Card */}
            <div className="lg:col-span-1">
              <div className="glass p-8 rounded-3xl h-full flex flex-col items-center text-center">
                <img 
                  src={user.avatar_url} 
                  alt={user.name || user.login} 
                  className="w-32 h-32 rounded-full border-4 border-card shadow-lg mb-6"
                />
                <h3 className="text-2xl font-bold">{user.name || user.login}</h3>
                <a href={user.html_url} target="_blank" rel="noreferrer" className="text-accent hover:underline mb-4">
                  @{user.login}
                </a>
                <p className="text-muted-foreground mb-8 text-sm">{user.bio}</p>
                
                <div className="grid grid-cols-3 gap-4 w-full">
                  <div className="bg-card p-3 rounded-xl border border-border">
                    <BookOpen className="w-5 h-5 text-accent mx-auto mb-2" />
                    <p className="font-bold">{user.public_repos}</p>
                    <p className="text-xs text-muted-foreground">Repos</p>
                  </div>
                  <div className="bg-card p-3 rounded-xl border border-border">
                    <Users className="w-5 h-5 text-highlight mx-auto mb-2" />
                    <p className="font-bold">{user.followers}</p>
                    <p className="text-xs text-muted-foreground">Followers</p>
                  </div>
                  <div className="bg-card p-3 rounded-xl border border-border">
                    <Activity className="w-5 h-5 text-green-500 mx-auto mb-2" />
                    <p className="font-bold">{user.following}</p>
                    <p className="text-xs text-muted-foreground">Following</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Top Repos */}
            <div className="lg:col-span-2">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" fill="currentColor" />
                Top Repositories
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {repos.map(repo => (
                  <a 
                    key={repo.id} 
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="block p-5 bg-card border border-border rounded-2xl hover:border-accent transition-colors group"
                  >
                    <h4 className="font-bold text-lg mb-2 group-hover:text-accent flex items-center gap-2 truncate">
                      <BookOpen className="w-4 h-4 text-muted-foreground" />
                      {repo.name}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2 min-h-[40px]">
                      {repo.description || 'No description provided.'}
                    </p>
                    <div className="flex items-center justify-between text-xs font-medium">
                      <span className="flex items-center gap-1.5">
                        <span className={`w-2.5 h-2.5 rounded-full ${repo.language === 'Python' ? 'bg-blue-500' : repo.language === 'JavaScript' ? 'bg-yellow-400' : repo.language === 'Java' ? 'bg-orange-500' : 'bg-gray-400'}`} />
                        {repo.language || 'Unknown'}
                      </span>
                      <div className="flex gap-3 text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Star className="w-3.5 h-3.5" /> {repo.stargazers_count}
                        </span>
                        <span className="flex items-center gap-1">
                          <GitFork className="w-3.5 h-3.5" /> {repo.forks_count}
                        </span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </AnimatedSection>
  );
}
