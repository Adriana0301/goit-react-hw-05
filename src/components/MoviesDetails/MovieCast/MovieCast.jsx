import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCredits } from "../../../services/Api";
import Loader from "../../Loader/Loader";
import MoviePoster from "../MoviePoster/MoviePoster";
import s from "./MovieCast.module.css";
const MovieCast = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    async function fetchGredits() {
      try {
        setIsLoading(true);
        const movies = await getCredits(movieId);
        setCredits(movies.cast);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchGredits();
  }, [movieId]);

  return (
    <>
      {credits.length === 0 && !isLoading && "No information about cast"}
      {isLoading && <Loader />}
      {credits.length > 0 && !isLoading && (
        <ul className={s.castList}>
          {credits &&
            !isLoading &&
            credits.map(({ id, character, name, profile_path }) => (
              <li key={id} className={s.castListItem}>
                <MoviePoster path={profile_path} alt={name} />
                <b>{name}</b>
                <p>Character: {character}</p>
              </li>
            ))}
        </ul>
      )}
    </>
  );
};

export default MovieCast;
