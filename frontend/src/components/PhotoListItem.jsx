
// PhotoListItem.jsx

import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = ({ id, imageSource, username, profile, location, isFavourited, onFavouriteToggle, onPhotoClick }) => {
  const handleFavouriteClick = (photoId) => {

    onFavouriteToggle(photoId);

  };

  // console.log("location: ", location);
  return (
    <div className="photo-list__item" onClick={() => onPhotoClick(id)}>
      <PhotoFavButton
        isFavourited={isFavourited}
        handleFavouriteClick={handleFavouriteClick}
        photoId={id} />
      <img
        className="photo-list__image"
        src={imageSource}
        alt={`Photo by ${username}`}
      />
      <div className="photo-list__user-details">
        <img
          className="photo-list__user-profile"
          src={profile}
          alt={`Profile of ${username}`}
        />
        <div className="photo-list__user-info">
          <p>{username}</p>
          <p className="photo-list__user-location">
            {location.city}, {location.country}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
// onClick={() => handleFavouriteClick(photoId)}