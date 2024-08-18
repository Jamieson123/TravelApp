import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';

const LocationCard = ({ title, image }) => {
  return (
    <Card sx={{ minWidth: 150, margin: 1 }}>
      <CardMedia
        component="img"
        height="100"
        image={image} // Replace with the actual image path or URL
        alt={title}
      />
      <CardContent>
        <Typography variant="body1">{title}</Typography>
      </CardContent>
    </Card>
  );
};

export default LocationCard;

