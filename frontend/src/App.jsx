import React from 'react';

// import TopNavigationBar from './components/TopNavigationBar';
import HomeRoute from './routes/HomeRoute';

import './App.scss';




// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">

      <HomeRoute />
    </div>

  );
};

export default App;
