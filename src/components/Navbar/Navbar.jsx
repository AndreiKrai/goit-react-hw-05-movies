import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function Navbar() {
  return (<>
    <div className="card text-center">
      <div className="card-header">
        <ul className="nav nav-tabs card-header-tabs">
          <li className="nav-item">
            <NavLink className="nav-link" aria-current="true" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="movies">
              Movies
            </NavLink>
          </li>
        </ul>
      </div> 
     
    </div> <Outlet /></>
  );
}

