import React, { PropTypes } from 'react';

const App = ({ children }) => (
  <div>
    {children}
  </div>
);

App.propTypes = {
  children: PropTypes.element,
};

export default App;
