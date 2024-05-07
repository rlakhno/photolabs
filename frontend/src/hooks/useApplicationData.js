
// hooks/useApplicationData.js

import { useReducer } from 'react';
import mockPhotoData from '../mocks/photos';
import mockTopicData from '../mocks/topics';

// Define action types
export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
};

// Reducer function to manage state based on dispatched actions
const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return {
        ...state,
        favPhotoIds: [...state.favPhotoIds, action.payload.photoId],
      };
    case ACTIONS.FAV_PHOTO_REMOVED:
      return {
        ...state,
        favPhotoIds: state.favPhotoIds.filter(id => id !== action.payload.photoId),
      };
    case ACTIONS.SET_PHOTO_DATA:
      return {
        ...state,
        photos: action.payload.photos,
      };
    case ACTIONS.SET_TOPIC_DATA:
      return {
        ...state,
        topics: action.payload.topics,
      };
    case ACTIONS.SELECT_PHOTO:
      return {
        ...state,
        selectedPhoto: action.payload.photo,
      };
    default:
      throw new Error(`Unsupported action type: ${action.type}`);
  }
};

const useApplicationData = () => {
  // Initialize state using useReducer
  const [state, dispatch] = useReducer(reducer, {
    photos: {},
    topics: {},
    favPhotoIds: [],
    selectedPhoto: null,
  });

  // Helper functions to dispatch actions
  const updateToFavPhotoIds = (newFavPhotoIds) => {
    dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: { photoId: newFavPhotoIds } });
  };

  const removeFromFavPhotoIds = (removedPhotoId) => {
    dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: { photoId: removedPhotoId } });
  };

  const setPhotoSelected = (photo) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: { photo } });
  };

  // You can add more actions here...

  return {
    state,
    updateToFavPhotoIds,
    removeFromFavPhotoIds,
    setPhotoSelected,
    // Add other actions as needed...
  };
};

export default useApplicationData;





// ------------------------------

// import { useState } from 'react';
// import mockPhotoData from '../mocks/photos';
// import mockTopicData from '../mocks/topics';


// const useApplicationData = () => {
//   const [state, setState] = useState({
//     // Define your initial state here
//     photos: {},
//     topics: {},
//     favPhotoIds: [],
//     selectedPhoto: null,
//   });

//   const updateToFavPhotoIds = (newFavPhotoIds) => {
//     setState((prevState) => ({
//       ...prevState,
//       favPhotoIds: newFavPhotoIds,
//     }));
//   };

//   const setPhotoSelected = (photo) => {
//     setState((prevState) => ({
//       ...prevState,
//       selectedPhoto: photo,
//     }));
//   };


//   // Load initial data from API or mocks
//   // Example of loading mock data
//   const loadInitialData = () => {
 

//     setState({
//       ...state,
//       photos: mockPhotoData,
//       topics: mockTopicData,
//     });
//   };

//   // Call loadInitialData when the component mounts
//   useState(() => {
//     loadInitialData();
//   }, []); // Empty dependency array means it runs only once on mount

//   return {
//     state,
//     updateToFavPhotoIds,
//     setPhotoSelected,
//   };
// };

// export default useApplicationData;
