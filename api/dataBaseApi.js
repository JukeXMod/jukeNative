import axios from 'axios';
const HOSTPATH = "http://10.0.2.2:4000"
export default databaseCalls = {
  loginCreateUser:function(user) {
    return axios.post("/db/createUser", {
      userName:user.userName,
      queueId:user.userId,
    });
  },

  addSong:function(addSong) {
    return axios.post("/db/createUser", {
      queueId:addSong.queueId,
      songName:addSong.songName,
      albumName:addSong.albumName,
      artistName:addSong.artistName,
      artistPic:addSong.artistPic,
      trackUri:addSong.trackUri
    });
  },

  removeSong:function(removeSong) {
    return axios.post(HOSTPATH+"/db/removesong", {
      queueId:removeSong.queueId,
      trackUri:removeSong.trackUri
    });
  },

  getSongs:function(queueId) {
    return axios.post(HOSTPATH+"/db/getqueue", {
      queueId:queueId
    })
  }
}
