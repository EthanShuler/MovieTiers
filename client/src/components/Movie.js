import React, { Component } from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
    display: flex;
`;
const Header = styled.h2`
    color: white;
`;
const Year = styled.p`
    color: darkgrey;
`;
const Image = styled.img`
    width: 75px;
`;

export default class Movie extends Component {
    render() {
        return (
            <Draggable draggableId={this.props.movie.id} index={this.props.index}>
                {(provided, snapshot) => (
                    <Container 
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        isDragging={snapshot.isDragging}
                    >
                        {/* <Header>{this.props.movie.title}</Header> */}
                        {/* <Year>{this.props.movie.year}</Year> */}
                        <Image src={this.props.movie.poster}></Image>
                    </Container>
                )}
            </Draggable>
        );
    }
}
