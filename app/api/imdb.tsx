import instance from './instance';

export const getCategories = () => {
  return instance.get('/genre/movie/list');
};

export const getMovies = (url: string) => {
  return instance.get(url);
};
