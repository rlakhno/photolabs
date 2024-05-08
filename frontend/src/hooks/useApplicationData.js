
// hooks/useApplicationData.js

import { useReducer, useEffect } from 'react';

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
        photos: action.payload,
      };
    case ACTIONS.SET_TOPIC_DATA:
      return {
        ...state,
        topics: action.payload,
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
    photos: [],
    topics: [],
    favPhotoIds: [],
    selectedPhoto: null,
  });

  // Fetch photo data from API
  useEffect(() => {
    fetch("/api/photos")
      .then((response) => response.json())
      .then((data) => {dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data });
      console.log("Photo Data Updated", data);
  })
      .catch((error) => {
        console.error('Error fetching photo data:', error);
      });
  }, []); // Empty dependency array ensures this effect runs only once

  // Fetch topic data from API
  useEffect(() => {
    fetch("/api/topics")
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data }))
      .catch((error) => {
        console.error('Error fetching topic data:', error);
      });
  }, []); // Empty dependency array ensures this effect runs only once

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

  return {
    state,
    updateToFavPhotoIds,
    removeFromFavPhotoIds,
    setPhotoSelected,
    // Add other actions as needed...
  };
};

export default useApplicationData;





// ------------------------------------

// import { useReducer, useEffect } from 'react';
// import mockPhotoData from '../mocks/photos';
// import mockTopicData from '../mocks/topics';

// // Define action types
// export const ACTIONS = {
//   FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
//   FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
//   SET_PHOTO_DATA: 'SET_PHOTO_DATA',
//   SET_TOPIC_DATA: 'SET_TOPIC_DATA',
//   SELECT_PHOTO: 'SELECT_PHOTO',
// };

// // Reducer function to manage state based on dispatched actions
// const reducer = (state, action) => {
//   switch (action.type) {
//     case ACTIONS.FAV_PHOTO_ADDED:
//       return {
//         ...state,
//         favPhotoIds: [...state.favPhotoIds, action.payload.photoId],
//       };
//     case ACTIONS.FAV_PHOTO_REMOVED:
//       return {
//         ...state,
//         favPhotoIds: state.favPhotoIds.filter(id => id !== action.payload.photoId),
//       };
//     case ACTIONS.SET_PHOTO_DATA:
//       return {
//         ...state,
//         photos: action.payload.photos,
//       };
//     case ACTIONS.SET_TOPIC_DATA:
//       return {
//         ...state,
//         topics: action.payload.topics,
//       };
//     case ACTIONS.SELECT_PHOTO:
//       return {
//         ...state,
//         selectedPhoto: action.payload.photo,
//       };
//     default:
//       throw new Error(`Unsupported action type: ${action.type}`);
//   }
// };

// const useApplicationData = () => {
//   // Initialize state using useReducer
//   const [state, dispatch] = useReducer(reducer, {
//     photos: mockPhotoData,
//     topics: mockTopicData,
//     favPhotoIds: [],
//     selectedPhoto: null,
//   });

//   // Helper functions to dispatch actions
//   const updateToFavPhotoIds = (newFavPhotoIds) => {
//     dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: { photoId: newFavPhotoIds } });
//   };

//   const removeFromFavPhotoIds = (removedPhotoId) => {
//     dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: { photoId: removedPhotoId } });
//   };

//   const setPhotoSelected = (photo) => {
//     dispatch({ type: ACTIONS.SELECT_PHOTO, payload: { photo } });
//   };


//   return {
//     state,
//     updateToFavPhotoIds,
//     removeFromFavPhotoIds,
//     setPhotoSelected,
//     // Add other actions as needed...
//   };
// };

// export default useApplicationData;



