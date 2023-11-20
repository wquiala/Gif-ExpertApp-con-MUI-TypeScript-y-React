import {
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from '@mui/material';
import React from 'react';
import { Images } from '../GifGrid';

export interface IGiftCardProps {
  image: Images;
}

export const GiftCard: React.FC<IGiftCardProps> = ({ image }) => {
  return (
    <Card sx={{ width: 285 }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={image.url.url} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {image.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
