import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";



const PhotoList = ({photos}) => {
  return (
    <ul className="photo-list">
      {photos.map((item) => (
        <PhotoListItem
          key={`item-${item.id}`}
          id={item.id}
          location={item.location}
          imageSource={item.urls.regular} // Use regular image URL
          username={item.user.name} // Using name instaed of username
          profile={item.user.profile}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
