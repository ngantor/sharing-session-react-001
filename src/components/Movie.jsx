import React from 'react';
import { Link } from 'react-router-dom';
import { BASE_IMAGE_URL } from '../constants';

function Movie({ image, title, vote, id }) {
  return (
    <Link to={`/movies/${id}`}>
      <div className="bg-gray-800 p-4 text-white rounded-2xl text-center">
        {/* image */}
        <img
          src={`${BASE_IMAGE_URL}/${image}`}
          className="mb-4 w-full min-h-[300px] object-cover rounded-xl"
        />
        {/* title */}
        <h2 className="font-bold text-xl mb-2">{title}</h2>
        {/* rating */}
        <p className="text-yellow-500">{vote}</p>
      </div>
    </Link>
  );
}

export default Movie;
