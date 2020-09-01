import React, { Component } from 'react';
import './App.css';
import '@atlaskit/css-reset';
import styled from 'styled-components';

// import AppNavbar from './components/AppNavbar';
import Search from './components/Search';
import Tierlist from './components/Tierlist';
import Results from './components/Results';

import MovieDb from './util/moviedb';

const Container = styled.div`
display: flex;
flex-direction: row;
`;

const SearchArea = styled.div`
flex-direction: column;
flex: 30%;
`;

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      movieResults: []
    };
    this.searchMovieDb = this.searchMovieDb.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  async searchMovieDb(term) {
    const movieResults = await MovieDb.search(term);
    this.setState({ movieResults: movieResults });
    console.log(movieResults);
  }

  addMovie(e) {
    console.log(e.target);
  }

  render() {
    return (
      <div>
        <Container>
        <Tierlist movieResults={this.state.movieResults}/>
        <SearchArea>
          <Search searchMovieDb={this.searchMovieDb}/>
          <Results movies={this.state.movieResults} handleClick={this.addMovie}/>
        </SearchArea>
      </Container>
      </div>
    );
  }
}

export default App;
