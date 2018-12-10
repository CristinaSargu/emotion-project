import React, { Component } from 'react';

import styled from '@emotion/styled/macro';
import logoImg from '../img/logo.svg';

const LogoWrapper = styled.div`
	position: absolute;
	top: -10px;
	left: 50px;

	.logo-image {
		height: 120px;
		background-color: #192030;
	}
`

class Logo extends Component {
  render() {
    return (
      <LogoWrapper>
      	<img className="logo-image" src={logoImg} />
      </LogoWrapper>
    );
  }
}

export default Logo;
