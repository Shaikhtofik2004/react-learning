import React from 'react';
import { useState } from 'react';

const App = () => {
  const [num, setNum] = useState(0);
  const [name, setName] = useState('JavaScript');

  const increment = () => {
    setNum(num + 1);
  };

  let changeName = () => {
    setName((prev) => (prev === 'JavaScript' ? 'React ❤' : 'JavaScript'));
  };
  return (
    <div>
      <h1>
        Count: <span>{num}</span>
      </h1>
      <button onClick={increment}>Click Me!</button>

      <h1>
        Language : <span>{name}</span>
      </h1>
      <button onClick={changeName}>Change Language</button>
    </div>
  );
};

export default App;
