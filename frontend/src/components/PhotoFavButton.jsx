// frontend/src/components/PhotoFavButton.jsx

import React from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ photoId, handleFavouriteClick, isFavourited }) {

  return (
    <div className="photo-list__fav-icon" onClick={() => handleFavouriteClick(photoId)}>
      <div className={`photo-list__fav-icon-svg ${isFavourited ? 'active' : 'inactive'}`}>
        {/* Using the FavIcon component, possibly passing in isActive prop if the icon appearance changes */}
        <FavIcon isActive={isFavourited}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;
