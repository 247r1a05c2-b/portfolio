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
    if (!username) return;

    async function fetchStats() {
      setIsLoading(true);
      setError(null);

      const endpoints = [
        `https://alfa-leetcode-api.onrender.com/${username}`,
        `https://leetcode-stats.tashif.codes/${username}/stats`,
      ];

      for (const endpoint of endpoints) {
        try {
          const response = await tryFetch(endpoint);
          if (!response.ok) continue;
          const data = await response.json();
          const parsed = parseStats(data);
          if (parsed) {
            setStats(parsed);
            try { localStorage.setItem('leetcode-stats', JSON.stringify(parsed)); } catch (_) {}
            setIsLoading(false);
            return;
          }
        } catch (_) {}
      }

      try {
        const cached = localStorage.getItem('leetcode-stats');
        if (cached) {
          setStats(JSON.parse(cached));
          setError('Live LeetCode statistics are temporarily unavailable. Showing the last saved result.');
          setIsLoading(false);
          return;
        }
      } catch (_) {}

      setStats({
        totalSolved: 0,
        easySolved: 0,
        mediumSolved: 0,
        hardSolved: 0,
        totalEasy: 0,
        totalMedium: 0,
        totalHard: 0,
        ranking: null,
        status: 'unavailable',
      });
      setError('Live LeetCode statistics are temporarily unavailable.');
      setIsLoading(false);
    }

    fetchStats();
  }, [username]);

  return { stats, isLoading, error };
}
