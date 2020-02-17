import React, {Component} from 'react';
import SongSelector from '../components/SongSelector.js';
import SongDetail from '../components/SongDetail.js';

class SongContainer extends Component{
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
      currentSong: null
    };
    this.handleSongSelected = this.handleSongSelected.bind(this);
  }

  componentDidMount(){
    console.log('component Did Mount');
    const url='https://itunes.apple.com/gb/rss/topsongs/limit=20/json';

  fetch(url)
  .then(res => res.json())
  .then(songs => this.setState({songs: songs.feed.entry}))
  .catch(err => console.error);

}

handleSongSelected(index) {
  const selectedSong = this.state.songs[index];
  this.setState({currentSong: selectedSong})
}

render() {
  console.log('render');
  console.log(this.state.songs);
  return (
    <div>
    <h1>Top 20 UK Songs</h1>
    <SongSelector songs={this.state.songs} onSongSelected={this.handleSongSelected}/>
    <SongDetail song={this.state.currentSong}/>
    </div>
  );
}




}

export default SongContainer;
