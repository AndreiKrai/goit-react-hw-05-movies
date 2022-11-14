import { getMovieByName } from 'helpers/api'
import MovieList from 'pages/MovieList/MovieList';
import {useState} from 'react'
// import { useNavigate } from 'react-router-dom';

export default function SearchForm() {
const [input,setInput]=useState('')
const [movieList, setMovieList ]=useState(null)

// const navigate=useNavigate()
const handleInput=(e)=>{setInput(e.target.value)}

const handleSubmit=(e)=>{
  e.preventDefault();
  // navigate(`?query=${input}`)
  async function getMovieByNameAPI(){
  const data = await getMovieByName(input);
  setMovieList(data);
  setInput('')}
  getMovieByNameAPI()
  
}

  return (<>
    <div className="container-fluid p-5">
    <form onSubmit={handleSubmit} className="d-flex" >
        <input value={input} onChange={handleInput} className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form></div>
      { movieList && <MovieList movieFromApi={movieList} header={null}/>}
      </>
  )
}
