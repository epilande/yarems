import { remote } from 'electron';
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as actions from './actions';
import styles from './Settings.css';

class Settings extends Component {
  static propTypes = {
    path: PropTypes.string,
    setPath: PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.setPath = this.setPath.bind(this);
  }

  setPath() {
    const { dialog } = remote;
    const dir = dialog.showOpenDialog({ properties: ['openDirectory'] });

    if (dir) {
      const [path] = dir;
      this.props.setPath(path);
    }
  }

  render() {
    const { path } = this.props;

    return (
      <div className={styles.base}>
        <h1>Settings Page</h1>
        <button onClick={this.setPath}>
          {path || 'Set Path'}
        </button>
        <Link to="/">Back</Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    path: state.settings.path,
  };
}

export default connect(mapStateToProps, actions)(Settings);
