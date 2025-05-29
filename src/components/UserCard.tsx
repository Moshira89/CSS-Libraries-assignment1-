import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

type Props = {
  city: string;
  temp: number;
  description: string;
  icon: string;
};

export const WeatherCard: React.FC<Props> = ({ city, temp, description, icon }) => (
  <Card sx={{ mt: 3 }}>
    <CardContent sx={{ textAlign: 'center' }}>
      <Typography variant="h5">{city}</Typography>
      <Box display="flex" alignItems="center" justifyContent="center" mt={2}>
        <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt={description} />
      </Box>
      <Typography variant="subtitle1" sx={{ textTransform: 'capitalize' }}>{description}</Typography>
      <Typography variant="h6">{temp} °C</Typography>
    </CardContent>
  </Card>
);
