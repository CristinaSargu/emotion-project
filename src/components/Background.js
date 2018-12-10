import React, { Component } from 'react';

import styled from '@emotion/styled/macro';
import bgImage from '../img/bg.jpg';

const BackgroundWrapper = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
  height: 100%;
  overflow: hidden;

  .background-image {
  	width: 100%;
  	height: 100%;
  	object-fit: cover;
  }
`

class Background extends Component {
  render() {
    return (
      <BackgroundWrapper>
      	<img src={bgImage} alt="Background image" className="background-image" />
      </BackgroundWrapper>
    );
  }
}

export default Background;
