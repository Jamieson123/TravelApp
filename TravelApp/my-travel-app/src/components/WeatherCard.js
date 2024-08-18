import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import axios from 'axios';

const WeatherCard = ({ location }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=YOUR_REAL_API_KEY`
        );
        setWeather(response.data);
      } catch (error) {
        console.error("Error fetching weather data", error);
      }
    };

    fetchWeather();
  }, [location]);

  if (!weather) return <p>Loading...</p>;

  return (
    <Card sx={{ margin: 2 }}>
      <CardContent>
        <Typography variant="h6">{`Weather in ${weather.name}`}</Typography>
        <Typography>{weather.weather[0].description}</Typography>
        <Typography>{`Temp: ${weather.main.temp}°C`}</Typography>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
