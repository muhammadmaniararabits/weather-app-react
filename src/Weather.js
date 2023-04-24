import React, { useState, useEffect } from 'react';

const Weather = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=76542cea0f0911efea16d4191c2938d0`);
      const data = await response.json();
      setWeather(data);
    };

    fetchWeather();
  }, []);

  if (!weather) {
    return <div>Loading weather data...</div>;
  }

  return (
    <div>
      <h1>{weather.name}</h1>
      <p>{weather.weather[0].description}</p>
      <p>{weather.main.temp}</p>
    </div>
  );
};

export default Weather;