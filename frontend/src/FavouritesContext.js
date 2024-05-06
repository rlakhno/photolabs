import React, { createContext, useState, useContext } from 'react';

const FavouritesContext = createContext();

export const useFavourites = () => useContext(FavouritesContext);

export const FavouritesProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const addFavourite = (photo) => {
    setFavourites((prevFavourites) => [...prevFavourites, photo]);
  };

  const removeFavourite = (photoId) => {
    setFavourites((prevFavourites) => prevFavourites.filter(photo => photo.id !== photoId));
  };

  return (
    <FavouritesContext.Provider value={{ favourites, addFavourite, removeFavourite }}>
      {children}
    </FavouritesContext.Provider>
  );
};