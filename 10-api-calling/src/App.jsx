import React from 'react';
import axios from 'axios';
import { useState } from 'react';

const App = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list');
    setData(response.data);
  };
  return (
    <div className="container">
      <button className="btn" onClick={getData}>
        Get Data
      </button>

      <div className="card-container">
        {data.map((elm, idx) => {
          return (
            <div className="card" key={idx}>
              <img src={elm.download_url} alt="random" />
              <h3>Hello, {elm.author}</h3>
              <p>ID: {elm.id}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
