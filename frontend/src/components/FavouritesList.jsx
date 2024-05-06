import React from 'react';
import { useFavourites } from '../FavouritesContext'; // Correct the path as necessary

export const FavouritesList = () => {
  const { favourites } = useFavourites();

  return (
    <ul>
      {favourites.map(photo => (
        <li key={photo.id}>
          {/* Display the photo and/or details */}
        </li>
      ))}
    </ul>
  );
};