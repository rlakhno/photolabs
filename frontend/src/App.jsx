
// App.jsx
import React, { useState } from 'react';

import { FavouritesProvider } from './FavouritesContext';
import HomeRoute from './routes/HomeRoute';
import mockPhotoData from './mocks/photos';
import mockTopicData from './mocks/topics';
import PhotoDetailsModal from './routes/PhotoDetailsModal'
import useApplicationData from './hooks/useApplicationData';

import './App.scss';

const App = () => {
  const {
    state,
    fetchPhotosByTopic,
    setPhotoSelected,
  } = useApplicationData();

  const { photos, topics, selectedPhoto } = state;
  // console.log("App - Photo Data Updated", photos);

  return (
    <FavouritesProvider>
      <div className="App">
        <HomeRoute
          photos={photos}
          topics={topics}
          setPhotoSelected={setPhotoSelected}
          fetchPhotosByTopic={fetchPhotosByTopic}
        />
        {!!selectedPhoto && (
          <PhotoDetailsModal
            setPhotoSelected={setPhotoSelected}
            photos={photos}
            selectedPhoto={selectedPhoto}
          />
        )}
      </div>
    </FavouritesProvider>
  );
};

export default App;
