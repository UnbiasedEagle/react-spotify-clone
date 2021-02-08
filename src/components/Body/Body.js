import React, { useContext } from "react";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SpotifyContext from "../../context/spotify/spotifyContext";
import Header from "../Header/Header";
import SongRow from "../SongRow/SongRow";
import "./Body.css";

const Body = ({ spotify }) => {
  const { discoverWeekly } = useContext(SpotifyContext);

  return (
    <div className="body">
      <Header></Header>
      <div className="body__info">
        <div className="info__imageContainer">
          <img
            src="https://newjams-images.scdn.co/v2/discover-weekly/VYSAxcqdFLmUmn8rUru8penplAspI3xd9RCuTss2CrV3ViWSkREg0oyc6Ma0VBqcaSFOtzfWrhe9V8sAePdhQYY4PBUMXvRTDek8BuDf4xHbQRkqerB67DUK7YJP6SgvjhOuvIJsFcQR1XCork4au3HRQcbAmwjqQcZxet-ROmRLgTAhvKz63jEYVzpj2YP4YzjQAiJi5_xWVfuByhlwNux85w2UidpdETHp6OcnsTKlgaluzXwSyS4YbA1gpEjqlCCka2Oy_4uYvHqrk9tHU51F0YRDFniyCSSltFGGQqP_JcNmNUIit_q2ZL21WGl5VTatLL93XWIJa3FLUlTM8BUZgVel9Ll6BsgWgp1rgx4=/OTQ6NjM6MTJUNTAtODAtMA==/default"
            alt="Discover Weekly"
          />
        </div>
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discoverWeekly?.description}</p>
        </div>
      </div>
      <div className="body__icons">
        <PlayCircleFilledIcon className="body__shuffle"></PlayCircleFilledIcon>
        <FavoriteIcon fontSize="large"></FavoriteIcon>
        <MoreHorizIcon></MoreHorizIcon>
      </div>
      <div className="body__songs">
        {discoverWeekly?.tracks?.items.map((item) => {
          return <SongRow track={item?.track}></SongRow>;
        })}
      </div>
    </div>
  );
};

export default Body;
