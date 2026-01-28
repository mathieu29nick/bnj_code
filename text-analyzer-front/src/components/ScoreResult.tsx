import { Card, CardContent, Typography } from '@mui/material';

interface Props {
  score: number | null;
}

export default function ScoreResult({ score }: Props) {
  if (score === null) return null;

  return (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Typography variant="h6">Score de conformité</Typography>
        <Typography variant="h4" color="primary">
          {score} / 100
        </Typography>
      </CardContent>
    </Card>
  );
}