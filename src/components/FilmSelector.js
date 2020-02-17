import React, {Fragment} from 'react';

const FilmSelector = (props) => {
  const options = props.films.map((film, index) => {
    console.log(film.title.label);
    return <option
    value={film.title} key={index}>{index+1} - {film.title.label}</option>


  })

  function handleChange(event) {
    props.onFilmSelected(event.target.value);
  }

  return (
    <Fragment>
    <ul>
    <li>
    {options }
    </li>
    </ul>
    <select id="film-selector" onChange={handleChange} defaultValue="default">
      <option disabled value="default">Choose a song...</option>
      { options }
    </select>
    </Fragment>
  )
}

export default FilmSelector;
