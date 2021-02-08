import React, { useContext, useEffect } from "react";
import SpotifyWebAPI from "spotify-web-api-js";
import SpotifyContext from "../context/spotify/spotifyContext";
import Login from "./Login/Login";
import Player from "./Player/Player";

const spotify = new SpotifyWebAPI();

function App({ match, location, history }) {
  const {
    setUser,
    setToken,
    token,
    setPlaylists,
    setDiscoverWeekly,
  } = useContext(SpotifyContext);

  const getAccessToken = (hash) => {
    return hash.split("=")[1].split("&")[0];
  };

  useEffect(() => {
    if (location && location.hash) {
      const token = getAccessToken(location.hash);
      window.location.hash = "";
      if (token) {
        // Setting token in global state
        setToken(token);

        // Setting token in spotify object to access the spotify api to get the data
        spotify.setAccessToken(token);

        spotify.getMe().then((user) => {
          // Setting user in global state
          setUser(user);
        });

        spotify.getUserPlaylists().then((playlists) => {
          setPlaylists(playlists);
        });

        spotify.getPlaylist("37i9dQZEVXcJZyENOWUFo7").then((response) => {
          setDiscoverWeekly(response);
        });
      }
    }
  }, []);

  return (
    <div className="app">
      {token ? <Player spotify={spotify}></Player> : <Login></Login>}
    </div>
  );
}

export default App;
