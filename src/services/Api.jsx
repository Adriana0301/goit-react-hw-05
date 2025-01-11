import axios from "axios";

const API_KEY = "509e76d738aed5836b680404da7e58cf";
const BASE_URL = "https://api.themoviedb.org/3";

const getTrendingMovies = async () => {
  const { data } = await axios.get(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
  );
  return data;
};

const getMovieById = async (id) => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
  );
  return data;
};

const getCredits = async (id) => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`
  );
  return data;
};

const getReviews = async (id) => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`
  );
  return data;
};

const getMovieByName = async (text) => {
  const { data } = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${text}`
  );
  return data;
};

export {
  getTrendingMovies,
  getMovieById,
  getCredits,
  getReviews,
  getMovieByName,
};
