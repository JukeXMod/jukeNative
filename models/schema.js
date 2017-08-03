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
QueueSchema.statics.createUser = function(user){
  return this.create(user);
}

QueueSchema.statics.getQueue = function(){
  return this.find(queue);
};

QueueSchema.statics.addToQueue = function(queueId,queueSong){
  return this.update({queueId:queueId},{$push:{playlist:queueSong}});
};

QueueSchema.statics.removeFromQueue = function(){
  return this.findOneAndRemove(queue);
};

QueueSchema.plugin(autoIncrement.plugin, { model: "Queue", field: "queueId" });
let Queue = mongoose.model("Queue", QueueSchema);

export default Queue;
