import React from "react";
import "../ChannelRow/ChannelRow.css";
import VerifiedIcon from "@mui/icons-material/CheckCircleOutlineSharp";

let ChannelRow = ({
  image,
  channel,
  verified,
  subs,
  noOfVideos,
  description,
}) => {
  return (
    <div className="channelRow">
      <img className="channelRow_logo" src={image} alt={channel} />

      <div className="channelRow_text">
        <h4>
          {channel} {verified && <VerifiedIcon />}
        </h4>

        <p>
          {subs} subscribers . {noOfVideos} videos
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ChannelRow;
