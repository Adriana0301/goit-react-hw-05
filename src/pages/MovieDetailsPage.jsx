import { useEffect, useRef, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import { getMovieById } from "../services/Api";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import Loader from "../components/Loader/Loader";
import MoviePoster from "../components/MoviesDetails/MoviePoster/MoviePoster";
import MovieInfomation from "../components/MoviesDetails/MovieInfomation/MovieInfomation";
import s from "./MovieDetailsPage.module.css";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  const goBackRef = useRef(location?.state?.from ?? "/movies");

  useEffect(() => {
    async function getMovies() {
      try {
        setIsLoading(true);
        setIsError(null);
        const movies = await getMovieById(movieId);
        setMovie(movies);
      } catch {
        setIsError("Opps... Something went wrong! Please try again.");
      } finally {
        setIsLoading(false);
      }
    }
    getMovies();
  }, [movieId]);
  if (isLoading) return <Loader />;
  if (isError) return <ErrorMessage />;
  return (
    <main>
      <section className={s.sectionAbout}>
        <Link to={goBackRef.current}>Go back</Link>
        <div className={s.wrapperAbout}>
          <MoviePoster path={movie.poster_path} alt={movie.original_title} />
          <MovieInfomation movie={movie} />
        </div>
      </section>
      <section>
        <div className="container">
          <h2 className={s.title}>Aditional Information</h2>
          <div className={s.containerLinks}>
            <NavLink
              to="cast"
              state={{ from: goBackRef.current }}
              className={buildLinkClass}
            >
              Cast
            </NavLink>
            <NavLink
              to="reviews"
              state={{ from: goBackRef.current }}
              className={buildLinkClass}
            >
              Reviews
            </NavLink>
          </div>
          <Outlet />
        </div>
      </section>
    </main>
  );
};

export default MovieDetailsPage;
