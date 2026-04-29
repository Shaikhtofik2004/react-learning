import React from 'react';

const WeatherCard = ({ data }) => {
  if (!data || !data.main) return null;

  const { name, main, weather, wind } = data;

  return (
    <div className="weather-box">
      <h2>{name}</h2>

      <div className="temp">{Math.round(main.temp)}°C</div>

      <div className="desc">{weather[0].main}</div>

      <div className="weather-details">
        <div>💨 {wind.speed} m/s</div>
        <div>💧 {main.humidity}%</div>
      </div>
    </div>
  );
};

export default WeatherCard;
