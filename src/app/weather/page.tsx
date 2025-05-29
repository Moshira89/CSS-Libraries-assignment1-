"use client";

import React, { useState } from "react";
import styles from "./Weather.module.scss";

const API_KEY = "YOUR_OPENWEATHERMAP_API_KEY"; // <- Replace this

const WeatherPage: React.FC = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const fetchWeather = async () => {
    if (!city.trim()) return;

    setLoading(true);
    setWeather(null);
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      const data = await res.json();
      if (data.cod === 200) {
        setWeather(data);
      } else {
        alert("City not found");
      }
    } catch (err) {
      alert("Failed to fetch weather");
    }
    setLoading(false);
  };

  return (
    <div>hi</div>
  );
};

export default WeatherPage;
