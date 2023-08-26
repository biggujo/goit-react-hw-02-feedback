import React from 'react';
import Counter from '../Counter';
import PropTypes from 'prop-types';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (<>
    <Counter value={good}>Good</Counter>
    <Counter value={neutral}>Neutral</Counter>
    <Counter value={bad}>Bad</Counter>
    <Counter value={total}>Total</Counter>
    <Counter value={positivePercentage}>Positive feedback</Counter>
  </>);
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
