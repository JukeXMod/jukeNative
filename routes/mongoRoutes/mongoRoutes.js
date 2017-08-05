import express from 'express';
import QueueSchema from '../../models/schema';
import httpImport from "http";
import socket from "socket.io";

let http = httpImport.Server();
let io = socket(http);
let router = express.Router();
let trackId = '';

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

router.post('/createuser', function(req, res) {
  let userName = req.body.userName;
  let userId = req.body.userId;
  QueueSchema.findOne(query)
  .then(function(result) {
    if(result.length > 0){
      res.status(200)
      .send(result)
    }
    QueueSchema.createUser({userId: userId, userName: userName})
      .then(function(results){
        res.status(200)
        .send(results)
      })
  })
  .catch(function(error){
    res.status(500)
    .send(error)
  });
});

router.post('/addsong', function(req, res) {
  let queueId = req.body.queueId;
  let songName = req.body.songName;
  let albumName = req.body.albumName;
  let artistName = req.body.artistName;
  let artistPic = req.body.artistPic;
  let trackUri = req.body.trackUri;
  console.log(req.body);
  if(!queueId && !trackUri) {
    res.status(422)
    .send("missing body params");
  }
  let addSong = {
     songName: songName,
     albumName: albumName,
     artistName: artistName,
     artistPic: artistPic,
     trackUri: trackUri
   };
   QueueSchema.findOne()
  QueueSchema.addToQueue(queueId,addSong)
  .then(function(results) {
    res.status(200)
    .send(results)
  })
  .catch(function(error) {
    res.status(500)
    .send(error)
  });
});

router.post("/removesong", function(req, res) {
  let queueId = req.body.queueId;
  let trackUri = req.body.trackUri;
  if(!queueId && !trackUri) {
    res.status(422)
    .send("missing body params");
  }
    QueueSchema.removeFromQueue(queueId,trackUri)
    .then(function(results) {
      console.log();
      res.status(200)
      .send(results)
    })
  .catch(function(error) {
    res.status(500)
    .send(error)
  });
});

router.post("/getqueue",function(req,res) {
  let queueId = req.body.queueId;
  QueueSchema.getQueue(queueId)
  .then(function(results) {
    console.log(results);
    res.status(200)
    .send(results)
  })
  .catch(function(error) {
    res.status(500)
    .send(error)
  });
});

export default router;
