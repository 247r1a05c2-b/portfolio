import { Code2, Trophy, Flame } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import { useLeetCode } from '@/hooks/useLeetCode';
import { PORTFOLIO_DATA } from '@/data/portfolio-data';

export function LeetCode() {
  const { stats, isLoading, error } = useLeetCode(PORTFOLIO_DATA.identity.leetcodeUsername);

  const CircleProgress = ({ value, total, color, label }: { value: number | null, total: number | null, color: string, label: string }) => {
    const percentage = total && value !== null ? (value / total) * 100 : 0;
    const radius = 35;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
      <div className="flex flex-col items-center">
        <div className="relative w-24 h-24 flex items-center justify-center">
          {/* Background circle */}
          <svg className="absolute inset-0 w-full h-full transform -rotate-90">
            <circle
              cx="48"
              cy="48"
              r={radius}
              stroke="currentColor"
              strokeWidth="6"
              fill="transparent"
              className="text-secondary"
            />
            {/* Progress circle */}
            <circle
              cx="48"
              cy="48"
              r={radius}
              stroke={color}
              strokeWidth="6"
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-1000 ease-out"
            />
          </svg>
          <div className="flex flex-col items-center text-center leading-none">
            <span className="font-bold text-lg">{value === null ? '—' : value}</span>
            <span className="text-[10px] text-muted-foreground">{total === null ? '' : `/${total}`}</span>
          </div>
        </div>
        <span className="mt-2 text-sm font-medium">{label}</span>
      </div>
    );
  };

  return (
    <AnimatedSection id="leetcode" className="py-24 bg-secondary-bg/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Problem Solving <span className="text-gradient">LeetCode</span></h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <p className="text-center text-muted-foreground max-w-2xl mx-auto -mt-10 mb-10">Regular DSA practice with Java, focusing on algorithmic problem solving and core data structures.</p>

        {isLoading ? (
          <div className="flex justify-center py-20">
            <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto glass rounded-3xl p-8 relative overflow-hidden">
            {/* LeetCode logo watermark */}
            <div className="absolute -bottom-10 -right-10 opacity-5 pointer-events-none">
              <Code2 className="w-64 h-64" />
            </div>

            {error && <div className="mb-6 rounded-xl border border-yellow-500/20 bg-yellow-500/5 px-4 py-3 text-sm text-yellow-600 dark:text-yellow-400">{error}</div>}

            <div className="flex flex-col md:flex-row items-center gap-12">
              {/* Left Column: Total & Profile */}
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center justify-center p-4 bg-orange-500/10 text-orange-500 rounded-2xl mb-6">
                  <Code2 className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold mb-2">{stats ? stats.totalSolved : "—"}</h3>
                <p className="text-muted-foreground font-medium mb-6">Problems Solved</p>
                
                <div className="bg-card p-4 rounded-xl border border-border inline-flex items-center gap-3">
                  <Trophy className="w-5 h-5 text-yellow-500" />
                  <div>
                    <p className="font-bold">{stats?.ranking ? stats.ranking.toLocaleString() : 'N/A'}</p>
                    <p className="text-xs text-muted-foreground">Ranking</p>
                  </div>
                </div>
                
                <div className="mt-8">
                  <a 
                    href={`https://leetcode.com/${PORTFOLIO_DATA.identity.leetcodeUsername}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 font-medium transition-colors"
                  >
                    View LeetCode Profile
                    <Flame className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Right Column: Difficulty Breakdown */}
              <div className="flex-1 w-full bg-card/50 p-6 rounded-2xl border border-border/50">
                <h4 className="font-bold mb-6 text-center">Difficulty Breakdown</h4>
                <div className="flex justify-around items-center">
                  <CircleProgress 
                    value={stats ? stats.easySolved : null} 
                    total={stats ? stats.totalEasy : null} 
                    color="#10B981"
                    label="Easy" 
                  />
                  <CircleProgress 
                    value={stats ? stats.mediumSolved : null} 
                    total={stats ? stats.totalMedium : null} 
                    color="#F59E0B"
                    label="Medium" 
                  />
                  <CircleProgress 
                    value={stats ? stats.hardSolved : null} 
                    total={stats ? stats.totalHard : null} 
                    color="#EF4444"
                    label="Hard" 
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </AnimatedSection>
  );
}
