import React from 'react';
import { AccentText } from './Notification.styled';
import PropTypes from 'prop-types';

export default function Notification({ message }) {
  return (<AccentText>{message}</AccentText>);
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
