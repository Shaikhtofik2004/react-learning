import React, { useState } from 'react';

const TwoWayBinding = () => {
  const [title, setTitle] = useState('');

  const submitHandler = (evt) => {
    evt.preventDefault();
    console.log('Form Submitted by', title);

    setTitle('');
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter your Name..."
          value={title}
          onChange={(evt) => {
            setTitle(evt.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TwoWayBinding;
