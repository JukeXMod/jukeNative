import mongoose from "mongoose";
let schema = mongoose.Schema;

let QueueSchema = mongoose.Schema({
  userId: String,
  userName: String,
  queueId: String,
  playlistName: String,
  apiInfo: { Boolean },
  playlist: [{
    playlistId: String,
    origin: String,
    songId: String,
    songName: String,
    albumName: String,
    artistName: String,
    trackId: String
  }]
});
QueueSchema.statics.createUser = function(queue){
  return this.create(queue);
}
QueueSchema.statics.createQueue = function(){
  return this.create();

};

QueueSchema.statics.getQueue = function(queue){
  return this.find(queue);
};

QueueSchema.statics.addToQueue = function(){
  return this.update();
};

QueueSchema.statics.removeFromQueue = function(){
  return this.findOneAndRemove();
};





let Queue = mongoose.model('QueueSchema', QueueSchema);

export default Queue;
