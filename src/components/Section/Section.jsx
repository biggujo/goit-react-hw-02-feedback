import React from 'react';
import { Subtitle } from './Section.styled';
import PropTypes from 'prop-types';

export default function Section({
  title,
  children,
}) {
  return (<section>
    <Subtitle>{title}</Subtitle>
    {children}
  </section>);
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
