import axios from 'axios';

const options = {
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOTdmOWVhMmZjMzRlYjg4M2Q5ZGYyMGNmZTFkOTQyYiIsInN1YiI6IjY1MTFkNGE4ZTFmYWVkMDEzYTBiZWY5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._FlD5OFNYmt2b9cp7NIwxLnKKey2vygd7hk2J5v3WfA',
  },
};
export async function getTrending() {
  const resp = await axios.get(
    'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
    options
  );

  return resp.data.results;
}

export async function searchMovies(query) {
  const resp = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
    options
  );
  return resp;
}

export async function getMovieDetails(movieId) {
  const resp = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
    options
  );
  return resp.data;
}

export async function getMovieCredits(movieId) {
  const resp = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
    options
  );
  return resp;
}

export async function getMovieRewiews(movieId) {
  const resp = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`,
    options
  );
  return resp;
}
