// frontend/src/components/PhotoFavButton.jsx

import React, { useCallback, useState } from 'react';
import { useFavourites } from '../FavouritesContext';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ photo }) {
  // Extracting the parts of the global context you need
  const { favourites, addFavourite, removeFavourite } = useFavourites();

  // Determine if the current photo is a favourite
  const isFavourited = favourites.some(favourite => favourite.id === photo.id);

  const handleClick = () => {
    // Toggle favourited state based on whether it's already favourited
    isFavourited ? removeFavourite(photo.id) : addFavourite(photo);
  };

  // Integrating the code you had, with minor adjustments to use the isFavourited flag
  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className={`photo-list__fav-icon-svg ${isFavourited ? 'active' : 'inactive'}`}>
        {/* Using the FavIcon component, possibly passing in isActive prop if the icon appearance changes */}
        <FavIcon isActive={isFavourited}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;
