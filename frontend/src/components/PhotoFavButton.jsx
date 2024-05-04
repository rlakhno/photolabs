// frontend/src/components/PhotoFavButton.jsx

import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';



function PhotoFavButton(props) {
  const [liked, setLiked] = useState("Inactive");

  const handleClick = () => {
    // Toggle the liked state when the icon is clicked
    setLiked(liked === "Inactive" ? "Active" : "Inactive");
  
  };
  return (
    <div className="photo-list__fav-icon">
      <div className={`photo-list__fav-icon-svg ${liked === 'Active' ? 'active' : 'inactive'}`} onClick={handleClick}>
        {/* Insert React */}
        <FavIcon />
      </div>
    </div>
  );
}

export default PhotoFavButton;