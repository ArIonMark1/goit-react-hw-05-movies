import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { handleRequestPopular } from 'components/api_request';

export default function MovieList() {
  const [trendMovies, setTrendMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const onLoadMovies = async () => {
      await handleRequestPopular()
        .then(reqObj => {
          setTrendMovies(prevTrendMovies => [...reqObj.results]);
        })
        .catch(err => alert(err.message));
    };
    onLoadMovies();
  }, []);
  // console.log(trendMovies);
  return (
    <>
      <h2>Trending today</h2>

      <ul>
        {trendMovies.map(movie => (
          <li key={movie.id}>
            <NavLink to={`movies/${movie.id}`} state={{ from: location }}>
              <span>{movie.media_type}</span>:
              <span> {movie.title ? movie.title : movie.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
}
