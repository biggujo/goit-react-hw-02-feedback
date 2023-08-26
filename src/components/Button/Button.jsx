import React from 'react';
import { ButtonStyled } from './Button.styled';
import PropTypes from 'prop-types';

export function Button({
  children,
  onClick,
}) {
  return (<ButtonStyled onClick={onClick}>{children}</ButtonStyled>);
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
