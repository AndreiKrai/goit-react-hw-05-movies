import { Routes, Route, } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
// import SearchForm from '../pages/SearchPage/SearchForm';
// import SingleMoviePage from 'pages/SingleMoviePage';
// import Casts from 'pages/Casts/Casts';
// import Review from 'pages/Review/Review';
// import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
// import HomePage from 'pages/HomePage/HomePage';
// import ActorPage from 'pages/ActorPage/ActorPage';
import { lazy } from 'react';

const SearchForm=lazy(()=>import('../pages/SearchPage/SearchForm'))
const SingleMoviePage=lazy(()=>import('pages/SingleMoviePage'))
const Casts=lazy(()=>import('components/Casts/Casts'))
const Review=lazy(()=>import('components/Review/Review'))
const NotFoundPage=lazy(()=>import('pages/NotFoundPage/NotFoundPage'))
const HomePage=lazy(()=>import('pages/HomePage/HomePage'))
const ActorPage=lazy(()=>import('pages/ActorPage/ActorPage'))

export const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<HomePage  />} />
          <Route path="movies" element={<SearchForm />} />

          <Route path="movies/:movieId" element={<SingleMoviePage />}>
            <Route path="casts" element={<Casts />} />
            <Route path="reviews" element={<Review />} />
          </Route>
          <Route path='actor/:actorsId' element={<ActorPage/>}/>

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};
