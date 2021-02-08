import React, { useContext } from "react";
import SidebarOption from "../SidebarOption/SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import SpotifyContext from "../../context/spotify/spotifyContext";
import "./Sidebar.css";

const Sidebar = () => {
  const { playlists } = useContext(SpotifyContext);

  return (
    <div className="sidebar">
      <div className="sidebar__logoContainer">
        <img
          src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
          alt=""
        />
      </div>
      <SidebarOption title="Home" Icon={HomeIcon}></SidebarOption>
      <SidebarOption title="Search" Icon={SearchIcon}></SidebarOption>
      <SidebarOption
        title="Your Library"
        Icon={LibraryMusicIcon}
      ></SidebarOption>
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((playlist) => {
        return (
          <SidebarOption
            key={playlist.id}
            title={playlist.name}
          ></SidebarOption>
        );
      })}
    </div>
  );
};

export default Sidebar;
