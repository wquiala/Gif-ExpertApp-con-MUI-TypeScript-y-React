import { AppBar, Box, Toolbar } from '@mui/material';
import React, { useState } from 'react';
import { AddCategories } from '../AddCategories';
import { GifGrid } from '../GifGrid';

interface IGiftExpertAppProps {
  children?: React.ReactNode;
}

export const GiftExpertApp: React.FC<IGiftExpertAppProps> = (props) => {
  const [categories, setCategories] = useState<string[]>(['ONE PUNCH']);
  const onNewCategory = (category: string) => {
    setCategories([...categories, category]);
  };
  return (
    <Box>
      <AppBar sx={{ height: 58 }}>
        <Toolbar>Gift Expert App with React, Typescript y Material UI</Toolbar>
      </AppBar>
      <AddCategories onNewCategory={onNewCategory} />
      <Box>
        {categories.map((cat) => (
          <GifGrid key={cat} category={cat} />
        ))}
      </Box>
    </Box>
  );
};
