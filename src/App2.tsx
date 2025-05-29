'use client';

import React, { useState } from 'react';
import { Container, Button, TextField, Typography, CircularProgress } from '@mui/material';
import { WeatherCard } from './components/WeatherCard';

interface WeatherData {
  name: string;
  main: { temp: number };
  weather: { description: string; icon: string }[];
}

const App2: React.FC = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const API_KEY = '33f3676a719069fdfef3fee0bb88c451';

const fetchWeather = async () => {
  if (!city.trim()) return;
  setLoading(true);
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
    );
    if (res.ok) {
      const data = await res.json();
      setWeather(data);
    } else {
      const error = await res.json();
      alert(error.message);
    }
  } catch (err) {
    alert('Error fetching weather data');
  } finally {
    setLoading(false);
  }
};


return (
    <Container maxWidth="sm" sx={{ mt: 4, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>Weather Finder</Typography>

      <TextField
        label="Enter City"
        variant="outlined"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        sx={{ mb: 2, width: '100%' }}
      />
      <Button variant="contained" onClick={fetchWeather}>Search</Button>

      <div style={{ marginTop: 24 }}>
        {loading && <CircularProgress />}
        {weather && (
          <WeatherCard
            city={weather.name}
            temp={weather.main.temp}
            description={weather.weather[0].description}
            icon={weather.weather[0].icon}
          />
)}
      </div>
    </Container>
  );
};

export default App2;
