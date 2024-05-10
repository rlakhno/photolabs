import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';
import { useFavourites } from '../FavouritesContext';

const PhotoDetailsModal = ({ setPhotoSelected, photos, selectedPhoto }) => {

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
    
    setPhotoSelected(null);

  }



 console.log("selectedPhoto: ", selectedPhoto);

  // const valuesArray = Object.values(selectedPhoto.similar_photos);
 

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={handlePhotoClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <div className='photo-details-modal__images'>
        <PhotoFavButton
          isFavourited={favourites.some((favourite) => favourite.id === selectedPhoto.id)}
          handleFavouriteClick={handleFavouriteToggle}
          photoId={selectedPhoto.id}
        />
        <img
          className="photo-details-modal__image"
          src={selectedPhoto.urls.full }
          alt={`Photo by ${selectedPhoto.user.name}`}
        />
        <div className="photo-details-modal__photographer-details">

          <img
            className="photo-details-modal__photographer-profile"
            src={selectedPhoto.user.profile}
            alt={`Profile of ${selectedPhoto.user.username}`}
          />
          <div className="photo-details-modal__photographer-info">
            <p>{selectedPhoto.user.name}</p>
            <p className="photo-details-modal__photographer-location">
              {selectedPhoto.location.city}, {selectedPhoto.location.country}
            </p>
          </div>
        </div>
      </div>
      <div>
        <span className='photo-details-modal__top-bar '>
          <p>Similar Photos</p>
        </span>
      </div>
      <PhotoList 
      photos={selectedPhoto.similar_photos} 
      // photos={selectedPhoto}
      favourites={favourites} addFavourite={addFavourite} removeFavourite={removeFavourite} setPhotoSelected={null}/>
    </div>
  )
};

export default PhotoDetailsModal;
