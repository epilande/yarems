import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './List.css';

const cx = classnames.bind(styles);

const List = ({
  className,
  children,
  ...props
}) => {
  const classes = cx(
    'base',
    className,
  );

  return (
    <ul
      className={classes}
      {...props}
    >
      {children}
    </ul>
  );
};

List.defaultProps = {};

List.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default List;
