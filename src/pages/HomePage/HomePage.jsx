import { useLocation } from 'react-router-dom';
import './HomePage.scss';
import MovieList from 'components/MovieList/MovieList';

export default function HomePage() {
  const location = useLocation();
  const status = 'trends';
  return (
    <>
      <h2>Trending today</h2>
      <MovieList path={location} conponentStat={status} />
    </>
  );
}
