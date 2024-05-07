
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
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
  } = useApplicationData();

  const { photos, topics, isPhotoDetailsModalOpen, selectedPhoto } = state;

  return (
    <FavouritesProvider>
      <div className="App">
        <HomeRoute
          photos={photos}
          topics={topics}
          setPhotoSelected={setPhotoSelected}
          isPhotoDetailsModalOpen={isPhotoDetailsModalOpen}
          onClosePhotoDetailsModal={onClosePhotoDetailsModal}
        />
        {isPhotoDetailsModalOpen && (
          <PhotoDetailsModal
            photo={selectedPhoto}
            onClose={onClosePhotoDetailsModal}
          />
        )}
      </div>
    </FavouritesProvider>
  );
};

export default App;

//----------------------------------------
// // Note: Rendering a single component to build components in isolation
// const App = () => {
//   const [displayModal, setDisplayModal] = useState(false); // State for modal visibility
//   const [photoId, setPhotoId] = useState(); // State for modal visibility
//   return (
//     <FavouritesProvider>
//       <div className="App">
//         <HomeRoute
//           photos={mockPhotoData}
//           topics={mockTopicData}
//           setDisplayModal={setDisplayModal} // Pass the setDisplayModal function
//           setPhotoId={setPhotoId}
//         />
//         {displayModal && <PhotoDetailsModal
//           setDisplayModal={setDisplayModal}
//           photoId={photoId}
//           photos={mockPhotoData} />}
//       </div>
//     </FavouritesProvider>

//   );
// };

// export default App;
