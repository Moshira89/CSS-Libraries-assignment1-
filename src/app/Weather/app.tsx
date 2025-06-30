'use client';
import React, { useState } from 'react';
import axios from 'axios';
import WeatherCard from '../../components/WeatherCard';
import '../../styles/Weather.module.scss';

const Weather: React.FC = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState<any>(null);

  const fetchWeather = async () => {
    if (!city) {
      alert('Please enter a city');
      return;
    }
    try {
      const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
      if (!apiKey) {
        alert('API key is missing! Please check your environment variables.');
        return;
      }
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${apiKey}`
      );
      setWeather(res.data);
    } catch (err) {
      alert('City not found or API key invalid');
      setWeather(null);
    }
  };

  return (
    <div className="weather-wrapper">
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
