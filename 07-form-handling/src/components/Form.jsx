import React from 'react';

const Form = () => {
  const submitHandler = (evt) => {
    evt.preventDefault();
    console.log('Button was Clicked');
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder="Enter your Name..." />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
