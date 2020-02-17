import React, {Component} from 'react';
import FilmSelector from '../components/FilmSelector.js'
import FilmDetail from '../components/FilmDetail.js'

class FilmContainer extends Component{
  constructor(props) {
    super(props);
    this.state = {
      films: [],
      currentFilm: null
    };
  }

  componentDidMount(){
    const url='https://rss.itunes.apple.com/api/v1/us/movies/top-movies/all/10/explicit.json'

  fetch(url)
  .then(res => res.json())
  .then(films => this.setState({films: films}))
  .catch(err => console.error);

}

handleFilmSelected(index) {
  const selectedFilm = this.state.films[index];
  this.setState({currentFilm: selectedFilm})
}

render() {
  return (
    <div>
    <h1>Film Container</h1>
    <FilmSelector films={this.state.films} onFilmSelected={this.handleFilmSelected}/>
    <FilmDetail film={this.state.currentFilm}/>
    </div>
  )
}




}

export default FilmContainer;
