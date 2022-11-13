import React from 'react'
import { Link } from 'react-router-dom'

export default function MovieListItem({id,title}) {
  return (
    <li><Link key={id}
          to={`movie/${id}`}
          className="list-group-item list-group-item-action "
          aria-current="true">{title}
        </Link></li>
  )
}
