import React, { Component } from 'react';
import { Subtitle, Title, Wrapper } from './App.styled';
import { GlobalStyles } from '../GlobalStyles';
import { Statistics } from '../Statistics/Statistics';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Section } from '../Section/Section';

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

        <Section title='Please leave a feedback'>
          <FeedbackOptions options={this.state}
                           onLeaveFeedback={this.incrementFeedback} />
        </Section>

        <Section title='Statistics'>
          <Statistics good={good}
                      neutral={neutral}
                      bad={bad}
                      total={total}
                      positivePercentage={positivePercentage} />
        </Section>
      </Wrapper>

      <GlobalStyles />
    </>);
  }
}
