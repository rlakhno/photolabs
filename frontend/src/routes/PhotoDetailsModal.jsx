import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';
import { useFavourites } from '../FavouritesContext';

const PhotoDetailsModal = ({ setDisplayModal, photoId, photos }) => {

  const { favourites, addFavourite, removeFavourite } = useFavourites();
  const handleFavouriteToggle = (photoId) => {
    const isFavourited = favourites.some((favourite) => favourite.id === photoId);
    if (isFavourited) {
      removeFavourite(photoId);
    } else {
      const photo = photos.find((photo) => photo.id === photoId);
      addFavourite(photo);
    }
  };

  const handlePhotoClose = () => {
    // Remove modal when a close-button is clicked
    setDisplayModal(false);
  }

  const photo = photos.find((photo) => photo.id === photoId);
  // addFavourite(photo);
  const valuesArray = Object.values(photo.similar_photos);
  console.log("Photo Info: ", valuesArray);

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={handlePhotoClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <div>
        <PhotoFavButton
          isFavourited={favourites.some((favourite) => favourite.id === photo.id)}
          // handleFavouriteClick={handleFavouriteClick}
          photoId={photo.id}
        />
        <img
          className="photo-details-modal__image"
          src={photo.urls.regular}
          alt={`Photo by ${photo.user.name}`}
        />
        <div className="photo-details-modal__photographer-details">

          <img
            className="photo-details-modal__photographer-profile"
            src={photo.user.profile}
            alt={`Profile of ${photo.user.username}`}
          />
          <div className="photo-details-modal__photographer-info">
            <p>{photo.user.name}</p>
            <p className="photo-details-modal__photographer-location">
              {photo.location.city}, {photo.location.country}
            </p>
          </div>
        </div>
      </div>
      <div>
        <span className='photo-details-modal__top-bar '>
          <p>Similar Photos</p>
        </span>
      </div>
      <PhotoList photos={valuesArray} favourites={favourites}/>
    </div>
  )
};

export default PhotoDetailsModal;
