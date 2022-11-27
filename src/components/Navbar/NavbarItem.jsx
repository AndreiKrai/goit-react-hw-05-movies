import React, { useState } from 'react'
import { Link } from 'react-router-dom';

    export default function NavbarItem({name,adress,index}) {
    const[isActive,seIsActice]=useState(false)
    const handleIsActive=(e)=>{seIsActice(!isActive);
        console.log('handleIsActive')}
  return (
    <li className="nav-item">
    <Link className={isActive? "nav-link active":"nav-link"} onClick={handleIsActive} aria-current="true" to={adress}>{name}</Link>
  </li>

  )
}
