import React, { useState } from 'react';
import Search from './components/Search';
import WeatherCard from './components/WeatherCard';

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');

  const API_KEY = 'c6d4798bf2d4653c9e7dfef42f25f744';

  const getWeather = async (city) => {
    setError('');

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
      );
      const result = await res.json();

      if (result.cod !== 200) {
        setError('City not found ❌');
        setData(null);
        return;
      }

      setData(result);
    } catch (err) {
      setError('Something went wrong');
      setData(null);
    }
  };

  return (
    <div className="app">
      <h1>🌤 Weather App</h1>

      <Search getWeather={getWeather} />

      {error && <p className="error">{error}</p>}

      <WeatherCard data={data} />
    </div>
  );
}

export default App;
