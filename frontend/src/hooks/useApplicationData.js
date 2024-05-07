
// hooks/useApplicationData.js

import { useState } from 'react';
import mockPhotoData from './mocks/photos';
import mockTopicData from './mocks/topics';

const useApplicationData = () => {
  const [state, setState] = useState({
    // Define your initial state here
    photos: {},
    topics: {},
    favPhotoIds: [],
    selectedPhoto: null,
    isPhotoDetailsModalOpen: false,
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

  const onClosePhotoDetailsModal = () => {
    setState((prevState) => ({
      ...prevState,
      isPhotoDetailsModalOpen: false,
    }));
  };

  // Load initial data from API or mocks
  // Example of loading mock data
  const loadInitialData = () => {
    // Replace with actual API calls to fetch data
    const photos={mockPhotoData}
    const topics={mockTopicData}

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
    onClosePhotoDetailsModal,
  };
};

export default useApplicationData;
