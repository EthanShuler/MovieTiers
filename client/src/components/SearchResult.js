import React, { Component } from 'react';
import styled from 'styled-components';
import plus from './resources/plus.png';

const Image = styled.img`
width: 75px;
display: flex;
flex-direction: row;
`;

const Icon = styled.img`
position: absolute;
width: 30px;
float: right;
`;

export default class SearchResult extends Component
{
    render()
    {
        return (
            <div>
                <Icon src={plus} onClick={this.props.handleClick}></Icon>
                <Image src={this.props.movie.poster}></Image>
            </div>
        )
    }
}
