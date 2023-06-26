import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import './App.scss';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const MovieList = lazy(() => import('./MovieList/MovieList'));
const Movies = lazy(() => import('./Movies/Movies'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const NotExistPage = lazy(() => import('../pages/NotExistPage/NotExistPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        {/* головна сторінка із шапкою */}
        <Route index element={<MovieList />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="casts" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="movies" element={<Movies />}>
          <Route path=":movieId" element={<MovieDetails />}>
            <Route path="casts" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route />
        </Route>
      </Route>
      <Route path="*" element={<NotExistPage />} />
    </Routes>
  );
};
