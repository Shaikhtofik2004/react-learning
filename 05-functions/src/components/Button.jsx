import React from 'react';

const Button = () => {
  //   const clickHandler = () => {
  //     console.log('Button Was clicked..');
  //   };

  return (
    <div>
      {/* <button onClick={clickHandler}>Click</button> */}

      <button
        onClick={() => {
          console.log('button was click');
        }}
      >
        Click Me!
      </button>
    </div>
  );
};

export default Button;
