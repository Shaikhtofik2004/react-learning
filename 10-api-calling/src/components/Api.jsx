import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    const response = await axios.get('https://picsum.photos/v2/list');
    setData(response.data);
    setLoading(false);
  };

  return (
    <div className="container">
      <button className="btn" onClick={getData}>
        Get Data
      </button>

      {loading ? (
        <h2 className="loader">Loading...</h2>
      ) : (
        <div className="card-container">
          {data.map((elm, idx) => {
            return (
              <div className="card" key={idx}>
                <img src={elm.download_url} alt="random" />
                <h3>{elm.author}</h3>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default App;
