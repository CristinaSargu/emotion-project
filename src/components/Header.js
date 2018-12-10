import React, { Component } from 'react';

import styled from '@emotion/styled/macro';
import Logo from './Logo';
import Menu from './Menu';

const HeaderWrapper = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	border-bottom: 1px solid rgba(255,255,255, 0.1);
`

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
      	<Logo />
      	<Menu />
      </HeaderWrapper>
    );
  }
}

export default Header;
