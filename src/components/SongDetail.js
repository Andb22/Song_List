import React from 'react';

const SongDetail = (props) => {
  if (!props.song) return null;
  return (
    <h3>{props.song.name}</h3>
  );
}

export default SongDetail;
