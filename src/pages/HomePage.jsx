import { useEffect } from "react";
import { useState } from "react";
import Loader from "../components/Loader/Loader";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage.jsx";
import MoviesList from "../components/MoviesList/MovieList";
import { getTrendingMovies } from "../services/Api.jsx";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getMovies() {
      try {
        setIsLoading(true);
        const movies = await getTrendingMovies();
        setMovies(movies.results);
      } catch {
        setIsError("Opps... something went wrong! Please try again");
      } finally {
        setIsLoading(false);
      }
    }
    getMovies();
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      {isLoading && <Loader />}
      {isError ? (
        <ErrorMessage />
      ) : (
        movies && !isLoading && <MoviesList movies={movies} />
      )}
    </main>
  );
}
