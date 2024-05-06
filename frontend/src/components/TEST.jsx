import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = ({ id, imageSource, username, profile, location, isFavourited, onFavouriteToggle }) => {
  const handleFavouriteClick = (e) => {
    e.stopPropagation(); // Prevents event propagation to the parent (PhotoListItem) when the button is clicked
    onFavouriteToggle(); // Calls the onFavouriteToggle function passed from PhotoList
  };

  return (
    <div className="photo-list__item">
      <PhotoFavButton isFavourited={isFavourited} onClick={handleFavouriteClick} />
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
