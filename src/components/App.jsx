import Navbar from './Navbar/Navbar';
import SearchForm from '../pages/SearchPage/SearchForm';
import { Routes, Route } from 'react-router-dom';
import SingleMoviePage from 'pages/SingleMoviePage';
import Casts from 'pages/Casts/Casts';
import Review from 'pages/Review/Review';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import HomePage from 'pages/HomePage/HomePage';
export const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />        
        <Route path="movies" element={<SearchForm />}/>     

        <Route path="movies/:movieId" element={<SingleMoviePage />}>
          <Route path="casts" element={<Casts />} />
          <Route path="reviews" element={<Review />} />
        </Route>        

        <Route path="*" element={<NotFoundPage />} />

      </Routes>
    </>
  );
};
