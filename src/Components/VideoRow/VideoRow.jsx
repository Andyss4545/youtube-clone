import React from "react";
import "../VideoRow/VideoRow.css";

function VideoRow({
  views,
  subs,
  description,
  timestamp,
  channel,
  title,
  image,
}) {

  // pass views, subs, description, timestamp, channel, title, image as props
  return (
    <div className="videoRow">
      <img src={image} alt={title} />
      <div className="videoRow_text">
        <h3>{title}</h3>
        <p className="videoRow_headline">
          {channel} .{" "}
          <span className="videoRow_subs">
            <span className="videoRow_subNumber">{subs} </span>
            Subscribers
          </span>
          <span>
            {views} views . {timestamp}
          </span>
        </p>
        <p className="videoRow_description">{description}</p>
      </div>
    </div>
  );
}

export default VideoRow;
