import { useState, useEffect } from 'react';

export interface LeetCodeStats {
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  totalEasy: number;
  totalMedium: number;
  totalHard: number;
  acceptanceRate: number;
  ranking: number;
  status: 'success' | 'fallback';
}

// Correct fallback — your real count as of July 2026
const FALLBACK: LeetCodeStats = {
  totalSolved: 48,
  easySolved: 0,
  mediumSolved: 0,
  hardSolved: 0,
  totalEasy: 0,
  totalMedium: 0,
  totalHard: 0,
  acceptanceRate: 0,
  ranking: 0,
  status: 'fallback',
};

async function tryFetch(url: string, timeoutMs = 7000): Promise<Response> {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    const res = await fetch(url, { signal: ctrl.signal });
    clearTimeout(timer);
    return res;
  } catch (e) {
    clearTimeout(timer);
    throw e;
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

      // ── API 1: alfa-leetcode-api (most reliable CORS-open proxy) ──
      try {
        const res = await tryFetch(
          `https://alfa-leetcode-api.onrender.com/userProfile/${username}`
        );
        if (res.ok) {
          const d = await res.json();
          if (d && typeof d.totalSolved === 'number') {
            setStats({
              totalSolved:   d.totalSolved   ?? 0,
              easySolved:    d.easySolved    ?? 0,
              mediumSolved:  d.mediumSolved  ?? 0,
              hardSolved:    d.hardSolved    ?? 0,
              totalEasy:     d.totalEasy     ?? 0,
              totalMedium:   d.totalMedium   ?? 0,
              totalHard:     d.totalHard     ?? 0,
              acceptanceRate: parseFloat((d.acceptanceRate ?? 0).toFixed(1)),
              ranking:       d.ranking       ?? 0,
              status: 'success',
            });
            setError(null);
            setIsLoading(false);
            return;
          }
        }
      } catch (_) { /* fall through */ }

      // ── API 2: faisalshohag vercel proxy ──
      try {
        const res = await tryFetch(
          `https://leetcode-api-faisalshohag.vercel.app/?username=${username}`
        );
        if (res.ok) {
          const d = await res.json();
          if (d && typeof d.totalSolved === 'number') {
            setStats({
              totalSolved:   d.totalSolved   ?? 0,
              easySolved:    d.easySolved    ?? 0,
              mediumSolved:  d.mediumSolved  ?? 0,
              hardSolved:    d.hardSolved    ?? 0,
              totalEasy:     d.totalEasy     ?? 0,
              totalMedium:   d.totalMedium   ?? 0,
              totalHard:     d.totalHard     ?? 0,
              acceptanceRate: parseFloat((d.acceptanceRate ?? 0).toFixed(1)),
              ranking:       d.ranking       ?? 0,
              status: 'success',
            });
            setError(null);
            setIsLoading(false);
            return;
          }
        }
      } catch (_) { /* fall through */ }

      // ── API 3: leetcode-stats-api herokuapp ──
      try {
        const res = await tryFetch(
          `https://leetcode-stats-api.herokuapp.com/${username}`
        );
        if (res.ok) {
          const d = await res.json();
          if (d && d.status !== 'error' && typeof d.totalSolved === 'number') {
            setStats({
              totalSolved:   d.totalSolved   ?? 0,
              easySolved:    d.easySolved    ?? 0,
              mediumSolved:  d.mediumSolved  ?? 0,
              hardSolved:    d.hardSolved    ?? 0,
              totalEasy:     d.totalEasy     ?? 0,
              totalMedium:   d.totalMedium   ?? 0,
              totalHard:     d.totalHard     ?? 0,
              acceptanceRate: parseFloat((d.acceptanceRate ?? 0).toFixed(1)),
              ranking:       d.ranking       ?? 0,
              status: 'success',
            });
            setError(null);
            setIsLoading(false);
            return;
          }
        }
      } catch (_) { /* fall through */ }

      // ── All APIs failed — use your real hardcoded stats ──
      setStats(FALLBACK);
      setError('Could not reach LeetCode APIs — showing your saved stats.');
      setIsLoading(false);
    }

    fetchStats();
  }, [username]);

  return { stats, isLoading, error };
}
