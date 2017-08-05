import axios from 'axios';
export default databaseCalls = {
  loginCreateUser:function(user) {
    return axios.post("/db/createUser", {
      userName:user.userName,
      queueId:user.userId,
    })
  },
  addSong:function(addSong) {
    return axios.post("/db/createUser", {
      queueId:addSong.queueId,
      songName:addSong.songName,
      albumName:addSong.albumName,
      artistName:addSong.artistName,
      artistPic:addSong.artistPic,
      trackUri:addSong.trackUri
    })
  },
  removeSong:function(removeSong) {
    return axios.post("/db/createUser", {
      queueId:addSong.queueId,
      trackUri:addSong.trackUri
    })
  }
}
