import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviews } from "../../../services/Api";
import Loader from "../../Loader/Loader";
import s from "./MovieReviews.module.css";

const MovieReviews = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchGredits() {
      try {
        setIsLoading(true);
        const movies = await getReviews(movieId);
        setReviews(movies.results);
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
      {reviews.length === 0 && !isLoading && "No review"}
      {isLoading && <Loader />}
      {reviews.length > 0 && !isLoading && (
        <ul className={s.reviewsList}>
          {reviews &&
            !isLoading &&
            reviews.map(({ id, author, content }) => (
              <li key={id} className={s.reviewsListItem}>
                <b className={s.author}>Autor: {author}</b>
                <p className={s.authorText}>{content}</p>
              </li>
            ))}
        </ul>
      )}
    </>
  );
};

export default MovieReviews;
