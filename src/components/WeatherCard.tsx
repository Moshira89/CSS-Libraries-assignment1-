import React from 'react';
import Image from 'next/image';
import styles from '../styles/Weather.module.scss';

interface Props {
  city: string;
  temp: number;
  description: string;
  icon: string;
}

const WeatherCard: React.FC<Props> = ({ city, temp, description, icon }) => {
  const formattedDescription = description.charAt(0).toUpperCase() + description.slice(1);

  return (
    <div className={styles.card}>
      <h3>{city}</h3>

      <Image
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt={description}
        width={100}
        height={100}
        priority
      />

      <p>{formattedDescription}</p>
      <p>{Math.round(temp)}°C</p>
    </div>
  );
};

export default WeatherCard;
