import React from 'react';

const Card = ({ elm }) => {
  return (
    <div className="w-48">
      <a href={elm.url} target="_blank" rel="noreferrer">
        <div className="h-40 w-full bg-white overflow-hidden rounded-xl shadow-md hover:shadow-xl transition duration-300">
          <img
            className="h-full w-full object-cover"
            src={elm.download_url}
            alt="random"
          />
        </div>

        <h2 className="mt-2 text-sm font-semibold text-center text-gray-200 truncate">
          {elm.author}
        </h2>
      </a>
    </div>
  );
};

export default Card;
