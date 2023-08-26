import React from 'react';
import Button from '../Button';
import { List } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export default function FeedbackOptions({
  options,
  onLeaveFeedback,
}) {
  return (<List>
    {Object.keys(options).map((option) => {
      return <li key={option}>
        <Button onClick={() => onLeaveFeedback(option)}>{option}</Button>
      </li>;
    })}
  </List>);
}

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
