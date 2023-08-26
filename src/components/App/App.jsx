import React, { Component } from 'react';
import { Subtitle, Title, Wrapper } from './App.styled';
import { GlobalStyles } from '../GlobalStyles';
import { Statistics } from '../Statistics/Statistics';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';

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
        <FeedbackOptions options={this.state}
                         onLeaveFeedback={this.incrementFeedback} />

        <Subtitle>Statistics</Subtitle>
        <Statistics good={good}
                    neutral={neutral}
                    bad={bad}
                    total={total}
                    positivePercentage={positivePercentage} />
      </Wrapper>

      <GlobalStyles />
    </>);
  }
}
