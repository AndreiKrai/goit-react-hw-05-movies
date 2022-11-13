import Navbar from './Navbar/Navbar';
import SearchForm from '../pages/SearchPage/SearchForm';
import { Routes, Route } from 'react-router-dom';
import TrendingToday from './TrendingToday/TrendingToday';
import SingleMoviePage from 'pages/SingleMoviePage';
import Casts from 'pages/Casts/Casts';
import Review from 'pages/Review/Review';
export const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<TrendingToday />} />
        <Route path="movies" element={<SearchForm />} />
        <Route path="movie/:movieId" element={<SingleMoviePage />} />
        <Route path="movie/:movieId/casts" element={<Casts />} />
        <Route path="movie/:movieId/reviews" element={<Review />} />

        {/* </Route> */}
      </Routes>
    </>
  );
};
