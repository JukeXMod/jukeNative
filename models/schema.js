import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";
let schema = mongoose.Schema;

autoIncrement.initialize(mongoose.connection);

let QueueSchema = mongoose.Schema({
  userId: String,
  userName: String,
  playlistName: String,
  queueId:{type:Number, ref:"queueId"},
  apiInfo: { spotify:Boolean },
  playlist: [{
    origin: String,
    songName: String,
    albumName: String,
    artistName: String,
    artistPic: String,
    trackUri: String
  }]
});
QueueSchema.statics.createUser = function(user) {
  this.findOne({userId:user.userId})
  .then(function(result) {
    if(result.length > 0){
      res.status(200)
      .send(result)
    }
  })
  .catch(function(){
    res.status(500)
    .send("Error occured for lookup");
  });
  return this.create(user);
}

QueueSchema.statics.getQueue = function(queueId){
  return this.findOne({queueId:queueId});
};

QueueSchema.statics.addToQueue = function(queueId,queueSong){
  return this.update({queueId:queueId},{$push:{playlist:queueSong}});
};

QueueSchema.statics.removeFromQueue = function(queueId, trackUri){
  return this.update({queueId:queueId},{$pull:{playlist:{trackUri:queueSong.trackUri}}});
};

QueueSchema.plugin(autoIncrement.plugin, { model: "Queue", field: "queueId" });
let Queue = mongoose.model("Queue", QueueSchema);

export default Queue;
