import MovieListItem from 'components/MovieListItem/MovieListItem';
import PropTypes from 'prop-types';

export default function MovieList({ movieFromApi, header }) {
  return (
    <div className=" card-body">
      <h1>{header}</h1>
      <div className="list-group">
        <ul>
          {movieFromApi.map(movie => (
            <MovieListItem
              key={movie.id}
              id={movie.id}
              title={movie.title ?? 'Error database'}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

MovieList.propType = {
  movieFromApi: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
    }).isRequired
  ).isRequired,
  header: PropTypes.string.isRequired,
};
