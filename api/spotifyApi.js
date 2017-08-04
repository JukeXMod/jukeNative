import axios from 'axios';

export default spotifyApi = {
  searchSong:function(searchSong) {
    let formatedSearch = searchSong.replace(" ","+").trim();
    return axios.get("/db/createUser", {
      params:{
        query:formatedSearch,
        type:"album,artist,playlist,track"
      },
      headers:{Authorization:`Bearer ${token}`}
    })
  },
}
