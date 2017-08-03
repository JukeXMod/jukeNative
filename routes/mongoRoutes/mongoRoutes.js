
import express from 'express';
import QueueSchema from '../../models/schema';


let router = express.Router();
let trackId = '';


router.post('/createuser', function(req, res) {
  let userName = req.body.userName;
  let userId = req.body.userId;
  QueueSchema.createUser({userId: userId, userName: userName})
    .then(function(results){
      res.status(200)
      .send(results)
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
  QueueSchema.addToQueue(queueId,addSong)
  .then(function(results){
    res.status(200)
    .send(results)
  })
  .catch(function(error) {
    res.status(500)
    .send(error)
  });
});
// router.get('/getQueue', function(req,res) {
//   // QueueSchema.getQueue('userId: user_id, playlistId: playlist_id')
//     // .then(function(results){
//       res.status(200)
//         .send('fuck you node ');
//     // })
//     // .catch(function(error){
//     //   res.status(500)
//     //     .send(error)
//     // });
// });
//
// router.post('/createQueue', function(req, res) {
//   let userId = req.body.userId;
//   let queueId = req.body.queueId;
//   let playlistName = req.body.playlistName;
//   let playlistId = req.body.playlist.playlistId;
//   let songId = req.body.playlist.songId;
//   let songName = req.body.playlist.songName;
//   let albumName = req.body.playlist.albumName;
//   let artistName = req.body.playlist.artistName;
//     QueueSchema.createQueue({userId: userId, queueId: queueId, playlistName: playlistName, playlistId: playlistId, songId: songId, songName: songName, albumName: albumName, artistName: artistName})
//       .then(function(results){
//         res.status(200)
//           .send(results);
//       })
//       .catch(function(error){
//         res.status(500)
//           .send(error)
//       });
// });
//
// router.post('/addToQueue', function(req, res) {
//   let playlist_id = req.body.playlist.playlistId;
//   let user_id = req.body.userId;
//   let songName = 'spotify:track:{trackId}';
//     QueueSchema.addToQueue({userId: user_id, playlistId: playlist_id, track: songName })
//       .then(function(results) {
//         res.status(200)
//           .send(results);
//       })
//       .catch(function(error) {
//         res.status(500)
//           .send(error)
//       });
// });
//
// router.delete('/removeFromQueue', function(req, res) {
//   let songId = req.body.playlist.playlistId;
//   let user_id = req.body.userId;
//   let songName = 'spotify:track:{trackId}';
//     QueueSchema.removeFromQueue({user_id: userId, playlistId: playlist_id, track: songName})
//       .then(function(results) {
//         res.status(200)
//           .send(results);
//       })
//       .catch(function(error) {
//         res.status(500)
//           .send(error)
//       });
// });
//

export default router;
