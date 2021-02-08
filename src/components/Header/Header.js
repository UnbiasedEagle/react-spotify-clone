import React, { useContext } from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import SpotifyContext from "../../context/spotify/spotifyContext";

const Header = () => {
  const { user } = useContext(SpotifyContext);
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon></SearchIcon>
        <input type="text" placeholder="Search for Artists, Songs" />
      </div>
      <div className="header__right">
        <Avatar src={user?.images[0]?.url} alt={user?.display_name}></Avatar>
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
};

export default Header;
