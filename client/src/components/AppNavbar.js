import React, { Component } from 'react';
import styled from 'styled-components';

const Nav = styled.div`
  background-color: #000080;
`;
 
const NavHeader = styled.div`
  max-width: 1010px;
  padding: 26px 20px;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
`;
 
const NavLeft = styled.div`
  width: 33.333%;
  text-align: left;
  color: snow;
`;
 
const NavRight = styled.div`
  width: 33.333%;
  text-align: right;
 
  svg {
    margin-right: 20px;
  }
`;
 
const MenuLink = styled.a`
padding: 5px;
margin: 20px;
color: snow;
hover
`;

export default class AppNavbar extends Component {
    render() {
        return (
            <Nav>
      <NavHeader>
        <NavLeft>Movie Tiers</NavLeft>
 
        <NavRight>
          <MenuLink href="#">
              Add New Movie
          </MenuLink>
 
          <MenuLink href="#">
              ooo
          </MenuLink>
 
          <MenuLink href="#">
              asdasfd
          </MenuLink>
        </NavRight>
      </NavHeader>
    </Nav>
        )
    }
}
