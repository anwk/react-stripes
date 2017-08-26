import React, { PropTypes } from 'react';
import './Button.css';

const Button = ({ text, onCLick }) => (
  <button
    className='button'
    onClick={onCLick}
  >
    {text}
  </button>
);

const { string, func } = PropTypes;
Button.propTypes = {
  text: string,
  onCLick: func.isRequired,
};

export default Button;