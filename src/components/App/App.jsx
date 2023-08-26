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

  incrementFeedback = (category) => {
    this.setState((state) => {
      return { [category]: state[category] + 1 };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, val) => acc + val, 0);
  };

  countPositiveFeedbackPercentage = () => {
    if (this.state.good === 0) {
      return `0%`;
    }

    const percentage = 100 / this.countTotalFeedback() * this.state.good;
    return `${Math.round(percentage)}%`;
  };

  render() {
    const {
      good,
      neutral,
      bad,
    } = this.state;

    const total = this.countTotalFeedback();

    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (<>
      <Wrapper>
        <Title>Feedback collector</Title>

        <Subtitle>Please leave a feedback</Subtitle>
        <Button onClick={() => this.incrementFeedback('good')}>Good</Button>
        <Button
          onClick={() => this.incrementFeedback('neutral')}>Neutral</Button>
        <Button
          onClick={() => this.incrementFeedback('bad')}>Bad</Button>

        <Subtitle>Statistics</Subtitle>
        <Counter value={good}>Good</Counter>
        <Counter value={neutral}>Neutral</Counter>
        <Counter value={bad}>Bad</Counter>
        <Counter value={total}>Total</Counter>
        <Counter value={positivePercentage}>Positive feedback</Counter>
      </Wrapper>

      <GlobalStyles />
    </>);
  }
}
