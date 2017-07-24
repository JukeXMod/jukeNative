import axios from "axios";

let config = {
  baseURL: "https://api.spotify.com/v1/",
  timeout: 1000,
  headers: {"Authorization": "foobar", "Content-Type":"application/json"}
});

export default const spotifyApi = {
  createPlayList: () => {
    // this will need to be added to our server
    return axios.get(`/users/${user_id}/playlists`, config);
  },
  addTrackToPlayList: () => {
    // added to our server queue list
    return axios.get("/users/{user_id}/playlists", config);
  },
}
// Optionally the request above could also be done as
