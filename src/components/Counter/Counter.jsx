import React from 'react';
import { Text } from './Counter.styled';
import PropTypes from 'prop-types';

export function Counter({
  value,
  children: title,
}) {
  return (<Text>{title}: {value}</Text>);
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  children: PropTypes.string.isRequired,
};
