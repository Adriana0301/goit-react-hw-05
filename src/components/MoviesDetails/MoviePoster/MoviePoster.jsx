import s from "./MoviePoster.module.css";
const BASE_IMG_URL = "https://image.tmdb.org/t/p/w500";
const noPoster =
  "https://upload.wikimedia.org/wikipedia/commons/b/ba/No_image_available_400_x_600.svg";

const MoviePoster = ({ path, alt }) => {
  const imagePath = path ? `${BASE_IMG_URL}${path}` : noPoster;
  const imageAlt = alt || "No information available";

  return <img src={imagePath} alt={imageAlt} className={s.image} />;
};

export default MoviePoster;
