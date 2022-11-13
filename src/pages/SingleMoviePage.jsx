import { getSingleMovie } from 'helpers/api';
import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function SingleMoviePage() {
  const params = useParams();
  const movieId = params.movieId;

  const [movie, setMovie] = useState(null);
  const [isLoadind, setIsLoadind] = useState(true);

  useEffect(() => {
    async function getSingleMovieApi() {
      const data = await getSingleMovie(movieId);
      setMovie(data);
      setIsLoadind(false);
    }
    getSingleMovieApi();
  }, [movieId]);

  if (isLoadind) {
    return <p>Is loading</p>;
  }
  const genresList = movie.genres.map(genre => genre.name);

  const { title, poster_path, id, overview, vote_average } = movie;


  return (
    movie && (
      <>
        <div className="card d-flex flex-row p-2">
          {/* style="width: 18rem;" */}
          <img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            className="card-img-top w-25"
            alt={`${title}`}
          />

          <div className="card-body">
            <h2 className="card-title">{`${title}`}</h2>
            <p className="card-text">{`User Score ${vote_average}`}</p>
            <h3 className="card-title">Overview</h3>
            <p className="card-text">{`${overview}`}</p>
            <h3 className="card-title">Genres</h3>
            <p className="card-text">{`${genresList}`}</p>

            <a href="/" className="btn btn-primary">
              Go back
            </a>
          </div>
        </div>
        <h3>Aditional information</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <Link
              key={id}
              to={`casts`}
              className="list-group-item list-group-item-action "
              aria-current="true"
            >
              Cast
            </Link>
          </li>
          <li className="list-group-item">
            <Link
              key={id}
              to={`reviews`}
              className="list-group-item list-group-item-action "
              aria-current="true"
            >
              Reviews
            </Link>
          </li>
        </ul>
      </>
    )
  );
}
