import React from 'react';

// import TopNavigationBar from './components/TopNavigationBar';
import HomeRoute from './routes/HomeRoute';
import mockPhotoData from './mocks/photos';
import mockTopicData from './mocks/topics';

import './App.scss';




// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">

      <HomeRoute photos={mockPhotoData} topics={mockTopicData} />
    </div>

  );
};

export default App;
