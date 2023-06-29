import { useLocation, useSearchParams } from 'react-router-dom';
import MovieList from 'components/MovieList/MovieList';

export default function Movies() {
  // робота з даними інпуту
  const [filter, setFilter] = useSearchParams();
  const filterData = filter.get('movie');
  const status = 'filter';
  const location = useLocation();
  // ********************************
  function onSubmitForm(evt) {
    evt.preventDefault();
    const form = evt.currentTarget;
    const inputData = form.elements.movieInput.value;

    const params = inputData === '' ? {} : { movie: inputData.toLowerCase() };
    setFilter(params);
    // setReceiveData(true);
    form.reset();
  }

  // ********************************
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

      <MovieList request={filterData} conponentStat={status} path={location} />
    </>
  );
}
