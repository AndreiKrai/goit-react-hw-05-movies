import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';


export default function MovieListItem({id,title}) {
  return (
    <li><Link key={id}
          to={`/movies/${id}`}
          className="list-group-item list-group-item-action "
          aria-current="true">{title}
        </Link></li>
  )
}
MovieListItem.propTypes={id:PropTypes.number.isRequired,title:PropTypes.string.isRequired }