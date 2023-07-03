import axios from 'axios';

const API_KEY = '7f73521c2f89ba4f40b3583136c2bf19';
const url = 'https://api.themoviedb.org/3/';

// ****************************************************************
function returnCustomError(reject) {
  const errMessage = Promise.reject(
    new Error(`Wrong request!! ${reject.message}, nothing was found. `)
  );
  return errMessage;
}
// #################################################################
export const handleRequestPopular = async () => {
  try {
    const request = await axios.get(`${url}trending/all/day`, {
      params: { api_key: API_KEY, page: 1 },
    });
    return request.data;
  } catch (error) {
    return returnCustomError(error);
  }
};

// #################################################################
export const handleRequestById = async id => {
  // Get the top level details of a movie by ID.
  try {
    const request = await axios.get(`${url}movie/${id}`, {
      params: {
        api_key: API_KEY,
      },
    });
    return request.data;
  } catch (error) {
    return returnCustomError(error);
  }
  // // ********************************
};

// #################################################################
export const handleMovieSearchList = async fTitle => {
  // Search for movies by their original, translated and alternative titles.
  const BASE_URL = `${url}search/movie`;

  const params = {
    api_key: API_KEY,
    query: `${fTitle}`,
    page: 1,
  };
  try {
    const request = await axios.get(BASE_URL, { params });
    return request.data;
  } catch (error) {
    return returnCustomError(error);
  }
  // ********************************
};

// #################################################################
export const handleMovieReview = async movieId => {
  // https://api.themoviedb.org/3/movie/{movie_id}/reviews
  try {
    const request = await axios.get(`${url}movie/${movieId}/reviews`, {
      params: { api_key: API_KEY },
    });
    return request.data;
  } catch (error) {
    return returnCustomError(error);
  }
};

// #################################################################
export const handleMovieCredits = async movieId => {
  // https://api.themoviedb.org/3/movie/{movie_id}/credits
  try {
    const request = await axios.get(`${url}movie/${movieId}/credits`, {
      params: { api_key: API_KEY },
    });
    return request.data;
  } catch (error) {
    return returnCustomError(error);
  }
};
