import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({setDisplayModal}) => {
  const handlePhotoClose = () => {
    // Display modal when a photo is clicked
    setDisplayModal(false);
  }
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={handlePhotoClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
    </div>
  )
};

export default PhotoDetailsModal;
