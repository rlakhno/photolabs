import React from 'react';
import { useFavourites } from '../FavouritesContext'; // Adjust the path as necessary

const FavouritesBadge = () => {
  const { favourites } = useFavourites();
  
  return <div>Favourites: {favourites.length}</div>;
};

export default FavouritesBadge;