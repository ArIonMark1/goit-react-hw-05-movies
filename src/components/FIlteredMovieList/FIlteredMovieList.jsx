import { useEffect, useState } from 'react';
import { handleMovieSearchList } from 'components/api_request';
import { NavLink } from 'react-router-dom';

export default function FilteredMovieList({ request, isData, path }) {
  // дані які прийшли по запиту
  const [responce, setResponce] = useState([]);

  //******************************* */
  useEffect(() => {
    if (!isData) return;

    const receivedData = async () => {
      await handleMovieSearchList(request)
        .then(resp => setResponce([...resp.results]))
        .catch(err => alert(err.message));
    };
    receivedData();
  }, [request, isData]);
  // ********************************
  if (responce.length === 0 && isData) {
    return (
      <div>
        <p>Sorry, there is no data for the request.</p>
      </div>
    );
  }
  return (
    <ul>
      {responce.map(film => (
        <li key={film.id}>
          <NavLink to={`${film.id}`} state={{ from: path }}>
            {film.title ? film.title : film.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
