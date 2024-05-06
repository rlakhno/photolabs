import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({setDisplayModal, photoId, photos}) => {
  const handlePhotoClose = () => {
    // Remove modal when a close-button is clicked
    setDisplayModal(false);
  }

  const photo = photos.find((photo) => photo.id === photoId);
      // addFavourite(photo);
  console.log("Photo Info: ", photo);

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={handlePhotoClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <span>photoId is {photoId}</span>
    </div>
  )
};

export default PhotoDetailsModal;
