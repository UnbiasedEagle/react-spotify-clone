import React from "react";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleFilled";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import "./Footer.css";
import { Grid, Slider } from "@material-ui/core";
import { VolumeDown } from "@material-ui/icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__left">
        <div className="footer__imageContainer">
          <img
            src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/artistic-album-cover-design-template-d12ef0296af80b58363dc0deef077ecc_screen.jpg?ts=1561488440"
            alt="album"
          />
        </div>
        <div className="footer__songInfo">
          <h4>Yeah!</h4>
          <p>User</p>
        </div>
      </div>
      <div className="footer__center">
        <ShuffleIcon className="footer__green"></ShuffleIcon>
        <SkipPreviousIcon className="footer__icon"></SkipPreviousIcon>
        <PlayCircleOutlineIcon
          className="footer__icon"
          fontSize="large"
        ></PlayCircleOutlineIcon>
        <SkipNextIcon className="footer__icon"></SkipNextIcon>
        <RepeatIcon className="footer__green"></RepeatIcon>
      </div>
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon></PlaylistPlayIcon>
          </Grid>
          <Grid item>
            <VolumeDown></VolumeDown>
          </Grid>
          <Grid item xs>
            <Slider></Slider>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
