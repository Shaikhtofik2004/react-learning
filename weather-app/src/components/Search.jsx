import React, { useState } from 'react';

const Search = ({ getWeather }) => {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    if (!city) return;
    getWeather(city);
    setCity('');
  };

  return (
    <div className="input-box">
      <input
        type="text"
        placeholder="Enter city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Search;
