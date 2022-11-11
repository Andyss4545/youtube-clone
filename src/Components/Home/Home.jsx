import React from "react";
import Recommended from "../Recommended/Recommended";
import SideBar from "../SideBar/SideBar";
import "../Home/Home.css";

function Home() {
  return (
    <div className="home">
      <SideBar />
      <Recommended />
    </div>
  );
}

export default Home;
