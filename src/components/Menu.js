import React, { Component } from 'react';

import styled from '@emotion/styled/macro';
import bgImage from '../img/bg.jpg';

import SearchIcon from './SearchIcon';
import SettingsIcon from './SettingsIcon';

const MenuWrapper = styled.ul`
	list-style-type: none;
	display: flex;
	align-items: center;
	padding: 30px 0 30px 150px;
	margin: 0;

	.menu-item {
		padding: 0 20px;
	}

	.menu-item-link {
		display: block;
		color: #fff;
		font-size: 13px;
		text-transform: uppercase;
		text-decoration: none;
		transition: color 0.2s ease;

		&:hover {
			color: #a98b69;
		}
	}
`

class Menu extends Component {
  render() {
    return (
      <MenuWrapper>
      	<li className="menu-item">
      		<a href="#" className="menu-item-link">Home</a>
      	</li>
      	<li className="menu-item">
      		<a href="#" className="menu-item-link">About</a>
      	</li>
      	<li className="menu-item">
      		<a href="#" className="menu-item-link">Blog</a>
      	</li>
      	<li className="menu-item">
      		<a href="#" className="menu-item-link">Emotion</a>
      	</li>
      	<li className="menu-item">
      		<a href="#" className="menu-item-link">Contant</a>
      	</li>
      	<li className="menu-item">
      		<SearchIcon />
      	</li>
      	<li className="menu-item">
      		<SettingsIcon />
      	</li>
      </MenuWrapper>
    );
  }
}

export default Menu;
