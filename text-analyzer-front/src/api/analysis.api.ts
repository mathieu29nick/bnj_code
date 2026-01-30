const API_URL = process.env.REACT_APP_API_URL!;

export const analyzeText = async (text: string) => {
  const res = await fetch(`${API_URL}/analyze`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text }),
  });

  if (!res.ok) {
    throw new Error('Analyze failed');
  }

  return res.json();
};

export const getHistory = async () => {
  const res = await fetch(`${API_URL}/history`);

  if (!res.ok) {
    throw new Error('History fetch failed');
  }

  return res.json();
};
