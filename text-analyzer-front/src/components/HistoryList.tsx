import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Divider,
  Pagination,
  Box,
} from '@mui/material';
import { useState } from 'react';
import { HistoryItem } from '../types/analysis';

interface Props {
  items: HistoryItem[];
}

const ITEMS_PER_PAGE = 2;

export default function HistoryList({ items }: Props) {
  const [page, setPage] = useState(1);

  if (!items.length) {
    return <Typography>Aucun historique</Typography>;
  }

  const pageCount = Math.ceil(items.length / ITEMS_PER_PAGE);

  const paginatedItems = items.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE,
  );

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Historique
      </Typography>

      <List>
        {paginatedItems.map(item => (
          <div key={item.id}>
            <ListItem alignItems="flex-start">
              <ListItemText
                primary={`Score : ${item.score}`}
                secondary={
                  <>
                    <Typography component="span" variant="body2">
                      {item.text}
                    </Typography>
                    <br />
                    <Typography variant="caption">
                      {new Date(item.createdAt).toLocaleString()}
                    </Typography>
                  </>
                }
              />
            </ListItem>
            <Divider />
          </div>
        ))}
      </List>

      {pageCount > 1 && (
        <Box display="flex" justifyContent="center" mt={2}>
          <Pagination
            count={pageCount}
            page={page}
            onChange={(_, value) => setPage(value)}
            color="primary"
          />
        </Box>
      )}
    </>
  );
}