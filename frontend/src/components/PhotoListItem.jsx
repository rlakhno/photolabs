// PhotoListItem.jsx

import React from "react";

import "../styles/PhotoListItem.scss";



const PhotoListItem = (props) => {
  return (
    <div className="photo-list__item">
      <img
        src={props.sampleDataForPhotoListItem.imageSource}
        alt={`Photo by ${props.sampleDataForPhotoListItem.username}`}
      />
      <div>
        <img
          src={props.sampleDataForPhotoListItem.profile}
          alt={`Profile of ${props.sampleDataForPhotoListItem.username}`}
        />
        <div>
          <p>
            {props.sampleDataForPhotoListItem.username}
          </p>
          <p>
            {props.sampleDataForPhotoListItem.location.city},{" "}
            {props.sampleDataForPhotoListItem.location.country}
          </p>
        </div>
      </div>
      <p>ID: {props.sampleDataForPhotoListItem.id}</p>
    </div>
  );
};

export default PhotoListItem;
