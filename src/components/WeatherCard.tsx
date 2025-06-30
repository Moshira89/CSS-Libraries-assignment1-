import React from 'react';
import styles from '../styles/Weather.module.scss';

type Props = {
  city: string;
  temp: number;
  description: string;
  icon: string;
};

const WeatherCard: React.FC<Props> = ({ city, temp, description, icon }) => (
  <div className={styles.weatherCard}>
    <h3>{city}</h3>
    <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt={description} />
    <p>{description}</p>
    <p>{temp} °C</p>
  </div>
);

export default WeatherCard;
