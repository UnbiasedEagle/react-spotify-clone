import SpotifyActionTypes from "./types";

const spotifyReducer = (state, action) => {
  switch (action.type) {
    case SpotifyActionTypes.SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case SpotifyActionTypes.SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case SpotifyActionTypes.SET_PLAYLISTS:
      return {
        ...state,
        playlists: action.payload,
      };
    case SpotifyActionTypes.SET_DISCOVER_WEEKLY:
      return {
        ...state,
        discoverWeekly: action.payload,
      };
    default:
      return state;
  }
};

export default spotifyReducer;
