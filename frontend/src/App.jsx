
// App.jsx
import React, { useState } from 'react';

import { FavouritesProvider } from './FavouritesContext';
import HomeRoute from './routes/HomeRoute';
import mockPhotoData from './mocks/photos';
import mockTopicData from './mocks/topics';
import PhotoDetailsModal from './routes/PhotoDetailsModal'

import './App.scss';




// Note: Rendering a single component to build components in isolation
const App = () => {
  const [displayModal, setDisplayModal] = useState(false); // State for modal visibility
  return (
    <FavouritesProvider>
      <div className="App">
        <HomeRoute 
        photos={mockPhotoData} 
        topics={mockTopicData} 
        setDisplayModal={setDisplayModal} // Pass the setDisplayModal function
        />
        {displayModal && <PhotoDetailsModal setDisplayModal={setDisplayModal}/>}
      </div>
    </FavouritesProvider>

  );
};

export default App;
