import React from 'react';

// import PhotoListItem from './components/PhotoListItem';
import PhotoList from './components/PhotoList';
// import PhotoFavButton from './components/PhotoFavButton';
import './App.scss';



// Define the number of photos to render
const numPhotos = 3;

// Create an array of length numPhotos (e.g., [0, 1, 2] for numPhotos = 3)
// const photos = Array.from({ length: numPhotos }, (_, index) => index);

// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">

      {/* {photos.map((index) => (
        <div key={`photo-${index}`}>
          <PhotoListItem
            key={`item-${index}`}
            id={sampleDataForPhotoListItem.id}
            location={sampleDataForPhotoListItem.location}
            imageSource={sampleDataForPhotoListItem.imageSource}
            username={sampleDataForPhotoListItem.username}
            profile={sampleDataForPhotoListItem.profile}
          />
          
        </div>
      ))} */}
      <PhotoList />
    </div>

  );
};

export default App;
