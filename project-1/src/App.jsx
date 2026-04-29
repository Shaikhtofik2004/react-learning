import React, { useState } from 'react';
import Search from './components/Search';
import WeatherCard from './components/WeatherCard';

const App = () => {
  const [data, setData] = useState(null);

  const API_KEY = 'c6d4798bf2d4653c9e7dfef42f25f744';

  const getWeather = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    try {
      const res = await fetch(url);
      const result = await res.json();
      setData(result);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="app">
      <h1>🌤 Weather App</h1>
      <Search getWeather={getWeather} />
      <WeatherCard data={data} />
    </div>
  );
};

export default App;
