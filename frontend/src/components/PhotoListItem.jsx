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
        <img
          src={profile}
          alt={`Profile of ${username}`}
        />
        <div className="photo-list__user-info">
          <p className="photo-list__username">
            {username}
          </p>
          <div className="photo-list__user-location">
            <p>
              {location.city}, {location.country}
            </p>
          </div>
        </div>
      </div>
      <p>ID: {id}</p>
    </div>
  );
};

export default PhotoListItem;
