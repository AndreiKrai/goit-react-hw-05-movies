import { getCasts } from 'helpers/api';
import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Casts() {
  const [casts, setCasts] = useState();
  const params = useParams();
  const movieId = params.movieId;

  useEffect(() => {
    async function getCastsApi() {
      const data = await getCasts(movieId);
      setCasts(data);
      console.log('Casts', data);
    }
    getCastsApi();
  }, [movieId]);

  return (
    casts && (casts.cast.map(({character,name,profile_path})=><div className="card d-flex flex-row p-2">
        <img src={`https://image.tmdb.org/t/p/w500${profile_path}`} className="card-img-top w-25 " alt={`${name}`} />
        <div className="card-body">
          <p className="card-text">{`Name ${name}`}</p>
          <p className="card-text">{`Character ${character}`}</p>
        </div>{' '}
      </div>)
      
    )
  );
}
