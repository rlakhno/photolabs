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
      <button  onClick={handleClick}>{title}</button>
    </div>
  );
};

export default TopicListItem;
