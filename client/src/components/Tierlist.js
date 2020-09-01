import React, { Component } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import styled from "styled-components";

import initialData from "../initial-data";
import Row from "./Row";
import Results from "./Results";

const ListBody = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const Container = styled.div`
width: 100%;
`;

export default class Tierlist extends Component {
    constructor(props) {
        super(props);
        this.state = initialData;
        this.onDragEnd = this.onDragEnd.bind(this);
    }

    onDragEnd(result) {
        const { destination, source, draggableId } = result;

        if (!destination) {
            return;
        }

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        const start = this.state.rows[source.droppableId];
        const finish = this.state.rows[destination.droppableId];

        // reorder row
        if (start === finish) {
            const newMovieIds = Array.from(start.movieIds);
            newMovieIds.splice(source.index, 1);
            newMovieIds.splice(destination.index, 0, draggableId);

            const newRow = {
                ...start,
                movieIds: newMovieIds,
            };

            this.setState({
                ...this.state,
                rows: {
                    ...this.state.rows,
                    [newRow.id]: newRow,
                },
            });
            return;
        }

        // Moving from one list to another
        const startMovieIds = Array.from(start.movieIds);
        startMovieIds.splice(source.index, 1);
        const newStart = {
            ...start,
            movieIds: startMovieIds,
        };

        const finishMovieIds = Array.from(finish.movieIds);
        finishMovieIds.splice(destination.index, 0, draggableId);

        const newFinish = {
            ...finish,
            movieIds: finishMovieIds,
        };

        this.setState({
            ...this.state,
            rows: {
                ...this.state.rows,
                [newStart.id]: newStart,
                [newFinish.id]: newFinish,
            },
        });
    }

    render() {
        return (
            <Container>
                {/* <h1>hi</h1> */}
                <DragDropContext onDragEnd={this.onDragEnd}>
                    <ListBody>
                        {this.state.rowOrder.map((rowId) => {
                            const row = this.state.rows[rowId];
                            const movies = row.movieIds.map(
                                (movieId) => this.state.movies[movieId]
                            );

                            return <Row key={row.id} row={row} movies={movies} />;
                        })}
                    </ListBody>
                </DragDropContext>
            </Container>
            
        );
    }
}
