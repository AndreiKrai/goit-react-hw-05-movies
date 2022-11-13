import React from 'react'
import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <div className="card text-center">
  <div className="card-header">
    <ul className="nav nav-tabs card-header-tabs">
      <li className="nav-item">
        <Link className="nav-link active" aria-current="true" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="movies">Movies</Link>
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