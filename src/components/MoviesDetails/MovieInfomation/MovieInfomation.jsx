import s from "./MovieInfomation.module.css";
const MovieInfomation = ({
  movie: {
    original_title = "No information",
    overview = "No available.",
    genres = [],
    vote_average = 0,
    release_date,
  },
}) => {
  return (
    <div className={s.wrapper}>
      <h1>
        {original_title} {release_date?.slice(0, 4)}
      </h1>
      <p>User Score: {vote_average * 10}%</p>
      <div>
        <h2>Overview</h2>
        <p className={s.overview}>{overview}</p>
      </div>
      <div>
        <h2>Genres</h2>
        <ul>
          {genres && genres.map(({ id, name }) => <li key={id}>{name}</li>)}
        </ul>
      </div>
    </div>
  );
};
export default MovieInfomation;
