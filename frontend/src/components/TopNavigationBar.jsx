import React from 'react';

import '../styles/TopNavigationBar.scss'
import FavBadge from './FavBadge';
import FavouritesBadge from './FavouritesBadge';
import TopicList from './TopicList';

const TopNavigationBar = ({topics, isFavPhotoExist}) => {

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} />
      {/* <FavouritesBadge /> */}
      <FavBadge isFavPhotoExist={isFavPhotoExist}/>
      
    </div>
  )
}

export default TopNavigationBar;