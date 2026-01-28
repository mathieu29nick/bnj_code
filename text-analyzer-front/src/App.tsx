import { useEffect, useState } from 'react';
import { Container, Typography } from '@mui/material';
import { getHistory } from './api/analysis.api';
import AnalyzerForm from './components/AnalyzerForm';
import ScoreResult from './components/ScoreResult';
import HistoryList from './components/HistoryList';
import { HistoryItem } from './types/analysis';

function App() {
  const [score, setScore] = useState<number | null>(null);
  const [history, setHistory] = useState<HistoryItem[]>([]);

  const loadHistory = async () => {
    const data = await getHistory();
    setHistory(data);
  };

  useEffect(() => {
    loadHistory();
  }, []);

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Text Analyzer
      </Typography>

      <AnalyzerForm onScore={setScore} onAnalyzed={loadHistory} />
      <ScoreResult score={score} />
      <HistoryList items={history} />
    </Container>
  );
}

export default App;
