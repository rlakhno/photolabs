import React from 'react';
import { useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import { useFavourites } from '../FavouritesContext';

const HomeRoute = ({ photos, topics}) => {
  // This is technically unnecessary if PhotoList and its children can access
  // the context directly, which is the whole point of using Context API.
  const { favourites, addFavourite, removeFavourite } = useFavourites();
  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} />
       {/* Passing the context values down as props, which might be unnecessary */}
       <PhotoList
        photos={photos}
        favourites={favourites}
        addFavourite={addFavourite}
        removeFavourite={removeFavourite}
      />
    </div>
  );
};

export default HomeRoute;
