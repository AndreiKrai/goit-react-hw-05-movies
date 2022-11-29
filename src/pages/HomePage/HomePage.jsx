import { getDataFromAPI } from 'helpers/api';
import MovieList from 'pages/MovieList/MovieList';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import { useState, useEffect } from 'react';

export default function HomePage() {
  const [trendingMovie, setTrendingMovie] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getTrendingArray() {
      try {
        const data = await getDataFromAPI();
        setTrendingMovie(data);
        console.log(data);
      } catch (error) {
        setError(error);
      }
    }
    getTrendingArray();
  }, []);

  return (
    <>
      {error && <NotFoundPage />}
      <MovieList movieFromApi={trendingMovie} header={'Trending today'} />
    </>
  );
}