import React from 'react';

const Input = () => {
  const inputhandler = (evt) => {
    console.log(evt.target.value);
  };
  return (
    <div>
      <input
        onChange={inputhandler}
        type="text"
        placeholder="Enter Your Name..."
      />
    </div>
  );
};

export default Input;
