import React, { useState } from "react";
import "../NavBar/NavBar.css";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import VideoCallSharpIcon from "@mui/icons-material/VideoCallSharp";
import AppsSharpIcon from "@mui/icons-material/AppsSharp";
import NotificationsSharpIcon from "@mui/icons-material/NotificationsSharp";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import { Link } from "react-router-dom";

let NavBar = () => {
  const [inputQuery, setInputQuery] = useState({
    text: "",
  });

  let { text } = inputQuery;

  const updateInput = (event) => {
    setInputQuery(() => ({
      ...inputQuery,
      text: event.target.value,
    }));
  };

  return (
    <div className="header">
      {/* <pre>{JSON.stringify(text)}</pre> */}
      <div className="header_left">
        <MenuSharpIcon />
        <Link to={"/"}>
          <img
            className="header_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/200px-YouTube_Logo_2017.svg.png"
            alt=""
          />
        </Link>
      </div>

      <div className="header_middle">
        <input
          name="text"
          value={text}
          onChange={updateInput}
          placeholder="Search"
          type="text"
        />

        <Link to={`/search/${text}`}>
          <SearchSharpIcon className="header_inputBtn" />
        </Link>
      </div>

      <div className="header_right">
        <VideoCallSharpIcon className="header_icon" />
        <AppsSharpIcon className="header_icon" />
        <NotificationsSharpIcon className="header_icon" />
        <AccountCircleSharpIcon
          className="header_icon"
          src="https://avatars.githubusercontent.com/u/34424896?s=400&u=06837c3ca4a1687ea496211f29497787f5f4c07e&v=4"
          alt="Temitope Omosebi"
        />
      </div>
    </div>
  );
};

export default NavBar;
