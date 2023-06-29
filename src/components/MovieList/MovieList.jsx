import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  handleMovieSearchList,
  handleRequestPopular,
} from 'components/api_request';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const toastStyle = {
  position: 'top-right',
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'colored',
};

export default function MovieList({ request, conponentStat, path }) {
  // дані які прийшли по запиту
  const [responce, setResponce] = useState([]);
  const [error, setError] = useState(null);
  // ********************************
  useEffect(() => {
    if (conponentStat === 'trends') {
      onLoadMovies();
    }
    if (conponentStat === 'filter') {
      if (request) onRequestLoadMovies(request);
    }
  }, [request, conponentStat]);

  // ********************************
  async function onLoadMovies() {
    await handleRequestPopular()
      .then(reqObj => {
        setResponce(prevResponce => [...reqObj.results]);
      })
      .catch(err => {
        setError(err.message);
      });
  }
  // ********************************
  async function onRequestLoadMovies(request) {
    await handleMovieSearchList(request)
      .then(resp => {
        if (resp.results.length === 0) {
          return toast.error(
            'Didn`t find anything on this request',
            toastStyle
          );
        }
        setResponce([...resp.results]);
      })
      .catch(err => {
        setError(err.message);
      });
  }

  if (error) {
    return (
      <div className="error-message">
        <h2>{error}</h2>
      </div>
    );
  }
  return (
    <>
      <ToastContainer />
      <ul>
        {responce.map(film => (
          <li key={film.id}>
            <NavLink
              to={
                conponentStat === 'trends' ? `/movies/${film.id}` : `${film.id}`
              }
              state={{ from: path }}
            >
              {film.title ? film.title : film.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
}
