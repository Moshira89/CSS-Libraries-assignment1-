'use client';

import React, { useState } from 'react';
import axios from 'axios';
import WeatherCard from '../../components/WeatherCard';
import styles from '../../styles/Weather.module.scss';

interface WeatherData {
  main: {
    temp: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
  name: string;
}

const Weather: React.FC = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState<WeatherData | null>(null);

  const fetchWeather = async () => {
    if (!city.trim()) {
      alert('Please enter a city');
      return;
    }

    const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;

    if (!apiKey) {
      throw new Error('API key missing! Please add NEXT_PUBLIC_OPENWEATHER_API_KEY to .env.local');
    }

    const response = await axios.get<WeatherData>(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
        city
      )}&units=metric&appid=${apiKey}`
    );

    setWeather(response.data);
  };

  return (
    <div className={styles.weatherWrapper}>
      <h2>Weather Finder</h2>
      <input
        id="city-input"
        name="city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
        onKeyDown={(e) => {
          if (e.key === 'Enter') fetchWeather();
        }}
        autoComplete="off"
      />
      <button onClick={fetchWeather}>Search</button>

      {weather && (
        <WeatherCard
          city={weather.name}
          temp={weather.main.temp}
          description={weather.weather[0].description}
          icon={weather.weather[0].icon}
        />
      )}
    </div>
  );
};

export default Weather;
