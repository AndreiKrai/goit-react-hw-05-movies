import MovieListItem from 'components/MovieListItem/MovieListItem';

export default function MovieList({ movieFromApi, header }) {
  return (
    <div className=" card-body">
      <h1>{header}</h1>
      <div className="list-group">
        <ul>
          {movieFromApi.map(movie => (
            <MovieListItem key={movie.id} id={movie.id} title={movie.title} />
          ))}
        </ul>
      </div>
    </div>
  );
}
