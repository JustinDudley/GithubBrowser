import React, {Fragment} from 'react';

import {Login} from './login';

const App: () => React$Node = () => {
  return (
    <Fragment>
      <Login />
      <Login />
      <Login />
      <Login />
      <Login />
    </Fragment>
  );
};

export default App;
