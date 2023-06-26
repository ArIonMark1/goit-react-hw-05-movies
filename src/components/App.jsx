import { Routes, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import MovieList from './MovieList/MovieList';
import MovieDetails from './MovieDetails/MovieDetails';
import Movies from 'Movies/Movies';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import './App.scss';

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
          <Route />
        </Route>
      </Route>
      <Route
        path="*"
        element={
          <div>
            <p>This page does not Exists. </p>
            <NavLink to="/">Home</NavLink>
          </div>
        }
      />
    </Routes>
  );
};
