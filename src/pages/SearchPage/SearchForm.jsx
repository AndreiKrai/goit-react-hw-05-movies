import { getMovieByName } from 'helpers/api';
import MovieList from 'pages/MovieList/MovieList';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

export default function SearchForm() {
  const [serchParams, setSerchParams] = useSearchParams();
  const query = serchParams.get('query') ?? '';

  const [input, setInput] = useState('');
  const [movieList, setMovieList] = useState(null);

  // const input=
  useEffect(() => {
    if (query) {
      async function getMovieByNameAPI() {
        const data = await getMovieByName(query);
        setMovieList(data);
        setInput('');

        // console.log('data',data);
      }
      getMovieByNameAPI();
    }
  }, []);

  // const navigate=useNavigate()
  const handleInput = e => {
    setSerchParams({ query: e.target.value });
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    // navigate(`?query=${input}`)
    async function getMovieByNameAPI() {
      const data = await getMovieByName(query);
      setMovieList(data);
      setInput('');

      // console.log('data',data);
    }
    getMovieByNameAPI();
  };

  return (
    <>
      <div className="container-fluid p-5">
        <form onSubmit={handleSubmit} className="d-flex">
          <input
            value={input}
            onChange={handleInput}
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
      {movieList && <MovieList movieFromApi={movieList} header={null} />}
    </>
  );
}
