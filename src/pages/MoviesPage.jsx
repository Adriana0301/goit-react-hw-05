import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSearchParams } from "react-router-dom";
import { getMovieByName } from "../services/Api";
import SearchBar from "../components/SearchBar/SearchBar";
import MoviesList from "../components/MoviesList/MovieList";
import Loader from "../components/Loader/Loader";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";

  useEffect(() => {
    if (query === "") return;

    async function getMovies() {
      try {
        setIsLoading(true);
        const movies = await getMovieByName(query);
        setMovies(movies.results);

        if (movies.results.length === 0) {
          toast(
            "Search something else. There is no movie with this request here",
            {
              icon: "⚠️",
              position: "bottom-center",
            }
          );
          return;
        }
      } catch {
        setIsError("Something went wrong! Please try again later.");
      } finally {
        setIsLoading(false);
      }
    }

    getMovies();
  }, [query]);

  const fetchMovies = (newQuery) => {
    if (newQuery.trim() === query.trim()) return;
    setSearchParams(newQuery !== "" ? { query: newQuery } : {});
    setMovies([]);
  };

  if (isLoading) return <Loader />;
  if (isError) return <ErrorMessage />;

  return (
    <div className="container">
      <SearchBar onChange={fetchMovies} query={query} />
      <MoviesList movies={movies} />
    </div>
  );
};

export default MoviesPage;
