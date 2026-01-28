import { useState } from 'react';
import { Button, TextField, Box, Alert } from '@mui/material';
import { analyzeText } from '../api/analysis.api';

interface Props {
  onAnalyzed: () => void;
  onScore: (score: number) => void;
}

export default function AnalyzerForm({ onAnalyzed, onScore }: Props) {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAnalyze = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await analyzeText(text);
      onScore(res.score);
      onAnalyzed();
      setText('');
    } catch {
      setError('Erreur lors de l\'analyse');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box mb={3}>
      <TextField
        label="Texte à analyser"
        multiline
        rows={4}
        fullWidth
        value={text}
        onChange={e => setText(e.target.value)}
      />

      <Button
        variant="contained"
        sx={{ mt: 2 }}
        disabled={!text || loading}
        onClick={handleAnalyze}
      >
        {loading ? 'Analyse...' : 'Analyser'}
      </Button>

      {error && (
        <Alert severity="error" sx={{ mt: 2 }}>
          {error}
        </Alert>
      )}
    </Box>
  );
}