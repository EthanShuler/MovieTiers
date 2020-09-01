import React, { Component } from 'react';
import { Droppable } from 'react-beautiful-dnd';

import styled from 'styled-components';
import Movie from './Movie';

const Container = styled.div`
    height: 100px;

    display: flex;
    flex-direction: row;
`;
const Title = styled.h3`
    padding: 8px;
    align-items: center;
    background-color: ${props => props.inputColor || "#0000CD"};
    color: black;
    display: flex;
    width: 100px;
    // height: 100%;
    justify-content: center;
`;
const MovieList = styled.div`
    // padding: 8px;
    width: 100%;
    background-color: #454548;
    
    display: flex;
`;

export default class Row extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (
            <Container color={this.props.color}>
                <Title inputColor={this.props.row.color}>{this.props.row.title}</Title>
                <Droppable droppableId={this.props.row.id} direction="horizontal">
                    {(provided, snapshot) => (
                        <MovieList
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            isDraggingOver={snapshot.isDraggingOver}
                        >
                            {this.props.movies.map((movie, index) => <Movie key={movie.id} movie={movie} index={index}/>)}
                            {provided.placeholder}
                        </MovieList>
                    )}
                </Droppable>
            </Container>
        );
    }
}
