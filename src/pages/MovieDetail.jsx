import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { API_KEY, BASE_API_URL, BASE_IMAGE_URL } from "../constants";

function MovieDetail() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  const getMovieById = async (movieId) => {
    const response = await fetch(
      `${BASE_API_URL}/movie/${movieId}?api_key=${API_KEY}`
    );

    return response;
  };

  useEffect(() => {
    (async () => {
      const response = await getMovieById(movieId);

      const isNotFound = response.status === 404;

      if (isNotFound) {
        // TODO: handle movie not found
        return;
      }

      const movie = await response.json();
      setMovie(movie);
    })();
  }, []);

  if (movie === null) return <p className="text-white">Movie Not Found</p>;

  const getMovieReleaseYear = (date) => {
    if (date === "") return null;
    return new Date(date).getFullYear();
  };

  return (
    <div className="grid grid-cols-[2fr,3fr] gap-8 text-white h-screen">
      <div className="relative after:block after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-l from-gray-900 ">
        <img
          src={`${BASE_IMAGE_URL}/${movie.poster_path}`}
          className="w-full object-cover h-screen"
        />
      </div>
      <div className="flex flex-col justify-center gap-2 p-8 relative">
        <Link
          to="/"
          className="border-2 border-gray-600 text-white rounded-full py-1 px-4 w-fit absolute top-14 right-14"
        >
          Back
        </Link>

        <p className="py-1 px-5 bg-yellow-400 font-bold text-gray-800 rounded-full w-fit">
          {getMovieReleaseYear(movie.release_date) || "Unknown"}
        </p>
        <h2 className="font-bold text-7xl uppercase">{movie.title}</h2>
        <p className="max-w-2xl">{movie.overview}</p>
        <ul className="flex gap-2 mt-4">
          {movie.genres.map((genre) => {
            return (
              <li
                key={genre.id}
                className="border-2 border-gray-600 text-gray-200 rounded-full py-1 px-4 w-fit"
              >
                {genre.name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default MovieDetail;
