// PhotoListItem.jsx

import React from "react";

import "../styles/PhotoListItem.scss";



const PhotoListItem = ({ imageSource, username, profile, location, id }) => {

  return (
    <div className="photo-list__item">
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
