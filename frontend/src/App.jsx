import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import PhotoList from './components/PhotoList';
import PhotoFavButton from './components/PhotoFavButton';
import './App.scss';


const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

// Define the number of photos to render
const numPhotos = 3;

// Create an array of length numPhotos (e.g., [0, 1, 2] for numPhotos = 3)
const photos = Array.from({ length: numPhotos }, (_, index) => index);

// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">

      {photos.map((index) => (
        <div key={`photo-${index}`}>
          <PhotoFavButton key={`fav-${index}`} />
          <PhotoListItem
            key={`item-${index}`}
            id={sampleDataForPhotoListItem.id}
            location={sampleDataForPhotoListItem.location}
            imageSource={sampleDataForPhotoListItem.imageSource}
            username={sampleDataForPhotoListItem.username}
            profile={sampleDataForPhotoListItem.profile}
          />
        </div>
      ))}
    </div>

  );
};

export default App;
