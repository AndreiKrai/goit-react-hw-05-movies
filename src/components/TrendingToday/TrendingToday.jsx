import MovieListItem from 'components/MovieListItem/MovieListItem';
import { getDataFromAPI } from 'helpers/api';
import { useEffect, useState } from 'react';

export default function TrendingToday() {
  const [movies, setMovies] = useState([]);


  useEffect(() => {    
  async function getTrendingArray() {
      const data =await getDataFromAPI();
      setMovies(data);
    };
    getTrendingArray()
  }, []);

  return (
    <div className=" card-body">
      <h1>TrendingToday</h1>
      <div className="list-group">
        <ul>
        {movies.map(movie=>(<MovieListItem id={movie.id} title={movie.title}/>))}
          
        
        {/* <li><Link to="/" className="list-group-item list-group-item-action">
          A second link item
        </Link></li> */}
        </ul>
        
        
      </div>
    </div>
  );
}
