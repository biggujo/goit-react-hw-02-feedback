import React from 'react';
import { ButtonStyled } from './Button.styled';
import PropTypes from 'prop-types';

export function Button({ children }) {
  return (<ButtonStyled>{children}</ButtonStyled>);
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
};
