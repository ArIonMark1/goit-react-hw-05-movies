import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import './App.scss';
const Layout = lazy(() => import('../pages/Layout/Layout'));
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
// const MovieList = lazy(() => import('./MovieList/MovieList'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="casts" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Route>
      </Routes>
    </div>
  );
};
