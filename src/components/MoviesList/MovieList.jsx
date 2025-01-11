import { NavLink, useLocation } from "react-router-dom";
import MoviePoster from "../MoviesDetails/MoviePoster/MoviePoster";
import s from "./MovieList.module.css";
const MoviesList = ({ movies }) => {
  const location = useLocation();

  const CreateLink = ({ id, poster_path, original_title }) => {
    const to = location.pathname === "/" ? `movies/${id}` : `${id}`;
    return (
      <NavLink to={to} state={{ from: location }}>
        <MoviePoster path={poster_path} alt={original_title} />
      </NavLink>
    );
  };

  return (
    <ul className={s.list}>
      {movies?.length > 0 &&
        movies.map(({ id, poster_path, original_title }) => (
          <li key={id} className={s.listItem}>
            <CreateLink
              id={id}
              poster_path={poster_path}
              original_title={original_title}
            />
          </li>
        ))}
    </ul>
  );
};

export default MoviesList;
