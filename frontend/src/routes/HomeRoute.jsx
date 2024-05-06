
// HomeRoute.jsx
import React from 'react';
import { useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import { useFavourites } from '../FavouritesContext';

const HomeRoute = ({ photos, topics, setDisplayModal, setPhotoId }) => {

  const { favourites, addFavourite, removeFavourite } = useFavourites();
  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} isFavPhotoExist={favourites.length > 0} />
       {/* Passing the context values down as props, which might be unnecessary */}
       <PhotoList
        photos={photos}
        favourites={favourites}
        addFavourite={addFavourite}
        removeFavourite={removeFavourite}
        setDisplayModal={setDisplayModal}
        setPhotoId={setPhotoId}
      />
    </div>
  );
};

export default HomeRoute;
