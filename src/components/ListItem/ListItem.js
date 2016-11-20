import React, { PropTypes } from 'react';
import classnames from 'classnames/bind';
import styles from './ListItem.css';

const cx = classnames.bind(styles);

const ListItem = ({
  className,
  children,
  onClick,
  ...props
}) => {
  const classes = cx(
    'base',
    className,
    {
      selectable: onClick,
    },
  );

  return (
    <li
      className={classes}
      onClick={onClick}
      {...props}
    >
      {children}
    </li>
  );
};

ListItem.defaultProps = {};

ListItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default ListItem;
