import React, {Component} from 'react';
import FilmSelector from '../components/FilmSelector.js';
import FilmDetail from '../components/FilmDetail.js';

class FilmContainer extends Component{
  constructor(props) {
    super(props);
    this.state = {
      films: [],
      currentFilm: null
    };
    this.handleFilmSelected = this.handleFilmSelected.bind(this);
  }

  componentDidMount(){
    console.log('component Did Mount');
    const url='https://itunes.apple.com/gb/rss/topsongs/limit=20/json';

  fetch(url)
  .then(res => res.json())
  .then(films => this.setState({films: films.feed.entry}))
  .catch(err => console.error);

}

handleFilmSelected(index) {
  const selectedFilm = this.state.films[index];
  this.setState({currentFilm: selectedFilm})
}

render() {
  console.log('render');
  console.log(this.state.films);
  return (
    <div>
    <h1>Top 20 UK Songs</h1>
    <FilmSelector films={this.state.films} onFilmSelected={this.handleFilmSelected}/>
    <FilmDetail film={this.state.currentFilm}/>
    </div>
  );
}




}

export default FilmContainer;
