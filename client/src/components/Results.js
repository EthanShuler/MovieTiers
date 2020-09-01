import React, { Component } from 'react';
import styled from 'styled-components';

import SearchResult from './SearchResult';

const Container = styled.div`
display: flex;
flex-wrap: wrap;
`;

export default class Results extends Component {
    render() {
        return (
            <Container>
                {this.props.movies.map(movie => {
                    if (movie.poster_path) { 
                        // console.log(movie);
                        return (
                            <SearchResult key={movie.title} movie={movie} handleClick={this.props.handleClick} />
                        );
                    }
                })}
            </Container>
        );
    }
}
