import React, { Component } from 'react';

import styled from '@emotion/styled/macro';
import Background from './Background';
import Header from './Header';
import MainText from './MainText';

const AppWrapper = styled.div`
  height: 100vh;
  position: relative;
`

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Background />
        <Header />
        <MainText />
      </AppWrapper>
    );
  }
}

export default App;
