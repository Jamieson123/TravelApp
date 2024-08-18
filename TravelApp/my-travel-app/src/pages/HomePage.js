import React from 'react';
import { Box, Typography } from '@mui/material';
import LocationCard from '../components/LocationCard';
import WeatherCard from '../components/WeatherCard';
import NavigationBar from '../components/NavigationBar';

const HomePage = () => {
  return (
    <Box sx={{ paddingBottom: '56px' }}> {/* Padding for the bottom navigation */}
      <Typography variant="h5" sx={{ padding: 2 }}>
        Discover Your Next Destination
      </Typography>
      <WeatherCard location="New York" />
      <Box sx={{ display: 'flex', overflowX: 'scroll', padding: 2 }}>
        <LocationCard title="Central Park" image="central-park.jpg" />
        <LocationCard title="Empire State Building" image="empire-state.jpg" />
        {/* Add more LocationCards */}
      </Box>
      {/* Add more content as needed */}
      <NavigationBar />
    </Box>
  );
};

export default HomePage;

