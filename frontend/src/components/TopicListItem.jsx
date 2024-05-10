//TopicListItem.jsx

import React from "react";

import "../styles/TopicListItem.scss";


const TopicListItem = ({id, slug, title, fetchPhotosByTopic}) => {
  const handleClick = () => {
    fetchPhotosByTopic(id);
  }


  return (
    <div className="topic-list__item">
      {/* <span> {title} </span> */}
      <span  onClick={handleClick}>{title}</span>
    </div>
  );
};

export default TopicListItem;
