import React from "react";
import "../SideBar/SideBar.css";
import SiderbarRow from "./SiderbarRow";
import HomeSharpIcon from "@mui/icons-material/HomeSharp";
import WhatshotSharpIcon from "@mui/icons-material/WhatshotSharp";
import SubscriptionsSharpIcon from "@mui/icons-material/SubscriptionsSharp";
import VideoLibrarySharpIcon from "@mui/icons-material/VideoLibrarySharp";
import HistorySharpIcon from "@mui/icons-material/HistorySharp";
import OndemandVideoSharpIcon from "@mui/icons-material/OndemandVideoSharp";
import {
  ExpandMoreOutlined,
  ThumbUpAltOutlined,
  WatchLaterSharp,
} from "@mui/icons-material";

let SideBar = () => {
  return (
    <div className="sidebar">
      <SiderbarRow selected Icon={HomeSharpIcon} title="Home" />
      <SiderbarRow Icon={WhatshotSharpIcon} title="Trending" />
      <SiderbarRow Icon={SubscriptionsSharpIcon} title="Subscription" />
      <hr />
      <SiderbarRow Icon={VideoLibrarySharpIcon} title="Library" />
      <SiderbarRow Icon={HistorySharpIcon} title="History" />
      <SiderbarRow Icon={OndemandVideoSharpIcon} title="Your Videos" />
      <SiderbarRow Icon={WatchLaterSharp} title="Watch Later" />
      <SiderbarRow Icon={ThumbUpAltOutlined} title="Liked videos" />
      <SiderbarRow Icon={ExpandMoreOutlined} title="Show more" />
      <hr />
    </div>
  );
};

export default SideBar;
