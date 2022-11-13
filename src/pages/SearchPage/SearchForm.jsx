import { getMovieByName } from 'helpers/api'
import {useState} from 'react'

export default function SearchForm() {
const [input,setInput]=useState('')
const [search,setSearch]=useState('')


const handleInput=(e)=>{setInput(e.target.value)}

const handleSubmit=(e)=>{
  e.preventDefault();
  async function getMovieByNameAPI(){
  const data = await getMovieByName(input);
  setSearch(data)}
  getMovieByNameAPI()
}

  return (
    <div className="container-fluid">
    <form onSubmit={handleSubmit} className="d-flex">
        <input onChange={handleInput} className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form></div>
  )
}
