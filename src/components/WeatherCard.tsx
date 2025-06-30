import React from 'react';
import styles from '../styles/Weather.module.scss';

interface Props {
  city: string;
  temp: number;
  description: string;
  icon: string;
}

const WeatherCard: React.FC<Props> = ({ city, temp, description, icon }) => {
  return (
    <div className={styles.card}>
      <h3>{city}</h3>
      <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt={description} />
      <p>{description}</p>
      <p>{temp}°C</p>
    </div>
  );
};

export default WeatherCard;
