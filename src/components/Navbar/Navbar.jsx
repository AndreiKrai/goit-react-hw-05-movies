import React from 'react'
import { NavLink } from "react-router-dom";


export default function Navbar() {
  // const[isActive,seIsActice]=useState(false)
  // const handleIsActive=(e)=>{seIsActice(!isActive);
  // console.log('handleIsActive')}
  return (
    <div className="card text-center">
  <div className="card-header">
    <ul className="nav nav-tabs card-header-tabs">
      <li className="nav-item">
        <NavLink className="nav-link" aria-current="true" to="/">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="movies">Movies</NavLink>
      </li>
    </ul>
  </div>
  {/* <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div> */}
</div>
  )
}

// const isActive=({isActive})=>isActive? 'nav-link active':'nav-link';