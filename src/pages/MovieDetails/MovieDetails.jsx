import { useParams, Outlet, useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { PropagateLoader } from 'react-spinners';
import { handleRequestById } from 'components/api_request';
import { useEffect, useRef, useState, Suspense } from 'react';
import './MovieDetails.scss';

export default function MovieDetails() {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocation = useRef(location.state?.from ?? '/');
  //
  useEffect(() => {
    const getMovieDetails = async () => {
      return await handleRequestById(movieId);
    };
    getMovieDetails()
      .then(receiveData => setMovie(prevMovie => ({ ...receiveData })))
      .catch(err => alert(err.message));
  }, [movieId]);
  //
  const movieImage = movie.poster_path
    ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
    : `https://via.placeholder.com/200x300`;
  const genres =
    movie.genres &&
    movie.genres.map(genre => <p key={nanoid(5)}>{genre.name}</p>);

  return (
    <>
      <NavLink className="backButton" to={backLinkLocation.current}>
        <span>{'<-'}</span> <span>Go back</span>
      </NavLink>
      <div>
        {movieImage && (
          <img className="moviePoster" src={movieImage} alt={movie.title} />
        )}

        <div>
          {movie.title && (
            <h2>
              {movie.title} ({movie.release_date.split('-')[0]})
            </h2>
          )}

          <p>User Score: 71%</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          {genres && genres}
        </div>
      </div>
      <div>
        <h3>Additional information</h3>
        <ul className="navInfo">
          <li>
            <NavLink to="casts">Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Review</NavLink>
          </li>
        </ul>
      </div>
      <div className="childConponents">
        <Suspense
          fallback={
            <PropagateLoader
              color={'#ffaa06'}
              loading
              size={15}
              speedMultiplier={1}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          }
        >
          <Outlet />
        </Suspense>
      </div>
    </>
  );
}
