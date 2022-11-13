import { getReviews } from 'helpers/api';
import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Review() {
  const [reviews, setReviews] = useState([]);
  const params = useParams();
  const movieId = params.movieId;

  useEffect(() => {
    async function getReviewsApi() {
      const data = await getReviews(movieId);
      setReviews(data.results);
      console.log(data);
    }
    getReviewsApi();
  }, [movieId]);

  return reviews && reviews.map(({ author, content, id }) => {return(
    <div className="card-body card" key={id}>
      <h2 className="card-title">{`${author}`}</h2>
      <p className="card-text">{`${content}`}</p>
    </div>)
  });
}
