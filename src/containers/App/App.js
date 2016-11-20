import React, { PropTypes } from 'react';
import styles from './App.css';

const App = ({ children }) => (
  <div className={styles.base}>
    {children}
  </div>
);

App.propTypes = {
  children: PropTypes.element,
};

export default App;
