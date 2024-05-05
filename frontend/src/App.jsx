import React from 'react';

import TopNavigationBar from './components/TopNavigationBar';
import PhotoList from './components/PhotoList';

import './App.scss';



// Define the number of photos to render
const numPhotos = 3;

// Create an array of length numPhotos (e.g., [0, 1, 2] for numPhotos = 3)
// const photos = Array.from({ length: numPhotos }, (_, index) => index);

// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      <TopNavigationBar />

      <PhotoList />
    </div>

  );
};

export default App;
