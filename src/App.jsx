import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AppBar from "./components/AppBar/AppBar";
import { Toaster } from "react-hot-toast";
import NotFoundPage from "./pages/NotFoundPage";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader/Loader";

function App() {
  const MoviesPage = lazy(() => import("./pages/MoviesPage"));
  const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage"));
  const MovieCast = lazy(() =>
    import("./components/MoviesDetails/MovieCast/MovieCast")
  );
  const MovieReviews = lazy(() =>
    import("./components/MoviesDetails/MovieReviews/MovieReviews")
  );
  return (
    <>
      <Toaster />
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
