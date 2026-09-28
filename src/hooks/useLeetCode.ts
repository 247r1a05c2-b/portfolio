import { useEffect, useState } from 'react';

export interface LeetCodeStats {
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  totalEasy: number;
  totalMedium: number;
  totalHard: number;
  ranking: number | null;
  status: 'success' | 'unavailable';
}

function parseNumber(value: unknown): number {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

function parseStats(data: any): LeetCodeStats | null {
  if (typeof data?.totalSolved === 'number') {
    return {
      totalSolved: parseNumber(data.totalSolved),
      easySolved: parseNumber(data.easySolved),
      mediumSolved: parseNumber(data.mediumSolved),
      hardSolved: parseNumber(data.hardSolved),
      totalEasy: parseNumber(data.totalEasy),
      totalMedium: parseNumber(data.totalMedium),
      totalHard: parseNumber(data.totalHard),
      ranking: data.ranking === null ? null : parseNumber(data.ranking),
      status: 'success',
    };
  }

  const source = data?.data?.matchedUser ?? data?.matchedUser ?? data;
  const submitStats = source?.submitStats?.acSubmissionNum ?? [];

  const byDifficulty = new Map(
    submitStats.map((item: any) => [String(item.difficulty).toLowerCase(), parseNumber(item.count)])
  );

  const totalSolved = parseNumber(
    data?.totalSolved ??
    source?.submitStats?.acSubmissionNum?.find((item: any) => item.difficulty === 'All')?.count
  );

  if (!source || !submitStats.length) return null;

  const ranking = data?.ranking ?? source?.profile?.ranking ?? source?.ranking ?? null;

  return {
    totalSolved,
    easySolved: parseNumber(data?.easySolved ?? byDifficulty.get('easy')),
    mediumSolved: parseNumber(data?.mediumSolved ?? byDifficulty.get('medium')),
    hardSolved: parseNumber(data?.hardSolved ?? byDifficulty.get('hard')),
    totalEasy: parseNumber(data?.totalEasy ?? data?.allQuestionsCount?.find?.((x: any) => x.difficulty === 'Easy')?.count),
    totalMedium: parseNumber(data?.totalMedium ?? data?.allQuestionsCount?.find?.((x: any) => x.difficulty === 'Medium')?.count),
    totalHard: parseNumber(data?.totalHard ?? data?.allQuestionsCount?.find?.((x: any) => x.difficulty === 'Hard')?.count),
    ranking: ranking === null ? null : parseNumber(ranking),
    status: 'success',
  };
}

async function tryFetch(url: string, timeoutMs = 9000): Promise<Response> {
  const controller = new AbortController();
  const timer = window.setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(url);
    window.clearTimeout(timer);
    return response;
  } catch (error) {
    window.clearTimeout(timer);
    throw error;
  }
}

export function useLeetCode(username: string) {
  const [stats, setStats] = useState<LeetCodeStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!username) {
      setIsLoading(false);
      return;
    }

    async function fetchStats() {
      setIsLoading(true);
      setError(null);

      try {
        const response = await tryFetch(`/api/leetcode?username=${encodeURIComponent(username)}`);

        if (!response.ok) {
          const data = await response.json().catch(() => null);
          throw new Error(data?.error || 'Unable to load LeetCode statistics.');
        }

        const data = await response.json();
        const parsed = parseStats(data);

        if (!parsed) {
          throw new Error('LeetCode statistics returned an unexpected response.');
        }

        setStats(parsed);
        try {
          localStorage.setItem('leetcode-stats', JSON.stringify(parsed));
        } catch (_) {}
        setIsLoading(false);
        return;
      } catch (_) {
        try {
          const cached = localStorage.getItem('leetcode-stats');

          if (cached) {
            const parsedCache = JSON.parse(cached);

            if (parsedCache?.status === 'success' && parsedCache?.totalSolved > 0) {
              setStats(parsedCache);
              setError('Live LeetCode statistics are temporarily unavailable. Showing the last saved result.');
              setIsLoading(false);
              return;
            }
          }
        } catch (_) {}
      }

      setStats(null);
      setError('Live LeetCode statistics are temporarily unavailable. Please refresh and try again.');
      setIsLoading(false);
    }

    fetchStats();
  }, [username]);

  return { stats, isLoading, error };
}
