import React from 'react';

const WeatherCard = ({ data }) => {
  if (!data || !data.main) return null;

  return (
    <div className="weather-box">
      <h2>{data.name}</h2>

      <div className="temp">{Math.round(data.main.temp)}°C</div>

      <div className="desc">{data.weather[0].main}</div>

      <div className="weather-details">
        <div>💨 {data.wind.speed} m/s</div>
        <div>💧 {data.main.humidity}%</div>
      </div>
    </div>
  );
};

export default WeatherCard;
