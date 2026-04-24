import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './components/Card';

const App = () => {
  const [userData, setuserData] = useState([]);
  const [index, setIndex] = useState(1);

  const getData = async () => {
    let res = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=15`,
    );
    setuserData(res.data);
  };

  useEffect(() => {
    getData();
  }, [index]);

  let printUserData = (
    <h3 className="text-gray-400 text-sm absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      Loading...
    </h3>
  );

  if (userData.length > 0) {
    printUserData = userData.map((elm, idx) => {
      return (
        <div key={idx} className="transition hover:scale-105">
          <Card elm={elm} />
        </div>
      );
    });
  }

  return (
    <div className="bg-black min-h-screen text-white flex flex-col">
      <div className="flex flex-wrap justify-center gap-6 p-6 relative">
        {printUserData}
      </div>

      <div className="flex justify-center items-center gap-6 p-6 border-t border-gray-800">
        <button
          style={{ opacity: index === 1 ? 0.5 : 1 }}
          className="bg-amber-400 text-black px-5 py-2 rounded-lg font-semibold hover:bg-amber-300 active:scale-95 transition"
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1);
              setuserData([]);
            }
          }}
        >
          Prev
        </button>

        <h4 className="text-lg font-medium text-gray-300">
          Page <span className="text-white font-semibold">{index}</span>
        </h4>

        <button
          className="bg-amber-400 text-black px-5 py-2 rounded-lg font-semibold hover:bg-amber-300 active:scale-95 transition"
          onClick={() => {
            setuserData([]);
            setIndex(index + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
