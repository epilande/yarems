import React, { PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from './Button.css';

const cx = classNames.bind(styles);

const Button = ({
  className,
  ...props
}) => {
  const classes = cx(
    'base',
    className,
  );

  return (
    <button
      className={classes}
      {...props}
    >
      {props.children}
    </button>
  );
};

Button.defaultProps = {
  type: 'button',
};

Button.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
};

export default Button;
