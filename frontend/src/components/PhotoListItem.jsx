// PhotoListItem.jsx

import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from './PhotoFavButton';



const PhotoListItem = ({ imageSource, username, profile, location, id }) => {
  const photo = { imageSource, username, profile, location, id };

  return (
    <div className="photo-list__item">
      <PhotoFavButton photo={photo}/>
      <img className="photo-list__image "
        src={imageSource}
        alt={`Photo by ${username}`}
      />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile"
          src={profile}
          alt={`Profile of ${username}`}
        />
        <div className="photo-list__user-info">
          <p>
            {username}
          </p>
          <p className="photo-list__user-location">
            {location.city}, {location.country}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
