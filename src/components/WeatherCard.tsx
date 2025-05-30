import React from 'react';
import Image from 'next/image';

type Props = {
  city: string;
  temp: number;
  description: string;
  icon: string;
};

export const WeatherCard: React.FC<Props> = ({ city, temp, description, icon }) => (
  <div className="weather-card">
    <h2>{city}</h2>
    <Image
      src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
      alt={description}
      width={60}
      height={60}
    />
    <p>{description}</p>
    <p>{temp} °C</p>
  </div>
);
