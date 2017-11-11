import React, { Component } from 'react';
import {Link } from 'react-router-dom';

import styles from './Home.css';

class Home extends Component {
  static defaultProps = {
  }

  render() {
    return (
      <div className={styles.base}>
        <h1>Home Page</h1>
        <Link to="/settings">Settings</Link>
      </div>
    );
  }
}

export default Home;
