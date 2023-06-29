import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { handleMovieSearchList } from 'components/api_request';

export default function FilteredMovieList({ request, isData, path }) {
  // дані які прийшли по запиту
  const [responce, setResponce] = useState([]);

  //******************************* */
  useEffect(() => {
    // console.log('request for searching: ', request);
    if (!isData) return;

    const receivedData = async () => {
      await handleMovieSearchList(request)
        .then(resp => setResponce([...resp.results]))
        .catch(err => alert(err.message));
    };
    receivedData();
  }, [request, isData]);
  // ********************************
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
