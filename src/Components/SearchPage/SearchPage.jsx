import React from "react";
import "../SearchPage/SearchPage.css";
import SideBar from "../SideBar/SideBar";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import ChannelRow from "../ChannelRow/ChannelRow";
import VideoRow from "../VideoRow/VideoRow";

function SearchPage() {
  return (
    <React.Fragment>
      <div className="searchPage">
        <SideBar />

        <div className="searchPage_result">
          <div className="searchPage_filter">
            <TuneOutlinedIcon />
            <h2>FILTER</h2>
          </div>
          <hr />

          <ChannelRow
            image="https://yt3.ggpht.com/yti/AJo0G0nuq11fXT967zKSg92vLuRlF3QBqc7VJdzSLQheJA=s88-c-k-c0x00ffffff-no-rj-mo"
            channel="Warner Programmers"
            subs="850k"
            verified
            noOfVideos={200}
            description="You can find amazing programming and UI designs videos on our channel, ensure to subscribes so you don't miss out!"
          />
          <hr />

          <VideoRow
            views="2.3M"
            subs="322k"
            description="You can find amazing programming and UI designs videos on our channel, ensure to subscribes so you don't miss out!"
            timestamp="2 days ago"
            channel="TrailerSpot"
            title="Black Panther 2 Wakanda Forever"
            image="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2022/04/28/16511668805764.jpg"
          />

          <VideoRow
            views="208k"
            subs="200k"
            description="You can find amazing programming and UI designs videos on our channel, ensure to subscribes so you don't miss out!"
            timestamp="TrailerSpot"
            channel="TrailerSpot"
            title="Black Adam Post Credit Scene EXPLAINED"
            image="https://consequence.net/wp-content/uploads/2022/07/shazam-fury-of-the-gods-trailer.jpg?quality=80"
          />

          <VideoRow
            views="16M"
            subs="800k"
            description="You can find amazing programming and UI designs videos on our channel, ensure to subscribes so you don't miss out!"
            timestamp="3 months ago"
            channel="TrailerSpot"
            title="SHAZAM! FURY OF THE GODS Trailer 1"
            image="https://consequence.net/wp-content/uploads/2022/07/shazam-fury-of-the-gods-trailer.jpg?quality=80"
          />
        </div>
      </div>
    </React.Fragment>
  );
}

export default SearchPage;
