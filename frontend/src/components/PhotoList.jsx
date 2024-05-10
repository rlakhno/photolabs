
// PhotoList.jsx
import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";



const PhotoList = ({ photos, favourites, addFavourite, removeFavourite,  setPhotoSelected }) => {
  const handleFavouriteToggle = (photoId) => {
    const isFavourited = favourites.some((favourite) => favourite.id === photoId);
    if (isFavourited) {
      removeFavourite(photoId);
    } else {
      const photo = photos.find((photo) => photo.id === photoId);
      addFavourite(photo);
    }
  };

  // const handlePhotoClick = (photoId) => {
  //   const photo = photos.find((photo) => photo.id === photoId);
  //   // Display modal when a photo is clicked
  //   // setDisplayModal(true);
  //   setPhotoSelected(photo);
  // }
  // Check if photos is an array
// if (Array.isArray(photos)) {
//   // If photos is not an array, create a new array with photo.similar_photos
//   photos = [photos.similar_photos];
//   console.log("PHOTOS is Array: ", photos);
// }
  console.log("PHOTOS: ", photos);
 
  return (
    <ul className="photo-list">
      {photos.map((item) => (
        <PhotoListItem
          key={item.id}
          id={item.id}
          location={item.location}
          imageSource={item.urls.regular} // Use regular image URL
          username={item.user.name} // Using name instead of username
          profile={item.user.profile}
          isFavourited={favourites.some((favourite) => favourite.id === item.id)}
          onFavouriteToggle={handleFavouriteToggle}
          // onPhotoClick={handlePhotoClick}
          photo={item} 
          setPhotoSelected={setPhotoSelected}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
