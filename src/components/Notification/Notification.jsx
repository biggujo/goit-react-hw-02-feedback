import React from 'react';
import { AccentText } from './Notification.styled';
import PropTypes from 'prop-types';

export function Notification({ message }) {
  return (<AccentText>{message}</AccentText>);
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
