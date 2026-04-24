import React, { useEffect, useState } from 'react';

const UseEffect = () => {
  const [num, setNum] = useState(0);
  useEffect(() => {
    console.log('useEffect is running...');
  }, []);
  return (
    <div>
      <h1>num: {num}</h1>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        Click Me!
      </button>
    </div>
  );
};

export default UseEffect;
