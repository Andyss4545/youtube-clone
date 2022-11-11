import React from "react";
import Recommended from "../Recommended/Recommended";
import SideBar from "../SideBar/SideBar";
import "../Home/Home.css";

let Home = () => {
  // tell the browser to import and show Sidebar.jsx and Recommended.jsx
  return (
    <div className="home">
      <SideBar />
      <Recommended />
    </div>
  );
};

export default Home;
