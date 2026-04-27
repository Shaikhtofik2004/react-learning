// src/pages/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
      <h1 className="text-8xl font-extrabold text-blue-600 mb-4">404</h1>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        Page Not Found
      </h2>

      <p className="text-gray-500 mb-6">
        Oops! The page you are looking for doesn’t exist.
      </p>

      <Link
        to="/"
        className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
