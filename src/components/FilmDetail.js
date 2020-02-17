import React from 'react';

const FilmDetail = (props) => {
  if (!props.film) return null;
  return (
    <h3>{props.film.name}</h3>
  );
}

export default FilmDetail;
