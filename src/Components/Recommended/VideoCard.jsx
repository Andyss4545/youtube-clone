import React from "react";
import "../Recommended/VideoCard.css";

let VideoCard = ({ image, title, channel, timestamp, views, channelImage }) => {
  return (
    <div className="videoCard">
      <img className="videoCard_thumbnail" src={image} alt={channel} />

      <div className="videoCard_info">
        <img className="videoCard_avatar" src={channelImage} alt={channel} />

        <div className="videoCard_text">
          <h4>{title}</h4>
          <p>{channel}</p>

          <p>
            {views} . {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
