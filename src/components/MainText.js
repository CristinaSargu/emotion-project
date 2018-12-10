import React, { Component } from 'react';
import styled from '@emotion/styled/macro';

const MainTextWrapper = styled.div`
	position: absolute;
	top: 50%;
	left: 50px;
	transform: translateY(-50%);
	max-width: 600px;

	.main-title {
		font-size: 80px;
		color: #fff;
		margin: 0;
	}

	.secondary-title {
		font-size: 80px;
		color: #a98b69;
		margin: 0;
	}

	.description {
		font-size: 18px;
		color: #a7a7a7;
		font-style: italic;
	}

`

class MainText extends Component {
  render() {
    return (
      <MainTextWrapper>
      	<h1 className="main-title">New Style</h1>
      	<h2 className="secondary-title">Emotion</h2>
      	<p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum praesentium aliquam blanditiis modi nisi dolores libero assumenda nemo eos.</p>
      </MainTextWrapper>
    );
  }
}

export default MainText;
