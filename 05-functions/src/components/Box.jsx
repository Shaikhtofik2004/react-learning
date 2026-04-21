import React from 'react';

const Box = () => {
  return (
    <>
      <div
        onMouseMove={(evt) => {
          console.log(evt.clientX);
          console.log(evt.clientY);
        }}
        className="box"
      ></div>
    </>
  );
};

export default Box;
