export default async function handler(req: any, res: any) {
  const username = String(req.query?.username || '').trim();

  if (!username) {
    return res.status(400).json({ error: 'LeetCode username is required.' });
  }

  const query = `
    query userProfilePublicProfile($username: String!) {
      allQuestionsCount {
        difficulty
        count
      }
      matchedUser(username: $username) {
        username
        profile {
          ranking
        }
        submitStats {
          acSubmissionNum {
            difficulty
            count
            submissions
          }
        }
      }
    }
  `;

  try {
    const response = await fetch('https://leetcode.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Origin': 'https://leetcode.com',
        'Referer': 'https://leetcode.com/',
        'User-Agent': 'Mozilla/5.0',
      },
      body: JSON.stringify({
        query,
        variables: { username },
      }),
    });

    if (!response.ok) {
      return res.status(502).json({ error: 'LeetCode did not return a successful response.' });
    }

    const result = await response.json();

    if (result?.errors?.length) {
      return res.status(502).json({ error: 'LeetCode returned an API error.' });
    }

    const user = result?.data?.matchedUser;

    if (!user) {
      return res.status(404).json({ error: 'LeetCode user not found.' });
    }

    const submitStats = user.submitStats?.acSubmissionNum || [];
    const allQuestionsCount = result?.data?.allQuestionsCount || [];

    const solved = (difficulty: string) =>
      submitStats.find((item: any) => item.difficulty === difficulty)?.count || 0;

    const total = (difficulty: string) =>
      allQuestionsCount.find((item: any) => item.difficulty === difficulty)?.count || 0;

    return res
      .status(200)
      .setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=600')
      .json({
        totalSolved: solved('All'),
        easySolved: solved('Easy'),
        mediumSolved: solved('Medium'),
        hardSolved: solved('Hard'),
        totalEasy: total('Easy'),
        totalMedium: total('Medium'),
        totalHard: total('Hard'),
        ranking: user.profile?.ranking ?? null,
      });
  } catch {
    return res.status(500).json({ error: 'Unable to fetch LeetCode statistics right now.' });
  }
}
