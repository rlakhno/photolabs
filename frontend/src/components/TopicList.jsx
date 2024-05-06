import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from './TopicListItem';


const TopicList = ({topics}) => {
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((item) => (
        <TopicListItem
          key={`topic-${item.id}`}
          id={item.id}
          slug={item.slug}
          title={item.title}
        />

      ))}


    </div>
  );
};

export default TopicList;
