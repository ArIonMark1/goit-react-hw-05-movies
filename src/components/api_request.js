import axios from 'axios';

const API_KEY = '7f73521c2f89ba4f40b3583136c2bf19';
const url = 'https://api.themoviedb.org/3/';

// ****************************************************************
function returnCustomError(reject) {
  new Promise.reject(
    new Error(`${reject} Wrong request!! Nothing was found on your request. `)
  );
}
// #################################################################
export const handleRequestPopular = async () => {
  const request = await axios.get(`${url}trending/all/day`, {
    params: { api_key: API_KEY, page: 1 },
  });
  if (request.status === 200) {
    return request.data;
  }
  returnCustomError(request);
};

// #################################################################
export const handleRequestById = async id => {
  // Get the top level details of a movie by ID.
  const request = await axios.get(`${url}movie/${id}`, {
    params: {
      api_key: API_KEY,
    },
  });
  // // ********************************
  // console.log('movieId from  component => : ', id);
  // console.log('movieId =>: ', request);
  // // ********************************
  if (request.status === 200) {
    return request.data;
  }
  returnCustomError(request);
};

// #################################################################
export const handleMovieSearchList = async fTitle => {
  // Search for movies by their original, translated and alternative titles.
  const BASE_URL = `https://api.themoviedb.org/3/search/movie`;

  const params = {
    api_key: API_KEY,
    query: `${fTitle}`,
    page: 1,
  };

  const request = await axios.get(BASE_URL, { params });
  // ********************************
  console.log('movie title from  component => : ', fTitle);
  // ********************************
  if (request.status === 200) {
    return request.data;
  }
  returnCustomError(request);
};

// #################################################################
export const handleMovieReview = async movieId => {
  // https://api.themoviedb.org/3/movie/{movie_id}/reviews
  const request = await axios.get(`${url}movie/${movieId}/reviews`, {
    params: { api_key: API_KEY },
  });
  if (request.status === 200) {
    return request.data;
  }
  returnCustomError(request);
};

// #################################################################
export const handleMovieCredits = async movieId => {
  // https://api.themoviedb.org/3/movie/{movie_id}/credits
  const request = await axios.get(`${url}movie/${movieId}/credits`, {
    params: { api_key: API_KEY },
  });
  if (request.status === 200) {
    return request.data;
  }
  returnCustomError(request);
};
