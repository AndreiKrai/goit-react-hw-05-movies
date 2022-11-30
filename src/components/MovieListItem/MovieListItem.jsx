import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function MovieListItem({ id, title }) {
  const location = useLocation();
  return (
    <li>
      <Link 
        state={{from:location}}
        // тут створили сткйт і прив'язали адресу з якої прийшли
        key={id}
        to={`/movies/${id}`}
        className="list-group-item list-group-item-action "
        aria-current="true"
      >
        {title}
      </Link>
    </li>
  );
}
MovieListItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};
