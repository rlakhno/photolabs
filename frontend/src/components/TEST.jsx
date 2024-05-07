
// ------------------------------

import { useState } from 'react';
import mockPhotoData from '../mocks/photos';
import mockTopicData from '../mocks/topics';


const useApplicationData = () => {
  const [state, setState] = useState({
    // Define your initial state here
    photos: {},
    topics: {},
    favPhotoIds: [],
    selectedPhoto: null,
  });

  const updateToFavPhotoIds = (newFavPhotoIds) => {
    setState((prevState) => ({
      ...prevState,
      favPhotoIds: newFavPhotoIds,
    }));
  };

  const setPhotoSelected = (photo) => {
    setState((prevState) => ({
      ...prevState,
      selectedPhoto: photo,
    }));
  };


  // Load initial data from API or mocks
  // Example of loading mock data
  const loadInitialData = () => {
 

    setState({
      ...state,
      photos: mockPhotoData,
      topics: mockTopicData,
    });
  };

  // Call loadInitialData when the component mounts
  useState(() => {
    loadInitialData();
  }, []); // Empty dependency array means it runs only once on mount

  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
  };
};

export default useApplicationData;

