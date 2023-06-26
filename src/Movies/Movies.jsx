import { useEffect, useState } from 'react';
import { handleMovieSearchList } from 'components/api_request';
import { NavLink, useLocation, useSearchParams } from 'react-router-dom';

export default function Movies() {
  // робота з даними інпуту
  const [filter, setFilter] = useSearchParams('');
  // take active parameter from url
  // let movieName = filter.get('movie') ?? '';
  // дані які прийшли по запиту
  const [responce, setResponce] = useState([]);
  const location = useLocation();
  // console.log('location: ', location);
  // ********************************
  useEffect(() => {
    if (filter === '') return;

    const receivedData = async () => {
      await handleMovieSearchList(filter)
        .then(resp => setResponce([...resp.results]))
        .catch(console.error);
    };
    receivedData();
  }, [filter]);
  // ********************************
  function onSubmitForm(evt) {
    evt.preventDefault();
    const form = evt.currentTarget;
    const inputData = form.elements.movieInput.value;

    const params = inputData === '' ? {} : { movie: inputData.toLowerCase() };
    setFilter(params);
    form.reset();
  }

  return (
    <>
      <form onSubmit={onSubmitForm}>
        <h1>Movie searcing page</h1>
        <input
          type="text"
          name="movieInput"
          placeholder="Enter title of film"
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {responce &&
          responce.map(film => (
            <li key={film.id}>
              {/* movie.title ? movie.title : movie.name */}
              <NavLink to={`${film.id}`} state={{ from: location }}>
                {film.title ? film.title : film.name}
              </NavLink>
            </li>
          ))}
      </ul>
    </>
  );
}
