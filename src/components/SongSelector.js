import React, {Fragment} from 'react';

const SongSelector = (props) => {
  const options = props.songs.map((song, index) => {
    console.log(song.title.label);
    return <option
    value={song.title} key={index}>{index+1} - {song.title.label}</option>


  })

  function handleChange(event) {
    props.onSongSelected(event.target.value);
  }

  return (
    <Fragment>
    <ul>
    <li>
    {options }
    </li>
    </ul>
    <select id="song-selector" onChange={handleChange} defaultValue="default">
      <option disabled value="default">Choose a song...</option>
      { options }
    </select>
    </Fragment>
  )
}

export default SongSelector;
