import { useReducer } from "react";
import SpotifyContext from "./spotifyContext";
import SpotifyReducer from "./spotifyReducer";
import SpotifyActionTypes from "./types";

const SpotifyState = (props) => {
  const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: null,
    // "BQBMePKtjbNZ3Tm1bR0w3FsZupzO1s8Xydn3qZM6YdLLevhX90HSi1XeVWJswmCG40G_LvtXYjhZ9PkIKvnRYJvUzYYgR2kbiV3SmgnpU5vn1GRMbBDJou2PN",
    discoverWeekly: null,
  };

  const [state, dispatch] = useReducer(SpotifyReducer, initialState);

  const setUser = (user) => {
    return dispatch({
      type: SpotifyActionTypes.SET_USER,
      payload: user,
    });
  };

  const setToken = (token) => {
    return dispatch({
      type: SpotifyActionTypes.SET_TOKEN,
      payload: token,
    });
  };

  const setPlaylists = (playlists) => {
    return dispatch({
      type: SpotifyActionTypes.SET_PLAYLISTS,
      payload: playlists,
    });
  };

  const setDiscoverWeekly = (discoverWeekly) => {
    return dispatch({
      type: SpotifyActionTypes.SET_DISCOVER_WEEKLY,
      payload: discoverWeekly,
    });
  };

  const setItem = (item) => {
    return dispatch({
      type: SpotifyActionTypes.SET_ITEM,
      payload: item,
    });
  };

  const setPlaying = (isPlaying) => {
    return dispatch({
      type: SpotifyActionTypes.SET_PLAYING,
      payload: isPlaying,
    });
  };

  return (
    <SpotifyContext.Provider
      value={{
        user: state.user,
        token: state.token,
        playlists: state.playlists,
        discoverWeekly: state.discoverWeekly,
        item: state.item,
        playing: state.playing,
        setToken,
        setUser,
        setPlaylists,
        setDiscoverWeekly,
        setItem,
        setPlaying,
      }}
    >
      {props.children}
    </SpotifyContext.Provider>
  );
};

export default SpotifyState;
