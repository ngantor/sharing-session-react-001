import { useEffect, useState } from 'react';
import Movie from '../components/Movie';
import { API_KEY, BASE_API_URL } from '../constants';

function Home() {
  const [movies, setMovies] = useState([]);

  const getApi = async () => {
    const response = await fetch(`${BASE_API_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    setMovies(data.results);
    console.log(data.results);
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {movies.map((movie) => {
          return (
            <Movie
              key={movie.id}
              image={movie.poster_path}
              title={movie.title}
              vote={movie.vote_average}
              id={movie.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Home;
