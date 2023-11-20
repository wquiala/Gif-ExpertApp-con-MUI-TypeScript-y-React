import { getGif } from '@/helpers/getGifs';
import { The480_WStill } from '@/interfaces/gif';
import React, { useEffect, useState } from 'react';
import { GiftCard } from '../GiftCard';
import { useFetchGifs } from '@/hooks/useFetchGifs';
import { Box, Divider, Grid, LinearProgress, Typography } from '@mui/material';

interface IGifGridProps {
  category: string;
}

export interface Images {
  id: string;
  title: string;
  url: The480_WStill;
}

export const GifGrid: React.FC<IGifGridProps> = ({ category }) => {
  const { data, loading } = useFetchGifs(category);

  return (
    <Box>
      {loading ? (
        <Box sx={{ width: '100%' }}>
          <LinearProgress />
        </Box>
      ) : (
        <Box>
          <Divider sx={{ marginBottom: 2 }}>
            <Typography variant="h5">{category}</Typography>
          </Divider>
          <Grid margin={0} container spacing={2} gap={2}>
            {data.map((i) => (
              <GiftCard key={i.id} image={i} />
            ))}
          </Grid>
        </Box>
      )}
    </Box>
  );
};
