import React, { Component } from 'react';
// import styled from 'styled-components';

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
        };

        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleTermChange(e) {
        this.setState({
            term: e.target.value
        })
    }

    handleSearch(e) {
        this.props.searchMovieDb(this.state.term);
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSearch}>
                    <input placeholder="Search Movies" onChange={this.handleTermChange} />
                    <input type="submit" value="Find Movie" onClick={this.handleSearch}></input>
                </form>
            </div>  
        );
    }
}