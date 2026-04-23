import React from 'react';

const App = () => {
  // let user = localStorage.getItem('user');
  // let age = localStorage.setItem('age', 21);
  // console.log(result);

  // localStorage.removeItem('user');
  // localStorage.removeItem('age');

  // localStorage.clear();

  const user = {
    username: 'Tofik',
    age: 22,
    city: 'Pali',
  };

  localStorage.setItem('user', JSON.stringify(user));

  const result = JSON.parse(localStorage.getItem('user'));
  console.log(result);

  return (
    <div>
      <h1>LocalStorage</h1>
    </div>
  );
};

export default App;
