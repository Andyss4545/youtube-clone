import React from "react";
import "../SideBar/SidebarRow.css";

let SiderbarRow = ({ selected, Icon, title }) => {
  return (
    <div className={`sidebarRow ${selected && "selected"}`}>
      <Icon className="sidebarRow_icon" />
      <h2 className="sidebarRow_title">{title}</h2>
    </div>
  );
};

export default SiderbarRow;
