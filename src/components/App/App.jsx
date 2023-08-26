import React, { Component } from 'react';
import { Subtitle, Title, Wrapper } from './App.styled';
import { GlobalStyles } from '../GlobalStyles';
import { Counter } from '../Counter';
import { Button } from '../Button';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (<>
      <Wrapper>
        <Title>Feedback collector</Title>

        <Subtitle>Please leave a feedback</Subtitle>
        <Button>Test</Button>

        <Subtitle>Statistics</Subtitle>
        <Counter value={3}>Test</Counter>
      </Wrapper>

      <GlobalStyles />
    </>);
  }
}
