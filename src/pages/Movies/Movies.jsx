import { useLocation, useSearchParams } from 'react-router-dom';
import FilteredMovieList from 'components/FIlteredMovieList/FIlteredMovieList';
import { useState } from 'react';

export default function Movies() {
  // робота з даними інпуту
  const [filter, setFilter] = useSearchParams(''); // ?????????????????????
  const filterData = filter.get('movie');

  const [receiveData, setReceiveData] = useState(false);

  const location = useLocation();
  // ********************************
  // console.log('filter Data =>: ', filterData);
  function onSubmitForm(evt) {
    evt.preventDefault();
    const form = evt.currentTarget;
    const inputData = form.elements.movieInput.value;

    const params = inputData === '' ? {} : { movie: inputData.toLowerCase() };
    setFilter(params);
    setReceiveData(true);
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

      <FilteredMovieList
        request={filterData}
        isData={receiveData}
        path={location}
      />
    </>
  );
}
