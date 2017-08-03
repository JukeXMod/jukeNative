import axios from "axios";
import Queue from 'Queue';


let config = {
  baseURL: "https://api.spotify.com/v1/",
  timeout: 2000,
  headers: {"Authorization": "foobar", "Content-Type":"application/json"}
});

export default const spotifyApi = {
  createPlayList: () => {
    // this will need to be added to our server
    return axios.get(`/users/${userId}/playlists`, config);
  },
  addTrackToPlayList: () => {
    // added to our server queue list
    return axios.post(`/users/${userId}/playlists/${playlistId}/tracks`, config);
  },


}

// sign in- store data async
// creation -
// host page - call route and pass info -- request create a user check if exist, if do add to database if dont create and store in async thing (wlll talk later)
// che
// host - name queue - queueKey schema
// Optionally the request above could also be done as
//
